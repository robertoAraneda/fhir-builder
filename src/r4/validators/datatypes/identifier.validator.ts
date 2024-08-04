import { IIdentifier } from 'fhirtypes/dist/r4';
import { createDatatypeDefinition } from '../base/definitions';
import { BaseValidator } from '../base/base.validator';
import assert from 'node:assert';
import { RemoveUndefinedAttributes } from '../../utils/remove-undefined-attributes.util';
import { IdentifierUseEnum } from 'fhirtypes/dist/r4/enums';

export const identifierUseValues: ReadonlyArray<string> = Object.values(IdentifierUseEnum);

export const modelFields = createDatatypeDefinition<IIdentifier>([
  {
    name: 'use',
    type: 'code',
    isRequired: false,
    isArray: false,
    enumValues: identifierUseValues,
  },
  {
    name: 'type',
    type: 'CodeableConcept',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'system',
    type: 'uri',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'value',
    type: 'string',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'period',
    type: 'Period',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'assigner',
    type: 'Reference',
    isRequired: false,
    isArray: false,
    referenceValues: ['Organization'],
  },
  {
    name: '_use',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_system',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_value',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
]);

export const IdentifierValidator = (dataToValidate: IIdentifier | IIdentifier[], path: string = 'Identifier'): void => {
  assert(
    typeof dataToValidate === 'object',
    `Expected Attachment to be of type object, received ${typeof dataToValidate}`,
  );
  const cleanObject = RemoveUndefinedAttributes(dataToValidate);

  if (Array.isArray(cleanObject)) {
    cleanObject.forEach((item, index) => {
      IdentifierValidator(item, `${path}[${index}]`);
    });
    return;
  }

  BaseValidator(cleanObject, modelFields, path);
};
