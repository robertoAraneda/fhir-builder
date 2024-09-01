import { createBackboneDefinition } from '../base/definitions';
import { IObservationComponent, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { ObservationComponent } from '../../../../r4/models';

/**
 * @description The model fields for the ObservationComponent model
 */
const modelFields = createBackboneDefinition<IObservationComponent>([
  { name: 'code', type: 'CodeableConcept', isArray: false, isRequired: true },
  { name: 'valueQuantity', type: 'Quantity', isArray: false, isRequired: false },
  { name: 'valueCodeableConcept', type: 'CodeableConcept', isArray: false, isRequired: false },
  { name: 'valueString', type: 'string', isArray: false, isRequired: false },
  { name: '_valueString', type: 'Element', isArray: false, isRequired: false },
  { name: 'valueBoolean', type: 'boolean', isArray: false, isRequired: false },
  { name: '_valueBoolean', type: 'Element', isArray: false, isRequired: false },
  { name: 'valueInteger', type: 'integer', isArray: false, isRequired: false },
  { name: '_valueInteger', type: 'Element', isArray: false, isRequired: false },
  { name: 'valueRange', type: 'Range', isArray: false, isRequired: false },
  { name: 'valueRatio', type: 'Ratio', isArray: false, isRequired: false },
  { name: 'valueSampledData', type: 'SampledData', isArray: false, isRequired: false },
  { name: 'valueTime', type: 'time', isArray: false, isRequired: false },
  { name: '_valueTime', type: 'Element', isArray: false, isRequired: false },
  { name: 'valueDateTime', type: 'dateTime', isArray: false, isRequired: false },
  { name: '_valueDateTime', type: 'Element', isArray: false, isRequired: false },
  { name: 'valuePeriod', type: 'Period', isArray: false, isRequired: false },
  { name: 'dataAbsentReason', type: 'CodeableConcept', isArray: false, isRequired: false },
  { name: 'interpretation', type: 'CodeableConcept', isArray: true, isRequired: false },
  { name: 'referenceRange', type: 'ObservationReferenceRange', isArray: true, isRequired: false },
]);

/**
 * @description Validates the ObservationComponent model
 * @param dataToValidate - the ObservationComponent model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function ObservationComponentValidator<T extends IObservationComponent>(
  dataToValidate: T,
  path = 'ObservationComponent',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new ObservationComponent());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
  });
}
