import { InvalidFieldException } from '../../../commons/exceptions/invalid-field.exception';
import { RequiredException } from '../../../commons/exceptions/required.exception';
import { AttributeDefinition } from './definitions';
import { fhirR4Types, InternalValidator } from './internal.validator';
import { PeriodValidator } from '../datatypes/period.validator';
import { IReference, ResourceType } from 'fhirtypes/dist/r4';
import { ReferenceException } from '../../../commons/exceptions/reference.exception';
import { resourceListUtil } from '../../../commons/utils/resource-list.util';
import { RemoveUndefinedAttributes } from '../../utils/remove-undefined-attributes.util';

export const BaseValidator = <
  T extends {
    [key: string]: any;
  },
>(
  data: T | T[],
  definitions: ReadonlyArray<AttributeDefinition<T>>,
  path: string,
): void => {
  const cleanData = RemoveUndefinedAttributes(data);
  if (!cleanData) {
    return;
  }

  // Check if payload has additional fields
  validateAdditionalFields(cleanData, definitions, path);

  // Check if payload has required fields
  validateRequiredFieldByDefinition(cleanData, definitions, path);

  for (const dataKey in cleanData) {
    if (!cleanData.hasOwnProperty(dataKey)) {
      continue;
    }
    const definition = definitions.find((definition) => definition.name === dataKey);
    if (!definition) {
      throw new Error(`No definition found for ${dataKey}`);
    }

    if (definition.type === 'Reference') {
      ValidateReferenceFormat(cleanData[dataKey], definition.referenceValues, `${path}.${String(definition.name)}`);
    }

    // Check if the field is a valid enum value
    validateEnumValues(cleanData[dataKey], definition, path);

    // check if the field is an array
    validateArray(cleanData[dataKey], definition, path);

    // check if the field is a datatype or backbone element
    validateObject(cleanData[dataKey], definition, path);
  }
};

export const validateAdditionalFields = <T>(
  data: any,
  definitions: ReadonlyArray<AttributeDefinition<T>>,
  path: string,
) => {
  const properties = Object.keys(data);
  const additionalFields = properties.filter(
    (property) => !definitions.find((definition) => definition.name === property),
  );

  if (additionalFields.length > 0) {
    throw new InvalidFieldException(path, additionalFields);
  }
};

export const validateRequiredFieldByDefinition = <T>(
  data: T,
  definitions: ReadonlyArray<AttributeDefinition<T>>,
  path: string,
) => {
  for (const definition of definitions) {
    if (definition.isRequired && !hasValue(data[definition.name])) {
      throw new RequiredException(`${path}.${String(definition.name)}`, `${String(definition.name)}`);
    }
  }
};

/**
 * Validates if the data contains valid enum values according to the definition.
 * @param data - The data to be validated.
 * @param definition - The attribute definition to validate against.
 * @param path - The path to the data being validated (used for error messages).
 * @throws Error if the data does not match the allowed enum values.
 */
export const validateEnumValues = <T>(data: string, definition: AttributeDefinition<T>, path: string) => {
  if (!definition.enumValues || definition.isArray) return;

  if (!definition.enumValues.includes(data)) {
    throw new Error(`Field must be one of [${definition.enumValues.join(', ')}] in ${path}.${String(definition.name)}`);
  }
};

/**
 * Validates if the data is an array when the definition requires it to be an array.
 * @param data - The data to be validated.
 * @param definition - The attribute definition to validate against.
 * @param path - The path to the data being validated (used for error messages).
 * @throws Error if the data is not an array when it should be.
 */
export const validateArray = <T>(data: any, definition: AttributeDefinition<T>, path: string) => {
  // check if the field is an array
  if (definition.isArray && data && !Array.isArray(data)) {
    throw new Error(`Field ${String(definition.name)} must be an array in ${path}`);
  }
};

export const validateObject = <T>(data: T | T[], definition: AttributeDefinition<T>, path: string) => {
  if (!data) {
    return;
  }

  const validator = parseValidator(definition.type as fhirR4Types);

  if (!validator) {
    throw new Error(`No validator found for ${String(definition.type)}`);
  }

  if (Array.isArray(data)) {
    data.forEach((item, index) => {
      validator(item, `${path}.${String(definition.name)}[${index}]`);
    });
    return;
  }
  validator(data, `${path}.${String(definition.name)}`);
};

/**
 * @description Validates the format of a reference field.
 * @param value - The reference value to be validated.
 * @param resources - The list of valid resource types or 'all' to allow all resource types.
 * @param path - The path to the data being validated (used for error messages).
 * @throws ReferenceException if the reference format is invalid or the resource type is not allowed.
 */
export const ValidateReferenceFormat = (
  value: IReference,
  resources: ResourceType[] | 'all' | null = null,
  path?: string,
): void => {
  const { reference } = value;

  // Exit if reference or resources are not provided
  if (!reference || !resources) return;

  // Determine the valid resource types
  const internalResources: ResourceType[] = resources === 'all' ? (resourceListUtil as ResourceType[]) : resources;

  // Extract the resource type from the reference string
  const [resourceType] = reference.split('/');
  const resourceTypeForCheck = resourceType as ResourceType;

  // Check if the resource type is allowed
  if (!internalResources.includes(resourceTypeForCheck)) {
    throw new ReferenceException(resourceType, resources, `${path}.reference`);
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

export function parseValidator(name: fhirR4Types): (value: any, path: string) => void {
  switch (name) {
    // TODO check why this is not working
    case 'Period':
      return PeriodValidator;
    default:
      return InternalValidator[name];
  }
}
