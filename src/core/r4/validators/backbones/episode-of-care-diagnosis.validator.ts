import { createBackboneDefinition } from '../base/definitions';
import { IEpisodeOfCareDiagnosis, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';

const modelDefinition = createBackboneDefinition<IEpisodeOfCareDiagnosis>([
  { name: 'condition', type: 'Reference', isArray: false, isRequired: true, referenceTypes: ['Condition'] },
  { name: 'role', type: 'CodeableConcept', isArray: false, isRequired: false },
  { name: 'rank', type: 'positiveInt', isArray: false, isRequired: false },
]);

export function EpisodeOfCareDiagnosisValidator(
  dataToValidate: IEpisodeOfCareDiagnosis,
  path = 'EpisodeOfCareDiagnosis',
  errors: IOperationOutcomeIssue[],
): void {
  ModelValidator<IEpisodeOfCareDiagnosis>({
    path,
    dataToValidate,
    modelDefinition,
    errors,
  });
}
