import { contextR4 } from '../../../src';
import { ConformanceValidator } from '../../../src/core/r4/validators/base';

describe('Annotation FHIR R4', () => {
  const { SimpleQuantity, SimpleQuantityBuilder } = contextR4();

  it('should be able to create a new simple_quantity and validate with correct data [new SimpleQuantity]', async () => {
    const item = new SimpleQuantity({
      id: '123',
      value: 123,
      unit: 'test',
      system: 'http://hl7.org/fhir/sid/us-npi',
      code: 'test',
    });
    expect(item).toBeDefined();

    const { isValid } = item.validate();
    expect(isValid).toBeTruthy();
  });

  it('should be able to validate a new simple_quantity and validate with wrong data', async () => {
    const item = {
      id: '123',
      value: 123,
      comparator: '>',
      unit: 'test',
      system: 'http://hl7.org/fhir/sid/us-npi',
      code: 'test',
      test: 'test', // wrong property
    };

    const { operationOutcome } = ConformanceValidator(item, 'SimpleQuantity');
    expect(operationOutcome).toEqual({
      issue: [
        {
          code: 'invalid',
          details: {
            text: 'Path: SimpleQuantity. Additional fields: comparator, test',
          },
          diagnostics: 'Invalid fields have been found.',
          severity: 'error',
        },
      ],
    });
  });

  it('should be able to create a new simple_quantity using builder methods [new SimpleQuantityBuilder]', async () => {
    const item = new SimpleQuantityBuilder()
      .setId('123')
      .setValue(123)
      .setUnit('test')
      .setSystem('http://hl7.org/fhir/sid/us-npi')
      .setCode('test')
      .build();

    expect(item).toBeDefined();
    const { isValid } = item.validate();
    expect(isValid).toBeTruthy();
  });

  it('should be able to create a new simple_quantity using builder with no data [new SimpleQuantityBuilder]', async () => {
    const item = new SimpleQuantityBuilder().build();

    expect(item).toBeDefined();
    const { isValid } = item.validate();
    expect(isValid).toBeTruthy();
    expect(item).toEqual({});
  });
});
