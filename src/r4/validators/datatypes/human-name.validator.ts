import { createDatatypeDefinition } from '../base/definitions';
import { IHumanName } from 'fhirtypes/dist/r4';
import { NameUseEnum } from 'fhirtypes/dist/r4/enums';
import { validator } from '../base/object.validator';

const humanNameUseValues: ReadonlyArray<string> = Object.values(NameUseEnum);

const modelFields = createDatatypeDefinition<IHumanName>([
  {
    name: 'use',
    type: 'code',
    isRequired: false,
    isArray: false,
    enumValues: humanNameUseValues,
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

export const HumanNameValidator = (dataToValidate: IHumanName, path: string = 'HumanName'): void => {
  validator<IHumanName>({
    path,
    dataToValidate,
    modelDefinition: modelFields,
  });
};
