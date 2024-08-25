import { fhirR4Types } from './internal.validator';
import { parseValidator } from './base.validator';
import { IOperationOutcome } from 'fhirtypes/dist/r4';

export const ConformanceValidator = <T>(
  args: T,
  validatorName: fhirR4Types,
): { isValid: boolean; operationOutcome: IOperationOutcome } => {
  const errors: any[] = [];
  const validator = parseValidator(validatorName);

  validator(args, `${validatorName}`, errors);

  return {
    isValid: errors.length < 1,
    operationOutcome: {
      issue: errors,
    },
  };
};
