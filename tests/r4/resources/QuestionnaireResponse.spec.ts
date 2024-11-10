import { QuestionnaireResponse, QuestionnaireResponseBuilder, QuestionnaireResponseValidator } from '../../../src/r4';
import { QuestionnaireAnswersStatusType } from 'fhirtypes/dist/r4/types';
import {
  IElement,
  IIdentifier,
  IOperationOutcomeIssue,
  IQuestionnaireResponse,
  IQuestionnaireResponseItem,
  IReference,
} from 'fhirtypes/dist/r4';
import {
  Coding,
  QuestionnaireItem,
  QuestionnaireResponseItem,
  QuestionnaireResponseItemBuilder,
} from '../../../lib/r4';

describe('QuestionnaireResponse', () => {
  describe('QuestionnaireResponse model', () => {
    it('creates a QuestionnaireResponse with default values', () => {
      const response = new QuestionnaireResponse();
      expect(response.resourceType).toBe('QuestionnaireResponse');
      expect(response.identifier).toBeUndefined();
      expect(response.basedOn).toBeUndefined();
      expect(response.partOf).toBeUndefined();
      expect(response.questionnaire).toBeUndefined();
      expect(response.status).toBeUndefined();
      expect(response._status).toBeUndefined();
      expect(response.subject).toBeUndefined();
      expect(response.encounter).toBeUndefined();
      expect(response.authored).toBeUndefined();
      expect(response._authored).toBeUndefined();
      expect(response.author).toBeUndefined();
      expect(response.source).toBeUndefined();
      expect(response.item).toBeUndefined();
    });

    it('creates a QuestionnaireResponse with provided values', () => {
      const identifier: IIdentifier = { system: 'http://example.com', value: '12345' };
      const status: QuestionnaireAnswersStatusType = 'completed';
      const subject: IReference = { reference: 'Patient/1' };
      const response = new QuestionnaireResponse({
        identifier,
        status,
        subject,
      });
      expect(response.identifier).toBe(identifier);
      expect(response.status).toBe(status);
      expect(response.subject).toBe(subject);
    });

    it('serializes to JSON correctly', () => {
      const status: QuestionnaireAnswersStatusType = 'completed';
      const response = new QuestionnaireResponse({ status });
      const json = response.toJson();
      expect(json.status).toBe(status);
    });

    it('returns a pretty string representation of the model', () => {
      const status: QuestionnaireAnswersStatusType = 'completed';
      const response = new QuestionnaireResponse({ status });
      const prettyString = response.toPrettyString();
      expect(prettyString).toContain(`"status": "${status}"`);
    });

    it('returns a string representation of the model', () => {
      const status: QuestionnaireAnswersStatusType = 'completed';
      const response = new QuestionnaireResponse({ status });
      const string = response.toString();
      expect(string).toContain(`"status":"${status}"`);
    });

    it('returns a serialized string representation of the model', () => {
      const status: QuestionnaireAnswersStatusType = 'completed';
      const response = new QuestionnaireResponse({ status });
      const serialized = response.serialize();
      expect(serialized).toContain(`"status":"${status}"`);
    });

    it('validates a valid QuestionnaireResponse model', () => {
      const validResponse = new QuestionnaireResponse({ status: 'completed' });
      const { isValid, operationOutcome } = validResponse.validate();
      expect(isValid).toBe(true);
      expect(operationOutcome.issue).toHaveLength(0);
    });

    it('invalidates a QuestionnaireResponse model with invalid data', () => {
      const invalidResponse = new QuestionnaireResponse({ status: '' as QuestionnaireAnswersStatusType });
      const { isValid, operationOutcome } = invalidResponse.validate();
      expect(isValid).toBe(false);
      expect(operationOutcome.issue).not.toHaveLength(0);
    });

    it('handles empty JSON input', () => {
      const json = '{}';
      const response = new QuestionnaireResponse(JSON.parse(json));
      expect(response.resourceType).toBe('QuestionnaireResponse');
      expect(response.identifier).toBeUndefined();
      expect(response.status).toBeUndefined();
      expect(response.questionnaire).toBeUndefined();
      expect(response.subject).toBeUndefined();
      expect(response.encounter).toBeUndefined();
      expect(response.authored).toBeUndefined();
      expect(response.author).toBeUndefined();
      expect(response.source).toBeUndefined();
      expect(response.item).toBeUndefined();
    });
  });

  describe('QuestionnaireResponseBuilder', () => {
    let builder: QuestionnaireResponseBuilder;
    /*
     "linkId": "enfermera",
      "text": "Enfermera",
      "item": [
        {
          "linkId": "tipo-paciente",
          "text": "Tipo de paciente",
          "answer": [
            {
              "valueCoding": {
                "code": "2",
                "display": "GES - CAEC - Convenios"
              }
            }
          ]
        },
     */

    beforeEach(() => {
      builder = new QuestionnaireResponseBuilder();
    });

    it('builds a QuestionnaireResponse with identifier', () => {
      const identifier: IIdentifier = { system: 'http://example.com', value: '12345' };
      const response = builder.setIdentifier(identifier).build();
      expect(response.identifier).toBe(identifier);
    });

    it('adds basedOn references to QuestionnaireResponse', () => {
      const basedOn: IReference = { reference: 'ServiceRequest/1' };
      const response = builder.addBasedOn(basedOn).build();
      expect(response.basedOn).toContain(basedOn);
    });

    it('adds partOf references to QuestionnaireResponse', () => {
      const partOf: IReference = { reference: 'Procedure/1' };
      const response = builder.addPartOf(partOf).build();
      expect(response.partOf).toContain(partOf);
    });

    it('sets the questionnaire URL', () => {
      const questionnaire = 'http://example.com/questionnaire';
      const response = builder.setQuestionnaire(questionnaire).build();
      expect(response.questionnaire).toBe(questionnaire);
    });

    it('sets the status of the QuestionnaireResponse', () => {
      const status: QuestionnaireAnswersStatusType = 'completed';
      const response = builder.setStatus(status).build();
      expect(response.status).toBe(status);
    });

    it('sets the subject of the QuestionnaireResponse', () => {
      const subject: IReference = { reference: 'Patient/1' };
      const response = builder.setSubject(subject).build();
      expect(response.subject).toBe(subject);
    });

    it('sets the encounter of the QuestionnaireResponse', () => {
      const encounter: IReference = { reference: 'Encounter/1' };
      const response = builder.setEncounter(encounter).build();
      expect(response.encounter).toBe(encounter);
    });

    it('sets the authored date of the QuestionnaireResponse', () => {
      const authored = '2021-01-01';
      const response = builder.setAuthored(authored).build();
      expect(response.authored).toBe(authored);
    });

    it('sets the author of the QuestionnaireResponse', () => {
      const author: IReference = { reference: 'Practitioner/1' };
      const response = builder.setAuthor(author).build();
      expect(response.author).toBe(author);
    });

    it('sets the source of the QuestionnaireResponse', () => {
      const source: IReference = { reference: 'Patient/1' };
      const response = builder.setSource(source).build();
      expect(response.source).toBe(source);
    });

    it('adds items to the QuestionnaireResponse', () => {
      const item: IQuestionnaireResponseItem = { linkId: '1', text: 'Question 1', answer: [{ valueString: 'string' }] };
      const response = builder.addItem(item).build();
      const { isValid, operationOutcome } = response.validate();
      console.log('isValid', isValid);
      expect(response.item).toContain(item);
    });

    it('builds a QuestionnaireResponse from JSON', () => {
      const json = '{"status": "completed"}';
      const response = builder.fromJSON(json).build();
      expect(response.status).toBe('completed');
    });

    it('adds a primitive extension to the QuestionnaireResponse', () => {
      const extension: IElement = { id: 'test-extension' };
      const response = builder.addPrimitiveExtension('_status', extension).build();
      expect(response._status).toEqual(extension);
    });

    it('handles empty JSON input', () => {
      const json = '{}';
      const response = builder.fromJSON(json).build();
      expect(response.resourceType).toBe('QuestionnaireResponse');
      expect(response.identifier).toBeUndefined();
      expect(response.status).toBeUndefined();
      expect(response.questionnaire).toBeUndefined();
      expect(response.subject).toBeUndefined();
      expect(response.encounter).toBeUndefined();
      expect(response.authored).toBeUndefined();
      expect(response.author).toBeUndefined();
      expect(response.source).toBeUndefined();
      expect(response.item).toBeUndefined();
    });
  });

  describe('QuestionnaireResponseValidator', () => {
    it('validates a valid QuestionnaireResponse model', () => {
      const validResponse: IQuestionnaireResponse = { resourceType: 'QuestionnaireResponse', status: 'completed' };
      const errors: IOperationOutcomeIssue[] = [];
      QuestionnaireResponseValidator(validResponse, 'QuestionnaireResponse', errors);
      expect(errors).toHaveLength(0);
    });

    it('invalidates a QuestionnaireResponse model with missing required fields', () => {
      const invalidResponse = { resourceType: 'QuestionnaireResponse' } as IQuestionnaireResponse;
      const errors: IOperationOutcomeIssue[] = [];
      QuestionnaireResponseValidator(invalidResponse, 'QuestionnaireResponse', errors);
      expect(errors).not.toHaveLength(0);
    });

    it('invalidates a QuestionnaireResponse model with invalid status', () => {
      const invalidResponse: IQuestionnaireResponse = {
        resourceType: 'QuestionnaireResponse',
        status: 'invalid-status' as any,
      };
      const errors: IOperationOutcomeIssue[] = [];
      QuestionnaireResponseValidator(invalidResponse, 'QuestionnaireResponse', errors);
      expect(errors).not.toHaveLength(0);
      expect(errors[0].diagnostics).toContain(
        'Code must be one of [in-progress, completed, amended, entered-in-error, stopped]',
      );
    });

    it('validates a QuestionnaireResponse model with all fields', () => {
      const validResponse: IQuestionnaireResponse = {
        resourceType: 'QuestionnaireResponse',
        status: 'completed',
        identifier: { system: 'http://example.com', value: '12345' },
        basedOn: [{ reference: 'ServiceRequest/1' }],
        partOf: [{ reference: 'Procedure/1' }],
        questionnaire: 'http://example.com/questionnaire',
        subject: { reference: 'Patient/1' },
        encounter: { reference: 'Encounter/1' },
        authored: '2021-01-01',
        author: { reference: 'Practitioner/1' },
        source: { reference: 'Patient/1' },
        item: [{ linkId: '1', text: 'Question 1', answer: [{ valueBoolean: true }] }],
      };
      const errors: IOperationOutcomeIssue[] = [];
      QuestionnaireResponseValidator(validResponse, 'QuestionnaireResponse', errors);
      expect(errors).toHaveLength(0);
    });

    it('handles empty QuestionnaireResponse model', () => {
      const emptyResponse: IQuestionnaireResponse = {} as IQuestionnaireResponse;
      const errors: IOperationOutcomeIssue[] = [];
      QuestionnaireResponseValidator(emptyResponse, 'QuestionnaireResponse', errors);
      expect(errors).not.toHaveLength(0);
    });
  });

  describe('Examples from the FHIR Specification', () => {
    test('General questionnaire response example', () => {
      const iten = new QuestionnaireResponse({
        resourceType: 'QuestionnaireResponse',
        id: '3141',
        text: {
          status: 'generated',
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <pre>\n            Comorbidity? YES\n              Cardial Comorbidity? YES\n                Angina? YES\n                MI? NO\n              Vascular Comorbidity?\n                (no answers)\n              ...\n            Histopathology\n              Abdominal\n                pT category: 1a\n              ...\n          </pre>\n    </div>',
        },
        contained: [
          {
            resourceType: 'Patient',
            id: 'patsub',
            identifier: [
              {
                system: 'http://cancer.questionnaire.org/systems/id/patientnr',
                value: 'A34442332',
              },
              {
                type: {
                  text: 'Dutch BSN',
                },
                system: 'urn:oid:2.16.840.1.113883.2.4.6.3',
                value: '188912345',
              },
            ],
            gender: 'male',
            birthDate: '1972-11-30',
          },
          {
            resourceType: 'ServiceRequest',
            id: 'order',
            status: 'unknown',
            intent: 'order',
            subject: {
              reference: '#patsub',
            },
            requester: {
              reference: 'Practitioner/example',
            },
          },
          {
            resourceType: 'Practitioner',
            id: 'questauth',
            identifier: [
              {
                type: {
                  text: 'AUMC, Den Helder',
                },
                system: 'http://cancer.questionnaire.org/systems/id/org',
                value: 'AUMC',
              },
            ],
          },
        ],
        identifier: {
          system: 'http://example.org/fhir/NamingSystem/questionnaire-ids',
          value: 'Q12349876',
        },
        basedOn: [
          {
            reference: '#order',
          },
        ],
        partOf: [
          {
            reference: 'Procedure/f201',
          },
        ],
        status: 'completed',
        subject: {
          reference: '#patsub',
        },
        encounter: {
          reference: 'Encounter/example',
        },
        authored: '2013-02-19T14:15:00-05:00',
        author: {
          reference: '#questauth',
        },
        item: [
          {
            linkId: '1',
            item: [
              {
                linkId: '1.1',
                answer: [
                  {
                    valueCoding: {
                      system: 'http://cancer.questionnaire.org/system/code/yesno',
                      code: '1',
                      display: 'Yes',
                    },
                    item: [
                      {
                        linkId: '1.1.1',
                        item: [
                          {
                            linkId: '1.1.1.1',
                            answer: [
                              {
                                valueCoding: {
                                  system: 'http://cancer.questionnaire.org/system/code/yesno',
                                  code: '1',
                                },
                              },
                            ],
                          },
                          {
                            linkId: '1.1.1.2',
                            answer: [
                              {
                                valueCoding: {
                                  system: 'http://cancer.questionnaire.org/system/code/yesno',
                                  code: '1',
                                },
                              },
                            ],
                          },
                          {
                            linkId: '1.1.1.3',
                            answer: [
                              {
                                valueCoding: {
                                  system: 'http://cancer.questionnaire.org/system/code/yesno',
                                  code: '0',
                                },
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      });

      const { isValid, operationOutcome } = iten.validate();
      expect(isValid).toBe(true);
      expect(operationOutcome.issue).toHaveLength(0);
    });

    test('Real-world lifelines questionnaire response (fictively taken from the patient)', () => {
      const item = new QuestionnaireResponse({
        resourceType: 'QuestionnaireResponse',
        id: 'f201',
        text: {
          status: 'generated',
          div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f201</p><p><b>status</b>: completed</p><p><b>subject</b>: <a>Roel</a></p><p><b>authored</b>: 18/06/2013 12:00:00 AM</p><p><b>author</b>: <a>Practitioner/f201</a></p><p><b>source</b>: <a>Practitioner/f201</a></p><blockquote><p><b>item</b></p><p><b>linkId</b>: 1</p><h3>Items</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>item</b></p><p><b>linkId</b>: 2</p><p><b>text</b>: General questions</p><h3>Items</h3><table><tr><td>-</td></tr><tr><td>*</td></tr><tr><td>*</td></tr><tr><td>*</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>item</b></p><p><b>linkId</b>: 3</p><p><b>text</b>: Intoxications</p><h3>Items</h3><table><tr><td>-</td></tr><tr><td>*</td></tr><tr><td>*</td></tr></table></blockquote></div>',
        },
        status: 'completed',
        subject: {
          reference: 'Patient/f201',
          display: 'Roel',
        },
        authored: '2013-06-18T00:00:00+01:00',
        author: {
          reference: 'Practitioner/f201',
        },
        source: {
          reference: 'Practitioner/f201',
        },
        item: [
          {
            linkId: '1',
            item: [
              {
                linkId: '1.1',
                text: 'Do you have allergies?',
                answer: [
                  {
                    valueString: 'I am allergic to house dust',
                  },
                ],
              },
            ],
          },
          {
            linkId: '2',
            text: 'General questions',
            item: [
              {
                linkId: '2.1',
                text: 'What is your gender?',
                answer: [
                  {
                    valueString: 'Male',
                  },
                ],
              },
              {
                linkId: '2.2',
                text: 'What is your date of birth?',
                answer: [
                  {
                    valueDate: '1960-03-13',
                  },
                ],
              },
              {
                linkId: '2.3',
                text: 'What is your country of birth?',
                answer: [
                  {
                    valueString: 'The Netherlands',
                  },
                ],
              },
              {
                linkId: '2.4',
                text: 'What is your marital status?',
                answer: [
                  {
                    valueString: 'married',
                  },
                ],
              },
            ],
          },
          {
            linkId: '3',
            text: 'Intoxications',
            item: [
              {
                linkId: '3.1',
                text: 'Do you smoke?',
                answer: [
                  {
                    valueString: 'No',
                  },
                ],
              },
              {
                linkId: '3.2',
                text: 'Do you drink alchohol?',
                answer: [
                  {
                    valueString: 'No, but I used to drink',
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

    test('Real-world NSW My Personal Health Record example', () => {
      const item = new QuestionnaireResponse({
        resourceType: 'QuestionnaireResponse',
        id: 'bb',
        text: {
          status: 'generated',
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <pre>\n        Cathy Jones, female. Birth weight 3.25 kg at 44.3 cm. \n        Injection of Vitamin K given on 1972-11-30 (first dose) and 1972-12-11 (second dose)\n        Note: Was able to speak Chinese at birth.\n      </pre>\n    </div>',
        },
        status: 'completed',
        subject: {
          reference: 'http://hl7.org/fhir/Patient/1',
          type: 'Patient',
        },
        authored: '2013-02-19T14:15:00+10:00',
        author: {
          reference: 'http://hl7.org/fhir/Practitioner/example',
          type: 'Practitioner',
        },
        item: [
          {
            linkId: 'birthDetails',
            text: 'Birth details - To be completed by health professional',
            item: [
              {
                linkId: 'group',
                item: [
                  {
                    linkId: 'nameOfChild',
                    text: 'Name of child',
                    answer: [
                      {
                        valueString: 'Cathy Jones',
                      },
                    ],
                  },
                  {
                    linkId: 'sex',
                    text: 'Sex',
                    answer: [
                      {
                        valueCoding: {
                          code: 'f',
                        },
                      },
                    ],
                  },
                ],
              },
              {
                linkId: 'neonatalInformation',
                text: 'Neonatal Information',
                item: [
                  {
                    linkId: 'birthWeight',
                    text: 'Birth weight (kg)',
                    answer: [
                      {
                        valueDecimal: 3.25,
                      },
                    ],
                  },
                  {
                    linkId: 'birthLength',
                    text: 'Birth length (cm)',
                    answer: [
                      {
                        valueDecimal: 44.3,
                      },
                    ],
                  },
                  {
                    linkId: 'vitaminKgiven',
                    text: 'Vitamin K given',
                    answer: [
                      {
                        valueCoding: {
                          code: 'INJECTION',
                        },
                        item: [
                          {
                            linkId: 'vitaminKgivenDoses',
                            item: [
                              {
                                linkId: 'vitaminKDose1',
                                text: '1st dose',
                                answer: [
                                  {
                                    valueDate: '1972-11-30',
                                  },
                                ],
                              },
                              {
                                linkId: 'vitaminKDose2',
                                text: '2nd dose',
                                answer: [
                                  {
                                    valueDate: '1972-12-11',
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    linkId: 'hepBgiven',
                    text: 'Hep B given y / n',
                    answer: [
                      {
                        valueBoolean: true,
                        item: [
                          {
                            linkId: 'hepBgivenDate',
                            text: 'Date given',
                            answer: [
                              {
                                valueDate: '1972-12-04',
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    linkId: 'abnormalitiesAtBirth',
                    text: 'Abnormalities noted at birth',
                    answer: [
                      {
                        valueString: 'Already able to speak Chinese',
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
      expect(isValid).toBe(true);
      expect(operationOutcome.issue).toHaveLength(0);
    });

    test('Glasgow Coma Score example answers', () => {
      const item = new QuestionnaireResponse({
        resourceType: 'QuestionnaireResponse',
        id: 'gcs',
        text: {
          status: 'generated',
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: gcs</p><p><b>questionnaire</b>: <a>Questionnaire/gcs</a></p><p><b>status</b>: completed</p><p><b>subject</b>: <a>Peter James Chalmers</a></p><p><b>authored</b>: 11/12/2014 4:44:16 AM</p><p><b>source</b>: <a>Practitioner/f007</a></p><blockquote><p><b>item</b></p><p><b>linkId</b>: 1.1</p><h3>Answers</h3><table><tr><td>-</td><td><b>Value[x]</b></td></tr><tr><td>*</td><td>Confused (Details: LOINC code LA6560-2 = 'Confused', stated as 'Confused')</td></tr></table></blockquote><blockquote><p><b>item</b></p><p><b>linkId</b>: 1.2</p><h3>Answers</h3><table><tr><td>-</td><td><b>Value[x]</b></td></tr><tr><td>*</td><td>Localizing pain (Details: LOINC code LA6566-9 = 'Localizing pain', stated as 'Localizing pain')</td></tr></table></blockquote><blockquote><p><b>item</b></p><p><b>linkId</b>: 1.3</p><h3>Answers</h3><table><tr><td>-</td><td><b>Value[x]</b></td></tr><tr><td>*</td><td>Eyes open spontaneously (Details: LOINC code LA6556-0 = 'Eyes open spontaneously', stated as 'Eyes open spontaneously')</td></tr></table></blockquote></div>",
        },
        questionnaire: 'Questionnaire/gcs',
        status: 'completed',
        subject: {
          reference: 'Patient/example',
          display: 'Peter James Chalmers',
        },
        authored: '2014-12-11T04:44:16Z',
        source: {
          reference: 'Practitioner/f007',
        },
        item: [
          {
            linkId: '1.1',
            answer: [
              {
                valueCoding: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/ordinalValue',
                      valueDecimal: 4,
                    },
                  ],
                  system: 'http://loinc.org',
                  code: 'LA6560-2',
                  display: 'Confused',
                },
              },
            ],
          },
          {
            linkId: '1.2',
            answer: [
              {
                valueCoding: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/ordinalValue',
                      valueDecimal: 5,
                    },
                  ],
                  system: 'http://loinc.org',
                  code: 'LA6566-9',
                  display: 'Localizing pain',
                },
              },
            ],
          },
          {
            linkId: '1.3',
            answer: [
              {
                valueCoding: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/ordinalValue',
                      valueDecimal: 4,
                    },
                  ],
                  system: 'http://loinc.org',
                  code: 'LA6556-0',
                  display: 'Eyes open spontaneously',
                },
              },
            ],
          },
        ],
      });

      const { isValid, operationOutcome } = item.validate();
      expect(isValid).toBe(true);
      expect(operationOutcome.issue).toHaveLength(0);
    });

    test('Example response to the SDC-LOINC USSG Family History questionnaire', () => {
      const item = new QuestionnaireResponse({
        resourceType: 'QuestionnaireResponse',
        id: 'ussg-fht-answers',
        text: {
          status: 'generated',
          div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: ussg-fht-answers</p><p><b>questionnaire</b>: <a>Questionnaire/ussg-fht</a></p><p><b>status</b>: in-progress</p><p><b>subject</b>: <a>http://hl7.org/fhir/Patient/proband</a></p><p><b>authored</b>: 17/01/2008</p><blockquote><p><b>item</b></p><p><b>linkId</b>: 0</p><h3>Items</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>item</b></p><p><b>linkId</b>: 1</p><p><b>definition</b>: <a>http://loinc.org/fhir/DataElement/54126-8</a></p><p><b>text</b>: Your health information</p><h3>Items</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>item</b></p><p><b>linkId</b>: 2</p><p><b>definition</b>: <a>http://loinc.org/fhir/DataElement/54114-4</a></p><p><b>text</b>: Family member health information</p><h3>Items</h3><table><tr><td>-</td></tr><tr><td>*</td></tr><tr><td>*</td></tr><tr><td>*</td></tr><tr><td>*</td></tr><tr><td>*</td></tr><tr><td>*</td></tr><tr><td>*</td></tr><tr><td>*</td></tr><tr><td>*</td></tr><tr><td>*</td></tr><tr><td>*</td></tr><tr><td>*</td></tr><tr><td>*</td></tr><tr><td>*</td></tr><tr><td>*</td></tr><tr><td>*</td></tr><tr><td>*</td></tr></table></blockquote></div>',
        },
        questionnaire: 'Questionnaire/ussg-fht',
        status: 'in-progress',
        subject: {
          reference: 'http://hl7.org/fhir/Patient/proband',
          type: 'Patient',
        },
        authored: '2008-01-17',
        item: [
          {
            linkId: '0',
            item: [
              {
                linkId: '0.1',
                text: 'Date Done',
                answer: [
                  {
                    valueDate: '2008-01-17',
                  },
                ],
              },
            ],
          },
          {
            linkId: '1',
            definition: 'http://loinc.org/fhir/DataElement/54126-8',
            text: 'Your health information',
            item: [
              {
                linkId: '1.1',
                item: [
                  {
                    linkId: '1.1.1',
                    definition: 'http://loinc.org/fhir/DataElement/54125-0',
                    text: 'Name',
                    answer: [
                      {
                        valueString: 'Annie Proband',
                      },
                    ],
                  },
                  {
                    linkId: '1.1.2',
                    definition: 'http://loinc.org/fhir/DataElement/54131-8',
                    text: 'Gender',
                    answer: [
                      {
                        valueCoding: {
                          system: 'http://loinc.org',
                          code: 'LA3-6',
                          display: 'Female',
                        },
                      },
                    ],
                  },
                  {
                    linkId: '1.1.3',
                    definition: 'http://loinc.org/fhir/DataElement/21112-8',
                    text: 'Date of Birth',
                    answer: [
                      {
                        valueDate: '1966-04-04',
                      },
                    ],
                  },
                  {
                    linkId: '1.1.4',
                    definition: 'http://loinc.org/fhir/DataElement/54132-6',
                    text: 'Were you born a twin?',
                    answer: [
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
                    definition: 'http://loinc.org/fhir/DataElement/54128-4',
                    text: 'Were you adopted?',
                    answer: [
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
                    linkId: '1.1.6',
                    definition: 'http://loinc.org/fhir/DataElement/54135-9',
                    text: 'Are your parents related to each other in any way other than marriage?',
                    answer: [
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
                    linkId: '1.1.7',
                    definition: 'http://loinc.org/fhir/DataElement/8302-2',
                    text: 'Height',
                    answer: [
                      {
                        valueDecimal: 63,
                        item: [
                          {
                            linkId: '1.1.7.1',
                            item: [
                              {
                                linkId: '1.1.7.1.1',
                                text: 'Units',
                                answer: [
                                  {
                                    valueCoding: {
                                      system: 'http://unitsofmeasure.org',
                                      code: '[in_i]',
                                      display: 'inches',
                                    },
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    linkId: '1.1.8',
                    definition: 'http://loinc.org/fhir/DataElement/29463-7',
                    text: 'Weight',
                    answer: [
                      {
                        valueDecimal: 127,
                        item: [
                          {
                            linkId: '1.1.8.1',
                            item: [
                              {
                                linkId: '1.1.8.1.1',
                                text: 'Units',
                                answer: [
                                  {
                                    valueCoding: {
                                      system: 'http://unitsofmeasure.org',
                                      code: '[lb_av]',
                                      display: 'pounds',
                                    },
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    linkId: '1.1.9',
                    definition: 'http://loinc.org/fhir/DataElement/39156-5',
                    text: 'Body mass index (BMI) [Ratio]',
                    answer: [
                      {
                        valueDecimal: 22.5,
                      },
                    ],
                  },
                  {
                    linkId: '1.1.10',
                    definition: 'http://loinc.org/fhir/DataElement/54134-2',
                    text: 'Race',
                    answer: [
                      {
                        valueCoding: {
                          system: 'http://loinc.org',
                          code: 'LA4457-3',
                          display: 'White',
                        },
                      },
                    ],
                  },
                  {
                    linkId: '1.1.11',
                    definition: 'http://loinc.org/fhir/DataElement/54133-4',
                    text: 'Ethnicity',
                    answer: [
                      {
                        valueCoding: {
                          system: 'http://loinc.org',
                          code: 'LA10602-3',
                          display: '-- Mexican',
                        },
                      },
                      {
                        valueCoding: {
                          system: 'http://loinc.org',
                          code: 'LA10606-4',
                          display: '-- South American',
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            linkId: '2',
            definition: 'http://loinc.org/fhir/DataElement/54114-4',
            text: 'Family member health information',
            item: [
              {
                linkId: '2.1',
                item: [
                  {
                    linkId: '2.1.1.1',
                    definition: 'http://loinc.org/fhir/DataElement/54136-7',
                    text: 'Relationship to you',
                    answer: [
                      {
                        valueCoding: {
                          system: 'http://loinc.org',
                          code: 'LA10405-1',
                          display: 'Daughter',
                        },
                      },
                    ],
                  },
                  {
                    linkId: '2.1.1.2',
                    definition: 'http://loinc.org/fhir/DataElement/54138-3',
                    text: 'Name',
                    answer: [
                      {
                        valueString: 'Susan',
                      },
                    ],
                  },
                  {
                    linkId: '2.1.1.3',
                    definition: 'http://loinc.org/fhir/DataElement/54123-5',
                    text: 'Gender',
                    answer: [
                      {
                        valueCoding: {
                          system: 'http://loinc.org',
                          code: 'LA3-6',
                          display: 'Female',
                        },
                      },
                    ],
                  },
                  {
                    linkId: '2.1.1.4',
                    definition: 'http://loinc.org/fhir/DataElement/54139-1',
                    text: 'Living?',
                    answer: [
                      {
                        valueCoding: {
                          system: 'http://loinc.org',
                          code: 'LA33-6',
                          display: 'Yes',
                        },
                        item: [
                          {
                            linkId: '2.1.1.4.2',
                            item: [
                              {
                                linkId: '2.1.1.4.2.2',
                                definition: 'http://loinc.org/fhir/DataElement/54141-7',
                                text: 'Age',
                                answer: [
                                  {
                                    valueDecimal: 17,
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    linkId: '2.1.1.5',
                    definition: 'http://loinc.org/fhir/DataElement/54121-9',
                    text: 'Was this person born a twin?',
                    answer: [
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
                    linkId: '2.1.1.6',
                    definition: 'http://loinc.org/fhir/DataElement/54122-7',
                    text: 'Was this person adopted?',
                    answer: [
                      {
                        valueCoding: {
                          system: 'http://loinc.org',
                          code: 'LA32-8',
                          display: 'No',
                        },
                      },
                    ],
                  },
                ],
              },
              {
                linkId: '2.1',
                item: [
                  {
                    linkId: '2.1.1',
                    item: [
                      {
                        linkId: '2.1.1.1',
                        definition: 'http://loinc.org/fhir/DataElement/54136-7',
                        text: 'Relationship to you',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA10415-0',
                              display: 'Brother',
                            },
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.2',
                        definition: 'http://loinc.org/fhir/DataElement/54138-3',
                        text: 'Name',
                        answer: [
                          {
                            valueString: 'Brian',
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.3',
                        definition: 'http://loinc.org/fhir/DataElement/54123-5',
                        text: 'Gender',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA2-8',
                              display: 'Male',
                            },
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.4',
                        definition: 'http://loinc.org/fhir/DataElement/54139-1',
                        text: 'Living?',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA33-6',
                              display: 'Yes',
                            },
                            item: [
                              {
                                linkId: '2.1.1.4.2',
                                item: [
                                  {
                                    linkId: '2.1.1.4.2.2',
                                    definition: 'http://loinc.org/fhir/DataElement/54141-7',
                                    text: 'Age',
                                    answer: [
                                      {
                                        valueDecimal: 32,
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.5',
                        definition: 'http://loinc.org/fhir/DataElement/54121-9',
                        text: 'Was this person born a twin?',
                        answer: [
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
                        linkId: '2.1.1.6',
                        definition: 'http://loinc.org/fhir/DataElement/54122-7',
                        text: 'Was this person adopted?',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA32-8',
                              display: 'No',
                            },
                          },
                        ],
                      },
                    ],
                  },
                  {
                    linkId: '2.1.2',
                    text: "This family member's history of disease",
                    item: [
                      {
                        linkId: '2.1.2.1',
                        text: 'Disease or Condition',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA10550-4',
                              display: '-- Other Cancer',
                            },
                          },
                        ],
                      },
                      {
                        linkId: '2.1.2.2',
                        text: 'Age at Diagnosis',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA10397-0',
                              display: '30-39',
                            },
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                linkId: '2.1',
                item: [
                  {
                    linkId: '2.1.1',
                    item: [
                      {
                        linkId: '2.1.1.1',
                        definition: 'http://loinc.org/fhir/DataElement/54136-7',
                        text: 'Relationship to you',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA10418-4',
                              display: 'Sister',
                            },
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.2',
                        definition: 'http://loinc.org/fhir/DataElement/54138-3',
                        text: 'Name',
                        answer: [
                          {
                            valueString: 'Janet',
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.3',
                        definition: 'http://loinc.org/fhir/DataElement/54123-5',
                        text: 'Gender',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA3-6',
                              display: 'Female',
                            },
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.4',
                        definition: 'http://loinc.org/fhir/DataElement/54139-1',
                        text: 'Living?',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA33-6',
                              display: 'Yes',
                            },
                            item: [
                              {
                                linkId: '2.1.1.4.2',
                                item: [
                                  {
                                    linkId: '2.1.1.4.2.2',
                                    definition: 'http://loinc.org/fhir/DataElement/54141-7',
                                    text: 'Age',
                                    answer: [
                                      {
                                        valueDecimal: 36,
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.5',
                        definition: 'http://loinc.org/fhir/DataElement/54121-9',
                        text: 'Was this person born a twin?',
                        answer: [
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
                        linkId: '2.1.1.6',
                        definition: 'http://loinc.org/fhir/DataElement/54122-7',
                        text: 'Was this person adopted?',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA32-8',
                              display: 'No',
                            },
                          },
                        ],
                      },
                    ],
                  },
                  {
                    linkId: '2.1.2',
                    text: "This family member's history of disease",
                    item: [
                      {
                        linkId: '2.1.2.1',
                        text: 'Disease or Condition',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA10536-3',
                              display: '-- Breast Cancer',
                            },
                          },
                        ],
                      },
                      {
                        linkId: '2.1.2.2',
                        text: 'Age at Diagnosis',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA10397-0',
                              display: '30-39',
                            },
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                linkId: '2.1',
                item: [
                  {
                    linkId: '2.1.1',
                    item: [
                      {
                        linkId: '2.1.1.1',
                        definition: 'http://loinc.org/fhir/DataElement/54136-7',
                        text: 'Relationship to you',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA10419-2',
                              display: 'Nephew',
                            },
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.2',
                        definition: 'http://loinc.org/fhir/DataElement/54138-3',
                        text: 'Name',
                        answer: [
                          {
                            valueString: 'Ian',
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.3',
                        definition: 'http://loinc.org/fhir/DataElement/54123-5',
                        text: 'Gender',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA2-8',
                              display: 'Male',
                            },
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.4',
                        definition: 'http://loinc.org/fhir/DataElement/54139-1',
                        text: 'Living?',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA33-6',
                              display: 'Yes',
                            },
                            item: [
                              {
                                linkId: '2.1.1.4.2',
                                item: [
                                  {
                                    linkId: '2.1.1.4.2.2',
                                    definition: 'http://loinc.org/fhir/DataElement/54141-7',
                                    text: 'Age',
                                    answer: [
                                      {
                                        valueDecimal: 16,
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.5',
                        definition: 'http://loinc.org/fhir/DataElement/54121-9',
                        text: 'Was this person born a twin?',
                        answer: [
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
                        linkId: '2.1.1.6',
                        definition: 'http://loinc.org/fhir/DataElement/54122-7',
                        text: 'Was this person adopted?',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA32-8',
                              display: 'No',
                            },
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                linkId: '2.1',
                item: [
                  {
                    linkId: '2.1.1',
                    item: [
                      {
                        linkId: '2.1.1.1',
                        definition: 'http://loinc.org/fhir/DataElement/54136-7',
                        text: 'Relationship to you',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA10420-0',
                              display: 'Niece',
                            },
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.2',
                        definition: 'http://loinc.org/fhir/DataElement/54138-3',
                        text: 'Name',
                        answer: [
                          {
                            valueString: 'Helen',
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.3',
                        definition: 'http://loinc.org/fhir/DataElement/54123-5',
                        text: 'Gender',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA3-6',
                              display: 'Female',
                            },
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.4',
                        definition: 'http://loinc.org/fhir/DataElement/54139-1',
                        text: 'Living?',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA33-6',
                              display: 'Yes',
                            },
                            item: [
                              {
                                linkId: '2.1.1.4.2',
                                item: [
                                  {
                                    linkId: '2.1.1.4.2.2',
                                    definition: 'http://loinc.org/fhir/DataElement/54141-7',
                                    text: 'Age',
                                    answer: [
                                      {
                                        valueDecimal: 15,
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.5',
                        definition: 'http://loinc.org/fhir/DataElement/54121-9',
                        text: 'Was this person born a twin?',
                        answer: [
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
                        linkId: '2.1.1.6',
                        definition: 'http://loinc.org/fhir/DataElement/54122-7',
                        text: 'Was this person adopted?',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA32-8',
                              display: 'No',
                            },
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                linkId: '2.1',
                item: [
                  {
                    linkId: '2.1.1',
                    item: [
                      {
                        linkId: '2.1.1.1',
                        definition: 'http://loinc.org/fhir/DataElement/54136-7',
                        text: 'Relationship to you',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA10416-8',
                              display: 'Father',
                            },
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.2',
                        definition: 'http://loinc.org/fhir/DataElement/54138-3',
                        text: 'Name',
                        answer: [
                          {
                            valueString: 'Donald',
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.3',
                        definition: 'http://loinc.org/fhir/DataElement/54123-5',
                        text: 'Gender',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA2-8',
                              display: 'Male',
                            },
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.4',
                        definition: 'http://loinc.org/fhir/DataElement/54139-1',
                        text: 'Living?',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA33-6',
                              display: 'Yes',
                            },
                            item: [
                              {
                                linkId: '2.1.1.4.2',
                                item: [
                                  {
                                    linkId: '2.1.1.4.2.2',
                                    definition: 'http://loinc.org/fhir/DataElement/54141-7',
                                    text: 'Age',
                                    answer: [
                                      {
                                        valueDecimal: 52,
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.5',
                        definition: 'http://loinc.org/fhir/DataElement/54121-9',
                        text: 'Was this person born a twin?',
                        answer: [
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
                        linkId: '2.1.1.6',
                        definition: 'http://loinc.org/fhir/DataElement/54122-7',
                        text: 'Was this person adopted?',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA32-8',
                              display: 'No',
                            },
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                linkId: '2.1',
                item: [
                  {
                    linkId: '2.1.1',
                    item: [
                      {
                        linkId: '2.1.1.1',
                        definition: 'http://loinc.org/fhir/DataElement/54136-7',
                        text: 'Relationship to you',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA10425-9',
                              display: 'Paternal Uncle',
                            },
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.2',
                        definition: 'http://loinc.org/fhir/DataElement/54138-3',
                        text: 'Name',
                        answer: [
                          {
                            valueString: 'Eric',
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.3',
                        definition: 'http://loinc.org/fhir/DataElement/54123-5',
                        text: 'Gender',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA2-8',
                              display: 'Male',
                            },
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.4',
                        definition: 'http://loinc.org/fhir/DataElement/54139-1',
                        text: 'Living?',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA33-6',
                              display: 'Yes',
                            },
                            item: [
                              {
                                linkId: '2.1.1.4.2',
                                item: [
                                  {
                                    linkId: '2.1.1.4.2.2',
                                    definition: 'http://loinc.org/fhir/DataElement/54141-7',
                                    text: 'Age',
                                    answer: [
                                      {
                                        valueDecimal: 56,
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.5',
                        definition: 'http://loinc.org/fhir/DataElement/54121-9',
                        text: 'Was this person born a twin?',
                        answer: [
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
                        linkId: '2.1.1.6',
                        definition: 'http://loinc.org/fhir/DataElement/54122-7',
                        text: 'Was this person adopted?',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA32-8',
                              display: 'No',
                            },
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                linkId: '2.1',
                item: [
                  {
                    linkId: '2.1.1',
                    item: [
                      {
                        linkId: '2.1.1.1',
                        definition: 'http://loinc.org/fhir/DataElement/54136-7',
                        text: 'Relationship to you',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA10421-8',
                              display: 'Paternal Aunt',
                            },
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.2',
                        definition: 'http://loinc.org/fhir/DataElement/54138-3',
                        text: 'Name',
                        answer: [
                          {
                            valueString: 'Fiona',
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.3',
                        definition: 'http://loinc.org/fhir/DataElement/54123-5',
                        text: 'Gender',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA3-6',
                              display: 'Female',
                            },
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.4',
                        definition: 'http://loinc.org/fhir/DataElement/54139-1',
                        text: 'Living?',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA33-6',
                              display: 'Yes',
                            },
                            item: [
                              {
                                linkId: '2.1.1.4.2',
                                item: [
                                  {
                                    linkId: '2.1.1.4.2.2',
                                    definition: 'http://loinc.org/fhir/DataElement/54141-7',
                                    text: 'Age',
                                    answer: [
                                      {
                                        valueDecimal: 57,
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.5',
                        definition: 'http://loinc.org/fhir/DataElement/54121-9',
                        text: 'Was this person born a twin?',
                        answer: [
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
                        linkId: '2.1.1.6',
                        definition: 'http://loinc.org/fhir/DataElement/54122-7',
                        text: 'Was this person adopted?',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA32-8',
                              display: 'No',
                            },
                          },
                        ],
                      },
                    ],
                  },
                  {
                    linkId: '2.1.2',
                    text: "This family member's history of disease",
                    item: [
                      {
                        linkId: '2.1.2.1',
                        text: 'Disease or Condition',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA10543-9',
                              display: '-- Skin Cancer',
                            },
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                linkId: '2.1',
                item: [
                  {
                    linkId: '2.1.1',
                    item: [
                      {
                        linkId: '2.1.1.1',
                        definition: 'http://loinc.org/fhir/DataElement/54136-7',
                        text: 'Relationship to you',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA10423-4',
                              display: 'Paternal Grandfather',
                            },
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.2',
                        definition: 'http://loinc.org/fhir/DataElement/54138-3',
                        text: 'Name',
                        answer: [
                          {
                            valueString: 'Bob',
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.3',
                        definition: 'http://loinc.org/fhir/DataElement/54123-5',
                        text: 'Gender',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA2-8',
                              display: 'Male',
                            },
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.4',
                        definition: 'http://loinc.org/fhir/DataElement/54139-1',
                        text: 'Living?',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA32-8',
                              display: 'No',
                            },
                            item: [
                              {
                                linkId: '2.1.1.4.1',
                                item: [
                                  {
                                    linkId: '2.1.1.4.1.1',
                                    definition: 'http://loinc.org/fhir/DataElement/54112-8',
                                    text: 'Cause of Death',
                                    answer: [
                                      {
                                        valueCoding: {
                                          system: 'http://loinc.org',
                                          code: 'LA10537-1',
                                          display: '-- Colon Cancer',
                                        },
                                      },
                                    ],
                                  },
                                  {
                                    linkId: '2.1.1.4.1.2',
                                    definition: 'http://loinc.org/fhir/DataElement/54113-6',
                                    text: 'Age at Death',
                                    answer: [
                                      {
                                        valueCoding: {
                                          system: 'http://loinc.org',
                                          code: 'LA10400-2',
                                          display: 'OVER 60',
                                        },
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.5',
                        definition: 'http://loinc.org/fhir/DataElement/54121-9',
                        text: 'Was this person born a twin?',
                        answer: [
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
                        linkId: '2.1.1.6',
                        definition: 'http://loinc.org/fhir/DataElement/54122-7',
                        text: 'Was this person adopted?',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA32-8',
                              display: 'No',
                            },
                          },
                        ],
                      },
                    ],
                  },
                  {
                    linkId: '2.1.2',
                    text: "This family member's history of disease",
                    item: [
                      {
                        linkId: '2.1.2.1',
                        text: 'Disease or Condition',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA10537-1',
                              display: '-- Colon Cancer',
                            },
                          },
                        ],
                      },
                      {
                        linkId: '2.1.2.2',
                        text: 'Age at Diagnosis',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA10400-2',
                              display: 'OVER 60',
                            },
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                linkId: '2.1',
                item: [
                  {
                    linkId: '2.1.1',
                    item: [
                      {
                        linkId: '2.1.1.1',
                        definition: 'http://loinc.org/fhir/DataElement/54136-7',
                        text: 'Relationship to you',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA10424-2',
                              display: 'Paternal Grandmother',
                            },
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.2',
                        definition: 'http://loinc.org/fhir/DataElement/54138-3',
                        text: 'Name',
                        answer: [
                          {
                            valueString: 'Claire',
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.3',
                        definition: 'http://loinc.org/fhir/DataElement/54123-5',
                        text: 'Gender',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA3-6',
                              display: 'Female',
                            },
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.4',
                        definition: 'http://loinc.org/fhir/DataElement/54139-1',
                        text: 'Living?',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA32-8',
                              display: 'No',
                            },
                            item: [
                              {
                                linkId: '2.1.1.4.1',
                                item: [
                                  {
                                    linkId: '2.1.1.4.1.1',
                                    definition: 'http://loinc.org/fhir/DataElement/54112-8',
                                    text: 'Cause of Death',
                                    answer: [
                                      {
                                        valueCoding: {
                                          system: 'http://loinc.org',
                                          code: 'LA10589-2',
                                          display: '-- Other/Unexpected',
                                        },
                                        item: [
                                          {
                                            linkId: '2.1.1.4.1.1.1',
                                            text: 'Please specify',
                                            answer: [
                                              {
                                                valueString: 'Lou Gehrigs',
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  {
                                    linkId: '2.1.1.4.1.2',
                                    definition: 'http://loinc.org/fhir/DataElement/54113-6',
                                    text: 'Age at Death',
                                    answer: [
                                      {
                                        valueCoding: {
                                          system: 'http://loinc.org',
                                          code: 'LA10400-2',
                                          display: 'OVER 60',
                                        },
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.5',
                        definition: 'http://loinc.org/fhir/DataElement/54121-9',
                        text: 'Was this person born a twin?',
                        answer: [
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
                        linkId: '2.1.1.6',
                        definition: 'http://loinc.org/fhir/DataElement/54122-7',
                        text: 'Was this person adopted?',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA32-8',
                              display: 'No',
                            },
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                linkId: '2.1',
                item: [
                  {
                    linkId: '2.1.1',
                    item: [
                      {
                        linkId: '2.1.1.1',
                        definition: 'http://loinc.org/fhir/DataElement/54136-7',
                        text: 'Relationship to you',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA10417-6',
                              display: 'Mother',
                            },
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.2',
                        definition: 'http://loinc.org/fhir/DataElement/54138-3',
                        text: 'Name',
                        answer: [
                          {
                            valueString: 'Harriet',
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.3',
                        definition: 'http://loinc.org/fhir/DataElement/54123-5',
                        text: 'Gender',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA3-6',
                              display: 'Female',
                            },
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.4',
                        definition: 'http://loinc.org/fhir/DataElement/54139-1',
                        text: 'Living?',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA32-8',
                              display: 'No',
                            },
                            item: [
                              {
                                linkId: '2.1.1.4.1',
                                item: [
                                  {
                                    linkId: '2.1.1.4.1.1',
                                    definition: 'http://loinc.org/fhir/DataElement/54112-8',
                                    text: 'Cause of Death',
                                    answer: [
                                      {
                                        valueCoding: {
                                          system: 'http://loinc.org',
                                          code: 'LA10539-7',
                                          display: '-- Ovarian Cancer',
                                        },
                                      },
                                    ],
                                  },
                                  {
                                    linkId: '2.1.1.4.1.2',
                                    definition: 'http://loinc.org/fhir/DataElement/54113-6',
                                    text: 'Age at Death',
                                    answer: [
                                      {
                                        valueCoding: {
                                          system: 'http://loinc.org',
                                          code: 'LA10399-6',
                                          display: '50-59',
                                        },
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.5',
                        definition: 'http://loinc.org/fhir/DataElement/54121-9',
                        text: 'Was this person born a twin?',
                        answer: [
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
                        linkId: '2.1.1.6',
                        definition: 'http://loinc.org/fhir/DataElement/54122-7',
                        text: 'Was this person adopted?',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA32-8',
                              display: 'No',
                            },
                          },
                        ],
                      },
                    ],
                  },
                  {
                    linkId: '2.1.2',
                    text: "This family member's history of disease",
                    item: [
                      {
                        linkId: '2.1.2.1',
                        text: 'Disease or Condition',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA10539-7',
                              display: '-- Ovarian Cancer',
                            },
                          },
                        ],
                      },
                      {
                        linkId: '2.1.2.2',
                        text: 'Age at Diagnosis',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA10398-8',
                              display: '40-49',
                            },
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                linkId: '2.1',
                item: [
                  {
                    linkId: '2.1.1',
                    item: [
                      {
                        linkId: '2.1.1.1',
                        definition: 'http://loinc.org/fhir/DataElement/54136-7',
                        text: 'Relationship to you',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA10414-3',
                              display: 'Maternal Uncle',
                            },
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.2',
                        definition: 'http://loinc.org/fhir/DataElement/54138-3',
                        text: 'Name',
                        answer: [
                          {
                            valueString: 'Rudy',
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.3',
                        definition: 'http://loinc.org/fhir/DataElement/54123-5',
                        text: 'Gender',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA2-8',
                              display: 'Male',
                            },
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.4',
                        definition: 'http://loinc.org/fhir/DataElement/54139-1',
                        text: 'Living?',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA33-6',
                              display: 'Yes',
                            },
                            item: [
                              {
                                linkId: '2.1.1.4.2',
                                item: [
                                  {
                                    linkId: '2.1.1.4.2.2',
                                    definition: 'http://loinc.org/fhir/DataElement/54141-7',
                                    text: 'Age',
                                    answer: [
                                      {
                                        valueDecimal: 60,
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.5',
                        definition: 'http://loinc.org/fhir/DataElement/54121-9',
                        text: 'Was this person born a twin?',
                        answer: [
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
                        linkId: '2.1.1.6',
                        definition: 'http://loinc.org/fhir/DataElement/54122-7',
                        text: 'Was this person adopted?',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA32-8',
                              display: 'No',
                            },
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                linkId: '2.1',
                item: [
                  {
                    linkId: '2.1.1',
                    item: [
                      {
                        linkId: '2.1.1.1',
                        definition: 'http://loinc.org/fhir/DataElement/54136-7',
                        text: 'Relationship to you',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA10410-1',
                              display: 'Maternal Aunt',
                            },
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.2',
                        definition: 'http://loinc.org/fhir/DataElement/54138-3',
                        text: 'Name',
                        answer: [
                          {
                            valueString: 'Julie',
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.3',
                        definition: 'http://loinc.org/fhir/DataElement/54123-5',
                        text: 'Gender',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA3-6',
                              display: 'Female',
                            },
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.4',
                        definition: 'http://loinc.org/fhir/DataElement/54139-1',
                        text: 'Living?',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA33-6',
                              display: 'Yes',
                            },
                            item: [
                              {
                                linkId: '2.1.1.4.2',
                                item: [
                                  {
                                    linkId: '2.1.1.4.2.2',
                                    definition: 'http://loinc.org/fhir/DataElement/54141-7',
                                    text: 'Age',
                                    answer: [
                                      {
                                        valueDecimal: 57,
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.5',
                        definition: 'http://loinc.org/fhir/DataElement/54121-9',
                        text: 'Was this person born a twin?',
                        answer: [
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
                        linkId: '2.1.1.6',
                        definition: 'http://loinc.org/fhir/DataElement/54122-7',
                        text: 'Was this person adopted?',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA32-8',
                              display: 'No',
                            },
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                linkId: '2.1',
                item: [
                  {
                    linkId: '2.1.1',
                    item: [
                      {
                        linkId: '2.1.1.1',
                        definition: 'http://loinc.org/fhir/DataElement/54136-7',
                        text: 'Relationship to you',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA10412-7',
                              display: 'Maternal Grandfather',
                            },
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.2',
                        definition: 'http://loinc.org/fhir/DataElement/54138-3',
                        text: 'Name',
                        answer: [
                          {
                            valueString: 'Ian',
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.3',
                        definition: 'http://loinc.org/fhir/DataElement/54123-5',
                        text: 'Gender',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA2-8',
                              display: 'Male',
                            },
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.4',
                        definition: 'http://loinc.org/fhir/DataElement/54139-1',
                        text: 'Living?',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA32-8',
                              display: 'No',
                            },
                            item: [
                              {
                                linkId: '2.1.1.4.1',
                                item: [
                                  {
                                    linkId: '2.1.1.4.1.1',
                                    definition: 'http://loinc.org/fhir/DataElement/54112-8',
                                    text: 'Cause of Death',
                                    answer: [
                                      {
                                        valueCoding: {
                                          system: 'http://loinc.org',
                                          code: 'LA10558-7',
                                          display: '-- Heart Attack',
                                        },
                                      },
                                    ],
                                  },
                                  {
                                    linkId: '2.1.1.4.1.2',
                                    definition: 'http://loinc.org/fhir/DataElement/54113-6',
                                    text: 'Age at Death',
                                    answer: [
                                      {
                                        valueCoding: {
                                          system: 'http://loinc.org',
                                          code: 'LA10400-2',
                                          display: 'OVER 60',
                                        },
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.5',
                        definition: 'http://loinc.org/fhir/DataElement/54121-9',
                        text: 'Was this person born a twin?',
                        answer: [
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
                        linkId: '2.1.1.6',
                        definition: 'http://loinc.org/fhir/DataElement/54122-7',
                        text: 'Was this person adopted?',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA32-8',
                              display: 'No',
                            },
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                linkId: '2.1',
                item: [
                  {
                    linkId: '2.1.1',
                    item: [
                      {
                        linkId: '2.1.1.1',
                        definition: 'http://loinc.org/fhir/DataElement/54136-7',
                        text: 'Relationship to you',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA10413-5',
                              display: 'Maternal Grandmother',
                            },
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.2',
                        definition: 'http://loinc.org/fhir/DataElement/54138-3',
                        text: 'Name',
                        answer: [
                          {
                            valueString: 'Gladys',
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.3',
                        definition: 'http://loinc.org/fhir/DataElement/54123-5',
                        text: 'Gender',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA3-6',
                              display: 'Female',
                            },
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.4',
                        definition: 'http://loinc.org/fhir/DataElement/54139-1',
                        text: 'Living?',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA32-8',
                              display: 'No',
                            },
                            item: [
                              {
                                linkId: '2.1.1.4.1',
                                item: [
                                  {
                                    linkId: '2.1.1.4.1.1',
                                    definition: 'http://loinc.org/fhir/DataElement/54112-8',
                                    text: 'Cause of Death',
                                    answer: [
                                      {
                                        valueCoding: {
                                          system: 'http://loinc.org',
                                          code: 'LA10571-0',
                                          display: '-- Other/Unknown',
                                        },
                                      },
                                    ],
                                  },
                                  {
                                    linkId: '2.1.1.4.1.2',
                                    definition: 'http://loinc.org/fhir/DataElement/54113-6',
                                    text: 'Age at Death',
                                    answer: [
                                      {
                                        valueCoding: {
                                          system: 'http://loinc.org',
                                          code: 'LA10400-2',
                                          display: 'OVER 60',
                                        },
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.5',
                        definition: 'http://loinc.org/fhir/DataElement/54121-9',
                        text: 'Was this person born a twin?',
                        answer: [
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
                        linkId: '2.1.1.6',
                        definition: 'http://loinc.org/fhir/DataElement/54122-7',
                        text: 'Was this person adopted?',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA32-8',
                              display: 'No',
                            },
                          },
                        ],
                      },
                    ],
                  },
                  {
                    linkId: '2.1.2',
                    text: "This family member's history of disease",
                    item: [
                      {
                        linkId: '2.1.2.1',
                        text: 'Disease or Condition',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA10536-3',
                              display: '-- Breast Cancer',
                            },
                          },
                        ],
                      },
                      {
                        linkId: '2.1.2.2',
                        text: 'Age at Diagnosis',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA10399-6',
                              display: '50-59',
                            },
                          },
                        ],
                      },
                    ],
                  },
                  {
                    linkId: '2.1.2',
                    text: "This family member's history of disease",
                    item: [
                      {
                        linkId: '2.1.2.1',
                        text: 'Disease or Condition',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA10564-5',
                              display: '-- Asthma',
                            },
                          },
                        ],
                      },
                      {
                        linkId: '2.1.2.2',
                        text: 'Age at Diagnosis',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA10395-4',
                              display: 'Childhood',
                            },
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                linkId: '2.1',
                item: [
                  {
                    linkId: '2.1.1',
                    item: [
                      {
                        linkId: '2.1.1.1',
                        definition: 'http://loinc.org/fhir/DataElement/54136-7',
                        text: 'Relationship to you',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA10411-9',
                              display: 'Maternal Cousin',
                            },
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.2',
                        definition: 'http://loinc.org/fhir/DataElement/54138-3',
                        text: 'Name',
                        answer: [
                          {
                            valueString: 'Karren',
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.3',
                        definition: 'http://loinc.org/fhir/DataElement/54123-5',
                        text: 'Gender',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA3-6',
                              display: 'Female',
                            },
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.4',
                        definition: 'http://loinc.org/fhir/DataElement/54139-1',
                        text: 'Living?',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA33-6',
                              display: 'Yes',
                            },
                            item: [
                              {
                                linkId: '2.1.1.4.2',
                                item: [
                                  {
                                    linkId: '2.1.1.4.2.2',
                                    definition: 'http://loinc.org/fhir/DataElement/54141-7',
                                    text: 'Age',
                                    answer: [
                                      {
                                        valueDecimal: 30,
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.5',
                        definition: 'http://loinc.org/fhir/DataElement/54121-9',
                        text: 'Was this person born a twin?',
                        answer: [
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
                        linkId: '2.1.1.6',
                        definition: 'http://loinc.org/fhir/DataElement/54122-7',
                        text: 'Was this person adopted?',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA32-8',
                              display: 'No',
                            },
                          },
                        ],
                      },
                    ],
                  },
                  {
                    linkId: '2.1.2',
                    text: "This family member's history of disease",
                    item: [
                      {
                        linkId: '2.1.2.1',
                        text: 'Disease or Condition',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA10536-3',
                              display: '-- Breast Cancer',
                            },
                          },
                        ],
                      },
                      {
                        linkId: '2.1.2.2',
                        text: 'Age at Diagnosis',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA10397-0',
                              display: '30-39',
                            },
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                linkId: '2.1',
                item: [
                  {
                    linkId: '2.1.1',
                    item: [
                      {
                        linkId: '2.1.1.1',
                        definition: 'http://loinc.org/fhir/DataElement/54136-7',
                        text: 'Relationship to you',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA10411-9',
                              display: 'Maternal Cousin',
                            },
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.2',
                        definition: 'http://loinc.org/fhir/DataElement/54138-3',
                        text: 'Name',
                        answer: [
                          {
                            valueString: 'Mary',
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.3',
                        definition: 'http://loinc.org/fhir/DataElement/54123-5',
                        text: 'Gender',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA3-6',
                              display: 'Female',
                            },
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.4',
                        definition: 'http://loinc.org/fhir/DataElement/54139-1',
                        text: 'Living?',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA33-6',
                              display: 'Yes',
                            },
                            item: [
                              {
                                linkId: '2.1.1.4.2',
                                item: [
                                  {
                                    linkId: '2.1.1.4.2.2',
                                    definition: 'http://loinc.org/fhir/DataElement/54141-7',
                                    text: 'Age',
                                    answer: [
                                      {
                                        valueDecimal: 31,
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        linkId: '2.1.1.5',
                        definition: 'http://loinc.org/fhir/DataElement/54121-9',
                        text: 'Was this person born a twin?',
                        answer: [
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
                        linkId: '2.1.1.6',
                        definition: 'http://loinc.org/fhir/DataElement/54122-7',
                        text: 'Was this person adopted?',
                        answer: [
                          {
                            valueCoding: {
                              system: 'http://loinc.org',
                              code: 'LA32-8',
                              display: 'No',
                            },
                          },
                        ],
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
      expect(isValid).toBe(true);
      expect(operationOutcome.issue).toHaveLength(0);
    });
  });
});
