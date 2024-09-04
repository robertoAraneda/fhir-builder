import { createBackboneDefinition } from '../base/definitions';
import { IHealthcareServiceNotAvailable, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { HealthcareServiceNotAvailable } from '../../../../r4/models';

/**
 * @description The model fields for the HealthcareServiceNotAvailable model
 */
const modelFields = createBackboneDefinition<IHealthcareServiceNotAvailable>([
  { name: 'description', type: 'string', isArray: false, isRequired: true },
  { name: '_description', type: 'Element', isArray: false, isRequired: false },
  { name: 'during', type: 'Period', isArray: false, isRequired: false },
]);

/**
 * @description Validates the HealthcareServiceNotAvailable model
 * @param dataToValidate - the HealthcareServiceNotAvailable model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function HealthcareServiceNotAvailableValidator<T extends IHealthcareServiceNotAvailable>(
  dataToValidate: T,
  path = 'HealthcareServiceNotAvailable',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new HealthcareServiceNotAvailable());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
  });
}
