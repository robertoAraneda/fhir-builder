import { contextR4 } from '../../../src';
import { IIdentifier } from 'fhirtypes/dist/r4';
import { ConformanceValidator } from '../../../src/core/r4/validators/base';

describe('Identifier FHIR R4', () => {
  const { Identifier, PeriodBuilder, IdentifierBuilder } = contextR4();

  it('should be able to create a new identifier and validate with correct data [new Identifier()]', async () => {
    const item = new Identifier({
      id: '123',
      use: 'official',
      value: '1234567890',
      system: 'http://hl7.org/fhir/sid/us-npi',
      period: {
        start: '2020-01-01',
        end: '2020-01-02',
      },
      assigner: {
        reference: 'Organization/123',
      },
    });

    expect(item).toBeDefined();

    const { isValid } = item.validate();
    expect(isValid).toBeTruthy();
  });

  it('should be validate: Malformed assigner reference', async () => {
    const item = {
      id: '123',
      use: 'official',
      value: '1234567890',
      system: 'http://hl7.org/fhir/sid/us-npi',
      period: {
        start: '2020-01-01',
        end: '2020-01-02',
      },
      assigner: {
        reference: 'malformed reference',
      },
    };

    const { isValid, operationOutcome } = ConformanceValidator('Identifier', item);
    expect(isValid).toBeFalsy();
    expect(operationOutcome).toEqual({
      issue: [
        {
          code: 'invalid',
          details: {
            text: 'Path: Identifier.assigner.reference. Value: malformed reference',
          },
          diagnostics: "Invalid reference format. Reference must be in the format '{ResourceType}/{id}'.",
          severity: 'error',
        },
      ],
    });
  });

  it('should be validate: Malformed assigner reference 2', async () => {
    const item: IIdentifier = {
      id: '123',
      use: 'official',
      value: '1234567890',
      system: 'http://hl7.org/fhir/sid/us-npi',
      period: {
        start: '2020-01-01',
        end: '2020-01-02',
      },
      assigner: {
        reference: 'WrongResourceType/id',
      },
    };

    const { operationOutcome, isValid } = ConformanceValidator('Identifier', item);
    expect(isValid).toBeFalsy();
    expect(operationOutcome).toEqual({
      issue: [
        {
          code: 'invalid',
          details: {
            text: 'Path: Identifier.assigner.reference. Value: WrongResourceType/id',
          },
          diagnostics: 'Invalid reference resource type. Reference must be one of [Organization].',
          severity: 'error',
        },
      ],
    });
  });

  it('should be able to validate a new reference and validate with wrong data', async () => {
    const item = {
      id: '123',
      use: 'official',
      value: '1234567890',
      system: 'http://hl7.org/fhir/sid/us-npi',
      period: {
        start: '2020-01-01',
        end: '2020-01-02',
      },
      assigner: {
        reference: 'Organization/123',
      },
      wrongProperty: 'wrongProperty', // wrong property
    };

    const { isValid, operationOutcome } = ConformanceValidator('Identifier', item);
    expect(isValid).toBeFalsy();
    expect(operationOutcome).toEqual({
      issue: [
        {
          code: 'invalid',
          details: {
            text: 'Path: Identifier. Additional fields: wrongProperty',
          },
          diagnostics: 'Invalid fields have been found.',
          severity: 'error',
        },
      ],
    });
  });

  it('should be able to create a new identifier using builder methods [new IdentifierBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const period = new PeriodBuilder().setStart('2020-01-01').setEnd('2020-01-02').build();

    const item = new IdentifierBuilder()
      .setUse('official')
      .setSystem('http://hl7.org/fhir/sid/us-npi')
      .setPeriod(period)
      .setValue('1234567890')
      .setAssigner({ reference: 'Organization/123' })
      .build();

    expect(item).toBeDefined();
    expect(item).toBeInstanceOf(Identifier);

    const { isValid } = item.validate();
    expect(isValid).toBeTruthy();

    expect(item).toEqual({
      assigner: {
        reference: 'Organization/123',
      },
      period: {
        start: '2020-01-01',
        end: '2020-01-02',
      },
      system: 'http://hl7.org/fhir/sid/us-npi',
      use: 'official',
      value: '1234567890',
    });
  });
});
