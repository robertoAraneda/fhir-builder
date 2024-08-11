import { IMeta } from 'fhirtypes/dist/r4';
import { createDatatypeDefinition } from '../base/definitions';
import { ModelValidator } from '../base';

const modelFields = createDatatypeDefinition<IMeta>([
  {
    name: 'versionId',
    type: 'id',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'lastUpdated',
    type: 'instant',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'source',
    type: 'uri',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'profile',
    type: 'canonical',
    isArray: true,
    isRequired: false,
  },
  {
    name: 'security',
    type: 'Coding',
    isArray: true,
    isRequired: false,
  },
  {
    name: 'tag',
    type: 'Coding',
    isArray: true,
    isRequired: false,
  },
  {
    name: '_versionId',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_lastUpdated',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_source',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_profile',
    type: 'Element',
    isArray: true,
    isRequired: false,
  },
]);

export function MetaValidator(dataToValidate: IMeta, path = 'Meta'): void {
  ModelValidator<IMeta>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
  });
}
