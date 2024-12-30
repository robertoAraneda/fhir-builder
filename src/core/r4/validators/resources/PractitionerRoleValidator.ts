import { createResourceDefinition } from '../base/definitions';
import { IPractitionerRole, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { PractitionerRole } from '../../../../r4/models';

/**
 * @description The model fields for the PractitionerRole model
 */
const modelFields = createResourceDefinition<IPractitionerRole>([
  { name: 'identifier', type: 'Identifier', isArray: true, isRequired: false },
  { name: 'active', type: 'boolean', isArray: false, isRequired: false },
  { name: '_active', type: 'Element', isArray: false, isRequired: false },
  { name: 'period', type: 'Period', isArray: false, isRequired: false },
  { name: 'practitioner', type: 'Reference', isArray: false, isRequired: false, referenceTypes: ['Practitioner'] },
  { name: 'organization', type: 'Reference', isArray: false, isRequired: false, referenceTypes: ['Organization'] },
  { name: 'code', type: 'CodeableConcept', isArray: true, isRequired: false },
  { name: 'specialty', type: 'CodeableConcept', isArray: true, isRequired: false },
  { name: 'location', type: 'Reference', isArray: true, isRequired: false, referenceTypes: ['Location'] },
  {
    name: 'healthcareService',
    type: 'Reference',
    isArray: true,
    isRequired: false,
    referenceTypes: ['HealthcareService'],
  },
  { name: 'telecom', type: 'ContactPoint', isArray: true, isRequired: false },
  { name: 'availableTime', type: 'PractitionerRoleAvailableTime', isArray: true, isRequired: false },
  { name: 'notAvailable', type: 'PractitionerRoleNotAvailable', isArray: true, isRequired: false },
  { name: 'availabilityExceptions', type: 'string', isArray: false, isRequired: false },
  { name: '_availabilityExceptions', type: 'Element', isArray: false, isRequired: false },
  { name: 'endpoint', type: 'Reference', isArray: true, isRequired: false, referenceTypes: ['Endpoint'] },
]);

/**
 * @description Validates the PractitionerRole model
 * @param dataToValidate - the PractitionerRole model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function PractitionerRoleValidator<T extends IPractitionerRole>(
  dataToValidate: T,
  path = 'PractitionerRole',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new PractitionerRole());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
  });
}
