import { BaseValidator } from './base.validator';
import { AttributeDefinition } from './definitions';
import assert from 'node:assert';
import { RemoveUndefinedAttributes } from '../../utils/remove-undefined-attributes.util';

export const ModelValidator = <T extends object>(options: {
  dataToValidate: T;
  path: string;
  modelDefinition: readonly AttributeDefinition<T>[];
  additionalValidation?: ((data: T, path: string) => void)[];
}) => {
  const { dataToValidate, path, modelDefinition, additionalValidation } = options;
  assert(
    typeof dataToValidate === 'object',
    `Expected Attachment to be of type object, received ${typeof dataToValidate}`,
  );

  const cleanData = RemoveUndefinedAttributes(dataToValidate);

  BaseValidator(cleanData, modelDefinition, path);
  if (additionalValidation?.length) additionalValidation.forEach((validation) => validation(cleanData, path));
};
