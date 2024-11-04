import { createBackboneDefinition } from '../base/definitions';
import { IQuestionnaireItem, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { QuestionnaireItem } from '../../../../r4/models';

/**
 * @description The model fields for the QuestionnaireItem model
 */
const modelFields = createBackboneDefinition<IQuestionnaireItem>([
  { name: 'linkId', type: 'string', isArray: false, isRequired: true },
  { name: '_linkId', type: 'Element', isArray: false, isRequired: false },
  { name: 'definition', type: 'uri', isArray: false, isRequired: false },
  { name: '_definition', type: 'Element', isArray: false, isRequired: false },
  { name: 'code', type: 'Coding', isArray: true, isRequired: false },
  { name: 'prefix', type: 'string', isArray: false, isRequired: false },
  { name: '_prefix', type: 'Element', isArray: false, isRequired: false },
  { name: 'text', type: 'string', isArray: false, isRequired: false },
  { name: '_text', type: 'Element', isArray: false, isRequired: false },
  {
    name: 'type',
    type: 'code',
    isArray: false,
    isRequired: true,
    enumValues: [
      'group',
      'display',
      'boolean',
      'decimal',
      'integer',
      'date',
      'dateTime',
      'time',
      'string',
      'text',
      'url',
      'choice',
      'open-choice',
      'attachment',
      'reference',
      'quantity',
    ],
  },
  { name: '_type', type: 'Element', isArray: false, isRequired: false },
  { name: 'enableWhen', type: 'QuestionnaireEnableWhen', isArray: true, isRequired: false },
  { name: 'enableBehavior', type: 'code', isArray: false, isRequired: false, enumValues: ['all', 'any'] },
  { name: '_enableBehavior', type: 'Element', isArray: false, isRequired: false },
  { name: 'required', type: 'boolean', isArray: false, isRequired: false },
  { name: '_required', type: 'Element', isArray: false, isRequired: false },
  { name: 'repeats', type: 'boolean', isArray: false, isRequired: false },
  { name: '_repeats', type: 'Element', isArray: false, isRequired: false },
  { name: 'readOnly', type: 'boolean', isArray: false, isRequired: false },
  { name: '_readOnly', type: 'Element', isArray: false, isRequired: false },
  { name: 'maxLength', type: 'integer', isArray: false, isRequired: false },
  { name: '_maxLength', type: 'Element', isArray: false, isRequired: false },
  { name: 'answerValueSet', type: 'canonical', isArray: false, isRequired: false },
  { name: 'answerOption', type: 'QuestionnaireAnswerOption', isArray: true, isRequired: false },
  { name: 'initial', type: 'QuestionnaireInitial', isArray: true, isRequired: false },
  { name: 'item', type: 'QuestionnaireItem', isArray: true, isRequired: false },
]);

function validateConformance(dataToValidate: IQuestionnaireItem, path: string, errors: IOperationOutcomeIssue[]) {
  // + Rule: The link ids for groups and questions must be unique within the questionnaire
  dataToValidate.item?.forEach((item, index) => {
    if (item.linkId === dataToValidate.linkId) {
      errors.push({
        severity: 'error',
        code: 'invalid',
        details: {
          text: `${path}.item[${index}]`,
        },
        diagnostics: `The link ids for groups and questions must be unique within the questionnaire`,
      });
    }
  });

  // + Rule: Group items must have nested items, display items cannot have nested items
  if (dataToValidate.type === 'group' && !dataToValidate.item) {
    errors.push({
      severity: 'error',
      code: 'invalid',
      details: {
        text: path,
      },
      diagnostics: `Group items must have nested items`,
    });
  }

  // + Rule: Display items cannot have a "code" asserted
  if (dataToValidate.type === 'display' && dataToValidate.code) {
    errors.push({
      severity: 'error',
      code: 'invalid',
      details: {
        text: path,
      },
      diagnostics: `Display items cannot have a "code" asserted`,
    });
  }

  // + Rule: A question cannot have both answerOption and answerValueSet
  if (dataToValidate.answerOption && dataToValidate.answerValueSet) {
    errors.push({
      severity: 'error',
      code: 'invalid',
      details: {
        text: path,
      },
      diagnostics: `A question cannot have both answerOption and answerValueSet`,
    });
  }

  // + Rule: Only 'choice' and 'open-choice' items can have answerValueSet
  if (dataToValidate.answerValueSet && !['choice', 'open-choice'].includes(dataToValidate.type)) {
    errors.push({
      severity: 'error',
      code: 'invalid',
      details: {
        text: path,
      },
      diagnostics: `Only 'choice' and 'open-choice' items can have answerValueSet`,
    });
  }

  // + Rule: Required and repeat aren't permitted for display items
  if (dataToValidate.type === 'display' && (dataToValidate.required || dataToValidate.repeats)) {
    errors.push({
      severity: 'error',
      code: 'invalid',
      details: {
        text: path,
      },
      diagnostics: `Required and repeat aren't permitted for display items`,
    });
  }

  // + Rule: Initial values can't be specified for groups or display items
  if (dataToValidate.type === 'group' && dataToValidate.initial) {
    errors.push({
      severity: 'error',
      code: 'invalid',
      details: {
        text: path,
      },
      diagnostics: `Initial values can't be specified for groups or display items`,
    });
  }

  // + Rule: Read-only can't be specified for "display" items
  if (dataToValidate.type === 'display' && dataToValidate.readOnly) {
    errors.push({
      severity: 'error',
      code: 'invalid',
      details: {
        text: path,
      },
      diagnostics: `Read-only can't be specified for "display" items`,
    });
  }

  // + Rule: Maximum length can only be declared for simple question types
  if (
    dataToValidate.maxLength &&
    !['string', 'text', 'url', 'choice', 'open-choice', 'attachment', 'reference', 'quantity'].includes(
      dataToValidate.type,
    )
  ) {
    errors.push({
      severity: 'error',
      code: 'invalid',
      details: {
        text: path,
      },
      diagnostics: `Maximum length can only be declared for simple question types`,
    });
  }

  // + Rule: If one or more answerOption is present, initial[x] must be missing
  if (dataToValidate.answerOption && dataToValidate.initial) {
    errors.push({
      severity: 'error',
      code: 'invalid',
      details: {
        text: path,
      },
      diagnostics: `If one or more answerOption is present, initial[x] must be missing`,
    });
  }

  // + Rule: If there are more than one enableWhen, enableBehavior must be specified
  if (dataToValidate.enableWhen && dataToValidate.enableWhen.length > 1 && !dataToValidate.enableBehavior) {
    errors.push({
      severity: 'error',
      code: 'invalid',
      details: {
        text: path,
      },
      diagnostics: `If there are more than one enableWhen, enableBehavior must be specified`,
    });
  }

  // + Rule: Can only have multiple initial values for repeating items
  if (dataToValidate.initial && dataToValidate.initial.length > 1 && !dataToValidate.repeats) {
    errors.push({
      severity: 'error',
      code: 'invalid',
      details: {
        text: path,
      },
      diagnostics: `Can only have multiple initial values for repeating items`,
    });
  }
}

/**
 * @description Validates the QuestionnaireItem model
 * @param dataToValidate - the QuestionnaireItem model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function QuestionnaireItemValidator<T extends IQuestionnaireItem>(
  dataToValidate: T,
  path = 'QuestionnaireItem',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new QuestionnaireItem());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
    additionalValidation: [validateConformance],
  });
}
