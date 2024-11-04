import { createBackboneDefinition } from '../base/definitions';
import { IQuestionnaireEnableWhen, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { QuestionnaireEnableWhen } from '../../../../r4/models';
import { OperationOutcomeIssueException } from '../../../commons/exceptions/operation-outcome.exception';

/**
 * @description The model fields for the QuestionnaireEnableWhen model
 */
const modelFields = createBackboneDefinition<IQuestionnaireEnableWhen>([
  { name: 'question', type: 'string', isArray: false, isRequired: true },
  { name: '_question', type: 'Element', isArray: false, isRequired: false },
  {
    name: 'operator',
    type: 'code',
    isArray: false,
    isRequired: true,
    enumValues: ['exists', '=', '!=', '>', '<', '>=', '<='],
  },
  { name: '_operator', type: 'Element', isArray: false, isRequired: false },
  { name: 'answerBoolean', type: 'boolean', isArray: false, isRequired: false },
  { name: '_answerBoolean', type: 'Element', isArray: false, isRequired: false },
  { name: 'answerDecimal', type: 'decimal', isArray: false, isRequired: false },
  { name: '_answerDecimal', type: 'Element', isArray: false, isRequired: false },
  { name: 'answerInteger', type: 'integer', isArray: false, isRequired: false },
  { name: '_answerInteger', type: 'Element', isArray: false, isRequired: false },
  { name: 'answerDate', type: 'date', isArray: false, isRequired: false },
  { name: '_answerDate', type: 'Element', isArray: false, isRequired: false },
  { name: 'answerDateTime', type: 'dateTime', isArray: false, isRequired: false },
  { name: '_answerDateTime', type: 'Element', isArray: false, isRequired: false },
  { name: 'answerTime', type: 'time', isArray: false, isRequired: false },
  { name: '_answerTime', type: 'Element', isArray: false, isRequired: false },
  { name: 'answerString', type: 'string', isArray: false, isRequired: false },
  { name: '_answerString', type: 'Element', isArray: false, isRequired: false },
  { name: 'answerCoding', type: 'Coding', isArray: false, isRequired: false },
  { name: 'answerQuantity', type: 'Quantity', isArray: false, isRequired: false },
  { name: 'answerReference', type: 'Reference', isArray: false, isRequired: false, referenceTypes: ['Any'] },
]);

// Validate if no enableWhen answer is provided
function validateNoAnswerProvided(
  dataToValidate: IQuestionnaireEnableWhen,
  path: string,
  errors: IOperationOutcomeIssue[],
): void {
  // List of properties considered as possible answers
  const answerKeys = [
    'answerBoolean',
    'answerDecimal',
    'answerInteger',
    'answerDate',
    'answerDateTime',
    'answerTime',
    'answerString',
    'answerCoding',
    'answerQuantity',
    'answerReference',
  ];

  // Check if all answer properties are undefined or null
  const hasNoAnswer = answerKeys.every((key) => dataToValidate[key as keyof IQuestionnaireEnableWhen] == null);

  if (hasNoAnswer) {
    errors.push(
      new OperationOutcomeIssueException({
        severity: 'error',
        code: 'invalid',
        diagnostics: `No answer provided for enableWhen.`,
        details: {
          text: `Path: ${path}.`,
        },
      }),
    );
  }
}

/**
 * @description Validates the QuestionnaireEnableWhen model
 * @param dataToValidate - the QuestionnaireEnableWhen model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function QuestionnaireEnableWhenValidator<T extends IQuestionnaireEnableWhen>(
  dataToValidate: T,
  path = 'QuestionnaireEnableWhen',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new QuestionnaireEnableWhen());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
    additionalValidation: [validateNoAnswerProvided],
  });
}
