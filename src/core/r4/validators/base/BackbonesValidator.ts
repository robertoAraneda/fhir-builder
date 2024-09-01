import * as BackboneValidators from '../backbones';
import { IOperationOutcomeIssue } from 'fhirtypes/dist/r4';

type RemoveValidatorSuffix<T extends string> = T extends `${infer U}Validator` ? U : T;

type ValidatorTypes = RemoveValidatorSuffix<keyof typeof BackboneValidators>;

export const BackbonesValidator: Record<
  ValidatorTypes,
  (dataToValidate: any, path: string, errors: IOperationOutcomeIssue[]) => void
> = {
  PatientCommunication: BackboneValidators.PatientCommunicationValidator,
  PatientContact: BackboneValidators.PatientContactValidator,
  PatientLink: BackboneValidators.PatientLinkValidator,
  EpisodeOfCareDiagnosis: BackboneValidators.EpisodeOfCareDiagnosisValidator,
  EpisodeOfCareStatusHistory: BackboneValidators.EpisodeOfCareStatusHistoryValidator,
  Timing: BackboneValidators.TimingValidator,
  CoverageClass: BackboneValidators.CoverageClassValidator,
  CoverageCostToBeneficiary: BackboneValidators.CoverageCostToBeneficiaryValidator,
  AllergyIntoleranceReaction: BackboneValidators.AllergyIntoleranceReactionValidator,
  BundleEntry: BackboneValidators.BundleEntryValidator,
  BundleLink: BackboneValidators.BundleLinkValidator,
  BundleRequest: BackboneValidators.BundleRequestValidator,
  BundleResponse: BackboneValidators.BundleResponseValidator,
  BundleSearch: BackboneValidators.BundleSearchValidator,
  CareTeamParticipant: BackboneValidators.CareTeamParticipantValidator,
  CoverageException: BackboneValidators.CoverageExceptionValidator,
  ObservationComponent: BackboneValidators.ObservationComponentValidator,
  ObservationReferenceRange: BackboneValidators.ObservationReferenceRangeValidator,
  ProcedureFocalDevice: BackboneValidators.ProcedureFocalDeviceValidator,
  ProcedurePerformer: BackboneValidators.ProcedurePerformerValidator,
};
