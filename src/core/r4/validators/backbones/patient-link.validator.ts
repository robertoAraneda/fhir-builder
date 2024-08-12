import { IPatientLink } from 'fhirtypes/dist/r4';
import { LinkTypeEnum } from 'fhirtypes/dist/r4/enums';
import { createBackboneDefinition } from '../base/definitions';
import { ModelValidator } from '../base';

const linkTypesValues = Object.values(LinkTypeEnum);

export const modelFields = createBackboneDefinition<IPatientLink>([
  {
    name: 'other',
    type: 'Reference',
    isArray: false,
    isRequired: true,
    referenceTypes: ['Patient', 'RelatedPerson'],
  },
  {
    name: 'type',
    type: 'code',
    isArray: false,
    isRequired: true,
    enumValues: linkTypesValues,
  },
  {
    name: '_type',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
]);

export function PatientLinkValidator(dataToValidate: IPatientLink, path = 'PatientLink'): void {
  ModelValidator<IPatientLink>({
    path,
    dataToValidate,
    modelDefinition: modelFields,
  });
}
