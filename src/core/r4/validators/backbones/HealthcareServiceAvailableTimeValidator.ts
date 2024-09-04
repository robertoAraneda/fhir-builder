import { createBackboneDefinition } from '../base/definitions';
import { IHealthcareServiceAvailableTime, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { HealthcareServiceAvailableTime } from '../../../../r4/models';

/**
 * @description The model fields for the HealthcareServiceAvailableTime model
 */
const modelFields = createBackboneDefinition<IHealthcareServiceAvailableTime>([
  {
    name: 'daysOfWeek',
    type: 'string',
    isArray: true,
    isRequired: false,
    enumValues: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
  },
  { name: '_daysOfWeek', type: 'Element', isArray: true, isRequired: false },
  { name: 'allDay', type: 'boolean', isArray: false, isRequired: false },
  { name: '_allDay', type: 'Element', isArray: false, isRequired: false },
  { name: 'availableStartTime', type: 'time', isArray: false, isRequired: false },
  { name: '_availableStartTime', type: 'Element', isArray: false, isRequired: false },
  { name: 'availableEndTime', type: 'time', isArray: false, isRequired: false },
  { name: '_availableEndTime', type: 'Element', isArray: false, isRequired: false },
]);

/**
 * @description Validates the HealthcareServiceAvailableTime model
 * @param dataToValidate - the HealthcareServiceAvailableTime model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function HealthcareServiceAvailableTimeValidator<T extends IHealthcareServiceAvailableTime>(
  dataToValidate: T,
  path = 'HealthcareServiceAvailableTime',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new HealthcareServiceAvailableTime());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
  });
}
