import { AllergyIntolerance } from '../../../src/r4/models/resources/AllergyIntolerance';
import {
  IIdentifier,
  ICodeableConcept,
  IReference,
  IAge,
  IPeriod,
  IRange,
  IAnnotation,
  IAllergyIntoleranceReaction,
  AllergyIntoleranceTypeType,
  AllergyIntoleranceCategoryType,
  AllergyIntoleranceCriticalityType,
  IElement,
  IOperationOutcomeIssue,
  AllergyIntoleranceSeverityType,
} from 'fhirtypes/dist/r4';
import { AllergyIntoleranceBuilder } from '../../../src/r4/builders';
import { AllergyIntoleranceReactionValidator } from '../../../src/core/r4/validators/backbones';

describe('AllergyIntolerance', () => {
  it('should create an AllergyIntolerance with default values', () => {
    const allergyIntolerance = new AllergyIntolerance();
    expect(allergyIntolerance.resourceType).toBe('AllergyIntolerance');
    expect(allergyIntolerance.identifier).toBeUndefined();
    expect(allergyIntolerance.clinicalStatus).toBeUndefined();
    expect(allergyIntolerance.verificationStatus).toBeUndefined();
    expect(allergyIntolerance.type).toBeUndefined();
    expect(allergyIntolerance.category).toBeUndefined();
    expect(allergyIntolerance.criticality).toBeUndefined();
    expect(allergyIntolerance.code).toBeUndefined();
    expect(allergyIntolerance.patient).toBeUndefined();
    expect(allergyIntolerance.encounter).toBeUndefined();
    expect(allergyIntolerance.onsetDateTime).toBeUndefined();
    expect(allergyIntolerance.onsetAge).toBeUndefined();
    expect(allergyIntolerance.onsetPeriod).toBeUndefined();
    expect(allergyIntolerance.onsetRange).toBeUndefined();
    expect(allergyIntolerance.onsetString).toBeUndefined();
    expect(allergyIntolerance.recordedDate).toBeUndefined();
    expect(allergyIntolerance.recorder).toBeUndefined();
    expect(allergyIntolerance.asserter).toBeUndefined();
    expect(allergyIntolerance.lastOccurrence).toBeUndefined();
    expect(allergyIntolerance.note).toBeUndefined();
    expect(allergyIntolerance.reaction).toBeUndefined();
  });

  it('should create an AllergyIntolerance with provided values', () => {
    const identifier: IIdentifier = { system: 'http://example.com', value: '12345' };
    const clinicalStatus: ICodeableConcept = { text: 'Active' };
    const verificationStatus: ICodeableConcept = { text: 'Confirmed' };
    const type: AllergyIntoleranceTypeType = 'allergy';
    const category: AllergyIntoleranceCategoryType[] = ['food'];
    const criticality: AllergyIntoleranceCriticalityType = 'high';
    const code: ICodeableConcept = { text: 'Peanut Allergy' };
    const patient: IReference = { reference: 'Patient/1' };
    const encounter: IReference = { reference: 'Encounter/1' };
    const onsetDateTime = '2021-01-01';
    const onsetAge: IAge = { value: 30, unit: 'years' };
    const onsetPeriod: IPeriod = { start: '2021-01-01', end: '2021-12-31' };
    const onsetRange: IRange = { low: { value: 1 }, high: { value: 10 } };
    const onsetString = 'Early 2021';
    const recordedDate = '2021-01-01';
    const recorder: IReference = { reference: 'Practitioner/1' };
    const asserter: IReference = { reference: 'Practitioner/2' };
    const lastOccurrence = '2021-12-31';
    const note: IAnnotation[] = [{ text: 'Patient reported severe reaction' }];
    const reaction: IAllergyIntoleranceReaction[] = [{ description: 'Anaphylaxis', manifestation: [{ id: '1' }] }];

    const allergyIntolerance = new AllergyIntolerance({
      identifier: [identifier],
      clinicalStatus,
      verificationStatus,
      type,
      category,
      criticality,
      code,
      patient,
      encounter,
      onsetDateTime,
      onsetAge,
      onsetPeriod,
      onsetRange,
      onsetString,
      recordedDate,
      recorder,
      asserter,
      lastOccurrence,
      note,
      reaction,
    });

    expect(allergyIntolerance.identifier).toContain(identifier);
    expect(allergyIntolerance.clinicalStatus).toBe(clinicalStatus);
    expect(allergyIntolerance.verificationStatus).toBe(verificationStatus);
    expect(allergyIntolerance.type).toBe(type);
    expect(allergyIntolerance.category).toContain('food');
    expect(allergyIntolerance.criticality).toBe(criticality);
    expect(allergyIntolerance.code).toBe(code);
    expect(allergyIntolerance.patient).toBe(patient);
    expect(allergyIntolerance.encounter).toBe(encounter);
    expect(allergyIntolerance.onsetDateTime).toBe(onsetDateTime);
    expect(allergyIntolerance.onsetAge).toBe(onsetAge);
    expect(allergyIntolerance.onsetPeriod).toBe(onsetPeriod);
    expect(allergyIntolerance.onsetRange).toBe(onsetRange);
    expect(allergyIntolerance.onsetString).toBe(onsetString);
    expect(allergyIntolerance.recordedDate).toBe(recordedDate);
    expect(allergyIntolerance.recorder).toBe(recorder);
    expect(allergyIntolerance.asserter).toBe(asserter);
    expect(allergyIntolerance.lastOccurrence).toBe(lastOccurrence);
    expect(allergyIntolerance.note).toContain(note[0]);
    expect(allergyIntolerance.reaction).toContain(reaction[0]);
  });

  it('should serialize to JSON correctly', () => {
    const clinicalStatus: ICodeableConcept = { text: 'Active' };
    const patient: IReference = { reference: 'Patient/1' };
    const allergyIntolerance = new AllergyIntolerance({ clinicalStatus, patient });
    const json = allergyIntolerance.toJson();
    expect(json.clinicalStatus).toEqual(clinicalStatus);
  });

  it('should return a pretty string representation of the model', () => {
    const clinicalStatus: ICodeableConcept = { text: 'Active' };
    const patient: IReference = { reference: 'Patient/1' };
    const allergyIntolerance = new AllergyIntolerance({ clinicalStatus, patient });
    const prettyString = allergyIntolerance.toPrettyString();
    expect(prettyString).toContain('"text": "Active"');
  });

  it('should validate a valid AllergyIntolerance model', () => {
    const validAllergyIntolerance = new AllergyIntolerance({ patient: { reference: 'Patient/1' } });
    const { isValid, operationOutcome } = validAllergyIntolerance.validate();
    expect(isValid).toBe(true);
    expect(operationOutcome.issue).toHaveLength(0);
  });

  it('should invalidate an AllergyIntolerance model with invalid patient reference', () => {
    const invalidAllergyIntolerance = new AllergyIntolerance({ patient: { reference: '' } });
    const { isValid, operationOutcome } = invalidAllergyIntolerance.validate();
    expect(isValid).toBe(false);
    expect(operationOutcome.issue).not.toHaveLength(0);
  });
});

describe('AllergyIntoleranceBuilder', () => {
  let builder: AllergyIntoleranceBuilder;

  beforeEach(() => {
    builder = new AllergyIntoleranceBuilder();
  });

  it('should build an AllergyIntolerance with identifier', () => {
    const identifier: IIdentifier = { system: 'http://example.com', value: '12345' };
    const allergyIntolerance = builder.addIdentifier(identifier).build();
    expect(allergyIntolerance.identifier).toContain(identifier);
  });

  it('should build an AllergyIntolerance with clinicalStatus', () => {
    const clinicalStatus: ICodeableConcept = { text: 'Active' };
    const allergyIntolerance = builder.setClinicalStatus(clinicalStatus).build();
    expect(allergyIntolerance.clinicalStatus).toBe(clinicalStatus);
  });

  it('should build an AllergyIntolerance with verificationStatus', () => {
    const verificationStatus: ICodeableConcept = { text: 'Confirmed' };
    const allergyIntolerance = builder.setVerificationStatus(verificationStatus).build();
    expect(allergyIntolerance.verificationStatus).toBe(verificationStatus);
  });

  it('should build an AllergyIntolerance with type', () => {
    const type: AllergyIntoleranceTypeType = 'allergy';
    const allergyIntolerance = builder.setType(type).build();
    expect(allergyIntolerance.type).toBe(type);
  });

  it('should build an AllergyIntolerance with category', () => {
    const category: AllergyIntoleranceCategoryType = 'food';
    const allergyIntolerance = builder.addCategory(category).build();
    expect(allergyIntolerance.category).toContain(category);
  });

  it('should build an AllergyIntolerance with criticality', () => {
    const criticality: AllergyIntoleranceCriticalityType = 'high';
    const allergyIntolerance = builder.setCriticality(criticality).build();
    expect(allergyIntolerance.criticality).toBe(criticality);
  });

  it('should build an AllergyIntolerance with code', () => {
    const code: ICodeableConcept = { text: 'Peanut Allergy' };
    const allergyIntolerance = builder.setCode(code).build();
    expect(allergyIntolerance.code).toBe(code);
  });

  it('should build an AllergyIntolerance with patient', () => {
    const patient: IReference = { reference: 'Patient/1' };
    const allergyIntolerance = builder.setPatient(patient).build();
    expect(allergyIntolerance.patient).toBe(patient);
  });

  it('should build an AllergyIntolerance with encounter', () => {
    const encounter: IReference = { reference: 'Encounter/1' };
    const allergyIntolerance = builder.setEncounter(encounter).build();
    expect(allergyIntolerance.encounter).toBe(encounter);
  });

  it('should build an AllergyIntolerance with onsetDateTime', () => {
    const onsetDateTime = '2021-01-01';
    const allergyIntolerance = builder.setOnsetDateTime(onsetDateTime).build();
    expect(allergyIntolerance.onsetDateTime).toBe(onsetDateTime);
  });

  it('should build an AllergyIntolerance with onsetAge', () => {
    const onsetAge: IAge = { value: 30, unit: 'years' };
    const allergyIntolerance = builder.setOnsetAge(onsetAge).build();
    expect(allergyIntolerance.onsetAge).toBe(onsetAge);
  });

  it('should build an AllergyIntolerance with onsetPeriod', () => {
    const onsetPeriod: IPeriod = { start: '2021-01-01', end: '2021-12-31' };
    const allergyIntolerance = builder.setOnsetPeriod(onsetPeriod).build();
    expect(allergyIntolerance.onsetPeriod).toBe(onsetPeriod);
  });

  it('should build an AllergyIntolerance with onsetRange', () => {
    const onsetRange: IRange = { low: { value: 1 }, high: { value: 10 } };
    const allergyIntolerance = builder.setOnsetRange(onsetRange).build();
    expect(allergyIntolerance.onsetRange).toBe(onsetRange);
  });

  it('should build an AllergyIntolerance with onsetString', () => {
    const onsetString = 'Early 2021';
    const allergyIntolerance = builder.setOnsetString(onsetString).build();
    expect(allergyIntolerance.onsetString).toBe(onsetString);
  });

  it('should build an AllergyIntolerance with recordedDate', () => {
    const recordedDate = '2021-01-01';
    const allergyIntolerance = builder.setRecordedDate(recordedDate).build();
    expect(allergyIntolerance.recordedDate).toBe(recordedDate);
  });

  it('should build an AllergyIntolerance with recorder', () => {
    const recorder: IReference = { reference: 'Practitioner/1' };
    const allergyIntolerance = builder.setRecorder(recorder).build();
    expect(allergyIntolerance.recorder).toBe(recorder);
  });

  it('should build an AllergyIntolerance with asserter', () => {
    const asserter: IReference = { reference: 'Practitioner/2' };
    const allergyIntolerance = builder.setAsserter(asserter).build();
    expect(allergyIntolerance.asserter).toBe(asserter);
  });

  it('should build an AllergyIntolerance with lastOccurrence', () => {
    const lastOccurrence = '2021-12-31';
    const allergyIntolerance = builder.setLastOccurrence(lastOccurrence).build();
    expect(allergyIntolerance.lastOccurrence).toBe(lastOccurrence);
  });

  it('should build an AllergyIntolerance with note', () => {
    const note: IAnnotation = { text: 'Patient reported severe reaction' };
    const allergyIntolerance = builder.addNote(note).build();
    expect(allergyIntolerance.note).toContain(note);
  });

  it('should build an AllergyIntolerance with reaction', () => {
    const manifestation: ICodeableConcept = { text: 'Hives' };
    const reaction: IAllergyIntoleranceReaction = { description: 'Anaphylaxis', manifestation: [manifestation] };
    const allergyIntolerance = builder.addReaction(reaction).build();
    expect(allergyIntolerance.reaction).toContain(reaction);
  });

  it('should build an AllergyIntolerance from JSON', () => {
    const json = '{"clinicalStatus": {"text": "Active"}}';
    const allergyIntolerance = builder.fromJSON(json).build();
    expect(allergyIntolerance.clinicalStatus).toEqual({ text: 'Active' });
  });

  it('should add a primitive extension to the AllergyIntolerance', () => {
    const extension: IElement = { id: 'test-extension' };
    const allergyIntolerance = builder.addPrimitiveExtension('_category', [extension]).build();
    expect(allergyIntolerance._category).toContain(extension);
  });
});

describe('AllergyIntoleranceReactionValidator', () => {
  let errors: IOperationOutcomeIssue[];

  beforeEach(() => {
    errors = [];
  });

  it('should validate AllergyIntoleranceReaction with all fields set correctly', () => {
    const reaction: IAllergyIntoleranceReaction = {
      substance: { text: 'Peanut' },
      manifestation: [{ text: 'Hives' }],
      description: 'Severe reaction',
      onset: '2021-01-01T00:00:00Z',
      severity: 'severe',
      exposureRoute: { text: 'Oral' },
      note: [{ text: 'Patient reported severe reaction' }],
    };
    AllergyIntoleranceReactionValidator(reaction, 'AllergyIntoleranceReaction', errors);
    expect(errors.length).toBe(0);
  });

  it('should add error if AllergyIntoleranceReaction has missing required manifestation', () => {
    const reaction = {
      substance: { text: 'Peanut' },
      description: 'Severe reaction',
    };
    AllergyIntoleranceReactionValidator(reaction as any, 'AllergyIntoleranceReaction', errors);
    expect(errors.length).toBeGreaterThan(0);
  });

  it('should add error if AllergyIntoleranceReaction has invalid severity', () => {
    const reaction: IAllergyIntoleranceReaction = {
      manifestation: [{ text: 'Hives' }],
      severity: 'invalid-severity' as AllergyIntoleranceSeverityType,
    };
    AllergyIntoleranceReactionValidator(reaction, 'AllergyIntoleranceReaction', errors);
    expect(errors.length).toBeGreaterThan(0);
  });

  it('should validate AllergyIntoleranceReaction with only required fields', () => {
    const reaction: IAllergyIntoleranceReaction = {
      manifestation: [{ text: 'Hives' }],
    };
    AllergyIntoleranceReactionValidator(reaction, 'AllergyIntoleranceReaction', errors);
    expect(errors.length).toBe(0);
  });

  it('should add error if AllergyIntoleranceReaction has invalid onset date', () => {
    const reaction: IAllergyIntoleranceReaction = {
      manifestation: [{ text: 'Hives' }],
      onset: 'invalid-date',
    };
    AllergyIntoleranceReactionValidator(reaction, 'AllergyIntoleranceReaction', errors);
    expect(errors.length).toBeGreaterThan(0);
  });
});
