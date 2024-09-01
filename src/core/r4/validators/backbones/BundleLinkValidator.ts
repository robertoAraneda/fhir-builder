import { createBackboneDefinition } from '../base/definitions';
import { IBundleLink, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { BundleLink } from '../../../../r4/models';

/**
 * @description The model fields for the BundleLink model
 */
const modelFields = createBackboneDefinition<IBundleLink>([
  { name: 'relation', type: 'string', isArray: false, isRequired: true },
  { name: '_relation', type: 'Element', isArray: false, isRequired: false },
  { name: 'url', type: 'uri', isArray: false, isRequired: true },
  { name: '_url', type: 'Element', isArray: false, isRequired: false },
]);

/**
 * @description Validates the BundleLink model
 * @param dataToValidate - the BundleLink model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function BundleLinkValidator<T extends IBundleLink>(
  dataToValidate: T,
  path = 'BundleLink',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new BundleLink());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
  });
}
