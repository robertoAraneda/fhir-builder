import { IExtension } from 'fhirtypes/dist/r4';
import { ConformanceValidator, Extension, ExtensionBuilder } from '../../../src/r4';

describe('Extension FHIR R4', () => {
  it('should be able to create a new extension and validate with correct data [new Extension()]', async () => {
    const item = new Extension({
      id: '123',
      url: 'url',
      valueDateTime: '2020-01-01T00:00:00.000Z',
    });

    expect(item).toBeDefined();

    const { isValid } = item.validate();
    expect(isValid).toBeTruthy();
  });

  it('should be able to create a new extension and validate with correct data [IExtension]', async () => {
    const item: IExtension = {
      id: '123',
      url: 'url',
      valueBoolean: true,
    };

    expect(item).toBeDefined();
    const { isValid } = ConformanceValidator('Extension', item);
    expect(isValid).toBeTruthy();
  });

  it('should be validate: Must have either extensions or value[x], not both', async () => {
    const item: IExtension = {
      id: '123',
      url: 'url',
      valueBoolean: true,
      extension: [
        {
          url: 'test',
        },
      ], // extra property
    };

    const { operationOutcome, isValid } = ConformanceValidator('Extension', item);
    expect(isValid).toBeFalsy();
    expect(operationOutcome).toEqual({
      issue: [
        {
          code: 'invariant',
          details: {
            text: 'Path: Extension',
          },
          diagnostics: 'Must have either extensions or value[x], not both.',
          severity: 'error',
        },
      ],
    });
  });

  it('should be able to validate a new extension and validate with wrong data', async () => {
    const item = {
      id: '123',
      valueBoolean: true,
      test: 'test', // wrong property
    };

    const { operationOutcome, isValid } = ConformanceValidator('Extension', item);
    expect(isValid).toBeFalsy();
    expect(operationOutcome).toEqual({
      issue: [
        {
          code: 'invalid',
          details: {
            text: 'Path: Extension. Additional fields: test',
          },
          diagnostics: 'Invalid fields have been found.',
          severity: 'error',
        },
        {
          code: 'required',
          details: {
            text: 'Path: Extension.url. Value: undefined',
          },
          diagnostics: 'Field url is required',
          severity: 'error',
        },
      ],
    });
  });

  it('should be able to create a new extension using builder methods', async () => {
    // build() is a method that returns the object that was built
    const item = new ExtensionBuilder().setId('123').setUrl('url').setValue('valueBoolean', true).build();

    expect(item).toBeDefined();

    const { operationOutcome, isValid } = ConformanceValidator('Extension', item);
    expect(isValid).toBeTruthy();
    expect(item).toBeInstanceOf(Extension);

    expect(item.toJson()).toEqual({
      id: '123',
      url: 'url',
      valueBoolean: true,
    });
  });
});
