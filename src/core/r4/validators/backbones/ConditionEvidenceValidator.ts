import { createBackboneDefinition } from '../base/definitions';
import { IConditionEvidence, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { ConditionEvidence } from '../../../../r4/models';

/**
 * @description The model fields for the ConditionEvidence model
 */
const modelFields = createBackboneDefinition<IConditionEvidence>([
  { name: 'code', type: 'CodeableConcept', isArray: true, isRequired: false },
  { name: 'detail', type: 'Reference', isArray: true, isRequired: false, referenceTypes: ['Any'] },
]);

/**
 * @description Validates the ConditionEvidence model
 * @param dataToValidate - the ConditionEvidence model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function ConditionEvidenceValidator<T extends IConditionEvidence>(
  dataToValidate: T,
  path = 'ConditionEvidence',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new ConditionEvidence());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
  });
}
