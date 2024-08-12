import { createResourceDefinition } from '../base/definitions';
import { IServiceRequest } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { RequestIntentEnum, RequestPriorityEnum, RequestStatusEnum } from 'fhirtypes/dist/r4/enums';
import { ResourceException } from '../../../commons/exceptions/resource.exception';

const statusValues: readonly string[] = Object.values(RequestStatusEnum);
const intentValues: readonly string[] = Object.values(RequestIntentEnum);
const priorityValues: readonly string[] = Object.values(RequestPriorityEnum);

const modelFields = createResourceDefinition<IServiceRequest>([
  {
    name: 'identifier',
    type: 'Identifier',
    isArray: true,
    isRequired: false,
  },
  {
    name: 'instantiatesCanonical',
    type: 'canonical',
    isArray: true,
    isRequired: false,
  },
  {
    name: 'instantiatesUri',
    type: 'uri',
    isArray: true,
    isRequired: false,
  },
  {
    name: 'basedOn',
    type: 'Reference',
    isArray: true,
    isRequired: false,
    referenceTypes: ['CarePlan', 'ServiceRequest', 'MedicationRequest'],
  },
  {
    name: 'replaces',
    type: 'Reference',
    isArray: true,
    isRequired: false,
    referenceTypes: ['ServiceRequest'],
  },
  {
    name: 'requisition',
    type: 'Identifier',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'status',
    type: 'code',
    isArray: false,
    isRequired: true,
    enumValues: statusValues,
  },
  {
    name: 'intent',
    type: 'code',
    isArray: false,
    isRequired: true,
    enumValues: intentValues,
  },
  {
    name: 'category',
    type: 'CodeableConcept',
    isArray: true,
    isRequired: false,
  },
  {
    name: 'priority',
    type: 'code',
    isArray: false,
    isRequired: false,
    enumValues: priorityValues,
  },
  {
    name: 'doNotPerform',
    type: 'boolean',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'code',
    type: 'CodeableConcept',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'orderDetail',
    type: 'CodeableConcept',
    isArray: true,
    isRequired: false,
  },
  {
    name: 'quantityQuantity',
    type: 'Quantity',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'quantityRatio',
    type: 'Ratio',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'quantityRange',
    type: 'Range',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'subject',
    type: 'Reference',
    isArray: false,
    isRequired: true,
    referenceTypes: ['Patient', 'Group', 'Location', 'Device'],
  },
  {
    name: 'encounter',
    type: 'Reference',
    isArray: false,
    isRequired: false,
    referenceTypes: ['Encounter'],
  },
  {
    name: 'occurrenceDateTime',
    type: 'dateTime',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'occurrencePeriod',
    type: 'Period',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'occurrenceTiming',
    type: 'Timing',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'asNeededBoolean',
    type: 'boolean',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'asNeededCodeableConcept',
    type: 'CodeableConcept',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'authoredOn',
    type: 'dateTime',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'requester',
    type: 'Reference',
    isArray: false,
    isRequired: false,
    referenceTypes: ['Practitioner', 'PractitionerRole', 'Organization', 'Patient', 'RelatedPerson', 'Device'],
  },
  {
    name: 'performerType',
    type: 'CodeableConcept',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'performer',
    type: 'Reference',
    isArray: false,
    isRequired: false,
    referenceTypes: [
      'Practitioner',
      'PractitionerRole',
      'Organization',
      'CareTeam',
      'HealthcareService',
      'Patient',
      'Device',
      'RelatedPerson',
    ],
  },
  {
    name: 'locationCode',
    type: 'CodeableConcept',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'locationReference',
    type: 'Reference',
    isArray: false,
    isRequired: false,
    referenceTypes: ['Location'],
  },
  {
    name: 'reasonCode',
    type: 'CodeableConcept',
    isArray: true,
    isRequired: false,
  },
  {
    name: 'reasonReference',
    type: 'Reference',
    isArray: true,
    isRequired: false,
    referenceTypes: ['Condition', 'Observation', 'DiagnosticReport', 'DocumentReference'],
  },
  {
    name: 'insurance',
    type: 'Reference',
    isArray: true,
    isRequired: false,
    referenceTypes: ['Coverage', 'ClaimResponse'],
  },
  {
    name: 'supportingInfo',
    type: 'Reference',
    isArray: true,
    isRequired: false,
    referenceTypes: ['Any'],
  },
  {
    name: 'specimen',
    type: 'Reference',
    isArray: true,
    isRequired: false,
    referenceTypes: ['Specimen'],
  },
  {
    name: 'bodySite',
    type: 'CodeableConcept',
    isArray: true,
    isRequired: false,
  },
  {
    name: 'note',
    type: 'Annotation',
    isArray: true,
    isRequired: false,
  },
  {
    name: 'patientInstruction',
    type: 'string',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'relevantHistory',
    type: 'Reference',
    isArray: true,
    isRequired: false,
    referenceTypes: ['Provenance'],
  },
  {
    name: '_instantiatesCanonical',
    type: 'Element',
    isRequired: false,
    isArray: true,
  },
  {
    name: '_instantiatesUri',
    type: 'Element',
    isRequired: false,
    isArray: true,
  },
  {
    name: '_status',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_intent',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_priority',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_patientInstruction',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_authoredOn',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_doNotPerform',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
]);

const ConstraintValidator = (dataToValidate: IServiceRequest, path: string): void => {
  // orderDetail SHALL only be present if code is present
  if (dataToValidate.orderDetail && !dataToValidate.code) {
    throw new ResourceException('ServiceRequest', [
      {
        constraint: {
          id: 'prr-1',
          level: 'Rule',
          description: 'orderDetail SHALL only be present if code is present',
          location: `${path}.orderDetail`,
        },
      },
    ]);
  }
};

export const ServiceRequestValidator = (dataToValidate: IServiceRequest, path = 'EpisodeOfCare'): void => {
  ModelValidator<IServiceRequest>({
    dataToValidate,
    path,
    modelDefinition: modelFields,
    additionalValidation: [ConstraintValidator],
  });
};
