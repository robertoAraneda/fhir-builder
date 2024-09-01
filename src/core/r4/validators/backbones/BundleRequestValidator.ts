import { createBackboneDefinition } from '../base/definitions';
import { IBundleRequest, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { BundleRequest } from '../../../../r4/models';

/**
 * @description The model fields for the BundleRequest model
 */
const modelFields = createBackboneDefinition<IBundleRequest>([
  {
    name: 'method',
    type: 'code',
    isArray: false,
    isRequired: true,
    enumValues: ['GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'PATCH'],
  },
  { name: '_method', type: 'Element', isArray: false, isRequired: false },
  { name: 'url', type: 'uri', isArray: false, isRequired: true },
  { name: '_url', type: 'Element', isArray: false, isRequired: false },
  { name: 'ifNoneMatch', type: 'string', isArray: false, isRequired: false },
  { name: '_ifNoneMatch', type: 'Element', isArray: false, isRequired: false },
  { name: 'ifModifiedSince', type: 'instant', isArray: false, isRequired: false },
  { name: '_ifModifiedSince', type: 'Element', isArray: false, isRequired: false },
  { name: 'ifMatch', type: 'string', isArray: false, isRequired: false },
  { name: '_ifMatch', type: 'Element', isArray: false, isRequired: false },
  { name: 'ifNoneExist', type: 'string', isArray: false, isRequired: false },
  { name: '_ifNoneExist', type: 'Element', isArray: false, isRequired: false },
]);

/**
 * @description Validates the BundleRequest model
 * @param dataToValidate - the BundleRequest model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function BundleRequestValidator<T extends IBundleRequest>(
  dataToValidate: T,
  path = 'BundleRequest',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new BundleRequest());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
  });
}
