import { CreateContext } from '../../../src';

describe('Coding FHIR R4', () => {
  const { Coding, Validator } = new CreateContext().forR4();

  it('should be able to create a new coding and validate with correct data [new Coding()]', async () => {
    const item = new Coding({
      id: '123',
      code: '123',
      version: '1.0.0',
      display: 'test',
      system: 'http://hl7.org/fhir/sid/us-npi',
    });
    expect(item).toBeDefined();

    const { error } = item.isValid();
    expect(error).toBeNull();
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

    const { error } = Validator.Coding(item);

    expect(error).toBe('InvalidFieldException: Fields [test] are not allowed in Coding.');
  });

  it('should be able to create a new coding using builder methods [new CodingBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const item = Coding.builder()
      .setCode('123')
      .setDisplay('test')
      .setSystem('http://hl7.org/fhir/sid/us-npi')
      .setUserSelected(true)
      .setVersion('1.0.0')
      .addParamExtension('code', { id: '123', extension: [{ url: 'url', valueId: '1221' }] })
      .build();

    expect(item).toBeDefined();
    expect(item).toBeInstanceOf(Coding);

    const { error } = item.isValid();
    expect(error).toBeNull();

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
