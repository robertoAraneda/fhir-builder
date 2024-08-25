import {
  PatientCommunicationValidator,
  PatientContactValidator,
  PatientLinkValidator,
  TimingValidator,
  EpisodeOfCareDiagnosisValidator,
  EpisodeOfCareStatusHistoryValidator,
} from '../backbones';

export const InternalBackboneValidator = {
  PatientCommunication: PatientCommunicationValidator,
  PatientContact: PatientContactValidator,
  PatientLink: PatientLinkValidator,
  EpisodeOfCareDiagnosis: EpisodeOfCareDiagnosisValidator,
  EpisodeOfCareStatusHistory: EpisodeOfCareStatusHistoryValidator,
  Timing: TimingValidator,
};
