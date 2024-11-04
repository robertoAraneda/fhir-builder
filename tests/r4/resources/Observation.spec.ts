import { IElement, IExtension, IOperationOutcomeIssue, IReference, ObservationStatusType } from 'fhirtypes/dist/r4';
import { Observation, ObservationBuilder, ObservationValidator } from '../../../src/r4';

describe('Example from FHIR Website', () => {
  test('Real-world patient - glucose', () => {
    const observation = new Observation({
      resourceType: 'Observation',
      id: 'f001',
      text: {
        status: 'generated',
        div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f001</p><p><b>identifier</b>: 6323 (OFFICIAL)</p><p><b>status</b>: final</p><p><b>code</b>: Glucose [Moles/volume] in Blood <span>(Details : {LOINC code '15074-8' = 'Glucose [Moles/volume] in Blood', given as 'Glucose [Moles/volume] in Blood'})</span></p><p><b>subject</b>: <a>P. van de Heuvel</a></p><p><b>effective</b>: 02/04/2013 9:30:10 AM --&gt; (ongoing)</p><p><b>issued</b>: 03/04/2013 3:30:10 PM</p><p><b>performer</b>: <a>A. Langeveld</a></p><p><b>value</b>: 6.3 mmol/l<span> (Details: UCUM code mmol/L = 'mmol/L')</span></p><p><b>interpretation</b>: High <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'H' = 'High', given as 'High'})</span></p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td><td><b>High</b></td></tr><tr><td>*</td><td>3.1 mmol/l<span> (Details: UCUM code mmol/L = 'mmol/L')</span></td><td>6.2 mmol/l<span> (Details: UCUM code mmol/L = 'mmol/L')</span></td></tr></table></div>",
      },
      identifier: [
        {
          use: 'official',
          system: 'http://www.bmc.nl/zorgportal/identifiers/observations',
          value: '6323',
        },
      ],
      status: 'final',
      code: {
        coding: [
          {
            system: 'http://loinc.org',
            code: '15074-8',
            display: 'Glucose [Moles/volume] in Blood',
          },
        ],
      },
      subject: {
        reference: 'Patient/f001',
        display: 'P. van de Heuvel',
      },
      effectivePeriod: {
        start: '2013-04-02T09:30:10+01:00',
      },
      issued: '2013-04-03T15:30:10+01:00',
      performer: [
        {
          reference: 'Practitioner/f005',
          display: 'A. Langeveld',
        },
      ],
      valueQuantity: {
        value: 6.3,
        unit: 'mmol/l',
        system: 'http://unitsofmeasure.org',
        code: 'mmol/L',
      },
      interpretation: [
        {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation',
              code: 'H',
              display: 'High',
            },
          ],
        },
      ],
      referenceRange: [
        {
          low: {
            value: 3.1,
            unit: 'mmol/l',
            system: 'http://unitsofmeasure.org',
            code: 'mmol/L',
          },
          high: {
            value: 6.2,
            unit: 'mmol/l',
            system: 'http://unitsofmeasure.org',
            code: 'mmol/L',
          },
        },
      ],
    });

    const { isValid, operationOutcome } = observation.validate();
    expect(isValid).toBe(true);
    expect(operationOutcome.issue).toHaveLength(0);
  });

  test('Real-world patient - creatinine', () => {
    const observation = new Observation({
      resourceType: 'Observation',
      id: 'f204',
      text: {
        status: 'generated',
        div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f204</p><p><b>identifier</b>: 1304-03720-Creatinine</p><p><b>status</b>: final</p><p><b>code</b>: Creatinine(Serum) <span>(Details : {https://intranet.aumc.nl/labtestcodes code '20005' = '20005', given as 'Creatinine(Serum)'})</span></p><p><b>subject</b>: <a>Roel</a></p><p><b>issued</b>: 04/04/2013 2:34:00 PM</p><p><b>performer</b>: <a>Luigi Maas</a></p><p><b>value</b>: 122 umol/L<span> (Details: SNOMED CT code 258814008 = 'umol/L')</span></p><p><b>interpretation</b>: Serum creatinine raised <span>(Details : {SNOMED CT code '166717003' = 'Serum creatinine raised', given as 'Serum creatinine raised'}; {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'H' = 'High)</span></p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td><td><b>High</b></td><td><b>Type</b></td></tr><tr><td>*</td><td>64</td><td>104</td><td>Normal Range <span>(Details : {http://terminology.hl7.org/CodeSystem/referencerange-meaning code 'normal' = 'Normal Range', given as 'Normal Range'})</span></td></tr></table></div>",
      },
      identifier: [
        {
          system: 'https://intranet.aumc.nl/labvalues',
          value: '1304-03720-Creatinine',
        },
      ],
      status: 'final',
      code: {
        coding: [
          {
            system: 'https://intranet.aumc.nl/labtestcodes',
            code: '20005',
            display: 'Creatinine(Serum)',
          },
        ],
      },
      subject: {
        reference: 'Patient/f201',
        display: 'Roel',
      },
      issued: '2013-04-04T14:34:00+01:00',
      performer: [
        {
          reference: 'Practitioner/f202',
          display: 'Luigi Maas',
        },
      ],
      valueQuantity: {
        value: 122,
        unit: 'umol/L',
        system: 'http://snomed.info/sct',
        code: '258814008',
      },
      interpretation: [
        {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '166717003',
              display: 'Serum creatinine raised',
            },
            {
              system: 'http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation',
              code: 'H',
            },
          ],
        },
      ],
      referenceRange: [
        {
          low: {
            value: 64,
          },
          high: {
            value: 104,
          },
          type: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/referencerange-meaning',
                code: 'normal',
                display: 'Normal Range',
              },
            ],
          },
        },
      ],
    });

    const { isValid, operationOutcome } = observation.validate();
    expect(isValid).toBe(true);
    expect(operationOutcome.issue).toHaveLength(0);
  });

  test('Specimen Reject Example', () => {
    const observation = new Observation({
      resourceType: 'Observation',
      id: 'unsat',
      text: {
        status: 'generated',
        div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: unsat</p><p><b>identifier</b>: 6323 (OFFICIAL)</p><p><b>status</b>: cancelled</p><p><b>code</b>: Glucose [Moles/volume] in Blood <span>(Details : {LOINC code '15074-8' = 'Glucose [Moles/volume] in Blood', given as 'Glucose [Moles/volume] in Blood'})</span></p><p><b>subject</b>: <a>P. van de Heuvel</a></p><p><b>effective</b>: 02/04/2013 9:30:10 AM --&gt; 05/04/2013 9:30:10 AM</p><p><b>issued</b>: 03/04/2013 3:30:10 PM</p><p><b>performer</b>: <a>A. Langeveld</a></p><p><b>dataAbsentReason</b>: Specimen unsatisfactory for evaluation <span>(Details : {SNOMED CT code '125154007' = 'Specimen unsatisfactory for evaluation', given as 'Specimen unsatisfactory for evaluation'})</span></p><p><b>note</b>: Tube broken in transit and sample leaked</p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td><td><b>High</b></td></tr><tr><td>*</td><td>3.1 mmol/l<span> (Details: UCUM code mmol/L = 'mmol/L')</span></td><td>6.2 mmol/l<span> (Details: UCUM code mmol/L = 'mmol/L')</span></td></tr></table></div>",
      },
      identifier: [
        {
          use: 'official',
          system: 'http://www.bmc.nl/zorgportal/identifiers/observations',
          value: '6323',
        },
      ],
      status: 'cancelled',
      code: {
        coding: [
          {
            system: 'http://loinc.org',
            code: '15074-8',
            display: 'Glucose [Moles/volume] in Blood',
          },
        ],
      },
      subject: {
        reference: 'Patient/f001',
        display: 'P. van de Heuvel',
      },
      effectivePeriod: {
        start: '2013-04-02T09:30:10+01:00',
        end: '2013-04-05T09:30:10+01:00',
      },
      issued: '2013-04-03T15:30:10+01:00',
      performer: [
        {
          reference: 'Practitioner/f005',
          display: 'A. Langeveld',
        },
      ],
      dataAbsentReason: {
        coding: [
          {
            system: 'http://snomed.info/sct',
            code: '125154007',
            display: 'Specimen unsatisfactory for evaluation',
          },
        ],
      },
      note: [
        {
          text: 'Tube broken in transit and sample leaked',
        },
      ],
      referenceRange: [
        {
          low: {
            value: 3.1,
            unit: 'mmol/l',
            system: 'http://unitsofmeasure.org',
            code: 'mmol/L',
          },
          high: {
            value: 6.2,
            unit: 'mmol/l',
            system: 'http://unitsofmeasure.org',
            code: 'mmol/L',
          },
        },
      ],
    });

    const { isValid, operationOutcome } = observation.validate();
    expect(isValid).toBe(true);
    expect(operationOutcome.issue).toHaveLength(0);
  });

  test('An example of a blood group (ABO) measurement.', () => {
    const observation = new Observation({
      resourceType: 'Observation',
      id: 'bloodgroup',
      text: {
        status: 'generated',
        div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: bloodgroup</p><p><b>status</b>: final</p><p><b>category</b>: Laboratory <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'laboratory' = 'Laboratory', given as 'Laboratory'})</span></p><p><b>code</b>: Blood Group <span>(Details : {LOINC code '883-9' = 'ABO group [Type] in Blood', given as 'ABO group [Type] in Blood'})</span></p><p><b>subject</b>: <a>Patient/infant</a></p><p><b>effective</b>: 11/03/2018 4:07:54 PM</p><p><b>value</b>: A <span>(Details : {SNOMED CT code '112144000' = 'Blood group A', given as 'Blood group A (finding)'})</span></p></div>",
      },
      status: 'final',
      category: [
        {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/observation-category',
              code: 'laboratory',
              display: 'Laboratory',
            },
          ],
          text: 'Laboratory',
        },
      ],
      code: {
        coding: [
          {
            system: 'http://loinc.org',
            code: '883-9',
            display: 'ABO group [Type] in Blood',
          },
        ],
        text: 'Blood Group',
      },
      subject: {
        reference: 'Patient/infant',
      },
      effectiveDateTime: '2018-03-11T16:07:54+00:00',
      valueCodeableConcept: {
        coding: [
          {
            system: 'http://snomed.info/sct',
            code: '112144000',
            display: 'Blood group A (finding)',
          },
        ],
        text: 'A',
      },
    });

    const { isValid, operationOutcome } = observation.validate();
    expect(isValid).toBe(true);
    expect(operationOutcome.issue).toHaveLength(0);
  });

  test('An example of a simple blood typing panel.', () => {
    const observation = new Observation({
      resourceType: 'Observation',
      id: 'bgpanel',
      text: {
        status: 'generated',
        div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: bgpanel</p><p><b>status</b>: final</p><p><b>category</b>: Laboratory <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'laboratory' = 'Laboratory', given as 'Laboratory'})</span></p><p><b>code</b>: Blood Group Panel <span>(Details : {LOINC code '34532-2' = 'Blood type and Indirect antibody screen panel - Blood', given as ' Blood type and Indirect antibody screen panel - Blood'})</span></p><p><b>subject</b>: <a>Patient/infant</a></p><p><b>effective</b>: 11/03/2018 4:07:54 PM</p><p><b>hasMember</b>: </p><ul><li><a>Observation/bloodgroup</a></li><li><a>Observation/rhstatus</a></li></ul></div>",
      },
      status: 'final',
      category: [
        {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/observation-category',
              code: 'laboratory',
              display: 'Laboratory',
            },
          ],
          text: 'Laboratory',
        },
      ],
      code: {
        coding: [
          {
            system: 'http://loinc.org',
            code: '34532-2',
            display: ' Blood type and Indirect antibody screen panel - Blood',
          },
        ],
        text: 'Blood Group Panel',
      },
      subject: {
        reference: 'Patient/infant',
      },
      effectiveDateTime: '2018-03-11T16:07:54+00:00',
      hasMember: [
        {
          reference: 'Observation/bloodgroup',
        },
        {
          reference: 'Observation/rhstatus',
        },
      ],
    });

    const { isValid, operationOutcome } = observation.validate();
    expect(isValid).toBe(true);
    expect(operationOutcome.issue).toHaveLength(0);
  });

  test('An example of a blood Rh antigen measurement.', () => {
    const observation = new Observation({
      resourceType: 'Observation',
      id: 'rhstatus',
      text: {
        status: 'generated',
        div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: rhstatus</p><p><b>status</b>: final</p><p><b>category</b>: Laboratory <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'laboratory' = 'Laboratory', given as 'Laboratory'})</span></p><p><b>code</b>: Blood Group <span>(Details : {LOINC code '883-9' = 'ABO group [Type] in Blood', given as 'ABO group [Type] in Blood'})</span></p><p><b>subject</b>: <a>Patient/infant</a></p><p><b>effective</b>: 11/03/2018 4:07:54 PM</p><p><b>value</b>: A <span>(Details : {SNOMED CT code '112144000' = 'Blood group A', given as 'Blood group A (finding)'})</span></p></div>",
      },
      status: 'final',
      category: [
        {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/observation-category',
              code: 'laboratory',
              display: 'Laboratory',
            },
          ],
          text: 'Laboratory',
        },
      ],
      code: {
        coding: [
          {
            system: 'http://loinc.org',
            code: '883-9',
            display: 'ABO group [Type] in Blood',
          },
        ],
        text: 'Blood Group',
      },
      subject: {
        reference: 'Patient/infant',
      },
      effectiveDateTime: '2018-03-11T16:07:54+00:00',
      valueCodeableConcept: {
        coding: [
          {
            system: 'http://snomed.info/sct',
            code: '112144000',
            display: 'Blood group A (finding)',
          },
        ],
        text: 'A',
      },
    });

    const { isValid, operationOutcome } = observation.validate();
    expect(isValid).toBe(true);
    expect(operationOutcome.issue).toHaveLength(0);
  });

  test('Genetics example 1', () => {
    const observation = new Observation({
      resourceType: 'Observation',
      id: 'example-genetics-1',
      text: {
        status: 'generated',
        div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example-genetics-1</p><p><b>status</b>: final</p><p><b>code</b>: Genetic analysis master panel-- This is the parent OBR for the panel holding all of the associated observations that can be reported with a molecular genetics analysis result. <span>(Details : {LOINC code '55233-1' = 'Genetic analysis master panel - Blood or Tissue by Molecular genetics method', given as 'Genetic analysis master panel-- This is the parent OBR for the panel holding all of the associated observations that can be reported with a molecular genetics analysis result.'})</span></p><p><b>subject</b>: <a>Molecular Lab Patient ID: HOSP-23456</a></p><p><b>issued</b>: 03/04/2013 3:30:10 PM</p><p><b>performer</b>: <a>Molecular Diagnostics Laboratory</a></p><p><b>value</b>: Positive <span>(Details : {SNOMED CT code '10828004' = 'Positive', given as 'Positive'})</span></p><p><b>specimen</b>: <a>Molecular Specimen ID: MLD45-Z4-1234</a></p></div>",
      },
      extension: [
        {
          url: 'http://hl7.org/fhir/StructureDefinition/observation-geneticsGene',
          valueCodeableConcept: {
            coding: [
              {
                system: 'http://www.genenames.org',
                code: '3236',
                display: 'EGFR',
              },
            ],
          },
        },
        {
          url: 'http://hl7.org/fhir/StructureDefinition/observation-geneticsDNARegionName',
          valueString: 'Exon 21',
        },
        {
          url: 'http://hl7.org/fhir/StructureDefinition/observation-geneticsGenomicSourceClass',
          valueCodeableConcept: {
            coding: [
              {
                system: 'http://loinc.org',
                code: 'LA6684-0',
                display: 'somatic',
              },
            ],
          },
        },
      ],
      status: 'final',
      code: {
        coding: [
          {
            system: 'http://loinc.org',
            code: '55233-1',
            display:
              'Genetic analysis master panel-- This is the parent OBR for the panel holding all of the associated observations that can be reported with a molecular genetics analysis result.',
          },
        ],
      },
      subject: {
        reference: 'Patient/example',
        display: 'Molecular Lab Patient ID: HOSP-23456',
      },
      issued: '2013-04-03T15:30:10+01:00',
      performer: [
        {
          reference: 'Practitioner/example',
          display: 'Molecular Diagnostics Laboratory',
        },
      ],
      valueCodeableConcept: {
        coding: [
          {
            system: 'http://snomed.info/sct',
            code: '10828004',
            display: 'Positive',
          },
        ],
      },
      specimen: {
        reference: 'Specimen/genetics-example1-somatic',
        display: 'Molecular Specimen ID: MLD45-Z4-1234',
      },
    });

    const { isValid, operationOutcome } = observation.validate();
    expect(isValid).toBe(true);
    expect(operationOutcome.issue).toHaveLength(0);
  });

  test('Example of a 1 minute Apgar score with individual score as components', () => {
    const observation = new Observation({
      resourceType: 'Observation',
      id: '1minute-apgar-score',
      text: {
        status: 'generated',
        div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 1minute-apgar-score</p><p><b>contained</b>: </p><p><b>status</b>: final</p><p><b>category</b>: Survey <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'survey' = 'Survey', given as 'Survey'})</span></p><p><b>code</b>: 1 minute Apgar Score <span>(Details : {LOINC code '9272-6' = '1 minute Apgar Score', given as '1 minute Apgar Score'}; {SNOMED CT code '169895004' = 'Apgar at 1 minute', given as 'Apgar at 1 minute'})</span></p><p><b>subject</b>: id: newborn; 12345; active; Peter James Chalmers ; gender: male; birthDate: 18/05/2016</p><p><b>effective</b>: 18/05/2016 10:33:22 PM</p><p><b>performer</b>: <a>Practitioner/example</a></p><p><b>value</b>: 0 {score}<span> (Details: UCUM code {score} = '{score}')</span></p><blockquote><p><b>component</b></p><p><b>code</b>: Apgar color score <span>(Details : {LOINC code '32406-1' = '1 minute Apgar Color', given as '1 minute Apgar Color'}; {SNOMED CT code '249227004' = 'Apgar color score', given as 'Apgar color score'})</span></p><p><b>value</b>: 0. The baby's whole body is completely bluish-gray or pale <span>(Details : {LOINC code 'LA6722-8' = 'The baby's whole body is completely bluish-gray or pale', given as 'The baby's whole body is completely bluish-gray or pale'}; {http://acme.ped/apgarcolor code '0' = '0)</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Apgar respiratory effort score <span>(Details : {LOINC code '32407-9' = '1 minute Apgar Heart rate', given as '1 minute Apgar Heart Rate'}; {SNOMED CT code '249223000' = 'Apgar heart rate score', given as 'Apgar heart rate score'})</span></p><p><b>value</b>: 0. No heart rate <span>(Details : {LOINC code 'LA6716-0' = 'No heart rate', given as 'No heart rate'}; {http://acme.ped/apgarheartrate code '0' = '0)</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Apgar response to stimulus score <span>(Details : {LOINC code '32409-5' = '1 minute Apgar Reflex irritability', given as '1 minute Apgar Reflex Irritability'}; {SNOMED CT code '249226008' = 'Apgar response to stimulus score', given as 'Apgar response to stimulus score'})</span></p><p><b>value</b>: 0. No response to airways being suctioned <span>(Details : {LOINC code 'LA6719-4' = 'No response to airways being suctioned', given as 'No response to airways being suctioned'}; {http://acme.ped/apgarreflexirritability code '0' = '0)</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Apgar muscle tone score <span>(Details : {LOINC code '32408-7' = '1 minute Apgar Muscle tone', given as '1 minute Apgar Muscle Tone'}; {SNOMED CT code '249225007' = 'Apgar muscle tone score', given as 'Apgar muscle tone score'})</span></p><p><b>value</b>: 0. Limp; no movement <span>(Details : {LOINC code 'LA6713-7' = 'Limp; no movement', given as 'Limp; no movement'}; {http://acme.ped/apgarmuscletone code '0' = '0)</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Apgar respiratory effort score <span>(Details : {LOINC code '32410-3' = '1 minute Apgar Respiratory effort', given as '1 minute Apgar Respiratory effort'}; {SNOMED CT code '249224006' = 'Apgar respiratory effort score', given as 'Apgar respiratory effort score'})</span></p><p><b>value</b>: 0. Not breathing <span>(Details : {LOINC code 'LA6725-1' = 'Not breathing', given as 'Not breathing'}; {http://acme.ped/apgarrespiratoryeffort code '0' = '0)</span></p></blockquote></div>",
      },
      contained: [
        {
          resourceType: 'Patient',
          id: 'newborn',
          identifier: [
            {
              system: 'http://acmehealthcare/org/mrns',
              value: '12345',
            },
          ],
          active: true,
          name: [
            {
              family: 'Chalmers',
              given: ['Peter', 'James'],
            },
          ],
          gender: 'male',
          birthDate: '2016-05-18',
          _birthDate: {
            extension: [
              {
                url: 'http://hl7.org/fhir/StructureDefinition/patient-birthTime',
                valueDateTime: '2016-05-18T10:28:45Z',
              },
            ],
          },
        },
      ],
      status: 'final',
      category: [
        {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/observation-category',
              code: 'survey',
              display: 'Survey',
            },
          ],
          text: 'Survey',
        },
      ],
      code: {
        coding: [
          {
            system: 'http://loinc.org',
            code: '9272-6',
            display: '1 minute Apgar Score',
          },
          {
            system: 'http://snomed.info/sct',
            code: '169895004',
            display: 'Apgar at 1 minute',
          },
        ],
        text: '1 minute Apgar Score',
      },
      subject: {
        reference: '#newborn',
      },
      effectiveDateTime: '2016-05-18T22:33:22Z',
      performer: [
        {
          reference: 'Practitioner/example',
        },
      ],
      valueQuantity: {
        value: 0,
        system: 'http://unitsofmeasure.org',
        code: '{score}',
      },
      component: [
        {
          code: {
            coding: [
              {
                system: 'http://loinc.org',
                code: '32406-1',
                display: '1 minute Apgar Color',
              },
              {
                system: 'http://snomed.info/sct',
                code: '249227004',
                display: 'Apgar color score',
              },
            ],
            text: 'Apgar color score',
          },
          valueCodeableConcept: {
            coding: [
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/ordinalValue',
                    valueDecimal: 0,
                  },
                ],
                system: 'http://loinc.org',
                code: 'LA6722-8',
                display: "The baby's whole body is completely bluish-gray or pale",
              },
              {
                system: 'http://acme.ped/apgarcolor',
                code: '0',
              },
            ],
            text: "0. The baby's whole body is completely bluish-gray or pale",
          },
        },
        {
          code: {
            coding: [
              {
                system: 'http://loinc.org',
                code: '32407-9',
                display: '1 minute Apgar Heart Rate',
              },
              {
                system: 'http://snomed.info/sct',
                code: '249223000',
                display: 'Apgar heart rate score',
              },
            ],
            text: 'Apgar respiratory effort score',
          },
          valueCodeableConcept: {
            coding: [
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/ordinalValue',
                    valueDecimal: 0,
                  },
                ],
                system: 'http://loinc.org',
                code: 'LA6716-0',
                display: 'No heart rate',
              },
              {
                system: 'http://acme.ped/apgarheartrate',
                code: '0',
              },
            ],
            text: '0. No heart rate',
          },
        },
        {
          code: {
            coding: [
              {
                system: 'http://loinc.org',
                code: '32409-5',
                display: '1 minute Apgar Reflex Irritability',
              },
              {
                system: 'http://snomed.info/sct',
                code: '249226008',
                display: 'Apgar response to stimulus score',
              },
            ],
            text: 'Apgar response to stimulus score',
          },
          valueCodeableConcept: {
            coding: [
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/ordinalValue',
                    valueDecimal: 0,
                  },
                ],
                system: 'http://loinc.org',
                code: 'LA6719-4',
                display: 'No response to airways being suctioned',
              },
              {
                system: 'http://acme.ped/apgarreflexirritability',
                code: '0',
              },
            ],
            text: '0. No response to airways being suctioned',
          },
        },
        {
          code: {
            coding: [
              {
                system: 'http://loinc.org',
                code: '32408-7',
                display: '1 minute Apgar Muscle Tone',
              },
              {
                system: 'http://snomed.info/sct',
                code: '249225007',
                display: 'Apgar muscle tone score',
              },
            ],
            text: 'Apgar muscle tone score',
          },
          valueCodeableConcept: {
            coding: [
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/ordinalValue',
                    valueDecimal: 0,
                  },
                ],
                system: 'http://loinc.org',
                code: 'LA6713-7',
                display: 'Limp; no movement',
              },
              {
                system: 'http://acme.ped/apgarmuscletone',
                code: '0',
              },
            ],
            text: '0. Limp; no movement',
          },
        },
        {
          code: {
            coding: [
              {
                system: 'http://loinc.org',
                code: '32410-3',
                display: '1 minute Apgar Respiratory effort',
              },
              {
                system: 'http://snomed.info/sct',
                code: '249224006',
                display: 'Apgar respiratory effort score',
              },
            ],
            text: 'Apgar respiratory effort score',
          },
          valueCodeableConcept: {
            coding: [
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/ordinalValue',
                    valueDecimal: 0,
                  },
                ],
                system: 'http://loinc.org',
                code: 'LA6725-1',
                display: 'Not breathing',
              },
              {
                system: 'http://acme.ped/apgarrespiratoryeffort',
                code: '0',
              },
            ],
            text: '0. Not breathing',
          },
        },
      ],
    });

    const { isValid, operationOutcome } = observation.validate();
    expect(isValid).toBe(true);
    expect(operationOutcome.issue).toHaveLength(0);
  });
});
describe('Observation Model', () => {
  it('should create an Observation with all attributes', () => {
    const observation = new Observation({
      identifier: [{ system: 'http://example.com', value: '12345' }],
      basedOn: [{ reference: 'ServiceRequest/1' }],
      partOf: [{ reference: 'Procedure/1' }],
      status: 'final',
      _status: { id: 'status1' },
      category: [{ text: 'Vital Signs' }],
      code: { text: 'Blood Pressure' },
      subject: { reference: 'Patient/123' },
      focus: [{ reference: 'Condition/1' }],
      encounter: { reference: 'Encounter/1' },
      effectiveDateTime: '2023-10-01T00:00:00Z',
      _effectiveDateTime: { id: 'effectiveDateTime1' },
      effectivePeriod: { start: '2023-10-01', end: '2023-10-02' },
      effectiveTiming: { event: ['2023-10-01T00:00:00Z'] },
      effectiveInstant: '2023-10-01T00:00:00Z',
      _effectiveInstant: { id: 'effectiveInstant1' },
      issued: '2023-10-01T00:00:00Z',
      _issued: { id: 'issued1' },
      performer: [{ reference: 'Practitioner/1' }],
      valueQuantity: { value: 120, unit: 'mmHg' },
      valueCodeableConcept: { text: 'Normal' },
      valueString: '120/80',
      _valueString: { id: 'valueString1' },
      valueBoolean: true,
      _valueBoolean: { id: 'valueBoolean1' },
      valueInteger: 120,
      _valueInteger: { id: 'valueInteger1' },
      valueRange: { low: { value: 80 }, high: { value: 120 } },
      valueRatio: { numerator: { value: 1 }, denominator: { value: 2 } },
      valueSampledData: { data: '120 80', period: 1, dimensions: 2, origin: { value: 0 } },
      valueTime: '12:00:00',
      _valueTime: { id: 'valueTime1' },
      valueDateTime: '2023-10-01T00:00:00Z',
      _valueDateTime: { id: 'valueDateTime1' },
      valuePeriod: { start: '2023-10-01', end: '2023-10-02' },
      dataAbsentReason: { text: 'Not available' },
      interpretation: [{ text: 'Normal' }],
      note: [{ text: 'This is a note' }],
      bodySite: { text: 'Left arm' },
      method: { text: 'Auscultation' },
      specimen: { reference: 'Specimen/1' },
      device: { reference: 'Device/1' },
      referenceRange: [{ low: { value: 80 }, high: { value: 120 } }],
      hasMember: [{ reference: 'Observation/1' }],
      derivedFrom: [{ reference: 'Observation/2' }],
      component: [{ code: { text: 'Systolic' }, valueQuantity: { value: 120, unit: 'mmHg' } }],
    });

    expect(observation.identifier?.[0].value).toBe('12345');
    expect(observation.basedOn?.[0].reference).toBe('ServiceRequest/1');
    expect(observation.partOf?.[0].reference).toBe('Procedure/1');
    expect(observation.status).toBe('final');
    expect(observation._status?.id).toBe('status1');
    expect(observation.category?.[0].text).toBe('Vital Signs');
    expect(observation.code.text).toBe('Blood Pressure');
    expect(observation.subject?.reference).toBe('Patient/123');
    expect(observation.focus?.[0].reference).toBe('Condition/1');
    expect(observation.encounter?.reference).toBe('Encounter/1');
    expect(observation.effectiveDateTime).toBe('2023-10-01T00:00:00Z');
    expect(observation._effectiveDateTime?.id).toBe('effectiveDateTime1');
    expect(observation.effectivePeriod?.start).toBe('2023-10-01');
    expect(observation.effectiveTiming?.event?.[0]).toBe('2023-10-01T00:00:00Z');
    expect(observation.effectiveInstant).toBe('2023-10-01T00:00:00Z');
    expect(observation._effectiveInstant?.id).toBe('effectiveInstant1');
    expect(observation.issued).toBe('2023-10-01T00:00:00Z');
    expect(observation._issued?.id).toBe('issued1');
    expect(observation.performer?.[0].reference).toBe('Practitioner/1');
    expect(observation.valueQuantity?.value).toBe(120);
    expect(observation.valueCodeableConcept?.text).toBe('Normal');
    expect(observation.valueString).toBe('120/80');
    expect(observation._valueString?.id).toBe('valueString1');
    expect(observation.valueBoolean).toBe(true);
    expect(observation._valueBoolean?.id).toBe('valueBoolean1');
    expect(observation.valueInteger).toBe(120);
    expect(observation._valueInteger?.id).toBe('valueInteger1');
    expect(observation.valueRange?.low?.value).toBe(80);
    expect(observation.valueRatio?.numerator?.value).toBe(1);
    expect(observation.valueSampledData?.data).toBe('120 80');
    expect(observation.valueTime).toBe('12:00:00');
    expect(observation._valueTime?.id).toBe('valueTime1');
    expect(observation.valueDateTime).toBe('2023-10-01T00:00:00Z');
    expect(observation._valueDateTime?.id).toBe('valueDateTime1');
    expect(observation.valuePeriod?.start).toBe('2023-10-01');
    expect(observation.dataAbsentReason?.text).toBe('Not available');
    expect(observation.interpretation?.[0].text).toBe('Normal');
    expect(observation.note?.[0].text).toBe('This is a note');
    expect(observation.bodySite?.text).toBe('Left arm');
    expect(observation.method?.text).toBe('Auscultation');
    expect(observation.specimen?.reference).toBe('Specimen/1');
    expect(observation.device?.reference).toBe('Device/1');
    expect(observation.referenceRange?.[0].low?.value).toBe(80);
    expect(observation.hasMember?.[0].reference).toBe('Observation/1');
    expect(observation.derivedFrom?.[0].reference).toBe('Observation/2');
    expect(observation.component?.[0].code.text).toBe('Systolic');
    expect(observation.component?.[0].valueQuantity?.value).toBe(120);
  });

  it('should create an Observation with default values', () => {
    const observation = new Observation();
    expect(observation.resourceType).toBe('Observation');
    expect(observation.identifier).toBeUndefined();
    expect(observation.basedOn).toBeUndefined();
    expect(observation.partOf).toBeUndefined();
    expect(observation.status).toBeUndefined();
    expect(observation._status).toBeUndefined();
    expect(observation.category).toBeUndefined();
    expect(observation.code).toBeUndefined();
    expect(observation.subject).toBeUndefined();
    expect(observation.focus).toBeUndefined();
    expect(observation.encounter).toBeUndefined();
    expect(observation.effectiveDateTime).toBeUndefined();
    expect(observation._effectiveDateTime).toBeUndefined();
    expect(observation.effectivePeriod).toBeUndefined();
    expect(observation.effectiveTiming).toBeUndefined();
    expect(observation.effectiveInstant).toBeUndefined();
    expect(observation._effectiveInstant).toBeUndefined();
    expect(observation.issued).toBeUndefined();
    expect(observation._issued).toBeUndefined();
    expect(observation.performer).toBeUndefined();
    expect(observation.valueQuantity).toBeUndefined();
    expect(observation.valueCodeableConcept).toBeUndefined();
    expect(observation.valueString).toBeUndefined();
    expect(observation._valueString).toBeUndefined();
    expect(observation.valueBoolean).toBeUndefined();
    expect(observation._valueBoolean).toBeUndefined();
    expect(observation.valueInteger).toBeUndefined();
    expect(observation._valueInteger).toBeUndefined();
    expect(observation.valueRange).toBeUndefined();
    expect(observation.valueRatio).toBeUndefined();
    expect(observation.valueSampledData).toBeUndefined();
    expect(observation.valueTime).toBeUndefined();
    expect(observation._valueTime).toBeUndefined();
    expect(observation.valueDateTime).toBeUndefined();
    expect(observation._valueDateTime).toBeUndefined();
    expect(observation.valuePeriod).toBeUndefined();
    expect(observation.dataAbsentReason).toBeUndefined();
    expect(observation.interpretation).toBeUndefined();
    expect(observation.note).toBeUndefined();
    expect(observation.bodySite).toBeUndefined();
    expect(observation.method).toBeUndefined();
    expect(observation.specimen).toBeUndefined();
    expect(observation.device).toBeUndefined();
    expect(observation.referenceRange).toBeUndefined();
    expect(observation.hasMember).toBeUndefined();
    expect(observation.derivedFrom).toBeUndefined();
    expect(observation.component).toBeUndefined();
  });

  it('should create an Observation with provided values', () => {
    const observation = new Observation({
      status: 'final',
      code: { text: 'Blood Pressure' },
    });
    expect(observation.status).toBe('final');
    expect(observation.code?.text).toBe('Blood Pressure');
  });

  it('should serialize an Observation to JSON', () => {
    const observation = new Observation({
      status: 'final',
      code: { text: 'Blood Pressure' },
    });
    const json = observation.toJson();
    expect(json.status).toBe('final');
    expect(json.code.text).toBe('Blood Pressure');
  });

  it('should return a string representation of the Observation', () => {
    const observation = new Observation({
      status: 'final',
      code: { text: 'Blood Pressure' },
    });
    const str = observation.toString();
    expect(str).toContain('Observation');
    expect(str).toContain('final');
    expect(str).toContain('Blood Pressure');
  });

  it('should return a pretty string representation of the Observation', () => {
    const observation = new Observation({
      status: 'final',
      code: { text: 'Blood Pressure' },
    });
    const prettyStr = observation.toPrettyString();
    expect(prettyStr).toContain('Observation');
    expect(prettyStr).toContain('final');
    expect(prettyStr).toContain('Blood Pressure');
  });

  it('should return a serialized string representation of the model', () => {
    const observation = new Observation({
      status: 'final',
      code: { text: 'Blood Pressure' },
    });
    const serialized = observation.serialize();
    expect(serialized).toContain('Observation');
    expect(serialized).toContain('final');
    expect(serialized).toContain('Blood Pressure');
  });

  it('should validate a valid Observation', () => {
    const observation = new Observation({
      status: 'final',
      code: { text: 'Blood Pressure' },
    });
    const { isValid, operationOutcome } = observation.validate();
    expect(isValid).toBe(true);
    expect(operationOutcome.issue).toHaveLength(0);
  });

  it('should invalidate an Observation with missing required fields', () => {
    const observation = new Observation();
    const { isValid, operationOutcome } = observation.validate();
    expect(isValid).toBe(false);
    expect(operationOutcome.issue).not.toHaveLength(0);
  });

  it('should handle Observation with all fields', () => {
    const observation = new Observation({
      status: 'final',
      code: { text: 'Blood Pressure' },
      subject: { reference: 'Patient/123' },
      effectiveDateTime: '2023-10-01T00:00:00Z',
    });
    expect(observation.status).toBe('final');
    expect(observation.code?.text).toBe('Blood Pressure');
    expect(observation.subject?.reference).toBe('Patient/123');
    expect(observation.effectiveDateTime).toBe('2023-10-01T00:00:00Z');
  });

  it('should handle Observation with invalid status', () => {
    const observation = new Observation({
      status: 'invalid-status' as any,
      code: { text: 'Blood Pressure' },
    });
    const { isValid, operationOutcome } = observation.validate();
    expect(isValid).toBe(false);
    expect(operationOutcome.issue).not.toHaveLength(0);
  });

  it('should handle Observation with invalid code', () => {
    const observation = new Observation({
      status: 'final',
      code: { text: '' },
    });
    const { isValid, operationOutcome } = observation.validate();
    expect(isValid).toBe(false);
    expect(operationOutcome.issue).not.toHaveLength(0);
  });
});
describe('ObservationBuilder', () => {
  it('should build an Observation with default values', () => {
    const builder = new ObservationBuilder();
    const observation = builder.build();
    expect(observation.resourceType).toBe('Observation');
    expect(observation.status).toBeUndefined();
    expect(observation.code).toBeUndefined();
  });

  it('should build an Observation with provided values', () => {
    const builder = new ObservationBuilder().setStatus('final').setCode({ text: 'Blood Pressure' });
    const observation = builder.build();
    expect(observation.status).toBe('final');
    expect(observation.code?.text).toBe('Blood Pressure');
  });

  it('should add identifier correctly', () => {
    const identifier = { system: 'http://example.com', value: '12345' };
    const builder = new ObservationBuilder().addIdentifier(identifier);
    const observation = builder.build();
    expect(observation.identifier?.[0].value).toBe('12345');
  });

  it('should add basedOn correctly', () => {
    const basedOn = { reference: 'ServiceRequest/1' };
    const builder = new ObservationBuilder().addBasedOn(basedOn);
    const observation = builder.build();
    expect(observation.basedOn?.[0].reference).toBe('ServiceRequest/1');
  });

  it('should add partOf correctly', () => {
    const partOf = { reference: 'Procedure/1' };
    const builder = new ObservationBuilder().addPartOf(partOf);
    const observation = builder.build();
    expect(observation.partOf?.[0].reference).toBe('Procedure/1');
  });

  it('should set effectiveDateTime correctly', () => {
    const builder = new ObservationBuilder().setEffectiveDateTime('2023-10-01T00:00:00Z');
    const observation = builder.build();
    expect(observation.effectiveDateTime).toBe('2023-10-01T00:00:00Z');
  });

  it('should add performer correctly', () => {
    const performer = { reference: 'Practitioner/1' };
    const builder = new ObservationBuilder().addPerformer(performer);
    const observation = builder.build();
    expect(observation.performer?.[0].reference).toBe('Practitioner/1');
  });

  it('should add primitive extension correctly', () => {
    const element = { extension: [{ url: 'http://example.com', valueString: 'test' }] } as IElement;
    const builder = new ObservationBuilder().addPrimitiveExtension('_status', element);
    const observation = builder.build();
    expect(observation._status?.extension?.[0].valueString).toBe('test');
  });

  it('should parse JSON correctly', () => {
    const json = {
      resourceType: 'Observation',
      status: 'final',
      code: { text: 'Blood Pressure' },
    };
    const builder = new ObservationBuilder().fromJSON(json);
    const observation = builder.build();
    expect(observation.resourceType).toBe('Observation');
    expect(observation.status).toBe('final');
    expect(observation.code?.text).toBe('Blood Pressure');
  });

  it('should handle invalid status', () => {
    const builder = new ObservationBuilder().setStatus('invalid-status' as ObservationStatusType);
    const observation = builder.build();
    expect(observation.status).toBe('invalid-status');
  });

  it('should handle all attributes', () => {
    const builder = new ObservationBuilder()
      .addIdentifier({ system: 'http://example.com', value: '12345' })
      .addBasedOn({ reference: 'ServiceRequest/1' })
      .addPartOf({ reference: 'Procedure/1' })
      .setStatus('final')
      .addCategory({ text: 'Vital Signs' })
      .setCode({ text: 'Blood Pressure' })
      .setSubject({ reference: 'Patient/123' })
      .addFocus({ reference: 'Condition/1' })
      .setEncounter({ reference: 'Encounter/1' })
      .setEffectiveDateTime('2023-10-01T00:00:00Z')
      .setIssued('2023-10-01T00:00:00Z')
      .addPerformer({ reference: 'Practitioner/1' })
      .setValueQuantity({ value: 120, unit: 'mmHg' })
      .setValueCodeableConcept({ text: 'Normal' })
      .setValueString('120/80')
      .setValueBoolean(true)
      .setValueInteger(120)
      .setValueRange({ low: { value: 80 }, high: { value: 120 } })
      .setValueRatio({ numerator: { value: 1 }, denominator: { value: 2 } })
      .setValueSampledData({ data: '120 80', period: 1, dimensions: 2, origin: { value: 0 } })
      .setValueTime('12:00:00')
      .setValueDateTime('2023-10-01T00:00:00Z')
      .setValuePeriod({ start: '2023-10-01', end: '2023-10-02' })
      .setDataAbsentReason({ text: 'Not available' })
      .addInterpretation({ text: 'Normal' })
      .addNote({ text: 'This is a note' })
      .setBodySite({ text: 'Left arm' })
      .setMethod({ text: 'Auscultation' })
      .setSpecimen({ reference: 'Specimen/1' })
      .setDevice({ reference: 'Device/1' })
      .addReferenceRange({ low: { value: 80 }, high: { value: 120 } })
      .addHasMember({ reference: 'Observation/1' })
      .addDerivedFrom({ reference: 'Observation/2' })
      .addComponent({ code: { text: 'Systolic' }, valueQuantity: { value: 120, unit: 'mmHg' } });
    const observation = builder.build();
    expect(observation.identifier?.[0].value).toBe('12345');
    expect(observation.basedOn?.[0].reference).toBe('ServiceRequest/1');
    expect(observation.partOf?.[0].reference).toBe('Procedure/1');
    expect(observation.status).toBe('final');
    expect(observation.category?.[0].text).toBe('Vital Signs');
    expect(observation.code.text).toBe('Blood Pressure');
    expect(observation.subject?.reference).toBe('Patient/123');
    expect(observation.focus?.[0].reference).toBe('Condition/1');
    expect(observation.encounter?.reference).toBe('Encounter/1');
    expect(observation.effectiveDateTime).toBe('2023-10-01T00:00:00Z');
    expect(observation.issued).toBe('2023-10-01T00:00:00Z');
    expect(observation.performer?.[0].reference).toBe('Practitioner/1');
    expect(observation.valueQuantity?.value).toBe(120);
    expect(observation.valueCodeableConcept?.text).toBe('Normal');
    expect(observation.valueString).toBe('120/80');
    expect(observation.valueBoolean).toBe(true);
    expect(observation.valueInteger).toBe(120);
    expect(observation.valueRange?.low?.value).toBe(80);
    expect(observation.valueRatio?.numerator?.value).toBe(1);
    expect(observation.valueSampledData?.data).toBe('120 80');
    expect(observation.valueTime).toBe('12:00:00');
    expect(observation.valueDateTime).toBe('2023-10-01T00:00:00Z');
    expect(observation.valuePeriod?.start).toBe('2023-10-01');
    expect(observation.dataAbsentReason?.text).toBe('Not available');
    expect(observation.interpretation?.[0].text).toBe('Normal');
    expect(observation.note?.[0].text).toBe('This is a note');
    expect(observation.bodySite?.text).toBe('Left arm');
    expect(observation.method?.text).toBe('Auscultation');
    expect(observation.specimen?.reference).toBe('Specimen/1');
    expect(observation.device?.reference).toBe('Device/1');
    expect(observation.referenceRange?.[0].low?.value).toBe(80);
    expect(observation.hasMember?.[0].reference).toBe('Observation/1');
    expect(observation.derivedFrom?.[0].reference).toBe('Observation/2');
    expect(observation.component?.[0].code.text).toBe('Systolic');
    expect(observation.component?.[0].valueQuantity?.value).toBe(120);
  });
});
describe('ObservationValidator', () => {
  let errors: IOperationOutcomeIssue[];

  beforeEach(() => {
    errors = [];
  });

  it('should validate a valid Observation model', () => {
    const validObservation = {
      resourceType: 'Observation',
      status: 'final',
      code: { text: 'Blood Pressure' },
    };
    ObservationValidator(validObservation as any, 'Observation', errors);
    expect(errors).toHaveLength(0);
  });

  it('should invalidate an Observation model with missing required fields', () => {
    const invalidObservation = {
      resourceType: 'Observation',
    };
    ObservationValidator(invalidObservation as any, 'Observation', errors);
    expect(errors).not.toHaveLength(0);
  });

  it('should invalidate an Observation model with invalid status', () => {
    const invalidObservation = {
      resourceType: 'Observation',
      status: 'invalid-status',
      code: { text: 'Blood Pressure' },
    };
    ObservationValidator(invalidObservation as any, 'Observation', errors);
    expect(errors).not.toHaveLength(0);
  });

  it('should validate an Observation model with all fields', () => {
    const validObservation = {
      resourceType: 'Observation',
      status: 'final',
      code: { text: 'Blood Pressure' },
      subject: { reference: 'Patient/123' },
      effectiveDateTime: '2023-10-01T00:00:00Z',
      performer: [{ reference: 'Practitioner/1' }],
    };
    ObservationValidator(validObservation as any, 'Observation', errors);
    expect(errors).toHaveLength(0);
  });

  it('should invalidate an Observation model with invalid code', () => {
    const invalidObservation = {
      resourceType: 'Observation',
      status: 'final',
      code: { text: '' },
    };
    ObservationValidator(invalidObservation as any, 'Observation', errors);
    expect(errors).not.toHaveLength(0);
  });
});
