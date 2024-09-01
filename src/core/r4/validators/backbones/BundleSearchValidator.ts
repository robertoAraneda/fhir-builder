import { createBackboneDefinition } from '../base/definitions';
import { IBundleSearch, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { BundleSearch } from '../../../../r4/models';

/**
 * @description The model fields for the BundleSearch model
 */
const modelFields = createBackboneDefinition<IBundleSearch>([
  { name: 'mode', type: 'code', isArray: false, isRequired: false, enumValues: ['match', 'include', 'outcome'] },
  { name: '_mode', type: 'Element', isArray: false, isRequired: false },
  { name: 'score', type: 'decimal', isArray: false, isRequired: false },
  { name: '_score', type: 'Element', isArray: false, isRequired: false },
]);

/**
 * @description Validates the BundleSearch model
 * @param dataToValidate - the BundleSearch model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function BundleSearchValidator<T extends IBundleSearch>(
  dataToValidate: T,
  path = 'BundleSearch',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new BundleSearch());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
  });
}
