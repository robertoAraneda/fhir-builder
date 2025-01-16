import { createResourceDefinition } from '../base/definitions';
import { IRelatedPerson, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { RelatedPerson } from '../../../../r4/models';

/**
 * @description The model fields for the RelatedPerson model
 */
const modelFields = createResourceDefinition<IRelatedPerson>([
  { name: 'identifier', type: 'Identifier', isArray: true, isRequired: false },
  { name: 'active', type: 'boolean', isArray: false, isRequired: false },
  { name: '_active', type: 'Element', isArray: false, isRequired: false },
  {
    name: 'patient',
    type: 'Reference',
    isArray: false,
    isRequired: true,
    referenceTypes: ['Patient'],
    enumValues: ['Patient'],
  },
  { name: 'relationship', type: 'CodeableConcept', isArray: true, isRequired: false },
  { name: 'name', type: 'HumanName', isArray: true, isRequired: false },
  { name: 'telecom', type: 'ContactPoint', isArray: true, isRequired: false },
  {
    name: 'gender',
    type: 'code',
    isArray: false,
    isRequired: false,
    enumValues: ['male', 'female', 'other', 'unknown'],
  },
  { name: '_gender', type: 'Element', isArray: false, isRequired: false },
  { name: 'birthDate', type: 'date', isArray: false, isRequired: false },
  { name: '_birthDate', type: 'Element', isArray: false, isRequired: false },
  { name: 'address', type: 'Address', isArray: true, isRequired: false },
  { name: 'photo', type: 'Attachment', isArray: true, isRequired: false },
  { name: 'period', type: 'Period', isArray: false, isRequired: false },
  { name: 'communication', type: 'RelatedPersonCommunication', isArray: true, isRequired: false },
]);

/**
 * @description Validates the RelatedPerson model
 * @param dataToValidate - the RelatedPerson model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function RelatedPersonValidator<T extends IRelatedPerson>(
  dataToValidate: T,
  path = 'RelatedPerson',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new RelatedPerson());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
  });
}
