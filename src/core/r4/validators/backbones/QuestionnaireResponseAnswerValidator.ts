import { createBackboneDefinition } from '../base/definitions';
import { IQuestionnaireResponseAnswer, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { QuestionnaireResponseAnswer } from '../../../../r4/models';

/**
 * @description The model fields for the QuestionnaireResponseAnswer model
 */
const modelFields = createBackboneDefinition<IQuestionnaireResponseAnswer>([
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
  { name: 'item', type: 'QuestionnaireResponseItem', isArray: true, isRequired: false },
]);

/**
 * @description Validates the QuestionnaireResponseAnswer model
 * @param dataToValidate - the QuestionnaireResponseAnswer model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function QuestionnaireResponseAnswerValidator<T extends IQuestionnaireResponseAnswer>(
  dataToValidate: T,
  path = 'QuestionnaireResponseAnswer',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new QuestionnaireResponseAnswer());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
  });
}
