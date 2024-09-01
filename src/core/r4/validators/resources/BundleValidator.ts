import { createResourceDefinition } from '../base/definitions';
import { IBundle, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { Bundle } from '../../../../r4/models';

/**
 * @description The model fields for the Bundle model
 */
const modelFields = createResourceDefinition<IBundle>([
  { name: 'identifier', type: 'Identifier', isArray: false, isRequired: false },
  {
    name: 'type',
    type: 'code',
    isArray: false,
    isRequired: true,
    enumValues: [
      'document',
      'message',
      'transaction',
      'transaction-response',
      'batch',
      'batch-response',
      'history',
      'searchset',
      'collection',
    ],
  },
  { name: '_type', type: 'Element', isArray: false, isRequired: false },
  { name: 'timestamp', type: 'instant', isArray: false, isRequired: false },
  { name: '_timestamp', type: 'Element', isArray: false, isRequired: false },
  { name: 'total', type: 'unsignedInt', isArray: false, isRequired: false },
  { name: '_total', type: 'Element', isArray: false, isRequired: false },
  { name: 'link', type: 'BundleLink', isArray: true, isRequired: false },
  { name: 'entry', type: 'BundleEntry', isArray: true, isRequired: false },
  { name: 'signature', type: 'Signature', isArray: false, isRequired: false },
]);

/**
 * @description Validates the Bundle model
 * @param dataToValidate - the Bundle model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function BundleValidator<T extends IBundle>(
  dataToValidate: T,
  path = 'Bundle',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new Bundle());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
  });
}
