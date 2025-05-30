import { createBackboneDefinition } from '../base/definitions';
import { IAppointmentParticipant, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { AppointmentParticipant } from '../../../../r4/models';

/**
 * @description The model fields for the AppointmentParticipant model
 */
const modelFields = createBackboneDefinition<IAppointmentParticipant>([
  { name: 'type', type: 'CodeableConcept', isArray: true, isRequired: false },
  {
    name: 'actor',
    type: 'Reference',
    isArray: false,
    isRequired: false,
    referenceTypes: [
      'Patient',
      'Practitioner',
      'RelatedPerson',
      'PractitionerRole',
      'Device',
      'HealthcareService',
      'Location',
    ],
  },
  {
    name: 'required',
    type: 'code',
    isArray: false,
    isRequired: false,
    enumValues: ['required', 'optional', 'information-only'],
  },
  { name: '_required', type: 'Element', isArray: false, isRequired: false },
  {
    name: 'status',
    type: 'code',
    isArray: false,
    isRequired: true,
    enumValues: ['accepted', 'declined', 'tentative', 'needs-action'],
  },
  { name: '_status', type: 'Element', isArray: false, isRequired: false },
  { name: 'period', type: 'Period', isArray: false, isRequired: false },
]);

/**
 * @description Validates the AppointmentParticipant model
 * @param dataToValidate - the AppointmentParticipant model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function AppointmentParticipantValidator<T extends IAppointmentParticipant>(
  dataToValidate: T,
  path = 'AppointmentParticipant',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new AppointmentParticipant());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
  });
}
