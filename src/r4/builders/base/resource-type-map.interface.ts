import {
  IAccount,
  IBundle,
  IEncounter,
  IEndpoint,
  IEpisodeOfCare,
  IOperationOutcome,
  IOrganization,
  IPatient,
  IPerson,
  IPractitionerRole,
  IRelatedPerson,
} from 'fhirtypes/dist/r4';
import { AttributeDefinition } from '../../../core/r4/validators/base/definitions';

export interface ResourceTypeMap {
  Account: IAccount;
  // ActivityDefinition: IActivityDefinition;
  // AdverseEvent: IAdverseEvent;
  // AllergyIntolerance: IAllergyIntolerance;
  // Appointment: IAppointment;
  // AppointmentResponse: IAppointmentResponse;
  // AuditEvent: IAuditEvent;
  // Basic: IBasic;
  // Binary: IBinary;
  // BiologicallyDerivedProduct: IBiologicallyDerivedProduct;
  // BodyStructure: IBodyStructure;
  Bundle: IBundle;
  // CapabilityStatement: ICapabilityStatement;
  // CarePlan: ICarePlan;
  // CareTeam: ICareTeam;
  // CatalogEntry: ICatalogEntry;
  // ChargeItem: IChargeItem;
  // ChargeItemDefinition: IChargeItemDefinition;
  // Claim: IClaim;
  // ClaimResponse: IClaimResponse;
  // ClinicalImpression: IClinicalImpression;
  // CodeSystem: ICodeSystem;
  // Communication: ICommunication;
  // CommunicationRequest: ICommunicationRequest;
  // CompartmentDefinition: ICompartmentDefinition;
  // Composition: IComposition;
  // ConceptMap: IConceptMap;
  // Condition: ICondition;
  // Consent: IConsent;
  // Contract: IContract;
  // Coverage: ICoverage;
  // CoverageEligibilityRequest: ICoverageEligibilityRequest;
  // CoverageEligibilityResponse: ICoverageEligibilityResponse;
  // DetectedIssue: IDetectedIssue;
  // Device: IDevice;
  // DeviceDefinition: IDeviceDefinition;
  // DeviceMetric: IDeviceMetric;
  // DeviceRequest: IDeviceRequest;
  // DeviceUseStatement: IDeviceUseStatement;
  // DiagnosticReport: IDiagnosticReport;
  // DocumentManifest: IDocumentManifest;
  // DocumentReference: IDocumentReference;
  // EffectEvidenceSynthesis: IEffectEvidenceSynthesis;
  Encounter: IEncounter;
  Endpoint: IEndpoint;
  // EnrollmentRequest: IEnrollmentRequest;
  // EnrollmentResponse: IEnrollmentResponse;
  EpisodeOfCare: IEpisodeOfCare;
  // EventDefinition: IEventDefinition;
  // Evidence: IEvidence;
  // EvidenceVariable: IEvidenceVariable;
  // ExampleScenario: IExampleScenario;
  // ExplanationOfBenefit: IExplanationOfBenefit;
  // FamilyMemberHistory: IFamilyMemberHistory;
  // Flag: IFlag;
  // Goal: IGoal;
  // GraphDefinition: IGraphDefinition;
  // Group: IGroup;
  // GuidanceResponse: IGuidanceResponse;
  // HealthcareService: IHealthcareService;
  // ImagingStudy: IImagingStudy;
  // Immunization: IImmunization;
  // ImmunizationEvaluation: IImmunizationEvaluation;
  // ImmunizationRecommendation: IImmunizationRecommendation;
  // ImplementationGuide: IImplementationGuide;
  // InsurancePlan: IInsurancePlan;
  // Invoice: IInvoice;
  // Library: ILibrary;
  // Linkage: ILinkage;
  // List: IList;
  // Location: ILocation;
  // Measure: IMeasure;
  // MeasureReport: IMeasureReport;
  // Media: IMedia;
  // Medication: IMedication;
  // MedicationAdministration: IMedicationAdministration;
  // MedicationDispense: IMedicationDispense;
  // MedicationKnowledge: IMedicationKnowledge;
  // MedicationRequest: IMedicationRequest;
  // MedicationStatement: IMedicationStatement;
  // MedicinalProduct: IMedicinalProduct;
  // MedicinalProductAuthorization: IMedicinalProductAuthorization;
  // MedicinalProductContraindication: IMedicinalProductContraindication;
  // MedicinalProductIndication: IMedicinalProductIndication;
  // MedicinalProductIngredient: IMedicinalProductIngredient;
  // MedicinalProductInteraction: IMedicinalProductInteraction;
  // MedicinalProductManufactured: IMedicinalProductManufactured;
  // MedicinalProductPackaged: IMedicinalProductPackaged;
  // MedicinalProductPharmaceutical: IMedicinalProductPharmaceutical;
  // MedicinalProductUndesirableEffect: IMedicinalProductUndesirableEffect;
  // MessageDefinition: IMessageDefinition;
  // MessageHeader: IMessageHeader;
  // MolecularSequence: IMolecularSequence;
  // NamingSystem: INamingSystem;
  // NutritionOrder: INutritionOrder;
  // Observation: IObservation;
  // ObservationDefinition: IObservationDefinition;
  // OperationDefinition: IOperationDefinition;
  OperationOutcome: IOperationOutcome;
  Organization: IOrganization;
  // OrganizationAffiliation: IOrganizationAffiliation;
  Patient: IPatient;
  // PaymentNotice: IPaymentNotice;
  // PaymentReconciliation: IPaymentReconciliation;
  Person: IPerson;
  // PlanDefinition: IPlanDefinition;
  // Practitioner: IPractitioner;
  PractitionerRole: IPractitionerRole;
  // Procedure: IProcedure;
  // Provenance: IProvenance;
  // Questionnaire: IQuestionnaire;
  // QuestionnaireResponse: IQuestionnaireResponse;
  RelatedPerson: IRelatedPerson;
  // RequestGroup: IRequestGroup;
  // ResearchDefinition: IResearchDefinition;
  // ResearchElementDefinition: IResearchElementDefinition;
  // ResearchStudy: IResearchStudy;
  // ResearchSubject: IResearchSubject;
  // RiskAssessment: IRiskAssessment;
  // RiskEvidenceSynthesis: IRiskEvidenceSynthesis;
  // Schedule: ISchedule;
  // SearchParameter: ISearchParameter;
  // ServiceRequest: IServiceRequest;
  // Slot: ISlot;
  // Specimen: ISpecimen;
  // SpecimenDefinition: ISpecimenDefinition;
  // StructureDefinition: IStructureDefinition;
  // StructureMap: IStructureMap;
  // Subscription: ISubscription;
  // Substance: ISubstance;
  // SubstanceNucleicAcid: ISubstanceNucleicAcid;
  // SubstancePolymer: ISubstancePolymer;
  // SubstanceProtein: ISubstanceProtein;
  // SubstanceReferenceInformation: ISubstanceReferenceInformation;
  // SubstanceSourceMaterial: ISubstanceSourceMaterial;
  // SubstanceSpecification: ISubstanceSpecification;
  // SupplyDelivery: ISupplyDelivery;
  // SupplyRequest: ISupplyRequest;
  // Task: ITask;
  // TerminologyCapabilities: ITerminologyCapabilities;
  // TestReport: ITestReport;
  // TestScript: ITestScript;
  // ValueSet: IValueSet;
  // VerificationResult: IVerificationResult;
  // VisionPrescription: IVisionPrescription;
}

export type ResourceType = keyof ResourceTypeMap;
export type ResourceValue<T extends keyof ResourceTypeMap> = ResourceTypeMap[T];
export type ResourceTypesValues = ResourceTypeMap[keyof ResourceTypeMap];

type IsArray<T> = T extends Array<any> ? T : never;
type ExtractUnderscoreArrayKeys<T> = {
  [K in keyof T]: K extends `_${string}` ? (IsArray<T[K]> extends never ? never : K) : never;
}[keyof T];
export type PickUnderscoreArrayProperties<T> = Pick<T, ExtractUnderscoreArrayKeys<T>>;

export type NonUnderscoreKeys<T> = Extract<{ [K in keyof T]: K extends `_${string}` ? never : K }[keyof T], keyof T>;
export type UnderscoreKeys<T> = Extract<{ [K in keyof T]: K extends `_${string}` ? K : never }[keyof T], keyof T>;

type NonFunctionKeys<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any ? never : K;
}[keyof T];

function getNonFunctionKeys<T extends object>(obj: T): NonFunctionKeys<T>[] {
  return Object.keys(obj).filter((key) => typeof obj[key as keyof T] !== 'function') as NonFunctionKeys<T>[];
}

export function validateFields<T extends object>(modelFields: readonly AttributeDefinition<T>[], instance: any): void {
  const fieldsFromArray = modelFields.map((field) => field.name) as string[];

  const fieldsFromModel = getNonFunctionKeys(instance);

  const missingFields = fieldsFromModel.filter((field) => !fieldsFromArray.includes(field));

  if (missingFields.length > 0) {
    throw new Error(`Missing fields from model ${instance.constructor.name}: ${missingFields.join(', ')}`);
  }
}
