import { createBackboneDefinition } from '../base/definitions';
import { IAllergyIntoleranceReaction, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { AllergyIntoleranceReaction } from '../../../../r4/models';

/**
 * @description The model fields for the AllergyIntoleranceReaction model
 */
const modelFields = createBackboneDefinition<IAllergyIntoleranceReaction>([
  { name: 'substance', type: 'CodeableConcept', isArray: false, isRequired: false },
  { name: 'manifestation', type: 'CodeableConcept', isArray: true, isRequired: true },
  { name: 'description', type: 'string', isArray: false, isRequired: false },
  { name: '_description', type: 'Element', isArray: false, isRequired: false },
  { name: 'onset', type: 'dateTime', isArray: false, isRequired: false },
  { name: '_onset', type: 'Element', isArray: false, isRequired: false },
  { name: 'severity', type: 'code', isArray: false, isRequired: false, enumValues: ['mild', 'moderate', 'severe'] },
  { name: '_severity', type: 'Element', isArray: false, isRequired: false },
  { name: 'exposureRoute', type: 'CodeableConcept', isArray: false, isRequired: false },
  { name: 'note', type: 'Annotation', isArray: true, isRequired: false },
]);

/**
 * @description Validates the AllergyIntoleranceReaction model
 * @param dataToValidate - the AllergyIntoleranceReaction model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function AllergyIntoleranceReactionValidator<T extends IAllergyIntoleranceReaction>(
  dataToValidate: T,
  path = 'AllergyIntoleranceReaction',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new AllergyIntoleranceReaction());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
  });
}
