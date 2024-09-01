import { createBackboneDefinition } from '../base/definitions';
import { IObservationReferenceRange, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { ObservationReferenceRange } from '../../../../r4/models';

/**
 * @description The model fields for the ObservationReferenceRange model
 */
const modelFields = createBackboneDefinition<IObservationReferenceRange>([
  { name: 'low', type: 'Quantity', isArray: false, isRequired: false },
  { name: 'high', type: 'Quantity', isArray: false, isRequired: false },
  { name: 'type', type: 'CodeableConcept', isArray: false, isRequired: false },
  { name: 'appliesTo', type: 'CodeableConcept', isArray: true, isRequired: false },
  { name: 'age', type: 'Range', isArray: false, isRequired: false },
  { name: 'text', type: 'string', isArray: false, isRequired: false },
  { name: '_text', type: 'Element', isArray: false, isRequired: false },
]);

/**
 * @description Validates the ObservationReferenceRange model
 * @param dataToValidate - the ObservationReferenceRange model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function ObservationReferenceRangeValidator<T extends IObservationReferenceRange>(
  dataToValidate: T,
  path = 'ObservationReferenceRange',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new ObservationReferenceRange());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
  });
}
