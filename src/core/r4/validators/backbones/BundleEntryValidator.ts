import { createBackboneDefinition } from '../base/definitions';
import { IBundleEntry, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { BundleEntry } from '../../../../r4/models';

/**
 * @description The model fields for the BundleEntry model
 */
const modelFields = createBackboneDefinition<IBundleEntry>([
  { name: 'link', type: 'BundleLink', isArray: true, isRequired: false },
  { name: 'fullUrl', type: 'uri', isArray: false, isRequired: false },
  { name: '_fullUrl', type: 'Element', isArray: false, isRequired: false },
  { name: 'resource', type: 'Resource', isArray: false, isRequired: false },
  { name: 'search', type: 'BundleSearch', isArray: false, isRequired: false },
  { name: 'request', type: 'BundleRequest', isArray: false, isRequired: false },
  { name: 'response', type: 'BundleResponse', isArray: false, isRequired: false },
]);

/**
 * @description Validates the BundleEntry model
 * @param dataToValidate - the BundleEntry model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function BundleEntryValidator<T extends IBundleEntry>(
  dataToValidate: T,
  path = 'BundleEntry',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new BundleEntry());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
  });
}
