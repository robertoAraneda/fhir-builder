import { IIdentifier } from 'fhirtypes/dist/r4';
import { IdentifierUseEnum } from 'fhirtypes/dist/r4/enums';
import { createDatatypeDefinition } from '../base/definitions';
import { ModelValidator } from '../base';

const identifierUseValues: ReadonlyArray<string> = Object.values(IdentifierUseEnum);

const modelFields = createDatatypeDefinition<IIdentifier>([
  {
    name: 'use',
    type: 'code',
    isRequired: false,
    isArray: false,
    enumValues: identifierUseValues,
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

export const IdentifierValidator = (dataToValidate: IIdentifier, path: string = 'Identifier'): void => {
  ModelValidator<IIdentifier>({
    path,
    dataToValidate,
    modelDefinition: modelFields,
  });
};
