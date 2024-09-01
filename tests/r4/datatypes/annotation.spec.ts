import { contextR4 } from '../../../src';
import { IAnnotation } from 'fhirtypes/dist/r4';
import { ConformanceValidator } from '../../../src/core/r4/validators/base';

describe('Annotation FHIR R4', () => {
  const { Annotation, AnnotationBuilder } = contextR4();

  it('should be able to create a new meta and validate with correct data [new Annotation()]', async () => {
    const item = new Annotation({
      text: 'test',
      time: '2030-06-02T12:00:00.000Z',
      authorString: 'test',
    });

    expect(item).toBeDefined();
    const { isValid } = item.validate();
    expect(isValid).toBeTruthy();
  });

  it('should be able to create a new meta and validate with correct data [IAnnotation]', async () => {
    const item: IAnnotation = {
      id: '123',
      time: '2030-06-02T12:00:00.000Z',
      text: 'test',
      _text: {
        extension: [
          {
            id: 'text',
            url: 'text',
            valueDateTime: '2030-06-02T12:00:00.000Z',
          },
        ],
      },
    };

    const { isValid } = ConformanceValidator('Annotation', item);
    expect(isValid).toBeTruthy();
  });

  it('should be able to validate a new meta and validate with wrong data', async () => {
    const item = {
      id: '123',
      time: '2030-06-02T12:00:00.000Z',
      text: 'test',
      authorReference: {
        reference: 'test',
      },
    };

    const { isValid, operationOutcome } = ConformanceValidator('Annotation', item);

    expect(isValid).toBeFalsy();
    expect(operationOutcome).toEqual({
      issue: [
        {
          code: 'invalid',
          details: {
            text: 'Path: Annotation.authorReference.reference. Value: test',
          },
          diagnostics: "Invalid reference format. Reference must be in the format '{ResourceType}/{id}'.",
          severity: 'error',
        },
      ],
    });
  });

  it('should be able to create a new meta using builder methods [new AnnotationBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const item = new AnnotationBuilder()
      .addPrimitiveExtension('_text', {
        extension: [
          {
            url: 'text',
            valueDateTime: '2030-06-02T12:00:00.000Z',
          },
        ],
      })
      .setAuthor('authorReference', { display: 'author' })
      .setId('123')
      .setText('test')
      .build();

    expect(item).toBeDefined();
    expect(item).toBeInstanceOf(Annotation);

    const { isValid } = item.validate();
    expect(isValid).toBeTruthy();

    expect(item).toEqual({
      _text: {
        extension: [
          {
            url: 'text',
            valueDateTime: '2030-06-02T12:00:00.000Z',
          },
        ],
      },
      authorReference: {
        display: 'author',
      },
      id: '123',
      text: 'test',
    });
  });
});
