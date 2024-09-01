import { createBackboneDefinition } from '../base/definitions';
import { IEpisodeOfCareDiagnosis, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { EpisodeOfCareDiagnosis } from '../../../../r4/models';

/**
 * @description The model fields for the EpisodeOfCareDiagnosis model
 */
const modelFields = createBackboneDefinition<IEpisodeOfCareDiagnosis>([
  { name: 'condition', type: 'Reference', isArray: false, isRequired: true, referenceTypes: ['Condition'] },
  { name: 'role', type: 'CodeableConcept', isArray: false, isRequired: false },
  { name: 'rank', type: 'positiveInt', isArray: false, isRequired: false },
  { name: '_rank', type: 'Element', isArray: false, isRequired: false },
]);

/**
 * @description Validates the EpisodeOfCareDiagnosis model
 * @param dataToValidate - the EpisodeOfCareDiagnosis model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function EpisodeOfCareDiagnosisValidator<T extends IEpisodeOfCareDiagnosis>(
  dataToValidate: T,
  path = 'EpisodeOfCareDiagnosis',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new EpisodeOfCareDiagnosis());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
  });
}
