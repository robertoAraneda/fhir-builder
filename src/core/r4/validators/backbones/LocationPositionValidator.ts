import { createBackboneDefinition } from '../base/definitions';
import { ILocationPosition, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { LocationPosition } from '../../../../r4/models';

/**
 * @description The model fields for the LocationPosition model
 */
const modelFields = createBackboneDefinition<ILocationPosition>([
  { name: 'longitude', type: 'decimal', isArray: false, isRequired: true },
  { name: '_longitude', type: 'Element', isArray: false, isRequired: false },
  { name: 'latitude', type: 'decimal', isArray: false, isRequired: true },
  { name: '_latitude', type: 'Element', isArray: false, isRequired: false },
  { name: 'altitude', type: 'decimal', isArray: false, isRequired: false },
  { name: '_altitude', type: 'Element', isArray: false, isRequired: false },
]);

/**
 * @description Validates the LocationPosition model
 * @param dataToValidate - the LocationPosition model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function LocationPositionValidator<T extends ILocationPosition>(
  dataToValidate: T,
  path = 'LocationPosition',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new LocationPosition());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
  });
}
