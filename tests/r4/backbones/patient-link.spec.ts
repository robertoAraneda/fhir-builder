import { contextR4 } from '../../../src';
import { IPatientLink } from 'fhirtypes/dist/r4';
import { LinkTypeEnum } from 'fhirtypes/dist/r4/enums';

import { ConformanceValidator } from '../../../src/core/r4/validators/base/conformance.validator';

describe('PatientLink FHIR R4', () => {
  const { PatientLink, Validator } = contextR4();

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

    const { error } = item.validate();
    expect(error).toBeNull();
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

    const { error } = ConformanceValidator(item, 'PatientLink');
    expect(error).toBeNull();
  });

  it('should be able to create a new patient_link using builder methods [new PatientLink()]', async () => {
    const item = PatientLink.builder()
      .setId('123')
      .setType('replaces')
      .setOther({
        reference: 'Patient/123',
      })
      .addParamExtension('type', {
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

    const { error } = item.validate();
    expect(error).toBeNull();

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

    const { error } = ConformanceValidator(item, 'PatientLink');
    expect(error).toBe("InvalidFieldException. Field(s): 'wrongProperty'. Path: PatientLink.");
  });
});
