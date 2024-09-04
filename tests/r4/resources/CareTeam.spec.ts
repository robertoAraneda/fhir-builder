import {
  CareTeamStatusType,
  IAnnotation,
  ICareTeam,
  ICareTeamParticipant,
  ICodeableConcept,
  IContactPoint,
  IElement,
  IIdentifier,
  IOperationOutcomeIssue,
  IPeriod,
  IReference,
} from 'fhirtypes/dist/r4';
import { CareTeam } from '../../../src/r4/models';
import { CareTeamBuilder } from '../../../src/r4/builders';
import { CareTeamValidator } from '../../../src/core/r4/validators/resources';

describe('CareTeam', () => {
  it('should create a CareTeam with default values', () => {
    const careTeam = new CareTeam();
    expect(careTeam.resourceType).toBe('CareTeam');
    expect(careTeam.identifier).toBeUndefined();
    expect(careTeam.status).toBeUndefined();
    expect(careTeam._status).toBeUndefined();
    expect(careTeam.category).toBeUndefined();
    expect(careTeam.name).toBeUndefined();
    expect(careTeam._name).toBeUndefined();
    expect(careTeam.subject).toBeUndefined();
    expect(careTeam.encounter).toBeUndefined();
    expect(careTeam.period).toBeUndefined();
    expect(careTeam.participant).toBeUndefined();
    expect(careTeam.reasonCode).toBeUndefined();
    expect(careTeam.reasonReference).toBeUndefined();
    expect(careTeam.managingOrganization).toBeUndefined();
    expect(careTeam.telecom).toBeUndefined();
    expect(careTeam.note).toBeUndefined();
  });

  it('should create a CareTeam with provided values', () => {
    const identifier: IIdentifier = { system: 'http://example.com', value: '12345' };
    const status: CareTeamStatusType = 'active';
    const name = 'Test Care Team';
    const careTeam = new CareTeam({ identifier: [identifier], status, name });
    expect(careTeam.identifier).toContain(identifier);
    expect(careTeam.status).toBe(status);
    expect(careTeam.name).toBe(name);
  });

  it('should serialize to JSON correctly', () => {
    const name = 'Test Care Team';
    const careTeam = new CareTeam({ name });
    const json = careTeam.toJson();
    expect(json.name).toBe(name);
  });

  it('should return a pretty string representation of the model', () => {
    const name = 'Test Care Team';
    const careTeam = new CareTeam({ name });
    const prettyString = careTeam.toPrettyString();
    expect(prettyString).toContain('"name": "Test Care Team"');
  });

  it('should validate a valid CareTeam model', () => {
    const validCareTeam = new CareTeam({ name: 'Valid Care Team' });
    const { isValid, operationOutcome } = validCareTeam.validate();
    expect(isValid).toBe(true);
    expect(operationOutcome.issue).toHaveLength(0);
  });

  it('should invalidate a CareTeam model with invalid name', () => {
    const invalidCareTeam = new CareTeam({ name: '' });
    const { isValid, operationOutcome } = invalidCareTeam.validate();
    expect(isValid).toBe(false);
    expect(operationOutcome.issue).not.toHaveLength(0);
  });

  it('should add a participant to the CareTeam', () => {
    const participant: ICareTeamParticipant = { member: { reference: 'Practitioner/1' } };
    const careTeam = new CareTeam({ participant: [participant] });
    expect(careTeam.participant).toContain(participant);
  });

  it('should add a reason code to the CareTeam', () => {
    const reasonCode: ICodeableConcept = { text: 'Reason' };
    const careTeam = new CareTeam({ reasonCode: [reasonCode] });
    expect(careTeam.reasonCode).toContain(reasonCode);
  });

  it('should add a managing organization to the CareTeam', () => {
    const managingOrganization: IReference = { reference: 'Organization/1' };
    const careTeam = new CareTeam({ managingOrganization: [managingOrganization] });
    expect(careTeam.managingOrganization).toContain(managingOrganization);
  });

  it('should add a telecom contact point to the CareTeam', () => {
    const telecom: IContactPoint = { system: 'phone', value: '123-456-7890' };
    const careTeam = new CareTeam({ telecom: [telecom] });
    expect(careTeam.telecom).toContain(telecom);
  });

  it('should add a note to the CareTeam', () => {
    const note: IAnnotation = { text: 'Note' };
    const careTeam = new CareTeam({ note: [note] });
    expect(careTeam.note).toContain(note);
  });
});

describe('CareTeamBuilder', () => {
  let builder: CareTeamBuilder;

  beforeEach(() => {
    builder = new CareTeamBuilder();
  });

  it('should build a CareTeam with identifier', () => {
    const identifier: IIdentifier = { system: 'http://example.com', value: '12345' };
    const careTeam = builder.addIdentifier(identifier).build();
    expect(careTeam.identifier).toContain(identifier);
  });

  it('should build a CareTeam with status', () => {
    const status: CareTeamStatusType = 'active';
    const careTeam = builder.setStatus(status).build();
    expect(careTeam.status).toBe(status);
  });

  it('should build a CareTeam with category', () => {
    const category: ICodeableConcept = { text: 'Test Category' };
    const careTeam = builder.addCategory(category).build();
    expect(careTeam.category).toContain(category);
  });

  it('should build a CareTeam with name', () => {
    const name = 'Test Care Team';
    const careTeam = builder.setName(name).build();
    expect(careTeam.name).toBe(name);
  });

  it('should build a CareTeam with subject', () => {
    const subject: IReference = { reference: 'Patient/1' };
    const careTeam = builder.setSubject(subject).build();
    expect(careTeam.subject).toBe(subject);
  });

  it('should build a CareTeam with encounter', () => {
    const encounter: IReference = { reference: 'Encounter/1' };
    const careTeam = builder.setEncounter(encounter).build();
    expect(careTeam.encounter).toBe(encounter);
  });

  it('should build a CareTeam with period', () => {
    const period: IPeriod = { start: '2021-01-01', end: '2021-12-31' };
    const careTeam = builder.setPeriod(period).build();
    expect(careTeam.period).toBe(period);
  });

  it('should build a CareTeam with participant', () => {
    const participant: ICareTeamParticipant = { member: { reference: 'Practitioner/1' } };
    const careTeam = builder.addParticipant(participant).build();
    expect(careTeam.participant).toContain(participant);
  });

  it('should build a CareTeam with reason code', () => {
    const reasonCode: ICodeableConcept = { text: 'Reason' };
    const careTeam = builder.addReasonCode(reasonCode).build();
    expect(careTeam.reasonCode).toContain(reasonCode);
  });

  it('should build a CareTeam with reason reference', () => {
    const reasonReference: IReference = { reference: 'Condition/1' };
    const careTeam = builder.addReasonReference(reasonReference).build();
    expect(careTeam.reasonReference).toContain(reasonReference);
  });

  it('should build a CareTeam with managing organization', () => {
    const managingOrganization: IReference = { reference: 'Organization/1' };
    const careTeam = builder.addManagingOrganization(managingOrganization).build();
    expect(careTeam.managingOrganization).toContain(managingOrganization);
  });

  it('should build a CareTeam with telecom', () => {
    const telecom: IContactPoint = { system: 'phone', value: '123-456-7890' };
    const careTeam = builder.addTelecom(telecom).build();
    expect(careTeam.telecom).toContain(telecom);
  });

  it('should build a CareTeam with note', () => {
    const note: IAnnotation = { text: 'Note' };
    const careTeam = builder.addNote(note).build();
    expect(careTeam.note).toContain(note);
  });

  it('should add a primitive extension to the CareTeam', () => {
    const extension: IElement = { id: 'extension1' };
    const careTeam = builder.addPrimitiveExtension('_status', extension).build();
    expect(careTeam._status).toBe(extension);
  });

  it('should build a CareTeam from JSON', () => {
    const json = '{"name": "Test Care Team"}';
    const careTeam = builder.fromJSON(json).build();
    expect(careTeam.name).toBe('Test Care Team');
  });
});

describe('CareTeamValidator', () => {
  let errors: IOperationOutcomeIssue[];

  beforeEach(() => {
    errors = [];
  });

  it('should validate CareTeam with all fields set correctly', () => {
    const careTeam: ICareTeam = {
      resourceType: 'CareTeam',
      identifier: [{ system: 'http://example.com', value: '12345' }],
      status: 'active',
      name: 'Test Care Team',
      subject: { reference: 'Patient/1' },
      encounter: { reference: 'Encounter/1' },
      period: { start: '2021-01-01', end: '2021-12-31' },
      participant: [{ member: { reference: 'Practitioner/1' } }],
      reasonCode: [{ text: 'Reason' }],
      reasonReference: [{ reference: 'Condition/1' }],
      managingOrganization: [{ reference: 'Organization/1' }],
      telecom: [{ system: 'phone', value: '123-456-7890' }],
      note: [{ text: 'Note' }],
    };
    CareTeamValidator(careTeam, 'CareTeam', errors);
    expect(errors.length).toBe(0);
  });

  it('should add error if CareTeam has invalid status', () => {
    const careTeam: ICareTeam = {
      status: 'invalid-status' as any,
    };
    CareTeamValidator(careTeam, 'CareTeam', errors);
    expect(errors.length).toBeGreaterThan(0);
  });

  it('should add error if CareTeam has invalid identifier', () => {
    const careTeam: ICareTeam = {
      identifier: [{ system: '', value: '' }],
    };
    CareTeamValidator(careTeam, 'CareTeam', errors);
    expect(errors.length).toBeGreaterThan(0);
  });

  it('should add error if CareTeam has invalid period', () => {
    const careTeam: ICareTeam = {
      period: { start: 'invalid-date', end: 'invalid-date' },
    };
    CareTeamValidator(careTeam, 'CareTeam', errors);
    expect(errors.length).toBeGreaterThan(0);
  });

  it('should validate CareTeam with only required fields', () => {
    const careTeam: ICareTeam = {
      resourceType: 'CareTeam',
    };
    CareTeamValidator(careTeam, 'CareTeam', errors);
    expect(errors.length).toBe(0);
  });
});
