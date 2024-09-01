import { contextR4 } from '../../../src';
import { ConformanceValidator } from '../../../src/core/r4/validators/base';

describe('Period FHIR R4', () => {
  const { Period, PeriodBuilder } = contextR4();

  it('should be able to create a new period and validate with correct data [new Period()]', async () => {
    const item = new Period({
      start: '2020-01-01T00:00:00.000Z',
      end: '2020-01-02',
      extension: [
        {
          url: 'test',
          valueBoolean: true,
        },
        {
          url: 'test2',
          valueDateTime: '2025',
        },
      ],
    });

    expect(item).toBeDefined();

    const { isValid } = item.validate();
    expect(isValid).toBeTruthy();
  });

  it('should return a Period with builder methods [new PeriodBuilder()]', async () => {
    const item = new PeriodBuilder()
      .setId('id')
      .setStart('2020-01-01')
      .setEnd('2020-01-02')
      .addPrimitiveExtension('_start', {
        id: 'start',
        extension: [
          {
            url: 'http://hl7.org/fhir/StructureDefinition/iso21090-EN-restriction',
            valueBoolean: true,
          },
        ],
      })
      .addPrimitiveExtension('_end', {
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

    const { isValid } = item.validate();
    expect(isValid).toBeTruthy();

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

    const { isValid, operationOutcome } = ConformanceValidator('Period', item);
    expect(isValid).toBeFalsy();
    expect(operationOutcome).toEqual({
      issue: [
        {
          code: 'invalid',
          details: {
            text: 'Path: Period. Additional fields: notExist',
          },
          diagnostics: 'Invalid fields have been found.',
          severity: 'error',
        },
      ],
    });
  });

  it('should return an error if has a invalid data', async () => {
    const item = {
      start: '2020-01-01',
      end: 'wrong date', // wrong date
    };

    const { isValid, operationOutcome } = ConformanceValidator('Period', item);
    expect(isValid).toBeFalsy();
    expect(operationOutcome).toEqual({
      issue: [
        {
          code: 'invalid',
          details: {
            text: 'Path: Period.end. Value: wrong date',
          },
          diagnostics: 'Invalid dateTime.',
          severity: 'error',
        },
      ],
    });
  });

  it('should return an error if start date is greater than end date', async () => {
    const item = {
      start: '2020-01-01',
      end: '2019-01-01', // wrong date
    };

    const { isValid, operationOutcome } = ConformanceValidator('Period', item);
    expect(isValid).toBeFalsy();
    expect(operationOutcome).toEqual({
      issue: [
        {
          code: 'invariant',
          details: {
            text: 'Path: Period',
          },
          diagnostics: '+ Rule (per-1). If present, start SHALL have a lower value than end',
          severity: 'error',
        },
      ],
    });
  });
});
