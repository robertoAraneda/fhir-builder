import { createResourceDefinition } from '../base/definitions';
import { IEpisodeOfCare } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';

const modelFields = createResourceDefinition<IEpisodeOfCare>([
  {
    name: 'identifier',
    type: 'Identifier',
    isRequired: false,
    isArray: true,
  },
  {
    name: 'status',
    type: 'code',
    isRequired: true,
    isArray: false,
  },
  {
    name: 'statusHistory',
    type: 'EpisodeOfCareStatusHistory',
    isRequired: false,
    isArray: true,
  },
  {
    name: 'type',
    type: 'CodeableConcept',
    isRequired: false,
    isArray: true,
  },
  {
    name: 'diagnosis',
    type: 'EpisodeOfCareDiagnosis',
    isRequired: false,
    isArray: true,
  },
  {
    name: 'patient',
    type: 'Reference',
    isRequired: true,
    isArray: false,
    referenceTypes: ['Patient'],
  },
  {
    name: 'managingOrganization',
    type: 'Reference',
    isRequired: false,
    isArray: false,
    referenceTypes: ['Organization'],
  },
  {
    name: 'period',
    type: 'Period',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'referralRequest',
    type: 'Reference',
    isRequired: false,
    isArray: true,
    referenceTypes: ['ServiceRequest'],
  },
  {
    name: 'careManager',
    type: 'Reference',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'team',
    type: 'Reference',
    isRequired: false,
    isArray: true,
  },
  {
    name: 'account',
    type: 'Reference',
    isRequired: false,
    isArray: true,
  },
]);

export function EpisodeOfCareValidator<T extends IEpisodeOfCare>(dataToValidate: T, path = 'EpisodeOfCare'): void {
  ModelValidator<T>({
    path,
    dataToValidate,
    modelDefinition: modelFields,
  });
}
