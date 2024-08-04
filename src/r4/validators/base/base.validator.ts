import { InvalidFieldException } from '../../../commons/exceptions/invalid-field.exception';
import { RequiredException } from '../../../commons/exceptions/required.exception';
import { AttributeDefinition } from './definitions';
import { InternalValidator, ValidatorType } from './internal.validator';
import { PeriodValidator } from '../datatypes/period.validator';
import { ReferenceValidator } from '../datatypes/reference.validator';
import { IReference, ResourceType } from 'fhirtypes/dist/r4';
import { RemoveUndefinedAttributes } from '../../utils/remove-undefined-attributes.util';
import { ReferenceException } from '../../../commons/exceptions/reference.exception';
import { resourceListUtil } from '../../../commons/utils/resource-list.util';

export const BaseValidator = <
  T extends {
    [key: string]: any;
  },
>(
  data: T,
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

const validateAdditionalFields = <T>(data: any, definitions: ReadonlyArray<AttributeDefinition<T>>, path: string) => {
  const properties = Object.keys(data);
  const additionalFields = properties.filter(
    (property) => !definitions.find((definition) => definition.name === property),
  );

  if (additionalFields.length > 0) {
    throw new InvalidFieldException(path, additionalFields);
  }
};

const validateRequiredFieldByDefinition = <T>(
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

const validateEnumValues = <T>(data: string, definition: AttributeDefinition<T>, path: string) => {
  if (definition.enumValues && !definition.isArray) {
    if (!definition.enumValues.includes(data)) {
      throw new Error(
        `Field must be one of [${definition.enumValues.join(', ')}] in ${path}.${String(definition.name)}`,
      );
    }
  }
};

const validateArray = <T>(data: any, definition: AttributeDefinition<T>, path: string) => {
  // check if the field is an array
  if (definition.isArray && data && !Array.isArray(data)) {
    throw new Error(`Field ${String(definition.name)} must be an array in ${path}`);
  }
};

const validateObject = <T>(data: any, definition: AttributeDefinition<T>, path: string) => {
  if (!data) {
    return;
  }

  const validator = parseValidator(definition.type);

  if (validator) {
    validator(data, `${path}.${String(definition.name)}`);
  } else {
    throw new Error(`No validator found for ${String(definition.type)}`);
  }
};

const ValidateReferenceFormat = (
  value: IReference,
  resources: ResourceType[] | 'all' | null = null,
  path?: string,
): void => {
  const { reference } = value;
  if (!reference) return;
  if (!resources) return;

  let internalResources = [];
  if (resources === 'all') {
    internalResources = resourceListUtil as ResourceType[];
  } else {
    internalResources = resources;
  }

  const [resourceType] = reference.split('/');

  const resourceTypeForCheck = resourceType as ResourceType;

  if (!internalResources.includes(resourceTypeForCheck)) {
    throw new ReferenceException(resourceType, resources, `${path}.reference`);
  }
};

function hasValue(value: any): boolean {
  return value !== null && value !== undefined && value !== '';
}

function parseValidator(name: keyof ValidatorType): (value: any, path: string) => void {
  switch (name) {
    // TODO check why this is not working
    case 'Period':
      return PeriodValidator;
    default:
      return InternalValidator[name];
  }
}
