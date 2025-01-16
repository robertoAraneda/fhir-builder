import { createBackboneDefinition } from '../base/definitions';
import { IRelatedPersonCommunication, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { RelatedPersonCommunication } from '../../../../r4/models';

/**
 * @description The model fields for the RelatedPersonCommunication model
 */
const modelFields = createBackboneDefinition<IRelatedPersonCommunication>([
  { name: 'language', type: 'CodeableConcept', isArray: false, isRequired: true },
  { name: 'preferred', type: 'boolean', isArray: false, isRequired: false },
  { name: '_preferred', type: 'Element', isArray: false, isRequired: false },
]);

/**
 * @description Validates the RelatedPersonCommunication model
 * @param dataToValidate - the RelatedPersonCommunication model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function RelatedPersonCommunicationValidator<T extends IRelatedPersonCommunication>(
  dataToValidate: T,
  path = 'RelatedPersonCommunication',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new RelatedPersonCommunication());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
  });
}
