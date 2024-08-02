import { IIdentifier } from 'fhirtypes/dist/r4';
import { createDatatypeDefinition } from '../../utils/resources';
import { baseValidator } from '../../utils/base.validator';

export const identifierUse: ReadonlyArray<string> = ['usual', 'official', 'temp', 'secondary', 'old'];

export const modelFields = createDatatypeDefinition<IIdentifier>([
  {
    name: 'use',
    type: 'code',
    isRequired: false,
    isArray: false,
    enumValues: identifierUse,
  },
  {
    name: 'type',
    type: 'CodeableConcept',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'system',
    type: 'uri',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'value',
    type: 'string',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'period',
    type: 'Period',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'assigner',
    type: 'Reference',
    isRequired: false,
    isArray: false,
    referenceValues: ['Organization'],
  },
  {
    name: '_use',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_system',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_value',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
]);

export const IdentifierValidator = (args: IIdentifier | IIdentifier[], path: string = 'Identifier'): void => {
  if (Array.isArray(args)) {
    args.forEach((identifier, index) => {
      IdentifierValidator(identifier, `${path}[${index}]`);
    });
    return;
  }

  baseValidator(args, modelFields, path);
};
