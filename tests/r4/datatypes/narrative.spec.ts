import { contextR4 } from '../../../src';
import { INarrative } from 'fhirtypes/dist/r4';
import { conformanceValidation } from '../../../src/r4/validators/base/object.validator';

describe('Meta FHIR R4', () => {
  const { Narrative, Validator } = contextR4();

  it('should be able to create a new meta and validate with correct data [new Meta()]', async () => {
    const item = new Narrative({
      div: '<div xmlns="http://www.w3.org/1999/xhtml">test</div>',
      status: 'generated',
    });

    expect(item).toBeDefined();
    const { error } = item.validate();
    expect(error).toBeNull();
  });

  it('should be able to create a new meta and validate with correct data [IMeta]', async () => {
    const item: INarrative = {
      div: '<div xmlns="http://www.w3.org/1999/xhtml">test</div>',
      status: 'generated',
    };

    const { error } = conformanceValidation(item, 'Narrative');
    expect(error).toBeNull();
  });

  it('should be able to validate a new meta and validate with wrong data', async () => {
    const item = {
      id: '123',
      div: '<div xmlns="http://www.w3.org/1999/xhtml">test</div>',
      // not status attribute
    };

    const { error } = conformanceValidation(item, 'Narrative');
    expect(error).toBe("RequiredFieldException. Field: 'status'. Path: Narrative.status");
  });

  it('should be able to create a new meta using builder methods [new MetaBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const item = Narrative.builder()
      .setId('123')
      .setDiv('<div xmlns="http://www.w3.org/1999/xhtml">test</div>')
      .setStatus('generated')
      .build();

    expect(item).toBeDefined();
    expect(item).toBeInstanceOf(Narrative);

    const { error } = item.validate();
    expect(error).toBeNull();

    expect(item).toEqual({
      id: '123',
      div: '<div xmlns="http://www.w3.org/1999/xhtml">test</div>',
      status: 'generated',
    });
  });
});
