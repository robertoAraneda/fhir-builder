import {
  AllergyIntoleranceReaction,
  AllergyIntoleranceReactionBuilder,
  AllergyIntoleranceReactionValidator,
} from '../../../src/r4';
import {
  AllergyIntoleranceSeverityType,
  IAllergyIntoleranceReaction,
  IAnnotation,
  ICodeableConcept,
  IElement,
  IOperationOutcomeIssue,
} from 'fhirtypes/dist/r4';

describe('AllergyIntoleranceReaction', () => {
  it('should initialize with default values', () => {
    const reaction = new AllergyIntoleranceReaction();
    expect(reaction.substance).toBeUndefined();
    expect(reaction.manifestation).toBeUndefined();
    expect(reaction.description).toBeUndefined();
    expect(reaction._description).toBeUndefined();
    expect(reaction.onset).toBeUndefined();
    expect(reaction._onset).toBeUndefined();
    expect(reaction.severity).toBeUndefined();
    expect(reaction._severity).toBeUndefined();
    expect(reaction.exposureRoute).toBeUndefined();
    expect(reaction.note).toBeUndefined();
  });

  it('should initialize with provided values', () => {
    const reaction = new AllergyIntoleranceReaction({
      substance: { text: 'Peanuts' },
      manifestation: [{ text: 'Hives' }],
      description: 'Severe reaction',
      onset: '2023-10-01',
      severity: 'severe',
      exposureRoute: { text: 'Oral' },
      note: [{ text: 'Patient experienced severe hives' }],
    });
    expect(reaction.substance?.text).toBe('Peanuts');
    expect(reaction.manifestation[0].text).toBe('Hives');
    expect(reaction.description).toBe('Severe reaction');
    expect(reaction.onset).toBe('2023-10-01');
    expect(reaction.severity).toBe('severe');
    expect(reaction.exposureRoute?.text).toBe('Oral');
    expect(reaction.note?.[0].text).toBe('Patient experienced severe hives');
  });

  it('should return a JSON representation of the model', () => {
    const reaction = new AllergyIntoleranceReaction({
      substance: { text: 'Peanuts' },
      manifestation: [{ text: 'Hives' }],
    });
    const json = reaction.toJson();
    expect(json.substance.text).toBe('Peanuts');
    expect(json.manifestation[0].text).toBe('Hives');
  });

  it('should return a string representation of the model', () => {
    const reaction = new AllergyIntoleranceReaction({
      substance: { text: 'Peanuts' },
      manifestation: [{ text: 'Hives' }],
    });
    const str = reaction.toString();
    expect(str).toContain('Peanuts');
    expect(str).toContain('Hives');
  });

  it('should return a pretty string representation of the model', () => {
    const reaction = new AllergyIntoleranceReaction({
      substance: { text: 'Peanuts' },
      manifestation: [{ text: 'Hives' }],
    });
    const prettyStr = reaction.toPrettyString();
    expect(prettyStr).toContain('Peanuts');
    expect(prettyStr).toContain('Hives');
  });

  it('should return a serialized string representation of the model', () => {
    const reaction = new AllergyIntoleranceReaction({
      substance: { text: 'Peanuts' },
      manifestation: [{ text: 'Hives' }],
    });
    const serialized = reaction.serialize();
    expect(serialized).toContain('Peanuts');
    expect(serialized).toContain('Hives');
  });

  it('should validate a valid model', () => {
    const reaction = new AllergyIntoleranceReaction({
      substance: { text: 'Peanuts' },
      manifestation: [{ text: 'Hives' }],
    });
    const { isValid, operationOutcome } = reaction.validate();
    expect(isValid).toBe(true);
    expect(operationOutcome.issue).toHaveLength(0);
  });

  it('should invalidate an invalid model', () => {
    const reaction = new AllergyIntoleranceReaction({} as any);
    const { isValid, operationOutcome } = reaction.validate();
    expect(isValid).toBe(false);
    expect(operationOutcome.issue).toHaveLength(1);
  });
});

describe('AllergyIntoleranceReactionBuilder', () => {
  it('should build a reaction with default values', () => {
    const builder = new AllergyIntoleranceReactionBuilder();
    const reaction = builder.build();
    expect(reaction.substance).toBeUndefined();
    expect(reaction.manifestation).toBeUndefined();
    expect(reaction.description).toBeUndefined();
    expect(reaction.onset).toBeUndefined();
    expect(reaction.severity).toBeUndefined();
    expect(reaction.exposureRoute).toBeUndefined();
    expect(reaction.note).toBeUndefined();
  });

  it('should set substance correctly', () => {
    const builder = new AllergyIntoleranceReactionBuilder();
    const substance = { text: 'Peanuts' } as ICodeableConcept;
    const reaction = builder.setSubstance(substance).build();
    expect(reaction.substance?.text).toBe('Peanuts');
  });

  it('should add manifestation correctly', () => {
    const builder = new AllergyIntoleranceReactionBuilder();
    const manifestation = { text: 'Hives' } as ICodeableConcept;
    const reaction = builder.addManifestation(manifestation).build();
    expect(reaction.manifestation[0].text).toBe('Hives');
  });

  it('should set description correctly', () => {
    const builder = new AllergyIntoleranceReactionBuilder();
    const description = 'Severe reaction';
    const reaction = builder.setDescription(description).build();
    expect(reaction.description).toBe('Severe reaction');
  });

  it('should set onset correctly', () => {
    const builder = new AllergyIntoleranceReactionBuilder();
    const onset = '2023-10-01';
    const reaction = builder.setOnset(onset).build();
    expect(reaction.onset).toBe('2023-10-01');
  });

  it('should set severity correctly', () => {
    const builder = new AllergyIntoleranceReactionBuilder();
    const severity = 'severe' as AllergyIntoleranceSeverityType;
    const reaction = builder.setSeverity(severity).build();
    expect(reaction.severity).toBe('severe');
  });

  it('should set exposure route correctly', () => {
    const builder = new AllergyIntoleranceReactionBuilder();
    const exposureRoute = { text: 'Oral' } as ICodeableConcept;
    const reaction = builder.setExposureRoute(exposureRoute).build();
    expect(reaction.exposureRoute?.text).toBe('Oral');
  });

  it('should add note correctly', () => {
    const builder = new AllergyIntoleranceReactionBuilder();
    const note = { text: 'Patient experienced severe hives' } as IAnnotation;
    const reaction = builder.addNote(note).build();
    expect(reaction.note?.[0].text).toBe('Patient experienced severe hives');
  });

  it('should add primitive extension correctly', () => {
    const builder = new AllergyIntoleranceReactionBuilder();
    const extension = { id: 'ext1' } as IElement;
    const reaction = builder.addPrimitiveExtension('_description', extension).build();
    expect(reaction._description?.id).toBe('ext1');
  });
});

describe('AllergyIntoleranceReactionValidator', () => {
  it('should validate a valid AllergyIntoleranceReaction object', () => {
    const reaction: IAllergyIntoleranceReaction = {
      manifestation: [{ text: 'Hives' }],
    };
    const errors: IOperationOutcomeIssue[] = [];
    AllergyIntoleranceReactionValidator(reaction, 'AllergyIntoleranceReaction', errors);
    expect(errors.length).toBe(0);
  });

  it('should add an error if manifestation is missing', () => {
    const reaction: IAllergyIntoleranceReaction = {} as any;
    const errors: IOperationOutcomeIssue[] = [];
    AllergyIntoleranceReactionValidator(reaction, 'AllergyIntoleranceReaction', errors);
    expect(errors.length).toBeGreaterThan(0);
    expect(errors[0].details?.text).toContain('manifestation');
  });

  it('should add an error if severity is not a valid enum value', () => {
    const reaction: IAllergyIntoleranceReaction = {
      manifestation: [{ text: 'Hives' }],
      severity: 'invalid' as any,
    };
    const errors: IOperationOutcomeIssue[] = [];
    AllergyIntoleranceReactionValidator(reaction, 'AllergyIntoleranceReaction', errors);
    expect(errors.length).toBeGreaterThan(0);
    expect(errors[0].details?.text).toContain('severity');
  });

  it('should add an error if onset is not a valid dateTime', () => {
    const reaction: IAllergyIntoleranceReaction = {
      manifestation: [{ text: 'Hives' }],
      onset: 'invalid-date' as any,
    };
    const errors: IOperationOutcomeIssue[] = [];
    AllergyIntoleranceReactionValidator(reaction, 'AllergyIntoleranceReaction', errors);
    expect(errors.length).toBeGreaterThan(0);
    expect(errors[0].details?.text).toContain('onset');
  });

  it('should add an error if note is not a valid Annotation object', () => {
    const reaction: IAllergyIntoleranceReaction = {
      manifestation: [{ text: 'Hives' }],
      note: [{ invalidField: 'invalid' }] as any,
    };
    const errors: IOperationOutcomeIssue[] = [];
    AllergyIntoleranceReactionValidator(reaction, 'AllergyIntoleranceReaction', errors);
    expect(errors.length).toBeGreaterThan(0);
    expect(errors[0].details?.text).toContain('note');
  });
});
