import { createBackboneDefinition } from '../base/definitions';
import { IProcedureFocalDevice, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { ProcedureFocalDevice } from '../../../../r4/models';

/**
 * @description The model fields for the ProcedureFocalDevice model
 */
const modelFields = createBackboneDefinition<IProcedureFocalDevice>([
  { name: 'action', type: 'CodeableConcept', isArray: false, isRequired: false },
  { name: 'manipulated', type: 'Reference', isArray: false, isRequired: true, referenceTypes: ['Device'] },
]);

/**
 * @description Validates the ProcedureFocalDevice model
 * @param dataToValidate - the ProcedureFocalDevice model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function ProcedureFocalDeviceValidator<T extends IProcedureFocalDevice>(
  dataToValidate: T,
  path = 'ProcedureFocalDevice',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new ProcedureFocalDevice());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
  });
}
