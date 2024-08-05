import { contextR4 } from '../../../src';

import { ConformanceValidator } from '../../../src/core/r4/validators/base/conformance.validator';

describe('CodeableConcept FHIR R4', () => {
  const { CodeableConcept, Validator } = contextR4();

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

    const { error } = item.validate();
    expect(error).toBeNull();
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

    const { error } = ConformanceValidator(item, 'CodeableConcept');
    expect(error).toBe("InvalidFieldException. Field(s): 'test'. Path: CodeableConcept.");
  });

  it('should be able to create a new codeable_concept using builder methods [new CodeableConceptBuilder]', async () => {
    // build() is a method that returns the object that was built
    const item = CodeableConcept.builder()
      .setId('123')
      .setText('test')
      .addCodeableConceptParamExtension('text', {
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

    const { error } = item.validate();
    expect(error).toBeNull();

    expect(item).toEqual({
      _text: {
        extension: [
          {
            url: 'url',
            valueId: '1221',
          },
        ],
      },
      id: '123',
      text: 'test',
    });
  });
});
