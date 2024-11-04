import { IRepeat } from 'fhirtypes/dist/r4';
import { ConformanceValidator, Repeat, RepeatBuilder } from '../../../src/r4';

describe('Repeat FHIR R4', () => {
  it('should be able to create a new repeat and validate with correct data [new Repeat()]', async () => {
    const item = new Repeat({
      count: 1,
      duration: 1,
      durationUnit: 'min',
      period: 1,
      periodUnit: 'h',
      boundsDuration: {
        value: 1,
        unit: 'unit',
        code: 'code',
      },
    });

    expect(item).toBeDefined();
    const { isValid } = item.validate();
    expect(isValid).toBeTruthy();
  });

  it('should be able to create a new repeat and validate with correct data [IRepeat]', async () => {
    const item: IRepeat = {
      count: 1,
      duration: 1,
      durationUnit: 'd',
      period: 1,
      periodUnit: 'd',
      boundsDuration: {
        value: 1,
        unit: 'unit',
        code: 'code',
      },
    };

    const { isValid } = ConformanceValidator('Repeat', item);
    expect(isValid).toBeTruthy();
  });

  it('should be able to validate a new repeat and validate with wrong data', async () => {
    const item = {
      count: 1,
      duration: 1,
      durationUnit: 'unit', // wrong
      period: 1,
      periodUnit: 'unit',
      boundsDuration: {
        value: 1,
        unit: 'unit',
      },
    };

    const { operationOutcome, isValid } = ConformanceValidator('Repeat', item);

    expect(isValid).toBeFalsy();
    expect(operationOutcome).toEqual({
      issue: [
        {
          code: 'code-invalid',
          details: {
            text: 'Path: Repeat.durationUnit; Value: unit',
          },
          diagnostics: 'Code must be one of [s, min, h, d, wk, mo, a]',
          severity: 'error',
        },
        {
          code: 'code-invalid',
          details: {
            text: 'Path: Repeat.periodUnit; Value: unit',
          },
          diagnostics: 'Code must be one of [s, min, h, d, wk, mo, a]',
          severity: 'error',
        },
        {
          code: 'invariant',
          details: {
            text: 'Path: Repeat.boundsDuration. Value: value:1 | code:undefined',
          },
          diagnostics:
            'There SHALL be a code if there is a value and it SHALL be an expression of time. If system is present, it SHALL be UCUM.',
          severity: 'error',
        },
      ],
    });
  });

  it('should be able to create a new repeat using builder methods [new RepeatBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const item = new RepeatBuilder()
      .setId('id')
      .addExtension({ url: 'url', valueString: 'value' })
      .setCount(1)
      .setCountMax(1)
      .setDuration(1)
      .setDurationMax(1)
      .setDurationUnit('a')
      .setPeriod(1)
      .setPeriodMax(1)
      .setPeriodUnit('d')
      .setBounds('boundsRange', {
        low: {
          value: 1,
          unit: 'unit',
          code: 'code',
        },
        high: {
          value: 1,
          unit: 'unit',
          code: 'code',
        },
      })
      .addDayOfWeek('mon')
      .addTimeOfDay('20:00:00')
      .setOffset(1)
      .addPrimitiveExtension('_frequency', {
        extension: [
          {
            url: 'url',
            valueString: 'value',
          },
        ],
      })
      .addPrimitiveExtension('_when', [
        {
          extension: [
            {
              url: 'url',
              valueString: 'value',
            },
          ],
        },
      ])
      .build();

    expect(item).toBeDefined();
    const { isValid } = item.validate();
    expect(isValid).toBeTruthy();
    expect(item.toJson()).toEqual({
      _frequency: {
        extension: [
          {
            url: 'url',
            valueString: 'value',
          },
        ],
      },
      _when: [
        {
          extension: [
            {
              url: 'url',
              valueString: 'value',
            },
          ],
        },
      ],
      boundsRange: {
        high: {
          code: 'code',
          unit: 'unit',
          value: 1,
        },
        low: {
          code: 'code',
          unit: 'unit',
          value: 1,
        },
      },
      count: 1,
      countMax: 1,
      dayOfWeek: ['mon'],
      duration: 1,
      durationMax: 1,
      durationUnit: 'a',
      extension: [
        {
          url: 'url',
          valueString: 'value',
        },
      ],
      id: 'id',
      offset: 1,
      period: 1,
      periodMax: 1,
      periodUnit: 'd',
      timeOfDay: ['20:00:00'],
    });
  });
});
