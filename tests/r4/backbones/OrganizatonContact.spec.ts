import { OrganizationContact } from '../../../src/r4/models/backbones/OrganizationContact';
import {
  ICodeableConcept,
  IHumanName,
  IContactPoint,
  IAddress,
  IOrganizationContact,
  IOperationOutcomeIssue,
} from 'fhirtypes/dist/r4';
import { OrganizationContactBuilder } from '../../../src/r4/builders';
import { OrganizationContactValidator } from '../../../src/core/r4/validators/backbones';

describe('OrganizationContact', () => {
  it('should create an OrganizationContact with default values', () => {
    const contact = new OrganizationContact();
    expect(contact.purpose).toBeUndefined();
    expect(contact.name).toBeUndefined();
    expect(contact.telecom).toBeUndefined();
    expect(contact.address).toBeUndefined();
  });

  it('should create an OrganizationContact with provided values', () => {
    const purpose: ICodeableConcept = { text: 'Billing' };
    const name: IHumanName = { text: 'John Doe' };
    const telecom: IContactPoint = { system: 'phone', value: '123-456-7890' };
    const address: IAddress = { city: 'Test City' };
    const contact = new OrganizationContact({ purpose, name, telecom: [telecom], address });
    expect(contact.purpose).toBe(purpose);
    expect(contact.name).toBe(name);
    expect(contact.telecom).toContain(telecom);
    expect(contact.address).toBe(address);
  });

  it('should serialize to JSON correctly', () => {
    const name: IHumanName = { text: 'John Doe' };
    const contact = new OrganizationContact({ name });
    const json = contact.toJson();
    expect(json.name.text).toBe('John Doe');
  });

  it('should return a pretty string representation of the model', () => {
    const name: IHumanName = { text: 'John Doe' };
    const contact = new OrganizationContact({ name });
    const prettyString = contact.toPrettyString();
    expect(prettyString).toContain('"name":');
    expect(prettyString).toContain('"text": "John Doe"');
  });

  it('should validate a valid OrganizationContact model', () => {
    const validContact: IOrganizationContact = { name: { text: 'Valid Contact' } };
    const { operationOutcome } = new OrganizationContact(validContact).validate();
    expect(operationOutcome.issue).toHaveLength(0);
  });

  it('should invalidate an OrganizationContact model with invalid name', () => {
    const invalidContact: IOrganizationContact = { name: { text: '' } };
    const { operationOutcome } = new OrganizationContact(invalidContact).validate();
    expect(operationOutcome.issue).not.toHaveLength(0);
  });
});

describe('OrganizationContactBuilder', () => {
  let builder: OrganizationContactBuilder;

  beforeEach(() => {
    builder = new OrganizationContactBuilder();
  });

  it('should build an OrganizationContact with purpose', () => {
    const purpose: ICodeableConcept = { text: 'Billing' };
    const contact = builder.setPurpose(purpose).build();
    expect(contact.purpose).toBe(purpose);
  });

  it('should build an OrganizationContact with name', () => {
    const name: IHumanName = { text: 'John Doe' };
    const contact = builder.setName(name).build();
    expect(contact.name).toBe(name);
  });

  it('should add a telecom contact point', () => {
    const telecom: IContactPoint = { system: 'phone', value: '123-456-7890' };
    const contact = builder.addTelecom(telecom).build();
    expect(contact.telecom).toContain(telecom);
  });

  it('should build an OrganizationContact with address', () => {
    const address: IAddress = { city: 'Test City' };
    const contact = builder.setAddress(address).build();
    expect(contact.address).toBe(address);
  });

  it('should build an OrganizationContact with multiple telecom contact points', () => {
    const telecom1: IContactPoint = { system: 'phone', value: '123-456-7890' };
    const telecom2: IContactPoint = { system: 'email', value: 'test@example.com' };
    const contact = builder.addTelecom(telecom1).addTelecom(telecom2).build();
    expect(contact.telecom).toContain(telecom1);
    expect(contact.telecom).toContain(telecom2);
  });

  it('should build an OrganizationContact with all fields set', () => {
    const purpose: ICodeableConcept = { text: 'Billing' };
    const name: IHumanName = { text: 'John Doe' };
    const telecom: IContactPoint = { system: 'phone', value: '123-456-7890' };
    const address: IAddress = { city: 'Test City' };
    const contact = builder.setPurpose(purpose).setName(name).addTelecom(telecom).setAddress(address).build();
    expect(contact.purpose).toBe(purpose);
    expect(contact.name).toBe(name);
    expect(contact.telecom).toContain(telecom);
    expect(contact.address).toBe(address);
  });
});

describe('OrganizationContactValidator', () => {
  let errors: IOperationOutcomeIssue[];

  beforeEach(() => {
    errors = [];
  });

  it('should validate OrganizationContact with all fields set correctly', () => {
    const contact: IOrganizationContact = {
      purpose: { text: 'Billing' },
      name: { text: 'John Doe' },
      telecom: [{ system: 'phone', value: '123-456-7890' }],
      address: { city: 'Test City' },
    };
    OrganizationContactValidator(contact, 'OrganizationContact', errors);
    expect(errors.length).toBe(0);
  });

  it('should add error if OrganizationContact has invalid purpose', () => {
    const contact: IOrganizationContact = {
      purpose: { text: '' },
    };
    OrganizationContactValidator(contact, 'OrganizationContact', errors);
    expect(errors.length).toBeGreaterThan(0);
  });

  it('should add error if OrganizationContact has invalid name', () => {
    const contact: IOrganizationContact = {
      name: { text: '' },
    };
    OrganizationContactValidator(contact, 'OrganizationContact', errors);
    expect(errors.length).toBeGreaterThan(0);
  });

  it('should add error if OrganizationContact has invalid telecom', () => {
    const contact: IOrganizationContact = {
      telecom: [{ system: 'phone', value: '' }],
    };
    OrganizationContactValidator(contact, 'OrganizationContact', errors);
    expect(errors.length).toBeGreaterThan(0);
  });

  it('should add error if OrganizationContact has invalid address', () => {
    const contact: IOrganizationContact = {
      address: { city: '' },
    };
    OrganizationContactValidator(contact, 'OrganizationContact', errors);
    expect(errors.length).toBeGreaterThan(0);
  });

  it('should validate OrganizationContact with only required fields', () => {
    const contact: IOrganizationContact = {};
    OrganizationContactValidator(contact, 'OrganizationContact', errors);
    expect(errors.length).toBe(0);
  });
});
