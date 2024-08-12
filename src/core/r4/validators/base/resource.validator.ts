import { ValReturnType } from './datatype.validator';
import { ConformanceValidator } from './conformance.validator';
import { EpisodeOfCareValidator, PatientValidator } from '../resources';
import type { ResourceType } from 'fhirtypes/dist/r4';
import { ServiceRequestValidator } from '../resources/service-request.validator';

type ResourceKey = Extract<ResourceType, 'Patient' | 'EpisodeOfCare' | 'ServiceRequest'>;

export const InternalResourceValidator: Record<ResourceKey, (dataToValidate: any, path: string) => void> = {
  Patient: PatientValidator,
  EpisodeOfCare: EpisodeOfCareValidator,
  ServiceRequest: ServiceRequestValidator,
};

export const ResourceValidator: Record<ResourceKey, (args: unknown) => ValReturnType> = {
  Patient: (args: unknown) => ConformanceValidator(args, 'Patient'),
  EpisodeOfCare: (args: unknown) => ConformanceValidator(args, 'EpisodeOfCare'),
  ServiceRequest: (args: unknown) => ConformanceValidator(args, 'ServiceRequest'),
};
