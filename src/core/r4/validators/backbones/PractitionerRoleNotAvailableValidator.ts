import { createBackboneDefinition } from '../base/definitions';
import { IPractitionerRoleNotAvailable, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { PractitionerRoleNotAvailable } from '../../../../r4/models';

/**
 * @description The model fields for the PractitionerRoleNotAvailable model
 */
const modelFields = createBackboneDefinition<IPractitionerRoleNotAvailable>([
  { name: 'description', type: 'string', isArray: false, isRequired: true },
  { name: '_description', type: 'Element', isArray: false, isRequired: false },
  { name: 'during', type: 'Period', isArray: false, isRequired: false },
]);

/**
 * @description Validates the PractitionerRoleNotAvailable model
 * @param dataToValidate - the PractitionerRoleNotAvailable model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function PractitionerRoleNotAvailableValidator<T extends IPractitionerRoleNotAvailable>(
  dataToValidate: T,
  path = 'PractitionerRoleNotAvailable',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new PractitionerRoleNotAvailable());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
  });
}
