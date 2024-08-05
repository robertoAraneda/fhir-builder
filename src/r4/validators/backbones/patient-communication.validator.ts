import { IPatientCommunication } from 'fhirtypes/dist/r4';
import { createBackboneDefinition } from '../base/definitions';
import { validator } from '../base/object.validator';

const modelDefinition = createBackboneDefinition<IPatientCommunication>([
  {
    name: 'language',
    type: 'CodeableConcept',
    isArray: false,
    isRequired: true,
  },
  {
    name: 'preferred',
    type: 'boolean',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_preferred',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
]);

export function PatientCommunicationValidator(
  dataToValidate: IPatientCommunication,
  path: string = 'PatientCommunication',
): void {
  validator<IPatientCommunication>({
    path,
    dataToValidate,
    modelDefinition,
  });
}
