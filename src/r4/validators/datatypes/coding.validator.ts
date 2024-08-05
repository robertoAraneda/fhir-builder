import { createDatatypeDefinition } from '../base/definitions';
import { ICoding } from 'fhirtypes/dist/r4';
import { validator } from '../base/object.validator';

const modelFields = createDatatypeDefinition<ICoding>([
  {
    name: 'system',
    type: 'uri',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'version',
    type: 'string',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'code',
    type: 'code',
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
    name: 'userSelected',
    type: 'boolean',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_system',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_version',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_code',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_display',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_userSelected',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
]);

export const CodingValidator = (dataToValidate: ICoding, path: string = 'Coding'): void => {
  validator<ICoding>({
    path,
    dataToValidate,
    modelDefinition: modelFields,
  });
};
