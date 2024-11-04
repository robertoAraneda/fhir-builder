import { ConformanceValidator } from '../../../src/core/r4/validators/base';
import { Address, AddressBuilder } from '../../../src/r4';

describe('Address FHIR R4', () => {
  it('should be able create a new address [new Address()]', async () => {
    const item = new Address({
      id: '123',
      type: 'both',
      use: 'old',
      city: 'Anytown',
      line: ['123 Main St', 'Apt 1'],
      period: {
        start: '2021-01-01',
        end: '2021-01-01',
      },
      country: 'USA',
      _city: {
        extension: [
          {
            id: 'city',
            url: 'city',
            valueDateTime: '2021-01-01',
          },
        ],
      },
    });

    expect(item).toBeDefined();

    const result = item.validate();
    expect(result.isValid).toBeTruthy();
  });

  it('should be able to validate a new address and validate with wrong data', async () => {
    const item = {
      id: '123',
      test: 'test', // wrong property
    };

    const results = ConformanceValidator('Address', item);
    expect(results.isValid).toBeFalsy();
  });

  it('should throw an error if line is not an array', async () => {
    const item = {
      id: '123',
      line: 'not an array', // wrong property
    };

    const results = ConformanceValidator('Address', item);
    expect(results.isValid).toBeFalsy();
  });

  it('should throw an error if use has invalid code', async () => {
    const item = {
      id: '123',
      use: 'invalid code',
    };

    const results = ConformanceValidator('Address', item);
    expect(results.isValid).toBeFalsy();
  });

  it('should throw an error if type has invalid code', async () => {
    const item = {
      id: '123',
      type: 'invalid code',
    };

    const results = ConformanceValidator('Address', item);
    expect(results.isValid).toBeFalsy();
  });

  it('should be able to create a new address using builder methods [new Address()]', async () => {
    const item = new AddressBuilder()
      .setId('123')
      .addLine('123 Main St')
      .setType('both')
      .setUse('old')
      .setCity('Anytown')
      .addPrimitiveExtension('_district', {
        extension: [
          {
            url: 'district',
            valueString: 'district',
          },
        ],
      })
      .build();

    const result = item.validate();
    expect(result.isValid).toBeTruthy();

    expect(item).toBeDefined();
    expect(item).toBeInstanceOf(Address);
    expect(item.toJson()).toEqual({
      _district: {
        extension: [
          {
            url: 'district',
            valueString: 'district',
          },
        ],
      },
      city: 'Anytown',
      id: '123',
      line: ['123 Main St'],
      type: 'both',
      use: 'old',
    });
  });

  it('should be get errors validators if new address has wrong data', async () => {
    const item = {
      id: '123',
      period: {
        start: '2021',
      },
      _use: {
        extension: [
          {
            url: 'use',
            valueDateTime: '2021-01-02',
          },
          {
            url: 'use',
            valueDateTime: '2021-01-02',
          },
          {
            url: 'use',
            valueDateTime: 'wrong date', // wrong date
          },
        ],
      },
    };

    const result = ConformanceValidator('Address', item);
    expect(result.isValid).toBeFalsy();
    expect(result.operationOutcome).toEqual({
      issue: [
        {
          code: 'invalid',
          details: {
            text: 'Path: Address._use.extension[2].valueDateTime. Value: wrong date',
          },
          diagnostics: 'Invalid dateTime.',
          severity: 'error',
        },
      ],
    });
  });
});
