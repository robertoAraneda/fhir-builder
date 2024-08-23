import { INarrative, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { createDatatypeDefinition } from '../base/definitions';
import { ModelValidator } from '../base';
import { NarrativeStatusEnum } from 'fhirtypes/dist/r4/enums';

const narrativeStatusValues: readonly string[] = Object.values(NarrativeStatusEnum);

const modelFields = createDatatypeDefinition<INarrative>([
  { name: 'status', type: 'code', isRequired: true, isArray: false, enumValues: narrativeStatusValues },
  { name: 'div', type: 'string', isRequired: true, isArray: false },
]);

export function NarrativeValidator(
  dataToValidate: INarrative,
  path = 'Narrative',
  errors: IOperationOutcomeIssue[],
): void {
  ModelValidator<INarrative>({
    dataToValidate,
    path,
    modelDefinition: modelFields,
    errors,
  });
}
