import { IPatientLink } from 'fhirtypes/dist/r4';
import { LinkTypeEnum } from 'fhirtypes/dist/r4/enums';
import { createBackboneDefinition } from '../base/definitions';
import { validator } from '../base/object.validator';

const linkTypesValues = Object.values(LinkTypeEnum);

export const modelFields = createBackboneDefinition<IPatientLink>([
  {
    name: 'other',
    type: 'Reference',
    isArray: false,
    isRequired: true,
    referenceValues: ['Patient', 'RelatedPerson'],
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

export function PatientLinkValidator(dataToValidate: IPatientLink, path: string = 'PatientLink'): void {
  validator<IPatientLink>({
    path,
    dataToValidate,
    modelDefinition: modelFields,
  });
}
