import { fhirR4Types } from './internal.validator';
import { ValReturnType } from './datatype.validator';
import { parseValidator } from './base.validator';

export const ConformanceValidator = <T>(args: T, validatorName: fhirR4Types): ValReturnType => {
  try {
    const validator = parseValidator(validatorName);

    validator(args, `${validatorName}`);
    return { error: null };
  } catch (e: any) {
    return { error: e.message };
  }
};
