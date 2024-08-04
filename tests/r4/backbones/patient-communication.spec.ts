import { fhirR4 } from '../../../src';
import { IPatientCommunication } from 'fhirtypes/dist/r4';

describe('PatientCommunication FHIR R4', () => {
  const { PatientCommunication, Validator } = fhirR4();

  it('should be able to validate a new patient_communication [new PatientCommunication()]', async () => {
    const item = new PatientCommunication({
      id: '123',
      preferred: true,
      language: {
        coding: [
          {
            code: '123',
            system: 'system',
          },
        ],
      },
    });

    expect(item).toBeDefined();
    const { error } = item.validate();
    expect(error).toBeNull();
  });

  it('should be able to validate a new patient_communication [IPatientCommunication]', async () => {
    const item: IPatientCommunication = {
      id: '123',
      preferred: true,
      language: {
        coding: [
          {
            code: '123',
            system: 'system',
          },
        ],
      },
    };

    const { error } = Validator.PatientCommunication(item);
    expect(error).toBeNull();
  });

  it('should be able to create a new patient_communication using builder methods [new PatientCommunication()]', async () => {
    const item = PatientCommunication.builder()
      .setId('123')
      .setPreferred(true)
      .setLanguage({
        coding: [
          {
            code: '123',
            system: 'system',
          },
        ],
      })
      .addParamExtension('preferred', {
        extension: [
          {
            url: 'preferred',
            valueDate: '2020-01-01',
          },
        ],
      })
      .build();

    expect(item).toBeDefined();
    expect(item).toBeInstanceOf(PatientCommunication);

    const { error } = item.validate();
    expect(error).toBeNull();

    expect(item).toEqual({
      _preferred: {
        extension: [
          {
            url: 'preferred',
            valueDate: '2020-01-01',
          },
        ],
      },
      id: '123',
      language: {
        coding: [
          {
            code: '123',
            system: 'system',
          },
        ],
      },
      preferred: true,
    });
  });

  it('should be get errors validators if new address has wrong data', async () => {
    const item = {
      id: '123',
      language: {
        coding: [
          {
            code: '123',
            system: 'system',
          },
        ],
      },
      wrongProperty: 'wrongProperty',
    };

    const { error } = Validator.PatientCommunication(item);
    expect(error).toBe("InvalidFieldException. Field(s): 'wrongProperty'. Path: PatientCommunication.");
  });
});
