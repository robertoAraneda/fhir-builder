import { fhirR4 } from '../../../src';
import { IHumanName } from 'fhirtypes/dist/r4';

describe('HumanName FHIR R4', () => {
  const { HumanName, Validator } = fhirR4();

  it('should be able to create a new humanname and validate with correct data [new HumanName()]', async () => {
    const item = new HumanName({
      use: 'maiden',
      family: 'Windsor',
      given: ['Peter', 'James'],
      period: {
        end: '2002',
      },
      _use: {
        extension: [
          {
            id: 'test',
            url: 'test',
            valueCode: 'test',
          },
        ],
      },
    });

    expect(item).toBeDefined();

    const { error } = item.validate();
    expect(error).toBeNull();
  });

  it('should be able to create a new humanname and validate with correct data [IHumanName]', async () => {
    const item: IHumanName = {
      use: 'maiden',
      family: 'Windsor',
      given: ['Peter', 'James'],
      period: {
        end: '2002',
      },
      _use: {
        extension: [
          {
            id: 'test',
            url: 'test',
            valueCode: 'test',
          },
        ],
      },
    };

    const { error } = Validator.HumanName(item);
    expect(error).toBeNull();
  });

  it('should be able to validate a new humanname and validate with wrong data', async () => {
    const item = {
      use: 'wrong use', // wrong property
      family: 'Windsor',
      given: ['Peter', 'James'],
      period: {
        end: '2002',
      },
      _use: {
        extension: [
          {
            id: 'test',
            url: 'test',
            valueCode: 'test',
          },
        ],
      },
    };

    const { error } = Validator.HumanName(item);
    expect(error).toBe(
      'Field must be one of [usual, official, temp, nickname, anonymous, old, maiden] in HumanName.use',
    );
  });

  it('should be able to create a new identifier using builder methods [new HumanNameBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const item = HumanName.builder()
      .setUse('official')
      .addGiven('Peter')
      .addGiven('James')
      .setFamily('Windsor')
      .setPeriod({ end: '2002' })
      .addParamExtension('given', [
        {
          extension: [
            {
              url: 'url',
              valueCode: 'valueCode',
            },
          ],
        },
      ])
      .addParamExtension('family', {
        extension: [
          {
            url: 'http://hl7.org/fhir/StructureDefinition/humanname-mothers-family',
            valueString: 'White',
          },
        ],
      })
      .build();

    expect(item).toBeDefined();
    expect(item).toBeInstanceOf(HumanName);

    const { error } = item.validate();
    expect(error).toBeNull();

    expect(item).toEqual({
      _family: {
        extension: [
          {
            url: 'http://hl7.org/fhir/StructureDefinition/humanname-mothers-family',
            valueString: 'White',
          },
        ],
      },
      family: 'Windsor',
      given: ['Peter', 'James'],
      _given: [
        {
          extension: [
            {
              url: 'url',
              valueCode: 'valueCode',
            },
          ],
        },
      ],
      period: {
        end: '2002',
      },
      use: 'official',
    });
  });
});
