import { createBackboneDefinition } from '../base/definitions';
import { IOrganizationContact, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { OrganizationContact } from '../../../../r4/models';

/**
 * @description The model fields for the OrganizationContact model
 */
const modelFields = createBackboneDefinition<IOrganizationContact>([
  { name: 'purpose', type: 'CodeableConcept', isArray: false, isRequired: false },
  { name: 'name', type: 'HumanName', isArray: false, isRequired: false },
  { name: 'telecom', type: 'ContactPoint', isArray: true, isRequired: false },
  { name: 'address', type: 'Address', isArray: false, isRequired: false },
]);

/**
 * @description Validates the OrganizationContact model
 * @param dataToValidate - the OrganizationContact model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function OrganizationContactValidator<T extends IOrganizationContact>(
  dataToValidate: T,
  path = 'OrganizationContact',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new OrganizationContact());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
  });
}
