import { PractitionerRole } from '../../../src/r4';

describe('PractitionerRole', () => {
  describe('PractitionerRoleModel', () => {
    it('creates a new instance without values', () => {
      const practitionerRole = new PractitionerRole();
      expect(practitionerRole.resourceType).toBe('PractitionerRole');
      expect(practitionerRole.identifier).toBeUndefined();
      expect(practitionerRole.active).toBeUndefined();
      expect(practitionerRole.period).toBeUndefined();
      expect(practitionerRole.practitioner).toBeUndefined();
      expect(practitionerRole.organization).toBeUndefined();
      expect(practitionerRole.code).toBeUndefined();
      expect(practitionerRole.specialty).toBeUndefined();
      expect(practitionerRole.location).toBeUndefined();
      expect(practitionerRole.healthcareService).toBeUndefined();
      expect(practitionerRole.telecom).toBeUndefined();
      expect(practitionerRole.availableTime).toBeUndefined();
      expect(practitionerRole.notAvailable).toBeUndefined();
      expect(practitionerRole.availabilityExceptions).toBeUndefined();
      expect(practitionerRole.endpoint).toBeUndefined();
    });

    it('creates a new instance with all values', () => {
      const practitionerRole = new PractitionerRole({
        resourceType: 'PractitionerRole',
        identifier: [{ system: 'http://example.com', value: '12345' }],
        active: true,
        period: { start: '2021-01-01', end: '2021-12-31' },
        practitioner: { reference: 'Practitioner/example' },
        organization: { reference: 'Organization/f001' },
        code: [{ coding: [{ system: 'http://example.com', code: 'code1' }] }],
        specialty: [{ coding: [{ system: 'http://example.com', code: 'specialty1' }] }],
        location: [{ reference: 'Location/1' }],
        healthcareService: [{ reference: 'HealthcareService/1' }],
        telecom: [{ system: 'phone', value: '123456789', use: 'work' }],
        availableTime: [{ daysOfWeek: ['mon'], availableStartTime: '09:00', availableEndTime: '17:00' }],
        notAvailable: [
          { description: 'Not available on holidays', during: { start: '2021-12-25', end: '2021-12-26' } },
        ],
        availabilityExceptions: 'Not available on public holidays',
        endpoint: [{ reference: 'Endpoint/1' }],
      });
      expect(practitionerRole.resourceType).toBe('PractitionerRole');
      expect(practitionerRole.identifier).toHaveLength(1);
      expect(practitionerRole.active).toBe(true);
      expect(practitionerRole.period).toEqual({ start: '2021-01-01', end: '2021-12-31' });
      expect(practitionerRole.practitioner).toEqual({ reference: 'Practitioner/example' });
      expect(practitionerRole.organization).toEqual({ reference: 'Organization/f001' });
      expect(practitionerRole.code).toHaveLength(1);
      expect(practitionerRole.specialty).toHaveLength(1);
      expect(practitionerRole.location).toHaveLength(1);
      expect(practitionerRole.healthcareService).toHaveLength(1);
      expect(practitionerRole.telecom).toHaveLength(1);
      expect(practitionerRole.availableTime).toHaveLength(1);
      expect(practitionerRole.notAvailable).toHaveLength(1);
      expect(practitionerRole.availabilityExceptions).toBe('Not available on public holidays');
      expect(practitionerRole.endpoint).toHaveLength(1);
    });

    it('toJson returns correct JSON representation', () => {
      const practitionerRole = new PractitionerRole({
        resourceType: 'PractitionerRole',
        practitioner: { reference: 'Practitioner/example' },
        organization: { reference: 'Organization/f001' },
      });
      const json = practitionerRole.toJson();
      expect(json).toEqual({
        resourceType: 'PractitionerRole',
        practitioner: { reference: 'Practitioner/example' },
        organization: { reference: 'Organization/f001' },
      });
    });

    it('toString returns correct string representation', () => {
      const practitionerRole = new PractitionerRole({
        resourceType: 'PractitionerRole',
        practitioner: { reference: 'Practitioner/example' },
        organization: { reference: 'Organization/f001' },
      });
      const str = practitionerRole.toString();
      expect(str).toBe(
        'PractitionerRole{"resourceType":"PractitionerRole","practitioner":{"reference":"Practitioner/example"},"organization":{"reference":"Organization/f001"}}',
      );
    });

    it('toPrettyString returns correct pretty string representation', () => {
      const practitionerRole = new PractitionerRole({
        resourceType: 'PractitionerRole',
        practitioner: { reference: 'Practitioner/example' },
        organization: { reference: 'Organization/f001' },
      });
      const prettyStr = practitionerRole.toPrettyString();
      expect(prettyStr).toBe(
        'PractitionerRole{\n  "resourceType": "PractitionerRole",\n  "practitioner": {\n    "reference": "Practitioner/example"\n  },\n  "organization": {\n    "reference": "Organization/f001"\n  }\n}',
      );
    });

    it('serialize returns correct serialized string representation', () => {
      const practitionerRole = new PractitionerRole({
        resourceType: 'PractitionerRole',
        practitioner: { reference: 'Practitioner/example' },
        organization: { reference: 'Organization/f001' },
      });
      const serialized = practitionerRole.serialize();
      expect(serialized).toBe(
        '{"resourceType":"PractitionerRole","practitioner":{"reference":"Practitioner/example"},"organization":{"reference":"Organization/f001"}}',
      );
    });

    it('validate returns valid result for valid PractitionerRole', () => {
      const practitionerRole = new PractitionerRole({
        resourceType: 'PractitionerRole',
        practitioner: { reference: 'Practitioner/example' },
        organization: { reference: 'Organization/f001' },
      });
      const { isValid, operationOutcome } = practitionerRole.validate();
      expect(isValid).toBeTruthy();
      expect(operationOutcome.issue).toHaveLength(0);
    });

    it('validate returns invalid result for invalid PractitionerRole', () => {
      const practitionerRole = new PractitionerRole({
        resourceType: 'PractitionerRole',
        practitioner: { reference: 'wrong-reference' },
      });
      const { isValid, operationOutcome } = practitionerRole.validate();
      expect(isValid).toBeFalsy();
      expect(operationOutcome.issue).not.toHaveLength(0);
    });
  });
  describe('FHIR examples from website', () => {
    const item = new PractitionerRole({
      resourceType: 'PractitionerRole',
      id: 'example',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\t<p>\n\t\t\t\tDr Adam Careful is a Referring Practitioner for Acme Hospital from 1-Jan 2012 to 31-Mar\n\t\t\t\t2012\n\t\t\t</p>\n\t\t</div>',
      },
      identifier: [
        {
          system: 'http://www.acme.org/practitioners',
          value: '23',
        },
      ],
      active: true,
      period: {
        start: '2012-01-01',
        end: '2012-03-31',
      },
      practitioner: {
        reference: 'Practitioner/example',
        display: 'Dr Adam Careful',
      },
      organization: {
        reference: 'Organization/f001',
      },
      code: [
        {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v2-0286',
              code: 'RP',
            },
          ],
        },
      ],
      specialty: [
        {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '408443003',
              display: 'General medical practice',
            },
          ],
        },
      ],
      location: [
        {
          reference: 'Location/1',
          display: 'South Wing, second floor',
        },
      ],
      healthcareService: [
        {
          reference: 'HealthcareService/example',
        },
      ],
      telecom: [
        {
          system: 'phone',
          value: '(03) 5555 6473',
          use: 'work',
        },
        {
          system: 'email',
          value: 'adam.southern@example.org',
          use: 'work',
        },
      ],
      availableTime: [
        {
          daysOfWeek: ['mon', 'tue', 'wed'],
          availableStartTime: '09:00:00',
          availableEndTime: '16:30:00',
        },
        {
          daysOfWeek: ['thu', 'fri'],
          availableStartTime: '09:00:00',
          availableEndTime: '12:00:00',
        },
      ],
      notAvailable: [
        {
          description: 'Adam will be on extended leave during May 2017',
          during: {
            start: '2017-05-01',
            end: '2017-05-20',
          },
        },
      ],
      availabilityExceptions:
        'Adam is generally unavailable on public holidays and during the Christmas/New Year break',
      endpoint: [
        {
          reference: 'Endpoint/example',
        },
      ],
    });

    const { isValid, operationOutcome } = item.validate();
    expect(isValid).toBeTruthy();
    expect(operationOutcome.issue).toHaveLength(0);
  });
});
