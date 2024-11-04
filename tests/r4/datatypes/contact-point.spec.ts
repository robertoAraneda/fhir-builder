import { IContactPoint } from 'fhirtypes/dist/r4';
import { ConformanceValidator, ContactPoint, ContactPointBuilder } from '../../../src/r4';

describe('ContactPoint FHIR R4', () => {
  it('should be able to create a new contact point and validate with correct data [new ContactPoint()]', async () => {
    const item = new ContactPoint({
      id: '123',
      value: 'test',
      system: 'url',
      rank: 1,
      use: 'home',
      extension: [
        {
          id: '123',
          url: 'http://example.com',
        },
      ],
    });

    expect(item).toBeDefined();

    const result = item.validate();
    expect(result.isValid).toBeTruthy();
  });

  it('should be able to create a new contact point and validate with correct data [IContactPoint]', async () => {
    const item: IContactPoint = {
      id: '123',
      value: 'test',
      system: 'url',
      rank: 1,
      use: 'home',
    };

    const result = ConformanceValidator('ContactPoint', item);
    expect(result.isValid).toBeTruthy();
  });

  it('should be able to validate a new contact point and validate with wrong data', async () => {
    const item = {
      id: '123',
      value: 'test',
      system: 'wrong-system', // wrong property
      rank: 1,
      use: 'home',
      test: 'test', // wrong property
    };

    const result = ConformanceValidator('ContactPoint', item);
    expect(result.isValid).toBeFalsy();
    // TODO: expect(result.errors).toEqual([])
    expect(result.operationOutcome).toEqual({
      issue: [
        {
          code: 'invalid',
          details: {
            text: 'Path: ContactPoint. Additional fields: test',
          },
          diagnostics: 'Invalid fields have been found.',
          severity: 'error',
        },
        {
          code: 'code-invalid',
          details: {
            text: 'Path: ContactPoint.system; Value: wrong-system',
          },
          diagnostics: 'Code must be one of [phone, fax, email, pager, url, sms, other]',
          severity: 'error',
        },
      ],
    });
  });

  it('should be able to create a new contact point using builder methods', async () => {
    // build() is a method that returns the object that was built
    const item = new ContactPointBuilder()
      .setId('123')
      .setRank(1)
      .setSystem('url')
      .setValue('test')
      .addPrimitiveExtension('_system', { extension: [{ id: '123', url: 'url', valueDate: '2022-06-12' }] })
      .build();

    expect(item).toBeDefined();

    const result = item.validate();
    expect(result.isValid).toBeTruthy();

    expect(item).toEqual({
      id: '123',
      rank: 1,
      system: 'url',
      value: 'test',
      _system: {
        extension: [
          {
            id: '123',
            url: 'url',
            valueDate: '2022-06-12',
          },
        ],
      },
    });
  });
});
