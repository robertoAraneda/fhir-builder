import { createResourceDefinition } from '../base/definitions';
import { IServiceRequest, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { ServiceRequest } from '../../../../r4/models';
import { OperationOutcomeIssueException } from '../../../commons/exceptions/operation-outcome.exception';

/**
 * @description The model fields for the ServiceRequest model
 */
const modelFields = createResourceDefinition<IServiceRequest>([
  { name: 'identifier', type: 'Identifier', isArray: true, isRequired: false },
  { name: 'instantiatesCanonical', type: 'canonical', isArray: true, isRequired: false },
  { name: 'instantiatesUri', type: 'uri', isArray: true, isRequired: false },
  { name: '_instantiatesUri', type: 'Element', isArray: true, isRequired: false },
  {
    name: 'basedOn',
    type: 'Reference',
    isArray: true,
    isRequired: false,
    referenceTypes: ['CarePlan', 'ServiceRequest', 'MedicationRequest'],
  },
  { name: 'replaces', type: 'Reference', isArray: true, isRequired: false, referenceTypes: ['ServiceRequest'] },
  { name: 'requisition', type: 'Identifier', isArray: false, isRequired: false },
  {
    name: 'status',
    type: 'code',
    isArray: false,
    isRequired: true,
    enumValues: ['draft', 'active', 'on-hold', 'revoked', 'completed', 'entered-in-error', 'unknown'],
  },
  { name: '_status', type: 'Element', isArray: false, isRequired: false },
  {
    name: 'intent',
    type: 'code',
    isArray: false,
    isRequired: true,
    enumValues: [
      'proposal',
      'plan',
      'order',
      'original-order',
      'reflex-order',
      'filler-order',
      'instance-order',
      'option',
    ],
  },
  { name: '_intent', type: 'Element', isArray: false, isRequired: false },
  { name: 'category', type: 'CodeableConcept', isArray: true, isRequired: false },
  {
    name: 'priority',
    type: 'code',
    isArray: false,
    isRequired: false,
    enumValues: ['routine', 'urgent', 'asap', 'stat'],
  },
  { name: '_priority', type: 'Element', isArray: false, isRequired: false },
  { name: 'doNotPerform', type: 'boolean', isArray: false, isRequired: false },
  { name: '_doNotPerform', type: 'Element', isArray: false, isRequired: false },
  { name: 'code', type: 'CodeableConcept', isArray: false, isRequired: false },
  { name: 'orderDetail', type: 'CodeableConcept', isArray: true, isRequired: false },
  { name: 'quantityQuantity', type: 'Quantity', isArray: false, isRequired: false },
  { name: 'quantityRatio', type: 'Ratio', isArray: false, isRequired: false },
  { name: 'quantityRange', type: 'Range', isArray: false, isRequired: false },
  {
    name: 'subject',
    type: 'Reference',
    isArray: false,
    isRequired: true,
    referenceTypes: ['Patient', 'Group', 'Location', 'Device'],
  },
  { name: 'encounter', type: 'Reference', isArray: false, isRequired: false, referenceTypes: ['Encounter'] },
  { name: 'occurrenceDateTime', type: 'dateTime', isArray: false, isRequired: false },
  { name: '_occurrenceDateTime', type: 'Element', isArray: false, isRequired: false },
  { name: 'occurrencePeriod', type: 'Period', isArray: false, isRequired: false },
  { name: 'occurrenceTiming', type: 'Timing', isArray: false, isRequired: false },
  { name: 'asNeededBoolean', type: 'boolean', isArray: false, isRequired: false },
  { name: '_asNeededBoolean', type: 'Element', isArray: false, isRequired: false },
  { name: 'asNeededCodeableConcept', type: 'CodeableConcept', isArray: false, isRequired: false },
  { name: 'authoredOn', type: 'dateTime', isArray: false, isRequired: false },
  { name: '_authoredOn', type: 'Element', isArray: false, isRequired: false },
  {
    name: 'requester',
    type: 'Reference',
    isArray: false,
    isRequired: false,
    referenceTypes: ['Practitioner', 'PractitionerRole', 'Organization', 'Patient', 'RelatedPerson', 'Device'],
  },
  { name: 'performerType', type: 'CodeableConcept', isArray: false, isRequired: false },
  {
    name: 'performer',
    type: 'Reference',
    isArray: true,
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
  { name: 'locationCode', type: 'CodeableConcept', isArray: true, isRequired: false },
  { name: 'locationReference', type: 'Reference', isArray: true, isRequired: false, referenceTypes: ['Location'] },
  { name: 'reasonCode', type: 'CodeableConcept', isArray: true, isRequired: false },
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
  { name: 'supportingInfo', type: 'Reference', isArray: true, isRequired: false, referenceTypes: ['Any'] },
  { name: 'specimen', type: 'Reference', isArray: true, isRequired: false, referenceTypes: ['Specimen'] },
  { name: 'bodySite', type: 'CodeableConcept', isArray: true, isRequired: false },
  { name: 'note', type: 'Annotation', isArray: true, isRequired: false },
  { name: 'patientInstruction', type: 'string', isArray: false, isRequired: false },
  { name: '_patientInstruction', type: 'Element', isArray: false, isRequired: false },
  { name: 'relevantHistory', type: 'Reference', isArray: true, isRequired: false, referenceTypes: ['Provenance'] },
]);

/**
 * @description Validates the ServiceRequest model
 * @param dataToValidate - the ServiceRequest model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function ServiceRequestValidator<T extends IServiceRequest>(
  dataToValidate: T,
  path = 'ServiceRequest',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new ServiceRequest());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
    additionalValidation: [ConstraintValidator],
  });
}

const ConstraintValidator = (dataToValidate: IServiceRequest, path: string, errors: IOperationOutcomeIssue[]): void => {
  // orderDetail SHALL only be present if code is present
  if (dataToValidate.orderDetail && !dataToValidate.code) {
    errors.push(
      new OperationOutcomeIssueException({
        severity: 'error',
        code: 'invariant',
        diagnostics: `+ Rule (prr-1). OrderDetail SHALL only be present if code is present`,
        details: {
          text: `Path: ${path}.orderDetail.`,
        },
      }),
    );
  }
};
