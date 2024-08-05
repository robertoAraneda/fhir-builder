import { ValReturnType } from './datatype.validator';
import { PatientValidator } from '../resources/patient.validator';
import { conformanceValidation } from './object.validator';

export type InternalResourceValidatorType = {
  Patient: typeof PatientValidator;
};

export const InternalResourceValidator: InternalResourceValidatorType = {
  Patient: PatientValidator,
};

export const ResourceValidator = {
  Patient: (args: any): ValReturnType => conformanceValidation(args, 'Patient'),
};
