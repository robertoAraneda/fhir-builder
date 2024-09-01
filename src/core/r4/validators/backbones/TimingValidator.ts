import { createBackboneDefinition } from '../base/definitions';
import { IOperationOutcomeIssue, ITiming } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';

const modelFields = createBackboneDefinition<ITiming>([
  { name: 'event', isArray: true, type: 'dateTime', isRequired: false },
  { name: 'repeat', isArray: false, type: 'Repeat', isRequired: false },
  { name: 'code', isArray: false, type: 'CodeableConcept', isRequired: false },
]);

export const TimingValidator = (dataToValidate: ITiming, path = 'Timing', errors: IOperationOutcomeIssue[]) => {
  ModelValidator<ITiming>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
  });
};
