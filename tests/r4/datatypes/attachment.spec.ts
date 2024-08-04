import { contextR4 } from '../../../src';
import { IAttachment } from 'fhirtypes/dist/r4';
import { conformanceValidation } from '../../../src/r4/validators/base/object.validator';

describe('Attachment FHIR R4', () => {
  const { Attachment, Validator } = contextR4();

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

    const { error } = item.validate();
    expect(error).toBeNull();
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

    const { error } = item.validate();
    expect(error).toBe(
      'ConstraintException. If the Attachment has data, it SHALL have a contentType (att-1). Path: Attachment',
    );
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

    const { error } = conformanceValidation(item, 'Attachment');
    expect(error).toBeNull();
  });

  it('should be able to validate a multiple attachment', async () => {
    const item1 = {
      id: '123',
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
    const item2: IAttachment = {
      id: '123',
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
    const item3: IAttachment = {
      id: '123',
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

    const attachments = [item1, item2, item3];

    const { error } = conformanceValidation(attachments, 'Attachment');
    expect(error).toBeNull();
  });

  it('should be able to create a new attachment using builder methods [new Attachment()]', async () => {
    const item = Attachment.builder()
      .setId('123')
      .setData('data')
      .setContentType('application/pdf')
      .setCreation('2020-01-01')
      .setUrl('http://example.com')
      .addParamExtension('url', {
        extension: [
          {
            url: 'pages',
            valueString: 'pages',
          },
        ],
      })
      .build();

    expect(item).toBeDefined();
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

    const { error } = conformanceValidation(item, 'Attachment');
    expect(error).toBe("InvalidFieldException. Field(s): 'wrongProperty'. Path: Attachment.");
  });

  it('should be get errors validators If the Attachment has data, it SHALL have a contentType (att-1)', async () => {
    const item: IAttachment = {
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
    };

    const { error } = conformanceValidation(item, 'Attachment');
    expect(error).toBe(
      'ConstraintException. If the Attachment has data, it SHALL have a contentType (att-1). Path: Attachment',
    );
  });
});
