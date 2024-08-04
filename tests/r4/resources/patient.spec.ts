import { fhirR4 } from '../../../src';
import { IPatient } from 'fhirtypes/dist/r4';

describe('Patient FHIR R4', () => {
  const { Patient, Validator } = fhirR4();

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

    const { error } = item.validate();
    expect(error).toBeNull();
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

    const { error } = Validator.Patient(item);
    expect(error).toBeNull();
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

    const { error } = Validator.Patient(item);
    expect(error).toBeNull();
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

    const { error } = Validator.Patient(item);
    expect(error).toBeNull();
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

    const { error } = Validator.Patient(item);
    expect(error).toBe("InvalidFieldException. Field(s): 'managingPatient'. Path: Patient.");
  });

  it('should be able to create a new patient using builder methods [new PatientBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const item = Patient.builder()
      .setId('123')
      .setText({
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Generated</div>',
      })
      .setDeceasedBoolean(false)
      .setActive(true)
      .setGender('other')
      .setBirthDate('1974-12-25')
      .build();

    expect(item).toBeDefined();

    expect(item).toBeInstanceOf(Patient);

    const { error } = item.validate();
    expect(error).toBeNull();
    expect(item).toEqual({
      active: true,
      birthDate: '1974-12-25',
      deceasedBoolean: false,
      gender: 'other',
      id: '123',
      resourceType: 'Patient',
      text: {
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Generated</div>',
        status: 'generated',
      },
    });
  });
});
