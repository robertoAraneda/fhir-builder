import { createResourceDefinition } from '../base/definitions';
import { IAllergyIntolerance, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { AllergyIntolerance } from '../../../../r4/models';

/**
 * @description The model fields for the AllergyIntolerance model
 */
const modelFields = createResourceDefinition<IAllergyIntolerance>([
  { name: 'identifier', type: 'Identifier', isArray: true, isRequired: false },
  { name: 'clinicalStatus', type: 'CodeableConcept', isArray: false, isRequired: false },
  { name: 'verificationStatus', type: 'CodeableConcept', isArray: false, isRequired: false },
  { name: 'type', type: 'code', isArray: false, isRequired: false, enumValues: ['allergy', 'intolerance'] },
  { name: '_type', type: 'Element', isArray: false, isRequired: false },
  {
    name: 'category',
    type: 'code',
    isArray: true,
    isRequired: false,
    enumValues: ['food', 'medication', 'environment', 'biologic'],
  },
  { name: '_category', type: 'Element', isArray: true, isRequired: false },
  {
    name: 'criticality',
    type: 'code',
    isArray: false,
    isRequired: false,
    enumValues: ['low', 'high', 'unable-to-assess'],
  },
  { name: '_criticality', type: 'Element', isArray: false, isRequired: false },
  { name: 'code', type: 'CodeableConcept', isArray: false, isRequired: false },
  { name: 'patient', type: 'Reference', isArray: false, isRequired: true, referenceTypes: ['Patient'] },
  { name: 'encounter', type: 'Reference', isArray: false, isRequired: false, referenceTypes: ['Encounter'] },
  { name: 'onsetDateTime', type: 'dateTime', isArray: false, isRequired: false },
  { name: '_onsetDateTime', type: 'Element', isArray: false, isRequired: false },
  { name: 'onsetAge', type: 'Age', isArray: false, isRequired: false },
  { name: 'onsetPeriod', type: 'Period', isArray: false, isRequired: false },
  { name: 'onsetRange', type: 'Range', isArray: false, isRequired: false },
  { name: 'onsetString', type: 'string', isArray: false, isRequired: false },
  { name: '_onsetString', type: 'Element', isArray: false, isRequired: false },
  { name: 'recordedDate', type: 'dateTime', isArray: false, isRequired: false },
  { name: '_recordedDate', type: 'Element', isArray: false, isRequired: false },
  {
    name: 'recorder',
    type: 'Reference',
    isArray: false,
    isRequired: false,
    referenceTypes: ['Practitioner', 'Patient', 'RelatedPerson'],
  },
  {
    name: 'asserter',
    type: 'Reference',
    isArray: false,
    isRequired: false,
    referenceTypes: ['Patient', 'RelatedPerson', 'Practitioner', 'PractitionerRole'],
  },
  { name: 'lastOccurrence', type: 'dateTime', isArray: false, isRequired: false },
  { name: '_lastOccurrence', type: 'Element', isArray: false, isRequired: false },
  { name: 'note', type: 'Annotation', isArray: true, isRequired: false },
  { name: 'reaction', type: 'AllergyIntoleranceReaction', isArray: true, isRequired: false },
]);

/**
 * @description Validates the AllergyIntolerance model
 * @param dataToValidate - the AllergyIntolerance model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function AllergyIntoleranceValidator<T extends IAllergyIntolerance>(
  dataToValidate: T,
  path = 'AllergyIntolerance',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new AllergyIntolerance());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
  });
}
