import { createResourceDefinition } from '../base/definitions';
import { IQuestionnaire, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { Questionnaire } from '../../../../r4/models';
import { ResourceTypesEnum } from 'fhirtypes/dist/r4/enums';

// array of valid resource types for the questionnaire subjectType field
export const QuestionnaireResourceTypes = Object.values(ResourceTypesEnum);

/**
 * @description The model fields for the Questionnaire model
 */
const modelFields = createResourceDefinition<IQuestionnaire>([
  { name: 'url', type: 'uri', isArray: false, isRequired: false },
  { name: '_url', type: 'Element', isArray: false, isRequired: false },
  { name: 'identifier', type: 'Identifier', isArray: true, isRequired: false },
  { name: 'version', type: 'string', isArray: false, isRequired: false },
  { name: '_version', type: 'Element', isArray: false, isRequired: false },
  { name: 'name', type: 'string', isArray: false, isRequired: false },
  { name: '_name', type: 'Element', isArray: false, isRequired: false },
  { name: 'title', type: 'string', isArray: false, isRequired: false },
  { name: '_title', type: 'Element', isArray: false, isRequired: false },
  { name: 'derivedFrom', type: 'canonical', isArray: true, isRequired: false },
  {
    name: 'status',
    type: 'code',
    isArray: false,
    isRequired: true,
    enumValues: ['draft', 'active', 'retired', 'unknown'],
  },
  { name: '_status', type: 'Element', isArray: false, isRequired: false },
  { name: 'experimental', type: 'boolean', isArray: false, isRequired: false },
  { name: '_experimental', type: 'Element', isArray: false, isRequired: false },
  { name: 'subjectType', type: 'code', isArray: true, isRequired: false, enumValues: QuestionnaireResourceTypes },
  { name: '_subjectType', type: 'Element', isArray: true, isRequired: false },
  { name: 'date', type: 'dateTime', isArray: false, isRequired: false },
  { name: '_date', type: 'Element', isArray: false, isRequired: false },
  { name: 'publisher', type: 'string', isArray: false, isRequired: false },
  { name: '_publisher', type: 'Element', isArray: false, isRequired: false },
  { name: 'contact', type: 'ContactDetail', isArray: true, isRequired: false },
  { name: 'description', type: 'markdown', isArray: false, isRequired: false },
  { name: '_description', type: 'Element', isArray: false, isRequired: false },
  { name: 'useContext', type: 'UsageContext', isArray: true, isRequired: false },
  { name: 'jurisdiction', type: 'CodeableConcept', isArray: true, isRequired: false },
  { name: 'purpose', type: 'markdown', isArray: false, isRequired: false },
  { name: '_purpose', type: 'Element', isArray: false, isRequired: false },
  { name: 'copyright', type: 'markdown', isArray: false, isRequired: false },
  { name: '_copyright', type: 'Element', isArray: false, isRequired: false },
  { name: 'approvalDate', type: 'date', isArray: false, isRequired: false },
  { name: '_approvalDate', type: 'Element', isArray: false, isRequired: false },
  { name: 'lastReviewDate', type: 'date', isArray: false, isRequired: false },
  { name: '_lastReviewDate', type: 'Element', isArray: false, isRequired: false },
  { name: 'effectivePeriod', type: 'Period', isArray: false, isRequired: false },
  { name: 'code', type: 'Coding', isArray: true, isRequired: false },
  { name: 'item', type: 'QuestionnaireItem', isArray: true, isRequired: false },
]);

function validateConformance(dataToValidate: IQuestionnaire, path: string, errors: IOperationOutcomeIssue[]): void {
  // Name should be usable as an identifier for the module by machine processing applications such as code generation name.matches('[A-Z]([A-Za-z0-9_]){0,254}')
  if (dataToValidate.name && !/^[A-Z]([A-Za-z0-9_]){0,254}$/.test(dataToValidate.name)) {
    errors.push({
      severity: 'error',
      code: 'invalid',
      details: {
        text: path,
      },
      diagnostics: `Name should be usable as an identifier for the module by machine processing applications such as code generation name.matches('[A-Z]([A-Za-z0-9_]){0,254}')`,
    });
  }
}

/**
 * @description Validates the Questionnaire model
 * @param dataToValidate - the Questionnaire model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function QuestionnaireValidator<T extends IQuestionnaire>(
  dataToValidate: T,
  path = 'Questionnaire',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new Questionnaire());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
    additionalValidation: [validateConformance],
  });
}
