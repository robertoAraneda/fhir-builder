import { createDatatypeDefinition } from '../base/definitions';
import { IMeta } from 'fhirtypes/dist/r4';
import assert from 'node:assert';
import { RemoveUndefinedAttributes } from '../../utils/remove-undefined-attributes.util';
import { BaseValidator } from '../base/base.validator';

export const modelFields = createDatatypeDefinition<IMeta>([
  {
    name: 'versionId',
    type: 'id',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'lastUpdated',
    type: 'instant',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'source',
    type: 'uri',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'profile',
    type: 'canonical',
    isArray: true,
    isRequired: false,
  },
  {
    name: 'security',
    type: 'Coding',
    isArray: true,
    isRequired: false,
  },
  {
    name: 'tag',
    type: 'Coding',
    isArray: true,
    isRequired: false,
  },
  {
    name: '_versionId',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_lastUpdated',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_source',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_profile',
    type: 'Element',
    isArray: true,
    isRequired: false,
  },
]);

export function MetaValidator(dataToValidate: IMeta | IMeta[], path: string = 'Meta'): void {
  assert(
    typeof dataToValidate === 'object',
    `Expected Attachment to be of type object, received ${typeof dataToValidate}`,
  );
  const cleanObject = RemoveUndefinedAttributes(dataToValidate);

  if (Array.isArray(cleanObject)) {
    cleanObject.forEach((item, index) => {
      MetaValidator(item, `${path}[${index}]`);
    });
    return;
  }

  BaseValidator(cleanObject, modelFields, path);
}
