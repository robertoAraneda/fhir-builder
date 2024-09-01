import { ConformanceValidator } from './ConformanceValidator';
import {
  AllergyIntoleranceValidator,
  BundleValidator,
  CareTeamValidator,
  CoverageValidator,
  EpisodeOfCareValidator,
  ObservationValidator,
  PatientValidator,
  ProcedureValidator,
} from '../resources';
import { ServiceRequestValidator } from '../resources';
import { IOperationOutcome, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';

type ResourceType =
  | 'Patient'
  | 'EpisodeOfCare'
  | 'ServiceRequest'
  | 'Coverage'
  | 'Procedure'
  | 'AllergyIntolerance'
  | 'Bundle'
  | 'CareTeam'
  | 'Observation';

export const InternalResourceValidator: Record<
  ResourceType,
  (dataToValidate: any, path: string, errors: IOperationOutcomeIssue[]) => void
> = {
  Patient: PatientValidator,
  EpisodeOfCare: EpisodeOfCareValidator,
  ServiceRequest: ServiceRequestValidator,
  Coverage: CoverageValidator,
  Bundle: BundleValidator,
  AllergyIntolerance: AllergyIntoleranceValidator,
  CareTeam: CareTeamValidator,
  Observation: ObservationValidator,
  Procedure: ProcedureValidator,
};

const createConformanceValidator =
  <T extends ResourceType>(resourceType: T) =>
  (args: unknown) =>
    ConformanceValidator(resourceType, args);

export const ResourcesValidator: Record<
  `${ResourceType}Validator`,
  (args: unknown) => { isValid: boolean; operationOutcome: IOperationOutcome }
> = {
  PatientValidator: createConformanceValidator('Patient'),
  EpisodeOfCareValidator: createConformanceValidator('EpisodeOfCare'),
  ServiceRequestValidator: createConformanceValidator('ServiceRequest'),
  CoverageValidator: createConformanceValidator('Coverage'),
  BundleValidator: createConformanceValidator('Bundle'),
  ObservationValidator: createConformanceValidator('Observation'),
  ProcedureValidator: createConformanceValidator('Procedure'),
  AllergyIntoleranceValidator: createConformanceValidator('AllergyIntolerance'),
  CareTeamValidator: createConformanceValidator('CareTeam'),
};
