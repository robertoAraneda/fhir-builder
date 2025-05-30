import { createBackboneDefinition } from '../base/definitions';
import { ILocationHoursOfOperation, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { LocationHoursOfOperation } from '../../../../r4/models';

/**
 * @description The model fields for the LocationHoursOfOperation model
 */
const modelFields = createBackboneDefinition<ILocationHoursOfOperation>([
  { name: 'daysOfWeek', type: 'code', isArray: true, isRequired: false },
  { name: '_daysOfWeek', type: 'Element', isArray: true, isRequired: false },
  { name: 'allDay', type: 'boolean', isArray: false, isRequired: false },
  { name: '_allDay', type: 'Element', isArray: false, isRequired: false },
  { name: 'openingTime', type: 'time', isArray: false, isRequired: false },
  { name: '_openingTime', type: 'Element', isArray: false, isRequired: false },
  { name: 'closingTime', type: 'time', isArray: false, isRequired: false },
  { name: '_closingTime', type: 'Element', isArray: false, isRequired: false },
]);

/**
 * @description Validates the LocationHoursOfOperation model
 * @param dataToValidate - the LocationHoursOfOperation model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function LocationHoursOfOperationValidator<T extends ILocationHoursOfOperation>(
  dataToValidate: T,
  path = 'LocationHoursOfOperation',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new LocationHoursOfOperation());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
  });
}
