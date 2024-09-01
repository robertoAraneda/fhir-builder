import { contextR4 } from '../../../src';
import { IPatientCommunication } from 'fhirtypes/dist/r4';
import { ConformanceValidator } from '../../../src/core/r4/validators/base';

describe('PatientCommunication FHIR R4', () => {
  const { PatientCommunication, PatientCommunicationBuilder } = contextR4();

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
    const { isValid } = item.validate();
    expect(isValid).toBeTruthy();
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

    const { isValid } = ConformanceValidator('PatientCommunication', item);
    expect(isValid).toBeTruthy();
  });

  it('should be able to create a new patient_communication using builder methods [new PatientCommunication()]', async () => {
    const item = new PatientCommunicationBuilder()
      .setId('123')
      .addExtension({
        url: 'preferred',
        valueDate: '2020-01-01',
      })
      .setPreferred(true)
      .setLanguage({
        coding: [
          {
            code: '123',
            system: 'system',
          },
        ],
      })
      .addPrimitiveExtension('_preferred', {
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

    const { isValid } = item.validate();
    expect(isValid).toBeTruthy();

    expect(item).toEqual({
      _preferred: {
        extension: [
          {
            url: 'preferred',
            valueDate: '2020-01-01',
          },
        ],
      },
      extension: [
        {
          url: 'preferred',
          valueDate: '2020-01-01',
        },
      ],
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

    const { isValid, operationOutcome } = ConformanceValidator('PatientCommunication', item);
    expect(isValid).toBeFalsy();
    expect(operationOutcome).toEqual({
      issue: [
        {
          code: 'invalid',
          details: {
            text: 'Path: PatientCommunication. Additional fields: wrongProperty',
          },
          diagnostics: 'Invalid fields have been found.',
          severity: 'error',
        },
      ],
    });
  });
});
