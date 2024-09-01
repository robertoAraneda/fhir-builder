import { createResourceDefinition } from '../base/definitions';
import { IProcedure, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { Procedure } from '../../../../r4/models';

/**
 * @description The model fields for the Procedure model
 */
const modelFields = createResourceDefinition<IProcedure>([
  { name: 'identifier', type: 'Identifier', isArray: true, isRequired: false },
  { name: 'instantiatesCanonical', type: 'canonical', isArray: true, isRequired: false },
  { name: 'instantiatesUri', type: 'uri', isArray: true, isRequired: false },
  { name: '_instantiatesUri', type: 'Element', isArray: true, isRequired: false },
  {
    name: 'basedOn',
    type: 'Reference',
    isArray: true,
    isRequired: false,
    referenceTypes: ['CarePlan', 'ServiceRequest'],
  },
  {
    name: 'partOf',
    type: 'Reference',
    isArray: true,
    isRequired: false,
    referenceTypes: ['Procedure', 'Observation', 'MedicationAdministration'],
  },
  {
    name: 'status',
    type: 'code',
    isArray: false,
    isRequired: true,
    enumValues: [
      'preparation',
      'in-progress',
      'not-done',
      'on-hold',
      'stopped',
      'completed',
      'entered-in-error',
      'unknown',
    ],
  },
  { name: '_status', type: 'Element', isArray: false, isRequired: false },
  { name: 'statusReason', type: 'CodeableConcept', isArray: false, isRequired: false },
  { name: 'category', type: 'CodeableConcept', isArray: false, isRequired: false },
  { name: 'code', type: 'CodeableConcept', isArray: false, isRequired: false },
  { name: 'subject', type: 'Reference', isArray: false, isRequired: true, referenceTypes: ['Patient', 'Group'] },
  { name: 'encounter', type: 'Reference', isArray: false, isRequired: false, referenceTypes: ['Encounter'] },
  { name: 'performedDateTime', type: 'dateTime', isArray: false, isRequired: false },
  { name: '_performedDateTime', type: 'Element', isArray: false, isRequired: false },
  { name: 'performedPeriod', type: 'Period', isArray: false, isRequired: false },
  { name: 'performedString', type: 'string', isArray: false, isRequired: false },
  { name: '_performedString', type: 'Element', isArray: false, isRequired: false },
  { name: 'performedAge', type: 'Age', isArray: false, isRequired: false },
  { name: 'performedRange', type: 'Range', isArray: false, isRequired: false },
  {
    name: 'recorder',
    type: 'Reference',
    isArray: false,
    isRequired: false,
    referenceTypes: ['Practitioner', 'PractitionerRole', 'Patient', 'RelatedPerson'],
  },
  {
    name: 'asserter',
    type: 'Reference',
    isArray: false,
    isRequired: false,
    referenceTypes: ['Practitioner', 'PractitionerRole', 'Patient', 'RelatedPerson'],
  },
  { name: 'performer', type: 'ProcedurePerformer', isArray: true, isRequired: false },
  { name: 'location', type: 'Reference', isArray: false, isRequired: false, referenceTypes: ['Location'] },
  { name: 'reasonCode', type: 'CodeableConcept', isArray: true, isRequired: false },
  {
    name: 'reasonReference',
    type: 'Reference',
    isArray: true,
    isRequired: false,
    referenceTypes: ['Condition', 'Observation', 'Procedure', 'DiagnosticReport', 'DocumentReference'],
  },
  { name: 'bodySite', type: 'CodeableConcept', isArray: true, isRequired: false },
  { name: 'outcome', type: 'CodeableConcept', isArray: false, isRequired: false },
  {
    name: 'report',
    type: 'Reference',
    isArray: true,
    isRequired: false,
    referenceTypes: ['DiagnosticReport', 'DocumentReference', 'Composition'],
  },
  { name: 'complication', type: 'CodeableConcept', isArray: true, isRequired: false },
  { name: 'complicationDetail', type: 'Reference', isArray: true, isRequired: false, referenceTypes: ['Condition'] },
  { name: 'followUp', type: 'CodeableConcept', isArray: true, isRequired: false },
  { name: 'note', type: 'Annotation', isArray: true, isRequired: false },
  { name: 'focalDevice', type: 'ProcedureFocalDevice', isArray: true, isRequired: false },
  {
    name: 'usedReference',
    type: 'Reference',
    isArray: true,
    isRequired: false,
    referenceTypes: ['Device', 'Medication', 'Substance'],
  },
  { name: 'usedCode', type: 'CodeableConcept', isArray: true, isRequired: false },
]);

/**
 * @description Validates the Procedure model
 * @param dataToValidate - the Procedure model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function ProcedureValidator<T extends IProcedure>(
  dataToValidate: T,
  path = 'Procedure',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new Procedure());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
  });
}
