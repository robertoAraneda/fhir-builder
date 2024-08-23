import { contextR4 } from '../../../src';

describe('Patient FHIR R4', () => {
  const { EpisodeOfCare, EpisodeOfCareValidator, EpisodeOfCareBuilder } = contextR4();

  it('should validate EpisodeOfCare', async () => {
    const item = new EpisodeOfCare({
      resourceType: 'EpisodeOfCare',
      id: 'example',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      HACC Program for Peter James Chalmers at HL7 Healthcare 15 Sept 2014 - current<br/>\n\t\t\twas on leave from 22 Sept - 24 Sept while in respite care\n    </div>',
      },
      identifier: [
        {
          system: 'http://example.org/sampleepisodeofcare-identifier',
          value: '123',
        },
      ],
      status: 'active',
      statusHistory: [
        {
          status: 'planned',
          period: {
            start: '2014-09-01',
            end: '2014-09-14',
          },
        },
        {
          status: 'active',
          period: {
            start: '2014-09-15',
            end: '2014-09-21',
          },
        },
        {
          status: 'onhold',
          period: {
            start: '2014-09-22',
            end: '2014-09-24',
          },
        },
        {
          status: 'active',
          period: {
            start: '2014-09-25',
          },
        },
      ],
      type: [
        {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/episodeofcare-type',
              code: 'hacc',
              display: 'Home and Community Care',
            },
          ],
        },
      ],
      diagnosis: [
        {
          condition: {
            reference: 'Condition/stroke',
          },
          role: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/diagnosis-role',
                code: 'CC',
                display: 'Chief complaint',
              },
            ],
          },
          rank: 1,
        },
      ],
      patient: {
        reference: 'Patient/example',
      },
      managingOrganization: {
        reference: 'Organization/hl7',
      },
      period: {
        start: '2014-09-01',
      },
      referralRequest: [
        {
          display: 'Referral from Example Aged Care Services',
        },
      ],
      careManager: {
        reference: 'Practitioner/14',
        display: 'Amanda Assigned',
      },
      team: [
        {
          reference: 'CareTeam/example',
          display: 'example care team',
        },
      ],
      account: [
        {
          reference: 'Account/example',
          display: 'example account',
        },
      ],
    });

    const { isValid } = EpisodeOfCareValidator(item);

    expect(isValid).toBeTruthy();
  });

  it('should create a instance of EpisodeOfCare using Builder', () => {
    const item = new EpisodeOfCareBuilder()
      .setId('example')
      .setText({
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      HACC Program for Peter James Chalmers at HL7 Healthcare 15 Sept 2014 - current<br/>\n\t\t\twas on leave from 22 Sept - 24 Sept while in respite care\n    </div>',
      })
      .addIdentifier({
        use: 'official',
        system: 'http://example.org/sampleepisodeofcare-identifier',
        value: '123',
      })
      .setStatus('active')
      .addStatusHistory({
        status: 'active',
        period: {
          start: '2014-09-01',
          end: '2014-09-14',
        },
      })
      .addStatusHistory({
        status: 'onhold',
        period: {
          start: '2014-09-15',
          end: '2014-09-21',
        },
      })
      .addType({
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/episodeofcare-type',
            code: 'hacc',
            display: 'Home and Community Care',
          },
        ],
      })
      .addDiagnosis({
        condition: {
          reference: 'Condition/stroke',
        },
        role: {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/diagnosis-role',
              code: 'CC',
              display: 'Chief complaint',
            },
          ],
        },
        rank: 1,
      })
      .setPatient({
        reference: 'Patient/example',
      })
      .setManagingOrganization({
        reference: 'Organization/hl7',
      })
      .setPeriod({
        start: '2014-09-01',
      })
      .addReferralRequest({
        display: 'Referral from Example Aged Care Services',
      })
      .setCareManager({
        reference: 'Practitioner/14',
        display: 'Amanda Assigned',
      })
      .addTeam({
        reference: 'CareTeam/example',
        display: 'example care team',
      })
      .addAccount({
        reference: 'Account/example',
        display: 'example account',
      })
      .build();

    expect(item.toJson()).toEqual({
      resourceType: 'EpisodeOfCare',
      id: 'example',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      HACC Program for Peter James Chalmers at HL7 Healthcare 15 Sept 2014 - current<br/>\n\t\t\twas on leave from 22 Sept - 24 Sept while in respite care\n    </div>',
      },
      identifier: [
        {
          use: 'official',
          system: 'http://example.org/sampleepisodeofcare-identifier',
          value: '123',
        },
      ],
      status: 'active',
      statusHistory: [
        {
          status: 'active',
          period: {
            start: '2014-09-01',
            end: '2014-09-14',
          },
        },
        {
          status: 'onhold',
          period: {
            start: '2014-09-15',
            end: '2014-09-21',
          },
        },
      ],
      type: [
        {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/episodeofcare-type',
              code: 'hacc',
              display: 'Home and Community Care',
            },
          ],
        },
      ],
      diagnosis: [
        {
          condition: {
            reference: 'Condition/stroke',
          },
          role: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/diagnosis-role',
                code: 'CC',
                display: 'Chief complaint',
              },
            ],
          },
          rank: 1,
        },
      ],
      patient: {
        reference: 'Patient/example',
      },
      managingOrganization: {
        reference: 'Organization/hl7',
      },
      period: {
        start: '2014-09-01',
      },
      referralRequest: [
        {
          display: 'Referral from Example Aged Care Services',
        },
      ],
      careManager: {
        reference: 'Practitioner/14',
        display: 'Amanda Assigned',
      },
      team: [
        {
          reference: 'CareTeam/example',
          display: 'example care team',
        },
      ],
      account: [
        {
          reference: 'Account/example',
          display: 'example account',
        },
      ],
    });
    const { isValid } = item.validate();

    expect(isValid).toBeTruthy();
  });

  it('should validate toPrettyString() and toString() methods', () => {
    const item = new EpisodeOfCare({
      resourceType: 'EpisodeOfCare',
      id: 'example',
      period: {
        start: '2014-09-01',
        end: '2014-09-14',
      },
      patient: {
        display: 'Peter James Chalmers',
      },
      status: 'active',
    });

    expect(item.toPrettyString()).toEqual(`EpisodeOfCare${JSON.stringify(item.toJson(), null, 2)}`);
    expect(item.toString()).toEqual(`EpisodeOfCare${JSON.stringify(item.toJson())}`);
  });

  it('should create a instance of EpisodeOfCare using BuilderFromJson', () => {
    const unknownItem = {
      resourceType: 'EpisodeOfCare',
      id: 'example',
      identifier: [
        {
          use: 'official',
          system: 'http://example.org/sampleepisodeofcare-identifier',
          value: '123',
        },
      ],
      status: 'active',
      statusHistory: [
        {
          status: 'active',
          period: {
            start: '2014-09-01',
            end: '2014-09-14',
          },
        },
        {
          status: 'onhold',
          period: {
            start: '2014-09-15',
            end: '2014-09-21',
          },
        },
      ],
      period: {
        start: '2014-09-01',
      },
      referralRequest: [
        {
          display: 'Referral from Example Aged Care Services',
        },
      ],
    };

    const itemBuilder = EpisodeOfCare.builderFromJson(unknownItem);

    const item = itemBuilder
      .addStatusHistory({
        status: 'cancelled',
        period: {
          start: '2014-09-22',
        },
      })
      .setPatient({
        reference: 'Patient/example',
      })
      .setPeriod({
        start: '2014-09-01',
        end: '2014-09-14',
      })
      .setStatus('cancelled')
      .addReferralRequest({
        reference: 'ServiceRequest/example',
        type: 'ServiceRequest',
      })
      .build();

    expect(item).toEqual({
      resourceType: 'EpisodeOfCare',
      id: 'example',
      identifier: [
        {
          use: 'official',
          system: 'http://example.org/sampleepisodeofcare-identifier',
          value: '123',
        },
      ],
      status: 'cancelled',
      statusHistory: [
        {
          status: 'active',
          period: {
            start: '2014-09-01',
            end: '2014-09-14',
          },
        },
        {
          status: 'onhold',
          period: {
            start: '2014-09-15',
            end: '2014-09-21',
          },
        },
        {
          status: 'cancelled',
          period: {
            start: '2014-09-22',
          },
        },
      ],
      patient: {
        reference: 'Patient/example',
      },
      period: {
        start: '2014-09-01',
        end: '2014-09-14',
      },
      referralRequest: [
        {
          display: 'Referral from Example Aged Care Services',
        },
        {
          reference: 'ServiceRequest/example',
          type: 'ServiceRequest',
        },
      ],
    });

    const { isValid } = item.validate();
    expect(isValid).toBeTruthy();
  });
});
