import { createDatatypeDefinition } from '../../utils/resources';
import { IReference, ResourceType } from 'fhirtypes/dist/r4';
import { baseValidator } from '../../utils/base.validator';
import { ReferenceException } from '../../../commons/exceptions/reference.exception';
import { resourceListUtil } from '../../../commons/utils/resource-list.util';

export const modelFields = createDatatypeDefinition<IReference>([
  {
    name: 'reference',
    type: 'string',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'type',
    type: 'uri',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'identifier',
    type: 'Identifier',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'display',
    type: 'string',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_display',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_reference',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_type',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
]);

export const ValidateReferenceFormat = (
  value: string,
  resources: ResourceType[] | 'all' | null = null,
  path?: string,
): void => {
  if (value.startsWith('#')) return;
  if (value.startsWith('urn:')) return;
  if (value.startsWith('urn:')) return;
  if (value.startsWith('http://') || value.startsWith('https://')) return;

  // regex for resourceType/id
  const regex = /^[a-zA-Z]+\/[a-zA-Z0-9\-\.]+$/;

  // match with regex
  if (!regex.test(value)) {
    throw new ReferenceException(value, null, path);
  }

  if (!resources) return;

  let internalResources = [];
  if (resources === 'all') {
    internalResources = resourceListUtil as ResourceType[];
  } else {
    internalResources = resources;
  }

  const [resourceType] = value.split('/');

  const resourceTypeForCheck = resourceType as ResourceType;

  if (!internalResources.includes(resourceTypeForCheck)) {
    throw new ReferenceException(resourceType, resources, path);
  }
};

const ValidateConstraint = (payload: IReference, resources: any, path: string): void => {
  // validate reference string format
  if (payload.reference) ValidateReferenceFormat(payload.reference, resources, `${path}.reference`);
};

export const ReferenceValidator = (
  args: IReference | IReference[],
  resources: ResourceType[] | 'all' | null = 'all',
  path: string = 'Reference',
): void => {
  if (Array.isArray(args)) {
    args.forEach((reference, index) => {
      ReferenceValidator(reference, resources, `${path}[${index}]`);
    });
    return;
  }

  ValidateConstraint(args, resources, path);
  baseValidator(args, modelFields, path);
};
