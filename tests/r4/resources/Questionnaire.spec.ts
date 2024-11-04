import { Questionnaire } from '../../../src/r4/models/resources/Questionnaire';
import {
  IIdentifier,
  IElement,
  IContactDetail,
  IUsageContext,
  ICodeableConcept,
  IPeriod,
  ICoding,
  IQuestionnaireItem,
  IQuestionnaire,
  IOperationOutcomeIssue,
} from 'fhirtypes/dist/r4';
import { PublicationStatusType } from 'fhirtypes/dist/r4/types';
import { QuestionnaireBuilder, QuestionnaireValidator } from '../../../src/r4';

describe('Questionnaire', () => {
  describe('Questionnaire Model', () => {
    it('should create a Questionnaire with default values', () => {
      const questionnaire = new Questionnaire();
      expect(questionnaire.resourceType).toBe('Questionnaire');
      expect(questionnaire.url).toBeUndefined();
      expect(questionnaire.identifier).toBeUndefined();
      expect(questionnaire.version).toBeUndefined();
      expect(questionnaire.name).toBeUndefined();
      expect(questionnaire.title).toBeUndefined();
      expect(questionnaire.derivedFrom).toBeUndefined();
      expect(questionnaire.status).toBeUndefined();
      expect(questionnaire.experimental).toBeUndefined();
      expect(questionnaire.subjectType).toBeUndefined();
      expect(questionnaire.date).toBeUndefined();
      expect(questionnaire.publisher).toBeUndefined();
      expect(questionnaire.contact).toBeUndefined();
      expect(questionnaire.description).toBeUndefined();
      expect(questionnaire.useContext).toBeUndefined();
      expect(questionnaire.jurisdiction).toBeUndefined();
      expect(questionnaire.purpose).toBeUndefined();
      expect(questionnaire.copyright).toBeUndefined();
      expect(questionnaire.approvalDate).toBeUndefined();
      expect(questionnaire.lastReviewDate).toBeUndefined();
      expect(questionnaire.effectivePeriod).toBeUndefined();
      expect(questionnaire.code).toBeUndefined();
      expect(questionnaire.item).toBeUndefined();
    });

    it('should create a Questionnaire with provided values', () => {
      const identifier: IIdentifier = { system: 'http://example.com', value: '12345' };
      const status = 'draft';
      const url = 'http://example.com/questionnaire';
      const name = 'Sample Questionnaire';
      const title = 'Sample Title';
      const date = '2021-01-01';
      const publisher = 'Publisher Name';
      const contact: IContactDetail[] = [{ name: 'Contact Name' }];
      const description = 'Sample Description';
      const useContext: IUsageContext[] = [{ code: { display: 'display' } }];
      const jurisdiction: ICodeableConcept[] = [{ text: 'Jurisdiction' }];
      const purpose = 'Sample Purpose';
      const copyright = 'Sample Copyright';
      const approvalDate = '2021-01-01';
      const lastReviewDate = '2021-01-01';
      const effectivePeriod: IPeriod = { start: '2021-01-01', end: '2021-12-31' };
      const code: ICoding[] = [{ code: 'code' }];
      const item: IQuestionnaireItem[] = [{ linkId: '1', text: 'Question 1', type: 'string' }];

      const questionnaire = new Questionnaire({
        identifier: [identifier],
        status,
        url,
        name,
        title,
        date,
        publisher,
        contact,
        description,
        useContext,
        jurisdiction,
        purpose,
        copyright,
        approvalDate,
        lastReviewDate,
        effectivePeriod,
        code,
        item,
      });

      expect(questionnaire.identifier).toContain(identifier);
      expect(questionnaire.status).toBe(status);
      expect(questionnaire.url).toBe(url);
      expect(questionnaire.name).toBe(name);
      expect(questionnaire.title).toBe(title);
      expect(questionnaire.date).toBe(date);
      expect(questionnaire.publisher).toBe(publisher);
      expect(questionnaire.contact).toContain(contact[0]);
      expect(questionnaire.description).toBe(description);
      expect(questionnaire.useContext).toContain(useContext[0]);
      expect(questionnaire.jurisdiction).toContain(jurisdiction[0]);
      expect(questionnaire.purpose).toBe(purpose);
      expect(questionnaire.copyright).toBe(copyright);
      expect(questionnaire.approvalDate).toBe(approvalDate);
      expect(questionnaire.lastReviewDate).toBe(lastReviewDate);
      expect(questionnaire.effectivePeriod).toBe(effectivePeriod);
      expect(questionnaire.code).toContain(code[0]);
      expect(questionnaire.item).toContain(item[0]);
    });

    it('should serialize to JSON correctly', () => {
      const status = 'draft';
      const questionnaire = new Questionnaire({ status });
      const json = questionnaire.toJson();
      expect(json.status).toBe(status);
    });

    it('should return a pretty string representation of the model', () => {
      const status = 'draft';
      const questionnaire = new Questionnaire({ status });
      const prettyString = questionnaire.toPrettyString();
      expect(prettyString).toContain(`"status": "${status}"`);
    });

    it('should validate a valid Questionnaire model', () => {
      const validQuestionnaire = new Questionnaire({ status: 'draft' });
      const { isValid, operationOutcome } = validQuestionnaire.validate();
      expect(isValid).toBe(true);
      expect(operationOutcome.issue).toHaveLength(0);
    });

    it('should invalidate a Questionnaire model with invalid data', () => {
      const invalidQuestionnaire = new Questionnaire({ status: '' as PublicationStatusType });
      const { isValid, operationOutcome } = invalidQuestionnaire.validate();
      expect(isValid).toBe(false);
      expect(operationOutcome.issue).not.toHaveLength(0);
    });

    it('should handle empty JSON input', () => {
      const json = '{}';
      const questionnaire = new Questionnaire(JSON.parse(json));
      expect(questionnaire.resourceType).toBe('Questionnaire');
      expect(questionnaire.identifier).toBeUndefined();
      expect(questionnaire.status).toBeUndefined();
      expect(questionnaire.url).toBeUndefined();
      expect(questionnaire.name).toBeUndefined();
      expect(questionnaire.title).toBeUndefined();
      expect(questionnaire.date).toBeUndefined();
      expect(questionnaire.publisher).toBeUndefined();
      expect(questionnaire.contact).toBeUndefined();
      expect(questionnaire.description).toBeUndefined();
      expect(questionnaire.useContext).toBeUndefined();
      expect(questionnaire.jurisdiction).toBeUndefined();
      expect(questionnaire.purpose).toBeUndefined();
      expect(questionnaire.copyright).toBeUndefined();
      expect(questionnaire.approvalDate).toBeUndefined();
      expect(questionnaire.lastReviewDate).toBeUndefined();
      expect(questionnaire.effectivePeriod).toBeUndefined();
      expect(questionnaire.code).toBeUndefined();
      expect(questionnaire.item).toBeUndefined();
    });
  });

  describe('QuestionnaireBuilder', () => {
    let builder: QuestionnaireBuilder;

    beforeEach(() => {
      builder = new QuestionnaireBuilder();
    });

    it('should build a Questionnaire with url', () => {
      const url = 'http://example.com/questionnaire';
      const questionnaire = builder.setUrl(url).build();
      expect(questionnaire.url).toBe(url);
    });

    it('should build a Questionnaire with identifier', () => {
      const identifier: IIdentifier = { system: 'http://example.com', value: '12345' };
      const questionnaire = builder.addIdentifier(identifier).build();
      expect(questionnaire.identifier).toContain(identifier);
    });

    it('should build a Questionnaire with version', () => {
      const version = '1.0.0';
      const questionnaire = builder.setVersion(version).build();
      expect(questionnaire.version).toBe(version);
    });

    it('should build a Questionnaire with name', () => {
      const name = 'Sample Questionnaire';
      const questionnaire = builder.setName(name).build();
      expect(questionnaire.name).toBe(name);
    });

    it('should build a Questionnaire with title', () => {
      const title = 'Sample Title';
      const questionnaire = builder.setTitle(title).build();
      expect(questionnaire.title).toBe(title);
    });

    it('should build a Questionnaire with derivedFrom', () => {
      const derivedFrom = 'http://example.com/derived';
      const questionnaire = builder.addDerivedFrom(derivedFrom).build();
      expect(questionnaire.derivedFrom).toContain(derivedFrom);
    });

    it('should build a Questionnaire with status', () => {
      const status = 'draft';
      const questionnaire = builder.setStatus(status).build();
      expect(questionnaire.status).toBe(status);
    });

    it('should build a Questionnaire with experimental flag', () => {
      const experimental = true;
      const questionnaire = builder.setExperimental(experimental).build();
      expect(questionnaire.experimental).toBe(experimental);
    });

    it('should build a Questionnaire with subjectType', () => {
      const subjectType = 'Patient';
      const questionnaire = builder.addSubjectType(subjectType).build();
      expect(questionnaire.subjectType).toContain(subjectType);
    });

    it('should build a Questionnaire with date', () => {
      const date = '2021-01-01';
      const questionnaire = builder.setDate(date).build();
      expect(questionnaire.date).toBe(date);
    });

    it('should build a Questionnaire with publisher', () => {
      const publisher = 'Publisher Name';
      const questionnaire = builder.setPublisher(publisher).build();
      expect(questionnaire.publisher).toBe(publisher);
    });

    it('should build a Questionnaire with contact', () => {
      const contact: IContactDetail = { name: 'Contact Name' };
      const questionnaire = builder.addContact(contact).build();
      expect(questionnaire.contact).toContain(contact);
    });

    it('should build a Questionnaire with description', () => {
      const description = 'Sample Description';
      const questionnaire = builder.setDescription(description).build();
      expect(questionnaire.description).toBe(description);
    });

    it('should build a Questionnaire with useContext', () => {
      const useContext: IUsageContext = { code: { display: 'Context' } };
      const questionnaire = builder.addUseContext(useContext).build();
      expect(questionnaire.useContext).toContain(useContext);
    });

    it('should build a Questionnaire with jurisdiction', () => {
      const jurisdiction: ICodeableConcept = { text: 'Jurisdiction' };
      const questionnaire = builder.addJurisdiction(jurisdiction).build();
      expect(questionnaire.jurisdiction).toContain(jurisdiction);
    });

    it('should build a Questionnaire with purpose', () => {
      const purpose = 'Sample Purpose';
      const questionnaire = builder.setPurpose(purpose).build();
      expect(questionnaire.purpose).toBe(purpose);
    });

    it('should build a Questionnaire with copyright', () => {
      const copyright = 'Sample Copyright';
      const questionnaire = builder.setCopyright(copyright).build();
      expect(questionnaire.copyright).toBe(copyright);
    });

    it('should build a Questionnaire with approvalDate', () => {
      const approvalDate = '2021-01-01';
      const questionnaire = builder.setApprovalDate(approvalDate).build();
      expect(questionnaire.approvalDate).toBe(approvalDate);
    });

    it('should build a Questionnaire with lastReviewDate', () => {
      const lastReviewDate = '2021-01-01';
      const questionnaire = builder.setLastReviewDate(lastReviewDate).build();
      expect(questionnaire.lastReviewDate).toBe(lastReviewDate);
    });

    it('should build a Questionnaire with effectivePeriod', () => {
      const effectivePeriod: IPeriod = { start: '2021-01-01', end: '2021-12-31' };
      const questionnaire = builder.setEffectivePeriod(effectivePeriod).build();
      expect(questionnaire.effectivePeriod).toBe(effectivePeriod);
    });

    it('should build a Questionnaire with code', () => {
      const code: ICoding = { code: 'code' };
      const questionnaire = builder.addCode(code).build();
      expect(questionnaire.code).toContain(code);
    });

    it('should build a Questionnaire with item', () => {
      const item: IQuestionnaireItem = { linkId: '1', text: 'Question 1', type: 'string' };
      const questionnaire = builder.addItem(item).build();
      expect(questionnaire.item).toContain(item);
    });

    it('should build a Questionnaire from JSON', () => {
      const json = '{"status": "draft"}';
      const questionnaire = builder.fromJSON(json).build();
      expect(questionnaire.status).toBe('draft');
    });

    it('should add a primitive extension to the Questionnaire', () => {
      const extension: IElement = { id: 'test-extension' };
      const questionnaire = builder.addPrimitiveExtension('_status', extension).build();
      expect(questionnaire._status).toBe(extension);
    });

    it('should handle empty JSON input', () => {
      const json = '{}';
      const questionnaire = builder.fromJSON(json).build();
      expect(questionnaire.resourceType).toBe('Questionnaire');
      expect(questionnaire.identifier).toBeUndefined();
      expect(questionnaire.status).toBeUndefined();
      expect(questionnaire.url).toBeUndefined();
      expect(questionnaire.name).toBeUndefined();
      expect(questionnaire.title).toBeUndefined();
      expect(questionnaire.date).toBeUndefined();
      expect(questionnaire.publisher).toBeUndefined();
      expect(questionnaire.contact).toBeUndefined();
      expect(questionnaire.description).toBeUndefined();
      expect(questionnaire.useContext).toBeUndefined();
      expect(questionnaire.jurisdiction).toBeUndefined();
      expect(questionnaire.purpose).toBeUndefined();
      expect(questionnaire.copyright).toBeUndefined();
      expect(questionnaire.approvalDate).toBeUndefined();
      expect(questionnaire.lastReviewDate).toBeUndefined();
      expect(questionnaire.effectivePeriod).toBeUndefined();
      expect(questionnaire.code).toBeUndefined();
      expect(questionnaire.item).toBeUndefined();
    });
  });

  describe('QuestionnaireValidator', () => {
    it('validates a valid Questionnaire model', () => {
      const validQuestionnaire: IQuestionnaire = { resourceType: 'Questionnaire', status: 'draft' };
      const errors: IOperationOutcomeIssue[] = [];
      QuestionnaireValidator(validQuestionnaire, 'Questionnaire', errors);
      expect(errors).toHaveLength(0);
    });

    it('invalidates a Questionnaire model with missing required fields', () => {
      const invalidQuestionnaire = { resourceType: 'Questionnaire' } as IQuestionnaire;
      const errors: IOperationOutcomeIssue[] = [];
      QuestionnaireValidator(invalidQuestionnaire, 'Questionnaire', errors);
      expect(errors).not.toHaveLength(0);
    });

    it('invalidates a Questionnaire model with invalid name format', () => {
      const invalidQuestionnaire: IQuestionnaire = {
        resourceType: 'Questionnaire',
        status: 'draft',
        name: 'invalid name',
      };
      const errors: IOperationOutcomeIssue[] = [];
      QuestionnaireValidator(invalidQuestionnaire, 'Questionnaire', errors);
      expect(errors).not.toHaveLength(0);
      expect(errors[0].diagnostics).toContain('Name should be usable as an identifier');
    });

    it('validates a Questionnaire model with valid name format', () => {
      const validQuestionnaire: IQuestionnaire = { resourceType: 'Questionnaire', status: 'draft', name: 'ValidName' };
      const errors: IOperationOutcomeIssue[] = [];
      QuestionnaireValidator(validQuestionnaire, 'Questionnaire', errors);
      expect(errors).toHaveLength(0);
    });

    it('handles empty Questionnaire model', () => {
      const emptyQuestionnaire: IQuestionnaire = {} as IQuestionnaire;
      const errors: IOperationOutcomeIssue[] = [];
      QuestionnaireValidator(emptyQuestionnaire, 'Questionnaire', errors);
      expect(errors).not.toHaveLength(0);
    });
  });

  describe('Examples from the FHIR Specification', () => {
    it('General questionnaire example', () => {
      const item = new Questionnaire({
        resourceType: 'Questionnaire',
        id: '3141',
        text: {
          status: 'generated',
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <pre>\n            1.Comorbidity?\n              1.1 Cardial Comorbidity\n                1.1.1 Angina?\n                1.1.2 MI?\n              1.2 Vascular Comorbidity?\n              ...\n            Histopathology\n              Abdominal\n                pT category?\n              ...\n          </pre>\n    </div>',
        },
        url: 'http://hl7.org/fhir/Questionnaire/3141',
        title: 'Cancer Quality Forum Questionnaire 2012',
        status: 'draft',
        subjectType: ['Patient'],
        date: '2012-01',
        item: [
          {
            linkId: '1',
            code: [
              {
                system: 'http://example.org/system/code/sections',
                code: 'COMORBIDITY',
              },
            ],
            type: 'group',
            item: [
              {
                linkId: '1.1',
                code: [
                  {
                    system: 'http://example.org/system/code/questions',
                    code: 'COMORB',
                  },
                ],
                prefix: '1',
                type: 'choice',
                answerValueSet: 'http://hl7.org/fhir/ValueSet/yesnodontknow',
                item: [
                  {
                    linkId: '1.1.1',
                    code: [
                      {
                        system: 'http://example.org/system/code/sections',
                        code: 'CARDIAL',
                      },
                    ],
                    type: 'group',
                    enableWhen: [
                      {
                        question: '1.1',
                        operator: '=',
                        answerCoding: {
                          system: 'http://terminology.hl7.org/CodeSystem/v2-0136',
                          code: 'Y',
                        },
                      },
                    ],
                    item: [
                      {
                        linkId: '1.1.1.1',
                        code: [
                          {
                            system: 'http://example.org/system/code/questions',
                            code: 'COMORBCAR',
                          },
                        ],
                        prefix: '1.1',
                        type: 'choice',
                        answerValueSet: 'http://hl7.org/fhir/ValueSet/yesnodontknow',
                        item: [
                          {
                            linkId: '1.1.1.1.1',
                            code: [
                              {
                                system: 'http://example.org/system/code/questions',
                                code: 'COMCAR00',
                                display: 'Angina Pectoris',
                              },
                              {
                                system: 'http://snomed.info/sct',
                                code: '194828000',
                                display: 'Angina (disorder)',
                              },
                            ],
                            prefix: '1.1.1',
                            type: 'choice',
                            answerValueSet: 'http://hl7.org/fhir/ValueSet/yesnodontknow',
                          },
                          {
                            linkId: '1.1.1.1.2',
                            code: [
                              {
                                system: 'http://snomed.info/sct',
                                code: '22298006',
                                display: 'Myocardial infarction (disorder)',
                              },
                            ],
                            prefix: '1.1.2',
                            type: 'choice',
                            answerValueSet: 'http://hl7.org/fhir/ValueSet/yesnodontknow',
                          },
                        ],
                      },
                      {
                        linkId: '1.1.1.2',
                        code: [
                          {
                            system: 'http://example.org/system/code/questions',
                            code: 'COMORBVAS',
                          },
                        ],
                        prefix: '1.2',
                        type: 'choice',
                        answerValueSet: 'http://hl7.org/fhir/ValueSet/yesnodontknow',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            linkId: '2',
            code: [
              {
                system: 'http://example.org/system/code/sections',
                code: 'HISTOPATHOLOGY',
              },
            ],
            type: 'group',
            item: [
              {
                linkId: '2.1',
                code: [
                  {
                    system: 'http://example.org/system/code/sections',
                    code: 'ABDOMINAL',
                  },
                ],
                type: 'group',
                item: [
                  {
                    linkId: '2.1.2',
                    code: [
                      {
                        system: 'http://example.org/system/code/questions',
                        code: 'STADPT',
                        display: 'pT category',
                      },
                    ],
                    type: 'choice',
                  },
                ],
              },
            ],
          },
        ],
      });

      const { isValid, operationOutcome } = item.validate();
      expect(isValid).toBe(true);
      expect(operationOutcome.issue).toHaveLength(0);
    });

    it('Real-world lifelines questionnaire (fictively taken from the patient)', () => {
      const item = new Questionnaire({
        resourceType: 'Questionnaire',
        id: 'f201',
        text: {
          status: 'generated',
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <pre>Lifelines Questionnaire 1 part 1\n  1. Do you have allergies?\n  2. General Questions:\n    2.a) What is your gender?\n    2.b) What is your date of birth?\n    2.c) What is your country of birth?\n    2.d) What is your marital status?\n    3. Intoxications:\n      3.a) Do you smoke?\n      3.b) Do you drink alcohol?</pre>\n    </div>',
        },
        url: 'http://hl7.org/fhir/Questionnaire/f201',
        status: 'active',
        subjectType: ['Patient'],
        date: '2010',
        code: [
          {
            system: 'http://example.org/system/code/lifelines/nl',
            code: 'VL 1-1, 18-65_1.2.2',
            display: 'Lifelines Questionnaire 1 part 1',
          },
        ],
        item: [
          {
            linkId: '1',
            text: 'Do you have allergies?',
            type: 'boolean',
          },
          {
            linkId: '2',
            text: 'General questions',
            type: 'group',
            item: [
              {
                linkId: '2.1',
                text: 'What is your gender?',
                type: 'string',
              },
              {
                linkId: '2.2',
                text: 'What is your date of birth?',
                type: 'date',
              },
              {
                linkId: '2.3',
                text: 'What is your country of birth?',
                type: 'string',
              },
              {
                linkId: '2.4',
                text: 'What is your marital status?',
                type: 'string',
              },
            ],
          },
          {
            linkId: '3',
            text: 'Intoxications',
            type: 'group',
            item: [
              {
                linkId: '3.1',
                text: 'Do you smoke?',
                type: 'boolean',
              },
              {
                linkId: '3.2',
                text: 'Do you drink alchohol?',
                type: 'boolean',
              },
            ],
          },
        ],
      });

      const { isValid, operationOutcome } = item.validate();
      expect(isValid).toBe(true);
      expect(operationOutcome.issue).toHaveLength(0);
    });

    it('Neonate record from New South Wales, Australia "My Personal Health Record" example', () => {
      const item = new Questionnaire({
        resourceType: 'Questionnaire',
        id: 'bb',
        text: {
          status: 'generated',
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <pre>\n        <b>Birth details - To be completed by health professional</b>\n  Name of child: ____________________________________\n            Sex: __\n            \n  Neonatal Information\n    Birth Weight (kg): ___________\n    Birth Length (cm): ___________\n    Vitamin K given  : __\n             1st dose: ___________\n             2nd dose: ___________\n    Hep B given      : __\n      Date given     : ___________\n    Abnormalities noted at birth:\n      _______________________________________________\n      </pre>\n    </div>',
        },
        url: 'http://hl7.org/fhir/Questionnaire/bb',
        title: 'NSW Government My Personal Health Record',
        status: 'draft',
        subjectType: ['Patient'],
        date: '2013-02-19',
        publisher: 'New South Wales Department of Health',
        jurisdiction: [
          {
            coding: [
              {
                system: 'urn:iso:std:iso:3166',
                code: 'AU',
              },
            ],
          },
        ],
        item: [
          {
            linkId: 'birthDetails',
            text: 'Birth details - To be completed by health professional',
            type: 'group',
            item: [
              {
                linkId: 'group',
                type: 'group',
                item: [
                  {
                    linkId: 'nameOfChild',
                    text: 'Name of child',
                    type: 'string',
                  },
                  {
                    linkId: 'sex',
                    text: 'Sex',
                    type: 'choice',
                    answerOption: [
                      {
                        valueCoding: {
                          code: 'F',
                        },
                      },
                      {
                        valueCoding: {
                          code: 'M',
                        },
                      },
                    ],
                  },
                ],
              },
              {
                linkId: 'neonatalInformation',
                text: 'Neonatal Information',
                type: 'group',
                item: [
                  {
                    linkId: 'birthWeight',
                    text: 'Birth weight (kg)',
                    type: 'decimal',
                  },
                  {
                    linkId: 'birthLength',
                    text: 'Birth length (cm)',
                    type: 'decimal',
                  },
                  {
                    linkId: 'vitaminKgiven',
                    text: 'Vitamin K given',
                    type: 'choice',
                    answerOption: [
                      {
                        valueCoding: {
                          code: 'INJECTION',
                        },
                      },
                      {
                        valueCoding: {
                          code: 'INTRAVENOUS',
                        },
                      },
                      {
                        valueCoding: {
                          code: 'ORAL',
                        },
                      },
                    ],
                    item: [
                      {
                        linkId: 'vitaminKgivenDoses',
                        type: 'group',
                        enableWhen: [
                          {
                            question: 'vitaminKgiven',
                            operator: 'exists',
                            answerBoolean: true,
                          },
                        ],
                        item: [
                          {
                            linkId: 'vitaminiKDose1',
                            text: '1st dose',
                            type: 'dateTime',
                          },
                          {
                            linkId: 'vitaminiKDose2',
                            text: '2nd dose',
                            type: 'dateTime',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    linkId: 'hepBgiven',
                    text: 'Hep B given y / n',
                    type: 'boolean',
                    item: [
                      {
                        linkId: 'hepBgivenDate',
                        text: 'Date given',
                        type: 'date',
                      },
                    ],
                  },
                  {
                    linkId: 'abnormalitiesAtBirth',
                    text: 'Abnormalities noted at birth',
                    type: 'string',
                  },
                ],
              },
            ],
          },
        ],
      });

      const { isValid, operationOutcome } = item.validate();
      expect(isValid).toBe(true);
      expect(operationOutcome.issue).toHaveLength(0);
    });

    it('Glasgow Coma Score example form', () => {
      const item = new Questionnaire({
        resourceType: 'Questionnaire',
        id: 'gcs',
        text: {
          status: 'generated',
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: gcs</p><p><b>contained</b>: , , </p><p><b>url</b>: <b>http://hl7.org/fhir/Questionnaire/gcs</b></p><p><b>title</b>: Glasgow Coma Score</p><p><b>status</b>: draft</p><p><b>subjectType</b>: Patient</p><p><b>date</b>: 03/08/2015</p><p><b>publisher</b>: FHIR Project team</p><p><b>code</b>: Glasgow coma score total (Details: LOINC code 9269-2 = 'Glasgow coma score total', stated as 'null')</p><blockquote><p><b>item</b></p><p><b>linkId</b>: 1.1</p><p><b>code</b>: Glasgow coma score verbal (Details: LOINC code 9270-0 = 'Glasgow coma score verbal', stated as 'null')</p><p><b>type</b>: choice</p><p><b>answerValueSet</b>: <a>#verbal</a></p></blockquote><blockquote><p><b>item</b></p><p><b>linkId</b>: 1.2</p><p><b>code</b>: Glasgow coma score motor (Details: LOINC code 9268-4 = 'Glasgow coma score motor', stated as 'null')</p><p><b>type</b>: choice</p><p><b>answerValueSet</b>: <a>#motor</a></p></blockquote><blockquote><p><b>item</b></p><p><b>linkId</b>: 1.3</p><p><b>code</b>: Glasgow coma score eye opening (Details: LOINC code 9267-6 = 'Glasgow coma score eye opening', stated as 'null')</p><p><b>type</b>: choice</p><p><b>answerValueSet</b>: <a>#eye</a></p></blockquote></div>",
        },
        contained: [
          {
            resourceType: 'ValueSet',
            id: 'motor',
            identifier: [
              {
                system: 'http://loinc.org',
                value: 'http://loinc.org/ValueSet/LL357-5',
              },
            ],
            name: 'GCS Motor Value Set',
            status: 'active',
            description: 'LOINC ANSWER LIST    (LL357-5)',
            compose: {
              include: [
                {
                  system: 'http://loinc.org',
                  concept: [
                    {
                      code: 'LA6562-8',
                      display: 'No motor response',
                    },
                    {
                      code: 'LA6563-6',
                      display: 'Extension to pain',
                    },
                    {
                      code: 'LA6564-4',
                      display: 'Flexion to pain',
                    },
                    {
                      code: 'LA6565-1',
                      display: 'Withdrawl from pain',
                    },
                    {
                      code: 'LA6566-9',
                      display: 'Localizing pain',
                    },
                    {
                      code: 'LA6567-7',
                      display: 'Obeys commands',
                    },
                  ],
                },
              ],
            },
          },
          {
            resourceType: 'ValueSet',
            id: 'verbal',
            identifier: [
              {
                system: 'http://loinc.org',
                value: 'http://loinc.org/ValueSet/LL356-7',
              },
            ],
            name: 'GCS Verbal Value Set',
            status: 'active',
            description: 'LOINC ANSWER LIST    (LL356-7)',
            compose: {
              include: [
                {
                  system: 'http://loinc.org',
                  concept: [
                    {
                      code: 'LA6557-8',
                      display: 'No verbal response (>2yrs); no vocal response (<=2yrs)',
                    },
                    {
                      code: 'LA6558-6',
                      display: 'Incomprehensible sounds',
                    },
                    {
                      code: 'LA6559-4',
                      display: 'Inappropriate words',
                    },
                    {
                      code: 'LA6560-2',
                      display: 'Confused',
                    },
                    {
                      code: 'LA6561-0',
                      display: 'Oriented',
                    },
                  ],
                },
              ],
            },
          },
          {
            resourceType: 'ValueSet',
            id: 'eye',
            identifier: [
              {
                system: 'http://loinc.org',
                value: 'http://loinc.org/ValueSet/LL355-9',
              },
            ],
            name: 'GCS Eye Value Set',
            status: 'active',
            description: 'LOINC ANSWER LIST    (LL355-9)',
            compose: {
              include: [
                {
                  system: 'http://loinc.org',
                  concept: [
                    {
                      code: 'LA6553-7',
                      display: 'No eye opening',
                    },
                    {
                      code: 'LA6554-5',
                      display: 'Eye opening to pain',
                    },
                    {
                      code: 'LA6555-2',
                      display: 'Eye opening to verbal command',
                    },
                    {
                      code: 'LA6556-0',
                      display: 'Eyes open spontaneously',
                    },
                  ],
                },
              ],
            },
          },
        ],
        url: 'http://hl7.org/fhir/Questionnaire/gcs',
        title: 'Glasgow Coma Score',
        status: 'draft',
        subjectType: ['Patient'],
        date: '2015-08-03',
        publisher: 'FHIR Project team',
        code: [
          {
            system: 'http://loinc.org',
            code: '9269-2',
          },
        ],
        item: [
          {
            linkId: '1.1',
            code: [
              {
                system: 'http://loinc.org',
                code: '9270-0',
              },
            ],
            type: 'choice',
            answerValueSet: '#verbal',
          },
          {
            linkId: '1.2',
            code: [
              {
                system: 'http://loinc.org',
                code: '9268-4',
              },
            ],
            type: 'choice',
            answerValueSet: '#motor',
          },
          {
            linkId: '1.3',
            code: [
              {
                system: 'http://loinc.org',
                code: '9267-6',
              },
            ],
            type: 'choice',
            answerValueSet: '#eye',
          },
        ],
      });

      const { isValid, operationOutcome } = item.validate();
      expect(isValid).toBe(true);
      expect(operationOutcome.issue).toHaveLength(0);
    });

    it('Example instrument for assessing Zika virus exposure potential', () => {
      const item = new Questionnaire({
        resourceType: 'Questionnaire',
        id: 'zika-virus-exposure-assessment',
        text: {
          status: 'generated',
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <pre>\n      </pre>\n    </div>',
        },
        url: 'http://example.org/Questionnaire/zika-virus-exposure-assessment',
        name: 'ExampleZikaVirusExposureAssessment',
        title: 'Example Zika Virus Exposure Assessment',
        status: 'draft',
        subjectType: ['Patient'],
        date: '2016-11-14',
        description: 'Example questionnaire to assess Zika virus exposure potential.',
        effectivePeriod: {
          start: '2016-11-14',
        },
        item: [
          {
            extension: [
              {
                url: 'http://example.org/additional-information',
                valueAttachment: {
                  url: 'http://www.cdc.gov/zika/geo/index.html',
                  title: 'Areas with active Zika virus transmission/exposure risk',
                },
              },
            ],
            linkId: '1',
            code: [
              {
                system: 'http://example.org/questionnaires',
                code: 'CDE: Resident of or Frequent Traveler to Zika Area',
              },
            ],
            text: 'Are you a resident of, or do you travel frequently to, an area with active Zika transmission?',
            type: 'boolean',
          },
          {
            extension: [
              {
                url: 'http://example.org/additional-information',
                valueAttachment: {
                  url: 'http://www.cdc.gov/zika/geo/index.html',
                  title: 'Areas with active Zika virus transmission/exposure risk',
                },
              },
            ],
            linkId: '2',
            code: [
              {
                system: 'http://example.org/questionnaires',
                code: 'CDE: Recent Travel to Zika Area',
              },
            ],
            text: 'Have you recently traveled to an area with active Zika transmission?',
            type: 'boolean',
            enableWhen: [
              {
                question: '1',
                operator: '=',
                answerBoolean: false,
              },
            ],
          },
          {
            linkId: '3',
            code: [
              {
                system: 'http://example.org/questionnaires',
                code: 'CDE: Time Since Returned From Travel',
              },
            ],
            text: 'How long has it been since you returned?',
            type: 'quantity',
            enableWhen: [
              {
                question: '2',
                operator: '=',
                answerBoolean: true,
              },
            ],
          },
          {
            extension: [
              {
                url: 'http://example.org/additional-information',
                valueAttachment: {
                  url: 'http://www.cdc.gov/zika/geo/index.html',
                  title: 'Areas with active Zika virus transmission/exposure risk',
                },
              },
            ],
            linkId: '4',
            code: [
              {
                system: 'http://example.org/questionnaires',
                code: 'CDE: Recent Sexual Encounter with Traveler to Zika Area',
              },
            ],
            text: 'Have you recently had condomless sex with a partner that has travelled in an area with active Zika transmission?',
            type: 'boolean',
            enableWhen: [
              {
                question: '2',
                operator: '=',
                answerBoolean: false,
              },
            ],
          },
          {
            linkId: '5',
            code: [
              {
                system: 'http://example.org/questionnaires',
                code: 'CDE: Time Since Sexual Encounter',
              },
            ],
            text: 'How long has it been since your last condomless sexual encounter?',
            type: 'quantity',
            enableWhen: [
              {
                question: '4',
                operator: '=',
                answerBoolean: true,
              },
            ],
          },
          {
            extension: [
              {
                url: 'http://example.org/additional-information',
                valueAttachment: {
                  url: 'http://www.cdc.gov/zika/geo/index.html',
                  title: 'Areas with active Zika virus transmission/exposure risk',
                },
              },
            ],
            linkId: '6',
            code: [
              {
                system: 'http://example.org/questionnaires',
                code: 'CDE: Planned Travel to Zika Area',
              },
            ],
            text: 'Do you plan to travel to an area with active Zika transmission?',
            type: 'boolean',
            enableWhen: [
              {
                question: '4',
                operator: '=',
                answerBoolean: false,
              },
            ],
          },
        ],
      });

      const { isValid, operationOutcome } = item.validate();
      expect(isValid).toBe(true);
      expect(operationOutcome.issue).toHaveLength(0);
    });

    it('LOINC US Surgeon General family history including value sets', () => {
      const item = new Questionnaire({
        resourceType: 'Questionnaire',
        id: '54127-6',
        meta: {
          profile: ['http://hl7.org/fhir/us/sdc/StructureDefinition/sdc-questionnaire'],
        },
        text: {
          status: 'generated',
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 54127-6</p><p><b>meta</b>: </p><p><b>contained</b>: , </p><p><b>url</b>: <b>http://hl7.org/fhir/us/sdc/Questionnaire/54127-6</b></p><p><b>identifier</b>: 54127-6</p><p><b>title</b>: US Surgeon General - Family Health Portrait</p><p><b>status</b>: active</p><p><b>experimental</b>: true</p><p><b>subjectType</b>: Patient</p><p><b>date</b>: 01/01/2015</p><p><b>publisher</b>: Regenstrief Institute, Inc and the LOINC Committee</p><p><b>contact</b>: </p><p><b>description</b>: This represents an implementation of the &quot;US Surgeon General family health portrait&quot; form found at https://lforms-demo.nlm.nih.gov</p><p><b>useContext</b>: </p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America)</span></p><p><b>purpose</b>: Captures basic family history information</p><p><b>copyright</b>: (c) 2015 Regenstrief Institute</p><p><b>approvalDate</b>: 31/10/2015</p><p><b>lastReviewDate</b>: 15/03/2017</p><p><b>code</b>: US Surgeon General family health portrait [USSG-FHT] (Details: LOINC code 54127-6 = 'US Surgeon General family health portrait [USSG-FHT]', stated as 'US Surgeon General family health portrait [USSG-FHT]')</p><blockquote><p><b>item</b></p><p><b>linkId</b>: 0</p><p><b>type</b>: group</p><h3>Items</h3><table><tr><td>-</td></tr><tr><td>*</td></tr><tr><td>*</td></tr><tr><td>*</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>item</b></p><p><b>linkId</b>: 1</p><p><b>definition</b>: <a>http://loinc.org/rdf#54126-8</a></p><p><b>text</b>: Your health information</p><p><b>type</b>: group</p><p><b>required</b>: true</p><h3>Items</h3><table><tr><td>-</td></tr><tr><td>*</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>item</b></p><p><b>linkId</b>: 2</p><p><b>definition</b>: <a>http://loinc.org/rdf#54114-4</a></p><p><b>text</b>: Family member health information</p><p><b>type</b>: group</p><p><b>repeats</b>: true</p><h3>Items</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote></div>",
        },
        contained: [
          {
            resourceType: 'ValueSet',
            id: 'length',
            meta: {
              profile: ['http://hl7.org/fhir/us/sdc/StructureDefinition/sdc-valueset'],
            },
            name: 'Length Units',
            status: 'active',
            description: 'Length units',
            immutable: true,
            compose: {
              include: [
                {
                  system: 'http://unitsofmeasure.org',
                  concept: [
                    {
                      code: '[in_i]',
                      display: 'inches',
                    },
                    {
                      code: 'cm',
                      display: 'centimeters',
                    },
                  ],
                },
              ],
            },
          },
          {
            resourceType: 'ValueSet',
            id: 'weight',
            meta: {
              profile: ['http://hl7.org/fhir/us/sdc/StructureDefinition/sdc-valueset'],
            },
            name: 'Weight Units',
            status: 'active',
            description: 'Weight units',
            immutable: true,
            compose: {
              include: [
                {
                  system: 'http://unitsofmeasure.org',
                  concept: [
                    {
                      code: '[lb_i]',
                      display: 'pounds',
                    },
                    {
                      code: 'km',
                      display: 'kilograms',
                    },
                  ],
                },
              ],
            },
          },
        ],
        url: 'http://hl7.org/fhir/us/sdc/Questionnaire/54127-6',
        identifier: [
          {
            system: 'http://example.org/panel-id',
            value: '54127-6',
          },
        ],
        title: 'US Surgeon General - Family Health Portrait',
        status: 'active',
        experimental: true,
        subjectType: ['Patient'],
        date: '2015',
        publisher: 'Regenstrief Institute, Inc and the LOINC Committee',
        contact: [
          {
            telecom: [
              {
                system: 'url',
                value: 'http://loinc.org',
              },
            ],
          },
        ],
        description:
          'This represents an implementation of the "US Surgeon General family health portrait" form found at https://lforms-demo.nlm.nih.gov',
        useContext: [
          {
            code: {
              system: 'http://terminology.hl7.org/CodeSystem/usage-context-type',
              code: 'species',
            },
            valueCodeableConcept: {
              coding: [
                {
                  system: 'http://snomed.info/sct',
                  code: '337915000',
                  display: 'Homo sapiens',
                },
              ],
            },
          },
        ],
        jurisdiction: [
          {
            coding: [
              {
                system: 'urn:iso:std:iso:3166',
                code: 'US',
              },
            ],
          },
        ],
        purpose: 'Captures basic family history information',
        copyright: '(c) 2015 Regenstrief Institute',
        approvalDate: '2015-10-31',
        lastReviewDate: '2017-03-15',
        code: [
          {
            system: 'http://loinc.org',
            code: '54127-6',
            display: 'US Surgeon General family health portrait [USSG-FHT]',
          },
        ],
        item: [
          {
            linkId: '0',
            type: 'group',
            item: [
              {
                linkId: '0.1',
                text: 'Date Done',
                type: 'date',
              },
              {
                linkId: '0.2',
                text: 'Time Done',
                type: 'time',
              },
              {
                linkId: '0.3',
                text: 'Where Done',
                type: 'string',
              },
              {
                linkId: '0.4',
                text: 'Comment',
                type: 'string',
              },
            ],
          },
          {
            linkId: '1',
            definition: 'http://loinc.org/rdf#54126-8',
            text: 'Your health information',
            type: 'group',
            required: true,
            item: [
              {
                linkId: '1.1',
                type: 'group',
                item: [
                  {
                    linkId: '1.1.1',
                    definition: 'http://loinc.org/rdf#54125-0',
                    text: 'Name',
                    type: 'string',
                    maxLength: 200,
                  },
                  {
                    linkId: '1.1.2',
                    definition: 'http://loinc.org/rdf#54131-8',
                    text: 'Gender',
                    type: 'choice',
                    required: true,
                    answerValueSet: 'http://hl7.org/fhir/us/sdc/ValueSet/LL1-9',
                    item: [
                      {
                        linkId: '1.1.2.1.1',
                        text: 'Please specify',
                        type: 'string',
                        required: true,
                      },
                    ],
                  },
                  {
                    linkId: '1.1.3',
                    definition: 'http://loinc.org/rdf#21112-8',
                    text: 'Date of Birth',
                    type: 'date',
                  },
                  {
                    linkId: '1.1.4',
                    definition: 'http://loinc.org/rdf#54132-6',
                    text: 'Were you born a twin?',
                    type: 'choice',
                    answerValueSet: 'http://hl7.org/fhir/us/sdc/ValueSet/LL623-0',
                    initial: [
                      {
                        valueCoding: {
                          system: 'http://loinc.org',
                          code: 'LA32-8',
                          display: 'No',
                        },
                      },
                    ],
                  },
                  {
                    linkId: '1.1.5',
                    definition: 'http://loinc.org/rdf#54128-4',
                    text: 'Were you adopted?',
                    type: 'choice',
                    answerValueSet: 'http://hl7.org/fhir/us/sdc/ValueSet/LL361-7',
                  },
                  {
                    linkId: '1.1.6',
                    definition: 'http://loinc.org/rdf#54135-9',
                    text: 'Are your parents related to each other in any way other than marriage?',
                    type: 'choice',
                    answerValueSet: 'http://hl7.org/fhir/us/sdc/ValueSet/LL361-7',
                  },
                  {
                    linkId: '1.1.7',
                    definition: 'http://loinc.org/rdf#8302-2',
                    text: 'Height',
                    type: 'decimal',
                    required: true,
                    item: [
                      {
                        linkId: '1.1.7.1.1',
                        text: 'Units',
                        type: 'choice',
                        answerValueSet: '#length',
                      },
                    ],
                  },
                  {
                    linkId: '1.1.8',
                    definition: 'http://loinc.org/rdf#29463-7',
                    text: 'Weight',
                    type: 'decimal',
                    item: [
                      {
                        linkId: '1.1.8.1.1',
                        text: 'Units',
                        type: 'choice',
                        answerValueSet: '#weight',
                      },
                    ],
                  },
                  {
                    linkId: '1.1.9',
                    definition: 'http://loinc.org/rdf#39156-5',
                    text: 'Body mass index (BMI) [Ratio]',
                    type: 'decimal',
                    readOnly: true,
                  },
                  {
                    linkId: '1.1.10',
                    definition: 'http://loinc.org/rdf#54134-2',
                    text: 'Race',
                    type: 'choice',
                    required: true,
                    answerValueSet: 'http://hl7.org/fhir/us/sdc/ValueSet/LL629-7',
                  },
                  {
                    linkId: '1.1.11',
                    definition: 'http://loinc.org/rdf#54133-4',
                    text: 'Ethnicity',
                    type: 'choice',
                    repeats: true,
                    answerValueSet: 'http://hl7.org/fhir/us/sdc/ValueSet/LL628-9',
                  },
                ],
              },
              {
                linkId: '1.2',
                definition: 'http://loinc.org/rdf#54137-5',
                text: 'Your diseases history',
                type: 'group',
                repeats: true,
                item: [
                  {
                    linkId: '1.2.1',
                    definition: 'http://loinc.org/rdf#54140-9',
                    text: 'Disease or Condition',
                    type: 'choice',
                    answerValueSet: 'http://hl7.org/fhir/us/sdc/ValueSet/LL626-3',
                  },
                  {
                    linkId: '1.2.2',
                    definition: 'http://loinc.org/rdf#54130-0',
                    text: 'Age at Diagnosis',
                    type: 'choice',
                    answerValueSet: 'http://hl7.org/fhir/us/sdc/ValueSet/LL619-8',
                  },
                ],
              },
            ],
          },
          {
            linkId: '2',
            definition: 'http://loinc.org/rdf#54114-4',
            text: 'Family member health information',
            type: 'group',
            repeats: true,
            item: [
              {
                linkId: '2.1',
                type: 'group',
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-referenceResource',
                        valueCode: 'Patient',
                      },
                    ],
                    linkId: '2.1.1.0',
                    text: 'Family Member identity',
                    type: 'reference',
                  },
                  {
                    linkId: '2.1.1.1',
                    definition: 'http://loinc.org/rdf#54136-7',
                    text: 'Relationship to you',
                    type: 'choice',
                    answerValueSet: 'http://hl7.org/fhir/us/sdc/ValueSet/LL621-4',
                  },
                  {
                    linkId: '2.1.1.2',
                    definition: 'http://loinc.org/rdf#54138-3',
                    text: 'Name',
                    type: 'string',
                  },
                  {
                    linkId: '2.1.1.3',
                    definition: 'http://loinc.org/rdf#54123-5',
                    text: 'Gender',
                    type: 'choice',
                    answerValueSet: 'http://hl7.org/fhir/us/sdc/ValueSet/LL1-9',
                    item: [
                      {
                        linkId: '2.1.1.3.1.1',
                        text: 'Please specify',
                        type: 'string',
                        required: true,
                      },
                    ],
                  },
                  {
                    linkId: '2.1.1.4',
                    definition: 'http://loinc.org/rdf#54139-1',
                    text: 'Living?',
                    type: 'choice',
                    answerValueSet: 'http://hl7.org/fhir/us/sdc/ValueSet/LL361-7',
                    item: [
                      {
                        linkId: '2.1.1.4.1',
                        type: 'group',
                        item: [
                          {
                            linkId: '2.1.1.4.1.1',
                            definition: 'http://loinc.org/rdf#54112-8',
                            text: 'Cause of Death',
                            type: 'choice',
                            answerValueSet: 'http://hl7.org/fhir/us/sdc/ValueSet/LL627-1',
                            item: [
                              {
                                linkId: '2.1.1.4.1.1.1',
                                text: 'Please specify',
                                type: 'string',
                              },
                            ],
                          },
                          {
                            linkId: '2.1.1.4.1.2',
                            definition: 'http://loinc.org/rdf#54113-6',
                            text: 'Age at Death',
                            type: 'choice',
                            answerValueSet: 'http://hl7.org/fhir/us/sdc/ValueSet/LL619-8',
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.4.2',
                        type: 'group',
                        item: [
                          {
                            linkId: '2.1.1.4.2.1',
                            definition: 'http://loinc.org/rdf#54124-3',
                            text: 'Date of Birth',
                            type: 'date',
                          },
                          {
                            linkId: '2.1.1.4.2.2',
                            definition: 'http://loinc.org/rdf#54141-7',
                            text: 'Age',
                            type: 'decimal',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    linkId: '2.1.1.5',
                    definition: 'http://loinc.org/rdf#54121-9',
                    text: 'Was this person born a twin?',
                    type: 'choice',
                    answerValueSet: 'http://hl7.org/fhir/us/sdc/ValueSet/LL623-0',
                  },
                  {
                    linkId: '2.1.1.6',
                    definition: 'http://loinc.org/rdf#54122-7',
                    text: 'Was this person adopted?',
                    type: 'choice',
                    answerValueSet: 'http://hl7.org/fhir/us/sdc/ValueSet/LL623-0',
                  },
                  {
                    linkId: '2.1.1.7',
                    definition: 'http://loinc.org/rdf#54119-3',
                    text: 'Race',
                    type: 'choice',
                    repeats: true,
                    answerValueSet: 'http://hl7.org/fhir/us/sdc/ValueSet/LL629-7',
                  },
                  {
                    linkId: '2.1.1.8',
                    definition: 'http://loinc.org/rdf#54120-1',
                    text: 'Ethnicity',
                    type: 'choice',
                    repeats: true,
                    answerValueSet: 'http://hl7.org/fhir/us/sdc/ValueSet/LL628-9',
                  },
                  {
                    linkId: '2.1.2',
                    definition: 'http://loinc.org/rdf#54117-7',
                    text: "This family member's history of disease",
                    type: 'group',
                    repeats: true,
                    item: [
                      {
                        linkId: '2.1.2.1',
                        definition: 'http://loinc.org/rdf#54116-9',
                        text: 'Disease or Condition',
                        type: 'choice',
                        required: true,
                        answerValueSet: 'http://hl7.org/fhir/us/sdc/ValueSet/LL626-3',
                      },
                      {
                        linkId: '2.1.2.2',
                        definition: 'http://loinc.org/rdf#54115-1',
                        text: 'Age at Diagnosis',
                        type: 'choice',
                        answerValueSet: 'http://hl7.org/fhir/us/sdc/ValueSet/LL619-8',
                      },
                      {
                        linkId: '2.1.2.3',
                        text: 'Mock-up item: Height',
                        type: 'decimal',
                      },
                      {
                        linkId: '2.1.2.4',
                        text: 'Mock-up item: Weight',
                        type: 'decimal',
                      },
                      {
                        linkId: '2.1.2.5',
                        text: 'Mock-up item: BMI',
                        type: 'decimal',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      });

      const { isValid, operationOutcome } = item.validate();
      expect(isValid).toBeTruthy();
      expect(operationOutcome.issue).toHaveLength(0);
    });

    it('Questionnaire used to define the questions involved in the PHQ-9 health questionnaire', () => {
      const item = new Questionnaire({
        resourceType: 'Questionnaire',
        id: 'phq-9-questionnaire',
        meta: {
          profile: ['http://hl7.org/fhir/StructureDefinition/cqf-questionnaire'],
        },
        text: {
          status: 'generated',
          div: '<div xmlns="http://www.w3.org/1999/xhtml">PHQ-9 Questionnaire with dynamic logic</div>',
        },
        extension: [
          {
            url: 'http://hl7.org/fhir/StructureDefinition/cqf-library',
            valueCanonical: 'Library/phq-9-logic',
          },
        ],
        identifier: [
          {
            use: 'official',
            value: 'phq-9',
          },
        ],
        version: '1.0.0',
        title: 'Patient Health Questionnaire (PHQ-9)',
        status: 'draft',
        subjectType: ['Patient'],
        code: [
          {
            system: 'http://loinc.org',
            code: '44249-1',
            display: 'PHQ-9 quick depression assessment panel:-:Pt:^Patient:-:Report.PHQ-9',
          },
        ],
        item: [
          {
            linkId: 'LittleInterest',
            code: [
              {
                system: 'http://loinc.org',
                code: '44250-9',
              },
            ],
            text: 'Little interest or pleasure in doing things',
            type: 'choice',
            required: true,
            answerValueSet: 'http://loinc.org/vs/LL358-3',
          },
          {
            linkId: 'FeelingDown',
            code: [
              {
                system: 'http://loinc.org',
                code: '44255-8',
              },
            ],
            text: 'Feeling down, depressed, or hopeless',
            type: 'choice',
            required: true,
            answerValueSet: 'http://loinc.org/vs/LL358-3',
          },
          {
            linkId: 'TroubleSleeping',
            code: [
              {
                system: 'http://loinc.org',
                code: '44259-0',
              },
            ],
            text: 'Trouble falling or staying asleep',
            type: 'choice',
            required: true,
            answerValueSet: 'http://loinc.org/vs/LL358-3',
          },
          {
            linkId: 'FeelingTired',
            code: [
              {
                system: 'http://loinc.org',
                code: '44254-1',
              },
            ],
            text: 'Feeling tired or having little energy',
            type: 'choice',
            required: true,
            answerValueSet: 'http://loinc.org/vs/LL358-3',
          },
          {
            linkId: 'BadAppetite',
            code: [
              {
                system: 'http://loinc.org',
                code: '44251-7',
              },
            ],
            text: 'Poor appetite or overeating',
            type: 'choice',
            required: true,
            answerValueSet: 'http://loinc.org/vs/LL358-3',
          },
          {
            linkId: 'FeelingBadAboutSelf',
            code: [
              {
                system: 'http://loinc.org',
                code: '44258-2',
              },
            ],
            text: 'Feeling bad about yourself - or that you are a failure or have let yourself or your family down',
            type: 'choice',
            required: true,
            answerValueSet: 'http://loinc.org/vs/LL358-3',
          },
          {
            linkId: 'TroubleConcentrating',
            code: [
              {
                system: 'http://loinc.org',
                code: '44252-5',
              },
            ],
            text: 'Trouble concentrating on things, such as reading the newspaper or watching television',
            type: 'choice',
            required: true,
            answerValueSet: 'http://loinc.org/vs/LL358-3',
          },
          {
            linkId: 'MovingSpeaking',
            code: [
              {
                system: 'http://loinc.org',
                code: '44253-3',
              },
            ],
            text: 'Moving or speaking so slowly that other people could have noticed. Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual',
            type: 'choice',
            required: true,
            answerValueSet: 'http://loinc.org/vs/LL358-3',
          },
          {
            linkId: 'Difficulty',
            code: [
              {
                system: 'http://loinc.org',
                code: '44256-6',
              },
            ],
            text: 'If you checked off any problems, how difficult have these problems made it for you to do your work, take care of things at home, or get along with other people',
            type: 'choice',
            required: true,
            answerValueSet: 'http://loinc.org/vs/LL358-3',
          },
        ],
      });

      const { isValid, operationOutcome } = item.validate();
      expect(isValid).toBeTruthy();
      expect(operationOutcome.issue).toHaveLength(0);
    });
  });
});
