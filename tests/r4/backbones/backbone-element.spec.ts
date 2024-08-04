import { BackboneElementBuilder } from '../../../src/r4';

describe('BackboneElement FHIR R4', () => {
  test('should be able to validate a new backbone_element with builder', async () => {
    const item = new BackboneElementBuilder()
      .setId('123')
      .addModifierExtension({
        url: 'url',
        valueString: 'modifierExtension',
      })
      .addExtension({
        url: 'url',
        valueString: 'extension',
      })
      .entity();

    expect(item).toBeDefined();
  });
});
