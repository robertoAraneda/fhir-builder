import { createBackboneDefinition } from '../base/definitions';
import { IEncounterLocation, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { EncounterLocation } from '../../../../r4/models';

/**
 * @description The model fields for the EncounterLocation model
 */
const modelFields = createBackboneDefinition<IEncounterLocation>([
  { name: 'location', type: 'Reference', isArray: false, isRequired: true, referenceTypes: ['Location'] },
  {
    name: 'status',
    type: 'code',
    isArray: false,
    isRequired: false,
    enumValues: ['planned', 'active', 'reserved', 'completed'],
  },
  { name: '_status', type: 'Element', isArray: false, isRequired: false },
  { name: 'physicalType', type: 'CodeableConcept', isArray: false, isRequired: false },
  { name: 'period', type: 'Period', isArray: false, isRequired: false },
]);

/**
 * @description Validates the EncounterLocation model
 * @param dataToValidate - the EncounterLocation model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function EncounterLocationValidator<T extends IEncounterLocation>(
  dataToValidate: T,
  path = 'EncounterLocation',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new EncounterLocation());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
  });
}
