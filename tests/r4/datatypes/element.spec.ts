import { fhirR4 } from '../../../src';
import { IElement } from 'fhirtypes/dist/r4';

describe('Attachment FHIR R4', () => {
  const { Validator } = fhirR4();

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

    const { error } = Validator.Element(item);
    expect(error).toBeNull();
  });

  it('should be get errors validators if new attachment has wrong data', async () => {
    const item = {
      id: '123',
      wrongProperty: 'wrong',
    };

    const { error } = Validator.Element(item);
    expect(error).toBe("InvalidFieldException. Field(s): 'wrongProperty'. Path: Element.");
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

    const { error } = Validator.Element(item);
    expect(error).toBe("RequiredFieldException. Field: 'url'. Path: Element.extension[0].url");
  });
});
