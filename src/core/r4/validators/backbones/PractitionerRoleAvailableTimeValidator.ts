import { createBackboneDefinition } from '../base/definitions';
import { IPractitionerRoleAvailableTime, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { PractitionerRoleAvailableTime } from '../../../../r4/models';

/**
 * @description The model fields for the PractitionerRoleAvailableTime model
 */
const modelFields = createBackboneDefinition<IPractitionerRoleAvailableTime>([
  {
    name: 'daysOfWeek',
    type: 'code',
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
 * @description Validates the PractitionerRoleAvailableTime model
 * @param dataToValidate - the PractitionerRoleAvailableTime model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function PractitionerRoleAvailableTimeValidator<T extends IPractitionerRoleAvailableTime>(
  dataToValidate: T,
  path = 'PractitionerRoleAvailableTime',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new PractitionerRoleAvailableTime());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
  });
}
