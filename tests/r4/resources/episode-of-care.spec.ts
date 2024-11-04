import { EpisodeOfCareStatusEnum } from 'fhirtypes/dist/r4/enums';
import { ICodeableConcept, IElement, IIdentifier, IPeriod, IReference } from 'fhirtypes/dist/r4';
import { EpisodeOfCare, EpisodeOfCareBuilder, EpisodeOfCareValidator } from '../../../src/r4';

describe('Patient FHIR R4', () => {
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

    const { isValid } = item.validate();

    expect(isValid).toBeTruthy();
  });

  describe('EpisodeOfCareBuilder', () => {
    it('should build an EpisodeOfCare with all properties set', () => {
      const builder = new EpisodeOfCareBuilder();
      const episodeOfCare = builder
        .addIdentifier({ system: 'http://hospital.com', value: '12345' } as IIdentifier)
        .setStatus(EpisodeOfCareStatusEnum.ACTIVE)
        .addStatusHistory({ status: EpisodeOfCareStatusEnum.ACTIVE, period: { start: '2023-01-01' } } as any)
        .addType({ text: 'Type1' } as ICodeableConcept)
        .addDiagnosis({ condition: { reference: 'Condition/1' } } as any)
        .setPatient({ reference: 'Patient/1' } as IReference)
        .setManagingOrganization({ reference: 'Organization/1' } as IReference)
        .setPeriod({ start: '2023-01-01', end: '2023-12-31' } as IPeriod)
        .addReferralRequest({ reference: 'ReferralRequest/1' } as IReference)
        .setCareManager({ reference: 'Practitioner/1' } as IReference)
        .addTeam({ reference: 'Team/1' } as IReference)
        .addAccount({ reference: 'Account/1' } as IReference)
        .build();
      expect(episodeOfCare.identifier?.[0].system).toBe('http://hospital.com');
      expect(episodeOfCare.identifier?.[0].value).toBe('12345');
      expect(episodeOfCare.status).toBe(EpisodeOfCareStatusEnum.ACTIVE);
      expect(episodeOfCare.statusHistory?.[0].status).toBe(EpisodeOfCareStatusEnum.ACTIVE);
      expect(episodeOfCare.type?.[0].text).toBe('Type1');
      expect(episodeOfCare.diagnosis?.[0].condition.reference).toBe('Condition/1');
      expect(episodeOfCare.patient.reference).toBe('Patient/1');
      expect(episodeOfCare.managingOrganization?.reference).toBe('Organization/1');
      expect(episodeOfCare.period?.start).toBe('2023-01-01');
      expect(episodeOfCare.period?.end).toBe('2023-12-31');
      expect(episodeOfCare.referralRequest?.[0].reference).toBe('ReferralRequest/1');
      expect(episodeOfCare.careManager?.reference).toBe('Practitioner/1');
      expect(episodeOfCare.team?.[0].reference).toBe('Team/1');
      expect(episodeOfCare.account?.[0].reference).toBe('Account/1');
    });

    it('should set status correctly', () => {
      const builder = new EpisodeOfCareBuilder();
      const episodeOfCare = builder.setStatus(EpisodeOfCareStatusEnum.ACTIVE).build();
      expect(episodeOfCare.status).toBe(EpisodeOfCareStatusEnum.ACTIVE);
    });

    it('should add identifier correctly', () => {
      const builder = new EpisodeOfCareBuilder();
      const episodeOfCare = builder
        .addIdentifier({ system: 'http://hospital.com', value: '12345' } as IIdentifier)
        .build();
      expect(episodeOfCare.identifier?.[0].system).toBe('http://hospital.com');
      expect(episodeOfCare.identifier?.[0].value).toBe('12345');
    });

    it('should add status history correctly', () => {
      const builder = new EpisodeOfCareBuilder();
      const episodeOfCare = builder
        .addStatusHistory({ status: EpisodeOfCareStatusEnum.ACTIVE, period: { start: '2023-01-01' } } as any)
        .build();
      expect(episodeOfCare.statusHistory?.[0].status).toBe(EpisodeOfCareStatusEnum.ACTIVE);
      expect(episodeOfCare.statusHistory?.[0].period.start).toBe('2023-01-01');
    });

    it('should add type correctly', () => {
      const builder = new EpisodeOfCareBuilder();
      const episodeOfCare = builder.addType({ text: 'Type1' } as ICodeableConcept).build();
      expect(episodeOfCare.type?.[0].text).toBe('Type1');
    });

    it('should add diagnosis correctly', () => {
      const builder = new EpisodeOfCareBuilder();
      const episodeOfCare = builder.addDiagnosis({ condition: { reference: 'Condition/1' } } as any).build();
      expect(episodeOfCare.diagnosis?.[0].condition.reference).toBe('Condition/1');
    });

    it('should set patient correctly', () => {
      const builder = new EpisodeOfCareBuilder();
      const episodeOfCare = builder.setPatient({ reference: 'Patient/1' } as IReference).build();
      expect(episodeOfCare.patient.reference).toBe('Patient/1');
    });

    it('should set managing organization correctly', () => {
      const builder = new EpisodeOfCareBuilder();
      const episodeOfCare = builder.setManagingOrganization({ reference: 'Organization/1' } as IReference).build();
      expect(episodeOfCare.managingOrganization?.reference).toBe('Organization/1');
    });

    it('should set period correctly', () => {
      const builder = new EpisodeOfCareBuilder();
      const episodeOfCare = builder.setPeriod({ start: '2023-01-01', end: '2023-12-31' } as IPeriod).build();
      expect(episodeOfCare.period?.start).toBe('2023-01-01');
      expect(episodeOfCare.period?.end).toBe('2023-12-31');
    });

    it('should add referral request correctly', () => {
      const builder = new EpisodeOfCareBuilder();
      const episodeOfCare = builder.addReferralRequest({ reference: 'ReferralRequest/1' } as IReference).build();
      expect(episodeOfCare.referralRequest?.[0].reference).toBe('ReferralRequest/1');
    });

    it('should set care manager correctly', () => {
      const builder = new EpisodeOfCareBuilder();
      const episodeOfCare = builder.setCareManager({ reference: 'Practitioner/1' } as IReference).build();
      expect(episodeOfCare.careManager?.reference).toBe('Practitioner/1');
    });

    it('should add team correctly', () => {
      const builder = new EpisodeOfCareBuilder();
      const episodeOfCare = builder.addTeam({ reference: 'Team/1' } as IReference).build();
      expect(episodeOfCare.team?.[0].reference).toBe('Team/1');
    });

    it('should add account correctly', () => {
      const builder = new EpisodeOfCareBuilder();
      const episodeOfCare = builder.addAccount({ reference: 'Account/1' } as IReference).build();
      expect(episodeOfCare.account?.[0].reference).toBe('Account/1');
    });

    it('should build an EpisodeOfCare object from JSON', () => {
      const builder = new EpisodeOfCareBuilder();
      const json = {
        status: 'active',
        patient: { reference: 'Patient/1' },
        managingOrganization: { reference: 'Organization/1' },
        period: { start: '2023-01-01', end: '2023-12-31' },
      };
      const episodeOfCare = builder.fromJSON(json).build();
      expect(episodeOfCare.status).toBe('active');
      expect(episodeOfCare.patient.reference).toBe('Patient/1');
      expect(episodeOfCare.managingOrganization?.reference).toBe('Organization/1');
      expect(episodeOfCare.period?.start).toBe('2023-01-01');
      expect(episodeOfCare.period?.end).toBe('2023-12-31');
    });

    it('should add primitive extension correctly', () => {
      const builder = new EpisodeOfCareBuilder();
      const extension = { id: 'test-extension' } as IElement;
      const episodeOfCare = builder.addPrimitiveExtension('_status', extension).build();
      expect(episodeOfCare._status).toBe(extension);
    });
  });

  describe('EpisodeOfCare', () => {
    it('should initialize with default values', () => {
      const episodeOfCare = new EpisodeOfCare();
      expect(episodeOfCare.resourceType).toBe('EpisodeOfCare');
      expect(episodeOfCare.identifier).toBeUndefined();
      expect(episodeOfCare.status).toBeUndefined();
      expect(episodeOfCare.statusHistory).toBeUndefined();
      expect(episodeOfCare.type).toBeUndefined();
      expect(episodeOfCare.diagnosis).toBeUndefined();
      expect(episodeOfCare.patient).toBeUndefined();
      expect(episodeOfCare.managingOrganization).toBeUndefined();
      expect(episodeOfCare.period).toBeUndefined();
      expect(episodeOfCare.referralRequest).toBeUndefined();
      expect(episodeOfCare.careManager).toBeUndefined();
      expect(episodeOfCare.team).toBeUndefined();
      expect(episodeOfCare.account).toBeUndefined();
      expect(episodeOfCare._status).toBeUndefined();
    });

    it('should initialize with provided values', () => {
      const episodeOfCare = new EpisodeOfCare({
        status: EpisodeOfCareStatusEnum.ACTIVE,
        patient: { reference: 'Patient/1' } as IReference,
        managingOrganization: { reference: 'Organization/1' } as IReference,
        period: { start: '2023-01-01', end: '2023-12-31' } as IPeriod,
      });
      expect(episodeOfCare.status).toBe(EpisodeOfCareStatusEnum.ACTIVE);
      expect(episodeOfCare.patient.reference).toBe('Patient/1');
      expect(episodeOfCare.managingOrganization?.reference).toBe('Organization/1');
      expect(episodeOfCare.period?.start).toBe('2023-01-01');
      expect(episodeOfCare.period?.end).toBe('2023-12-31');
    });

    it('should serialize to JSON correctly', () => {
      const episodeOfCare = new EpisodeOfCare({
        status: EpisodeOfCareStatusEnum.ACTIVE,
        patient: { reference: 'Patient/1' } as IReference,
      });
      const json = episodeOfCare.toJson();
      expect(json.status).toBe(EpisodeOfCareStatusEnum.ACTIVE);
      expect(json.patient.reference).toBe('Patient/1');
    });

    it('should convert to pretty string correctly', () => {
      const episodeOfCare = new EpisodeOfCare({
        status: EpisodeOfCareStatusEnum.ACTIVE,
        patient: { reference: 'Patient/1' } as IReference,
      });
      const prettyString = episodeOfCare.toPrettyString();
      expect(prettyString).toContain('"status": "active"');
      expect(prettyString).toContain('"patient": {\n' + '    "reference": "Patient/1"\n' + '  }');
    });

    it('should validate correctly', () => {
      const episodeOfCare = new EpisodeOfCare({
        status: EpisodeOfCareStatusEnum.ACTIVE,
        patient: { reference: 'Patient/1' } as IReference,
      });
      const validationResult = episodeOfCare.validate();
      expect(validationResult).toBeTruthy();
    });

    it('should serialize correctly', () => {
      const episodeOfCare = new EpisodeOfCare({
        status: EpisodeOfCareStatusEnum.ACTIVE,
        patient: { reference: 'Patient/1' } as IReference,
      });
      const serialized = episodeOfCare.serialize();
      expect(serialized).toBe(JSON.stringify(episodeOfCare.toJson()));
    });
  });
});
