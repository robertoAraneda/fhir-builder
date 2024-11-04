import { IAttachment } from 'fhirtypes/dist/r4';
import { Attachment, AttachmentBuilder, ConformanceValidator } from '../../../src/r4';

describe('Attachment FHIR R4', () => {
  it('should be able to validate a new attachment [new Attachment()]', async () => {
    const item = new Attachment({
      id: '123',
      url: 'http://example.com',
      data: 'data',
      title: 'title',
      language: 'en',
      contentType: 'application/pdf',
    });

    expect(item).toBeDefined();

    const { isValid } = item.validate();
    expect(isValid).toBeTruthy();
  });

  it('should throw an error if data is wrong using Attachment class', async () => {
    const item = new Attachment({
      id: '123',
      url: 'http://example.com',
      data: 'data',
      title: 'title',
      language: 'en',
      contentType: undefined, // missing contentType
      _data: {
        extension: [
          {
            id: 'data',
            url: 'data',
            valueString: 'data',
          },
        ],
      },
    });

    expect(item).toBeDefined();

    const { operationOutcome } = item.validate();
    expect(operationOutcome).toEqual({
      issue: [
        {
          code: 'invariant',
          details: {
            text: 'Path: Attachment.contentType. Value: undefined',
          },
          diagnostics: 'If the Attachment has data, it SHALL have a contentType (att-1)',
          severity: 'error',
        },
      ],
    });
  });

  it('should be able to validate a new attachment [IAttachment]', async () => {
    const item: IAttachment = {
      id: '123',
      url: 'http://example.com',
      data: 'data',
      title: 'title',
      language: 'en',
      contentType: 'application/pdf',
      _data: {
        extension: [
          {
            id: 'data',
            url: 'data',
            valueString: 'data',
          },
        ],
      },
    };

    const { isValid } = ConformanceValidator('Attachment', item);
    expect(isValid).toBeTruthy();
  });

  it('should be able to create a new attachment using builder methods [new Attachment()]', async () => {
    const item = new AttachmentBuilder()
      .setId('123')
      .setData('data')
      .setContentType('application/pdf')
      .setCreation('2020-01-01')
      .setUrl('http://example.com')
      .addPrimitiveExtension('_url', {
        extension: [
          {
            url: 'pages',
            valueString: 'pages',
          },
        ],
      })
      .build();

    expect(item).toBeDefined();

    const { isValid } = item.validate();
    expect(isValid).toBeTruthy();

    expect(item).toEqual({
      id: '123',
      _url: {
        extension: [
          {
            url: 'pages',
            valueString: 'pages',
          },
        ],
      },
      contentType: 'application/pdf',
      creation: '2020-01-01',
      data: 'data',
      url: 'http://example.com',
    });
  });

  it('should be get errors validators if new attachment has wrong data', async () => {
    const item = {
      id: '123',
      wrongProperty: 'wrong',
    };

    const { operationOutcome } = ConformanceValidator('Attachment', item);
    expect(operationOutcome).toEqual({
      issue: [
        {
          code: 'invalid',
          details: {
            text: 'Path: Attachment. Additional fields: wrongProperty',
          },
          diagnostics: 'Invalid fields have been found.',
          severity: 'error',
        },
      ],
    });
  });
});
