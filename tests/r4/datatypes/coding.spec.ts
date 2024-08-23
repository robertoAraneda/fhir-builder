import { contextR4 } from '../../../src';
import { ConformanceValidator } from '../../../src/core/r4/validators/base';

describe('Coding FHIR R4', () => {
  const { Coding, CodingBuilder } = contextR4();

  it('should be able to create a new coding and validate with correct data [new Coding()]', async () => {
    const item = new Coding({
      id: '123',
      code: '123',
      version: '1.0.0',
      display: 'test',
      system: 'http://hl7.org/fhir/sid/us-npi',
    });
    expect(item).toBeDefined();

    const { isValid } = item.validate();
    expect(isValid).toBeTruthy();
  });

  it('should be able to validate a new coding and validate with wrong data', async () => {
    const item = {
      id: '123',
      code: '123',
      version: '1.0.0',
      display: 'test',
      system: 'http://hl7.org/fhir/sid/us-npi',
      test: 'test', // wrong property
    };

    const { operationOutcome } = ConformanceValidator(item, 'Coding');

    expect(operationOutcome).toEqual({
      issue: [
        {
          code: 'invalid',
          details: {
            text: 'Path: Coding. Additional fields: test',
          },
          diagnostics: 'Invalid fields have been found.',
          severity: 'error',
        },
      ],
    });
  });

  it('should be able to create a new coding using builder methods [new CodingBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const item = new CodingBuilder()
      .setCode('123')
      .setDisplay('test')
      .setSystem('http://hl7.org/fhir/sid/us-npi')
      .setUserSelected(true)
      .setVersion('1.0.0')
      .addPrimitiveExtension('_code', { id: '123', extension: [{ url: 'url', valueId: '1221' }] })
      .build();

    expect(item).toBeDefined();
    expect(item).toBeInstanceOf(Coding);

    const { isValid } = item.validate();
    expect(isValid).toBeTruthy();

    expect(item).toEqual({
      _code: {
        extension: [
          {
            url: 'url',
            valueId: '1221',
          },
        ],
        id: '123',
      },
      code: '123',
      display: 'test',
      system: 'http://hl7.org/fhir/sid/us-npi',
      userSelected: true,
      version: '1.0.0',
    });
  });
});
