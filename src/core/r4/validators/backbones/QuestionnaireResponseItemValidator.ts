import { createBackboneDefinition } from '../base/definitions';
import { IQuestionnaireResponseItem, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { QuestionnaireResponseItem } from '../../../../r4/models';
import { OperationOutcomeIssueException } from '../../../commons/exceptions/operation-outcome.exception';

/**
 * @description The model fields for the QuestionnaireResponseItem model
 */
const modelFields = createBackboneDefinition<IQuestionnaireResponseItem>([
  { name: 'linkId', type: 'string', isArray: false, isRequired: false },
  { name: '_linkId', type: 'Element', isArray: false, isRequired: false },
  { name: 'definition', type: 'uri', isArray: false, isRequired: false },
  { name: '_definition', type: 'Element', isArray: false, isRequired: false },
  { name: 'text', type: 'string', isArray: false, isRequired: false },
  { name: '_text', type: 'Element', isArray: false, isRequired: false },
  { name: 'answer', type: 'QuestionnaireResponseAnswer', isArray: true, isRequired: false },
  { name: 'item', type: 'QuestionnaireResponseItem', isArray: true, isRequired: false },
]);

function validateConformance(
  dataToValidate: IQuestionnaireResponseItem,
  path: string,
  errors: IOperationOutcomeIssue[],
): void {
  // + qrs-1	Rule	QuestionnaireResponse.item	Nested item can't be beneath both item and answer	(answer.exists() and item.exists()).not()
  if (dataToValidate.answer && dataToValidate.item) {
    errors.push(
      new OperationOutcomeIssueException({
        severity: 'error',
        code: 'invalid',
        details: {
          text: `Path: ${path}.`,
        },
        diagnostics:
          "[qrs-1] Rule: Nested item can't be beneath both item and answer (answer.exists() and item.exists()).not()",
      }),
    );
  }
}

/**
 * @description Validates the QuestionnaireResponseItem model
 * @param dataToValidate - the QuestionnaireResponseItem model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function QuestionnaireResponseItemValidator<T extends IQuestionnaireResponseItem>(
  dataToValidate: T,
  path = 'QuestionnaireResponseItem',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new QuestionnaireResponseItem());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
    additionalValidation: [validateConformance],
  });
}
