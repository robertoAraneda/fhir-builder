import { BackboneElementType } from 'fhirtypes/dist/r4/types';
import { PatientCommunicationValidator, PatientContactValidator, PatientLinkValidator } from '../backbones';

export type InternalBackboneValidatorType = {
  PatientCommunication: typeof PatientCommunicationValidator;
  PatientContact: typeof PatientContactValidator;
  PatientLink: typeof PatientLinkValidator;
};

type InternalBackboneElementType = Extract<
  BackboneElementType,
  'PatientCommunication' | 'PatientContact' | 'PatientLink'
>;

export const InternalBackboneValidator: { [key in InternalBackboneElementType]: (args: any, path: string) => void } = {
  PatientCommunication: PatientCommunicationValidator,
  PatientContact: PatientContactValidator,
  PatientLink: PatientLinkValidator,
};
