import { createResourceDefinition } from '../base/definitions';
import { ILocation, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { Location } from '../../../../r4/models';

/**
 * @description The model fields for the Location model
 */
const modelFields = createResourceDefinition<ILocation>([
  { name: 'identifier', type: 'Identifier', isArray: true, isRequired: false },
  { name: 'status', type: 'code', isArray: false, isRequired: false, enumValues: ['active', 'suspended', 'inactive'] },
  { name: '_status', type: 'Element', isArray: false, isRequired: false },
  { name: 'operationalStatus', type: 'Coding', isArray: false, isRequired: false },
  { name: 'name', type: 'string', isArray: false, isRequired: false },
  { name: '_name', type: 'Element', isArray: false, isRequired: false },
  { name: 'alias', type: 'string', isArray: true, isRequired: false },
  { name: '_alias', type: 'Element', isArray: true, isRequired: false },
  { name: 'description', type: 'string', isArray: false, isRequired: false },
  { name: '_description', type: 'Element', isArray: false, isRequired: false },
  { name: 'mode', type: 'code', isArray: false, isRequired: false, enumValues: ['instance', 'kind'] },
  { name: '_mode', type: 'Element', isArray: false, isRequired: false },
  { name: 'type', type: 'CodeableConcept', isArray: true, isRequired: false },
  { name: 'telecom', type: 'ContactPoint', isArray: true, isRequired: false },
  { name: 'address', type: 'Address', isArray: false, isRequired: false },
  { name: 'physicalType', type: 'CodeableConcept', isArray: false, isRequired: false },
  { name: 'position', type: 'LocationPosition', isArray: false, isRequired: false },
  { name: 'managingOrganization', type: 'Reference', isArray: false, isRequired: false },
  { name: 'partOf', type: 'Reference', isArray: false, isRequired: false },
  { name: 'hoursOfOperation', type: 'LocationHoursOfOperation', isArray: true, isRequired: false },
  { name: 'availabilityExceptions', type: 'string', isArray: false, isRequired: false },
  { name: '_availabilityExceptions', type: 'Element', isArray: false, isRequired: false },
  { name: 'endpoint', type: 'Reference', isArray: true, isRequired: false },
]);

/**
 * @description Validates the Location model
 * @param dataToValidate - the Location model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function LocationValidator<T extends ILocation>(
  dataToValidate: T,
  path = 'Location',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new Location());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
  });
}
