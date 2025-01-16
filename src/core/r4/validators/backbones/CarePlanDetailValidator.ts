import { createBackboneDefinition } from '../base/definitions';
import { ICarePlanDetail, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { CarePlanDetail } from '../../../../r4/models';

/**
 * @description The model fields for the CarePlanDetail model
 */
const modelFields = createBackboneDefinition<ICarePlanDetail>([
  {
    name: 'kind',
    type: 'code',
    isArray: false,
    isRequired: false,
    enumValues: [
      'Appointment',
      'CommunicationRequest',
      'DeviceRequest',
      'MedicationRequest',
      'NutritionOrder',
      'Task',
      'ServiceRequest',
      'VisionPrescription',
    ],
  },
  { name: '_kind', type: 'Element', isArray: false, isRequired: false },
  { name: 'instantiatesCanonical', type: 'canonical', isArray: true, isRequired: false },
  { name: 'instantiatesUri', type: 'uri', isArray: true, isRequired: false },
  { name: '_instantiatesUri', type: 'Element', isArray: true, isRequired: false },
  { name: 'code', type: 'CodeableConcept', isArray: false, isRequired: false },
  { name: 'reasonCode', type: 'CodeableConcept', isArray: true, isRequired: false },
  {
    name: 'reasonReference',
    type: 'Reference',
    isArray: true,
    isRequired: false,
    referenceTypes: ['Condition', 'Observation', 'DiagnosticReport', 'DocumentReference'],
  },
  { name: 'goal', type: 'Reference', isArray: true, isRequired: false, referenceTypes: ['Goal'] },
  {
    name: 'status',
    type: 'code',
    isArray: false,
    isRequired: true,
    enumValues: [
      'not-started',
      'scheduled',
      'in-progress',
      'on-hold',
      'completed',
      'cancelled',
      'stopped',
      'unknown',
      'entered-in-error',
    ],
  },
  { name: '_status', type: 'Element', isArray: false, isRequired: false },
  { name: 'statusReason', type: 'CodeableConcept', isArray: false, isRequired: false },
  { name: 'doNotPerform', type: 'boolean', isArray: false, isRequired: false },
  { name: '_doNotPerform', type: 'Element', isArray: false, isRequired: false },
  { name: 'scheduledTiming', type: 'Timing', isArray: false, isRequired: false },
  { name: 'scheduledPeriod', type: 'Period', isArray: false, isRequired: false },
  { name: 'scheduledString', type: 'string', isArray: false, isRequired: false },
  { name: '_scheduledString', type: 'Element', isArray: false, isRequired: false },
  {
    name: 'location',
    type: 'Reference',
    isArray: false,
    isRequired: false,
    referenceTypes: ['Location'],
  },
  {
    name: 'performer',
    type: 'Reference',
    isArray: true,
    isRequired: false,
    referenceTypes: [
      'Practitioner',
      'PractitionerRole',
      'Organization',
      'Patient',
      'RelatedPerson',
      'CareTeam',
      'HealthcareService',
      'Device',
    ],
  },
  { name: 'productCodeableConcept', type: 'CodeableConcept', isArray: false, isRequired: false },
  {
    name: 'productReference',
    type: 'Reference',
    isArray: false,
    isRequired: false,
    referenceTypes: ['Medication', 'Substance'],
  },
  { name: 'dailyAmount', type: 'Quantity', isArray: false, isRequired: false },
  { name: 'quantity', type: 'Quantity', isArray: false, isRequired: false },
  { name: 'description', type: 'string', isArray: false, isRequired: false },
  { name: '_description', type: 'Element', isArray: false, isRequired: false },
]);

/**
 * @description Validates the CarePlanDetail model
 * @param dataToValidate - the CarePlanDetail model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function CarePlanDetailValidator<T extends ICarePlanDetail>(
  dataToValidate: T,
  path = 'CarePlanDetail',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new CarePlanDetail());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
  });
}
