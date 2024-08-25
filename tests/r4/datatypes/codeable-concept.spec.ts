import { contextR4 } from '../../../src';
import { ConformanceValidator } from '../../../src/core/r4/validators/base';

describe('CodeableConcept FHIR R4', () => {
  const { CodeableConcept, CodeableConceptBuilder } = contextR4();

  it('should be able to create a new codeable_concept and validate with correct data [new CodeableConcept]', async () => {
    const item = new CodeableConcept({
      id: '123',
      coding: [
        {
          code: '123',
          system: 'http://hl7.org/fhir/sid/us-npi',
          display: 'test',
        },
      ],
      text: 'test',
      extension: [
        {
          id: '123',
          url: 'http://example.com',
        },
      ],
    });
    expect(item).toBeDefined();

    const { isValid } = item.validate();
    expect(isValid).toBeTruthy();
  });

  it('should be able to validate a new codeable_concept and validate with wrong data', async () => {
    const item = {
      id: '123',
      coding: [
        {
          code: '123',
          system: 'http://hl7.org/fhir/sid/us-npi',
          display: 'test',
        },
      ],
      text: 'text',
      test: 'test', // wrong property
    };

    const { operationOutcome } = ConformanceValidator(item, 'CodeableConcept');
    expect(operationOutcome).toEqual({
      issue: [
        {
          code: 'invalid',
          details: {
            text: 'Path: CodeableConcept. Additional fields: test',
          },
          diagnostics: 'Invalid fields have been found.',
          severity: 'error',
        },
      ],
    });
  });

  it('should be able to create a new codeable_concept using builder methods [new CodeableConceptBuilder]', async () => {
    // build() is a method that returns the object that was built
    const item = new CodeableConceptBuilder()
      .setId('123')
      .setText('test')
      .addCoding({
        code: '123',
        display: 'test',
      })
      .addPrimitiveExtension('_text', {
        extension: [
          {
            url: 'url',
            valueId: '1221',
          },
        ],
      })
      .build();

    expect(item).toBeDefined();
    expect(item).toBeInstanceOf(CodeableConcept);

    const { isValid } = item.validate();
    expect(isValid).toBeTruthy();

    expect(item.toJson()).toEqual({
      _text: {
        extension: [
          {
            url: 'url',
            valueId: '1221',
          },
        ],
      },
      coding: [
        {
          code: '123',
          display: 'test',
        },
      ],
      id: '123',
      text: 'test',
    });
  });
});
