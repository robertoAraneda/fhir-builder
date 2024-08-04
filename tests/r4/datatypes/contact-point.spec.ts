import { contextR4 } from '../../../src';
import { IContactPoint } from 'fhirtypes/dist/r4';
import { conformanceValidation } from '../../../src/r4/validators/base/object.validator';

describe('ContactPoint FHIR R4', () => {
  const { ContactPoint, Validator } = contextR4();

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

    const { error } = item.validate();
    expect(error).toBeNull();
  });

  it('should be able to create a new contact point and validate with correct data [IContactPoint]', async () => {
    const item: IContactPoint = {
      id: '123',
      value: 'test',
      system: 'url',
      rank: 1,
      use: 'home',
    };

    const { error } = conformanceValidation(item, 'ContactPoint');
    expect(error).toBeNull();
  });

  it('should be able to validate a new contact point and validate with wrong data', async () => {
    const item = {
      id: '123',
      value: 'test',
      system: 'bad system', // wrong property
      rank: 1,
      use: 'home',
      test: 'test', // wrong property
    };

    const { error } = conformanceValidation(item, 'ContactPoint');
    expect(error).toBe("InvalidFieldException. Field(s): 'test'. Path: ContactPoint.");
  });

  it('should be able to create a new contact point using builder methods', async () => {
    // build() is a method that returns the object that was built
    const item = ContactPoint.builder()
      .setId('123')
      .setRank(1)
      .setSystem('url')
      .setValue('test')
      .addParamExtension('system', { extension: [{ id: '123', url: 'url', valueDate: '2022-06-12' }] })
      .build();

    expect(item).toBeDefined();

    const { error } = item.validate();
    expect(error).toBeNull();

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
