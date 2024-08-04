import { PatientCommunicationValidator } from '../backbones/patient-communication.validator';
import { IGenericObject } from '../../interfaces';
import { ValReturnType } from './datatype.validator';
import { IPatientCommunication, IPatientLink } from 'fhirtypes/dist/r4';
import { PatientContactValidator } from '../backbones/patient-contact.validator';
import { PatientLinkValidator } from '../backbones/patient-link.validator';

export const PatientCommunicationVal = (args: IGenericObject): ValReturnType => {
  try {
    PatientCommunicationValidator(args as IPatientCommunication | IPatientCommunication[]);
    return { error: null };
  } catch (e: any) {
    return { error: e.message };
  }
};

export const PatientContactVal = (args: IGenericObject): ValReturnType => {
  try {
    PatientContactValidator(args);
    return { error: null };
  } catch (e: any) {
    return { error: e.message };
  }
};

export const PatientLinkVal = (args: IGenericObject): ValReturnType => {
  try {
    PatientLinkValidator(args as IPatientLink | IPatientLink[]);
    return { error: null };
  } catch (e: any) {
    return { error: e.message };
  }
};

export type InternalBackboneValidatorType = {
  PatientCommunication: typeof PatientCommunicationValidator;
  PatientContact: typeof PatientContactValidator;
  PatientLink: typeof PatientLinkValidator;
};

export const InternalBackboneValidator: InternalBackboneValidatorType = {
  PatientCommunication: PatientCommunicationValidator,
  PatientContact: PatientContactValidator,
  PatientLink: PatientLinkValidator,
};

export type BackboneValidatorType = {
  PatientCommunication: (args: IGenericObject) => ValReturnType;
  PatientContact: (args: IGenericObject) => ValReturnType;
  PatientLink: (args: IGenericObject) => ValReturnType;
};

export const BackboneValidator: BackboneValidatorType = {
  PatientCommunication: PatientCommunicationVal,
  PatientContact: PatientContactVal,
  PatientLink: PatientLinkVal,
};
