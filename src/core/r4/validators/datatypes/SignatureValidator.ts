import { createDatatypeDefinition } from '../base/definitions';
import { ISignature, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { Signature } from '../../../../r4/models';

/**
 * @description The model fields for the Signature model
 */
const modelFields = createDatatypeDefinition<ISignature>([
  { name: 'type', type: 'Coding', isArray: true, isRequired: true },
  { name: 'when', type: 'instant', isArray: false, isRequired: true },
  { name: '_when', type: 'Element', isArray: false, isRequired: false },
  {
    name: 'who',
    type: 'Reference',
    isArray: false,
    isRequired: true,
    referenceTypes: ['Practitioner', 'RelatedPerson', 'Patient', 'Device', 'Organization', 'PractitionerRole'],
  },
  {
    name: 'onBehalfOf',
    type: 'Reference',
    isArray: false,
    isRequired: false,
    referenceTypes: ['Practitioner', 'RelatedPerson', 'Patient', 'Device', 'Organization', 'PractitionerRole'],
  },
  { name: 'targetFormat', type: 'code', isArray: false, isRequired: false },
  { name: '_targetFormat', type: 'Element', isArray: false, isRequired: false },
  { name: 'sigFormat', type: 'code', isArray: false, isRequired: false },
  { name: '_sigFormat', type: 'Element', isArray: false, isRequired: false },
  { name: 'data', type: 'base64Binary', isArray: false, isRequired: false },
  { name: '_data', type: 'Element', isArray: false, isRequired: false },
]);

/**
 * @description Validates the Signature model
 * @param dataToValidate - the Signature model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function SignatureValidator<T extends ISignature>(
  dataToValidate: T,
  path = 'Signature',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new Signature());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
  });
}
