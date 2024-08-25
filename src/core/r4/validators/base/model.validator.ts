import { BaseValidator } from './base.validator';
import { AttributeDefinition } from './definitions';
import assert from 'node:assert';
import { RemoveUndefinedAttributes } from '../../utils/remove-undefined-attributes.util';
import { IOperationOutcomeIssue } from 'fhirtypes/dist/r4';

export const ModelValidator = <T extends object>(options: {
  dataToValidate: T;
  path: string;
  modelDefinition: readonly AttributeDefinition<T>[];
  errors: IOperationOutcomeIssue[];
  additionalValidation?: ((data: T, path: string, errors: IOperationOutcomeIssue[]) => void)[];
}) => {
  const { dataToValidate, path, modelDefinition, additionalValidation } = options;
  assert(
    typeof dataToValidate === 'object',
    `Expected Attachment to be of type object, received ${typeof dataToValidate}`,
  );

  const cleanData = RemoveUndefinedAttributes(dataToValidate);

  if (!options.errors) options.errors = [];

  BaseValidator(cleanData, modelDefinition, path, options.errors);

  if (additionalValidation?.length) {
    additionalValidation.forEach((validation) => validation(cleanData, path, options.errors));
  }
};
