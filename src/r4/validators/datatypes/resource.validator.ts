import { IResource } from 'fhirtypes/dist/r4';
import { baseValidator } from '../../utils/base.validator';

export const modelFields: ReadonlyArray<any> = [
  {
    isRequired: false,
    isArray: false,
    name: 'id',
    type: 'string',
  },
  {
    isRequired: false,
    isArray: false,
    name: 'language',
    type: 'code',
  },
  {
    isRequired: false,
    isArray: false,
    name: 'implicitRules',
    type: 'uri',
  },
  {
    isRequired: false,
    isArray: false,
    name: '_implicitRules',
    type: 'Element',
  },
  {
    isRequired: false,
    isArray: false,
    name: '_language',
    type: 'Element',
  },
  {
    isRequired: false,
    isArray: false,
    name: 'meta',
    type: 'Meta',
  },
  {
    isRequired: false,
    isArray: false,
    name: 'resourceType',
    type: 'code',
  },
];
export const resourceAttributes: readonly string[] = [
  'id',
  'language',
  'implicitRules',
  '_implicitRules',
  '_language',
  'meta',
  'resourceType',
];
export const ResourceValidator = (payload: IResource | IResource[], path: string = 'Resource'): void => {
  if (Array.isArray(payload)) {
    payload.forEach((p, index) => {
      ResourceValidator(p, `${path}[${index}]`);
    });
    return;
  }
  if (!payload) {
    throw new Error(`${path} cannot be null or undefined`);
  }

  baseValidator(payload, modelFields, path);
};
