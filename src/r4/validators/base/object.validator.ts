import { ValidatorType } from './internal.validator';
import { BaseValidator, parseValidator } from './base.validator';
import { ValReturnType } from './datatype.validator';
import { AttributeDefinition } from './definitions';
import assert from 'node:assert';
import { RemoveUndefinedAttributes } from '../../utils/remove-undefined-attributes.util';

export const conformanceValidation = <T>(args: T, validatorName: keyof ValidatorType): ValReturnType => {
  try {
    const validator = parseValidator(validatorName);

    validator(args, `${validatorName}`);
    return { error: null };
  } catch (e: any) {
    return { error: e.message };
  }
};

export const validator = <T extends {}>(options: {
  dataToValidate: T;
  path: string;
  modelDefinition: ReadonlyArray<AttributeDefinition<T>>;
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
