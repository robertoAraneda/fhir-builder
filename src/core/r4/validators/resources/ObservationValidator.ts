import { createResourceDefinition } from '../base/definitions';
import { IObservation, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { Observation } from '../../../../r4/models';

/**
 * @description The model fields for the Observation model
 */
const modelFields = createResourceDefinition<IObservation>([
  { name: 'identifier', type: 'Identifier', isArray: true, isRequired: false },
  {
    name: 'basedOn',
    type: 'Reference',
    isArray: true,
    isRequired: false,
    referenceTypes: [
      'CarePlan',
      'DeviceRequest',
      'ImmunizationRecommendation',
      'MedicationRequest',
      'NutritionOrder',
      'ServiceRequest',
    ],
  },
  {
    name: 'partOf',
    type: 'Reference',
    isArray: true,
    isRequired: false,
    referenceTypes: [
      'MedicationAdministration',
      'MedicationDispense',
      'MedicationStatement',
      'Procedure',
      'Immunization',
      'ImagingStudy',
    ],
  },
  {
    name: 'status',
    type: 'code',
    isArray: false,
    isRequired: true,
    enumValues: [
      'registered',
      'preliminary',
      'final',
      'amended',
      'corrected',
      'cancelled',
      'entered-in-error',
      'unknown',
    ],
  },
  { name: '_status', type: 'Element', isArray: false, isRequired: false },
  { name: 'category', type: 'CodeableConcept', isArray: true, isRequired: false },
  { name: 'code', type: 'CodeableConcept', isArray: false, isRequired: true },
  {
    name: 'subject',
    type: 'Reference',
    isArray: false,
    isRequired: false,
    referenceTypes: ['Patient', 'Group', 'Device', 'Location'],
  },
  { name: 'focus', type: 'Reference', isArray: true, isRequired: false, referenceTypes: ['Any'] },
  { name: 'encounter', type: 'Reference', isArray: false, isRequired: false, referenceTypes: ['Encounter'] },
  { name: 'effectiveDateTime', type: 'dateTime', isArray: false, isRequired: false },
  { name: '_effectiveDateTime', type: 'Element', isArray: false, isRequired: false },
  { name: 'effectivePeriod', type: 'Period', isArray: false, isRequired: false },
  { name: 'effectiveTiming', type: 'Timing', isArray: false, isRequired: false },
  { name: 'effectiveInstant', type: 'instant', isArray: false, isRequired: false },
  { name: '_effectiveInstant', type: 'Element', isArray: false, isRequired: false },
  { name: 'issued', type: 'instant', isArray: false, isRequired: false },
  { name: '_issued', type: 'Element', isArray: false, isRequired: false },
  {
    name: 'performer',
    type: 'Reference',
    isArray: true,
    isRequired: false,
    referenceTypes: ['Practitioner', 'PractitionerRole', 'Organization', 'CareTeam', 'Patient', 'RelatedPerson'],
  },
  { name: 'valueQuantity', type: 'Quantity', isArray: false, isRequired: false },
  { name: 'valueCodeableConcept', type: 'CodeableConcept', isArray: false, isRequired: false },
  { name: 'valueString', type: 'string', isArray: false, isRequired: false },
  { name: '_valueString', type: 'Element', isArray: false, isRequired: false },
  { name: 'valueBoolean', type: 'boolean', isArray: false, isRequired: false },
  { name: '_valueBoolean', type: 'Element', isArray: false, isRequired: false },
  { name: 'valueInteger', type: 'integer', isArray: false, isRequired: false },
  { name: '_valueInteger', type: 'Element', isArray: false, isRequired: false },
  { name: 'valueRange', type: 'Range', isArray: false, isRequired: false },
  { name: 'valueRatio', type: 'Ratio', isArray: false, isRequired: false },
  { name: 'valueSampledData', type: 'SampledData', isArray: false, isRequired: false },
  { name: 'valueTime', type: 'time', isArray: false, isRequired: false },
  { name: '_valueTime', type: 'Element', isArray: false, isRequired: false },
  { name: 'valueDateTime', type: 'dateTime', isArray: false, isRequired: false },
  { name: '_valueDateTime', type: 'Element', isArray: false, isRequired: false },
  { name: 'valuePeriod', type: 'Period', isArray: false, isRequired: false },
  { name: 'dataAbsentReason', type: 'CodeableConcept', isArray: false, isRequired: false },
  { name: 'interpretation', type: 'CodeableConcept', isArray: true, isRequired: false },
  { name: 'note', type: 'Annotation', isArray: true, isRequired: false },
  { name: 'bodySite', type: 'CodeableConcept', isArray: false, isRequired: false },
  { name: 'method', type: 'CodeableConcept', isArray: false, isRequired: false },
  { name: 'specimen', type: 'Reference', isArray: false, isRequired: false, referenceTypes: ['Specimen'] },
  { name: 'device', type: 'Reference', isArray: false, isRequired: false, referenceTypes: ['Device', 'DeviceMetric'] },
  { name: 'referenceRange', type: 'ObservationReferenceRange', isArray: true, isRequired: false },
  {
    name: 'hasMember',
    type: 'Reference',
    isArray: true,
    isRequired: false,
    referenceTypes: ['Observation', 'QuestionnaireResponse', 'MolecularSequence'],
  },
  {
    name: 'derivedFrom',
    type: 'Reference',
    isArray: true,
    isRequired: false,
    referenceTypes: [
      'DocumentReference',
      'ImagingStudy',
      'Media',
      'QuestionnaireResponse',
      'Observation',
      'MolecularSequence',
    ],
  },
  { name: 'component', type: 'ObservationComponent', isArray: true, isRequired: false },
]);

/**
 * @description Validates the Observation model
 * @param dataToValidate - the Observation model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function ObservationValidator<T extends IObservation>(
  dataToValidate: T,
  path = 'Observation',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new Observation());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
  });
}
