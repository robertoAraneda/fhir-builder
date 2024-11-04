import { createResourceDefinition } from '../base/definitions';
import { IEncounter, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { Encounter } from '../../../../r4/models';

/**
 * @description The model fields for the Encounter model
 */
const modelFields = createResourceDefinition<IEncounter>([
  { name: 'identifier', type: 'Identifier', isArray: true, isRequired: false },
  {
    name: 'status',
    type: 'code',
    isArray: false,
    isRequired: true,
    enumValues: [
      'planned',
      'arrived',
      'triaged',
      'in-progress',
      'onleave',
      'finished',
      'cancelled',
      'entered-in-error',
      'unknown',
    ],
  },
  { name: '_status', type: 'Element', isArray: false, isRequired: false },
  { name: 'statusHistory', type: 'EncounterStatusHistory', isArray: true, isRequired: false },
  { name: 'class', type: 'Coding', isArray: false, isRequired: true },
  { name: 'classHistory', type: 'EncounterClassHistory', isArray: true, isRequired: false },
  { name: 'type', type: 'CodeableConcept', isArray: true, isRequired: false },
  { name: 'serviceType', type: 'CodeableConcept', isArray: false, isRequired: false },
  { name: 'priority', type: 'CodeableConcept', isArray: false, isRequired: false },
  { name: 'subject', type: 'Reference', isArray: false, isRequired: false, referenceTypes: ['Patient', 'Group'] },
  { name: 'episodeOfCare', type: 'Reference', isArray: true, isRequired: false, referenceTypes: ['EpisodeOfCare'] },
  { name: 'basedOn', type: 'Reference', isArray: true, isRequired: false, referenceTypes: ['ServiceRequest'] },
  { name: 'participant', type: 'EncounterParticipant', isArray: true, isRequired: false },
  { name: 'appointment', type: 'Reference', isArray: true, isRequired: false, referenceTypes: ['Appointment'] },
  { name: 'period', type: 'Period', isArray: false, isRequired: false },
  { name: 'length', type: 'Duration', isArray: false, isRequired: false },
  { name: 'reasonCode', type: 'CodeableConcept', isArray: true, isRequired: false },
  {
    name: 'reasonReference',
    type: 'Reference',
    isArray: true,
    isRequired: false,
    referenceTypes: ['Condition', 'Procedure', 'Observation', 'ImmunizationRecommendation'],
  },
  { name: 'diagnosis', type: 'EncounterDiagnosis', isArray: true, isRequired: false },
  { name: 'account', type: 'Reference', isArray: true, isRequired: false, referenceTypes: ['Account'] },
  { name: 'hospitalization', type: 'EncounterHospitalization', isArray: false, isRequired: false },
  { name: 'location', type: 'EncounterLocation', isArray: true, isRequired: false },
  { name: 'serviceProvider', type: 'Reference', isArray: false, isRequired: false, referenceTypes: ['Organization'] },
  { name: 'partOf', type: 'Reference', isArray: false, isRequired: false, referenceTypes: ['Encounter'] },
]);

/**
 * @description Validates the Encounter model
 * @param dataToValidate - the Encounter model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function EncounterValidator<T extends IEncounter>(
  dataToValidate: T,
  path = 'Encounter',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new Encounter());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
  });
}
