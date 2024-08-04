import { IGenericObject } from '../../interfaces';
import { ValReturnType } from './datatype.validator';
import { PatientValidator } from '../resources/patient.validator';

export const PatientVal = (args: IGenericObject): ValReturnType => {
  try {
    PatientValidator(args);
    return { error: null };
  } catch (e: any) {
    return { error: e.message };
  }
};

export type InternalResourceValidatorType = {
  Patient: typeof PatientValidator;
};

export const InternalResourceValidator: InternalResourceValidatorType = {
  Patient: PatientValidator,
};

export type ResourceValidatorType = {
  Patient: (args: IGenericObject) => ValReturnType;
};

export const ResourceValidator: ResourceValidatorType = {
  Patient: PatientVal,
};
