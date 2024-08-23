import { IOperationOutcomeIssue, IResource } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AttributeDefinition } from '../base/definitions';

const modelFields: readonly AttributeDefinition<any>[] = [
  { isRequired: false, isArray: false, name: 'id', type: 'string' },
  { isRequired: false, isArray: false, name: 'language', type: 'code' },
  { isRequired: false, isArray: false, name: 'implicitRules', type: 'uri' },
  { isRequired: false, isArray: false, name: '_implicitRules', type: 'Element' },
  { isRequired: false, isArray: false, name: '_language', type: 'Element' },
  { isRequired: false, isArray: false, name: 'meta', type: 'Meta' },
  { isRequired: false, isArray: false, name: 'resourceType', type: 'code' },
];

export const ResourceValidator = (
  dataToValidate: IResource,
  path = 'Resource',
  errors: IOperationOutcomeIssue[],
): void => {
  ModelValidator<IResource>({
    dataToValidate,
    path,
    modelDefinition: modelFields,
    errors,
  });
};
