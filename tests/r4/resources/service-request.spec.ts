import { contextR4 } from '../../../src';

describe('ServiceRequest', () => {
  const { ServiceRequest } = contextR4(); // Set the R4 context
  it('should create an instance', () => {
    expect(new ServiceRequest()).toBeTruthy();
  });

  it('should validate Servicerequest-example-lipid.json fhir example', () => {
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

    expect(item.validate()).toEqual({ error: null });
  });
});
