import { ConformanceValidator } from './conformance.validator';
import { EpisodeOfCareValidator, PatientValidator } from '../resources';
import { ServiceRequestValidator } from '../resources';

export const InternalResourceValidator = {
  Patient: PatientValidator,
  EpisodeOfCare: EpisodeOfCareValidator,
  ServiceRequest: ServiceRequestValidator,
};

export const ResourceValidator = {
  PatientValidator: (args: unknown) => ConformanceValidator(args, 'Patient'),
  EpisodeOfCareValidator: (args: unknown) => ConformanceValidator(args, 'EpisodeOfCare'),
  ServiceRequestValidator: (args: unknown) => ConformanceValidator(args, 'ServiceRequest'),
};
