import { IAddress } from 'fhirtypes/dist/r4';
import { AddressTypeEnum, AddressUseEnum } from 'fhirtypes/dist/r4/enums';
import { createDatatypeDefinition } from '../base/definitions';
import { ModelValidator } from '../base';

const addressTypeValues: readonly string[] = Object.values(AddressTypeEnum);
const addressUseValues: readonly string[] = Object.values(AddressUseEnum);

const modelFields = createDatatypeDefinition<IAddress>([
  {
    name: 'use',
    type: 'code',
    isRequired: false,
    isArray: false,
    enumValues: addressUseValues,
  },
  {
    name: 'type',
    type: 'code',
    isRequired: false,
    isArray: false,
    enumValues: addressTypeValues,
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

export const AddressValidator = (dataToValidate: IAddress, path = 'Address'): void => {
  ModelValidator<IAddress>({
    dataToValidate,
    path,
    modelDefinition: modelFields,
  });
};
