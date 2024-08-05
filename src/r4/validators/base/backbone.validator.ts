import { PatientCommunicationValidator } from '../backbones/patient-communication.validator';
import { PatientContactValidator } from '../backbones/patient-contact.validator';
import { PatientLinkValidator } from '../backbones/patient-link.validator';

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
