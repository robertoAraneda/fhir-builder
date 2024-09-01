import { createBackboneDefinition } from '../base/definitions';
import { IPatientLink, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { PatientLink } from '../../../../r4/models';

/**
 * @description The model fields for the PatientLink model
 */
const modelFields = createBackboneDefinition<IPatientLink>([
  { name: 'other', type: 'Reference', isArray: false, isRequired: true, referenceTypes: ['Patient', 'RelatedPerson'] },
  {
    name: 'type',
    type: 'code',
    isArray: false,
    isRequired: true,
    enumValues: ['replaced-by', 'replaces', 'refer', 'seealso'],
  },
  { name: '_type', type: 'Element', isArray: false, isRequired: false },
]);

/**
 * @description Validates the PatientLink model
 * @param dataToValidate - the PatientLink model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function PatientLinkValidator<T extends IPatientLink>(
  dataToValidate: T,
  path = 'PatientLink',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new PatientLink());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
  });
}
