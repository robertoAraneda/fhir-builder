import { IElement } from 'fhirtypes/dist/r4/base';
import { fhirR4Types, ValidatorType } from './internal.validator';
import { IBackboneElement, IDomainResource, ResourceType } from 'fhirtypes/dist/r4';

export type AttributeDefinition<T> = {
  name: keyof T;
  type: fhirR4Types;
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

export function createBackboneDefinition<T extends IBackboneElement>(
  array: ReadonlyArray<AttributeDefinition<T>>,
): ReadonlyArray<AttributeDefinition<T>> {
  return array.concat([
    {
      isRequired: false,
      isArray: false,
      name: 'id',
      type: 'string',
    },
    {
      isRequired: false,
      isArray: true,
      name: 'extension',
      type: 'Extension',
    },
    {
      isRequired: false,
      isArray: true,
      name: 'modifierExtension',
      type: 'Extension',
    },
  ]);
}

interface IResourceDefinition extends IDomainResource {
  resourceType?: ResourceType;
}

export function createResourceDefinition<T extends IResourceDefinition>(
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
      name: 'meta',
      type: 'Meta',
      isRequired: false,
      isArray: false,
    },
    {
      name: 'implicitRules',
      type: 'uri',
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
      name: 'text',
      type: 'Narrative',
      isRequired: false,
      isArray: false,
    },
    {
      name: 'contained',
      type: 'Resource',
      isRequired: false,
      isArray: true,
    },
    {
      name: 'extension',
      type: 'Extension',
      isRequired: false,
      isArray: true,
    },
    {
      name: 'modifierExtension',
      type: 'Extension',
      isRequired: false,
      isArray: true,
    },
    {
      name: '_implicitRules',
      type: 'Element',
      isRequired: false,
      isArray: false,
    },
    {
      name: '_language',
      type: 'Element',
      isRequired: false,
      isArray: false,
    },
    {
      name: 'resourceType',
      type: 'code',
      isRequired: false,
      isArray: false,
    },
  ]);
}
