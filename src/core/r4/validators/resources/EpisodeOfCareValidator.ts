import { createResourceDefinition } from '../base/definitions';
import { IEpisodeOfCare, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { EpisodeOfCare } from '../../../../r4/models';

/**
 * @description The model fields for the EpisodeOfCare model
 */
const modelFields = createResourceDefinition<IEpisodeOfCare>([
  { name: 'identifier', type: 'Identifier', isArray: true, isRequired: false },
  {
    name: 'status',
    type: 'code',
    isArray: false,
    isRequired: true,
    enumValues: ['planned', 'waitlist', 'active', 'onhold', 'finished', 'cancelled', 'entered-in-error'],
  },
  { name: '_status', type: 'Element', isArray: false, isRequired: false },
  { name: 'statusHistory', type: 'EpisodeOfCareStatusHistory', isArray: true, isRequired: false },
  { name: 'type', type: 'CodeableConcept', isArray: true, isRequired: false },
  { name: 'diagnosis', type: 'EpisodeOfCareDiagnosis', isArray: true, isRequired: false },
  { name: 'patient', type: 'Reference', isArray: false, isRequired: true, referenceTypes: ['Patient'] },
  {
    name: 'managingOrganization',
    type: 'Reference',
    isArray: false,
    isRequired: false,
    referenceTypes: ['Organization'],
  },
  { name: 'period', type: 'Period', isArray: false, isRequired: false },
  { name: 'referralRequest', type: 'Reference', isArray: true, isRequired: false, referenceTypes: ['ServiceRequest'] },
  {
    name: 'careManager',
    type: 'Reference',
    isArray: false,
    isRequired: false,
    referenceTypes: ['Practitioner', 'PractitionerRole'],
  },
  { name: 'team', type: 'Reference', isArray: true, isRequired: false, referenceTypes: ['CareTeam'] },
  { name: 'account', type: 'Reference', isArray: true, isRequired: false, referenceTypes: ['Account'] },
]);

/**
 * @description Validates the EpisodeOfCare model
 * @param dataToValidate - the EpisodeOfCare model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function EpisodeOfCareValidator<T extends IEpisodeOfCare>(
  dataToValidate: T,
  path = 'EpisodeOfCare',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new EpisodeOfCare());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
  });
}
