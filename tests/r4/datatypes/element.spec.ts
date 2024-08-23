import { IElement } from 'fhirtypes/dist/r4';
import { ConformanceValidator } from '../../../src/core/r4/validators/base';

describe('Element FHIR R4', () => {
  it('should be able to validate a new attachment [IAttachment]', async () => {
    const item: IElement = {
      id: '123',
      extension: [
        {
          url: 'url',
          valueString: 'valueString',
        },
      ],
    };

    const { isValid } = ConformanceValidator(item, 'Element');
    expect(isValid).toBeTruthy();
  });

  it('should be get errors validators if new attachment has wrong data', async () => {
    const item = {
      id: '123',
      wrongProperty: 'wrong',
    };

    const { operationOutcome } = ConformanceValidator(item, 'Element');
    expect(operationOutcome).toEqual({
      issue: [
        {
          code: 'invalid',
          details: {
            text: 'Path: Element. Additional fields: wrongProperty',
          },
          diagnostics: 'Invalid fields have been found.',
          severity: 'error',
        },
      ],
    });
  });

  it('should get validation error if element has wrong data in extension', async () => {
    const item = {
      id: '123',
      extension: [
        {
          // not url
          valueString: 'valueString',
        },
      ],
    };

    const { operationOutcome } = ConformanceValidator(item, 'Element');
    expect(operationOutcome).toEqual({
      issue: [
        {
          code: 'required',
          details: {
            text: 'Path: Element.extension[0].url. Value: undefined',
          },
          diagnostics: 'Field url is required',
          severity: 'error',
        },
      ],
    });
  });
});
