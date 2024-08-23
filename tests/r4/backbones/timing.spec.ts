import { contextR4 } from '../../../src';

describe('Timing FHIR R4', () => {
  const { Timing, TimingBuilder } = contextR4();

  it('should be able to validate a new timing [new Timing()]', async () => {
    const item = new Timing({
      id: '123',
      code: {
        coding: [
          {
            code: '123',
            system: 'system',
          },
        ],
      },
    });

    expect(item).toBeDefined();
    const { isValid } = item.validate();
    expect(isValid).toBeTruthy();
  });

  it('should be able to validate a timing with a wrong code [new Timing()]', async () => {
    const item = new Timing({
      id: '123',
      code: {
        coding: [
          {
            code: '123',
          },
        ],
      },
      event: ['wrong'],
    });

    expect(item).toBeDefined();
    const { isValid, operationOutcome } = item.validate();
    expect(isValid).toBeFalsy();
    expect(operationOutcome).toEqual({
      issue: [
        {
          code: 'invalid',
          details: {
            text: 'Path: Timing.event[0]. Value: wrong',
          },
          diagnostics: 'Invalid dateTime.',
          severity: 'error',
        },
      ],
    });
  });

  // validate builder
  it('should be able to validate a new timing [Timing.builder()]', async () => {
    const item = new TimingBuilder()
      .setId('123')
      .setCode({
        coding: [
          {
            code: '123',
            system: 'system',
          },
        ],
      })
      .setRepeat({
        boundsDuration: {
          value: 1,
          unit: 'unit',
          code: 'code',
        },
      })
      .build();

    expect(item).toBeDefined();
    const { isValid } = item.validate();
    expect(isValid).toBeTruthy();
  });
});
