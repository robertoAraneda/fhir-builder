import { createBackboneDefinition } from '../base/definitions';
import { IEncounterStatusHistory, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { EncounterStatusHistory } from '../../../../r4/models';

/**
 * @description The model fields for the EncounterStatusHistory model
 */
const modelFields = createBackboneDefinition<IEncounterStatusHistory>([
  {
    name: 'status',
    type: 'code',
    isArray: false,
    isRequired: true,
    enumValues: [
      'planned',
      'arrived',
      'triaged',
      'in-progress',
      'onleave',
      'finished',
      'cancelled',
      'entered-in-error',
      'unknown',
    ],
  },
  { name: '_status', type: 'Element', isArray: false, isRequired: false },
  { name: 'period', type: 'Period', isArray: false, isRequired: true },
]);

/**
 * @description Validates the EncounterStatusHistory model
 * @param dataToValidate - the EncounterStatusHistory model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function EncounterStatusHistoryValidator<T extends IEncounterStatusHistory>(
  dataToValidate: T,
  path = 'EncounterStatusHistory',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new EncounterStatusHistory());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
  });
}
