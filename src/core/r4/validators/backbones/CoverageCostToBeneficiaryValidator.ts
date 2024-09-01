import { createBackboneDefinition } from '../base/definitions';
import { ICoverageCostToBeneficiary, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { CoverageCostToBeneficiary } from '../../../../r4/models';

/**
 * @description The model fields for the CoverageCostToBeneficiary model
 */
const modelFields = createBackboneDefinition<ICoverageCostToBeneficiary>([
  { name: 'type', type: 'CodeableConcept', isArray: false, isRequired: false },
  { name: 'valueQuantity', type: 'Quantity', isArray: false, isRequired: false },
  { name: 'valueMoney', type: 'Money', isArray: false, isRequired: false },
  { name: 'exception', type: 'CoverageException', isArray: true, isRequired: false },
]);

/**
 * @description Validates the CoverageCostToBeneficiary model
 * @param dataToValidate - the CoverageCostToBeneficiary model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function CoverageCostToBeneficiaryValidator<T extends ICoverageCostToBeneficiary>(
  dataToValidate: T,
  path = 'CoverageCostToBeneficiary',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new CoverageCostToBeneficiary());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
    additionalValidation: [ValidateConformance],
  });
}

function ValidateConformance(
  dataToValidate: ICoverageCostToBeneficiary,
  path = 'Conformance',
  errors: IOperationOutcomeIssue[] = [],
): void {
  if (!dataToValidate.valueQuantity && !dataToValidate.valueMoney) {
    errors.push({
      severity: 'error',
      code: 'required',
      details: {
        text: `Path: ${path}`,
      },
      diagnostics: `The CoverageCostToBeneficiary must have either a valueQuantity or valueMoney`,
    });
  }
}
