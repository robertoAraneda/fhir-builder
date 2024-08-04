import { createDatatypeDefinition } from '../base/definitions';
import { IHumanName } from 'fhirtypes/dist/r4';
import { BaseValidator } from '../base/base.validator';
import assert from 'node:assert';
import { RemoveUndefinedAttributes } from '../../utils/remove-undefined-attributes.util';
import { NameUseEnum } from 'fhirtypes/dist/r4/enums';

export const humanNameUseValues: ReadonlyArray<string> = Object.values(NameUseEnum);

export const modelFields = createDatatypeDefinition<IHumanName>([
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

export const HumanNameValidator = (dataToValidate: IHumanName | IHumanName[], path: string = 'HumanName'): void => {
  assert(
    typeof dataToValidate === 'object',
    `Expected Attachment to be of type object, received ${typeof dataToValidate}`,
  );
  const cleanObject = RemoveUndefinedAttributes(dataToValidate);

  if (Array.isArray(cleanObject)) {
    cleanObject.forEach((item, index) => {
      HumanNameValidator(item, `${path}[${index}]`);
    });
    return;
  }

  BaseValidator(cleanObject, modelFields, path);
};
