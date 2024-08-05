import { IPatientContact } from 'fhirtypes/dist/r4';
import { AdministrativeGenderEnum } from 'fhirtypes/dist/r4/enums';
import { createBackboneDefinition } from '../base/definitions';
import { validator } from '../base/object.validator';

const administrativeGendersValues = Object.values(AdministrativeGenderEnum);

const modelFields = createBackboneDefinition<IPatientContact>([
  {
    name: 'relationship',
    type: 'CodeableConcept',
    isArray: true,
    isRequired: false,
  },
  {
    name: 'name',
    type: 'HumanName',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'telecom',
    type: 'ContactPoint',
    isArray: true,
    isRequired: false,
  },
  {
    name: 'address',
    type: 'Address',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'gender',
    type: 'code',
    isArray: false,
    isRequired: false,
    enumValues: administrativeGendersValues,
  },
  {
    name: 'organization',
    type: 'Reference',
    isArray: false,
    isRequired: false,
    referenceValues: ['Organization'],
  },
  {
    name: 'period',
    type: 'Period',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_gender',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
]);

export function PatientContactValidator(dataToValidate: IPatientContact, path: string = 'PatientContact'): void {
  validator<IPatientContact>({
    path,
    dataToValidate,
    modelDefinition: modelFields,
  });
}

/*
function ValidateConstraint(payload: IPatientContact, path: string): void {
  // SHALL at least contain a contact's details or a reference to an organization

  if (!payload.name && !payload.organization && !payload.telecom && !payload.address) {
    throw new ResourceException('Organization', [
      {
        constraint: {
          id: 'org-3',
          level: 'Rule',
          description: "The telecom of an organization can never be of use 'home'",
          location: 'Organization.telecom',
        },
      },
    ]);
  }
}
*/
