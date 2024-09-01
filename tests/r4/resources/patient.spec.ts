import { contextR4 } from '../../../src';
import {
  IAddress,
  IAttachment,
  ICodeableConcept,
  IContactPoint,
  IElement,
  IHumanName,
  IIdentifier,
  IPatient,
  IPatientCommunication,
  IPatientContact,
  IPatientLink,
  IReference,
} from 'fhirtypes/dist/r4';
import { AdministrativeGenderEnum } from 'fhirtypes/dist/r4/enums';

const { Patient, PatientValidator, PatientBuilder } = contextR4();

describe('FHIR examples', () => {
  it('should be able to create a new patient and validate with correct data [new Patient()]', async () => {
    const item = new Patient({
      resourceType: 'Patient',
      id: 'example',
      meta: {
        profile: ['http://hl7.org/fhir/StructureDefinition/Patient-mio'],
      },
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\t<table>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Name</td>\n\t\t\t\t\t\t<td>Peter James \n              <b>Chalmers</b> (&quot;Jim&quot;)\n            </td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Address</td>\n\t\t\t\t\t\t<td>534 Erewhon, Pleasantville, Vic, 3999</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Contacts</td>\n\t\t\t\t\t\t<td>Home: unknown. Work: (03) 5555 6473</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Id</td>\n\t\t\t\t\t\t<td>MRN: 12345 (Acme Healthcare)</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</div>',
      },
      identifier: [
        {
          use: 'usual',
          type: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/v2-0203',
                code: 'MR',
              },
            ],
          },
          system: 'urn:oid:1.2.36.146.595.217.0.1',
          value: '12345',
          period: {
            start: '2001-05-06',
          },
          assigner: {
            display: 'Acme Healthcare',
          },
        },
      ],
      active: true,
      name: [
        {
          use: 'official',
          family: 'Chalmers',
          given: ['Peter', 'James'],
        },
        {
          use: 'usual',
          given: ['Jim'],
        },
        {
          use: 'maiden',
          family: 'Windsor',
          given: ['Peter', 'James'],
          period: {
            extension: [
              {
                url: 'http://hl7.org/fhir/StructureDefinition/humanname-own-prefix',
                valueString: 'VV',
              },
            ],
            end: '2002',
          },
        },
      ],
      telecom: [
        {
          use: 'home',
        },
        {
          system: 'phone',
          value: '(03) 5555 6473',
          use: 'work',
          rank: 1,
        },
        {
          system: 'phone',
          value: '(03) 3410 5613',
          use: 'mobile',
          rank: 2,
        },
        {
          system: 'phone',
          value: '(03) 5555 8834',
          use: 'old',
          period: {
            end: '2014',
          },
        },
      ],
      gender: 'male',
      birthDate: '1974-12-25',
      _birthDate: {
        extension: [
          {
            url: 'http://hl7.org/fhir/StructureDefinition/patient-birthTime',
            valueDateTime: '1974-12-25T14:35:45-05:00',
          },
        ],
      },
      deceasedBoolean: false,
      address: [
        {
          use: 'home',
          type: 'both',
          text: '534 Erewhon St PeasantVille, Rainbow, Vic  3999',
          line: ['534 Erewhon St'],
          city: 'PleasantVille',
          district: 'Rainbow',
          state: 'Vic',
          postalCode: '3999',
          period: {
            start: '1974-12-25',
          },
        },
      ],
      contact: [
        {
          relationship: [
            {
              coding: [
                {
                  system: 'http://terminology.hl7.org/CodeSystem/v2-0131',
                  code: 'N',
                },
              ],
            },
          ],
          name: {
            family: 'du Marché',
            _family: {
              extension: [
                {
                  url: 'http://hl7.org/fhir/StructureDefinition/humanname-own-prefix',
                  valueString: 'VV',
                },
              ],
            },
            given: ['Bénédicte'],
          },
          telecom: [
            {
              system: 'phone',
              value: '+33 (237) 998327',
            },
          ],
          address: {
            use: 'home',
            type: 'both',
            line: ['534 Erewhon St'],
            city: 'PleasantVille',
            district: 'Rainbow',
            state: 'Vic',
            postalCode: '3999',
            period: {
              start: '1974-12-25',
            },
          },
          gender: 'female',
          period: {
            start: '2012',
          },
        },
      ],
      managingOrganization: {
        reference: 'Organization/1',
      },
    });

    expect(item).toBeDefined();

    const { isValid } = item.validate();
    expect(isValid).toBeTruthy();
  });

  it('should be able to create a new patient and validate with correct data [IPatient]', async () => {
    const item: IPatient = {
      resourceType: 'Patient',
      id: 'pat3',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <p>Patient Simon Notsowell @ Acme Healthcare, Inc. MR = 123457, DECEASED</p>\n    \n    </div>',
      },
      identifier: [
        {
          use: 'usual',
          type: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/v2-0203',
                code: 'MR',
              },
            ],
          },
          system: 'urn:oid:0.1.2.3.4.5.6.7',
          value: '123457',
        },
      ],
      active: true,
      name: [
        {
          use: 'official',
          family: 'Notsowell',
          given: ['Simon'],
        },
      ],
      gender: 'male',
      birthDate: '1982-01-23',
      deceasedDateTime: '2015-02-14T13:42:00+10:00',
      managingOrganization: {
        reference: 'Organization/1',
        display: 'ACME Healthcare, Inc',
      },
    };

    const { isValid } = PatientValidator(item);
    expect(isValid).toBeTruthy();
  });

  it('should be able to create a new patient and validate with correct data [Patient-example-f001-pieter.json]', async () => {
    const item: IPatient = {
      resourceType: 'Patient',
      id: 'f001',
      text: {
        status: 'generated',
        div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f001</p><p><b>identifier</b>: 738472983 (USUAL), ?? (USUAL)</p><p><b>active</b>: true</p><p><b>name</b>: Pieter van de Heuvel </p><p><b>telecom</b>: ph: 0648352638(MOBILE), p.heuvel@gmail.com(HOME)</p><p><b>gender</b>: male</p><p><b>birthDate</b>: 17/11/1944</p><p><b>deceased</b>: false</p><p><b>address</b>: Van Egmondkade 23 Amsterdam 1024 RJ NLD (HOME)</p><p><b>maritalStatus</b>: Getrouwd <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-MaritalStatus code 'M' = 'Married', given as 'Married'})</span></p><p><b>multipleBirth</b>: true</p><h3>Contacts</h3><table><tr><td>-</td><td><b>Relationship</b></td><td><b>Name</b></td><td><b>Telecom</b></td></tr><tr><td>*</td><td>Emergency Contact <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0131 code 'C' = 'Emergency Contact)</span></td><td>Sarah Abels </td><td>ph: 0690383372(MOBILE)</td></tr></table><h3>Communications</h3><table><tr><td>-</td><td><b>Language</b></td><td><b>Preferred</b></td></tr><tr><td>*</td><td>Nederlands <span>(Details : {urn:ietf:bcp:47 code 'nl' = 'Dutch', given as 'Dutch'})</span></td><td>true</td></tr></table><p><b>managingOrganization</b>: <a>Burgers University Medical Centre</a></p></div>",
      },
      identifier: [
        {
          use: 'usual',
          system: 'urn:oid:2.16.840.1.113883.2.4.6.3',
          value: '738472983',
        },
        {
          use: 'usual',
          system: 'urn:oid:2.16.840.1.113883.2.4.6.3',
        },
      ],
      active: true,
      name: [
        {
          use: 'usual',
          family: 'van de Heuvel',
          given: ['Pieter'],
          suffix: ['MSc'],
        },
      ],
      telecom: [
        {
          system: 'phone',
          value: '0648352638',
          use: 'mobile',
        },
        {
          system: 'email',
          value: 'p.heuvel@gmail.com',
          use: 'home',
        },
      ],
      gender: 'male',
      birthDate: '1944-11-17',
      deceasedBoolean: false,
      address: [
        {
          use: 'home',
          line: ['Van Egmondkade 23'],
          city: 'Amsterdam',
          postalCode: '1024 RJ',
          country: 'NLD',
        },
      ],
      maritalStatus: {
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/v3-MaritalStatus',
            code: 'M',
            display: 'Married',
          },
        ],
        text: 'Getrouwd',
      },
      multipleBirthBoolean: true,
      contact: [
        {
          relationship: [
            {
              coding: [
                {
                  system: 'http://terminology.hl7.org/CodeSystem/v2-0131',
                  code: 'C',
                },
              ],
            },
          ],
          name: {
            use: 'usual',
            family: 'Abels',
            given: ['Sarah'],
          },
          telecom: [
            {
              system: 'phone',
              value: '0690383372',
              use: 'mobile',
            },
          ],
        },
      ],
      communication: [
        {
          language: {
            coding: [
              {
                system: 'urn:ietf:bcp:47',
                code: 'nl',
                display: 'Dutch',
              },
            ],
            text: 'Nederlands',
          },
          preferred: true,
        },
      ],
      managingOrganization: {
        reference: 'Organization/f001',
        display: 'Burgers University Medical Centre',
      },
    };

    const { isValid } = PatientValidator(item);
    expect(isValid).toBeTruthy();
  });

  it('should be able to create a new patient and validate with correct data [Example Patient/dicom]', async () => {
    const item: IPatient = {
      resourceType: 'Patient',
      id: 'dicom',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml"> Patient MINT_TEST, ID = MINT1234. Age = 56y, Size =\n      1.83m, Weight = 72.58kg </div>',
      },
      extension: [
        {
          url: 'http://nema.org/fhir/extensions#0010:1010',
          valueQuantity: {
            value: 56,
            unit: 'Y',
          },
        },
        {
          url: 'http://nema.org/fhir/extensions#0010:1020',
          valueQuantity: {
            value: 1.83,
            unit: 'm',
          },
        },
        {
          url: 'http://nema.org/fhir/extensions#0010:1030',
          valueQuantity: {
            value: 72.58,
            unit: 'kg',
          },
        },
      ],
      identifier: [
        {
          system: 'http://nema.org/examples/patients',
          value: 'MINT1234',
        },
      ],
      active: true,
      name: [
        {
          family: 'MINT_TEST',
        },
      ],
      gender: 'male',
      _gender: {
        extension: [
          {
            url: 'http://nema.org/examples/extensions#gender',
            valueCoding: {
              system: 'http://nema.org/examples/gender',
              code: 'M',
            },
          },
        ],
      },
      managingOrganization: {
        reference: 'Organization/1',
      },
    };

    const { isValid } = PatientValidator(item);
    expect(isValid).toBeTruthy();
  });

  it('should throw an error if patient resource not contain at least a contact details or a reference to an organization', async () => {
    const item = new Patient({
      id: 'pat1',
      active: true,
      gender: AdministrativeGenderEnum.UNKNOWN,
      contact: [
        {
          relationship: [
            {
              coding: [
                {
                  system: 'http://terminology.hl7.org/CodeSystem/v2-0131',
                  code: 'N',
                },
              ],
            },
          ],
          // no contact details
        },
      ],
    });

    const { isValid, operationOutcome } = item.validate();
    expect(isValid).toBeFalsy();
    expect(operationOutcome).toEqual({
      issue: [
        {
          code: 'invariant',
          details: {
            text: 'Path: Patient.contact[0].',
          },
          diagnostics: "+ Rule (pat-1). SHALL at least contain a contact's details or a reference to an organization",
          severity: 'error',
        },
      ],
    });
  });

  it('should be able to validate a new patient and validate with wrong data', async () => {
    const item = {
      resourceType: 'Patient',
      id: 'pat2',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Generated</div>',
      },
      birthDate: '2012-01-01',
      identifier: [
        {
          use: 'usual',
          type: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/v2-0203',
                code: 'MR',
              },
            ],
          },
          system: 'urn:oid:0.1.2.3.4.5.6.7',
          value: '123456',
        },
      ],
      active: true,
      name: [
        {
          use: 'official',
          family: 'Donald',
          given: ['Duck', 'D'],
        },
      ],
      gender: 'other',
      _gender: {
        extension: [
          {
            url: 'http://example.org/Profile/administrative-status',
            valueCodeableConcept: {
              coding: [
                {
                  system: 'http://terminology.hl7.org/CodeSystem/v2-0001',
                  code: 'A',
                  display: 'Ambiguous',
                },
              ],
            },
          },
        ],
      },
      photo: [
        {
          contentType: 'image/gif',
          data: 'base64Data',
        },
      ],
      // bad property
      managingPatient: {
        reference: 'Patient/1',
        display: 'ACME Healthcare, Inc',
      },
      link: [
        {
          other: {
            reference: 'Patient/pat1',
          },
          type: 'seealso',
        },
      ],
    };

    const { isValid, operationOutcome } = PatientValidator(item);
    expect(isValid).toBeFalsy();
    expect(operationOutcome).toEqual({
      issue: [
        {
          code: 'invalid',
          details: {
            text: 'Path: Patient. Additional fields: managingPatient',
          },
          diagnostics: 'Invalid fields have been found.',
          severity: 'error',
        },
        {
          code: 'invalid',
          details: {
            text: 'Path: Patient.photo[0].data. Value: base64Data',
          },
          diagnostics: 'Invalid base64Binary.',
          severity: 'error',
        },
      ],
    });
  });

  it('should create a new patient using BuilderFromJson method', async () => {
    const unknownItem = {
      resourceType: 'Patient',
      id: '123',
      active: true,
      deceasedBoolean: false,
    };

    const itemBuilder = new PatientBuilder().fromJSON(unknownItem);
    const item = itemBuilder.setGender('other').build();

    expect(item).toBeDefined();
    expect(item.toJson()).toEqual({
      resourceType: 'Patient',
      id: '123',
      active: true,
      deceasedBoolean: false,
      gender: 'other',
    });
  });
});
describe('PatientBuilder', () => {
  it('should build a patient with all properties set', () => {
    const builder = new PatientBuilder();
    const patient = builder
      .setId('1')
      .setMeta({ profile: ['http://hl7.org/fhir/StructureDefinition/Patient-mio'] } as IElement)
      .setActive(true)
      .setGender(AdministrativeGenderEnum.MALE)
      .setBirthDate('2000-01-01')
      .addPrimitiveExtension('_gender', {
        extension: [
          {
            url: 'http://example.org/Profile/administrative-status',
            valueIdentifier: {},
          },
        ],
      })
      .setDeceasedBoolean(true)
      .setMultipleBirthInteger(2)
      .setMaritalStatus({ text: 'Married' } as ICodeableConcept)
      .setManagingOrganization({ reference: 'Organization/1' } as IReference)
      .addIdentifier({ system: 'http://hospital.com', value: '12345' } as IIdentifier)
      .addName({ family: 'Doe', given: ['John'] } as IHumanName)
      .addTelecom({ system: 'phone', value: '555-1234' } as IContactPoint)
      .addAddress({ city: 'New York' } as IAddress)
      .addPhoto({ url: 'http://photo.com' } as IAttachment)
      .addContact({ name: { family: 'Smith' } } as IPatientContact)
      .addCommunication({ language: { text: 'English' } } as IPatientCommunication)
      .addGeneralPractitioner({ reference: 'Practitioner/1' } as IReference)
      .addLink({ other: { reference: 'Patient/2' } } as IPatientLink)
      .build();
    expect(patient.id).toBe('1');
    expect(patient.meta?.profile?.[0]).toBe('http://hl7.org/fhir/StructureDefinition/Patient-mio');
    expect(patient.active).toBe(true);
    expect(patient.gender).toBe(AdministrativeGenderEnum.MALE);
    expect(patient.birthDate).toBe('2000-01-01');
    expect(patient.deceasedBoolean).toBe(true);
    expect(patient.multipleBirthInteger).toBe(2);
    expect(patient.maritalStatus?.text).toBe('Married');
    expect(patient.managingOrganization?.reference).toBe('Organization/1');
    expect(patient.identifier?.[0].system).toBe('http://hospital.com');
    expect(patient.identifier?.[0].value).toBe('12345');
    expect(patient.name?.[0].family).toBe('Doe');
    expect(patient.name?.[0].given?.[0]).toBe('John');
    expect(patient.telecom?.[0].system).toBe('phone');
    expect(patient.telecom?.[0].value).toBe('555-1234');
    expect(patient.address?.[0].city).toBe('New York');
    expect(patient.photo?.[0].url).toBe('http://photo.com');
    expect(patient.contact?.[0].name?.family).toBe('Smith');
    expect(patient.communication?.[0].language?.text).toBe('English');
    expect(patient.generalPractitioner?.[0].reference).toBe('Practitioner/1');
    expect(patient.link?.[0].other?.reference).toBe('Patient/2');
  });

  it('should set deceasedBoolean correctly', () => {
    const builder = new PatientBuilder();
    const patient = builder.setDeceasedBoolean(true).build();
    expect(patient.deceasedBoolean).toBe(true);
  });

  it('should set deceasedDateTime correctly', () => {
    const builder = new PatientBuilder();
    const patient = builder.setDeceasedDateTime('2023-01-01T00:00:00Z').build();
    expect(patient.deceasedDateTime).toBe('2023-01-01T00:00:00Z');
  });

  it('should set multipleBirthBoolean correctly', () => {
    const builder = new PatientBuilder();
    const patient = builder.setMultipleBirthBoolean(true).build();
    expect(patient.multipleBirthBoolean).toBe(true);
  });

  it('should set multipleBirthInteger correctly', () => {
    const builder = new PatientBuilder();
    const patient = builder.setMultipleBirthInteger(2).build();
    expect(patient.multipleBirthInteger).toBe(2);
  });

  it('should add primitive extension correctly', () => {
    const builder = new PatientBuilder();
    const extension = { extension: [{ url: 'url', valueBoolean: true }] } as IElement;
    const patient = builder.addPrimitiveExtension('_active', extension).build();
    expect(patient._active).toBe(extension);
  });

  it('should build a patient from JSON', () => {
    const builder = new PatientBuilder();
    const json = {
      active: true,
      gender: 'male',
      birthDate: '2000-01-01',
    };
    const patient = builder.fromJSON(json).build();
    expect(patient.active).toBe(true);
    expect(patient.gender).toBe('male');
    expect(patient.birthDate).toBe('2000-01-01');
  });
});
describe('PatientModel', () => {
  it('should initialize with default values', () => {
    const patient = new Patient();
    expect(patient.resourceType).toBe('Patient');
    expect(patient.identifier).toBeUndefined();
    expect(patient.active).toBeUndefined();
    expect(patient.name).toBeUndefined();
    expect(patient.telecom).toBeUndefined();
    expect(patient.gender).toBeUndefined();
    expect(patient.birthDate).toBeUndefined();
    expect(patient.deceasedBoolean).toBeUndefined();
    expect(patient.deceasedDateTime).toBeUndefined();
    expect(patient.address).toBeUndefined();
    expect(patient.maritalStatus).toBeUndefined();
    expect(patient.multipleBirthBoolean).toBeUndefined();
    expect(patient.multipleBirthInteger).toBeUndefined();
    expect(patient.photo).toBeUndefined();
    expect(patient.contact).toBeUndefined();
    expect(patient.communication).toBeUndefined();
    expect(patient.generalPractitioner).toBeUndefined();
    expect(patient.managingOrganization).toBeUndefined();
    expect(patient.link).toBeUndefined();
  });

  it('should initialize with provided values', () => {
    const patient = new Patient({
      active: true,
      gender: AdministrativeGenderEnum.MALE,
      birthDate: '2000-01-01',
      deceasedBoolean: true,
      multipleBirthInteger: 2,
      maritalStatus: { text: 'Married' } as ICodeableConcept,
      managingOrganization: { reference: 'Organization/1' } as IReference,
      identifier: [{ system: 'http://hospital.com', value: '12345' } as IIdentifier],
      name: [{ family: 'Doe', given: ['John'] } as IHumanName],
      telecom: [{ system: 'phone', value: '555-1234' } as IContactPoint],
      address: [{ city: 'New York' } as IAddress],
      photo: [{ url: 'http://photo.com' } as IAttachment],
      contact: [{ name: { family: 'Smith' } } as IPatientContact],
      communication: [{ language: { text: 'English' } } as IPatientCommunication],
      generalPractitioner: [{ reference: 'Practitioner/1' } as IReference],
      link: [{ other: { reference: 'Patient/2' } } as IPatientLink],
    });
    expect(patient.active).toBe(true);
    expect(patient.gender).toBe(AdministrativeGenderEnum.MALE);
    expect(patient.birthDate).toBe('2000-01-01');
    expect(patient.deceasedBoolean).toBe(true);
    expect(patient.multipleBirthInteger).toBe(2);
    expect(patient.maritalStatus?.text).toBe('Married');
    expect(patient.managingOrganization?.reference).toBe('Organization/1');
    expect(patient.identifier?.[0].system).toBe('http://hospital.com');
    expect(patient.identifier?.[0].value).toBe('12345');
    expect(patient.name?.[0].family).toBe('Doe');
    expect(patient.name?.[0].given?.[0]).toBe('John');
    expect(patient.telecom?.[0].system).toBe('phone');
    expect(patient.telecom?.[0].value).toBe('555-1234');
    expect(patient.address?.[0].city).toBe('New York');
    expect(patient.photo?.[0].url).toBe('http://photo.com');
    expect(patient.contact?.[0].name?.family).toBe('Smith');
    expect(patient.communication?.[0].language?.text).toBe('English');
    expect(patient.generalPractitioner?.[0].reference).toBe('Practitioner/1');
    expect(patient.link?.[0].other?.reference).toBe('Patient/2');
  });

  it('should serialize to JSON correctly', () => {
    const patient = new Patient({
      active: true,
      gender: AdministrativeGenderEnum.MALE,
      birthDate: '2000-01-01',
    });
    const json = patient.toJson();
    expect(json.active).toBe(true);
    expect(json.gender).toBe(AdministrativeGenderEnum.MALE);
    expect(json.birthDate).toBe('2000-01-01');
  });

  it('should convert to pretty string correctly', () => {
    const patient = new Patient({
      active: true,
      gender: AdministrativeGenderEnum.MALE,
      birthDate: '2000-01-01',
    });
    const prettyString = patient.toPrettyString();
    expect(prettyString).toContain('"active": true');
    expect(prettyString).toContain('"gender": "male"');
    expect(prettyString).toContain('"birthDate": "2000-01-01"');
  });

  it('should convert to serialize string correctly', () => {
    const patient = new Patient({
      active: true,
      gender: AdministrativeGenderEnum.MALE,
      birthDate: '2000-01-01',
    });
    const serialize = patient.toString();
    expect(serialize).toContain('true');
    expect(serialize).toContain('male');
    expect(serialize).toContain('2000-01-01');
  });

  it('should validate correctly', () => {
    const patient = new Patient({
      active: true,
      gender: AdministrativeGenderEnum.MALE,
      birthDate: '2000-01-01',
    });
    const { isValid } = patient.validate();
    expect(isValid).toBeTruthy();
  });

  it('should serialize correctly', () => {
    const patient = new Patient({
      active: true,
      gender: AdministrativeGenderEnum.MALE,
      birthDate: '2000-01-01',
    });
    const serialized = patient.serialize();
    expect(serialized).toBe(JSON.stringify(patient.toJson()));
  });
});
describe('PatientValidator', () => {
  it('should validate a valid patient object', () => {
    const patient: IPatient = {
      resourceType: 'Patient',
      active: true,
      gender: 'male',
      birthDate: '2000-01-01',
    };

    const { isValid } = PatientValidator(patient);
    expect(isValid).toBeTruthy();
  });

  it('should add an error if contact details are missing', () => {
    const patient: IPatient = {
      resourceType: 'Patient',
      contact: [{}],
    };

    const { isValid, operationOutcome } = PatientValidator(patient);
    expect(isValid).toBeFalsy();

    expect(operationOutcome.issue.length).toBeGreaterThan(0);
    expect(operationOutcome.issue[0].diagnostics).toContain(
      "+ Rule (pat-1). SHALL at least contain a contact's details or a reference to an organization",
    );
  });

  it('should validate a patient object with optional fields', () => {
    const patient: IPatient = {
      resourceType: 'Patient',
      active: true,
      gender: 'female',
      birthDate: '1990-05-15',
      address: [{ city: 'New York' }],
    };

    const { isValid, operationOutcome } = PatientValidator(patient);
    expect(isValid).toBeTruthy();
  });

  it('should add an error if gender is invalid', () => {
    const patient = {
      resourceType: 'Patient',
      gender: 'invalid-gender',
    };
    const { isValid, operationOutcome } = PatientValidator(patient);
    expect(isValid).toBeFalsy();
    expect(operationOutcome.issue.length).toBeGreaterThan(0);
    expect(operationOutcome.issue[0].diagnostics).toContain('Code must be one of [male, female, other, unknown]');
  });
});
