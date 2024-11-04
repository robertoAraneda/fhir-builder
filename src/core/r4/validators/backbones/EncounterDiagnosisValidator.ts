import { createBackboneDefinition } from '../base/definitions';
import { IEncounterDiagnosis, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { EncounterDiagnosis } from '../../../../r4/models';

/**
 * @description The model fields for the EncounterDiagnosis model
 */
const modelFields = createBackboneDefinition<IEncounterDiagnosis>([
  {
    name: 'condition',
    type: 'Reference',
    isArray: false,
    isRequired: true,
    referenceTypes: ['Condition', 'Procedure'],
  },
  { name: 'use', type: 'CodeableConcept', isArray: false, isRequired: false },
  { name: 'rank', type: 'positiveInt', isArray: false, isRequired: false },
  { name: '_rank', type: 'Element', isArray: false, isRequired: false },
]);

/**
 * @description Validates the EncounterDiagnosis model
 * @param dataToValidate - the EncounterDiagnosis model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function EncounterDiagnosisValidator<T extends IEncounterDiagnosis>(
  dataToValidate: T,
  path = 'EncounterDiagnosis',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new EncounterDiagnosis());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
  });
}
