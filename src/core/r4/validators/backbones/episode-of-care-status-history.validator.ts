import { createBackboneDefinition } from '../base/definitions';
import { IEpisodeOfCareStatusHistory, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';

const modelDefinition = createBackboneDefinition<IEpisodeOfCareStatusHistory>([
  { name: 'status', type: 'code', isRequired: true, isArray: false },
  { name: 'period', type: 'Period', isRequired: true, isArray: false },
  { name: '_status', type: 'Element', isRequired: false, isArray: false },
]);

export function EpisodeOfCareStatusHistoryValidator(
  dataToValidate: IEpisodeOfCareStatusHistory,
  path = 'EpisodeOfCareStatusHistory',
  errors: IOperationOutcomeIssue[],
) {
  return ModelValidator<IEpisodeOfCareStatusHistory>({
    dataToValidate,
    path,
    modelDefinition,
    errors,
  });
}
