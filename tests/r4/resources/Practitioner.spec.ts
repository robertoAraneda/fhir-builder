import { Practitioner, PractitionerBuilder, PractitionerValidator } from '../../../src/r4';
import {
  AdministrativeGenderType,
  IAddress,
  IAttachment,
  ICodeableConcept,
  IContactPoint,
  IElement,
  IHumanName,
  IIdentifier,
  IOperationOutcomeIssue,
  IPractitioner,
  IPractitionerQualification,
} from 'fhirtypes/dist/r4';

describe('Practitioner', () => {
  describe('Practitioner models', () => {
    it('creates a Practitioner with default values', () => {
      const practitioner = new Practitioner();
      expect(practitioner.resourceType).toBe('Practitioner');
      expect(practitioner.identifier).toBeUndefined();
      expect(practitioner.active).toBeUndefined();
      expect(practitioner.name).toBeUndefined();
      expect(practitioner.telecom).toBeUndefined();
      expect(practitioner.address).toBeUndefined();
      expect(practitioner.gender).toBeUndefined();
      expect(practitioner.birthDate).toBeUndefined();
      expect(practitioner.photo).toBeUndefined();
      expect(practitioner.qualification).toBeUndefined();
      expect(practitioner.communication).toBeUndefined();
    });

    it('creates a Practitioner with provided values', () => {
      const identifier: IIdentifier = { system: 'http://example.com', value: '12345' };
      const name: IHumanName = { family: 'Doe', given: ['John'] };
      const gender: AdministrativeGenderType = 'male';
      const practitioner = new Practitioner({
        identifier: [identifier],
        name: [name],
        gender,
      });
      expect(practitioner.identifier).toContain(identifier);
      expect(practitioner.name).toContain(name);
      expect(practitioner.gender).toBe(gender);
    });

    it('serializes to JSON correctly', () => {
      const name: IHumanName = { family: 'Doe', given: ['John'] };
      const practitioner = new Practitioner({ name: [name] });
      const json = practitioner.toJson();
      expect(json.name).toContainEqual(name);
    });

    it('returns a pretty string representation of the model', () => {
      const name: IHumanName = { family: 'Doe', given: ['John'] };
      const practitioner = new Practitioner({ name: [name] });
      const prettyString = practitioner.toPrettyString();
      expect(prettyString).toContain(`"family": "Doe"`);
    });

    it('validates a valid Practitioner model', () => {
      const validPractitioner = new Practitioner({ resourceType: 'Practitioner', active: true });
      const { isValid, operationOutcome } = validPractitioner.validate();
      expect(isValid).toBe(true);
      expect(operationOutcome.issue).toHaveLength(0);
    });

    it('invalidates a Practitioner model with invalid data', () => {
      const invalidPractitioner = new Practitioner({ resourceType: 'Practitioner', active: 'invalid' as any });
      const { isValid, operationOutcome } = invalidPractitioner.validate();
      expect(isValid).toBe(false);
      expect(operationOutcome.issue).not.toHaveLength(0);
    });

    it('handles empty Practitioner model', () => {
      const emptyPractitioner = new Practitioner();
      const { isValid, operationOutcome } = emptyPractitioner.validate();
      expect(isValid).toBe(true);
      expect(operationOutcome.issue).toHaveLength(0);
    });
  });

  describe('PractitionerValidator', () => {
    it('validates a valid Practitioner model', () => {
      const validPractitioner: IPractitioner = { resourceType: 'Practitioner', active: true };
      const errors: IOperationOutcomeIssue[] = [];
      PractitionerValidator(validPractitioner, 'Practitioner', errors);
      expect(errors).toHaveLength(0);
    });

    it('invalidates a Practitioner model with missing required fields', () => {
      const invalidPractitioner: IPractitioner = { resourceType: 'Practitioner' };
      const errors: IOperationOutcomeIssue[] = [];
      PractitionerValidator(invalidPractitioner, 'Practitioner', errors);
      expect(errors).toHaveLength(0);
    });

    it('invalidates a Practitioner model with invalid gender', () => {
      const invalidPractitioner: IPractitioner = { resourceType: 'Practitioner', gender: 'invalid-gender' as any };
      const errors: IOperationOutcomeIssue[] = [];
      PractitionerValidator(invalidPractitioner, 'Practitioner', errors);
      expect(errors).not.toHaveLength(0);
      expect(errors[0].diagnostics).toContain('Code must be one of [male, female, other, unknown]');
    });

    it('validates a Practitioner model with all fields', () => {
      const validPractitioner: IPractitioner = {
        resourceType: 'Practitioner',
        active: true,
        identifier: [{ system: 'http://example.com', value: '12345' }],
        name: [{ family: 'Doe', given: ['John'] }],
        gender: 'male',
        birthDate: '1980-01-01',
        address: [{ city: 'New York' }],
        telecom: [{ system: 'phone', value: '123-456-7890' }],
        photo: [{ url: 'http://example.com/photo.jpg' }],
        qualification: [{ code: { text: 'MD' } }],
        communication: [{ text: 'English' }],
      };
      const errors: IOperationOutcomeIssue[] = [];
      PractitionerValidator(validPractitioner, 'Practitioner', errors);
      expect(errors).toHaveLength(0);
    });

    it('handles empty Practitioner model', () => {
      const emptyPractitioner: IPractitioner = {} as IPractitioner;
      const errors: IOperationOutcomeIssue[] = [];
      PractitionerValidator(emptyPractitioner, 'Practitioner', errors);
      expect(errors).not.toHaveLength(0);
    });
  });

  describe('PractitionerBuilder', () => {
    let builder: PractitionerBuilder;

    beforeEach(() => {
      builder = new PractitionerBuilder();
    });

    it('builds a Practitioner with identifier', () => {
      const identifier: IIdentifier = { system: 'http://example.com', value: '12345' };
      const practitioner = builder.addIdentifier(identifier).build();
      expect(practitioner.identifier).toContain(identifier);
    });

    it('sets the active status of the Practitioner', () => {
      const active = true;
      const practitioner = builder.setActive(active).build();
      expect(practitioner.active).toBe(active);
    });

    it('adds a name to the Practitioner', () => {
      const name: IHumanName = { family: 'Doe', given: ['John'] };
      const practitioner = builder.addName(name).build();
      expect(practitioner.name).toContain(name);
    });

    it('adds a telecom to the Practitioner', () => {
      const telecom: IContactPoint = { system: 'phone', value: '123-456-7890' };
      const practitioner = builder.addTelecom(telecom).build();
      expect(practitioner.telecom).toContain(telecom);
    });

    it('adds an address to the Practitioner', () => {
      const address: IAddress = { city: 'New York' };
      const practitioner = builder.addAddress(address).build();
      expect(practitioner.address).toContain(address);
    });

    it('sets the gender of the Practitioner', () => {
      const gender: AdministrativeGenderType = 'male';
      const practitioner = builder.setGender(gender).build();
      expect(practitioner.gender).toBe(gender);
    });

    it('sets the birth date of the Practitioner', () => {
      const birthDate = '1980-01-01';
      const practitioner = builder.setBirthDate(birthDate).build();
      expect(practitioner.birthDate).toBe(birthDate);
    });

    it('adds a photo to the Practitioner', () => {
      const photo: IAttachment = { url: 'http://example.com/photo.jpg' };
      const practitioner = builder.addPhoto(photo).build();
      expect(practitioner.photo).toContain(photo);
    });

    it('adds a qualification to the Practitioner', () => {
      const qualification: IPractitionerQualification = { code: { text: 'MD' } };
      const practitioner = builder.addQualification(qualification).build();
      expect(practitioner.qualification).toContain(qualification);
    });

    it('adds a communication to the Practitioner', () => {
      const communication: ICodeableConcept = { text: 'English' };
      const practitioner = builder.addCommunication(communication).build();
      expect(practitioner.communication).toContain(communication);
    });

    it('builds a Practitioner from JSON', () => {
      const json = '{"active": true}';
      const practitioner = builder.fromJSON(json).build();
      expect(practitioner.active).toBe(true);
    });

    it('adds a primitive extension to the Practitioner', () => {
      const extension: IElement = { id: 'test-extension' };
      const practitioner = builder.addPrimitiveExtension('_active', extension).build();
      expect(practitioner._active).toBe(extension);
    });

    it('handles empty JSON input', () => {
      const json = '{}';
      const practitioner = builder.fromJSON(json).build();
      expect(practitioner.resourceType).toBe('Practitioner');
      expect(practitioner.identifier).toBeUndefined();
      expect(practitioner.active).toBeUndefined();
      expect(practitioner.name).toBeUndefined();
      expect(practitioner.telecom).toBeUndefined();
      expect(practitioner.address).toBeUndefined();
      expect(practitioner.gender).toBeUndefined();
      expect(practitioner.birthDate).toBeUndefined();
      expect(practitioner.photo).toBeUndefined();
      expect(practitioner.qualification).toBeUndefined();
      expect(practitioner.communication).toBeUndefined();
    });
  });

  describe('Examples from the FHIR Specification', () => {
    test('General Person Example', () => {
      const item = new Practitioner({
        resourceType: 'Practitioner',
        id: 'example',
        text: {
          status: 'generated',
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <p>Dr Adam Careful is a Referring Practitioner for Acme Hospital from 1-Jan 2012 to 31-Mar\n        2012</p>\n    </div>',
        },
        identifier: [
          {
            system: 'http://www.acme.org/practitioners',
            value: '23',
          },
        ],
        active: true,
        name: [
          {
            family: 'Careful',
            given: ['Adam'],
            prefix: ['Dr'],
          },
        ],
        address: [
          {
            use: 'home',
            line: ['534 Erewhon St'],
            city: 'PleasantVille',
            state: 'Vic',
            postalCode: '3999',
          },
        ],
        qualification: [
          {
            identifier: [
              {
                system: 'http://example.org/UniversityIdentifier',
                value: '12345',
              },
            ],
            code: {
              coding: [
                {
                  system: 'http://terminology.hl7.org/CodeSystem/v2-0360/2.7',
                  code: 'BS',
                  display: 'Bachelor of Science',
                },
              ],
              text: 'Bachelor of Science',
            },
            period: {
              start: '1995',
            },
            issuer: {
              display: 'Example University',
            },
          },
        ],
      });

      const { isValid, operationOutcome } = item.validate();
      expect(isValid).toBe(true);
      expect(operationOutcome.issue).toHaveLength(0);
    });

    test('CDA Example Author', () => {
      const item = new Practitioner({
        resourceType: 'Practitioner',
        id: 'xcda-author',
        text: {
          status: 'generated',
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <p>Harold Hippocrates, MD</p>\n    </div>',
        },
        name: [
          {
            family: 'Hippocrates',
            given: ['Harold'],
            suffix: ['MD'],
          },
        ],
      });

      const { isValid, operationOutcome } = item.validate();
      expect(isValid).toBe(true);
      expect(operationOutcome.issue).toHaveLength(0);
    });

    test('Fictive KNO-physician', () => {
      const item = new Practitioner({
        resourceType: 'Practitioner',
        id: 'f001',
        text: {
          status: 'generated',
          div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f001</p><p><b>identifier</b>: 938273695 (OFFICIAL), 129IDH4OP733 (USUAL)</p><p><b>name</b>: Eric van den broek (OFFICIAL)</p><p><b>telecom</b>: ph: 0205568263(WORK), E.M.vandenbroek@bmc.nl(WORK), fax: 0205664440(WORK)</p><p><b>address</b>: Galapagosweg 91 Den Burg 9105 PZ NLD (WORK)</p><p><b>gender</b>: male</p><p><b>birthDate</b>: 07/12/1975</p></div>',
        },
        identifier: [
          {
            use: 'official',
            system: 'urn:oid:2.16.528.1.1007.3.1',
            value: '938273695',
          },
          {
            use: 'usual',
            system: 'urn:oid:2.16.840.1.113883.2.4.6.3',
            value: '129IDH4OP733',
          },
        ],
        name: [
          {
            use: 'official',
            family: 'van den broek',
            given: ['Eric'],
            suffix: ['MD'],
          },
        ],
        telecom: [
          {
            system: 'phone',
            value: '0205568263',
            use: 'work',
          },
          {
            system: 'email',
            value: 'E.M.vandenbroek@bmc.nl',
            use: 'work',
          },
          {
            system: 'fax',
            value: '0205664440',
            use: 'work',
          },
        ],
        address: [
          {
            use: 'work',
            line: ['Galapagosweg 91'],
            city: 'Den Burg',
            postalCode: '9105 PZ',
            country: 'NLD',
          },
        ],
        gender: 'male',
        birthDate: '1975-12-07',
      });

      const { isValid, operationOutcome } = item.validate();
      expect(isValid).toBe(true);
      expect(operationOutcome.issue).toHaveLength(0);
    });

    test('Fictive Cardiothoracal surgeon', () => {
      const item = new Practitioner({
        resourceType: 'Practitioner',
        id: 'f002',
        text: {
          status: 'generated',
          div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f002</p><p><b>identifier</b>: 730291637 (OFFICIAL), 174BIP3JH438 (USUAL)</p><p><b>name</b>: Pieter Voigt (OFFICIAL)</p><p><b>telecom</b>: ph: 0205569336(WORK), p.voigt@bmc.nl(WORK), fax: 0205669382(WORK)</p><p><b>address</b>: Galapagosweg 91 Den Burg 9105 PZ NLD (WORK)</p><p><b>gender</b>: male</p><p><b>birthDate</b>: 29/04/1979</p></div>',
        },
        identifier: [
          {
            use: 'official',
            system: 'urn:oid:2.16.528.1.1007.3.1',
            value: '730291637',
          },
          {
            use: 'usual',
            system: 'urn:oid:2.16.840.1.113883.2.4.6.3',
            value: '174BIP3JH438',
          },
        ],
        name: [
          {
            use: 'official',
            family: 'Voigt',
            given: ['Pieter'],
            suffix: ['MD'],
          },
        ],
        telecom: [
          {
            system: 'phone',
            value: '0205569336',
            use: 'work',
          },
          {
            system: 'email',
            value: 'p.voigt@bmc.nl',
            use: 'work',
          },
          {
            system: 'fax',
            value: '0205669382',
            use: 'work',
          },
        ],
        address: [
          {
            use: 'work',
            line: ['Galapagosweg 91'],
            city: 'Den Burg',
            postalCode: '9105 PZ',
            country: 'NLD',
          },
        ],
        gender: 'male',
        birthDate: '1979-04-29',
      });

      const { isValid, operationOutcome } = item.validate();
      expect(isValid).toBe(true);
      expect(operationOutcome.issue).toHaveLength(0);
    });

    test('Fictive Nurse', () => {
      const item = new Practitioner({
        resourceType: 'Practitioner',
        id: 'f204',
        text: {
          status: 'generated',
          div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f204</p><p><b>identifier</b>: UZI-nummer = 12345678904 (OFFICIAL)</p><p><b>name</b>: Carla Espinosa</p><p><b>telecom</b>: ph: +31715262169(WORK)</p><p><b>address</b>: Walvisbaai 3 Den helder 2333ZA NLD (WORK)</p><p><b>gender</b>: female</p><p><b>birthDate</b>: 05/11/1967</p></div>',
        },
        identifier: [
          {
            use: 'official',
            type: {
              text: 'UZI-nummer',
            },
            system: 'urn:oid:2.16.528.1.1007.3.1',
            value: '12345678904',
          },
        ],
        name: [
          {
            use: 'usual',
            text: 'Carla Espinosa',
          },
        ],
        telecom: [
          {
            system: 'phone',
            value: '+31715262169',
            use: 'work',
          },
        ],
        address: [
          {
            use: 'work',
            line: ['Walvisbaai 3'],
            city: 'Den helder',
            postalCode: '2333ZA',
            country: 'NLD',
          },
        ],
        gender: 'female',
        birthDate: '1967-11-05',
      });

      const { isValid, operationOutcome } = item.validate();
      expect(isValid).toBe(true);
      expect(operationOutcome.issue).toHaveLength(0);
    });
  });
});
