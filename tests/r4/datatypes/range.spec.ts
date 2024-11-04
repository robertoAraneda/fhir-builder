import { ConformanceValidator, Range, RangeBuilder } from '../../../src/r4';

describe('Annotation FHIR R4', () => {
  it('should be able to create a new range and validate with correct data [new Range]', async () => {
    const item = new Range({
      id: '123',
      low: {
        value: 123,
        unit: 'test',
        system: 'http://hl7.org/fhir/sid/us-npi',
        code: 'test',
      },
      high: {
        value: 123,
        unit: 'test',
        system: 'http://hl7.org/fhir/sid/us-npi',
        code: 'test',
      },
    });
    expect(item).toBeDefined();

    const { isValid } = item.validate();
    expect(isValid).toBeTruthy();
  });

  it('should be able to validate a new range and validate with wrong data', async () => {
    const item = {
      id: '123',
      low: {
        value: 123,
        unit: 'test',
        system: 'http://hl7.org/fhir/sid/us-npi',
        code: 'test',
      },
      high: {
        value: 123,
        unit: 'test',
        system: 'http://hl7.org/fhir/sid/us-npi',
        code: 'test',
      },
      test: 'test', // wrong property
    };

    const { operationOutcome } = ConformanceValidator('Range', item);
    expect(operationOutcome).toEqual({
      issue: [
        {
          code: 'invalid',
          details: {
            text: 'Path: Range. Additional fields: test',
          },
          diagnostics: 'Invalid fields have been found.',
          severity: 'error',
        },
      ],
    });
  });

  it('should be able to create a new range using builder methods [new RangeBuilder]', async () => {
    const item = new RangeBuilder()
      .setId('123')
      .setLow({
        value: 123,
        unit: 'test',
        system: 'http://hl7.org/fhir/sid/us-npi',
        code: 'test',
      })
      .setHigh({
        value: 123,
        unit: 'test',
        system: 'http://hl7.org/fhir/sid/us-npi',
        code: 'test',
      })
      .build();

    expect(item).toBeDefined();
    const { isValid } = item.validate();
    expect(isValid).toBeTruthy();
  });

  it('should be able to create a new range using builder with no data [new RangeBuilder]', async () => {
    const item = new RangeBuilder().build();

    expect(item).toBeDefined();
    const { isValid } = item.validate();
    expect(isValid).toBeTruthy();
    expect(item).toEqual({});
  });
});
