import { IPatient } from 'fhirtypes/dist/r4';
import { AdministrativeGenderEnum } from 'fhirtypes/dist/r4/enums';
import { createResourceDefinition } from '../base/definitions';
import { ModelValidator } from '../base';
import { ResourceException } from '../../../commons/exceptions/resource.exception';

const administrativeGenderValues: readonly string[] = Object.values(AdministrativeGenderEnum);

const modelFields = createResourceDefinition<IPatient>([
  {
    name: 'identifier',
    type: 'Identifier',
    isArray: true,
    isRequired: false,
  },
  {
    name: 'active',
    type: 'boolean',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'name',
    type: 'HumanName',
    isArray: true,
    isRequired: false,
  },
  {
    name: 'telecom',
    type: 'ContactPoint',
    isArray: true,
    isRequired: false,
  },
  {
    name: 'gender',
    type: 'code',
    isArray: false,
    isRequired: false,
    enumValues: administrativeGenderValues,
  },
  {
    name: 'birthDate',
    type: 'date',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'deceasedBoolean',
    type: 'boolean',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'deceasedDateTime',
    type: 'dateTime',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'address',
    type: 'Address',
    isArray: true,
    isRequired: false,
  },
  {
    name: 'maritalStatus',
    type: 'CodeableConcept',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'multipleBirthBoolean',
    type: 'boolean',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'multipleBirthInteger',
    type: 'integer',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'photo',
    type: 'Attachment',
    isArray: true,
    isRequired: false,
  },
  {
    name: 'contact',
    type: 'PatientContact',
    isArray: true,
    isRequired: false,
  },
  {
    name: 'communication',
    type: 'PatientCommunication',
    isArray: true,
    isRequired: false,
  },
  {
    name: 'generalPractitioner',
    type: 'Reference',
    isArray: true,
    isRequired: false,
    referenceValues: ['Practitioner', 'Organization', 'PractitionerRole'],
  },
  {
    name: 'managingOrganization',
    type: 'Reference',
    isArray: false,
    isRequired: false,
    referenceValues: ['Organization'],
  },
  {
    name: 'link',
    type: 'PatientLink',
    isArray: true,
    isRequired: false,
  },
  {
    name: '_active',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_birthDate',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_multipleBirthBoolean',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_multipleBirthInteger',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_deceasedBoolean',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_deceasedDateTime',
    type: 'Element',
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

export function PatientValidator(dataToValidate: IPatient, path = 'Patient'): void {
  ModelValidator<IPatient>({
    path,
    dataToValidate,
    modelDefinition: modelFields,
    additionalValidation: [ConstraintValidator],
  });
}

function ConstraintValidator(payload: IPatient, path: string) {
  if (payload.contact && payload.contact.length > 0) {
    payload.contact.forEach((contact, index) => {
      // SHALL at least contain a contact's details or a reference to an organization
      if (!contact.name && !contact.organization && !contact.telecom && !contact.address) {
        throw new ResourceException('Patient', [
          {
            constraint: {
              id: 'pat-1',
              level: 'Rule',
              description: "SHALL at least contain a contact's details or a reference to an organization",
              location: `${path}.contact[${index}]`,
            },
          },
        ]);
      }
    });
  }
}
