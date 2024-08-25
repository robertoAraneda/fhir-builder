import { contextR4 } from '../../../src';

describe('ServiceRequest', () => {
  const { ServiceRequest } = contextR4(); // Set the R4 context
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
