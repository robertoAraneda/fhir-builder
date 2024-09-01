import { createBackboneDefinition } from '../base/definitions';
import { IProcedurePerformer, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { ProcedurePerformer } from '../../../../r4/models';

/**
 * @description The model fields for the ProcedurePerformer model
 */
const modelFields = createBackboneDefinition<IProcedurePerformer>([
  { name: 'function', type: 'CodeableConcept', isArray: false, isRequired: false },
  {
    name: 'actor',
    type: 'Reference',
    isArray: false,
    isRequired: true,
    referenceTypes: ['Practitioner', 'PractitionerRole', 'Organization', 'Patient', 'Device', 'RelatedPerson'],
  },
  { name: 'onBehalfOf', type: 'Reference', isArray: false, isRequired: false, referenceTypes: ['Organization'] },
]);

/**
 * @description Validates the ProcedurePerformer model
 * @param dataToValidate - the ProcedurePerformer model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function ProcedurePerformerValidator<T extends IProcedurePerformer>(
  dataToValidate: T,
  path = 'ProcedurePerformer',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new ProcedurePerformer());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
  });
}
