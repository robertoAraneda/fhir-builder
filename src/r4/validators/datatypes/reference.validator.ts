import { createDatatypeDefinition } from '../base/definitions';
import { IReference } from 'fhirtypes/dist/r4';
import { ReferenceException } from '../../../commons/exceptions/reference.exception';
import { validator } from '../base/object.validator';

const modelFields = createDatatypeDefinition<IReference>([
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

export const ValidateReferenceFormat = (value: IReference, path?: string): void => {
  const { reference } = value;
  if (!reference) return;

  if (reference.startsWith('#')) return;
  if (reference.startsWith('urn:')) return;
  if (reference.startsWith('urn:')) return;
  if (reference.startsWith('http://') || reference.startsWith('https://')) return;

  // regex for resourceType/id
  const regex = /^[a-zA-Z]+\/[a-zA-Z0-9\-\.]+$/;

  // match with regex
  if (!regex.test(reference)) {
    throw new ReferenceException(reference, null, `${path}.reference`);
  }
};

export const ReferenceValidator = (dataToValidate: IReference, path: string = 'Reference'): void => {
  validator<IReference>({
    dataToValidate,
    path,
    modelDefinition: modelFields,
    additionalValidation: [ValidateReferenceFormat],
  });
};
