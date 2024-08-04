import { IAddress, IElement } from 'fhirtypes/dist/r4';
import { createDatatypeDefinition } from '../base/definitions';
import { BaseValidator } from '../base/base.validator';
import assert from 'node:assert';
import { RemoveUndefinedAttributes } from '../../utils/remove-undefined-attributes.util';

export const addressType: string[] = ['postal', 'physical', 'both'];
export const addressUse: string[] = ['home', 'work', 'temp', 'old', 'billing'];

export const modelFields = createDatatypeDefinition<IAddress>([
  {
    name: 'use',
    type: 'code',
    isRequired: false,
    isArray: false,
    enumValues: addressUse,
  },
  {
    name: 'type',
    type: 'code',
    isRequired: false,
    isArray: false,
    enumValues: addressType,
  },
  {
    name: 'text',
    type: 'string',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'line',
    type: 'string',
    isRequired: false,
    isArray: true,
  },
  {
    name: 'city',
    type: 'string',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'district',
    type: 'string',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'state',
    type: 'string',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'postalCode',
    type: 'string',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'country',
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
    name: '_use',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_type',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_text',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_line',
    type: 'Element',
    isArray: true,
    isRequired: false,
  },
  {
    name: '_city',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_district',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_state',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_postalCode',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_country',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
]);

export const AddressValidator = (dataToValidate: IAddress | IAddress[], path: string = 'Address'): void => {
  assert(
    typeof dataToValidate === 'object',
    `Expected Attachment to be of type object, received ${typeof dataToValidate}`,
  );
  const cleanObject = RemoveUndefinedAttributes(dataToValidate);

  if (Array.isArray(cleanObject)) {
    cleanObject.forEach((item, index) => {
      AddressValidator(item, `${path}[${index}]`);
    });
    return;
  }

  BaseValidator(cleanObject, modelFields, path);
};

interface IValInput<T> {
  dataToValidate: T | T[];
  path: string;
}

export const Val = <T extends IElement>(options: IValInput<T>): void => {
  if (Array.isArray(options.dataToValidate)) {
    options.dataToValidate.forEach((item, index) => {
      Val({ dataToValidate: item, path: `${options.path}[${index}]` });
    });
    return;
  }

  BaseValidator(options.dataToValidate, modelFields, options.path);
};
