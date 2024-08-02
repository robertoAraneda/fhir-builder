import { createDatatypeDefinition } from '../../utils/resources';
import { IHumanName } from 'fhirtypes/dist/r4';
import { baseValidator } from '../../utils/base.validator';

export const humanNameUse = ['usual', 'official', 'temp', 'nickname', 'anonymous', 'old', 'maiden'];

export const modelFields = createDatatypeDefinition<IHumanName>([
  {
    name: 'use',
    type: 'code',
    isRequired: false,
    isArray: false,
    enumValues: humanNameUse,
  },
  {
    name: 'text',
    type: 'string',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'family',
    type: 'string',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'given',
    type: 'string',
    isRequired: false,
    isArray: true,
  },
  {
    name: 'prefix',
    type: 'string',
    isRequired: false,
    isArray: true,
  },
  {
    name: 'suffix',
    type: 'string',
    isRequired: false,
    isArray: true,
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
    isRequired: false,
    isArray: false,
  },
  {
    name: '_text',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_family',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_given',
    type: 'Element',
    isRequired: false,
    isArray: true,
  },
  {
    name: '_prefix',
    type: 'Element',
    isRequired: false,
    isArray: true,
  },
  {
    name: '_suffix',
    type: 'Element',
    isRequired: false,
    isArray: true,
  },
]);

export const HumanNameValidator = (dataToValidate: IHumanName | IHumanName[], path: string = 'HumanName'): void => {
  if (Array.isArray(dataToValidate)) {
    dataToValidate.forEach((item, index) => {
      HumanNameValidator(item, `${path}[${index}]`);
    });
    return;
  }

  baseValidator(dataToValidate, modelFields, path);
};
