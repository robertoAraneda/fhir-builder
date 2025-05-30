import { Appointment } from '../../../src/r4';
import { AppointmentBuilder } from '../../../src/r4';
import { IAppointmentParticipant, IIdentifier, IPeriod } from 'fhirtypes/dist/r4';

describe('Appointment Examples FHIR R4', () => {
  it('should create a General Person Example', () => {
    const appointment = new Appointment({
      resourceType: 'Appointment',
      id: 'example',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Brian MRI results discussion</div>',
      },
      status: 'booked',
      serviceCategory: [
        {
          coding: [
            {
              system: 'http://example.org/service-category',
              code: 'gp',
              display: 'General Practice',
            },
          ],
        },
      ],
      serviceType: [
        {
          coding: [
            {
              code: '52',
              display: 'General Discussion',
            },
          ],
        },
      ],
      specialty: [
        {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '394814009',
              display: 'General practice',
            },
          ],
        },
      ],
      appointmentType: {
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/v2-0276',
            code: 'FOLLOWUP',
            display: 'A follow up visit from a previous appointment',
          },
        ],
      },
      reasonReference: [
        {
          reference: 'Condition/example',
          display: 'Severe burn of left ear',
        },
      ],
      priority: 5,
      description: 'Discussion on the results of your recent MRI',
      start: '2013-12-10T09:00:00Z',
      end: '2013-12-10T11:00:00Z',
      created: '2013-10-10',
      comment: 'Further expand on the results of the MRI and determine the next actions that may be appropriate.',
      basedOn: [
        {
          reference: 'ServiceRequest/myringotomy',
        },
      ],
      participant: [
        {
          actor: {
            reference: 'Patient/example',
            display: 'Peter James Chalmers',
          },
          required: 'required',
          status: 'accepted',
        },
        {
          type: [
            {
              coding: [
                {
                  system: 'http://terminology.hl7.org/CodeSystem/v3-ParticipationType',
                  code: 'ATND',
                },
              ],
            },
          ],
          actor: {
            reference: 'Practitioner/example',
            display: 'Dr Adam Careful',
          },
          required: 'required',
          status: 'accepted',
        },
        {
          actor: {
            reference: 'Location/1',
            display: 'South Wing, second floor',
          },
          required: 'required',
          status: 'accepted',
        },
      ],
    });

    const { isValid, operationOutcome } = appointment.validate();
    expect(isValid).toBeTruthy();
    expect(operationOutcome.issue).toHaveLength(0);
  });

  it('should create a Appointment between 2 doctors to discuss MRI results', () => {
    const appointment = new Appointment({
      resourceType: 'Appointment',
      id: '2docs',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Brian MRI results discussion</div>',
      },
      status: 'booked',
      serviceCategory: [
        {
          coding: [
            {
              system: 'http://example.org/service-category',
              code: 'gp',
              display: 'General Practice',
            },
          ],
        },
      ],
      serviceType: [
        {
          coding: [
            {
              code: '52',
              display: 'General Discussion',
            },
          ],
        },
      ],
      specialty: [
        {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '394814009',
              display: 'General practice',
            },
          ],
        },
      ],
      appointmentType: {
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/v2-0276',
            code: 'WALKIN',
            display: 'A previously unscheduled walk-in visit',
          },
        ],
      },
      priority: 5,
      description: 'Discussion about Peter Chalmers MRI results',
      supportingInformation: [
        {
          reference: 'DiagnosticReport/ultrasound',
        },
      ],
      start: '2013-12-09T09:00:00Z',
      end: '2013-12-09T11:00:00Z',
      comment: 'Clarify the results of the MRI to ensure context of test was correct',
      participant: [
        {
          actor: {
            reference: 'Patient/example',
            display: 'Peter James Chalmers',
          },
          required: 'information-only',
          status: 'accepted',
        },
        {
          actor: {
            reference: 'Practitioner/example',
            display: 'Dr Adam Careful',
          },
          required: 'required',
          status: 'accepted',
        },
        {
          actor: {
            reference: 'Practitioner/f202',
            display: 'Luigi Maas',
          },
          required: 'required',
          status: 'accepted',
        },
        {
          actor: {
            display: 'Phone Call',
          },
          required: 'information-only',
          status: 'accepted',
        },
      ],
    });

    const { isValid, operationOutcome } = appointment.validate();
    expect(isValid).toBeTruthy();
    expect(operationOutcome.issue).toHaveLength(0);
  });

  it('should create a Appointment request', () => {
    const appointment = new Appointment({
      resourceType: 'Appointment',
      id: 'examplereq',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Brian MRI results discussion</div>',
      },
      identifier: [
        {
          system: 'http://example.org/sampleappointment-identifier',
          value: '123',
        },
      ],
      status: 'proposed',
      serviceCategory: [
        {
          coding: [
            {
              system: 'http://example.org/service-category',
              code: 'gp',
              display: 'General Practice',
            },
          ],
        },
      ],
      specialty: [
        {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '394814009',
              display: 'General practice',
            },
          ],
        },
      ],
      appointmentType: {
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/v2-0276',
            code: 'WALKIN',
            display: 'A previously unscheduled walk-in visit',
          },
        ],
      },
      reasonCode: [
        {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '413095006',
            },
          ],
          text: 'Clinical Review',
        },
      ],
      priority: 5,
      description: 'Discussion on the results of your recent MRI',
      minutesDuration: 15,
      slot: [
        {
          reference: 'Slot/example',
        },
      ],
      created: '2015-12-02',
      comment: 'Further expand on the results of the MRI and determine the next actions that may be appropriate.',
      participant: [
        {
          actor: {
            reference: 'Patient/example',
            display: 'Peter James Chalmers',
          },
          required: 'required',
          status: 'needs-action',
        },
        {
          type: [
            {
              coding: [
                {
                  system: 'http://terminology.hl7.org/CodeSystem/v3-ParticipationType',
                  code: 'ATND',
                },
              ],
            },
          ],
          required: 'required',
          status: 'needs-action',
        },
        {
          actor: {
            reference: 'Location/1',
            display: 'South Wing, second floor',
          },
          required: 'required',
          status: 'accepted',
        },
      ],
      requestedPeriod: [
        {
          start: '2016-06-02',
          end: '2016-06-09',
        },
      ],
    });

    const { isValid, operationOutcome } = appointment.validate();
    expect(isValid).toBeTruthy();
    expect(operationOutcome.issue).toHaveLength(0);
  });
});

describe('AppointmentBuilder', () => {
  it('builds an Appointment with all required fields', () => {
    const builder = new AppointmentBuilder();
    const appointment = builder
      .setStatus('booked')
      .setDescription('Annual check-up')
      .setStart('2023-10-01T10:00:00Z')
      .setEnd('2023-10-01T11:00:00Z')
      .build();

    expect(appointment.status).toBe('booked');
    expect(appointment.description).toBe('Annual check-up');
    expect(appointment.start).toBe('2023-10-01T10:00:00Z');
    expect(appointment.end).toBe('2023-10-01T11:00:00Z');
  });

  it('adds multiple identifiers to the Appointment', () => {
    const builder = new AppointmentBuilder();
    const identifier1: IIdentifier = { system: 'http://example.com', value: '123' };
    const identifier2: IIdentifier = { system: 'http://example.com', value: '456' };

    const appointment = builder.addIdentifier(identifier1).addIdentifier(identifier2).build();

    expect(appointment.identifier).toHaveLength(2);
    expect(appointment.identifier).toContainEqual(identifier1);
    expect(appointment.identifier).toContainEqual(identifier2);
  });

  it('handles empty fields gracefully', () => {
    const builder = new AppointmentBuilder();
    const appointment = builder.build();

    expect(appointment.identifier).toBeUndefined();
    expect(appointment.status).toBeUndefined();
    expect(appointment.description).toBeUndefined();
  });

  it('adds participants to the Appointment', () => {
    const builder = new AppointmentBuilder();
    const participant: IAppointmentParticipant = { actor: { reference: 'Practitioner/1' }, status: 'accepted' };

    const appointment = builder.addParticipant(participant).build();

    expect(appointment.participant).toHaveLength(1);
    expect(appointment.participant?.[0].actor?.reference).toBe('Practitioner/1');
    expect(appointment.participant?.[0].status).toBe('accepted');
  });

  it('adds requested periods to the Appointment', () => {
    const builder = new AppointmentBuilder();
    const period: IPeriod = { start: '2023-10-01T10:00:00Z', end: '2023-10-01T11:00:00Z' };

    const appointment = builder.addRequestedPeriod(period).build();

    expect(appointment.requestedPeriod).toHaveLength(1);
    expect(appointment.requestedPeriod?.[0].start).toBe('2023-10-01T10:00:00Z');
    expect(appointment.requestedPeriod?.[0].end).toBe('2023-10-01T11:00:00Z');
  });

  it('overwrites fields when set multiple times', () => {
    const builder = new AppointmentBuilder();
    const appointment = builder.setStatus('booked').setStatus('cancelled').build();

    expect(appointment.status).toBe('cancelled');
  });

  it('throws an error when invalid JSON is passed to fromJSON', () => {
    const builder = new AppointmentBuilder();

    expect(() => builder.fromJSON('{invalidJson}')).toThrow();
  });

  it('parses valid JSON correctly with fromJSON', () => {
    const builder = new AppointmentBuilder();
    const json = '{"status":"booked","description":"Annual check-up"}';

    const appointment = builder.fromJSON(json).build();

    expect(appointment.status).toBe('booked');
    expect(appointment.description).toBe('Annual check-up');
  });
});
