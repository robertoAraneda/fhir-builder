import { createBackboneDefinition } from '../base/definitions';
import { ICoverageException, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { CoverageException } from '../../../../r4/models';

/**
 * @description The model fields for the CoverageException model
 */
const modelFields = createBackboneDefinition<ICoverageException>([
  { name: 'type', type: 'CodeableConcept', isArray: false, isRequired: true },
  { name: 'period', type: 'Period', isArray: false, isRequired: false },
]);

/**
 * @description Validates the CoverageException model
 * @param dataToValidate - the CoverageException model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function CoverageExceptionValidator<T extends ICoverageException>(
  dataToValidate: T,
  path = 'CoverageException',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new CoverageException());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
  });
}
