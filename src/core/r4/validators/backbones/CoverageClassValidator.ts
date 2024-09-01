import { createBackboneDefinition } from '../base/definitions';
import { ICoverageClass, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { CoverageClass } from '../../../../r4/models';

/**
 * @description The model fields for the CoverageClass model
 */
const modelFields = createBackboneDefinition<ICoverageClass>([
  { name: 'type', type: 'CodeableConcept', isArray: false, isRequired: true },
  { name: 'value', type: 'string', isArray: false, isRequired: true },
  { name: '_value', type: 'Element', isArray: false, isRequired: false },
  { name: 'name', type: 'string', isArray: false, isRequired: false },
  { name: '_name', type: 'Element', isArray: false, isRequired: false },
]);

/**
 * @description Validates the CoverageClass model
 * @param dataToValidate - the CoverageClass model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function CoverageClassValidator<T extends ICoverageClass>(
  dataToValidate: T,
  path = 'CoverageClass',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new CoverageClass());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
  });
}
