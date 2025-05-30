import { ConformanceValidator } from './ConformanceValidator';
import * as resources from '../resources';
import { IOperationOutcome, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';

type RemoveValidatorSuffix<T extends string> = T extends `${infer U}Validator` ? U : T;
type ValidatorTypes = RemoveValidatorSuffix<keyof typeof resources>;

export const InternalResourceValidator: Record<
  ValidatorTypes,
  (dataToValidate: any, path: string, errors: IOperationOutcomeIssue[]) => void
> = {
  Patient: resources.PatientValidator,
  EpisodeOfCare: resources.EpisodeOfCareValidator,
  ServiceRequest: resources.ServiceRequestValidator,
  Coverage: resources.CoverageValidator,
  Bundle: resources.BundleValidator,
  AllergyIntolerance: resources.AllergyIntoleranceValidator,
  CareTeam: resources.CareTeamValidator,
  Observation: resources.ObservationValidator,
  Procedure: resources.ProcedureValidator,
  Organization: resources.OrganizationValidator,
  HealthcareService: resources.HealthcareServiceValidator,
  Encounter: resources.EncounterValidator,
  Questionnaire: resources.QuestionnaireValidator,
  QuestionnaireResponse: resources.QuestionnaireResponseValidator,
  Practitioner: resources.PractitionerValidator,
  PractitionerRole: resources.PractitionerRoleValidator,
  Condition: resources.ConditionValidator,
  CarePlan: resources.CarePlanValidator,
  RelatedPerson: resources.RelatedPersonValidator,
  Location: resources.LocationValidator,
  Appointment: resources.AppointmentValidator,
};

const createConformanceValidator =
  <T extends ValidatorTypes>(resourceType: T) =>
  (args: unknown) =>
    ConformanceValidator(resourceType, args);

export const ResourcesValidator: Record<
  `${ValidatorTypes}Validator`,
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
  OrganizationValidator: createConformanceValidator('Organization'),
  HealthcareServiceValidator: createConformanceValidator('HealthcareService'),
  EncounterValidator: createConformanceValidator('Encounter'),
  QuestionnaireValidator: createConformanceValidator('Questionnaire'),
  QuestionnaireResponseValidator: createConformanceValidator('QuestionnaireResponse'),
  PractitionerValidator: createConformanceValidator('Practitioner'),
  PractitionerRoleValidator: createConformanceValidator('PractitionerRole'),
  ConditionValidator: createConformanceValidator('Condition'),
  CarePlanValidator: createConformanceValidator('CarePlan'),
  RelatedPersonValidator: createConformanceValidator('RelatedPerson'),
  LocationValidator: createConformanceValidator('Location'),
  AppointmentValidator: createConformanceValidator('Appointment'),
};
