import { IAddress } from 'fhirtypes/dist/r4';
import { fhirR4 } from '../../../src';

describe('Address FHIR R4', () => {
  const { Address, Validator } = fhirR4();

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

    const { error } = item.validate();
    expect(error).toBeNull();
  });

  it('should be able create a multiples address [new Address()]', async () => {
    const item1 = new Address({
      use: 'home',
      type: 'postal',
      text: 'test',
      line: ['line1', 'line2'],
    });

    const item2: IAddress = {
      use: 'home',
      type: 'postal',
      text: 'test',
      line: ['line1', 'line2'],
    };

    const adresses = [item1, item2];

    expect(adresses).toBeDefined();
    const { error } = Validator.Address(adresses);
    expect(error).toBeNull();
  });

  it('should be able to validate a new address and validate with wrong data', async () => {
    const item = {
      id: '123',
      test: 'test', // wrong property
    };

    const { error } = Validator.Address(item);
    expect(error).toBe("InvalidFieldException. Field(s): 'test'. Path: Address.");
  });

  it('should throw an error if line is not an array', async () => {
    const item = {
      id: '123',
      line: 'not an array', // wrong property
    };

    const { error } = Validator.Address(item);
    expect(error).toBe('Field line must be an array in Address');
  });

  it('should throw an error if use has invalid code', async () => {
    const item = {
      id: '123',
      use: 'invalid code',
    };

    const { error } = Validator.Address(item);
    expect(error).toBe('Field must be one of [home, work, temp, old, billing] in Address.use');
  });

  it('should throw an error if type has invalid code', async () => {
    const item = {
      id: '123',
      type: 'invalid code',
    };

    const { error } = Validator.Address(item);
    expect(error).toBe('Field must be one of [postal, physical, both] in Address.type');
  });

  it('should be able to create a new address using builder methods [new Address()]', async () => {
    const item = Address.builder()
      .setId('123')
      .addLine('123 Main St')
      .setType('both')
      .setUse('old')
      .setCity('Anytown')
      .addParamExtension('district', {
        extension: [
          {
            url: 'district',
            valueString: 'district',
          },
        ],
      })
      .build();

    expect(item).toBeDefined();
    expect(item).toBeInstanceOf(Address);
    const { error } = item.validate();
    expect(error).toBeNull();
    expect(item).toEqual({
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
        start: '2021-01-01',
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

    const { error } = Validator.Address(item);
    expect(error).toBe('Invalid dateTime: wrong date at path: Address._use.extension[2].valueDateTime');
  });
});
