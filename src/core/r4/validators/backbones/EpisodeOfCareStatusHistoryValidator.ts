import { createBackboneDefinition } from '../base/definitions';
import { IEpisodeOfCareStatusHistory, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { EpisodeOfCareStatusHistory } from '../../../../r4/models';

/**
 * @description The model fields for the EpisodeOfCareStatusHistory model
 */
const modelFields = createBackboneDefinition<IEpisodeOfCareStatusHistory>([
  {
    name: 'status',
    type: 'code',
    isArray: false,
    isRequired: true,
    enumValues: ['planned', 'waitlist', 'active', 'onhold', 'finished', 'cancelled', 'entered-in-error'],
  },
  { name: '_status', type: 'Element', isArray: false, isRequired: false },
  { name: 'period', type: 'Period', isArray: false, isRequired: true },
]);

/**
 * @description Validates the EpisodeOfCareStatusHistory model
 * @param dataToValidate - the EpisodeOfCareStatusHistory model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function EpisodeOfCareStatusHistoryValidator<T extends IEpisodeOfCareStatusHistory>(
  dataToValidate: T,
  path = 'EpisodeOfCareStatusHistory',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new EpisodeOfCareStatusHistory());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
  });
}
