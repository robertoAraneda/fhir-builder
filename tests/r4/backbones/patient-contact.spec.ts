import { IPatientContact } from 'fhirtypes/dist/r4';
import { ConformanceValidator, PatientContact, PatientContactBuilder } from '../../../src/r4';

describe('PatientContact FHIR R4', () => {
  it('should be able to validate a new patient_contact [new PatientContact()]', async () => {
    const item = new PatientContact({
      id: '123',
      gender: 'male',
      _gender: {
        extension: [
          {
            url: 'url',
            valueString: 'valueString',
          },
        ],
      },
      organization: {
        reference: 'Organization/123',
        display: 'display',
      },
    });

    const { isValid } = item.validate();
    expect(isValid).toBeTruthy();
  });

  it('should be able to validate a new patient_contact [IPatientContact]', async () => {
    const item: IPatientContact = {
      id: '123',
      gender: 'male',
      _gender: {
        extension: [
          {
            url: 'url',
            valueString: 'valueString',
          },
        ],
      },
      organization: {
        reference: 'Organization/123',
        display: 'display',
      },
    };

    const { isValid } = ConformanceValidator('PatientContact', item);
    expect(isValid).toBeTruthy();
  });

  it('should be able to create a new patient_contact using builder methods [new PatientContact()]', async () => {
    const item = new PatientContactBuilder()
      .setId('123')
      .addRelationship({
        coding: [
          {
            code: '123',
            system: 'system',
          },
        ],
      })
      .setPeriod({
        start: '2020-01-01',
        end: '2020-01-01',
      })
      .addPrimitiveExtension('_gender', {
        extension: [
          {
            url: 'preferred',
            valueDate: '2020-01-01',
          },
        ],
      })
      .build();

    expect(item).toBeDefined();
    expect(item).toBeInstanceOf(PatientContact);

    const { isValid } = item.validate();
    expect(isValid).toBeTruthy();

    expect(item).toEqual({
      _gender: {
        extension: [
          {
            url: 'preferred',
            valueDate: '2020-01-01',
          },
        ],
      },
      id: '123',
      period: {
        end: '2020-01-01',
        start: '2020-01-01',
      },
      relationship: [
        {
          coding: [
            {
              code: '123',
              system: 'system',
            },
          ],
        },
      ],
    });
  });

  it('should be get errors validators if new address has wrong data', async () => {
    const item = {
      id: '123',
      wrongProperty: 'wrongProperty',
    };

    const { isValid, operationOutcome } = ConformanceValidator('PatientContact', item);
    expect(isValid).toBeFalsy();
    expect(operationOutcome).toEqual({
      issue: [
        {
          code: 'invalid',
          details: {
            text: 'Path: PatientContact. Additional fields: wrongProperty',
          },
          diagnostics: 'Invalid fields have been found.',
          severity: 'error',
        },
      ],
    });
  });
});
