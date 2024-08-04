import { ValidatorType } from './internal.validator';
import { parseValidator } from './base.validator';
import { ValReturnType } from './datatype.validator';

export const conformanceValidation = <T>(args: T, validatorName: keyof ValidatorType): ValReturnType => {
  try {
    const validator = parseValidator(validatorName);

    validator(args, `${validatorName}`);
    return { error: null };
  } catch (e: any) {
    return { error: e.message };
  }
};
