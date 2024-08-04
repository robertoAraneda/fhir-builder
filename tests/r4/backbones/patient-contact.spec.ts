import { contextR4 } from '../../../src';
import { IPatientContact } from 'fhirtypes/dist/r4';
import { conformanceValidation } from '../../../src/r4/validators/base/object.validator';

describe('PatientContact FHIR R4', () => {
  const { PatientContact, Validator } = contextR4();

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

    const { error } = item.validate();
    expect(error).toBeNull();
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

    const { error } = conformanceValidation(item, 'PatientContact');
    expect(error).toBeNull();
  });

  it('should be able to create a new patient_contact using builder methods [new PatientContact()]', async () => {
    const item = PatientContact.builder()
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
      .addParamExtension('gender', {
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

    const { error } = item.validate();
    expect(error).toBeNull();

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

    const { error } = conformanceValidation(item, 'PatientContact');
    expect(error).toBe("InvalidFieldException. Field(s): 'wrongProperty'. Path: PatientContact.");
  });
});
