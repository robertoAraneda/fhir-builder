import { contextR4 } from '../../../src';
import {
  IAge,
  IAnnotation,
  ICodeableConcept,
  IPeriod,
  IProcedure,
  IProcedureFocalDevice,
  IProcedurePerformer,
  IRange,
  IReference,
} from 'fhirtypes/dist/r4';

const { Procedure, ProcedureBuilder, ProcedureValidator } = contextR4();

describe('Procedure Examples FHIR R4', () => {
  it('General Procedure Example', () => {
    const procedure = new Procedure({
      resourceType: 'Procedure',
      id: 'example',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Routine Appendectomy</div>',
      },
      status: 'completed',
      code: {
        coding: [
          {
            system: 'http://snomed.info/sct',
            code: '80146002',
            display: 'Appendectomy (Procedure)',
          },
        ],
        text: 'Appendectomy',
      },
      subject: {
        reference: 'Patient/example',
      },
      performedDateTime: '2013-04-05',
      recorder: {
        reference: 'Practitioner/example',
        display: 'Dr Cecil Surgeon',
      },
      asserter: {
        reference: 'Practitioner/example',
        display: 'Dr Cecil Surgeon',
      },
      performer: [
        {
          actor: {
            reference: 'Practitioner/example',
            display: 'Dr Cecil Surgeon',
          },
        },
      ],
      reasonCode: [
        {
          text: 'Generalized abdominal pain 24 hours. Localized in RIF with rebound and guarding',
        },
      ],
      followUp: [
        {
          text: 'ROS 5 days  - 2013-04-10',
        },
      ],
      note: [
        {
          text: 'Routine Appendectomy. Appendix was inflamed and in retro-caecal position',
        },
      ],
    });

    const { isValid, operationOutcome } = procedure.validate();
    expect(isValid).toBeTruthy();
    expect(operationOutcome.issue).toHaveLength(0);
  });

  test('Example of a Biopsy', () => {
    const procedure = new Procedure({
      resourceType: 'Procedure',
      id: 'biopsy',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Biopsy of suspected melanoma L) arm</div>',
      },
      status: 'completed',
      category: {
        coding: [
          {
            system: 'http://snomed.info/sct',
            code: '103693007',
            display: 'Diagnostic procedure (procedure)',
          },
        ],
        text: 'Diagnostic procedure',
      },
      code: {
        coding: [
          {
            system: 'http://snomed.info/sct',
            code: '90105005',
            display: 'Biopsy of soft tissue of forearm (Procedure)',
          },
        ],
        text: 'Biopsy of suspected melanoma L) arm',
      },
      subject: {
        reference: 'Patient/example',
      },
      performedDateTime: '2014-02-03',
      performer: [
        {
          actor: {
            reference: 'Practitioner/example',
            display: 'Dr Bert Biopser',
          },
        },
      ],
      reasonCode: [
        {
          text: 'Dark lesion l) forearm. getting darker last 3 months.',
        },
      ],
      bodySite: [
        {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '368225008',
              display: 'Entire Left Forearm',
            },
          ],
          text: 'Left forearm',
        },
      ],
      complication: [
        {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '67750007',
              display: 'Ineffective airway clearance (finding)',
            },
          ],
          text: 'Ineffective airway clearance',
        },
      ],
      followUp: [
        {
          text: 'Review in clinic',
        },
      ],
      note: [
        {
          text: 'Standard Biopsy',
        },
      ],
      usedCode: [
        {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '79068005',
              display: 'Needle, device (physical object)',
            },
          ],
          text: '30-guage needle',
        },
      ],
    });

    const { isValid, operationOutcome } = procedure.validate();
    expect(isValid).toBeTruthy();
    expect(operationOutcome.issue).toHaveLength(0);
  });

  test('Real-world procedure example [1]', () => {
    const procedure = new Procedure({
      resourceType: 'Procedure',
      id: 'f201',
      text: {
        status: 'generated',
        div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f201</p><p><b>instantiatesCanonical</b>: <a>PlanDefinition/KDN5</a></p><p><b>status</b>: completed</p><p><b>code</b>: Chemotherapy <span>(Details : {SNOMED CT code '367336001' = 'Chemotherapy', given as 'Chemotherapy'})</span></p><p><b>subject</b>: <a>Roel</a></p><p><b>encounter</b>: <a>Roel's encounter on January 28th, 2013</a></p><p><b>performed</b>: 28/01/2013 1:31:00 PM --&gt; 28/01/2013 2:27:00 PM</p><h3>Performers</h3><table><tr><td>-</td><td><b>Function</b></td><td><b>Actor</b></td></tr><tr><td>*</td><td>Medical oncologist <span>(Details : {SNOMED CT code '310512001' = 'Medical oncologist', given as 'Medical oncologist'})</span></td><td><a>Dokter Bronsig</a></td></tr></table><p><b>reasonCode</b>: DiagnosticReport/f201 <span>(Details )</span></p><p><b>bodySite</b>: Sphenoid bone <span>(Details : {SNOMED CT code '272676008' = 'Entire sphenoid bone', given as 'Sphenoid bone'})</span></p><p><b>note</b>: Eerste neo-adjuvante TPF-kuur bij groot proces in sphenoid met intracraniale uitbreiding.</p></div>",
      },
      instantiatesCanonical: ['PlanDefinition/KDN5'],
      status: 'completed',
      code: {
        coding: [
          {
            system: 'http://snomed.info/sct',
            code: '367336001',
            display: 'Chemotherapy',
          },
        ],
      },
      subject: {
        reference: 'Patient/f201',
        display: 'Roel',
      },
      encounter: {
        reference: 'Encounter/f202',
        display: "Roel's encounter on January 28th, 2013",
      },
      performedPeriod: {
        start: '2013-01-28T13:31:00+01:00',
        end: '2013-01-28T14:27:00+01:00',
      },
      performer: [
        {
          function: {
            coding: [
              {
                system: 'http://snomed.info/sct',
                code: '310512001',
                display: 'Medical oncologist',
              },
            ],
          },
          actor: {
            reference: 'Practitioner/f201',
            display: 'Dokter Bronsig',
          },
        },
      ],
      reasonCode: [
        {
          text: 'DiagnosticReport/f201',
        },
      ],
      bodySite: [
        {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '272676008',
              display: 'Sphenoid bone',
            },
          ],
        },
      ],
      note: [
        {
          text: 'Eerste neo-adjuvante TPF-kuur bij groot proces in sphenoid met intracraniale uitbreiding.',
        },
      ],
    });

    const { isValid, operationOutcome } = procedure.validate();
    expect(isValid).toBeTruthy();
    expect(operationOutcome.issue).toHaveLength(0);
  });

  test('Real-world procedure example [2]', () => {
    const procedure = new Procedure({
      resourceType: 'Procedure',
      id: 'f001',
      text: {
        status: 'generated',
        div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f001</p><p><b>status</b>: completed</p><p><b>code</b>: Heart valve replacement <span>(Details : {SNOMED CT code '34068001' = 'Heart valve replacement', given as 'Heart valve replacement'})</span></p><p><b>subject</b>: <a>P. van de Heuvel</a></p><p><b>encounter</b>: <a>Encounter/f001</a></p><p><b>performed</b>: 26/06/2011 --&gt; 27/06/2011</p><h3>Performers</h3><table><tr><td>-</td><td><b>Function</b></td><td><b>Actor</b></td></tr><tr><td>*</td><td>Care role <span>(Details : {urn:oid:2.16.840.1.113883.2.4.15.111 code '01.000' = '01.000', given as 'Arts'})</span></td><td><a>P. Voigt</a></td></tr></table><p><b>reasonCode</b>: Heart valve disorder <span>(Details )</span></p><p><b>bodySite</b>: Heart valve structure <span>(Details : {SNOMED CT code '17401000' = 'Cardiac valve', given as 'Heart valve structure'})</span></p><p><b>outcome</b>: improved blood circulation <span>(Details )</span></p><p><b>report</b>: <a>Lab results blood test</a></p><p><b>followUp</b>: described in care plan <span>(Details )</span></p></div>",
      },
      status: 'completed',
      code: {
        coding: [
          {
            system: 'http://snomed.info/sct',
            code: '34068001',
            display: 'Heart valve replacement',
          },
        ],
      },
      subject: {
        reference: 'Patient/f001',
        display: 'P. van de Heuvel',
      },
      encounter: {
        reference: 'Encounter/f001',
      },
      performedPeriod: {
        start: '2011-06-26',
        end: '2011-06-27',
      },
      performer: [
        {
          function: {
            coding: [
              {
                system: 'urn:oid:2.16.840.1.113883.2.4.15.111',
                code: '01.000',
                display: 'Arts',
              },
            ],
            text: 'Care role',
          },
          actor: {
            reference: 'Practitioner/f002',
            display: 'P. Voigt',
          },
        },
      ],
      reasonCode: [
        {
          text: 'Heart valve disorder',
        },
      ],
      bodySite: [
        {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '17401000',
              display: 'Heart valve structure',
            },
          ],
        },
      ],
      outcome: {
        text: 'improved blood circulation',
      },
      report: [
        {
          reference: 'DiagnosticReport/f001',
          display: 'Lab results blood test',
        },
      ],
      followUp: [
        {
          text: 'described in care plan',
        },
      ],
    });

    const { isValid, operationOutcome } = procedure.validate();
    expect(isValid).toBeTruthy();
    expect(operationOutcome.issue).toHaveLength(0);
  });

  test('Real-world procedure example [3]', () => {
    const procedure = new Procedure({
      resourceType: 'Procedure',
      id: 'f002',
      text: {
        status: 'generated',
        div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f002</p><p><b>status</b>: completed</p><p><b>code</b>: Partial lobectomy of lung <span>(Details : {SNOMED CT code '359615001' = 'Partial lobectomy of lung', given as 'Partial lobectomy of lung'})</span></p><p><b>subject</b>: <a>P. van de Heuvel</a></p><p><b>encounter</b>: <a>Encounter/f002</a></p><p><b>performed</b>: 08/03/2013 9:00:10 AM --&gt; 08/03/2013 9:30:10 AM</p><h3>Performers</h3><table><tr><td>-</td><td><b>Function</b></td><td><b>Actor</b></td></tr><tr><td>*</td><td>Care role <span>(Details : {urn:oid:2.16.840.1.113883.2.4.15.111 code '01.000' = '01.000', given as 'Arts'})</span></td><td><a>M.I.M. Versteegh</a></td></tr></table><p><b>reasonCode</b>: Malignant tumor of lung <span>(Details )</span></p><p><b>bodySite</b>: Lung structure <span>(Details : {SNOMED CT code '39607008' = 'Lung', given as 'Lung structure'})</span></p><p><b>outcome</b>: improved blood circulation <span>(Details )</span></p><p><b>report</b>: <a>Lab results blood test</a></p><p><b>followUp</b>: described in care plan <span>(Details )</span></p></div>",
      },
      status: 'completed',
      code: {
        coding: [
          {
            system: 'http://snomed.info/sct',
            code: '359615001',
            display: 'Partial lobectomy of lung',
          },
        ],
      },
      subject: {
        reference: 'Patient/f001',
        display: 'P. van de Heuvel',
      },
      encounter: {
        reference: 'Encounter/f002',
      },
      performedPeriod: {
        start: '2013-03-08T09:00:10+01:00',
        end: '2013-03-08T09:30:10+01:00',
      },
      performer: [
        {
          function: {
            coding: [
              {
                system: 'urn:oid:2.16.840.1.113883.2.4.15.111',
                code: '01.000',
                display: 'Arts',
              },
            ],
            text: 'Care role',
          },
          actor: {
            reference: 'Practitioner/f003',
            display: 'M.I.M. Versteegh',
          },
        },
      ],
      reasonCode: [
        {
          text: 'Malignant tumor of lung',
        },
      ],
      bodySite: [
        {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '39607008',
              display: 'Lung structure',
            },
          ],
        },
      ],
      outcome: {
        text: 'improved blood circulation',
      },
      report: [
        {
          reference: 'DiagnosticReport/f001',
          display: 'Lab results blood test',
        },
      ],
      followUp: [
        {
          text: 'described in care plan',
        },
      ],
    });

    const { isValid, operationOutcome } = procedure.validate();
    expect(isValid).toBeTruthy();
    expect(operationOutcome.issue).toHaveLength(0);
  });

  test('Real-world procedure example [4]', () => {
    const procedure = new Procedure({
      resourceType: 'Procedure',
      id: 'f003',
      text: {
        status: 'generated',
        div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f003</p><p><b>status</b>: completed</p><p><b>code</b>: Incision of retropharyngeal abscess <span>(Details : {SNOMED CT code '172960003' = 'Incision of retropharyngeal abscess', given as 'Incision of retropharyngeal abscess'})</span></p><p><b>subject</b>: <a>P. van de Heuvel</a></p><p><b>encounter</b>: <a>Encounter/f003</a></p><p><b>performed</b>: 24/03/2013 9:30:10 AM --&gt; 24/03/2013 10:30:10 AM</p><h3>Performers</h3><table><tr><td>-</td><td><b>Function</b></td><td><b>Actor</b></td></tr><tr><td>*</td><td>Care role <span>(Details : {urn:oid:2.16.840.1.113883.2.4.15.111 code '01.000' = '01.000', given as 'Arts'})</span></td><td><a>E.M.J.M. van den broek</a></td></tr></table><p><b>reasonCode</b>: abcess in retropharyngeal area <span>(Details )</span></p><p><b>bodySite</b>: Retropharyngeal area <span>(Details : {SNOMED CT code '83030008' = 'Retropharyngeal area', given as 'Retropharyngeal area'})</span></p><p><b>outcome</b>: removal of the retropharyngeal abscess <span>(Details )</span></p><p><b>report</b>: <a>Lab results blood test</a></p><p><b>followUp</b>: described in care plan <span>(Details )</span></p></div>",
      },
      status: 'completed',
      code: {
        coding: [
          {
            system: 'http://snomed.info/sct',
            code: '172960003',
            display: 'Incision of retropharyngeal abscess',
          },
        ],
      },
      subject: {
        reference: 'Patient/f001',
        display: 'P. van de Heuvel',
      },
      encounter: {
        reference: 'Encounter/f003',
      },
      performedPeriod: {
        start: '2013-03-24T09:30:10+01:00',
        end: '2013-03-24T10:30:10+01:00',
      },
      performer: [
        {
          function: {
            coding: [
              {
                system: 'urn:oid:2.16.840.1.113883.2.4.15.111',
                code: '01.000',
                display: 'Arts',
              },
            ],
            text: 'Care role',
          },
          actor: {
            reference: 'Practitioner/f001',
            display: 'E.M.J.M. van den broek',
          },
        },
      ],
      reasonCode: [
        {
          text: 'abcess in retropharyngeal area',
        },
      ],
      bodySite: [
        {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '83030008',
              display: 'Retropharyngeal area',
            },
          ],
        },
      ],
      outcome: {
        text: 'removal of the retropharyngeal abscess',
      },
      report: [
        {
          reference: 'DiagnosticReport/f001',
          display: 'Lab results blood test',
        },
      ],
      followUp: [
        {
          text: 'described in care plan',
        },
      ],
    });

    const { isValid, operationOutcome } = procedure.validate();
    expect(isValid).toBeTruthy();
    expect(operationOutcome.issue).toHaveLength(0);
  });

  test('Real-world procedure example [5]', () => {
    const procedure = new Procedure({
      resourceType: 'Procedure',
      id: 'f004',
      text: {
        status: 'generated',
        div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f004</p><p><b>status</b>: completed</p><p><b>code</b>: Tracheotomy <span>(Details : {SNOMED CT code '48387007' = 'Incision of trachea', given as 'Tracheotomy'})</span></p><p><b>subject</b>: <a>P. van de Heuvel</a></p><p><b>encounter</b>: <a>Encounter/f003</a></p><p><b>performed</b>: 22/03/2013 9:30:10 AM --&gt; 22/03/2013 10:30:10 AM</p><h3>Performers</h3><table><tr><td>-</td><td><b>Function</b></td><td><b>Actor</b></td></tr><tr><td>*</td><td>Care role <span>(Details : {urn:oid:2.16.840.1.113883.2.4.15.111 code '01.000' = '01.000', given as 'Arts'})</span></td><td><a>A. Langeveld</a></td></tr></table><p><b>reasonCode</b>: ensure breathing during surgery <span>(Details )</span></p><p><b>bodySite</b>: Retropharyngeal area <span>(Details : {SNOMED CT code '83030008' = 'Retropharyngeal area', given as 'Retropharyngeal area'})</span></p><p><b>outcome</b>: removal of the retropharyngeal abscess <span>(Details )</span></p><p><b>report</b>: <a>???????????</a></p><p><b>followUp</b>: described in care plan <span>(Details )</span></p></div>",
      },
      status: 'completed',
      code: {
        coding: [
          {
            system: 'http://snomed.info/sct',
            code: '48387007',
            display: 'Tracheotomy',
          },
        ],
      },
      subject: {
        reference: 'Patient/f001',
        display: 'P. van de Heuvel',
      },
      encounter: {
        reference: 'Encounter/f003',
      },
      performedPeriod: {
        start: '2013-03-22T09:30:10+01:00',
        end: '2013-03-22T10:30:10+01:00',
      },
      performer: [
        {
          function: {
            coding: [
              {
                system: 'urn:oid:2.16.840.1.113883.2.4.15.111',
                code: '01.000',
                display: 'Arts',
              },
            ],
            text: 'Care role',
          },
          actor: {
            reference: 'Practitioner/f005',
            display: 'A. Langeveld',
          },
        },
      ],
      reasonCode: [
        {
          text: 'ensure breathing during surgery',
        },
      ],
      bodySite: [
        {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '83030008',
              display: 'Retropharyngeal area',
            },
          ],
        },
      ],
      outcome: {
        text: 'removal of the retropharyngeal abscess',
      },
      report: [
        {
          reference: 'DiagnosticReport/f001',
          display: '???????????',
        },
      ],
      followUp: [
        {
          text: 'described in care plan',
        },
      ],
    });

    const { isValid, operationOutcome } = procedure.validate();
    expect(isValid).toBeTruthy();
    expect(operationOutcome.issue).toHaveLength(0);
  });

  test('Example of a device manipulation', () => {
    const procedure = new Procedure({
      resourceType: 'Procedure',
      id: 'example-implant',
      text: {
        status: 'generated',
        div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example-implant</p><p><b>status</b>: completed</p><p><b>code</b>: Implant Pacemaker <span>(Details : {SNOMED CT code '25267002' = 'Insertion of intracardiac pacemaker', given as 'Insertion of intracardiac pacemaker (procedure)'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>performed</b>: 05/04/2015</p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Dr Cecil Surgeon</a></td></tr></table><p><b>reasonCode</b>: Bradycardia <span>(Details )</span></p><p><b>followUp</b>: ROS 5 days  - 2013-04-10 <span>(Details )</span></p><p><b>note</b>: Routine Appendectomy. Appendix was inflamed and in retro-caecal position</p><h3>FocalDevices</h3><table><tr><td>-</td><td><b>Action</b></td><td><b>Manipulated</b></td></tr><tr><td>*</td><td>Implanted <span>(Details : {http://hl7.org/fhir/device-action code 'implanted' = 'Implanted)</span></td><td><a>Device/example-pacemaker</a></td></tr></table></div>",
      },
      status: 'completed',
      code: {
        coding: [
          {
            system: 'http://snomed.info/sct',
            code: '25267002',
            display: 'Insertion of intracardiac pacemaker (procedure)',
          },
        ],
        text: 'Implant Pacemaker',
      },
      subject: {
        reference: 'Patient/example',
      },
      performedDateTime: '2015-04-05',
      performer: [
        {
          actor: {
            reference: 'Practitioner/example',
            display: 'Dr Cecil Surgeon',
          },
        },
      ],
      reasonCode: [
        {
          text: 'Bradycardia',
        },
      ],
      followUp: [
        {
          text: 'ROS 5 days  - 2013-04-10',
        },
      ],
      note: [
        {
          text: 'Routine Appendectomy. Appendix was inflamed and in retro-caecal position',
        },
      ],
      focalDevice: [
        {
          action: {
            coding: [
              {
                system: 'http://hl7.org/fhir/device-action',
                code: 'implanted',
              },
            ],
          },
          manipulated: {
            reference: 'Device/example-pacemaker',
          },
        },
      ],
    });
    const { isValid, operationOutcome } = procedure.validate();
    expect(isValid).toBeTruthy();
    expect(operationOutcome.issue).toHaveLength(0);
  });

  test('Example of ambulation procedure', () => {
    const procedure = new Procedure({
      resourceType: 'Procedure',
      id: 'ambulation',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Ambulation procedure was not done</div>',
      },
      identifier: [
        {
          value: '12345',
        },
      ],
      instantiatesUri: ['http://example.org/protocol-for-hypertension-during-pregnancy'],
      basedOn: [
        {
          reference: 'CarePlan/preg',
          display: 'Maternity care plan',
        },
      ],
      status: 'not-done',
      statusReason: {
        coding: [
          {
            system: 'http://snomed.info/sct',
            code: '398254007',
            display: '  Pre-eclampsia (disorder)',
          },
        ],
        text: 'Pre-eclampsia',
      },
      code: {
        coding: [
          {
            system: 'http://snomed.info/sct',
            code: '62013009',
            display: 'Ambulating patient (procedure)',
          },
        ],
        text: 'Ambulation',
      },
      subject: {
        reference: 'Patient/example',
      },
      performer: [
        {
          actor: {
            reference: 'Practitioner/f204',
            display: 'Carla Espinosa',
          },
          onBehalfOf: {
            reference: 'Organization/f001',
            display: 'University Medical Hospital',
          },
        },
      ],
      location: {
        reference: 'Location/1',
        display: 'Burgers University Medical Center, South Wing, second floor',
      },
      reasonReference: [
        {
          reference: 'Observation/blood-pressure',
          display: 'Blood Pressure',
        },
      ],
    });

    const { isValid, operationOutcome } = procedure.validate();
    expect(isValid).toBeTruthy();
    expect(operationOutcome.issue).toHaveLength(0);
  });

  test('Example of biopsy procedure that was part of a colonoscopy', () => {
    const procedure = new Procedure({
      resourceType: 'Procedure',
      id: 'colon-biopsy',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Biopsy of colon, which was part of colonoscopy</div>',
      },
      identifier: [
        {
          value: '12345',
        },
      ],
      partOf: [
        {
          reference: 'Procedure/colonoscopy',
          display: 'Colonoscopy',
        },
      ],
      status: 'completed',
      code: {
        coding: [
          {
            system: 'http://snomed.info/sct',
            code: '76164006',
            display: 'Biopsy of colon (procedure)',
          },
        ],
        text: 'Biopsy of colon',
      },
      subject: {
        reference: 'Patient/example',
      },
      performer: [
        {
          actor: {
            reference: 'Practitioner/example',
            display: 'Dr Adam Careful',
          },
        },
      ],
      location: {
        reference: 'Location/1',
        display: 'Burgers University Medical Center, South Wing, second floor',
      },
    });

    const { isValid, operationOutcome } = procedure.validate();
    expect(isValid).toBeTruthy();
    expect(operationOutcome.issue).toHaveLength(0);
  });

  test('Example of colonoscopy procedure with complication', () => {
    const procedure = new Procedure({
      resourceType: 'Procedure',
      id: 'colonoscopy',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Colonoscopy with complication</div>',
      },
      identifier: [
        {
          value: '12345',
        },
      ],
      status: 'completed',
      code: {
        coding: [
          {
            system: 'http://snomed.info/sct',
            code: '73761001',
            display: 'Colonoscopy (procedure)',
          },
        ],
        text: 'Colonoscopy',
      },
      subject: {
        reference: 'Patient/example',
      },
      performer: [
        {
          actor: {
            reference: 'Practitioner/example',
            display: 'Dr Adam Careful',
          },
        },
      ],
      location: {
        reference: 'Location/1',
        display: 'Burgers University Medical Center, South Wing, second floor',
      },
      complicationDetail: [
        {
          display: 'Perforated intestine condition',
        },
      ],
      usedReference: [
        {
          display: 'Colonoscope device',
        },
      ],
    });

    const { isValid, operationOutcome } = procedure.validate();
    expect(isValid).toBeTruthy();
    expect(operationOutcome.issue).toHaveLength(0);
  });

  test('Example of an appendectomy procedure that is primarily narrative', () => {
    const procedure = new Procedure({
      resourceType: 'Procedure',
      id: 'appendectomy-narrative',
      text: {
        status: 'additional',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Routine Appendectomy in April 2013 performed by Dr Cecil Surgeon</div>',
      },
      status: 'completed',
      subject: {
        reference: 'Patient/example',
      },
    });

    const { isValid, operationOutcome } = procedure.validate();
    expect(isValid).toBeTruthy();
    expect(operationOutcome.issue).toHaveLength(0);
  });

  test('Example of an obstetric procedure', () => {
    const procedure = new Procedure({
      resourceType: 'Procedure',
      id: 'ob',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Vaginal delivery of healthy male infant on June 2, 2012</div>',
      },
      status: 'completed',
      category: {
        coding: [
          {
            system: 'http://snomed.info/sct',
            code: '386637004',
            display: 'Obstetric procedure (procedure)',
          },
        ],
        text: 'OB',
      },
      code: {
        coding: [
          {
            system: 'http://snomed.info/sct',
            code: '22633006',
            display: 'Vaginal delivery, medical personnel present (procedure)',
          },
        ],
        text: 'Vaginal delivery',
      },
      subject: {
        display: 'Jane Doe',
      },
      performedDateTime: '2012-06-02',
      performer: [
        {
          actor: {
            display: 'Martha Midwife, RNP',
          },
        },
      ],
      location: {
        display: 'Women’s Hospital',
      },
      reasonCode: [
        {
          text: 'term pregnancy, active labor',
        },
      ],
      outcome: {
        text: 'delivery of healthy male infant',
      },
    });

    const { isValid, operationOutcome } = procedure.validate();
    expect(isValid).toBeTruthy();
    expect(operationOutcome.issue).toHaveLength(0);
  });

  test('Example of a physical therapy evaluation procedure', () => {
    const procedure = new Procedure({
      resourceType: 'Procedure',
      id: 'physical-therapy',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Assessment of passive range of motion for both knees on Sept 27, 2016 due to osteoarthritis</div>',
      },
      basedOn: [
        {
          reference: 'ServiceRequest/physical-therapy',
          display: 'Order for the assessment of passive range of motion',
        },
      ],
      status: 'completed',
      category: {
        coding: [
          {
            system: 'http://snomed.info/sct',
            code: '386053000',
            display: 'Evaluation procedure (procedure)',
          },
        ],
        text: 'Evaluation',
      },
      code: {
        coding: [
          {
            system: 'http://snomed.info/sct',
            code: '710830005',
            display: 'Assessment of passive range of motion (procedure)',
          },
        ],
        text: 'Assessment of passive range of motion',
      },
      subject: {
        reference: 'Patient/example',
      },
      performedDateTime: '2016-09-27',
      performer: [
        {
          actor: {
            display: 'Paul Therapist, PT',
          },
        },
      ],
      location: {
        display: 'Sawbones Orthopedic Clinic',
      },
      reasonCode: [
        {
          text: 'assessment of mobility limitations due to osteoarthritis',
        },
      ],
      bodySite: [
        {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '36701003',
              display: 'Both knees (body structure)',
            },
          ],
          text: 'Both knees',
        },
      ],
    });

    const { isValid, operationOutcome } = procedure.validate();
    expect(isValid).toBeTruthy();
    expect(operationOutcome.issue).toHaveLength(0);
  });

  test('Example of patient education', () => {
    const procedure = new Procedure({
      resourceType: 'Procedure',
      id: 'education',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Health education - breast examination for early detection of breast mass</div>',
      },
      basedOn: [
        {
          reference: 'ServiceRequest/education',
          display: 'Order for health education',
        },
      ],
      status: 'completed',
      category: {
        coding: [
          {
            system: 'http://snomed.info/sct',
            code: '311401005',
            display: 'Patient education (procedure)',
          },
        ],
        text: 'Education',
      },
      code: {
        coding: [
          {
            system: 'http://snomed.info/sct',
            code: '48023004',
            display: 'Breast self-examination technique education (procedure)',
          },
        ],
        text: 'Health education - breast examination',
      },
      subject: {
        display: 'Jane Doe',
      },
      performedDateTime: '2014-08-16',
      performer: [
        {
          actor: {
            display: 'Pamela Educator, RN',
          },
        },
      ],
      location: {
        display: 'Southside Community Health Center',
      },
      reasonCode: [
        {
          text: 'early detection of breast mass',
        },
      ],
    });

    const { isValid, operationOutcome } = procedure.validate();
    expect(isValid).toBeTruthy();
    expect(operationOutcome.issue).toHaveLength(0);
  });

  test("Example of personal care services provided at person's home", () => {
    const procedure = new Procedure({
      resourceType: 'Procedure',
      id: 'HCBS',
      text: {
        status: 'generated',
        div: "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t<p>\n\t\t\t\t<b> Personal care services provided at person's home</b>\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\t<b> Based On</b> : Peter's Long Term Services and Supports (LTSS) care plan</p>\n\t\t\t<p>\n\t\t\t\t<b> Status</b> : completed</p>\n\t\t\t<p>\n\t\t\t\t<b> Beneficiary</b> : Peter James</p>\n\t\t\t<p>\n\t\t\t\t<b> Service Name/Code</b> : Personal care services <span> (Details : {HCPCS code 'T1019' = 'Personal care services, per 15 minutes'})</span>\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\t<b> Service Date</b> : Apr 5, 2018</p>\n\t\t\t<p>\n\t\t\t\t<b> Service Provider</b> : Adam Careful</p>\n\t\t\t<p>\n\t\t\t\t<b> Service Delivery Address</b> : Peter's home</p>\n\t\t\t<p>\n\t\t\t\t<b> Service Comment</b> : Assisted with bathing and dressing, doing laundry, and meal preparation</p>\n\t\t</div>",
      },
      basedOn: [
        {
          display: "Peter's Long Term Service and Supports (LTSS) Care Plan",
        },
      ],
      status: 'completed',
      code: {
        coding: [
          {
            system: 'https://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets/Alpha-Numeric-HCPCS.html',
            code: 'T1019',
            display:
              'Personal care services, per 15 minutes, not for an inpatient or resident of a hospital, nursing facility, icf/mr or imd, part of the individualized plan of treatment.',
          },
        ],
        text: 'Personal care services',
      },
      subject: {
        reference: 'Patient/example',
        display: 'Peter James',
      },
      performedDateTime: '2018-04-05',
      performer: [
        {
          actor: {
            reference: 'Practitioner/example',
            display: 'Adam Careful',
          },
        },
      ],
      location: {
        reference: 'Location/ph',
        display: "Peter's Home",
      },
      note: [
        {
          text: 'Assisted with bathing and dressing, doing laundry, and meal preparation',
        },
      ],
    });

    const { isValid, operationOutcome } = procedure.validate();
    expect(isValid).toBeTruthy();
    expect(operationOutcome.issue).toHaveLength(0);
  });
});

describe('Procedure Model', () => {
  it('should initialize with default values', () => {
    const procedure = new Procedure();
    expect(procedure.resourceType).toBe('Procedure');
    expect(procedure.identifier).toBeUndefined();
    expect(procedure.instantiatesCanonical).toBeUndefined();
    expect(procedure.instantiatesUri).toBeUndefined();
    expect(procedure._instantiatesUri).toBeUndefined();
    expect(procedure.basedOn).toBeUndefined();
    expect(procedure.partOf).toBeUndefined();
    expect(procedure.status).toBeUndefined();
    expect(procedure._status).toBeUndefined();
    expect(procedure.statusReason).toBeUndefined();
    expect(procedure.category).toBeUndefined();
    expect(procedure.code).toBeUndefined();
    expect(procedure.subject).toBeUndefined();
    expect(procedure.encounter).toBeUndefined();
    expect(procedure.performedDateTime).toBeUndefined();
    expect(procedure._performedDateTime).toBeUndefined();
    expect(procedure.performedPeriod).toBeUndefined();
    expect(procedure.performedString).toBeUndefined();
    expect(procedure._performedString).toBeUndefined();
    expect(procedure.performedAge).toBeUndefined();
    expect(procedure.performedRange).toBeUndefined();
    expect(procedure.recorder).toBeUndefined();
    expect(procedure.asserter).toBeUndefined();
    expect(procedure.performer).toBeUndefined();
    expect(procedure.location).toBeUndefined();
    expect(procedure.reasonCode).toBeUndefined();
    expect(procedure.reasonReference).toBeUndefined();
    expect(procedure.bodySite).toBeUndefined();
    expect(procedure.outcome).toBeUndefined();
    expect(procedure.report).toBeUndefined();
    expect(procedure.complication).toBeUndefined();
    expect(procedure.complicationDetail).toBeUndefined();
    expect(procedure.followUp).toBeUndefined();
    expect(procedure.note).toBeUndefined();
    expect(procedure.focalDevice).toBeUndefined();
    expect(procedure.usedReference).toBeUndefined();
    expect(procedure.usedCode).toBeUndefined();
    expect(procedure.id).toBeUndefined();
    expect(procedure.meta).toBeUndefined();
    expect(procedure.implicitRules).toBeUndefined();
    expect(procedure._implicitRules).toBeUndefined();
    expect(procedure.language).toBeUndefined();
    expect(procedure._language).toBeUndefined();
    expect(procedure.text).toBeUndefined();
    expect(procedure.contained).toBeUndefined();
    expect(procedure.extension).toBeUndefined();
    expect(procedure.modifierExtension).toBeUndefined();
  });

  it('should initialize with provided values', () => {
    const procedure = new Procedure({
      status: 'completed',
      subject: { reference: 'Patient/123' } as IReference,
      id: 'procedure-1',
      language: 'en',
    });
    expect(procedure.status).toBe('completed');
    expect(procedure.subject.reference).toBe('Patient/123');
    expect(procedure.id).toBe('procedure-1');
    expect(procedure.language).toBe('en');
  });

  it('should return a JSON representation of the model', () => {
    const procedure = new Procedure({
      status: 'completed',
      subject: { reference: 'Patient/123' } as IReference,
      id: 'procedure-1',
      language: 'en',
    });
    const json = procedure.toJson();
    expect(json.status).toBe('completed');
    expect(json.subject.reference).toBe('Patient/123');
    expect(json.id).toBe('procedure-1');
    expect(json.language).toBe('en');
  });

  it('should return a string representation of the model', () => {
    const procedure = new Procedure({
      status: 'completed',
      subject: { reference: 'Patient/123' } as IReference,
      id: 'procedure-1',
      language: 'en',
    });
    const str = procedure.toString();
    expect(str).toContain('completed');
    expect(str).toContain('Patient/123');
    expect(str).toContain('procedure-1');
    expect(str).toContain('en');
  });

  it('should return a pretty string representation of the model', () => {
    const procedure = new Procedure({
      status: 'completed',
      subject: { reference: 'Patient/123' } as IReference,
      id: 'procedure-1',
      language: 'en',
    });
    const prettyStr = procedure.toPrettyString();
    expect(prettyStr).toContain('completed');
    expect(prettyStr).toContain('Patient/123');
    expect(prettyStr).toContain('procedure-1');
    expect(prettyStr).toContain('en');
  });

  it('should return a serialized string representation of the model', () => {
    const procedure = new Procedure({
      status: 'completed',
      subject: { reference: 'Patient/123' } as IReference,
      id: 'procedure-1',
      language: 'en',
    });
    const serialized = procedure.serialize();
    expect(serialized).toContain('completed');
    expect(serialized).toContain('Patient/123');
    expect(serialized).toContain('procedure-1');
    expect(serialized).toContain('en');
  });

  it('should validate a valid model', () => {
    const procedure = new Procedure({
      status: 'completed',
      subject: { reference: 'Patient/123' } as IReference,
      id: 'procedure-1',
      language: 'en',
    });
    const { isValid, operationOutcome } = procedure.validate();
    expect(isValid).toBe(true);
    expect(operationOutcome.issue).toHaveLength(0);
  });

  it('should invalidate an invalid model', () => {
    const procedure = new Procedure({
      status: 'invalid-status' as any,
      subject: { reference: 'Patient/123' } as IReference,
      id: 'procedure-1',
      language: 'en',
    });
    const { isValid, operationOutcome } = procedure.validate();
    expect(isValid).toBe(false);
    expect(operationOutcome.issue).toHaveLength(1);
  });
});

describe('ProcedureBuilder', () => {
  it('should build a Procedure with default values', () => {
    const builder = new ProcedureBuilder();
    const procedure = builder.build();
    expect(procedure.resourceType).toBe('Procedure');
    expect(procedure.identifier).toBeUndefined();
    expect(procedure.instantiatesCanonical).toBeUndefined();
    expect(procedure.instantiatesUri).toBeUndefined();
    expect(procedure.basedOn).toBeUndefined();
    expect(procedure.partOf).toBeUndefined();
    expect(procedure.status).toBeUndefined();
    expect(procedure.statusReason).toBeUndefined();
    expect(procedure.category).toBeUndefined();
    expect(procedure.code).toBeUndefined();
    expect(procedure.subject).toBeUndefined();
    expect(procedure.encounter).toBeUndefined();
    expect(procedure.performedDateTime).toBeUndefined();
    expect(procedure.performedPeriod).toBeUndefined();
    expect(procedure.performedString).toBeUndefined();
    expect(procedure.performedAge).toBeUndefined();
    expect(procedure.performedRange).toBeUndefined();
    expect(procedure.recorder).toBeUndefined();
    expect(procedure.asserter).toBeUndefined();
    expect(procedure.performer).toBeUndefined();
    expect(procedure.location).toBeUndefined();
    expect(procedure.reasonCode).toBeUndefined();
    expect(procedure.reasonReference).toBeUndefined();
    expect(procedure.bodySite).toBeUndefined();
    expect(procedure.outcome).toBeUndefined();
    expect(procedure.report).toBeUndefined();
    expect(procedure.complication).toBeUndefined();
    expect(procedure.complicationDetail).toBeUndefined();
    expect(procedure.followUp).toBeUndefined();
    expect(procedure.note).toBeUndefined();
    expect(procedure.focalDevice).toBeUndefined();
    expect(procedure.usedReference).toBeUndefined();
    expect(procedure.usedCode).toBeUndefined();
    expect(procedure.id).toBeUndefined();
    expect(procedure.meta).toBeUndefined();
    expect(procedure.implicitRules).toBeUndefined();
    expect(procedure.language).toBeUndefined();
    expect(procedure.text).toBeUndefined();
    expect(procedure.contained).toBeUndefined();
    expect(procedure.extension).toBeUndefined();
    expect(procedure.modifierExtension).toBeUndefined();
  });

  it('should set status correctly', () => {
    const builder = new ProcedureBuilder();
    const procedure = builder.setStatus('completed').build();
    expect(procedure.status).toBe('completed');
  });

  it('should set statusReason correctly', () => {
    const builder = new ProcedureBuilder();
    const statusReason = { text: 'Reason' } as ICodeableConcept;
    const procedure = builder.setStatusReason(statusReason).build();
    expect(procedure.statusReason?.text).toBe('Reason');
  });

  it('should set category correctly', () => {
    const builder = new ProcedureBuilder();
    const category = { text: 'Category' } as ICodeableConcept;
    const procedure = builder.setCategory(category).build();
    expect(procedure.category?.text).toBe('Category');
  });

  it('should set code correctly', () => {
    const builder = new ProcedureBuilder();
    const code = { text: 'Code' } as ICodeableConcept;
    const procedure = builder.setCode(code).build();
    expect(procedure.code?.text).toBe('Code');
  });

  it('should set subject correctly', () => {
    const builder = new ProcedureBuilder();
    const subject = { reference: 'Patient/123' } as IReference;
    const procedure = builder.setSubject(subject).build();
    expect(procedure.subject?.reference).toBe('Patient/123');
  });

  it('should set encounter correctly', () => {
    const builder = new ProcedureBuilder();
    const encounter = { reference: 'Encounter/123' } as IReference;
    const procedure = builder.setEncounter(encounter).build();
    expect(procedure.encounter?.reference).toBe('Encounter/123');
  });

  it('should set performedDateTime correctly', () => {
    const builder = new ProcedureBuilder();
    const procedure = builder.setPerformedDateTime('2023-01-01T00:00:00Z').build();
    expect(procedure.performedDateTime).toBe('2023-01-01T00:00:00Z');
  });

  it('should set performedPeriod correctly', () => {
    const builder = new ProcedureBuilder();
    const period = { start: '2023-01-01', end: '2023-01-02' } as IPeriod;
    const procedure = builder.setPerformedPeriod(period).build();
    expect(procedure.performedPeriod?.start).toBe('2023-01-01');
    expect(procedure.performedPeriod?.end).toBe('2023-01-02');
  });

  it('should set performedString correctly', () => {
    const builder = new ProcedureBuilder();
    const procedure = builder.setPerformedString('Performed String').build();
    expect(procedure.performedString).toBe('Performed String');
  });

  it('should set performedAge correctly', () => {
    const builder = new ProcedureBuilder();
    const age = { value: 30, unit: 'years' } as IAge;
    const procedure = builder.setPerformedAge(age).build();
    expect(procedure.performedAge?.value).toBe(30);
    expect(procedure.performedAge?.unit).toBe('years');
  });

  it('should set performedRange correctly', () => {
    const builder = new ProcedureBuilder();
    const range = { low: { value: 1 }, high: { value: 10 } } as IRange;
    const procedure = builder.setPerformedRange(range).build();
    expect(procedure.performedRange?.low?.value).toBe(1);
    expect(procedure.performedRange?.high?.value).toBe(10);
  });

  it('should set recorder correctly', () => {
    const builder = new ProcedureBuilder();
    const recorder = { reference: 'Practitioner/123' } as IReference;
    const procedure = builder.setRecorder(recorder).build();
    expect(procedure.recorder?.reference).toBe('Practitioner/123');
  });

  it('should set asserter correctly', () => {
    const builder = new ProcedureBuilder();
    const asserter = { reference: 'Practitioner/123' } as IReference;
    const procedure = builder.setAsserter(asserter).build();
    expect(procedure.asserter?.reference).toBe('Practitioner/123');
  });

  it('should add performer correctly', () => {
    const builder = new ProcedureBuilder();
    const performer = { actor: { reference: 'Practitioner/123' } } as IProcedurePerformer;
    const procedure = builder.addPerformer(performer).build();
    expect(procedure.performer?.[0].actor?.reference).toBe('Practitioner/123');
  });

  it('should set location correctly', () => {
    const builder = new ProcedureBuilder();
    const location = { reference: 'Location/123' } as IReference;
    const procedure = builder.setLocation(location).build();
    expect(procedure.location?.reference).toBe('Location/123');
  });

  it('should add reasonCode correctly', () => {
    const builder = new ProcedureBuilder();
    const reasonCode = { text: 'Reason Code' } as ICodeableConcept;
    const procedure = builder.addReasonCode(reasonCode).build();
    expect(procedure.reasonCode?.[0].text).toBe('Reason Code');
  });

  it('should add reasonReference correctly', () => {
    const builder = new ProcedureBuilder();
    const reasonReference = { reference: 'Condition/123' } as IReference;
    const procedure = builder.addReasonReference(reasonReference).build();
    expect(procedure.reasonReference?.[0].reference).toBe('Condition/123');
  });

  it('should add bodySite correctly', () => {
    const builder = new ProcedureBuilder();
    const bodySite = { text: 'Body Site' } as ICodeableConcept;
    const procedure = builder.addBodySite(bodySite).build();
    expect(procedure.bodySite?.[0].text).toBe('Body Site');
  });

  it('should set outcome correctly', () => {
    const builder = new ProcedureBuilder();
    const outcome = { text: 'Outcome' } as ICodeableConcept;
    const procedure = builder.setOutcome(outcome).build();
    expect(procedure.outcome?.text).toBe('Outcome');
  });

  it('should add report correctly', () => {
    const builder = new ProcedureBuilder();
    const report = { reference: 'DiagnosticReport/123' } as IReference;
    const procedure = builder.addReport(report).build();
    expect(procedure.report?.[0].reference).toBe('DiagnosticReport/123');
  });

  it('should add complication correctly', () => {
    const builder = new ProcedureBuilder();
    const complication = { text: 'Complication' } as ICodeableConcept;
    const procedure = builder.addComplication(complication).build();
    expect(procedure.complication?.[0].text).toBe('Complication');
  });

  it('should add complicationDetail correctly', () => {
    const builder = new ProcedureBuilder();
    const complicationDetail = { reference: 'Observation/123' } as IReference;
    const procedure = builder.addComplicationDetail(complicationDetail).build();
    expect(procedure.complicationDetail?.[0].reference).toBe('Observation/123');
  });

  it('should add followUp correctly', () => {
    const builder = new ProcedureBuilder();
    const followUp = { text: 'Follow Up' } as ICodeableConcept;
    const procedure = builder.addFollowUp(followUp).build();
    expect(procedure.followUp?.[0].text).toBe('Follow Up');
  });

  it('should add note correctly', () => {
    const builder = new ProcedureBuilder();
    const note = { text: 'Note' } as IAnnotation;
    const procedure = builder.addNote(note).build();
    expect(procedure.note?.[0].text).toBe('Note');
  });

  it('should add focalDevice correctly', () => {
    const builder = new ProcedureBuilder();
    const focalDevice = { action: { text: 'Action' } } as IProcedureFocalDevice;
    const procedure = builder.addFocalDevice(focalDevice).build();
    expect(procedure.focalDevice?.[0].action?.text).toBe('Action');
  });

  it('should add usedReference correctly', () => {
    const builder = new ProcedureBuilder();
    const usedReference = { reference: 'Device/123' } as IReference;
    const procedure = builder.addUsedReference(usedReference).build();
    expect(procedure.usedReference?.[0].reference).toBe('Device/123');
  });

  it('should add usedCode correctly', () => {
    const builder = new ProcedureBuilder();
    const usedCode = { text: 'Used Code' } as ICodeableConcept;
    const procedure = builder.addUsedCode(usedCode).build();
    expect(procedure.usedCode?.[0].text).toBe('Used Code');
  });
});

describe('ProcedureValidator', () => {
  it('should validate a valid Procedure object', () => {
    const procedure: IProcedure = {
      resourceType: 'Procedure',
      status: 'completed',
      subject: { reference: 'Patient/123' },
    };
    const { operationOutcome } = ProcedureValidator(procedure);
    expect(operationOutcome.issue.length).toBe(0);
  });

  it('should add an error if status is missing', () => {
    const procedure = {
      resourceType: 'Procedure',
      subject: { reference: 'Patient/123' },
    };
    const { operationOutcome } = ProcedureValidator(procedure);
    expect(operationOutcome.issue.length).toBeGreaterThan(0);
    expect(operationOutcome.issue[0].details?.text).toContain('status');
  });

  it('should add an error if subject is missing', () => {
    const procedure = {
      resourceType: 'Procedure',
      status: 'completed',
    };
    const { operationOutcome } = ProcedureValidator(procedure);
    expect(operationOutcome.issue.length).toBeGreaterThan(0);
    expect(operationOutcome.issue[0].details?.text).toContain('subject');
  });

  it('should add an error if status is not a valid enum value', () => {
    const procedure: IProcedure = {
      resourceType: 'Procedure',
      status: 'invalid-status' as any,
      subject: { reference: 'Patient/123' },
    };
    const { operationOutcome } = ProcedureValidator(procedure);
    expect(operationOutcome.issue.length).toBeGreaterThan(0);
    expect(operationOutcome.issue[0].details?.text).toContain('status');
  });

  it('should add an error if basedOn reference type is invalid', () => {
    const procedure: IProcedure = {
      resourceType: 'Procedure',
      status: 'completed',
      subject: { reference: 'Patient/123' },
      basedOn: [{ reference: 'InvalidReference/123' }],
    };
    const { operationOutcome } = ProcedureValidator(procedure);
    expect(operationOutcome.issue.length).toBeGreaterThan(0);
    expect(operationOutcome.issue[0].details?.text).toContain('basedOn');
  });

  it('should add an error if partOf reference type is invalid', () => {
    const procedure: IProcedure = {
      resourceType: 'Procedure',
      status: 'completed',
      subject: { reference: 'Patient/123' },
      partOf: [{ reference: 'InvalidReference/123' }],
    };
    const { operationOutcome } = ProcedureValidator(procedure);
    expect(operationOutcome.issue.length).toBeGreaterThan(0);
    expect(operationOutcome.issue[0].details?.text).toContain('partOf');
  });

  it('should add an error if performedDateTime is not a valid string', () => {
    const procedure: IProcedure = {
      resourceType: 'Procedure',
      status: 'completed',
      subject: { reference: 'Patient/123' },
      performedDateTime: 'invalid-date',
    };
    const { operationOutcome } = ProcedureValidator(procedure);
    expect(operationOutcome.issue.length).toBeGreaterThan(0);
    expect(operationOutcome.issue[0].details?.text).toContain('performedDateTime');
  });
});
