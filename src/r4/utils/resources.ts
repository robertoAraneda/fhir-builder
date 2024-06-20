import { commonResources } from "../../commons/utils/resources";
import { IElement } from "../interfaces/IElement";
import { ValidatorType } from "./validator-definitions";

export const resources = [
  ...commonResources
]

export type Resource = (typeof resources)[number];

export type AttributeDefinition<T> = {
  name: keyof T;
  type: keyof ValidatorType;
  isRequired: boolean;
  isArray: boolean;
  enumValues?: string[];
  referenceValues?: Resource[] | 'all' | null;
}

export function createDatatypeDefinition<T extends IElement>(
  array: ReadonlyArray<AttributeDefinition<T>>
): ReadonlyArray<AttributeDefinition<T>> {
  return array.concat(
    [
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
      }
    ]
  )
}
