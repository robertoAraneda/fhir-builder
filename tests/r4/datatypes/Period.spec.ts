import { CreateContext } from '../../../src';

describe('Period FHIR R4', () => {
  const { Period, Validator } = new CreateContext().forR4();

  it('should be able to create a new period and validate with correct data [new Period()]', async () => {
    const item = new Period({
      start: '2020-01-01T00:00:00.000Z',
      end: '2020-01-02',
    });

    expect(item).toBeDefined();

    const { error } = item.isValid();
    expect(error).toBeNull();
  });

  it('should return a Period with builder methods [new PeriodBuilder()]', async () => {
    const item = Period.builder()
      .setId('id')
      .setStart('2020-01-01')
      .setEnd('2020-01-02')
      .addParamExtension('start', {
        id: 'start',
        extension: [
          {
            url: 'http://hl7.org/fhir/StructureDefinition/iso21090-EN-restriction',
            valueBoolean: true,
          },
        ],
      })
      .addParamExtension('end', {
        extension: [
          {
            url: 'test',
            valueBoolean: true,
          },
        ],
      })
      .build();

    expect(item).toBeDefined();
    expect(item).toBeInstanceOf(Period);

    const { error } = item.isValid();
    expect(error).toBeNull();

    expect(item).toEqual({
      end: '2020-01-02',
      id: 'id',
      start: '2020-01-01',
      _start: {
        id: 'start',
        extension: [
          {
            url: 'http://hl7.org/fhir/StructureDefinition/iso21090-EN-restriction',
            valueBoolean: true,
          },
        ],
      },
      _end: {
        extension: [
          {
            url: 'test',
            valueBoolean: true,
          },
        ],
      },
    });
  });

  it('should return an error if attribute does not exist', async () => {
    const item = {
      start: '2020-01-01',
      end: '2020-01-02',
      notExist: 'not exist',
    };

    const { error } = Validator.Period(item);
    expect(error).toBe('InvalidFieldException: Fields [notExist] are not allowed in Period.');
  });

  it('should return an error if has a invalid data', async () => {
    const item = {
      start: '2020-01-01',
      end: 'wrong date', // wrong date
    };

    const { error } = Validator.Period(item);
    expect(error).toBe('Invalid dateTime: wrong date at path: Period.end');
  });
});
