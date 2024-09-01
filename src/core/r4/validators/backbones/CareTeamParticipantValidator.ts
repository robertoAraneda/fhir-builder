import { createBackboneDefinition } from '../base/definitions';
import { ICareTeamParticipant, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { CareTeamParticipant } from '../../../../r4/models';

/**
 * @description The model fields for the CareTeamParticipant model
 */
const modelFields = createBackboneDefinition<ICareTeamParticipant>([
  { name: 'role', type: 'CodeableConcept', isArray: true, isRequired: false },
  {
    name: 'member',
    type: 'Reference',
    isArray: false,
    isRequired: false,
    referenceTypes: ['Practitioner', 'PractitionerRole', 'RelatedPerson', 'Patient', 'Organization', 'CareTeam'],
  },
  { name: 'onBehalfOf', type: 'Reference', isArray: false, isRequired: false, referenceTypes: ['Organization'] },
  { name: 'period', type: 'Period', isArray: false, isRequired: false },
]);

/**
 * @description Validates the CareTeamParticipant model
 * @param dataToValidate - the CareTeamParticipant model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function CareTeamParticipantValidator<T extends ICareTeamParticipant>(
  dataToValidate: T,
  path = 'CareTeamParticipant',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new CareTeamParticipant());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
  });
}
