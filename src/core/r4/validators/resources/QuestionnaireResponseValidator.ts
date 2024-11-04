import { createResourceDefinition } from '../base/definitions';
import { IQuestionnaireResponse, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { QuestionnaireResponse } from '../../../../r4/models';

/**
 * @description The model fields for the QuestionnaireResponse model
 */
const modelFields = createResourceDefinition<IQuestionnaireResponse>([
  { name: 'identifier', type: 'Identifier', isArray: false, isRequired: false },
  {
    name: 'basedOn',
    type: 'Reference',
    isArray: true,
    isRequired: false,
    referenceTypes: ['CarePlan', 'ServiceRequest'],
  },
  { name: 'partOf', type: 'Reference', isArray: true, isRequired: false, referenceTypes: ['Procedure', 'Observation'] },
  { name: 'questionnaire', type: 'canonical', isArray: false, isRequired: false },
  {
    name: 'status',
    type: 'code',
    isArray: false,
    isRequired: true,
    enumValues: ['in-progress', 'completed', 'amended', 'entered-in-error', 'stopped'],
  },
  { name: '_status', type: 'Element', isArray: false, isRequired: false },
  { name: 'subject', type: 'Reference', isArray: false, isRequired: false, referenceTypes: ['Any'] },
  { name: 'encounter', type: 'Reference', isArray: false, isRequired: false, referenceTypes: ['Encounter'] },
  { name: 'authored', type: 'dateTime', isArray: false, isRequired: false },
  { name: '_authored', type: 'Element', isArray: false, isRequired: false },
  {
    name: 'author',
    type: 'Reference',
    isArray: false,
    isRequired: false,
    referenceTypes: ['Practitioner', 'PractitionerRole', 'Patient', 'RelatedPerson', 'Device'],
  },
  {
    name: 'source',
    type: 'Reference',
    isArray: false,
    isRequired: false,
    referenceTypes: ['Patient', 'Practitioner', 'RelatedPerson', 'PractitionerRole'],
  },
  { name: 'item', type: 'QuestionnaireResponseItem', isArray: true, isRequired: false },
]);

/**
 * @description Validates the QuestionnaireResponse model
 * @param dataToValidate - the QuestionnaireResponse model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function QuestionnaireResponseValidator<T extends IQuestionnaireResponse>(
  dataToValidate: T,
  path = 'QuestionnaireResponse',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new QuestionnaireResponse());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
  });
}
