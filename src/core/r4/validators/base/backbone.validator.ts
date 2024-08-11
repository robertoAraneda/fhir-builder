import type { BackboneElementType } from 'fhirtypes/dist/r4/types';
import { PatientCommunicationValidator, PatientContactValidator, PatientLinkValidator } from '../backbones';
import { EpisodeOfCareDiagnosisValidator } from '../backbones/episode-of-care-diagnosis.validator';
import { EpisodeOfCareStatusHistoryValidator } from '../backbones/episode-of-care-status-history.validator';

export interface InternalBackboneValidatorType {
  PatientCommunication: typeof PatientCommunicationValidator;
  PatientContact: typeof PatientContactValidator;
  PatientLink: typeof PatientLinkValidator;
}

type InternalBackboneElementType =
  | Extract<BackboneElementType, 'PatientCommunication' | 'PatientContact' | 'PatientLink'>
  // TODO - this is a placeholder for now
  | 'EpisodeOfCareDiagnosis'
  | 'EpisodeOfCareStatusHistory';

export const InternalBackboneValidator: {
  [key in InternalBackboneElementType]: (args: any, path: string) => void;
} = {
  PatientCommunication: PatientCommunicationValidator,
  PatientContact: PatientContactValidator,
  PatientLink: PatientLinkValidator,
  EpisodeOfCareDiagnosis: EpisodeOfCareDiagnosisValidator,
  EpisodeOfCareStatusHistory: EpisodeOfCareStatusHistoryValidator,
};
