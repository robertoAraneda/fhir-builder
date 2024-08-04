import { createBackboneDefinition } from '../base/definitions';
import { IPatientCommunication } from 'fhirtypes/dist/r4';
import assert from 'node:assert';
import { RemoveUndefinedAttributes } from '../../utils/remove-undefined-attributes.util';
import { BaseValidator } from '../base/base.validator';

export const modelFields = createBackboneDefinition<IPatientCommunication>([
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
  dataToValidate: IPatientCommunication | IPatientCommunication[],
  path: string = 'PatientCommunication',
): void {
  assert(
    typeof dataToValidate === 'object',
    `Expected Attachment to be of type object, received ${typeof dataToValidate}`,
  );
  const cleanObject = RemoveUndefinedAttributes(dataToValidate);

  if (Array.isArray(cleanObject)) {
    cleanObject.forEach((item, index) => {
      PatientCommunicationValidator(item, `${path}[${index}]`);
    });
    return;
  }

  BaseValidator(cleanObject, modelFields, path);
}
