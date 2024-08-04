import { IResource } from 'fhirtypes/dist/r4';
import { BaseValidator } from '../base/base.validator';
import assert from 'node:assert';
import { RemoveUndefinedAttributes } from '../../utils/remove-undefined-attributes.util';

export const modelFields: ReadonlyArray<any> = [
  {
    isRequired: false,
    isArray: false,
    name: 'id',
    type: 'string',
  },
  {
    isRequired: false,
    isArray: false,
    name: 'language',
    type: 'code',
  },
  {
    isRequired: false,
    isArray: false,
    name: 'implicitRules',
    type: 'uri',
  },
  {
    isRequired: false,
    isArray: false,
    name: '_implicitRules',
    type: 'Element',
  },
  {
    isRequired: false,
    isArray: false,
    name: '_language',
    type: 'Element',
  },
  {
    isRequired: false,
    isArray: false,
    name: 'meta',
    type: 'Meta',
  },
  {
    isRequired: false,
    isArray: false,
    name: 'resourceType',
    type: 'code',
  },
];

export const ResourceValidator = (dataToValidate: IResource | IResource[], path: string = 'Resource'): void => {
  assert(
    typeof dataToValidate === 'object',
    `Expected Attachment to be of type object, received ${typeof dataToValidate}`,
  );
  const cleanObject = RemoveUndefinedAttributes(dataToValidate);

  if (Array.isArray(cleanObject)) {
    cleanObject.forEach((item, index) => {
      ResourceValidator(item, `${path}[${index}]`);
    });
    return;
  }

  BaseValidator(cleanObject, modelFields, path);
};
