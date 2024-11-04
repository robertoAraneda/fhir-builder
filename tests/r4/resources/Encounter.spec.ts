import { Encounter } from '../../../src/r4/models/resources/Encounter';
import {
  IIdentifier,
  IElement,
  ICoding,
  IReference,
  IPeriod,
  EncounterStatusType,
  IEncounter,
} from 'fhirtypes/dist/r4';
import { EncounterBuilder } from '../../../src/r4';

describe('Encounter', () => {
  it('should create an Encounter with default values', () => {
    const encounter = new Encounter();
    expect(encounter.resourceType).toBe('Encounter');
    expect(encounter.identifier).toBeUndefined();
    expect(encounter.status).toBeUndefined();
    expect(encounter._status).toBeUndefined();
    expect(encounter.statusHistory).toBeUndefined();
    expect(encounter.class).toBeUndefined();
    expect(encounter.classHistory).toBeUndefined();
    expect(encounter.type).toBeUndefined();
    expect(encounter.serviceType).toBeUndefined();
    expect(encounter.priority).toBeUndefined();
    expect(encounter.subject).toBeUndefined();
    expect(encounter.episodeOfCare).toBeUndefined();
    expect(encounter.basedOn).toBeUndefined();
    expect(encounter.participant).toBeUndefined();
    expect(encounter.appointment).toBeUndefined();
    expect(encounter.period).toBeUndefined();
    expect(encounter.length).toBeUndefined();
    expect(encounter.reasonCode).toBeUndefined();
    expect(encounter.reasonReference).toBeUndefined();
    expect(encounter.diagnosis).toBeUndefined();
    expect(encounter.account).toBeUndefined();
    expect(encounter.hospitalization).toBeUndefined();
    expect(encounter.location).toBeUndefined();
    expect(encounter.serviceProvider).toBeUndefined();
    expect(encounter.partOf).toBeUndefined();
  });

  it('should create an Encounter with provided values', () => {
    const identifier: IIdentifier = { system: 'http://example.com', value: '12345' };
    const status: EncounterStatusType = 'in-progress';
    const classCoding: ICoding = { system: 'http://example.com', code: 'AMB' };
    const subject: IReference = { reference: 'Patient/1' };
    const period: IPeriod = { start: '2021-01-01T00:00:00Z', end: '2021-01-01T01:00:00Z' };

    const encounter = new Encounter({
      identifier: [identifier],
      status,
      class: classCoding,
      subject,
      period,
    });

    expect(encounter.identifier).toContain(identifier);
    expect(encounter.status).toBe(status);
    expect(encounter.class).toBe(classCoding);
    expect(encounter.subject).toBe(subject);
    expect(encounter.period).toBe(period);
  });

  it('should serialize to JSON correctly', () => {
    const status: EncounterStatusType = 'in-progress';
    const encounter = new Encounter({ status } as IEncounter);
    const json = encounter.toJson();
    expect(json.status).toBe(status);
  });

  it('should return a pretty string representation of the model', () => {
    const status: EncounterStatusType = 'in-progress';
    const encounter = new Encounter({ status } as IEncounter);
    const prettyString = encounter.toPrettyString();
    expect(prettyString).toContain(`"status": "${status}"`);
  });

  it('should validate a valid Encounter model', () => {
    const validEncounter = new Encounter({ status: 'in-progress', class: { code: 'code' } } as IEncounter);
    const { isValid, operationOutcome } = validEncounter.validate();
    expect(isValid).toBe(true);
    expect(operationOutcome.issue).toHaveLength(0);
  });

  it('should invalidate an Encounter model with invalid data', () => {
    const invalidEncounter = new Encounter({ status: '' as EncounterStatusType } as IEncounter);
    const { isValid, operationOutcome } = invalidEncounter.validate();
    expect(isValid).toBe(false);
    expect(operationOutcome.issue).not.toHaveLength(0);
  });

  it('should handle empty JSON input', () => {
    const json = '{}';
    const encounter = new Encounter(JSON.parse(json));
    expect(encounter.resourceType).toBe('Encounter');
    expect(encounter.identifier).toBeUndefined();
    expect(encounter.status).toBeUndefined();
    expect(encounter._status).toBeUndefined();
    expect(encounter.statusHistory).toBeUndefined();
    expect(encounter.class).toBeUndefined();
    expect(encounter.classHistory).toBeUndefined();
    expect(encounter.type).toBeUndefined();
    expect(encounter.serviceType).toBeUndefined();
    expect(encounter.priority).toBeUndefined();
    expect(encounter.subject).toBeUndefined();
    expect(encounter.episodeOfCare).toBeUndefined();
    expect(encounter.basedOn).toBeUndefined();
    expect(encounter.participant).toBeUndefined();
    expect(encounter.appointment).toBeUndefined();
    expect(encounter.period).toBeUndefined();
    expect(encounter.length).toBeUndefined();
    expect(encounter.reasonCode).toBeUndefined();
    expect(encounter.reasonReference).toBeUndefined();
    expect(encounter.diagnosis).toBeUndefined();
    expect(encounter.account).toBeUndefined();
    expect(encounter.hospitalization).toBeUndefined();
    expect(encounter.location).toBeUndefined();
    expect(encounter.serviceProvider).toBeUndefined();
    expect(encounter.partOf).toBeUndefined();
  });
});

describe('EncounterBuilder', () => {
  let builder: EncounterBuilder;

  beforeEach(() => {
    builder = new EncounterBuilder();
  });

  it('should build an Encounter with identifier', () => {
    const identifier: IIdentifier = { system: 'http://example.com', value: '12345' };
    const encounter = builder.addIdentifier(identifier).build();
    expect(encounter.identifier).toContain(identifier);
  });

  it('should build an Encounter with status', () => {
    const status: EncounterStatusType = 'in-progress';
    const encounter = builder.setStatus(status).build();
    expect(encounter.status).toBe(status);
  });

  it('should build an Encounter with class', () => {
    const classCoding: ICoding = { system: 'http://example.com', code: 'AMB' };
    const encounter = builder.setClass(classCoding).build();
    expect(encounter.class).toBe(classCoding);
  });

  it('should build an Encounter with subject', () => {
    const subject: IReference = { reference: 'Patient/1' };
    const encounter = builder.setSubject(subject).build();
    expect(encounter.subject).toBe(subject);
  });

  it('should build an Encounter with period', () => {
    const period: IPeriod = { start: '2021-01-01T00:00:00Z', end: '2021-01-01T01:00:00Z' };
    const encounter = builder.setPeriod(period).build();
    expect(encounter.period).toBe(period);
  });

  it('should build an Encounter from JSON', () => {
    const json = '{"status": "in-progress"}';
    const encounter = builder.fromJSON(json).build();
    expect(encounter.status).toBe('in-progress');
  });

  it('should add a primitive extension to the Encounter', () => {
    const extension: IElement = { id: 'test-extension' };
    const encounter = builder.addPrimitiveExtension('_status', extension).build();
    expect(encounter._status).toEqual(extension);
  });

  it('should handle empty JSON input', () => {
    const json = '{}';
    const encounter = builder.fromJSON(json).build();
    expect(encounter.resourceType).toBe('Encounter');
    expect(encounter.identifier).toBeUndefined();
    expect(encounter.status).toBeUndefined();
    expect(encounter._status).toBeUndefined();
    expect(encounter.class).toBeUndefined();
    expect(encounter.subject).toBeUndefined();
    expect(encounter.period).toBeUndefined();
  });
});
