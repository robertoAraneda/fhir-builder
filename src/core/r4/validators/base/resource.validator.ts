import { ValReturnType } from './datatype.validator';

import { ConformanceValidator } from './conformance.validator';
import { PatientValidator } from '../resources';

export type InternalResourceValidatorType = {
  Patient: typeof PatientValidator;
};

export const InternalResourceValidator: InternalResourceValidatorType = {
  Patient: PatientValidator,
};

export const ResourceValidator = {
  Patient: (args: any): ValReturnType => ConformanceValidator(args, 'Patient'),
};
