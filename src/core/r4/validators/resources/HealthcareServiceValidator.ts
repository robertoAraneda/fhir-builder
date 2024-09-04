import { createResourceDefinition } from '../base/definitions';
import { IHealthcareService, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { HealthcareService } from '../../../../r4/models';

/**
 * @description The model fields for the HealthcareService model
 */
const modelFields = createResourceDefinition<IHealthcareService>([
  { name: 'identifier', type: 'Identifier', isArray: true, isRequired: false },
  { name: 'active', type: 'boolean', isArray: false, isRequired: false },
  { name: '_active', type: 'Element', isArray: false, isRequired: false },
  { name: 'providedBy', type: 'Reference', isArray: false, isRequired: false, referenceTypes: ['Organization'] },
  { name: 'category', type: 'CodeableConcept', isArray: true, isRequired: false },
  { name: 'type', type: 'CodeableConcept', isArray: true, isRequired: false },
  { name: 'specialty', type: 'CodeableConcept', isArray: true, isRequired: false },
  { name: 'location', type: 'Reference', isArray: true, isRequired: false, referenceTypes: ['Location'] },
  { name: 'name', type: 'string', isArray: false, isRequired: false },
  { name: '_name', type: 'Element', isArray: false, isRequired: false },
  { name: 'comment', type: 'string', isArray: false, isRequired: false },
  { name: '_comment', type: 'Element', isArray: false, isRequired: false },
  { name: 'extraDetails', type: 'markdown', isArray: false, isRequired: false },
  { name: '_extraDetails', type: 'Element', isArray: false, isRequired: false },
  { name: 'photo', type: 'Attachment', isArray: false, isRequired: false },
  { name: 'telecom', type: 'ContactPoint', isArray: true, isRequired: false },
  { name: 'coverageArea', type: 'Reference', isArray: true, isRequired: false, referenceTypes: ['Location'] },
  { name: 'serviceProvisionCode', type: 'CodeableConcept', isArray: true, isRequired: false },
  { name: 'eligibility', type: 'HealthcareServiceEligibility', isArray: true, isRequired: false },
  { name: 'program', type: 'CodeableConcept', isArray: true, isRequired: false },
  { name: 'characteristic', type: 'CodeableConcept', isArray: true, isRequired: false },
  { name: 'communication', type: 'CodeableConcept', isArray: true, isRequired: false },
  { name: 'referralMethod', type: 'CodeableConcept', isArray: true, isRequired: false },
  { name: 'appointmentRequired', type: 'boolean', isArray: false, isRequired: false },
  { name: '_appointmentRequired', type: 'Element', isArray: false, isRequired: false },
  { name: 'availableTime', type: 'HealthcareServiceAvailableTime', isArray: true, isRequired: false },
  { name: 'notAvailable', type: 'HealthcareServiceNotAvailable', isArray: true, isRequired: false },
  { name: 'availabilityExceptions', type: 'string', isArray: false, isRequired: false },
  { name: '_availabilityExceptions', type: 'Element', isArray: false, isRequired: false },
  { name: 'endpoint', type: 'Reference', isArray: true, isRequired: false, referenceTypes: ['Endpoint'] },
]);

/**
 * @description Validates the HealthcareService model
 * @param dataToValidate - the HealthcareService model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function HealthcareServiceValidator<T extends IHealthcareService>(
  dataToValidate: T,
  path = 'HealthcareService',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new HealthcareService());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
  });
}
