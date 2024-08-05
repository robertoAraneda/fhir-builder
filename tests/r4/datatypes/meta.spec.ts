import { contextR4 } from '../../../src';
import { IMeta } from 'fhirtypes/dist/r4';

import { ConformanceValidator } from '../../../src/core/r4/validators/base/conformance.validator';

describe('Meta FHIR R4', () => {
  const { Meta, Validator } = contextR4();

  it('should be able to create a new meta and validate with correct data [new Meta()]', async () => {
    const item = new Meta({
      id: '123',
      tag: [
        {
          code: '123',
          system: 'http://hl7.org/fhir/sid/us-npi',
        },
      ],
      profile: ['test'],
      source: 'test',
      security: [{ system: 'test', code: 'test' }],
      lastUpdated: '2030-06-02T12:00:00.000Z',
      versionId: 'test',
    });

    expect(item).toBeDefined();
    const { error } = item.validate();
    expect(error).toBeNull();
  });

  it('should be able to create a new meta and validate with correct data [IMeta]', async () => {
    const item: IMeta = {
      id: '123',
      tag: [
        {
          code: '123',
          system: 'http://hl7.org/fhir/sid/us-npi',
        },
      ],
      source: 'test',
      security: [{ system: 'test', code: 'test' }],
      lastUpdated: '2030-06-02T12:00:00.000Z',
      versionId: 'test',
    };

    const { error } = ConformanceValidator(item, 'Meta');
    expect(error).toBeNull();
  });

  it('should be able to validate a new meta and validate with wrong data', async () => {
    const item = {
      id: '123',
      tag: [
        {
          code: '123',
          system: 'http://hl7.org/fhir/sid/us-npi',
        },
      ],
      source: 'test',
      security: [{ system: 'test', code: 'test' }],
      lastUpdated: '2030', // wrong date
      versionId: 'test',
      wrongProperty: 'test', // wrong property
    };

    const { error } = ConformanceValidator(item, 'Meta');
    expect(error).toBe("InvalidFieldException. Field(s): 'wrongProperty'. Path: Meta.");
  });

  it('should be able to create a new meta using builder methods [new MetaBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const item = Meta.builder()
      .addProfile('http://hl7.org/fhir/us/core/StructureDefinition/patient')
      .addSecurity({ system: 'test', code: 'test' })
      .addTag({ code: '123', system: 'http://hl7.org/fhir/sid/us-npi' })
      .setLastUpdated('2030-06-02T12:00:00.000Z')
      .setSource('test')
      .setVersionId('test')
      .build();

    expect(item).toBeDefined();
    expect(item).toBeInstanceOf(Meta);

    const { error } = item.validate();
    expect(error).toBeNull();

    expect(item).toEqual({
      source: 'test',
      tag: [
        {
          code: '123',
          system: 'http://hl7.org/fhir/sid/us-npi',
        },
      ],
      versionId: 'test',
      lastUpdated: '2030-06-02T12:00:00.000Z',
      profile: ['http://hl7.org/fhir/us/core/StructureDefinition/patient'],
      security: [
        {
          system: 'test',
          code: 'test',
        },
      ],
    });
  });
});
