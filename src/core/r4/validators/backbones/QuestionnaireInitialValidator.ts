import { createBackboneDefinition } from '../base/definitions';
import { IQuestionnaireInitial, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { QuestionnaireInitial } from '../../../../r4/models';
import { OperationOutcomeIssueException } from '../../../commons/exceptions/operation-outcome.exception';

/**
 * @description The model fields for the QuestionnaireInitial model
 */
const modelFields = createBackboneDefinition<IQuestionnaireInitial>([
  { name: 'valueBoolean', type: 'boolean', isArray: false, isRequired: false },
  { name: '_valueBoolean', type: 'Element', isArray: false, isRequired: false },
  { name: 'valueDecimal', type: 'decimal', isArray: false, isRequired: false },
  { name: '_valueDecimal', type: 'Element', isArray: false, isRequired: false },
  { name: 'valueInteger', type: 'integer', isArray: false, isRequired: false },
  { name: '_valueInteger', type: 'Element', isArray: false, isRequired: false },
  { name: 'valueDate', type: 'date', isArray: false, isRequired: false },
  { name: '_valueDate', type: 'Element', isArray: false, isRequired: false },
  { name: 'valueDateTime', type: 'dateTime', isArray: false, isRequired: false },
  { name: '_valueDateTime', type: 'Element', isArray: false, isRequired: false },
  { name: 'valueTime', type: 'time', isArray: false, isRequired: false },
  { name: '_valueTime', type: 'Element', isArray: false, isRequired: false },
  { name: 'valueString', type: 'string', isArray: false, isRequired: false },
  { name: '_valueString', type: 'Element', isArray: false, isRequired: false },
  { name: 'valueUri', type: 'uri', isArray: false, isRequired: false },
  { name: '_valueUri', type: 'Element', isArray: false, isRequired: false },
  { name: 'valueAttachment', type: 'Attachment', isArray: false, isRequired: false },
  { name: 'valueCoding', type: 'Coding', isArray: false, isRequired: false },
  { name: 'valueQuantity', type: 'Quantity', isArray: false, isRequired: false },
  { name: 'valueReference', type: 'Reference', isArray: false, isRequired: false, referenceTypes: ['Any'] },
]);

// validate if initial value exists
function validateInitialValue(
  dataToValidate: IQuestionnaireInitial,
  path: string,
  errors: IOperationOutcomeIssue[],
): void {
  if (
    !dataToValidate.valueBoolean &&
    !dataToValidate.valueDecimal &&
    !dataToValidate.valueInteger &&
    !dataToValidate.valueDate &&
    !dataToValidate.valueDateTime &&
    !dataToValidate.valueTime &&
    !dataToValidate.valueString &&
    !dataToValidate.valueUri &&
    !dataToValidate.valueAttachment &&
    !dataToValidate.valueCoding &&
    !dataToValidate.valueQuantity &&
    !dataToValidate.valueReference
  ) {
    errors.push(
      new OperationOutcomeIssueException({
        severity: 'error',
        code: 'invalid',
        diagnostics: `Initial value must be provided`,
        details: {
          text: `Path: ${path}.value[x]`,
        },
      }),
    );
  }
}

/**
 * @description Validates the QuestionnaireInitial model
 * @param dataToValidate - the QuestionnaireInitial model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function QuestionnaireInitialValidator<T extends IQuestionnaireInitial>(
  dataToValidate: T,
  path = 'QuestionnaireInitial',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new QuestionnaireInitial());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
    additionalValidation: [validateInitialValue],
  });
}
