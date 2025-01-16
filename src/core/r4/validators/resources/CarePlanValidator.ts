import { createResourceDefinition } from '../base/definitions';
import { ICarePlan, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { CarePlan } from '../../../../r4/models';

/**
 * @description The model fields for the CarePlan model
 */
const modelFields = createResourceDefinition<ICarePlan>([
  { name: 'identifier', type: 'Identifier', isArray: true, isRequired: false },
  { name: 'instantiatesCanonical', type: 'canonical', isArray: true, isRequired: false },
  { name: 'instantiatesUri', type: 'uri', isArray: true, isRequired: false },
  { name: '_instantiatesUri', type: 'Element', isArray: true, isRequired: false },
  {
    name: 'basedOn',
    type: 'Reference',
    isArray: true,
    isRequired: false,
    referenceTypes: ['CarePlan'],
  },
  {
    name: 'replaces',
    type: 'Reference',
    isArray: true,
    isRequired: false,
    referenceTypes: ['CarePlan'],
  },
  {
    name: 'partOf',
    type: 'Reference',
    isArray: true,
    isRequired: false,
    referenceTypes: ['CarePlan'],
  },
  {
    name: 'status',
    type: 'code',
    isArray: false,
    isRequired: true,
    enumValues: ['draft', 'active', 'on-hold', 'revoked', 'completed', 'entered-in-error', 'unknown'],
  },
  { name: '_status', type: 'Element', isArray: false, isRequired: false },
  {
    name: 'intent',
    type: 'code',
    isArray: false,
    isRequired: true,
    enumValues: ['proposal', 'plan', 'order', 'option'],
  },
  { name: '_intent', type: 'Element', isArray: false, isRequired: false },
  { name: 'category', type: 'CodeableConcept', isArray: true, isRequired: false },
  { name: 'title', type: 'string', isArray: false, isRequired: false },
  { name: '_title', type: 'Element', isArray: false, isRequired: false },
  { name: 'description', type: 'string', isArray: false, isRequired: false },
  { name: '_description', type: 'Element', isArray: false, isRequired: false },
  {
    name: 'subject',
    type: 'Reference',
    isArray: false,
    isRequired: true,
    referenceTypes: ['Patient', 'Group'],
  },
  {
    name: 'encounter',
    type: 'Reference',
    isArray: false,
    isRequired: false,
    referenceTypes: ['Encounter'],
  },
  { name: 'period', type: 'Period', isArray: false, isRequired: false },
  { name: 'created', type: 'dateTime', isArray: false, isRequired: false },
  { name: '_created', type: 'Element', isArray: false, isRequired: false },
  {
    name: 'author',
    type: 'Reference',
    isArray: false,
    isRequired: false,
    referenceTypes: [
      'Practitioner',
      'PractitionerRole',
      'Organization',
      'Patient',
      'RelatedPerson',
      'Device',
      'CareTeam',
    ],
  },
  {
    name: 'contributor',
    type: 'Reference',
    isArray: true,
    isRequired: false,
    referenceTypes: [
      'Practitioner',
      'PractitionerRole',
      'Organization',
      'Patient',
      'RelatedPerson',
      'Device',
      'CareTeam',
    ],
  },
  {
    name: 'careTeam',
    type: 'Reference',
    isArray: true,
    isRequired: false,
    referenceTypes: ['CareTeam'],
  },
  {
    name: 'addresses',
    type: 'Reference',
    isArray: true,
    isRequired: false,
    referenceTypes: ['Condition'],
  },
  {
    name: 'supportingInfo',
    type: 'Reference',
    isArray: true,
    isRequired: false,
    referenceTypes: ['Any'],
  },
  { name: 'goal', type: 'Reference', isArray: true, isRequired: false, referenceTypes: ['Goal'] },
  { name: 'activity', type: 'CarePlanActivity', isArray: true, isRequired: false },
  { name: 'note', type: 'Annotation', isArray: true, isRequired: false },
]);

/**
 * @description Validates the CarePlan model
 * @param dataToValidate - the CarePlan model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function CarePlanValidator<T extends ICarePlan>(
  dataToValidate: T,
  path = 'CarePlan',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new CarePlan());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
  });
}
