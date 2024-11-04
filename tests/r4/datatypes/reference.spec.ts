import { ConformanceValidator, Reference, ReferenceBuilder } from '../../../src/r4';

describe('Reference FHIR R4', () => {
  it('should be able to create a new reference instance and validate with correct data [new Reference()]', async () => {
    const item = new Reference({
      reference: 'Patient/1',
      display: 'test',
      type: 'Patient',
      extension: [
        {
          id: 'test-1',
          url: 'test-1',
        },
      ],
      identifier: {
        assigner: {
          reference: 'Organization/1',
        },
      },
      _type: {
        extension: [
          {
            id: 'test-1',
            url: 'test-1',
            valueString: 'test-1',
          },
        ],
      },
    });

    expect(item).toBeDefined();

    const { isValid } = item.validate();
    expect(isValid).toBeTruthy();
    expect(item).toEqual({
      _type: {
        extension: [
          {
            id: 'test-1',
            url: 'test-1',
            valueString: 'test-1',
          },
        ],
      },
      display: 'test',
      extension: [
        {
          id: 'test-1',
          url: 'test-1',
        },
      ],
      identifier: {
        assigner: {
          reference: 'Organization/1',
        },
      },
      reference: 'Patient/1',
      type: 'Patient',
    });
  });

  it('should throw and error if reference instance has malformed reference string [new Reference()] 1', async () => {
    const item = new Reference({
      reference: 'malformed reference string',
      display: 'test',
      type: 'Patient',
    });

    const { isValid, operationOutcome } = item.validate();
    expect(isValid).toBeFalsy();
    expect(operationOutcome).toEqual({
      issue: [
        {
          code: 'invalid',
          details: {
            text: 'Path: Reference.reference. Value: malformed reference string',
          },
          diagnostics: "Invalid reference format. Reference must be in the format '{ResourceType}/{id}'.",
          severity: 'error',
        },
      ],
    });
  });

  it('should throw and error if reference instance has malformed reference string [new Reference()]', async () => {
    const item = new Reference({
      reference: 'malformed reference string',
      display: 'test',
      type: 'Patient',
      _type: {
        id: 'test',
        extension: [
          {
            id: 'test',
            url: 'test',
            valueString: 'test',
          },
        ],
      },
    });

    const { isValid, operationOutcome } = item.validate();
    expect(isValid).toBeFalsy();
    expect(operationOutcome).toEqual({
      issue: [
        {
          code: 'invalid',
          details: {
            text: 'Path: Reference.reference. Value: malformed reference string',
          },
          diagnostics: "Invalid reference format. Reference must be in the format '{ResourceType}/{id}'.",
          severity: 'error',
        },
      ],
    });
  });

  it('should throw and error if extension have extensions and value[x] [_type]', async () => {
    const item = new Reference({
      _type: {
        extension: [
          {
            id: 'test',
            url: 'test',
            valueString: 'test',
            extension: [
              {
                url: 'test',
              },
            ],
          },
        ],
      },
    });

    const { isValid, operationOutcome } = item.validate();
    expect(isValid).toBeFalsy();
    expect(operationOutcome).toEqual({
      issue: [
        {
          code: 'invariant',
          details: {
            text: 'Path: Reference._type.extension[0]',
          },
          diagnostics: 'Must have either extensions or value[x], not both.',
          severity: 'error',
        },
      ],
    });
  });

  it('should throw and error if extension have extensions and value[x] [_reference]', async () => {
    const item = new Reference({
      _reference: {
        extension: [
          {
            id: 'test',
            url: 'test',
            valueString: 'test',
            extension: [
              {
                url: 'test',
              },
            ],
          },
        ],
      },
    });

    const { isValid, operationOutcome } = item.validate();
    expect(isValid).toBeFalsy();
    expect(operationOutcome).toEqual({
      issue: [
        {
          code: 'invariant',
          details: {
            text: 'Path: Reference._reference.extension[0]',
          },
          diagnostics: 'Must have either extensions or value[x], not both.',
          severity: 'error',
        },
      ],
    });
  });

  it('should throw and error if extension have extensions and value[x] [_display]', async () => {
    const item = new Reference({
      _reference: {
        extension: [
          {
            id: 'test',
            url: 'test',
            valueString: 'test',
            extension: [
              {
                url: 'test',
              },
            ],
          },
        ],
      },
    });

    const { isValid, operationOutcome } = item.validate();
    expect(isValid).toBeFalsy();
    expect(operationOutcome).toEqual({
      issue: [
        {
          code: 'invariant',
          details: {
            text: 'Path: Reference._reference.extension[0]',
          },
          diagnostics: 'Must have either extensions or value[x], not both.',
          severity: 'error',
        },
      ],
    });
  });

  it('should be able to validate a new reference with wrong field', async () => {
    const item = {
      reference: 'Patient/1',
      display: 'test',
      type: 'Patient',
      wrongProperty: 'wrongProperty', // wrong property
    };

    const { isValid, operationOutcome } = ConformanceValidator('Reference', item);
    expect(isValid).toBeFalsy();

    expect(operationOutcome).toEqual({
      issue: [
        {
          code: 'invalid',
          details: {
            text: 'Path: Reference. Additional fields: wrongProperty',
          },
          diagnostics: 'Invalid fields have been found.',
          severity: 'error',
        },
      ],
    });
  });

  it('should be able to create a new attachment using builder methods [new ReferenceBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const item = new ReferenceBuilder()
      .setType('Patient')
      .setDisplay('test')
      .setReference({
        id: 1,
        resourceType: 'Patient',
      })
      .build();

    expect(item).toBeDefined();
    expect(item).toBeInstanceOf(Reference);

    const { isValid } = item.validate();
    expect(isValid).toBeTruthy();

    expect(item).toEqual({
      display: 'test',
      reference: 'Patient/1',
      type: 'Patient',
    });
  });
});
