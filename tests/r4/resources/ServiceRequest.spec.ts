import {
  IAnnotation,
  ICodeableConcept,
  IExtension,
  IIdentifier,
  IOperationOutcomeIssue,
  IPeriod,
  IQuantity,
  IRange,
  IRatio,
  IReference,
  IServiceRequest,
  ITiming,
} from 'fhirtypes/dist/r4';
import { ServiceRequest, ServiceRequestBuilder, ServiceRequestValidator } from '../../../src/r4';

describe('Examples FHIR R4', () => {
  it('should create an instance', () => {
    expect(new ServiceRequest()).toBeTruthy();
  });

  it('should validate Lipid Panel Order', () => {
    const item = new ServiceRequest({
      resourceType: 'ServiceRequest',
      id: 'lipid',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative with Details</b></p></div>',
      },
      contained: [
        {
          resourceType: 'Observation',
          id: 'fasting',
          status: 'final',
          code: {
            coding: [
              {
                system: 'http://loinc.org',
                code: '49541-6',
                display: 'Fasting status - Reported',
              },
            ],
          },
          subject: {
            reference: 'Patient/example',
          },
          valueCodeableConcept: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/v2-0136',
                code: 'Y',
                display: 'Yes',
              },
            ],
          },
        },
        {
          resourceType: 'Specimen',
          id: 'serum',
          identifier: [
            {
              system: 'http://acme.org/specimens',
              value: '20150107-0012',
            },
          ],
          type: {
            coding: [
              {
                system: 'http://snomed.info/sct',
                code: '119364003',
                display: 'Serum sample',
              },
            ],
          },
          subject: {
            reference: 'Patient/example',
          },
          collection: {
            collectedDateTime: '2015-08-16T06:40:17Z',
          },
        },
      ],
      identifier: [
        {
          type: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/v2-0203',
                code: 'PLAC',
              },
            ],
            text: 'Placer',
          },
          system: 'urn:oid:1.3.4.5.6.7',
          value: '2345234234234',
        },
      ],
      status: 'active',
      intent: 'original-order',
      code: {
        coding: [
          {
            system: 'http://acme.org/tests',
            code: 'LIPID',
          },
        ],
        text: 'Lipid Panel',
      },
      subject: {
        reference: 'Patient/example',
      },
      encounter: {
        reference: 'Encounter/example',
      },
      occurrenceDateTime: '2013-05-02T16:16:00-07:00',
      requester: {
        reference: 'Practitioner/example',
      },
      performer: [
        {
          reference: 'Practitioner/f202',
        },
      ],
      reasonCode: [
        {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-9',
              code: 'V173',
              display: 'Fam hx-ischem heart dis',
            },
          ],
        },
      ],
      supportingInfo: [
        {
          reference: '#fasting',
          display: 'Fasting status',
        },
      ],
      specimen: [
        {
          reference: '#serum',
          display: 'Serum specimen',
        },
      ],
      note: [
        {
          text: 'patient is afraid of needles',
        },
      ],
    });

    const { isValid } = item.validate();
    expect(isValid).toBeTruthy();
  });

  it('should validate CT Scan order', () => {
    const item = new ServiceRequest({
      resourceType: 'ServiceRequest',
      id: 'di',
      text: {
        status: 'generated',
        div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: di</p><p><b>status</b>: active</p><p><b>intent</b>: original-order</p><p><b>code</b>: Chest CT <span>(Details : {LOINC code '24627-2' = 'Chest CT)</span></p><p><b>subject</b>: <a>Patient/dicom</a></p><p><b>occurrence</b>: 08/05/2013 9:33:27 AM</p><p><b>requester</b>: <a>Dr. Adam Careful</a></p><p><b>reasonCode</b>: Check for metastatic disease <span>(Details )</span></p></div>",
      },
      status: 'active',
      intent: 'original-order',
      code: {
        coding: [
          {
            system: 'http://loinc.org',
            code: '24627-2',
          },
        ],
        text: 'Chest CT',
      },
      subject: {
        reference: 'Patient/dicom',
      },
      occurrenceDateTime: '2013-05-08T09:33:27+07:00',
      requester: {
        reference: 'Practitioner/example',
        display: 'Dr. Adam Careful',
      },
      reasonCode: [
        {
          text: 'Check for metastatic disease',
        },
      ],
    });

    const { isValid } = item.validate();
    expect(isValid).toBeTruthy();
  });

  it('should validate Free T4 Add on Order', () => {
    const item = new ServiceRequest({
      resourceType: 'ServiceRequest',
      id: 'ft4',
      text: {
        status: 'generated',
        div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: ft4</p><p><b>status</b>: active</p><p><b>intent</b>: reflex-order</p><p><b>code</b>: Free T4 <span>(Details : {LOINC code '3024-7' = 'Thyroxine (T4) free [Mass/volume] in Serum or Plasma', given as 'Thyroxine (T4) free [Mass/​volume] in Serum or Plasma'})</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>occurrence</b>: 27/08/2015 9:33:27 AM</p><p><b>requester</b>: <a>Practitioner/example</a></p></div>",
      },
      status: 'active',
      intent: 'reflex-order',
      code: {
        coding: [
          {
            system: 'http://loinc.org',
            code: '3024-7',
            display: 'Thyroxine (T4) free [Mass/​volume] in Serum or Plasma',
          },
        ],
        text: 'Free T4',
      },
      subject: {
        reference: 'Patient/pat2',
      },
      occurrenceDateTime: '2015-08-27T09:33:27+07:00',
      requester: {
        reference: 'Practitioner/example',
      },
    });

    const { isValid } = item.validate();
    expect(isValid).toBeTruthy();
  });

  it('should validate An example of a Head CT procedure', () => {
    const item = new ServiceRequest({
      resourceType: 'ServiceRequest',
      id: 'example',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">To be added</div>',
      },
      status: 'completed',
      intent: 'order',
      category: [
        {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '103693007',
              display: 'Diagnostic procedure (procedure)',
            },
          ],
          text: 'Diagnostics Procedure',
        },
      ],
      code: {
        coding: [
          {
            system: 'http://snomed.info/sct',
            code: '303653007',
            display: 'Computed tomography of head',
          },
        ],
      },
      subject: {
        reference: 'Patient/example',
      },
    });

    const { isValid } = item.validate();
    expect(isValid).toBeTruthy();
  });

  it('should validate Example with sub-requests derived from the request', () => {
    const item = new ServiceRequest({
      resourceType: 'ServiceRequest',
      id: 'subrequest',
      text: {
        status: 'generated',
        div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: subrequest</p><p><b>basedOn</b>: Original Request</p><p><b>replaces</b>: Previous allergy test</p><p><b>requisition</b>: A13848392</p><p><b>status</b>: active</p><p><b>intent</b>: instance-order</p><p><b>priority</b>: routine</p><p><b>code</b>: Peanut IgG <span>(Details : {LOINC code '35542-0' = 'Peanut IgG Ab [Mass/volume] in Serum)</span></p><p><b>subject</b>: <a>Patient/dicom</a></p><p><b>occurrence</b>: 08/05/2013 9:33:27 AM</p><p><b>requester</b>: <a>Dr. Adam Careful</a></p><p><b>performerType</b>: Nurse <span>(Details : {[not stated] code 'null' = 'null', given as 'Qualified nurse'})</span></p><p><b>reasonCode</b>: Check for Peanut Allergy <span>(Details )</span></p><p><b>bodySite</b>: Right arm <span>(Details : {[not stated] code 'null' = 'null', given as 'Right arm'})</span></p></div>",
      },
      basedOn: [
        {
          display: 'Original Request',
        },
      ],
      replaces: [
        {
          display: 'Previous allergy test',
        },
      ],
      requisition: {
        value: 'A13848392',
      },
      status: 'active',
      intent: 'instance-order',
      priority: 'routine',
      code: {
        coding: [
          {
            system: 'http://loinc.org',
            code: '35542-0',
          },
        ],
        text: 'Peanut IgG',
      },
      subject: {
        reference: 'Patient/dicom',
      },
      occurrenceDateTime: '2013-05-08T09:33:27+07:00',
      requester: {
        reference: 'Practitioner/example',
        display: 'Dr. Adam Careful',
      },
      performerType: {
        coding: [
          {
            display: 'Qualified nurse',
          },
        ],
        text: 'Nurse',
      },
      reasonCode: [
        {
          text: 'Check for Peanut Allergy',
        },
      ],
      bodySite: [
        {
          coding: [
            {
              display: 'Right arm',
            },
          ],
          text: 'Right arm',
        },
      ],
    });

    const { isValid } = item.validate();

    expect(isValid).toBeTruthy();
  });

  it('should validate An example of an order for home physiotherapy', () => {
    const item = new ServiceRequest({
      resourceType: 'ServiceRequest',
      id: 'physiotherapy',
      text: {
        status: 'generated',
        div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: physiotherapy</p><p><b>contained</b>: , </p><p><b>identifier</b>: Placer = 20170201-0001</p><p><b>basedOn</b>: <a>CarePlan/gpvisit</a></p><p><b>status</b>: completed</p><p><b>intent</b>: order</p><p><b>code</b>: Physiotherapy of chest (regime/therapy)  <span>(Details : {SNOMED CT code '34431008' = 'Physiotherapy of chest', given as 'Physiotherapy of chest (regime/therapy) '})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>occurrence</b>: Duration 15days, Do 1-1 per 1 days</p><p><b>asNeeded</b>: as needed to clear mucus <span>(Details )</span></p><p><b>authoredOn</b>: 01/02/2017 5:23:07 PM</p><p><b>requester</b>: <a>Dr Adam Careful</a></p><p><b>reasonReference</b>: id: cystic-fibrosis; Active <span>(Details : {http://terminology.hl7.org/CodeSystem/condition-clinical code 'active' = 'Active)</span>; Confirmed <span>(Details : {http://terminology.hl7.org/CodeSystem/condition-ver-status code 'confirmed' = 'Confirmed)</span>; Problem List Item <span>(Details : {http://terminology.hl7.org/CodeSystem/condition-category code 'problem-list-item' = 'Problem List Item', given as 'Problem List Item'})</span>; Mild <span>(Details : {SNOMED CT code '255604002' = 'Mild', given as 'Mild'})</span>; Cystic Fibrosis <span>(Details : {http://hl7.org/fhir/sid/icd-10-cm code 'E84.0' = 'E84.0', given as 'Cystic fibrosis with pulmonary manifestations'})</span>; onset: 12/11/2012</p><p><b>relevantHistory</b>: Author's Signature. Generated Summary: id: signature; recorded: 01/02/2017 5:23:07 PM; </p></div>",
      },
      contained: [
        {
          resourceType: 'Provenance',
          id: 'signature',
          target: [
            {
              reference: 'ServiceRequest/physiotherapy/_history/1',
            },
          ],
          recorded: '2017-02-01T17:23:07Z',
          agent: [
            {
              role: [
                {
                  coding: [
                    {
                      system: 'http://terminology.hl7.org/CodeSystem/v3-ParticipationType',
                      code: 'AUT',
                    },
                  ],
                },
              ],
              who: {
                reference: 'Practitioner/example',
                display: 'Dr Adam Careful',
              },
            },
          ],
          signature: [
            {
              type: [
                {
                  system: 'urn:iso-astm:E1762-95:2013',
                  code: '1.2.840.10065.1.12.1.1',
                  display: "Author's Signature",
                },
              ],
              when: '2017-02-01T17:23:07Z',
              who: {
                reference: 'Practitioner/example',
                display: 'Dr Adam Careful',
              },
              targetFormat: 'application/fhir+xml',
              sigFormat: 'application/signature+xml',
              data: 'dGhpcyBibG9iIGlzIHNuaXBwZWQ=',
            },
          ],
        },
        {
          resourceType: 'Condition',
          id: 'cystic-fibrosis',
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
            coding: [
              {
                system: 'http://hl7.org/fhir/sid/icd-10-cm',
                code: 'E84.0',
                display: 'Cystic fibrosis with pulmonary manifestations',
              },
            ],
            text: 'Cystic Fibrosis',
          },
          subject: {
            reference: 'Patient/example',
          },
          onsetDateTime: '2012-11-12',
        },
      ],
      identifier: [
        {
          type: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/v2-0203',
                code: 'PLAC',
                display: 'Placer Identifier',
              },
            ],
            text: 'Placer',
          },
          system: 'http://goodhealth.org/placer-ids',
          value: '20170201-0001',
        },
      ],
      basedOn: [
        {
          reference: 'CarePlan/gpvisit',
        },
      ],
      status: 'completed',
      intent: 'order',
      code: {
        coding: [
          {
            system: 'http://snomed.info/sct',
            code: '34431008',
            display: 'Physiotherapy of chest (regime/therapy) ',
          },
        ],
      },
      subject: {
        reference: 'Patient/example',
      },
      occurrenceTiming: {
        repeat: {
          duration: 15,
          durationMax: 25,
          durationUnit: 'min',
          frequency: 1,
          frequencyMax: 4,
          period: 1,
          periodUnit: 'd',
        },
      },
      asNeededCodeableConcept: {
        text: 'as needed to clear mucus',
      },
      authoredOn: '2017-02-01T17:23:07Z',
      requester: {
        reference: 'Practitioner/example',
        display: 'Dr Adam Careful',
      },
      reasonReference: [
        {
          reference: '#cystic-fibrosis',
        },
      ],
      relevantHistory: [
        {
          reference: '#signature',
          display: "Author's Signature",
        },
      ],
    });

    const { isValid } = item.validate();

    expect(isValid).toBeTruthy();
  });

  it('should validate An example of an order to not turn a patient', () => {
    const item = new ServiceRequest({
      resourceType: 'ServiceRequest',
      id: 'do-not-turn',
      text: {
        status: 'generated',
        div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: do-not-turn</p><p><b>identifier</b>: 20170201-0002</p><p><b>status</b>: active</p><p><b>intent</b>: order</p><p><b>priority</b>: stat</p><p><b>doNotPerform</b>: true</p><p><b>code</b>: Turning patient in bed (procedure) <span>(Details : {SNOMED CT code '359962006' = 'Turning patient in bed', given as 'Turning patient in bed (procedure)'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>authoredOn</b>: 01/02/2017 5:23:07 PM</p><p><b>requester</b>: <a>Dr Adam Careful</a></p><p><b>reasonReference</b>: Patient has a spinal fracture</p></div>",
      },
      identifier: [
        {
          system: 'http://goodhealth.org/placer-ids',
          value: '20170201-0002',
        },
      ],
      status: 'active',
      intent: 'order',
      priority: 'stat',
      doNotPerform: true,
      code: {
        coding: [
          {
            system: 'http://snomed.info/sct',
            code: '359962006',
            display: 'Turning patient in bed (procedure)',
          },
        ],
      },
      subject: {
        reference: 'Patient/example',
      },
      authoredOn: '2017-02-01T17:23:07Z',
      requester: {
        reference: 'Practitioner/example',
        display: 'Dr Adam Careful',
      },
      reasonReference: [
        {
          display: 'Patient has a spinal fracture',
        },
      ],
    });

    const { isValid } = item.validate();

    expect(isValid).toBeTruthy();
  });

  it('should validate Part of an exercise plan', () => {
    const item = new ServiceRequest({
      resourceType: 'ServiceRequest',
      id: 'benchpress',
      text: {
        status: 'generated',
        div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: benchpress</p><p><b>status</b>: active</p><p><b>intent</b>: plan</p><p><b>code</b>: Bench Press (regime/therapy)  <span>(Details : {SNOMED CT code '229115003' = 'Bench press', given as 'Bench Press (regime/therapy) '})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>occurrence</b>: Count 20 times, Do 3 per 1 weeks</p><p><b>patientInstruction</b>: Start with 30kg 10-15 repetitions for three sets and increase in increments of 5kg when you feel ready</p></div>",
      },
      status: 'active',
      intent: 'plan',
      code: {
        coding: [
          {
            system: 'http://snomed.info/sct',
            code: '229115003',
            display: 'Bench Press (regime/therapy) ',
          },
        ],
      },
      subject: {
        reference: 'Patient/example',
      },
      occurrenceTiming: {
        repeat: {
          count: 20,
          countMax: 30,
          frequency: 3,
          period: 1,
          periodUnit: 'wk',
        },
      },
      patientInstruction:
        'Start with 30kg 10-15 repetitions for three sets and increase in increments of 5kg when you feel ready',
    });

    const { isValid } = item.validate();

    expect(isValid).toBeTruthy();
  });
});

describe('ServiceRequest Model', () => {
  it('should initialize with default values', () => {
    const serviceRequest = new ServiceRequest();
    expect(serviceRequest.resourceType).toBe('ServiceRequest');
    expect(serviceRequest.identifier).toBeUndefined();
    expect(serviceRequest.instantiatesCanonical).toBeUndefined();
    expect(serviceRequest.instantiatesUri).toBeUndefined();
    expect(serviceRequest._instantiatesUri).toBeUndefined();
    expect(serviceRequest.basedOn).toBeUndefined();
    expect(serviceRequest.replaces).toBeUndefined();
    expect(serviceRequest.requisition).toBeUndefined();
    expect(serviceRequest.status).toBeUndefined();
    expect(serviceRequest._status).toBeUndefined();
    expect(serviceRequest.intent).toBeUndefined();
    expect(serviceRequest._intent).toBeUndefined();
    expect(serviceRequest.category).toBeUndefined();
    expect(serviceRequest.priority).toBeUndefined();
    expect(serviceRequest._priority).toBeUndefined();
    expect(serviceRequest.doNotPerform).toBeUndefined();
    expect(serviceRequest._doNotPerform).toBeUndefined();
    expect(serviceRequest.code).toBeUndefined();
    expect(serviceRequest.orderDetail).toBeUndefined();
    expect(serviceRequest.quantityQuantity).toBeUndefined();
    expect(serviceRequest.quantityRatio).toBeUndefined();
    expect(serviceRequest.quantityRange).toBeUndefined();
    expect(serviceRequest.subject).toBeUndefined();
    expect(serviceRequest.encounter).toBeUndefined();
    expect(serviceRequest.occurrenceDateTime).toBeUndefined();
    expect(serviceRequest._occurrenceDateTime).toBeUndefined();
    expect(serviceRequest.occurrencePeriod).toBeUndefined();
    expect(serviceRequest.occurrenceTiming).toBeUndefined();
    expect(serviceRequest.asNeededBoolean).toBeUndefined();
    expect(serviceRequest._asNeededBoolean).toBeUndefined();
    expect(serviceRequest.asNeededCodeableConcept).toBeUndefined();
    expect(serviceRequest.authoredOn).toBeUndefined();
    expect(serviceRequest._authoredOn).toBeUndefined();
    expect(serviceRequest.requester).toBeUndefined();
    expect(serviceRequest.performerType).toBeUndefined();
    expect(serviceRequest.performer).toBeUndefined();
    expect(serviceRequest.locationCode).toBeUndefined();
    expect(serviceRequest.locationReference).toBeUndefined();
    expect(serviceRequest.reasonCode).toBeUndefined();
    expect(serviceRequest.reasonReference).toBeUndefined();
    expect(serviceRequest.insurance).toBeUndefined();
    expect(serviceRequest.supportingInfo).toBeUndefined();
    expect(serviceRequest.specimen).toBeUndefined();
    expect(serviceRequest.bodySite).toBeUndefined();
    expect(serviceRequest.note).toBeUndefined();
    expect(serviceRequest.patientInstruction).toBeUndefined();
    expect(serviceRequest._patientInstruction).toBeUndefined();
    expect(serviceRequest.relevantHistory).toBeUndefined();
  });

  it('should initialize with provided values', () => {
    const args: IServiceRequest = {
      resourceType: 'ServiceRequest',
      status: 'active',
      intent: 'order',
      subject: { reference: 'Patient/123' },
    };
    const serviceRequest = new ServiceRequest(args);
    expect(serviceRequest.resourceType).toBe('ServiceRequest');
    expect(serviceRequest.status).toBe('active');
    expect(serviceRequest.intent).toBe('order');
    expect(serviceRequest.subject.reference).toBe('Patient/123');
  });

  it('should return a JSON representation of the model', () => {
    const args: IServiceRequest = {
      resourceType: 'ServiceRequest',
      status: 'active',
      intent: 'order',
      subject: { reference: 'Patient/123' },
    };
    const serviceRequest = new ServiceRequest(args);
    const json = serviceRequest.toJson();
    expect(json.resourceType).toBe('ServiceRequest');
    expect(json.status).toBe('active');
    expect(json.intent).toBe('order');
    expect(json.subject.reference).toBe('Patient/123');
  });

  it('should return a string representation of the model', () => {
    const args: IServiceRequest = {
      resourceType: 'ServiceRequest',
      status: 'active',
      intent: 'order',
      subject: { reference: 'Patient/123' },
    };
    const serviceRequest = new ServiceRequest(args);
    const str = serviceRequest.toString();
    expect(str).toContain('ServiceRequest');
    expect(str).toContain('active');
    expect(str).toContain('order');
    expect(str).toContain('Patient/123');
  });

  it('should return a pretty string representation of the model', () => {
    const args: IServiceRequest = {
      resourceType: 'ServiceRequest',
      status: 'active',
      intent: 'order',
      subject: { reference: 'Patient/123' },
    };
    const serviceRequest = new ServiceRequest(args);
    const prettyStr = serviceRequest.toPrettyString();
    expect(prettyStr).toContain('ServiceRequest');
    expect(prettyStr).toContain('active');
    expect(prettyStr).toContain('order');
    expect(prettyStr).toContain('Patient/123');
  });

  it('should return a serialized string representation of the model', () => {
    const args: IServiceRequest = {
      resourceType: 'ServiceRequest',
      status: 'active',
      intent: 'order',
      subject: { reference: 'Patient/123' },
    };
    const serviceRequest = new ServiceRequest(args);
    const serializedStr = serviceRequest.serialize();
    expect(serializedStr).toContain('ServiceRequest');
    expect(serializedStr).toContain('active');
    expect(serializedStr).toContain('order');
    expect(serializedStr).toContain('Patient/123');
  });

  it('should validate a valid model', () => {
    const args: IServiceRequest = {
      resourceType: 'ServiceRequest',
      status: 'active',
      intent: 'order',
      subject: { reference: 'Patient/123' },
    };
    const serviceRequest = new ServiceRequest(args);
    const { isValid, operationOutcome } = serviceRequest.validate();
    expect(isValid).toBe(true);
    expect(operationOutcome.issue).toHaveLength(0);
  });

  it('should invalidate an invalid model', () => {
    const args: IServiceRequest = {
      resourceType: 'ServiceRequest',
      status: 'invalid-status' as any,
      intent: 'order',
      subject: { reference: 'Patient/123' },
    };
    const serviceRequest = new ServiceRequest(args);
    const { isValid, operationOutcome } = serviceRequest.validate();
    expect(isValid).toBe(false);
    expect(operationOutcome.issue).toHaveLength(1);
    expect(operationOutcome.issue[0].details?.text).toContain('status');
  });
});

describe('ServiceRequestBuilder', () => {
  it('should build a ServiceRequest with default values', () => {
    const builder = new ServiceRequestBuilder();
    const serviceRequest = builder.build();
    expect(serviceRequest.resourceType).toBe('ServiceRequest');
    expect(serviceRequest.identifier).toBeUndefined();
    expect(serviceRequest.status).toBeUndefined();
  });

  it('should add identifier correctly', () => {
    const builder = new ServiceRequestBuilder();
    const identifier = { system: 'http://example.com', value: '12345' } as IIdentifier;
    const serviceRequest = builder.addIdentifier(identifier).build();
    expect(serviceRequest.identifier?.[0].value).toBe('12345');
  });

  it('should add instantiatesCanonical correctly', () => {
    const builder = new ServiceRequestBuilder();
    const serviceRequest = builder.addInstantiatesCanonical('http://example.com').build();
    expect(serviceRequest.instantiatesCanonical?.[0]).toBe('http://example.com');
  });

  it('should add instantiatesUri correctly', () => {
    const builder = new ServiceRequestBuilder();
    const serviceRequest = builder.addInstantiatesUri('http://example.com').build();
    expect(serviceRequest.instantiatesUri?.[0]).toBe('http://example.com');
  });

  it('should add basedOn correctly', () => {
    const builder = new ServiceRequestBuilder();
    const basedOn = { reference: 'ServiceRequest/1' } as IReference;
    const serviceRequest = builder.addBasedOn(basedOn).build();
    expect(serviceRequest.basedOn?.[0].reference).toBe('ServiceRequest/1');
  });

  it('should add replaces correctly', () => {
    const builder = new ServiceRequestBuilder();
    const replaces = { reference: 'ServiceRequest/2' } as IReference;
    const serviceRequest = builder.addReplaces(replaces).build();
    expect(serviceRequest.replaces?.[0].reference).toBe('ServiceRequest/2');
  });

  it('should set requisition correctly', () => {
    const builder = new ServiceRequestBuilder();
    const requisition = { system: 'http://example.com', value: '67890' } as IIdentifier;
    const serviceRequest = builder.setRequisition(requisition).build();
    expect(serviceRequest.requisition?.value).toBe('67890');
  });

  it('should set status correctly', () => {
    const builder = new ServiceRequestBuilder();
    const serviceRequest = builder.setStatus('active').build();
    expect(serviceRequest.status).toBe('active');
  });

  it('should set intent correctly', () => {
    const builder = new ServiceRequestBuilder();
    const serviceRequest = builder.setIntent('order').build();
    expect(serviceRequest.intent).toBe('order');
  });

  it('should add category correctly', () => {
    const builder = new ServiceRequestBuilder();
    const category = { text: 'Category' } as ICodeableConcept;
    const serviceRequest = builder.addCategory(category).build();
    expect(serviceRequest.category?.[0].text).toBe('Category');
  });

  it('should set priority correctly', () => {
    const builder = new ServiceRequestBuilder();
    const serviceRequest = builder.setPriority('routine').build();
    expect(serviceRequest.priority).toBe('routine');
  });

  it('should set doNotPerform correctly', () => {
    const builder = new ServiceRequestBuilder();
    const serviceRequest = builder.setDoNotPerform(true).build();
    expect(serviceRequest.doNotPerform).toBe(true);
  });

  it('should set code correctly', () => {
    const builder = new ServiceRequestBuilder();
    const code = { text: 'Code' } as ICodeableConcept;
    const serviceRequest = builder.setCode(code).build();
    expect(serviceRequest.code?.text).toBe('Code');
  });

  it('should add orderDetail correctly', () => {
    const builder = new ServiceRequestBuilder();
    const orderDetail = { text: 'Order Detail' } as ICodeableConcept;
    const serviceRequest = builder.addOrderDetail(orderDetail).build();
    expect(serviceRequest.orderDetail?.[0].text).toBe('Order Detail');
  });

  it('should set quantityQuantity correctly', () => {
    const builder = new ServiceRequestBuilder();
    const quantity = { value: 1, unit: 'unit' } as IQuantity;
    const serviceRequest = builder.setQuantityQuantity(quantity).build();
    expect(serviceRequest.quantityQuantity?.value).toBe(1);
    expect(serviceRequest.quantityQuantity?.unit).toBe('unit');
  });

  it('should set quantityRatio correctly', () => {
    const builder = new ServiceRequestBuilder();
    const ratio = { numerator: { value: 1 }, denominator: { value: 2 } } as IRatio;
    const serviceRequest = builder.setQuantityRatio(ratio).build();
    expect(serviceRequest.quantityRatio?.numerator?.value).toBe(1);
    expect(serviceRequest.quantityRatio?.denominator?.value).toBe(2);
  });

  it('should set quantityRange correctly', () => {
    const builder = new ServiceRequestBuilder();
    const range = { low: { value: 1 }, high: { value: 10 } } as IRange;
    const serviceRequest = builder.setQuantityRange(range).build();
    expect(serviceRequest.quantityRange?.low?.value).toBe(1);
    expect(serviceRequest.quantityRange?.high?.value).toBe(10);
  });

  it('should set subject correctly', () => {
    const builder = new ServiceRequestBuilder();
    const subject = { reference: 'Patient/123' } as IReference;
    const serviceRequest = builder.setSubject(subject).build();
    expect(serviceRequest.subject?.reference).toBe('Patient/123');
  });

  it('should set encounter correctly', () => {
    const builder = new ServiceRequestBuilder();
    const encounter = { reference: 'Encounter/123' } as IReference;
    const serviceRequest = builder.setEncounter(encounter).build();
    expect(serviceRequest.encounter?.reference).toBe('Encounter/123');
  });

  it('should set occurrenceDateTime correctly', () => {
    const builder = new ServiceRequestBuilder();
    const serviceRequest = builder.setOccurrenceDateTime('2023-10-01T00:00:00Z').build();
    expect(serviceRequest.occurrenceDateTime).toBe('2023-10-01T00:00:00Z');
  });

  it('should set occurrencePeriod correctly', () => {
    const builder = new ServiceRequestBuilder();
    const period = { start: '2023-10-01', end: '2023-10-02' } as IPeriod;
    const serviceRequest = builder.setOccurrencePeriod(period).build();
    expect(serviceRequest.occurrencePeriod?.start).toBe('2023-10-01');
    expect(serviceRequest.occurrencePeriod?.end).toBe('2023-10-02');
  });

  it('should set occurrenceTiming correctly', () => {
    const builder = new ServiceRequestBuilder();
    const timing = { event: ['2023-10-01T00:00:00Z'] } as ITiming;
    const serviceRequest = builder.setOccurrenceTiming(timing).build();
    expect(serviceRequest.occurrenceTiming?.event?.[0]).toBe('2023-10-01T00:00:00Z');
  });

  it('should set asNeededBoolean correctly', () => {
    const builder = new ServiceRequestBuilder();
    const serviceRequest = builder.setAsNeededBoolean(true).build();
    expect(serviceRequest.asNeededBoolean).toBe(true);
  });

  it('should set asNeededCodeableConcept correctly', () => {
    const builder = new ServiceRequestBuilder();
    const asNeeded = { text: 'As Needed' } as ICodeableConcept;
    const serviceRequest = builder.setAsNeededCodeableConcept(asNeeded).build();
    expect(serviceRequest.asNeededCodeableConcept?.text).toBe('As Needed');
  });

  it('should set authoredOn correctly', () => {
    const builder = new ServiceRequestBuilder();
    const serviceRequest = builder.setAuthoredOn('2023-10-01').build();
    expect(serviceRequest.authoredOn).toBe('2023-10-01');
  });

  it('should set requester correctly', () => {
    const builder = new ServiceRequestBuilder();
    const requester = { reference: 'Practitioner/123' } as IReference;
    const serviceRequest = builder.setRequester(requester).build();
    expect(serviceRequest.requester?.reference).toBe('Practitioner/123');
  });

  it('should set performerType correctly', () => {
    const builder = new ServiceRequestBuilder();
    const performerType = { text: 'Performer Type' } as ICodeableConcept;
    const serviceRequest = builder.setPerformerType(performerType).build();
    expect(serviceRequest.performerType?.text).toBe('Performer Type');
  });

  it('should add performer correctly', () => {
    const builder = new ServiceRequestBuilder();
    const performer = { reference: 'Practitioner/123' } as IReference;
    const serviceRequest = builder.addPerformer(performer).build();
    expect(serviceRequest.performer?.[0].reference).toBe('Practitioner/123');
  });

  it('should add locationCode correctly', () => {
    const builder = new ServiceRequestBuilder();
    const locationCode = { text: 'Location Code' } as ICodeableConcept;
    const serviceRequest = builder.addLocationCode(locationCode).build();
    expect(serviceRequest.locationCode?.[0].text).toBe('Location Code');
  });

  it('should add locationReference correctly', () => {
    const builder = new ServiceRequestBuilder();
    const locationReference = { reference: 'Location/123' } as IReference;
    const serviceRequest = builder.addLocationReference(locationReference).build();
    expect(serviceRequest.locationReference?.[0].reference).toBe('Location/123');
  });

  it('should add reasonCode correctly', () => {
    const builder = new ServiceRequestBuilder();
    const reasonCode = { text: 'Reason Code' } as ICodeableConcept;
    const serviceRequest = builder.addReasonCode(reasonCode).build();
    expect(serviceRequest.reasonCode?.[0].text).toBe('Reason Code');
  });

  it('should add reasonReference correctly', () => {
    const builder = new ServiceRequestBuilder();
    const reasonReference = { reference: 'Condition/123' } as IReference;
    const serviceRequest = builder.addReasonReference(reasonReference).build();
    expect(serviceRequest.reasonReference?.[0].reference).toBe('Condition/123');
  });

  it('should add insurance correctly', () => {
    const builder = new ServiceRequestBuilder();
    const insurance = { reference: 'Coverage/1' } as IReference;
    const serviceRequest = builder.addInsurance(insurance).build();
    expect(serviceRequest.insurance?.[0].reference).toBe('Coverage/1');
  });

  it('should add supportingInfo correctly', () => {
    const builder = new ServiceRequestBuilder();
    const supportingInfo = { reference: 'Observation/1' } as IReference;
    const serviceRequest = builder.addSupportingInfo(supportingInfo).build();
    expect(serviceRequest.supportingInfo?.[0].reference).toBe('Observation/1');
  });

  it('should add specimen correctly', () => {
    const builder = new ServiceRequestBuilder();
    const specimen = { reference: 'Specimen/1' } as IReference;
    const serviceRequest = builder.addSpecimen(specimen).build();
    expect(serviceRequest.specimen?.[0].reference).toBe('Specimen/1');
  });

  it('should add bodySite correctly', () => {
    const builder = new ServiceRequestBuilder();
    const bodySite = { text: 'Left arm' } as ICodeableConcept;
    const serviceRequest = builder.addBodySite(bodySite).build();
    expect(serviceRequest.bodySite?.[0].text).toBe('Left arm');
  });

  it('should add note correctly', () => {
    const builder = new ServiceRequestBuilder();
    const note = { text: 'This is a note' } as IAnnotation;
    const serviceRequest = builder.addNote(note).build();
    expect(serviceRequest.note?.[0].text).toBe('This is a note');
  });

  it('should set patientInstruction correctly', () => {
    const builder = new ServiceRequestBuilder();
    const serviceRequest = builder.setPatientInstruction('Take with food').build();
    expect(serviceRequest.patientInstruction).toBe('Take with food');
  });

  it('should add relevantHistory correctly', () => {
    const builder = new ServiceRequestBuilder();
    const relevantHistory = { reference: 'Provenance/1' } as IReference;
    const serviceRequest = builder.addRelevantHistory(relevantHistory).build();
    expect(serviceRequest.relevantHistory?.[0].reference).toBe('Provenance/1');
  });

  it('should parse JSON correctly', () => {
    const json = {
      resourceType: 'ServiceRequest',
      status: 'active',
      intent: 'order',
      subject: { reference: 'Patient/123' },
    };
    const builder = new ServiceRequestBuilder();
    const serviceRequest = builder.fromJSON(json).build();
    expect(serviceRequest.resourceType).toBe('ServiceRequest');
    expect(serviceRequest.status).toBe('active');
    expect(serviceRequest.intent).toBe('order');
    expect(serviceRequest.subject?.reference).toBe('Patient/123');
  });

  it('should add primitive extension correctly', () => {
    const extension = { url: 'http://example.com', valueString: 'test' } as IExtension;
    const builder = new ServiceRequestBuilder();
    const serviceRequest = builder
      .addPrimitiveExtension('_instantiatesUri', {
        id: '123',
        extension: [extension],
      })
      .build();
    expect(serviceRequest._instantiatesUri?.[0].extension?.[0].valueString).toBe('test');
  });
});

describe('ServiceRequestValidator', () => {
  let errors: IOperationOutcomeIssue[];

  beforeEach(() => {
    errors = [];
  });

  it('should validate a valid ServiceRequest model', () => {
    const validServiceRequest: IServiceRequest = {
      resourceType: 'ServiceRequest',
      status: 'active',
      intent: 'order',
      subject: { reference: 'Patient/123' },
    };

    ServiceRequestValidator(validServiceRequest, 'ServiceRequest', errors);
    expect(errors).toHaveLength(0);
  });

  it('should invalidate a ServiceRequest model with missing required fields', () => {
    const invalidServiceRequest = {
      resourceType: 'ServiceRequest',
      status: 'active',
    };
    ServiceRequestValidator(invalidServiceRequest as any, 'ServiceRequest', errors);
    expect(errors).not.toHaveLength(0);
  });

  it('should invalidate a ServiceRequest model with orderDetail but no code', () => {
    const invalidServiceRequest: IServiceRequest = {
      resourceType: 'ServiceRequest',
      status: 'active',
      intent: 'order',
      subject: { reference: 'Patient/123' },
      orderDetail: [{ text: 'Order Detail' }],
    };

    ServiceRequestValidator(invalidServiceRequest, 'ServiceRequest', errors);
    expect(errors).toHaveLength(1);
    expect(errors[0].details?.text).toContain('orderDetail');
  });

  it('should invalidate a ServiceRequest model with invalid status', () => {
    const invalidServiceRequest = {
      resourceType: 'ServiceRequest',
      status: 'invalid-status',
      intent: 'order',
      subject: { reference: 'Patient/123' },
    };

    ServiceRequestValidator(invalidServiceRequest as any, 'ServiceRequest', errors);
    expect(errors).not.toHaveLength(0);
  });

  it('should invalidate a ServiceRequest model with invalid intent', () => {
    const invalidServiceRequest = {
      resourceType: 'ServiceRequest',
      status: 'active',
      intent: 'invalid-intent',
      subject: { reference: 'Patient/123' },
    };

    ServiceRequestValidator(invalidServiceRequest as any, 'ServiceRequest', errors);
    expect(errors).not.toHaveLength(0);
  });
});
