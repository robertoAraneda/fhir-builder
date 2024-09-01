import { contextR4 } from '../../../src';
import { IMeta } from 'fhirtypes/dist/r4';
import { ConformanceValidator } from '../../../src/core/r4/validators/base';

describe('Meta FHIR R4', () => {
  const { Meta, MetaBuilder } = contextR4();

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
    const { isValid } = item.validate();
    expect(isValid).toBeTruthy();
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

    const { isValid } = ConformanceValidator('Meta', item);
    expect(isValid).toBeTruthy();
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

    const { isValid, operationOutcome } = ConformanceValidator('Meta', item);
    expect(isValid).toBeFalsy();
    expect(operationOutcome).toEqual({
      issue: [
        {
          code: 'invalid',
          details: {
            text: 'Path: Meta. Additional fields: wrongProperty',
          },
          diagnostics: 'Invalid fields have been found.',
          severity: 'error',
        },
        {
          code: 'invalid',
          details: {
            text: 'Path: Meta.lastUpdated. Value: 2030',
          },
          diagnostics: 'Invalid instant.',
          severity: 'error',
        },
      ],
    });
  });

  it('should be able to create a new meta using builder methods [new MetaBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const item = new MetaBuilder()
      .addProfile('http://hl7.org/fhir/us/core/StructureDefinition/patient')
      .addSecurity({ system: 'test', code: 'test' })
      .addTag({ code: '123', system: 'http://hl7.org/fhir/sid/us-npi' })
      .setLastUpdated('2030-06-02T12:00:00.000Z')
      .setSource('test')
      .setVersionId('test')
      .build();

    expect(item).toBeDefined();
    expect(item).toBeInstanceOf(Meta);

    const { isValid } = item.validate();
    expect(isValid).toBeTruthy();

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
