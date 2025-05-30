import { createResourceDefinition } from '../base/definitions';
import { IAppointment, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { Appointment } from '../../../../r4/models';

/**
 * @description The model fields for the Appointment model
 */
const modelFields = createResourceDefinition<IAppointment>([
  { name: 'identifier', type: 'Identifier', isArray: true, isRequired: false },
  {
    name: 'status',
    type: 'code',
    isArray: false,
    isRequired: true,
    enumValues: [
      'proposed',
      'pending',
      'booked',
      'arrived',
      'fulfilled',
      'cancelled',
      'noshow',
      'entered-in-error',
      'checked-in',
      'waitlist',
    ],
  },
  { name: '_status', type: 'Element', isArray: false, isRequired: false },
  { name: 'cancelationReason', type: 'CodeableConcept', isArray: false, isRequired: false },
  { name: 'serviceCategory', type: 'CodeableConcept', isArray: true, isRequired: false },
  { name: 'serviceType', type: 'CodeableConcept', isArray: true, isRequired: false },
  { name: 'specialty', type: 'CodeableConcept', isArray: true, isRequired: false },
  { name: 'appointmentType', type: 'CodeableConcept', isArray: false, isRequired: false },
  { name: 'reasonCode', type: 'CodeableConcept', isArray: true, isRequired: false },
  {
    name: 'reasonReference',
    type: 'Reference',
    isArray: true,
    isRequired: false,
    referenceTypes: ['Condition', 'Procedure', 'Observation', 'ImmunizationRecommendation'],
    enumValues: ['Condition', 'Procedure', 'Observation', 'ImmunizationRecommendation'],
  },
  { name: 'priority', type: 'unsignedInt', isArray: false, isRequired: false },
  { name: '_priority', type: 'Element', isArray: false, isRequired: false },
  { name: 'description', type: 'string', isArray: false, isRequired: false },
  { name: '_description', type: 'Element', isArray: false, isRequired: false },
  {
    name: 'supportingInformation',
    type: 'Reference',
    isArray: true,
    isRequired: false,
    referenceTypes: ['Any'],
    enumValues: ['Any'],
  },
  { name: 'start', type: 'instant', isArray: false, isRequired: false },
  { name: '_start', type: 'Element', isArray: false, isRequired: false },
  { name: 'end', type: 'instant', isArray: false, isRequired: false },
  { name: '_end', type: 'Element', isArray: false, isRequired: false },
  { name: 'minutesDuration', type: 'positiveInt', isArray: false, isRequired: false },
  { name: '_minutesDuration', type: 'Element', isArray: false, isRequired: false },
  { name: 'slot', type: 'Reference', isArray: true, isRequired: false, referenceTypes: ['Slot'] },
  { name: 'created', type: 'dateTime', isArray: false, isRequired: false },
  { name: '_created', type: 'Element', isArray: false, isRequired: false },
  { name: 'comment', type: 'string', isArray: false, isRequired: false },
  { name: '_comment', type: 'Element', isArray: false, isRequired: false },
  { name: 'patientInstruction', type: 'string', isArray: false, isRequired: false },
  { name: '_patientInstruction', type: 'Element', isArray: false, isRequired: false },
  {
    name: 'basedOn',
    type: 'Reference',
    isArray: true,
    isRequired: false,
    referenceTypes: ['ServiceRequest'],
    enumValues: ['ServiceRequest'],
  },
  { name: 'participant', type: 'AppointmentParticipant', isArray: true, isRequired: true },
  { name: 'requestedPeriod', type: 'Period', isArray: true, isRequired: false },
]);

/**
 * @description Validates the Appointment model
 * @param dataToValidate - the Appointment model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function AppointmentValidator<T extends IAppointment>(
  dataToValidate: T,
  path = 'Appointment',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new Appointment());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
  });
}
