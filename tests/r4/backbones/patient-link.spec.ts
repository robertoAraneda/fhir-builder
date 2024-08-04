import { fhirR4 } from '../../../src';
import { IPatientLink } from 'fhirtypes/dist/r4';

describe('PatientLink FHIR R4', () => {
  const { PatientLink, Validator } = fhirR4();

  it('should be able to validate a new patient_link [new PatientLink()]', async () => {
    const item = new PatientLink({
      id: '123',
      other: {
        reference: 'Patient/123',
        type: 'Patient',
      },
      type: 'replaced-by',
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

    const { error } = Validator.PatientLink(item);
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

    const { error } = Validator.PatientLink(item);
    expect(error).toBe("InvalidFieldException. Field(s): 'wrongProperty'. Path: PatientLink.");
  });
});
