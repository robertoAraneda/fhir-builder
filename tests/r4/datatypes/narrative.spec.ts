import { contextR4 } from '../../../src';
import { INarrative } from 'fhirtypes/dist/r4';
import { ConformanceValidator } from '../../../src/core/r4/validators/base';

describe('Narrative FHIR R4', () => {
  const { Narrative, NarrativeBuilder } = contextR4();

  it('should be able to create a new meta and validate with correct data [new Meta()]', async () => {
    const item = new Narrative({
      div: '<div xmlns="http://www.w3.org/1999/xhtml">test</div>',
      status: 'generated',
    });

    expect(item).toBeDefined();
    const { isValid } = item.validate();
    expect(isValid).toBeTruthy();
  });

  it('should be able to create a new meta and validate with correct data [IMeta]', async () => {
    const item: INarrative = {
      div: '<div xmlns="http://www.w3.org/1999/xhtml">test</div>',
      status: 'generated',
    };

    const { isValid } = ConformanceValidator('Narrative', item);
    expect(isValid).toBeTruthy();
  });

  it('should be able to validate a new meta and validate with wrong data', async () => {
    const item = {
      id: '123',
      div: '<div xmlns="http://www.w3.org/1999/xhtml">test</div>',
      // not status attribute
    };

    const { isValid, operationOutcome } = ConformanceValidator('Narrative', item);
    expect(isValid).toBeFalsy();
    expect(operationOutcome).toEqual({
      issue: [
        {
          code: 'required',
          details: {
            text: 'Path: Narrative.status. Value: undefined',
          },
          diagnostics: 'Field status is required',
          severity: 'error',
        },
      ],
    });
  });

  it('should be able to create a new meta using builder methods [new MetaBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const item = new NarrativeBuilder()
      .setId('123')
      .setDiv('<div xmlns="http://www.w3.org/1999/xhtml">test</div>')
      .setStatus('generated')
      .build();

    expect(item).toBeDefined();
    expect(item).toBeInstanceOf(Narrative);

    const { isValid } = item.validate();
    expect(isValid).toBeTruthy();

    expect(item).toEqual({
      id: '123',
      div: '<div xmlns="http://www.w3.org/1999/xhtml">test</div>',
      status: 'generated',
    });
  });
});
