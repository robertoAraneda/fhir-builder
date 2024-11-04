import { createBackboneDefinition } from '../base/definitions';
import { IQuestionnaireAnswerOption, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { QuestionnaireAnswerOption } from '../../../../r4/models';
import { OperationOutcomeIssueException } from '../../../commons/exceptions/operation-outcome.exception';

/**
 * @description The model fields for the QuestionnaireAnswerOption model
 */
const modelFields = createBackboneDefinition<IQuestionnaireAnswerOption>([
  { name: 'valueInteger', type: 'integer', isArray: false, isRequired: false },
  { name: '_valueInteger', type: 'Element', isArray: false, isRequired: false },
  { name: 'valueDate', type: 'date', isArray: false, isRequired: false },
  { name: '_valueDate', type: 'Element', isArray: false, isRequired: false },
  { name: 'valueTime', type: 'time', isArray: false, isRequired: false },
  { name: '_valueTime', type: 'Element', isArray: false, isRequired: false },
  { name: 'valueString', type: 'string', isArray: false, isRequired: false },
  { name: '_valueString', type: 'Element', isArray: false, isRequired: false },
  { name: 'valueCoding', type: 'Coding', isArray: false, isRequired: false },
  { name: 'valueReference', type: 'Reference', isArray: false, isRequired: false, referenceTypes: ['Any'] },
  { name: 'initialSelected', type: 'boolean', isArray: false, isRequired: false },
  { name: '_initialSelected', type: 'Element', isArray: false, isRequired: false },
]);

// validate if answerOption value exists
function validateAnswerOptionValue(
  dataToValidate: IQuestionnaireAnswerOption,
  path: string,
  errors: IOperationOutcomeIssue[],
): void {
  if (
    !dataToValidate.valueInteger &&
    !dataToValidate.valueDate &&
    !dataToValidate.valueTime &&
    !dataToValidate.valueString &&
    !dataToValidate.valueCoding &&
    !dataToValidate.valueReference
  ) {
    errors.push(
      new OperationOutcomeIssueException({
        severity: 'error',
        code: 'invalid',
        diagnostics: `AnswerOption value must be provided`,
        details: {
          text: `Path: ${path}.value[x]`,
        },
      }),
    );
  }
}

/**
 * @description Validates the QuestionnaireAnswerOption model
 * @param dataToValidate - the QuestionnaireAnswerOption model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function QuestionnaireAnswerOptionValidator<T extends IQuestionnaireAnswerOption>(
  dataToValidate: T,
  path = 'QuestionnaireAnswerOption',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new QuestionnaireAnswerOption());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
    additionalValidation: [validateAnswerOptionValue],
  });
}
