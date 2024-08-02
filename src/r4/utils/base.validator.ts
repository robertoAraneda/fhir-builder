import { InvalidFieldException } from '../../commons/exceptions/invalid-field.exception';
import { RequiredException } from '../../commons/exceptions/required.exception';
import { AttributeDefinition } from './resources';
import { InternalValidator } from './internal.validator';
import { PeriodValidator } from '../validators/datatypes/period.validator';
import { ReferenceValidator } from '../validators/datatypes/reference.validator';

export const baseValidator = <
  T extends {
    [key: string]: any;
  },
>(
  data: T,
  definitions: ReadonlyArray<AttributeDefinition<T>>,
  path: string,
): void => {
  definitions.forEach((definition) => {
    // Check if has additional fields except for Resource
    if (definition.type !== 'Resource' && !Array.isArray(data)) {
      const properties = Object.keys(data);
      const additionalFields = properties.filter(
        (property) => !definitions.find((definition) => definition.name === property),
      );

      if (additionalFields.length > 0) {
        throw new InvalidFieldException(path, additionalFields.join(', '), data);
      }
    }

    // Check if the field is required
    if (definition.isRequired && !hasValue(data[definition.name])) {
      throw new RequiredException(path, String(definition.name), data);
    }

    // Check if the field is a valid enum value
    if (definition.enumValues && data[definition.name] && !definition.isArray) {
      const enumString = data[definition.name] as string;

      if (!definition.enumValues.includes(enumString)) {
        throw new Error(
          `Field must be one of [${definition.enumValues.join(', ')}] in ${path}.${String(definition.name)}`,
        );
      }
    }

    // check if the field is an array
    if (definition.isArray && data[definition.name] && !Array.isArray(data[definition.name])) {
      throw new Error(`Field ${String(definition.name)} must be an array in ${path}`);
    }

    if (data[definition.name]) {
      if (definition.type === 'Reference') {
        ReferenceValidator(data[definition.name], definition.referenceValues, `${path}.${String(definition.name)}`);
      } else {
        let validator;
        if (definition.type === 'Period') {
          validator = PeriodValidator;
        } else {
          validator = InternalValidator[definition.type] as (data: any, path: string) => void;
        }
        if (validator) {
          const dataToValidate = data[definition.name];
          validator(dataToValidate, `${path}.${String(definition.name)}`);
        } else {
          throw new Error(`No validator found for ${definition.type}`);
        }
      }
    }

    if (definition.isArray && data[definition.name] && Array.isArray(data[definition.name])) {
      baseValidator<T>(data[definition.name] as T, definitions, `${path}.${String(definition.name)}`);
    }
  });
};

function hasValue(value: any): boolean {
  return value !== null && value !== undefined && value !== '';
}
