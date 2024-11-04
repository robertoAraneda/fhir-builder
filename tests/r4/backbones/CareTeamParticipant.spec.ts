import { ICodeableConcept, IReference, IPeriod, IOperationOutcomeIssue, ICareTeamParticipant } from 'fhirtypes/dist/r4';
import { CareTeamParticipant, CareTeamParticipantBuilder, CareTeamParticipantValidator } from '../../../src/r4';

describe('CareTeamParticipant', () => {
  it('should create a CareTeamParticipant with default values', () => {
    const participant = new CareTeamParticipant();
    expect(participant.role).toBeUndefined();
    expect(participant.member).toBeUndefined();
    expect(participant.onBehalfOf).toBeUndefined();
    expect(participant.period).toBeUndefined();
  });

  it('should create a CareTeamParticipant with provided values', () => {
    const role: ICodeableConcept = { text: 'Primary care physician' };
    const member: IReference = { reference: 'Practitioner/1' };
    const onBehalfOf: IReference = { reference: 'Organization/1' };
    const period: IPeriod = { start: '2021-01-01', end: '2021-12-31' };
    const participant = new CareTeamParticipant({ role: [role], member, onBehalfOf, period });
    expect(participant.role).toContain(role);
    expect(participant.member).toBe(member);
    expect(participant.onBehalfOf).toBe(onBehalfOf);
    expect(participant.period).toBe(period);
  });

  it('should serialize to JSON correctly', () => {
    const role: ICodeableConcept = { text: 'Primary care physician' };
    const participant = new CareTeamParticipant({ role: [role] });
    const json = participant.toJson();
    expect(json.role).toContainEqual(role);
  });

  it('should return a pretty string representation of the model', () => {
    const role: ICodeableConcept = { text: 'Primary care physician' };
    const participant = new CareTeamParticipant({ role: [role] });
    const prettyString = participant.toPrettyString();
    expect(prettyString).toContain('"text": "Primary care physician"');
  });

  it('should validate a valid CareTeamParticipant model', () => {
    const validParticipant = new CareTeamParticipant({ member: { reference: 'Practitioner/1' } });
    const { isValid, operationOutcome } = validParticipant.validate();
    expect(isValid).toBe(true);
    expect(operationOutcome.issue).toHaveLength(0);
  });

  it('should invalidate a CareTeamParticipant model with invalid member', () => {
    const invalidParticipant = new CareTeamParticipant({ member: { reference: '' } });
    const { isValid, operationOutcome } = invalidParticipant.validate();
    expect(isValid).toBe(false);
    expect(operationOutcome.issue).not.toHaveLength(0);
  });

  it('should add a role to the CareTeamParticipant', () => {
    const role: ICodeableConcept = { text: 'Primary care physician' };
    const participant = new CareTeamParticipant({ role: [role] });
    expect(participant.role).toContain(role);
  });

  it('should add a member to the CareTeamParticipant', () => {
    const member: IReference = { reference: 'Practitioner/1' };
    const participant = new CareTeamParticipant({ member });
    expect(participant.member).toBe(member);
  });

  it('should add an onBehalfOf reference to the CareTeamParticipant', () => {
    const onBehalfOf: IReference = { reference: 'Organization/1' };
    const participant = new CareTeamParticipant({ onBehalfOf });
    expect(participant.onBehalfOf).toBe(onBehalfOf);
  });

  it('should add a period to the CareTeamParticipant', () => {
    const period: IPeriod = { start: '2021-01-01', end: '2021-12-31' };
    const participant = new CareTeamParticipant({ period });
    expect(participant.period).toBe(period);
  });
});

describe('CareTeamParticipantBuilder', () => {
  let builder: CareTeamParticipantBuilder;

  beforeEach(() => {
    builder = new CareTeamParticipantBuilder();
  });

  it('should build a CareTeamParticipant with role', () => {
    const role: ICodeableConcept = { text: 'Primary care physician' };
    const participant = builder.addRole(role).build();
    expect(participant.role).toContain(role);
  });

  it('should build a CareTeamParticipant with member', () => {
    const member: IReference = { reference: 'Practitioner/1' };
    const participant = builder.setMember(member).build();
    expect(participant.member).toBe(member);
  });

  it('should build a CareTeamParticipant with onBehalfOf', () => {
    const onBehalfOf: IReference = { reference: 'Organization/1' };
    const participant = builder.setOnBehalfOf(onBehalfOf).build();
    expect(participant.onBehalfOf).toBe(onBehalfOf);
  });

  it('should build a CareTeamParticipant with period', () => {
    const period: IPeriod = { start: '2021-01-01', end: '2021-12-31' };
    const participant = builder.setPeriod(period).build();
    expect(participant.period).toBe(period);
  });

  it('should build a CareTeamParticipant with multiple roles', () => {
    const role1: ICodeableConcept = { text: 'Primary care physician' };
    const role2: ICodeableConcept = { text: 'Nurse' };
    const participant = builder.addRole(role1).addRole(role2).build();
    expect(participant.role).toContain(role1);
    expect(participant.role).toContain(role2);
  });
});

describe('CareTeamParticipantValidator', () => {
  let errors: IOperationOutcomeIssue[];

  beforeEach(() => {
    errors = [];
  });

  it('should validate CareTeamParticipant with all fields set correctly', () => {
    const participant: ICareTeamParticipant = {
      role: [{ text: 'Primary care physician' }],
      member: { reference: 'Practitioner/1' },
      onBehalfOf: { reference: 'Organization/1' },
      period: { start: '2021-01-01', end: '2021-12-31' },
    };
    CareTeamParticipantValidator(participant, 'CareTeamParticipant', errors);
    expect(errors.length).toBe(0);
  });

  it('should add error if CareTeamParticipant has invalid role', () => {
    const participant: ICareTeamParticipant = {
      role: [{ text: '' }],
    };
    CareTeamParticipantValidator(participant, 'CareTeamParticipant', errors);
    expect(errors.length).toBeGreaterThan(0);
  });

  it('should add error if CareTeamParticipant has invalid member reference', () => {
    const participant: ICareTeamParticipant = {
      member: { reference: '' },
    };
    CareTeamParticipantValidator(participant, 'CareTeamParticipant', errors);
    expect(errors.length).toBeGreaterThan(0);
  });

  it('should add error if CareTeamParticipant has invalid onBehalfOf reference', () => {
    const participant: ICareTeamParticipant = {
      onBehalfOf: { reference: '' },
    };
    CareTeamParticipantValidator(participant, 'CareTeamParticipant', errors);
    expect(errors.length).toBeGreaterThan(0);
  });

  it('should add error if CareTeamParticipant has invalid period', () => {
    const participant: ICareTeamParticipant = {
      period: { start: 'invalid-date', end: 'invalid-date' },
    };
    CareTeamParticipantValidator(participant, 'CareTeamParticipant', errors);
    expect(errors.length).toBeGreaterThan(0);
  });

  it('should validate CareTeamParticipant with only required fields', () => {
    const participant: ICareTeamParticipant = {};
    CareTeamParticipantValidator(participant, 'CareTeamParticipant', errors);
    expect(errors.length).toBe(0);
  });
});
