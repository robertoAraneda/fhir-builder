import { createBackboneDefinition } from '../base/definitions';
import { IConditionStage, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { ConditionStage } from '../../../../r4/models';

/**
 * @description The model fields for the ConditionStage model
 */
const modelFields = createBackboneDefinition<IConditionStage>([
  { name: 'summary', type: 'CodeableConcept', isArray: false, isRequired: false },
  {
    name: 'assessment',
    type: 'Reference',
    isArray: true,
    isRequired: false,
    referenceTypes: ['ClinicalImpression', 'DiagnosticReport', 'Observation'],
  },
  { name: 'type', type: 'CodeableConcept', isArray: false, isRequired: false },
]);

/**
 * @description Validates the ConditionStage model
 * @param dataToValidate - the ConditionStage model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function ConditionStageValidator<T extends IConditionStage>(
  dataToValidate: T,
  path = 'ConditionStage',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new ConditionStage());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
  });
}
