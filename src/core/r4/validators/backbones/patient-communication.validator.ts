import { IOperationOutcomeIssue, IPatientCommunication } from 'fhirtypes/dist/r4';
import { createBackboneDefinition } from '../base/definitions';
import { ModelValidator } from '../base';

const modelDefinition = createBackboneDefinition<IPatientCommunication>([
  { name: 'language', type: 'CodeableConcept', isArray: false, isRequired: true },
  { name: 'preferred', type: 'boolean', isArray: false, isRequired: false },
  { name: '_preferred', type: 'Element', isArray: false, isRequired: false },
]);

export function PatientCommunicationValidator(
  dataToValidate: IPatientCommunication,
  path = 'PatientCommunication',
  errors: IOperationOutcomeIssue[],
): void {
  ModelValidator<IPatientCommunication>({
    path,
    dataToValidate,
    modelDefinition,
    errors,
  });
}
