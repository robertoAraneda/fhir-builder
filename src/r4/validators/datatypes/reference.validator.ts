import { createDatatypeDefinition } from '../base/definitions';
import { IReference, ResourceType } from 'fhirtypes/dist/r4';
import { BaseValidator } from '../base/base.validator';
import { ReferenceException } from '../../../commons/exceptions/reference.exception';
import { resourceListUtil } from '../../../commons/utils/resource-list.util';
import assert from 'node:assert';
import { RemoveUndefinedAttributes } from '../../utils/remove-undefined-attributes.util';

export const modelFields = createDatatypeDefinition<IReference>([
  {
    name: 'reference',
    type: 'string',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'type',
    type: 'uri',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'identifier',
    type: 'Identifier',
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
    name: '_display',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_reference',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_type',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
]);

export const ValidateReferenceFormat = (value: string, path?: string): void => {
  if (value.startsWith('#')) return;
  if (value.startsWith('urn:')) return;
  if (value.startsWith('urn:')) return;
  if (value.startsWith('http://') || value.startsWith('https://')) return;

  // regex for resourceType/id
  const regex = /^[a-zA-Z]+\/[a-zA-Z0-9\-\.]+$/;

  // match with regex
  if (!regex.test(value)) {
    throw new ReferenceException(value, null, path);
  }
};

export const ReferenceValidator = (dataToValidate: IReference | IReference[], path: string = 'Reference'): void => {
  assert(
    typeof dataToValidate === 'object',
    `Expected Attachment to be of type object, received ${typeof dataToValidate}`,
  );
  const cleanObject = RemoveUndefinedAttributes(dataToValidate);

  if (Array.isArray(cleanObject)) {
    cleanObject.forEach((item, index) => {
      ReferenceValidator(item, `${path}[${index}]`);
    });
    return;
  }

  if (cleanObject.reference) ValidateReferenceFormat(cleanObject.reference, `${path}.reference`);
  BaseValidator(cleanObject, modelFields, path);
};
