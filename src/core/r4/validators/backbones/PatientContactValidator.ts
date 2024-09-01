import { createBackboneDefinition } from '../base/definitions';
import { IPatientContact, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { PatientContact } from '../../../../r4/models';

/**
 * @description The model fields for the PatientContact model
 */
const modelFields = createBackboneDefinition<IPatientContact>([
  { name: 'relationship', type: 'CodeableConcept', isArray: true, isRequired: false },
  { name: 'name', type: 'HumanName', isArray: false, isRequired: false },
  { name: 'telecom', type: 'ContactPoint', isArray: true, isRequired: false },
  { name: 'address', type: 'Address', isArray: false, isRequired: false },
  {
    name: 'gender',
    type: 'code',
    isArray: false,
    isRequired: false,
    enumValues: ['male', 'female', 'other', 'unknown'],
  },
  { name: '_gender', type: 'Element', isArray: false, isRequired: false },
  { name: 'organization', type: 'Reference', isArray: false, isRequired: false, referenceTypes: ['Organization'] },
  { name: 'period', type: 'Period', isArray: false, isRequired: false },
]);

/**
 * @description Validates the PatientContact model
 * @param dataToValidate - the PatientContact model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function PatientContactValidator<T extends IPatientContact>(
  dataToValidate: T,
  path = 'PatientContact',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new PatientContact());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
  });
}
