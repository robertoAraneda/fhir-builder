import { createBackboneDefinition } from '../base/definitions';
import { IBundleResponse, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { BundleResponse } from '../../../../r4/models';

/**
 * @description The model fields for the BundleResponse model
 */
const modelFields = createBackboneDefinition<IBundleResponse>([
  { name: 'status', type: 'string', isArray: false, isRequired: true },
  { name: '_status', type: 'Element', isArray: false, isRequired: false },
  { name: 'location', type: 'uri', isArray: false, isRequired: false },
  { name: '_location', type: 'Element', isArray: false, isRequired: false },
  { name: 'etag', type: 'string', isArray: false, isRequired: false },
  { name: '_etag', type: 'Element', isArray: false, isRequired: false },
  { name: 'lastModified', type: 'instant', isArray: false, isRequired: false },
  { name: '_lastModified', type: 'Element', isArray: false, isRequired: false },
  { name: 'outcome', type: 'Resource', isArray: false, isRequired: false },
]);

/**
 * @description Validates the BundleResponse model
 * @param dataToValidate - the BundleResponse model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function BundleResponseValidator<T extends IBundleResponse>(
  dataToValidate: T,
  path = 'BundleResponse',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new BundleResponse());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
  });
}
