import { IElement } from 'fhirtypes/dist/r4/base';
import { ValidatorType } from './internal.validator';
import { ResourceType } from 'fhirtypes/dist/r4';

export type AttributeDefinition<T> = {
  name: keyof T;
  type: keyof ValidatorType;
  isRequired: boolean;
  isArray: boolean;
  enumValues?: ReadonlyArray<string>;
  referenceValues?: ResourceType[] | 'all' | null;
};

export function createDatatypeDefinition<T extends IElement>(
  array: ReadonlyArray<AttributeDefinition<T>>,
): ReadonlyArray<AttributeDefinition<T>> {
  return array.concat([
    {
      name: 'id',
      type: 'string',
      isRequired: false,
      isArray: false,
    },
    {
      name: 'extension',
      type: 'Extension',
      isRequired: false,
      isArray: true,
    },
  ]);
}
