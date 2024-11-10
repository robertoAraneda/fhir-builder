import { createResourceDefinition } from '../base/definitions';
import { IPractitioner, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { Practitioner } from '../../../../r4/models';

/**
 * @description The model fields for the Practitioner model
 */
const modelFields = createResourceDefinition<IPractitioner>([
  { name: 'identifier', type: 'Identifier', isArray: true, isRequired: false },
  { name: 'active', type: 'boolean', isArray: false, isRequired: false },
  { name: '_active', type: 'Element', isArray: false, isRequired: false },
  { name: 'name', type: 'HumanName', isArray: true, isRequired: false },
  { name: 'telecom', type: 'ContactPoint', isArray: true, isRequired: false },
  { name: 'address', type: 'Address', isArray: true, isRequired: false },
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
  { name: 'photo', type: 'Attachment', isArray: true, isRequired: false },
  { name: 'qualification', type: 'PractitionerQualification', isArray: true, isRequired: false },
  { name: 'communication', type: 'CodeableConcept', isArray: true, isRequired: false },
]);

/**
 * @description Validates the Practitioner model
 * @param dataToValidate - the Practitioner model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function PractitionerValidator<T extends IPractitioner>(
  dataToValidate: T,
  path = 'Practitioner',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new Practitioner());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
  });
}
