import { contextR4 } from '../../../src';
import {
  IAddress,
  ICodeableConcept,
  IContactPoint,
  IElement,
  IIdentifier,
  IOperationOutcomeIssue,
  IOrganization,
  IOrganizationContact,
  IReference,
} from 'fhirtypes/dist/r4';
import { OrganizationBuilder } from '../../../src/r4/builders';
import { Organization } from '../../../src/r4/models';
import { OrganizationValidator } from '../../../src/core/r4/validators/resources';
import { OperationOutcomeIssueException } from '../../../src/core/commons/exceptions/operation-outcome.exception';

describe('Examples from FHIR Website', () => {
  test('HL7 itself', () => {
    const organization = new Organization({
      resourceType: 'Organization',
      id: 'hl7',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      Health Level Seven International\n      <br/>\n\t\t\t\t3300 Washtenaw Avenue, Suite 227\n      <br/>\n\t\t\t\tAnn Arbor, MI 48104\n      <br/>\n\t\t\t\tUSA\n      <br/>\n\t\t\t\t(+1) 734-677-7777 (phone)\n      <br/>\n\t\t\t\t(+1) 734-677-6622 (fax)\n      <br/>\n\t\t\t\tE-mail:  \n      <a href="mailto:hq@HL7.org">hq@HL7.org</a>\n    \n    </div>',
      },
      name: 'Health Level Seven International',
      alias: ['HL7 International'],
      telecom: [
        {
          system: 'phone',
          value: '(+1) 734-677-7777',
        },
        {
          system: 'fax',
          value: '(+1) 734-677-6622',
        },
        {
          system: 'email',
          value: 'hq@HL7.org',
        },
      ],
      address: [
        {
          line: ['3300 Washtenaw Avenue, Suite 227'],
          city: 'Ann Arbor',
          state: 'MI',
          postalCode: '48104',
          country: 'USA',
        },
      ],
      endpoint: [
        {
          reference: 'Endpoint/example',
        },
      ],
    });

    const { operationOutcome } = organization.validate();
    expect(operationOutcome.issue).toHaveLength(0);
  });

  test('Gastroenterology team at ACME Healthcare', () => {
    const organization = new Organization({
      resourceType: 'Organization',
      id: '1',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <p>Gastroenterology @ Acme Hospital. ph: +1 555 234 3523, email: \n        <a href="mailto:gastro@acme.org">gastro@acme.org</a>\n      </p>\n    \n    </div>',
      },
      identifier: [
        {
          system: 'http://www.acme.org.au/units',
          value: 'Gastro',
        },
      ],
      name: 'Gastroenterology',
      telecom: [
        {
          system: 'phone',
          value: '+1 555 234 3523',
          use: 'mobile',
        },
        {
          system: 'email',
          value: 'gastro@acme.org',
          use: 'work',
        },
      ],
    });

    const { operationOutcome } = organization.validate();
    expect(operationOutcome.issue).toHaveLength(0);
  });

  test('Clinical Laboratory at ACME Healthcare', () => {
    const organization = new Organization({
      resourceType: 'Organization',
      id: '1832473e-2fe0-452d-abe9-3cdb9879522f',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <p>Clinical Laboratory @ Acme Hospital. ph: +1 555 234 1234, email: \n        <a href="mailto:contact@labs.acme.org">contact@labs.acme.org</a>\n      </p>\n    \n    </div>',
      },
      identifier: [
        {
          system: 'http://www.acme.org.au/units',
          value: 'ClinLab',
        },
      ],
      name: 'Clinical Lab',
      telecom: [
        {
          system: 'phone',
          value: '+1 555 234 1234',
          use: 'work',
        },
        {
          system: 'email',
          value: 'contact@labs.acme.org',
          use: 'work',
        },
      ],
    });

    const { operationOutcome } = organization.validate();
    expect(operationOutcome.issue).toHaveLength(0);
  });

  test('XYZ Insurance', () => {
    const organization = new Organization({
      resourceType: 'Organization',
      id: '2',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <p>XYZ Insurance</p>\n    \n    </div>',
      },
      identifier: [
        {
          system: 'urn:oid:2.16.840.1.113883.3.19.2.3',
          value: '666666',
        },
      ],
      name: 'XYZ Insurance',
      alias: ['ABC Insurance'],
    });

    const { operationOutcome } = organization.validate();
    expect(operationOutcome.issue).toHaveLength(0);
  });

  test('Good Health Clinic', () => {
    const organization = new Organization({
      resourceType: 'Organization',
      id: '2.16.840.1.113883.19.5',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <p>Good Health Clinic</p>\n    \n    </div>',
      },
      identifier: [
        {
          system: 'urn:ietf:rfc:3986',
          value: '2.16.840.1.113883.19.5',
        },
      ],
      name: 'Good Health Clinic',
    });

    const { operationOutcome } = organization.validate();
    expect(operationOutcome.issue).toHaveLength(0);
  });

  test('Government Department of Health', () => {
    const organization = new Organization({
      resourceType: 'Organization',
      id: '3',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <p>Michigan Helth</p>\n    \n    </div>',
      },
      identifier: [
        {
          system: 'http://michigan.gov/state-dept-ids',
          value: '25',
        },
      ],
      name: 'Michigan Health',
      alias: ['Michigan State Department of Health'],
    });

    const { operationOutcome } = organization.validate();
    expect(operationOutcome.issue).toHaveLength(0);
  });
});

describe('Organization', () => {
  it('should create an Organization with default values', () => {
    const organization = new Organization();
    expect(organization.resourceType).toBe('Organization');
    expect(organization.identifier).toBeUndefined();
    expect(organization.active).toBeUndefined();
    expect(organization.type).toBeUndefined();
    expect(organization.name).toBeUndefined();
    expect(organization.alias).toBeUndefined();
    expect(organization.telecom).toBeUndefined();
    expect(organization.address).toBeUndefined();
    expect(organization.partOf).toBeUndefined();
    expect(organization.contact).toBeUndefined();
    expect(organization.endpoint).toBeUndefined();
  });

  it('should create an Organization with provided values', () => {
    const organization = new Organization({
      identifier: [{ system: 'http://example.com', value: '12345' }],
      active: true,
      type: [{ text: 'Hospital' }],
      name: 'Example Hospital',
      alias: ['EH'],
      telecom: [{ system: 'phone', value: '123-456-7890' }],
      address: [{ city: 'Example City' }],
      partOf: { reference: 'Organization/1' },
      contact: [{ name: { text: 'John Doe' } }],
      endpoint: [{ reference: 'Endpoint/1' }],
    });
    expect(organization.identifier?.[0].value).toBe('12345');
    expect(organization.active).toBe(true);
    expect(organization.type?.[0].text).toBe('Hospital');
    expect(organization.name).toBe('Example Hospital');
    expect(organization.alias?.[0]).toBe('EH');
    expect(organization.telecom?.[0].value).toBe('123-456-7890');
    expect(organization.address?.[0].city).toBe('Example City');
    expect(organization.partOf?.reference).toBe('Organization/1');
    expect(organization.contact?.[0].name?.text).toBe('John Doe');
    expect(organization.endpoint?.[0].reference).toBe('Endpoint/1');
  });

  it('should serialize to JSON correctly', () => {
    const organization = new Organization({
      identifier: [{ system: 'http://example.com', value: '12345' }],
      name: 'Example Hospital',
    });
    const json = organization.toJson();
    expect(json.identifier[0].value).toBe('12345');
    expect(json.name).toBe('Example Hospital');
  });

  it('should return a pretty string representation of the model', () => {
    const organization = new Organization({
      identifier: [{ system: 'http://example.com', value: '12345' }],
      name: 'Example Hospital',
    });
    const prettyString = organization.toPrettyString();
    expect(prettyString).toContain('"identifier":');
    expect(prettyString).toContain('"name": "Example Hospital"');
  });

  it('should validate a valid Organization model', () => {
    const validOrganization: IOrganization = {
      resourceType: 'Organization',
      name: 'Valid Organization',
    };
    const { operationOutcome } = new Organization(validOrganization).validate();
    expect(operationOutcome.issue).toHaveLength(0);
  });

  it('should invalidate an Organization model with invalid name', () => {
    const invalidOrganization: IOrganization = {
      resourceType: 'Organization',
      name: '',
    };
    const { operationOutcome } = new Organization(invalidOrganization).validate();
    expect(operationOutcome.issue).not.toHaveLength(0);
  });
});

describe('OrganizationBuilder', () => {
  let builder: OrganizationBuilder;

  beforeEach(() => {
    builder = new OrganizationBuilder();
  });

  it('should build an organization with identifier', () => {
    const identifier: IIdentifier = { system: 'http://example.com', value: '12345' };
    const organization = builder.addIdentifier(identifier).build();
    expect(organization.identifier).toContain(identifier);
  });

  it('should set the active status', () => {
    const organization = builder.setActive(true).build();
    expect(organization.active).toBe(true);
  });

  it('should add a type to the organization', () => {
    const type: ICodeableConcept = { coding: [{ system: 'http://example.com', code: 'type1' }] };
    const organization = builder.addType(type).build();
    expect(organization.type).toContain(type);
  });

  it('should set the name of the organization', () => {
    const name = 'Test Organization';
    const organization = builder.setName(name).build();
    expect(organization.name).toBe(name);
  });

  it('should add an alias to the organization', () => {
    const alias = 'Alias1';
    const organization = builder.addAlias(alias).build();
    expect(organization.alias).toContain(alias);
  });

  it('should add a telecom contact point', () => {
    const telecom: IContactPoint = { system: 'phone', value: '123-456-7890' };
    const organization = builder.addTelecom(telecom).build();
    expect(organization.telecom).toContain(telecom);
  });

  it('should add an address to the organization', () => {
    const address: IAddress = { city: 'Test City' };
    const organization = builder.addAddress(address).build();
    expect(organization.address).toContain(address);
  });

  it('should set the partOf reference', () => {
    const partOf: IReference = { reference: 'Organization/1' };
    const organization = builder.setPartOf(partOf).build();
    expect(organization.partOf).toBe(partOf);
  });

  it('should add a contact to the organization', () => {
    const contact: IOrganizationContact = { name: { text: 'John Doe' } };
    const organization = builder.addContact(contact).build();
    expect(organization.contact).toContain(contact);
  });

  it('should add an endpoint to the organization', () => {
    const endpoint: IReference = { reference: 'Endpoint/1' };
    const organization = builder.addEndpoint(endpoint).build();
    expect(organization.endpoint).toContain(endpoint);
  });

  it('should parse JSON and build an organization', () => {
    const json = '{"name": "Test Organization"}';
    const organization = builder.fromJSON(json).build();
    expect(organization.name).toBe('Test Organization');
  });

  it('should add a primitive extension to a non-array field', () => {
    const extension: IElement = { id: 'ext1' };
    const organization = builder.addPrimitiveExtension('_active', extension).build();
    expect(organization._active).toBe(extension);
  });

  it('should add a primitive extension to an array field', () => {
    const extension: IElement = { id: 'ext1' };
    const organization = builder.addPrimitiveExtension('_alias', extension).build();
    expect(organization._alias).toContain(extension);
  });
});

describe('OrganizationValidator', () => {
  let errors: IOperationOutcomeIssue[];

  beforeEach(() => {
    errors = [];
  });

  it('should validate organization with name', () => {
    const organization: IOrganization = { name: 'Test Organization', resourceType: 'Organization' };
    OrganizationValidator(organization, 'Organization', errors);
    expect(errors.length).toBe(0);
  });

  it('should validate organization with identifier', () => {
    const organization: IOrganization = {
      identifier: [{ system: 'http://example.com', value: '12345' }],
      resourceType: 'Organization',
    };
    OrganizationValidator(organization, 'Organization', errors);
    expect(errors.length).toBe(0);
  });

  it('should add error if organization has no name or identifier', () => {
    const organization: IOrganization = {
      resourceType: 'Organization',
    };
    OrganizationValidator(organization, 'Organization', errors);
    expect(errors.length).toBe(1);
    expect(errors[0]).toBeInstanceOf(OperationOutcomeIssueException);
    expect(errors[0].diagnostics).toContain('org-1');
  });

  it('should add error if organization address has use "home"', () => {
    const organization: IOrganization = {
      address: [{ use: 'home' }],
      name: 'Test Organization',
      resourceType: 'Organization',
    };
    OrganizationValidator(organization, 'Organization', errors);
    expect(errors.length).toBe(1);
    expect(errors[0]).toBeInstanceOf(OperationOutcomeIssueException);
    expect(errors[0].diagnostics).toContain('org-2');
  });

  it('should add error if organization telecom has use "home"', () => {
    const organization: IOrganization = {
      telecom: [{ use: 'home' }],
      name: 'Test Organization',
      resourceType: 'Organization',
    };
    OrganizationValidator(organization, 'Organization', errors);
    expect(errors.length).toBe(1);
    expect(errors[0]).toBeInstanceOf(OperationOutcomeIssueException);
    expect(errors[0].diagnostics).toContain('org-3');
  });

  it('should validate organization with valid address and telecom', () => {
    const organization: IOrganization = {
      resourceType: 'Organization',
      address: [{ use: 'work' }],
      telecom: [{ use: 'work' }],
      name: 'Test Organization',
    };
    OrganizationValidator(organization, 'Organization', errors);
    expect(errors.length).toBe(0);
  });
});
