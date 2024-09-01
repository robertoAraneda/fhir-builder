import { createBackboneDefinition } from '../base/definitions';
import { IPatientCommunication, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { PatientCommunication } from '../../../../r4/models';

/**
 * @description The model fields for the PatientCommunication model
 */
const modelFields = createBackboneDefinition<IPatientCommunication>([
  { name: 'language', type: 'CodeableConcept', isArray: false, isRequired: true },
  { name: 'preferred', type: 'boolean', isArray: false, isRequired: false },
  { name: '_preferred', type: 'Element', isArray: false, isRequired: false },
]);

/**
 * @description Validates the PatientCommunication model
 * @param dataToValidate - the PatientCommunication model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function PatientCommunicationValidator<T extends IPatientCommunication>(
  dataToValidate: T,
  path = 'PatientCommunication',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new PatientCommunication());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
  });
}
