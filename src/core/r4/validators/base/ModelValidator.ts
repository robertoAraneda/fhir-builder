import { BaseValidator } from './BaseValidator';
import { AttributeDefinition } from './definitions';
import { RemoveUndefinedAttributes } from '../../utils/remove-undefined-attributes.util';
import { IOperationOutcomeIssue } from 'fhirtypes/dist/r4';

/**
 * @description Validates a model based on the model definition
 * @param options - the options to validate the model
 * @param options.dataToValidate - the model to validate
 * @param options.path - the path to the model
 * @param options.modelDefinition - the model definition
 * @param options.errors - the errors array
 * @param options.additionalValidation - additional validation functions
 * @returns {void}
 */
export const ModelValidator = <T extends object>(options: {
  dataToValidate: T;
  path: string;
  modelDefinition: readonly AttributeDefinition<T>[];
  errors: IOperationOutcomeIssue[];
  additionalValidation?: ((data: T, path: string, errors: IOperationOutcomeIssue[]) => void)[];
}): void => {
  const { dataToValidate, path, modelDefinition, additionalValidation } = options;

  if (typeof dataToValidate !== 'object') {
    throw new Error(`Expected data to be of type object, received ${typeof dataToValidate}`);
  }

  const cleanData = RemoveUndefinedAttributes(dataToValidate);

  if (!options.errors) options.errors = [];

  BaseValidator(cleanData, modelDefinition, path, options.errors);

  if (additionalValidation?.length) {
    additionalValidation.forEach((validation) => validation(cleanData, path, options.errors));
  }
};
