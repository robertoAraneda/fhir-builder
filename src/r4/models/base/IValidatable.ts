import { IOperationOutcome } from 'fhirtypes/dist/r4';

export interface IValidatable {
  validate(): { isValid: boolean; operationOutcome: IOperationOutcome };
}
