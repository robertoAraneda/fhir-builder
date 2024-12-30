import { AttributeDefinition } from './definitions';
import { ICodeableConcept, IReference, ResourceTypesType } from 'fhirtypes/dist/r4';
import { resourceListUtil } from '../../../commons/utils/resource-list.util';
import { RemoveUndefinedAttributes } from '../../utils/remove-undefined-attributes.util';
import { PeriodValidator } from '../datatypes';
import { OperationOutcomeIssueException } from '../../../commons/exceptions/operation-outcome.exception';
import type { BackboneElementType, DataTypeType } from 'fhirtypes/dist/r4/types';
import { DatatypesValidator } from './DatatypesValidator';
import { PrimitivesValidator } from './PrimitivesValidator';
import { InternalResourceValidator } from './ResourcesValidator';
import { BackbonesValidator } from './BackbonesValidator';

export type fhirR4Types =
  | DataTypeType
  | ResourceTypesType
  | BackboneElementType
  // TODO - this is a placeholder for now
  | 'EpisodeOfCareStatusHistory'
  | 'EpisodeOfCareDiagnosis'
  | 'Repeat'
  | 'CoverageClass'
  | 'CoverageCostToBeneficiary'
  | 'CoverageException';

export const InternalValidator: Record<string, any> = {
  ...DatatypesValidator,
  ...PrimitivesValidator,
  ...InternalResourceValidator,
  ...BackbonesValidator,
};

export interface ValidationError {
  error?: string;
  message?: string;
  path?: string;
  value?: any;
  [key: string]: any;
}

/**
 * @description Validates a model based on the model definition
 * @param data - the model to validate
 * @param definitions - the model definition
 * @param path - the path to the model
 * @param errors - the errors array
 * @returns {void}
 */
export const BaseValidator = <T extends Record<string, any>>(
  data: T | T[],
  definitions: readonly AttributeDefinition<T>[],
  path: string,
  errors: ValidationError[],
): void => {
  const cleanData = RemoveUndefinedAttributes(data);
  if (!cleanData) {
    return;
  }

  //const errors: ValidationError[] = [];

  // Check if payload has additional fields
  validateAdditionalFields(cleanData, definitions, path, errors);

  // Check if payload has required fields
  validateRequiredFieldByDefinition(cleanData, definitions, path, errors);

  for (const dataKey in cleanData) {
    if (!Object.prototype.hasOwnProperty.call(cleanData, dataKey)) {
      continue;
    }

    const definition = definitions.find((definition) => definition.name === dataKey);
    if (!definition) {
      // throw new Error(`No definition found for ${dataKey}`);
      continue;
    }

    // TODO: Remove this when the contained field is implemented
    if (dataKey === 'contained') {
      //extract resource type
      const resourceType = cleanData[dataKey].resourceType;
      const validator = InternalValidator[resourceType];
      if (!validator) {
        // TODO fix this
        continue;
      }
      validator(cleanData[dataKey], `${path}.${String(definition.name)}`, errors);
      continue;
    }

    if (definition.type === 'Reference') {
      ValidateReferenceFormat(
        cleanData[dataKey],
        definition.referenceTypes,
        `${path}.${String(definition.name)}`,
        errors,
      );
    }

    if (definition.type === 'Resource') {
      //extract resource type
      const resourceType = cleanData[dataKey].resourceType;
      const validator = InternalValidator[resourceType];
      // TODO fix this
      if (!validator) continue;
      validator(cleanData[dataKey], `${path}.${String(definition.name)}`, errors);
      continue;
    }

    // Check if has value
    if (!hasValue(cleanData[dataKey])) {
      errors.push(
        new OperationOutcomeIssueException({
          severity: 'error',
          code: 'invariant',
          diagnostics: `+ Rule (ele-1). All FHIR elements must have a @value or children`,
          details: {
            text: `Path: ${path}.${String(definition.name)}. Value: ${cleanData[dataKey]}`,
          },
        }),
      );
    }

    if (definition.enumValues && definition.enumValues.length > 0) {
      // Check if the field is a valid enum value
      validateEnumValues(cleanData[dataKey], definition, path, errors);
    }

    if (definition.isArray) {
      // check if the field is an array
      validateArray(cleanData[dataKey], definition, path, errors);
    }

    // check if the field is a datatype or backbone element
    validateObject(cleanData[dataKey], definition, path, errors);
  }
};

export const validateAdditionalFields = <T>(
  data: any,
  definitions: readonly AttributeDefinition<T>[],
  path: string,
  errors: ValidationError[],
) => {
  const properties = Object.keys(data);
  const additionalFields = properties.filter(
    (property) => !definitions.find((definition) => definition.name === property),
  );

  if (additionalFields.length > 0) {
    errors.push(
      new OperationOutcomeIssueException({
        severity: 'error',
        code: 'invalid',
        diagnostics: `Invalid fields have been found.`,
        details: {
          text: `Path: ${path}. Additional fields: ${additionalFields.join(', ')}`,
        },
      }),
    );
    // throw new InvalidFieldException(path, additionalFields);
  }
};

export const validateRequiredFieldByDefinition = <T>(
  data: T,
  definitions: readonly AttributeDefinition<T>[],
  path: string,
  errors: ValidationError[],
) => {
  for (const definition of definitions) {
    if (definition.isRequired && !hasValue(data[definition.name])) {
      errors.push(
        new OperationOutcomeIssueException({
          severity: 'error',
          code: 'required',
          diagnostics: `Field ${String(definition.name)} is required`,
          details: {
            text: `Path: ${path}.${String(definition.name)}. Value: ${data[definition.name]}`,
          },
        }),
      );
      // throw new RequiredException(`${path}.${String(definition.name)}`, `${String(definition.name)}`);
    }
  }
};

/**
 * Validates if the data contains valid enum values according to the definition.
 * @param data - The data to be validated.
 * @param definition - The attribute definition to validate against.
 * @param path - The path to the data being validated (used for error messages).
 * @param errors
 * @throws Error if the data does not match the allowed enum values.
 */
export const validateEnumValues = <T>(
  data: string,
  definition: AttributeDefinition<T>,
  path: string,
  errors: ValidationError[],
) => {
  if (!definition.enumValues || definition.isArray) return;

  if (definition.type === 'CodeableConcept') {
    const cc = data as ICodeableConcept;

    if (cc.coding && cc.coding?.length > 0) {
      cc.coding.forEach((coding, index) => {
        if (coding.code && !definition.enumValues?.includes(coding.code)) {
          errors.push(
            new OperationOutcomeIssueException({
              severity: 'error',
              code: 'code-invalid',
              diagnostics: `Code must be one of [${definition.enumValues?.join(', ')}]`,
              details: {
                text: `Path: ${path}.${String(definition.name)}.coding[${index}].code`,
              },
            }),
          );
        }
      });
    }
  } else {
    if (!definition.enumValues.includes(data)) {
      errors.push(
        new OperationOutcomeIssueException({
          severity: 'error',
          code: 'code-invalid',
          diagnostics: `Code must be one of [${definition.enumValues.join(', ')}]`,
          details: {
            text: `Path: ${path}.${String(definition.name)}`,
          },
        }),
      );
      // throw new Error(`Field must be one of [${definition.enumValues.join(', ')}] in ${path}.${String(definition.name)}`);
    }
  }
};

/**
 * Validates if the data is an array when the definition requires it to be an array.
 * @param data - The data to be validated.
 * @param definition - The attribute definition to validate against.
 * @param path - The path to the data being validated (used for error messages).
 * @param errors
 * @throws Error if the data is not an array when it should be.
 */
export const validateArray = <T>(
  data: any,
  definition: AttributeDefinition<T>,
  path: string,
  errors: ValidationError[],
) => {
  // check if the field is an array
  if (definition.isArray && data && !Array.isArray(data)) {
    errors.push(
      new OperationOutcomeIssueException({
        severity: 'error',
        code: 'invalid',
        diagnostics: `Field ${String(definition.name)} must be an array`,
        details: {
          text: `Path: ${path}.${String(definition.name)}. Value: ${data}`,
        },
      }),
    );
    // throw new Error(`Field ${String(definition.name)} must be an array in ${path}`);
  }
};

export const validateObject = <T>(
  data: T | T[],
  definition: AttributeDefinition<T>,
  path: string,
  errors: ValidationError[],
) => {
  if (!data) {
    return;
  }

  const validator = parseValidator(definition.type as fhirR4Types);

  if (!validator) {
    errors.push(
      new OperationOutcomeIssueException({
        severity: 'fatal',
        code: 'exception',
        diagnostics: `No validator found for ${String(definition.type)}`,
        details: {
          text: `Path: ${path}.${String(definition.name)}. Value: ${data}`,
        },
      }),
    );
    //throw new Error(`No validator found for ${String(definition.type)}`);
    return;
  }

  if (Array.isArray(data)) {
    data.forEach((item, index) => {
      validator(item, `${path}.${String(definition.name)}[${index}]`, errors);
    });
    return;
  }
  validator(data, `${path}.${String(definition.name)}`, errors);
};

/**
 * @description Validates the format of a reference field.
 * @param value - The reference value to be validated.
 * @param resources - The list of valid resource params-types or 'all' to allow all resource params-types.
 * @param path - The path to the data being validated (used for error messages).
 * @param errors
 * @throws ReferenceException if the reference format is invalid or the resource type is not allowed.
 */
export const ValidateReferenceFormat = (
  value: IReference | IReference[],
  resources: (ResourceTypesType | 'Any')[] | null = null,
  path: string,
  errors: ValidationError[],
): void => {
  if (Array.isArray(value)) {
    value.forEach((val, index) => {
      ValidateReferenceFormat(val, resources, `${path}[${index}]`, errors);
    });
    return;
  }

  const { reference } = value;
  const referenceKeys = ['reference', 'type', 'identifier', 'display', '_display', '_reference', '_type'];

  // Exit if reference or resources are not provided
  if (!reference || !resources) return;

  // Determine the valid resource params-types
  const internalResources: ResourceTypesType[] = resources.includes('Any')
    ? (resourceListUtil as ResourceTypesType[])
    : (resources as ResourceTypesType[]);

  if (reference.includes('?')) {
    const [resourceType, ...query] = reference.split('?');
    const resourceTypeForCheck = resourceType as ResourceTypesType;

    // Check if the resource type is allowed
    if (!internalResources.includes(resourceTypeForCheck)) {
      errors.push(
        new OperationOutcomeIssueException({
          severity: 'error',
          code: 'invalid',
          diagnostics: `Invalid reference resource type. Reference must be one of [${internalResources.join(', ')}].`,
          details: {
            text: `Path: ${path}.reference. Value: ${reference}`,
          },
        }),
      );
    }

    const [referenceKey, value] = query[0].split('=');
    if (!value) {
      errors.push(
        new OperationOutcomeIssueException({
          severity: 'error',
          code: 'invalid',
          diagnostics: `Invalid reference query. Reference query must be in the format 'key=value'.`,
          details: {
            text: `Path: ${path}.reference. Value: ${reference}`,
          },
        }),
      );
    }

    if (!referenceKeys.includes(referenceKey)) {
      errors.push(
        new OperationOutcomeIssueException({
          severity: 'error',
          code: 'invalid',
          diagnostics: `Invalid reference query key. Reference query key must be one of [${referenceKeys.join(', ')}].`,
          details: {
            text: `Path: ${path}.reference. Value: ${reference}`,
          },
        }),
      );
    }
  }

  if (reference.includes('/')) {
    // Extract the resource type from the reference string
    const [resourceType, id] = reference.split('/');

    if (!id) {
      return;
    }

    const resourceTypeForCheck = resourceType as ResourceTypesType;

    // Check if the resource type is allowed
    if (!internalResources.includes(resourceTypeForCheck)) {
      errors.push(
        new OperationOutcomeIssueException({
          severity: 'error',
          code: 'invalid',
          diagnostics: `Invalid reference resource type. Reference must be one of [${internalResources.join(', ')}].`,
          details: {
            text: `Path: ${path}.reference. Value: ${reference}`,
          },
        }),
      );
      // throw new ReferenceException(resourceType, resources, `${path}.reference`);
    }
  }
};

/**
 * @description Checks if a value is not null, undefined, an empty string, an empty array, or an empty object.
 * @param value - The value to be checked.
 * @returns True if the value is valid (not null, undefined, or empty), otherwise false.
 */
export function hasValue(value: any): boolean {
  if (value === null || value === undefined) return false; // Checks for null and undefined
  if (typeof value === 'string' && value.trim() === '') return false; // Checks for empty strings
  if (Array.isArray(value) && value.length === 0) return false; // Checks for empty arrays
  return !(typeof value === 'object' && Object.keys(value).length === 0); // Checks for empty objects
}

export function parseValidator(name: fhirR4Types): (value: any, path: string, errors: any[]) => void {
  switch (name) {
    // TODO check why this is not working
    case 'Period':
      return PeriodValidator;
    default:
      return InternalValidator[name];
  }
}
