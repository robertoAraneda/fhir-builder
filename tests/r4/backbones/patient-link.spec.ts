import { IPatientLink } from 'fhirtypes/dist/r4';
import { LinkTypeEnum } from 'fhirtypes/dist/r4/enums';
import { ConformanceValidator, PatientLink, PatientLinkBuilder } from '../../../src/r4';

describe('PatientLink FHIR R4', () => {
  it('should be able to validate a new patient_link [new PatientLink()]', async () => {
    const item = new PatientLink({
      id: '123',
      other: {
        reference: 'Patient/123',
        type: 'Patient',
      },
      type: LinkTypeEnum.REPLACED_BY,
    });

    expect(item).toBeDefined();

    const { isValid } = item.validate();
    expect(isValid).toBeTruthy();
  });

  it('should be able to validate a new patient_link [IPatientLink]', async () => {
    const item: IPatientLink = {
      id: '123',
      other: {
        reference: 'Patient/123',
        type: 'Patient',
      },
      type: 'replaced-by',
    };

    const { isValid } = ConformanceValidator('PatientLink', item);
    expect(isValid).toBeTruthy();
  });

  it('should be able to create a new patient_link using builder methods [new PatientLink()]', async () => {
    const item = new PatientLinkBuilder()
      .setId('123')
      .setType('replaces')
      .setOther({
        reference: 'Patient/123',
      })
      .addPrimitiveExtension('_type', {
        extension: [
          {
            url: 'preferred',
            valueDate: '2020-01-01',
          },
        ],
      })
      .build();

    expect(item).toBeDefined();
    expect(item).toBeInstanceOf(PatientLink);

    const { isValid } = item.validate();
    expect(isValid).toBeTruthy();

    expect(item).toEqual({
      _type: {
        extension: [
          {
            url: 'preferred',
            valueDate: '2020-01-01',
          },
        ],
      },
      id: '123',
      other: {
        reference: 'Patient/123',
      },
      type: 'replaces',
    });
  });

  it('should be get errors validators if new address has wrong data', async () => {
    const item = {
      id: '123',
      other: {
        reference: 'Patient/123',
      },
      type: 'replaced-by',
      wrongProperty: 'wrongProperty',
    };

    const { isValid, operationOutcome } = ConformanceValidator('PatientLink', item);
    expect(isValid).toBeFalsy();
    expect(operationOutcome).toEqual({
      issue: [
        {
          code: 'invalid',
          details: {
            text: 'Path: PatientLink. Additional fields: wrongProperty',
          },
          diagnostics: 'Invalid fields have been found.',
          severity: 'error',
        },
      ],
    });
  });
});
