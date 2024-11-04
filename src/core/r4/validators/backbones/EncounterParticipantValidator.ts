import { createBackboneDefinition } from '../base/definitions';
import { IEncounterParticipant, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { EncounterParticipant } from '../../../../r4/models';

/**
 * @description The model fields for the EncounterParticipant model
 */
const modelFields = createBackboneDefinition<IEncounterParticipant>([
  { name: 'type', type: 'CodeableConcept', isArray: true, isRequired: false },
  { name: 'period', type: 'Period', isArray: false, isRequired: false },
  {
    name: 'individual',
    type: 'Reference',
    isArray: false,
    isRequired: false,
    referenceTypes: ['Practitioner', 'PractitionerRole', 'RelatedPerson'],
  },
]);

/**
 * @description Validates the EncounterParticipant model
 * @param dataToValidate - the EncounterParticipant model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function EncounterParticipantValidator<T extends IEncounterParticipant>(
  dataToValidate: T,
  path = 'EncounterParticipant',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new EncounterParticipant());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
  });
}
