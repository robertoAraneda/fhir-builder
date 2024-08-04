import { fhirR4 } from '../../../src';

describe('Reference FHIR R4', () => {
  const { Reference, Validator } = fhirR4();

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

    const { error } = item.validate();
    expect(error).toBeNull();
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

    const { error } = item.validate();
    expect(error).toBe(
      "ReferenceException. Value: 'malformed reference string'. Reference must be in the format {ResourceType}/{id}. Path: Reference.reference",
    );
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

    const { error } = item.validate();
    expect(error).toBe(
      "ReferenceException. Value: 'malformed reference string'. Reference must be in the format {ResourceType}/{id}. Path: Reference.reference",
    );
  });

  it('should throw and error if extension have extensions and value[x] [_type]', async () => {
    const item = new Reference({
      _type: {
        extension: [
          {
            id: 'test',
            url: 'test',
            valueString: 'test',
            extension: [],
          },
        ],
      },
    });

    const { error } = item.validate();
    expect(error).toBe(
      'ConstraintException. Must have either extensions or value[x], not both.. Path: Reference._type.extension[0]',
    );
  });

  it('should throw and error if extension have extensions and value[x] [_reference]', async () => {
    const item = new Reference({
      _reference: {
        extension: [
          {
            id: 'test',
            url: 'test',
            valueString: 'test',
            extension: [],
          },
        ],
      },
    });

    const { error } = item.validate();
    expect(error).toBe(
      'ConstraintException. Must have either extensions or value[x], not both.. Path: Reference._reference.extension[0]',
    );
  });

  it('should throw and error if extension have extensions and value[x] [_display]', async () => {
    const item = new Reference({
      _reference: {
        extension: [
          {
            id: 'test',
            url: 'test',
            valueString: 'test',
            extension: [],
          },
        ],
      },
    });

    const { error } = item.validate();
    expect(error).toBe(
      'ConstraintException. Must have either extensions or value[x], not both.. Path: Reference._reference.extension[0]',
    );
  });

  it('should be able to validate a new reference with wrong field', async () => {
    const item = {
      reference: 'Patient/1',
      display: 'test',
      type: 'Patient',
      wrongProperty: 'wrongProperty', // wrong property
    };

    const { error } = Validator.Reference(item);

    expect(error).toBe("InvalidFieldException. Field(s): 'wrongProperty'. Path: Reference.");
  });

  it('should be able to create a new attachment using builder methods [new ReferenceBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const item = Reference.builder()
      .setType('Patient')
      .setDisplay('test')
      .setReference({
        id: 1,
        resourceType: 'Patient',
      })
      .build();

    expect(item).toBeDefined();
    expect(item).toBeInstanceOf(Reference);

    const { error } = item.validate();
    expect(error).toBeNull();

    expect(item).toEqual({
      display: 'test',
      reference: 'Patient/1',
      type: 'Patient',
    });
  });
});
