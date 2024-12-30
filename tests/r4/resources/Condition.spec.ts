import { Condition, ConditionBuilder, ConditionValidator } from '../../../src/r4';
import {
  IAge,
  IAnnotation,
  ICodeableConcept,
  ICondition,
  IConditionEvidence,
  IConditionStage,
  IElement,
  IIdentifier,
  IOperationOutcomeIssue,
  IPeriod,
  IRange,
  IReference,
} from 'fhirtypes/dist/r4';

describe('Condition', () => {
  describe('ConditionModel', () => {
    it('creates a Condition with default values', () => {
      const condition = new Condition();
      expect(condition.resourceType).toBe('Condition');
      expect(condition.identifier).toBeUndefined();
      expect(condition.clinicalStatus).toBeUndefined();
      expect(condition.verificationStatus).toBeUndefined();
      expect(condition.category).toBeUndefined();
      expect(condition.severity).toBeUndefined();
      expect(condition.code).toBeUndefined();
      expect(condition.bodySite).toBeUndefined();
      expect(condition.subject).toBeUndefined();
      expect(condition.encounter).toBeUndefined();
      expect(condition.onsetDateTime).toBeUndefined();
      expect(condition._onsetDateTime).toBeUndefined();
      expect(condition.onsetAge).toBeUndefined();
      expect(condition.onsetPeriod).toBeUndefined();
      expect(condition.onsetRange).toBeUndefined();
      expect(condition.onsetString).toBeUndefined();
      expect(condition._onsetString).toBeUndefined();
      expect(condition.abatementDateTime).toBeUndefined();
      expect(condition._abatementDateTime).toBeUndefined();
      expect(condition.abatementAge).toBeUndefined();
      expect(condition.abatementPeriod).toBeUndefined();
      expect(condition.abatementRange).toBeUndefined();
      expect(condition.abatementString).toBeUndefined();
      expect(condition._abatementString).toBeUndefined();
      expect(condition.recordedDate).toBeUndefined();
      expect(condition._recordedDate).toBeUndefined();
      expect(condition.recorder).toBeUndefined();
      expect(condition.asserter).toBeUndefined();
      expect(condition.stage).toBeUndefined();
      expect(condition.evidence).toBeUndefined();
      expect(condition.note).toBeUndefined();
    });

    it('creates a Condition with provided values', () => {
      const identifier: IIdentifier = { system: 'http://example.com', value: '12345' };
      const clinicalStatus: ICodeableConcept = { text: 'active' };
      const subject: IReference = { reference: 'Patient/1' };
      const condition = new Condition({
        identifier: [identifier],
        clinicalStatus,
        subject,
      });
      expect(condition.identifier).toContain(identifier);
      expect(condition.clinicalStatus).toBe(clinicalStatus);
      expect(condition.subject).toBe(subject);
    });

    it('serializes to JSON correctly', () => {
      const clinicalStatus: ICodeableConcept = { text: 'active' };
      const subject: IReference = { reference: 'Patient/1' };

      const condition = new Condition({ clinicalStatus, subject });
      const json = condition.toJson();
      expect(json.clinicalStatus).toEqual(clinicalStatus);
    });

    it('returns a pretty string representation of the model', () => {
      const clinicalStatus: ICodeableConcept = { text: 'active' };
      const subject: IReference = { reference: 'Patient/1' };
      const condition = new Condition({ clinicalStatus, subject });
      const prettyString = condition.toPrettyString();
      expect(prettyString).toContain(`"text": "active"`);
    });

    it('validates a valid Condition model', () => {
      const validCondition = new Condition({ resourceType: 'Condition', subject: { reference: 'Patient/1' } });
      const { isValid, operationOutcome } = validCondition.validate();
      expect(isValid).toBe(true);
      expect(operationOutcome.issue).toHaveLength(0);
    });

    it('invalidates a Condition model with invalid data', () => {
      const invalidCondition = new Condition({
        resourceType: 'Condition',
        subject: {
          reference: 'invalid',
        },
      });

      const { isValid, operationOutcome } = invalidCondition.validate();
      expect(isValid).toBe(false);
      expect(operationOutcome.issue).not.toHaveLength(0);
    });

    it('handles empty Condition model', () => {
      const emptyCondition = new Condition();
      const { isValid, operationOutcome } = emptyCondition.validate();
      expect(isValid).toBe(false);
      expect(operationOutcome.issue).not.toHaveLength(0);
    });
  });

  describe('ConditionBuilder', () => {
    let builder: ConditionBuilder;

    beforeEach(() => {
      builder = new ConditionBuilder();
    });

    it('builds a Condition with default values', () => {
      const condition = builder.build();
      expect(condition.resourceType).toBe('Condition');
      expect(condition.identifier).toBeUndefined();
      expect(condition.clinicalStatus).toBeUndefined();
      expect(condition.verificationStatus).toBeUndefined();
      expect(condition.category).toBeUndefined();
      expect(condition.severity).toBeUndefined();
      expect(condition.code).toBeUndefined();
      expect(condition.bodySite).toBeUndefined();
      expect(condition.subject).toBeUndefined();
      expect(condition.encounter).toBeUndefined();
      expect(condition.onsetDateTime).toBeUndefined();
      expect(condition.abatementDateTime).toBeUndefined();
      expect(condition.recordedDate).toBeUndefined();
      expect(condition.recorder).toBeUndefined();
      expect(condition.asserter).toBeUndefined();
      expect(condition.stage).toBeUndefined();
      expect(condition.evidence).toBeUndefined();
      expect(condition.note).toBeUndefined();
    });

    it('builds a Condition with provided values', () => {
      const identifier: IIdentifier = { system: 'http://example.com', value: '12345' };
      const clinicalStatus: ICodeableConcept = { text: 'active' };
      const subject: IReference = { reference: 'Patient/1' };
      const condition = builder.addIdentifier(identifier).setClinicalStatus(clinicalStatus).setSubject(subject).build();
      expect(condition.identifier).toContain(identifier);
      expect(condition.clinicalStatus).toBe(clinicalStatus);
      expect(condition.subject).toBe(subject);
    });

    it('adds a primitive extension correctly', () => {
      const extension: IElement = { id: 'ext1' };
      builder.addPrimitiveExtension('_onsetDateTime', extension);
      const condition = builder.build();
      expect(condition._onsetDateTime).toBe(extension);
    });

    it('parses JSON correctly', () => {
      const json = '{"clinicalStatus": {"text": "active"}}';
      const condition = builder.fromJSON(json).build();
      expect(condition.clinicalStatus?.text).toBe('active');
    });

    it('adds multiple identifiers', () => {
      const identifier1: IIdentifier = { system: 'http://example.com', value: '12345' };
      const identifier2: IIdentifier = { system: 'http://example.com', value: '67890' };
      const condition = builder.addIdentifier(identifier1).addIdentifier(identifier2).build();
      expect(condition.identifier).toContain(identifier1);
      expect(condition.identifier).toContain(identifier2);
      expect(condition.identifier).toHaveLength(2);
    });

    it('sets onsetDateTime correctly', () => {
      const onsetDateTime = '2021-01-01T00:00:00Z';
      const condition = builder.setOnsetDateTime(onsetDateTime).build();
      expect(condition.onsetDateTime).toBe(onsetDateTime);
    });

    it('sets abatementDateTime correctly', () => {
      const abatementDateTime = '2021-12-31T23:59:59Z';
      const condition = builder.setAbatementDateTime(abatementDateTime).build();
      expect(condition.abatementDateTime).toBe(abatementDateTime);
    });

    it('adds multiple categories', () => {
      const category1: ICodeableConcept = { text: 'category1' };
      const category2: ICodeableConcept = { text: 'category2' };
      const condition = builder.addCategory(category1).addCategory(category2).build();
      expect(condition.category).toContain(category1);
      expect(condition.category).toContain(category2);
    });

    it('adds multiple notes', () => {
      const note1: IAnnotation = { text: 'note1' };
      const note2: IAnnotation = { text: 'note2' };
      const condition = builder.addNote(note1).addNote(note2).build();
      expect(condition.note).toContain(note1);
      expect(condition.note).toContain(note2);
    });

    it('sets verificationStatus correctly', () => {
      const verificationStatus: ICodeableConcept = { coding: [{ system: 'system' }] };
      const condition = builder
        .setVerificationStatus(verificationStatus)
        .setSubject({ reference: 'Patient/1' })
        .build();
      expect(condition.verificationStatus).toBe(verificationStatus);
    });

    it('sets severity correctly', () => {
      const severity: ICodeableConcept = { text: 'severe' };
      const condition = builder.setSeverity(severity).build();
      expect(condition.severity).toBe(severity);
    });

    it('sets code correctly', () => {
      const code: ICodeableConcept = { text: 'condition code' };
      const condition = builder.setCode(code).build();
      expect(condition.code).toBe(code);
    });

    it('adds bodySite correctly', () => {
      const bodySite: ICodeableConcept = { text: 'body site' };
      const condition = builder.addBodySite(bodySite).build();
      expect(condition.bodySite).toContain(bodySite);
    });

    it('sets encounter correctly', () => {
      const encounter: IReference = { reference: 'Encounter/1' };
      const condition = builder.setEncounter(encounter).build();
      expect(condition.encounter).toBe(encounter);
    });

    it('sets onsetAge correctly', () => {
      const onsetAge: IAge = { value: 30, unit: 'years' };
      const condition = builder.setOnsetAge(onsetAge).build();
      expect(condition.onsetAge).toBe(onsetAge);
    });

    it('sets onsetPeriod correctly', () => {
      const onsetPeriod: IPeriod = { start: '2021-01-01', end: '2021-12-31' };
      const condition = builder.setOnsetPeriod(onsetPeriod).build();
      expect(condition.onsetPeriod).toBe(onsetPeriod);
    });

    it('sets onsetRange correctly', () => {
      const onsetRange: IRange = { low: { value: 1 }, high: { value: 10 } };
      const condition = builder.setOnsetRange(onsetRange).build();
      expect(condition.onsetRange).toBe(onsetRange);
    });

    it('sets onsetString correctly', () => {
      const onsetString = 'onset string';
      const condition = builder.setOnsetString(onsetString).build();
      expect(condition.onsetString).toBe(onsetString);
    });

    it('sets abatementAge correctly', () => {
      const abatementAge: IAge = { value: 40, unit: 'years' };
      const condition = builder.setAbatementAge(abatementAge).build();
      expect(condition.abatementAge).toBe(abatementAge);
    });

    it('sets abatementPeriod correctly', () => {
      const abatementPeriod: IPeriod = { start: '2022-01-01', end: '2022-12-31' };
      const condition = builder.setAbatementPeriod(abatementPeriod).build();
      expect(condition.abatementPeriod).toBe(abatementPeriod);
    });

    it('sets abatementRange correctly', () => {
      const abatementRange: IRange = { low: { value: 5 }, high: { value: 15 } };
      const condition = builder.setAbatementRange(abatementRange).build();
      expect(condition.abatementRange).toBe(abatementRange);
    });

    it('sets abatementString correctly', () => {
      const abatementString = 'abatement string';
      const condition = builder.setAbatementString(abatementString).build();
      expect(condition.abatementString).toBe(abatementString);
    });

    it('sets recordedDate correctly', () => {
      const recordedDate = '2021-01-01';
      const condition = builder.setRecordedDate(recordedDate).build();
      expect(condition.recordedDate).toBe(recordedDate);
    });

    it('sets recorder correctly', () => {
      const recorder: IReference = { reference: 'Practitioner/1' };
      const condition = builder.setRecorder(recorder).build();
      expect(condition.recorder).toBe(recorder);
    });

    it('sets asserter correctly', () => {
      const asserter: IReference = { reference: 'Practitioner/2' };
      const condition = builder.setAsserter(asserter).build();
      expect(condition.asserter).toBe(asserter);
    });

    it('adds stage correctly', () => {
      const stage: IConditionStage = { summary: { text: 'stage 1' } };
      const condition = builder.addStage(stage).build();
      expect(condition.stage).toContain(stage);
    });

    it('adds evidence correctly', () => {
      const evidence: IConditionEvidence = { detail: [{ reference: 'Observation/1' }] };
      const condition = builder.addEvidence(evidence).build();
      expect(condition.evidence).toContain(evidence);
    });
  });

  describe('ConditionValidator', () => {
    it('validates a Condition with valid data', () => {
      const condition: ICondition = {
        resourceType: 'Condition',
        subject: { reference: 'Patient/1' },
        clinicalStatus: {
          coding: [{ system: 'http://terminology.hl7.org/CodeSystem/condition-clinical', code: 'active' }],
        },
      };
      const errors: IOperationOutcomeIssue[] = [];
      ConditionValidator(condition, 'Condition', errors);
      expect(errors).toHaveLength(0);
    });

    it('invalidates a Condition with missing required subject', () => {
      const condition = {
        resourceType: 'Condition',
        clinicalStatus: {
          coding: [{ system: 'http://terminology.hl7.org/CodeSystem/condition-clinical', code: 'active' }],
        },
      } as ICondition;
      const errors: IOperationOutcomeIssue[] = [];
      ConditionValidator(condition, 'Condition', errors);
      expect(errors).not.toHaveLength(0);
    });

    it('invalidates a Condition with abatement but invalid clinicalStatus', () => {
      const condition: ICondition = {
        resourceType: 'Condition',
        subject: { reference: 'Patient/1' },
        abatementDateTime: '2021-01-01T00:00:00Z',
        clinicalStatus: {
          coding: [{ system: 'http://terminology.hl7.org/CodeSystem/condition-clinical', code: 'active' }],
        },
      };
      const errors: IOperationOutcomeIssue[] = [];
      ConditionValidator(condition, 'Condition', errors);

      console.log(JSON.stringify(errors, null, 2));
      expect(errors).not.toHaveLength(0);
    });

    it('validates a Condition with abatement and valid clinicalStatus', () => {
      const condition: ICondition = {
        resourceType: 'Condition',
        subject: { reference: 'Patient/1' },
        abatementDateTime: '2021-01-01T00:00:00Z',
        clinicalStatus: {
          coding: [{ system: 'http://terminology.hl7.org/CodeSystem/condition-clinical', code: 'resolved' }],
        },
      };
      const errors: IOperationOutcomeIssue[] = [];
      ConditionValidator(condition, 'Condition', errors);
      expect(errors).toHaveLength(0);
    });

    it('invalidates a Condition with invalid reference type in subject', () => {
      const condition: ICondition = {
        resourceType: 'Condition',
        subject: { reference: 'Observation/1' },
        clinicalStatus: {
          coding: [{ system: 'http://terminology.hl7.org/CodeSystem/condition-clinical', code: 'active' }],
        },
      };
      const errors: IOperationOutcomeIssue[] = [];
      ConditionValidator(condition, 'Condition', errors);
      expect(errors).not.toHaveLength(0);
    });

    it('validates a Condition with valid reference type in subject', () => {
      const condition: ICondition = {
        resourceType: 'Condition',
        subject: { reference: 'Patient/1' },
        clinicalStatus: {
          coding: [{ system: 'http://terminology.hl7.org/CodeSystem/condition-clinical', code: 'active' }],
        },
      };
      const errors: IOperationOutcomeIssue[] = [];
      ConditionValidator(condition, 'Condition', errors);

      expect(errors).toHaveLength(0);
    });

    it('invalidates Condition with clinicalStatus when verificationStatus is entered-in-error', () => {
      const condition: ICondition = {
        resourceType: 'Condition',
        subject: { reference: 'Patient/1' },
        clinicalStatus: {
          coding: [{ system: 'http://terminology.hl7.org/CodeSystem/condition-clinical', code: 'active' }],
        },
        verificationStatus: {
          coding: [{ system: 'http://terminology.hl7.org/CodeSystem/condition-ver-status', code: 'entered-in-error' }],
        },
      };
      const errors: IOperationOutcomeIssue[] = [];
      ConditionValidator(condition, 'Condition', errors);
      expect(errors).not.toHaveLength(0);
    });

    it('validates Condition without clinicalStatus when verificationStatus is entered-in-error', () => {
      const condition: ICondition = {
        resourceType: 'Condition',
        subject: { reference: 'Patient/1' },
        verificationStatus: {
          coding: [{ system: 'http://terminology.hl7.org/CodeSystem/condition-ver-status', code: 'entered-in-error' }],
        },
      };
      const errors: IOperationOutcomeIssue[] = [];
      ConditionValidator(condition, 'Condition', errors);
      expect(errors).toHaveLength(0);
    });

    it('validates Condition with clinicalStatus when verificationStatus is not entered-in-error', () => {
      const condition: ICondition = {
        resourceType: 'Condition',
        subject: { reference: 'Patient/1' },
        clinicalStatus: {
          coding: [{ system: 'http://terminology.hl7.org/CodeSystem/condition-clinical', code: 'active' }],
        },
        verificationStatus: {
          coding: [{ system: 'http://terminology.hl7.org/CodeSystem/condition-ver-status', code: 'confirmed' }],
        },
      };
      const errors: IOperationOutcomeIssue[] = [];
      ConditionValidator(condition, 'Condition', errors);
      expect(errors).toHaveLength(0);
    });

    it('invalidates Condition stage without summary or assessment', () => {
      const condition: ICondition = {
        resourceType: 'Condition',
        subject: { reference: 'Patient/1' },
        stage: [{ summary: undefined, assessment: undefined }],
      };
      const errors: IOperationOutcomeIssue[] = [];
      ConditionValidator(condition, 'Condition', errors);
      console.log(JSON.stringify(errors, null, 2));
      expect(errors).not.toHaveLength(0);
    });

    it('validates Condition stage with summary', () => {
      const condition: ICondition = {
        resourceType: 'Condition',
        subject: { reference: 'Patient/1' },
        stage: [{ summary: { text: 'Stage 1' }, assessment: undefined }],
      };
      const errors: IOperationOutcomeIssue[] = [];
      ConditionValidator(condition, 'Condition', errors);
      expect(errors).toHaveLength(0);
    });

    it('validates Condition stage with assessment', () => {
      const condition: ICondition = {
        resourceType: 'Condition',
        subject: { reference: 'Patient/1' },
        stage: [{ summary: undefined, assessment: [{ reference: 'Observation/1' }] }],
      };
      const errors: IOperationOutcomeIssue[] = [];
      ConditionValidator(condition, 'Condition', errors);
      expect(errors).toHaveLength(0);
    });

    it('validates Condition stage with both summary and assessment', () => {
      const condition: ICondition = {
        resourceType: 'Condition',
        subject: { reference: 'Patient/1' },
        stage: [{ summary: { text: 'Stage 1' }, assessment: [{ reference: 'Observation/1' }] }],
      };
      const errors: IOperationOutcomeIssue[] = [];
      ConditionValidator(condition, 'Condition', errors);
      expect(errors).toHaveLength(0);
    });
  });

  describe('FHIR Examples from the Specification', () => {
    it('General Condition Example', () => {
      const item = new Condition({
        resourceType: 'Condition',
        id: 'example',
        text: {
          status: 'generated',
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Severe burn of left ear (Date: 24-May 2012)</div>',
        },
        clinicalStatus: {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/condition-clinical',
              code: 'active',
            },
          ],
        },
        verificationStatus: {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/condition-ver-status',
              code: 'confirmed',
            },
          ],
        },
        category: [
          {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/condition-category',
                code: 'encounter-diagnosis',
                display: 'Encounter Diagnosis',
              },
              {
                system: 'http://snomed.info/sct',
                code: '439401001',
                display: 'Diagnosis',
              },
            ],
          },
        ],
        severity: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '24484000',
              display: 'Severe',
            },
          ],
        },
        code: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '39065001',
              display: 'Burn of ear',
            },
          ],
          text: 'Burnt Ear',
        },
        bodySite: [
          {
            coding: [
              {
                system: 'http://snomed.info/sct',
                code: '49521004',
                display: 'Left external ear structure',
              },
            ],
            text: 'Left Ear',
          },
        ],
        subject: {
          reference: 'Patient/example',
        },
        onsetDateTime: '2012-05-24',
      });

      const { isValid, operationOutcome } = item.validate();
      expect(isValid).toBe(true);
      expect(operationOutcome.issue).toHaveLength(0);
    });

    it('2nd Example', () => {
      const item = new Condition({
        resourceType: 'Condition',
        id: 'example2',
        text: {
          status: 'generated',
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Mild Asthma (Date: 12-Nov 2012)</div>',
        },
        clinicalStatus: {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/condition-clinical',
              code: 'active',
            },
          ],
        },
        verificationStatus: {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/condition-ver-status',
              code: 'confirmed',
            },
          ],
        },
        category: [
          {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/condition-category',
                code: 'problem-list-item',
                display: 'Problem List Item',
              },
            ],
          },
        ],
        severity: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '255604002',
              display: 'Mild',
            },
          ],
        },
        code: {
          text: 'Asthma',
        },
        subject: {
          reference: 'Patient/example',
        },
        onsetString: 'approximately November 2012',
      });

      const { isValid, operationOutcome } = item.validate();
      expect(isValid).toBe(true);
      expect(operationOutcome.issue).toHaveLength(0);
    });

    it('Real-word condition example (fever)', () => {
      const item = new Condition({
        resourceType: 'Condition',
        id: 'f201',
        text: {
          status: 'generated',
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f201</p><p><b>identifier</b>: 12345</p><p><b>clinicalStatus</b>: Resolved <span>(Details : {http://terminology.hl7.org/CodeSystem/condition-clinical code 'resolved' = 'Resolved)</span></p><p><b>verificationStatus</b>: Confirmed <span>(Details : {http://terminology.hl7.org/CodeSystem/condition-ver-status code 'confirmed' = 'Confirmed)</span></p><p><b>category</b>: Problem <span>(Details : {SNOMED CT code '55607006' = 'Problem', given as 'Problem'}; {http://terminology.hl7.org/CodeSystem/condition-category code 'problem-list-item' = 'Problem List Item)</span></p><p><b>severity</b>: Mild <span>(Details : {SNOMED CT code '255604002' = 'Mild', given as 'Mild'})</span></p><p><b>code</b>: Fever <span>(Details : {SNOMED CT code '386661006' = 'Fever', given as 'Fever'})</span></p><p><b>bodySite</b>: Entire body as a whole <span>(Details : {SNOMED CT code '38266002' = 'Body as a whole', given as 'Entire body as a whole'})</span></p><p><b>subject</b>: <a>Roel</a></p><p><b>encounter</b>: <a>Encounter/f201</a></p><p><b>onset</b>: 02/04/2013</p><p><b>abatement</b>: around April 9, 2013</p><p><b>recordedDate</b>: 04/04/2013</p><p><b>recorder</b>: <a>Practitioner/f201</a></p><p><b>asserter</b>: <a>Practitioner/f201</a></p><h3>Evidences</h3><table><tr><td>-</td><td><b>Code</b></td><td><b>Detail</b></td></tr><tr><td>*</td><td>degrees C <span>(Details : {SNOMED CT code '258710007' = 'degrees C', given as 'degrees C'})</span></td><td><a>Temperature</a></td></tr></table></div>",
        },
        identifier: [
          {
            value: '12345',
          },
        ],
        clinicalStatus: {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/condition-clinical',
              code: 'resolved',
            },
          ],
        },
        verificationStatus: {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/condition-ver-status',
              code: 'confirmed',
            },
          ],
        },
        category: [
          {
            coding: [
              {
                system: 'http://snomed.info/sct',
                code: '55607006',
                display: 'Problem',
              },
              {
                system: 'http://terminology.hl7.org/CodeSystem/condition-category',
                code: 'problem-list-item',
              },
            ],
          },
        ],
        severity: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '255604002',
              display: 'Mild',
            },
          ],
        },
        code: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '386661006',
              display: 'Fever',
            },
          ],
        },
        bodySite: [
          {
            coding: [
              {
                system: 'http://snomed.info/sct',
                code: '38266002',
                display: 'Entire body as a whole',
              },
            ],
          },
        ],
        subject: {
          reference: 'Patient/f201',
          display: 'Roel',
        },
        encounter: {
          reference: 'Encounter/f201',
        },
        onsetDateTime: '2013-04-02',
        abatementString: 'around April 9, 2013',
        recordedDate: '2013-04-04',
        recorder: {
          reference: 'Practitioner/f201',
        },
        asserter: {
          reference: 'Practitioner/f201',
        },
        evidence: [
          {
            code: [
              {
                coding: [
                  {
                    system: 'http://snomed.info/sct',
                    code: '258710007',
                    display: 'degrees C',
                  },
                ],
              },
            ],
            detail: [
              {
                reference: 'Observation/f202',
                display: 'Temperature',
              },
            ],
          },
        ],
      });

      const { isValid, operationOutcome } = item.validate();
      expect(isValid).toBe(true);
      expect(operationOutcome.issue).toHaveLength(0);
    });

    it('Real-word condition example (malignancy)', () => {
      const item = new Condition({
        resourceType: 'Condition',
        id: 'f202',
        meta: {
          security: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode',
              code: 'TBOO',
              display: 'taboo',
            },
          ],
        },
        text: {
          status: 'generated',
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f202</p><p><b>meta</b>: </p><p><b>clinicalStatus</b>: Resolved <span>(Details : {http://terminology.hl7.org/CodeSystem/condition-clinical code 'resolved' = 'Resolved)</span></p><p><b>verificationStatus</b>: Confirmed <span>(Details : {http://terminology.hl7.org/CodeSystem/condition-ver-status code 'confirmed' = 'Confirmed)</span></p><p><b>category</b>: Encounter Diagnosis <span>(Details : {http://terminology.hl7.org/CodeSystem/condition-category code 'encounter-diagnosis' = 'Encounter Diagnosis)</span></p><p><b>severity</b>: Severe <span>(Details : {SNOMED CT code '24484000' = 'Severe', given as 'Severe'})</span></p><p><b>code</b>: Malignant neoplastic disease <span>(Details : {SNOMED CT code '363346000' = 'Malignant tumour', given as 'Malignant neoplastic disease'})</span></p><p><b>bodySite</b>: Entire head and neck <span>(Details : {SNOMED CT code '361355005' = 'Entire head and neck', given as 'Entire head and neck'})</span></p><p><b>subject</b>: <a>Roel</a></p><p><b>onset</b>: 52 years<span> (Details: UCUM code a = 'a')</span></p><p><b>abatement</b>: 54 years<span> (Details: UCUM code a = 'a')</span></p><p><b>recordedDate</b>: 01/12/2012</p><h3>Evidences</h3><table><tr><td>-</td><td><b>Detail</b></td></tr><tr><td>*</td><td><a>Erasmus' diagnostic report of Roel's tumor</a></td></tr></table></div>",
        },
        clinicalStatus: {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/condition-clinical',
              code: 'resolved',
            },
          ],
        },
        verificationStatus: {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/condition-ver-status',
              code: 'confirmed',
            },
          ],
        },
        category: [
          {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/condition-category',
                code: 'encounter-diagnosis',
              },
            ],
          },
        ],
        severity: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '24484000',
              display: 'Severe',
            },
          ],
        },
        code: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '363346000',
              display: 'Malignant neoplastic disease',
            },
          ],
        },
        bodySite: [
          {
            coding: [
              {
                system: 'http://snomed.info/sct',
                code: '361355005',
                display: 'Entire head and neck',
              },
            ],
          },
        ],
        subject: {
          reference: 'Patient/f201',
          display: 'Roel',
        },
        onsetAge: {
          value: 52,
          unit: 'years',
          system: 'http://unitsofmeasure.org',
          code: 'a',
        },
        abatementAge: {
          value: 54,
          unit: 'years',
          system: 'http://unitsofmeasure.org',
          code: 'a',
        },
        recordedDate: '2012-12-01',
        evidence: [
          {
            detail: [
              {
                reference: 'DiagnosticReport/f201',
                display: "Erasmus' diagnostic report of Roel's tumor",
              },
            ],
          },
        ],
      });

      const { isValid, operationOutcome } = item.validate();

      console.log(JSON.stringify(operationOutcome.issue, null, 2));
      expect(isValid).toBe(true);
      expect(operationOutcome.issue).toHaveLength(0);
    });

    it('Real-word condition example (sepsis)', () => {
      const item = new Condition({
        resourceType: 'Condition',
        id: 'f203',
        text: {
          status: 'generated',
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f203</p><p><b>clinicalStatus</b>: Active <span>(Details : {http://terminology.hl7.org/CodeSystem/condition-clinical code 'active' = 'Active)</span></p><p><b>verificationStatus</b>: Confirmed <span>(Details : {http://terminology.hl7.org/CodeSystem/condition-ver-status code 'confirmed' = 'Confirmed)</span></p><p><b>category</b>: Problem <span>(Details : {SNOMED CT code '55607006' = 'Problem', given as 'Problem'}; {http://terminology.hl7.org/CodeSystem/condition-category code 'problem-list-item' = 'Problem List Item)</span></p><p><b>severity</b>: Moderate to severe <span>(Details : {SNOMED CT code '371924009' = 'Moderate to severe', given as 'Moderate to severe'})</span></p><p><b>code</b>: Bacterial sepsis <span>(Details : {SNOMED CT code '10001005' = 'Bacterial septicemia', given as 'Bacterial sepsis'})</span></p><p><b>bodySite</b>: Pulmonary vascular structure <span>(Details : {SNOMED CT code '281158006' = 'Pulmonary vascular structure', given as 'Pulmonary vascular structure'})</span></p><p><b>subject</b>: <a>Roel</a></p><p><b>encounter</b>: <a>Roel's encounter on March elevanth</a></p><p><b>onset</b>: 08/03/2013</p><p><b>recordedDate</b>: 11/03/2013</p><p><b>asserter</b>: <a>Practitioner/f201</a></p><h3>Evidences</h3><table><tr><td>-</td><td><b>Detail</b></td></tr><tr><td>*</td><td><a>Diagnostic report for Roel's sepsis</a></td></tr></table></div>",
        },
        clinicalStatus: {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/condition-clinical',
              code: 'active',
            },
          ],
        },
        verificationStatus: {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/condition-ver-status',
              code: 'confirmed',
            },
          ],
        },
        category: [
          {
            coding: [
              {
                system: 'http://snomed.info/sct',
                code: '55607006',
                display: 'Problem',
              },
              {
                system: 'http://terminology.hl7.org/CodeSystem/condition-category',
                code: 'problem-list-item',
              },
            ],
          },
        ],
        severity: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '371924009',
              display: 'Moderate to severe',
            },
          ],
        },
        code: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '10001005',
              display: 'Bacterial sepsis',
            },
          ],
        },
        bodySite: [
          {
            coding: [
              {
                system: 'http://snomed.info/sct',
                code: '281158006',
                display: 'Pulmonary vascular structure',
              },
            ],
          },
        ],
        subject: {
          reference: 'Patient/f201',
          display: 'Roel',
        },
        encounter: {
          reference: 'Encounter/f203',
          display: "Roel's encounter on March elevanth",
        },
        onsetDateTime: '2013-03-08',
        recordedDate: '2013-03-11',
        asserter: {
          reference: 'Practitioner/f201',
        },
        evidence: [
          {
            detail: [
              {
                reference: 'DiagnosticReport/f202',
                display: "Diagnostic report for Roel's sepsis",
              },
            ],
          },
        ],
      });

      const { isValid, operationOutcome } = item.validate();
      expect(isValid).toBe(true);
      expect(operationOutcome.issue).toHaveLength(0);
    });
  });
});
