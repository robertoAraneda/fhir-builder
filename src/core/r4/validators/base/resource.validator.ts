import { ValReturnType } from './datatype.validator';
import { ConformanceValidator } from './conformance.validator';
import { EpisodeOfCareValidator, PatientValidator } from '../resources';
import type { ResourceType } from 'fhirtypes/dist/r4';

export interface InternalResourceValidatorType {
  Patient: typeof PatientValidator;
  EpisodeOfCare: typeof EpisodeOfCareValidator;
}

export const InternalResourceValidator: Record<
  Extract<ResourceType, 'Patient' | 'EpisodeOfCare'>,
  (dataToValidate: any, path: string) => void
> = {
  Patient: PatientValidator,
  EpisodeOfCare: EpisodeOfCareValidator,
};

export const ResourceValidator = {
  Patient: (args: unknown): ValReturnType => ConformanceValidator(args, 'Patient'),
  EpisodeOfCare: (args: unknown): ValReturnType => ConformanceValidator(args, 'EpisodeOfCare'),
};
