import { createBackboneDefinition } from '../base/definitions';
import { IHealthcareServiceEligibility, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { HealthcareServiceEligibility } from '../../../../r4/models';

/**
 * @description The model fields for the HealthcareServiceEligibility model
 */
const modelFields = createBackboneDefinition<IHealthcareServiceEligibility>([
  { name: 'code', type: 'CodeableConcept', isArray: false, isRequired: false },
  { name: 'comment', type: 'markdown', isArray: false, isRequired: false },
  { name: '_comment', type: 'Element', isArray: false, isRequired: false },
]);

/**
 * @description Validates the HealthcareServiceEligibility model
 * @param dataToValidate - the HealthcareServiceEligibility model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function HealthcareServiceEligibilityValidator<T extends IHealthcareServiceEligibility>(
  dataToValidate: T,
  path = 'HealthcareServiceEligibility',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new HealthcareServiceEligibility());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
  });
}
