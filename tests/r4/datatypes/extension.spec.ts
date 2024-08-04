import { fhirR4 } from '../../../src';
import { IExtension } from 'fhirtypes/dist/r4';

describe('Extension FHIR R4', () => {
  const { Validator, Extension } = fhirR4();

  it('should be able to create a new extension and validate with correct data [new Extension()]', async () => {
    const item = new Extension({
      id: '123',
      url: 'url',
      valueDateTime: '2020-01-01T00:00:00.000Z',
    });

    expect(item).toBeDefined();
  });

  it('should be able to create a new extension and validate with correct data [IExtension]', async () => {
    const item: IExtension = {
      id: '123',
      url: 'url',
      valueBoolean: true,
    };

    expect(item).toBeDefined();
    const { error } = Validator.Extension(item);
    expect(error).toBeNull();
  });

  it('should be validate: Must have either extensions or value[x], not both', async () => {
    const item: IExtension = {
      id: '123',
      url: 'url',
      valueBoolean: true,
      extension: [], // extra property
    };

    const { error } = Validator.Extension(item);
    expect(error).toBe('ConstraintException. Must have either extensions or value[x], not both.. Path: Extension');
  });

  it('should be able to validate a new extension and validate with wrong data', async () => {
    const item = {
      id: '123',
      valueBoolean: true,
      test: 'test', // wrong property
    };

    const { error } = Validator.Extension(item);
    expect(error).toBe("InvalidFieldException. Field(s): 'test'. Path: Extension.");
  });

  it('should be able to create a new extension using builder methods', async () => {
    // build() is a method that returns the object that was built
    const item = Extension.builder()
      .setId('123')
      .setUrl('url')
      .addParamExtension('valueUrl', {
        extension: [
          {
            url: 'url',
            valueDate: '2022-06-12',
          },
        ],
      })
      .build();

    expect(item).toBeDefined();

    const { error } = Validator.Extension(item);
    expect(error).toBeNull();
    expect(item).toBeInstanceOf(Extension);

    expect(item).toEqual({
      _valueUrl: {
        extension: [
          {
            url: 'url',
            valueDate: '2022-06-12',
          },
        ],
      },
      id: '123',
      url: 'url',
    });
  });
});
