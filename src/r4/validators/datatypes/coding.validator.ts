import { createDatatypeDefinition } from '../base/definitions';
import { ICoding } from 'fhirtypes/dist/r4';
import { BaseValidator } from '../base/base.validator';
import assert from 'node:assert';
import { RemoveUndefinedAttributes } from '../../utils/remove-undefined-attributes.util';

export const modelFields = createDatatypeDefinition<ICoding>([
  {
    name: 'system',
    type: 'uri',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'version',
    type: 'string',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'code',
    type: 'code',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'display',
    type: 'string',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'userSelected',
    type: 'boolean',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_system',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_version',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_code',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_display',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_userSelected',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
]);

export const CodingValidator = (dataToValidate: ICoding | ICoding[], path: string = 'Coding'): void => {
  assert(
    typeof dataToValidate === 'object',
    `Expected Attachment to be of type object, received ${typeof dataToValidate}`,
  );
  const cleanObject = RemoveUndefinedAttributes(dataToValidate);

  if (Array.isArray(cleanObject)) {
    cleanObject.forEach((item, index) => {
      CodingValidator(item, `${path}[${index}]`);
    });
    return;
  }

  BaseValidator(cleanObject, modelFields, path);
};
