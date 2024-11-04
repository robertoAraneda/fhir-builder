import { createBackboneDefinition } from '../base/definitions';
import { IEncounterClassHistory, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { EncounterClassHistory } from '../../../../r4/models';

/**
 * @description The model fields for the EncounterClassHistory model
 */
const modelFields = createBackboneDefinition<IEncounterClassHistory>([
  { name: 'class', type: 'Coding', isArray: false, isRequired: true },
  { name: 'period', type: 'Period', isArray: false, isRequired: true },
]);

/**
 * @description Validates the EncounterClassHistory model
 * @param dataToValidate - the EncounterClassHistory model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function EncounterClassHistoryValidator<T extends IEncounterClassHistory>(
  dataToValidate: T,
  path = 'EncounterClassHistory',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new EncounterClassHistory());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
  });
}
