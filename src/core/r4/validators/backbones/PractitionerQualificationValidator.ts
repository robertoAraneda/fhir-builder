import { createBackboneDefinition } from '../base/definitions';
import { IPractitionerQualification, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { PractitionerQualification } from '../../../../r4/models';

/**
 * @description The model fields for the PractitionerQualification model
 */
const modelFields = createBackboneDefinition<IPractitionerQualification>([
  { name: 'identifier', type: 'Identifier', isArray: true, isRequired: false },
  { name: 'code', type: 'CodeableConcept', isArray: false, isRequired: true },
  { name: 'period', type: 'Period', isArray: false, isRequired: false },
  { name: 'issuer', type: 'Reference', isArray: false, isRequired: false, referenceTypes: ['Organization'] },
]);

/**
 * @description Validates the PractitionerQualification model
 * @param dataToValidate - the PractitionerQualification model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function PractitionerQualificationValidator<T extends IPractitionerQualification>(
  dataToValidate: T,
  path = 'PractitionerQualification',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new PractitionerQualification());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
  });
}
