import { createResourceDefinition } from '../base/definitions';
import { ICareTeam, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { CareTeam } from '../../../../r4/models';

/**
 * @description The model fields for the CareTeam model
 */
const modelFields = createResourceDefinition<ICareTeam>([
  { name: 'identifier', type: 'Identifier', isArray: true, isRequired: false },
  {
    name: 'status',
    type: 'code',
    isArray: false,
    isRequired: false,
    enumValues: ['proposed', 'active', 'suspended', 'inactive', 'entered-in-error'],
  },
  { name: '_status', type: 'Element', isArray: false, isRequired: false },
  { name: 'category', type: 'CodeableConcept', isArray: true, isRequired: false },
  { name: 'name', type: 'string', isArray: false, isRequired: false },
  { name: '_name', type: 'Element', isArray: false, isRequired: false },
  { name: 'subject', type: 'Reference', isArray: false, isRequired: false, referenceTypes: ['Patient', 'Group'] },
  { name: 'encounter', type: 'Reference', isArray: false, isRequired: false, referenceTypes: ['Encounter'] },
  { name: 'period', type: 'Period', isArray: false, isRequired: false },
  { name: 'participant', type: 'CareTeamParticipant', isArray: true, isRequired: false },
  { name: 'reasonCode', type: 'CodeableConcept', isArray: true, isRequired: false },
  { name: 'reasonReference', type: 'Reference', isArray: true, isRequired: false, referenceTypes: ['Condition'] },
  {
    name: 'managingOrganization',
    type: 'Reference',
    isArray: true,
    isRequired: false,
    referenceTypes: ['Organization'],
  },
  { name: 'telecom', type: 'ContactPoint', isArray: true, isRequired: false },
  { name: 'note', type: 'Annotation', isArray: true, isRequired: false },
]);

/**
 * @description Validates the CareTeam model
 * @param dataToValidate - the CareTeam model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function CareTeamValidator<T extends ICareTeam>(
  dataToValidate: T,
  path = 'CareTeam',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new CareTeam());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
  });
}
