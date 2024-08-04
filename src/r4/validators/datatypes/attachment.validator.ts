import { createDatatypeDefinition } from '../base/definitions';
import { IAttachment } from 'fhirtypes/dist/r4';
import { ConstraintException } from '../../../commons/exceptions/constraint.exception';
import assert from 'node:assert';
import { BaseValidator } from '../base/base.validator';
import { RemoveUndefinedAttributes } from '../../utils/remove-undefined-attributes.util';

export const modelKeys = createDatatypeDefinition<IAttachment>([
  {
    name: 'contentType',
    type: 'code',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'language',
    type: 'code',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'data',
    type: 'base64Binary',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'url',
    type: 'url',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'size',
    type: 'unsignedInt',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'hash',
    type: 'base64Binary',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'title',
    type: 'string',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'creation',
    type: 'dateTime',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_contentType',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_language',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_data',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_url',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_size',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_hash',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_title',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_creation',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
]);

function ValidateConstraint(payload: IAttachment): void {
  // att-1: If the Attachment has data, it SHALL have a contentType
  if (payload.data && !payload.contentType) {
    throw new ConstraintException('Attachment', 'If the Attachment has data, it SHALL have a contentType (att-1)');
  }
}

export const AttachmentValidator = (payload: IAttachment | IAttachment[], path: string = 'Attachment'): void => {
  assert(typeof payload === 'object', `Expected Attachment to be of type object, received ${typeof payload}`);
  const cleanObject = RemoveUndefinedAttributes(payload);
  if (Array.isArray(cleanObject)) {
    cleanObject.forEach((p, index) => {
      AttachmentValidator(p, `${path}[${index}]`);
    });
    return;
  }

  BaseValidator(cleanObject, modelKeys, path);
  ValidateConstraint(cleanObject);
};
