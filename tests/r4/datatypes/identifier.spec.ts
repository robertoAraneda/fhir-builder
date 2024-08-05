import { contextR4 } from '../../../src';
import { IIdentifier } from 'fhirtypes/dist/r4';

import { ConformanceValidator } from '../../../src/core/r4/validators/base/conformance.validator';

describe('Identifier FHIR R4', () => {
  const { Identifier, Period, Validator } = contextR4();

  it('should be able to create a new identifier and validate with correct data [new Identifier()]', async () => {
    const item = new Identifier({
      id: '123',
      use: 'official',
      value: '1234567890',
      system: 'http://hl7.org/fhir/sid/us-npi',
      period: {
        start: '2020-01-01',
        end: '2020-01-02',
      },
      assigner: {
        reference: 'Organization/123',
      },
    });

    expect(item).toBeDefined();

    const { error } = item.validate();
    expect(error).toBeNull();
  });

  it('should be validate: Malformed assigner reference', async () => {
    const item = {
      id: '123',
      use: 'official',
      value: '1234567890',
      system: 'http://hl7.org/fhir/sid/us-npi',
      period: {
        start: '2020-01-01',
        end: '2020-01-02',
      },
      assigner: {
        reference: 'malformed reference',
      },
    };

    const { error } = ConformanceValidator(item, 'Identifier');
    expect(error).toBe(
      "ReferenceException. Value: 'malformed reference'. ResourceType must be one of the following: 'Organization'. Path: Identifier.assigner.reference",
    );
  });

  it('should be validate: Malformed assigner reference 2', async () => {
    const item: IIdentifier = {
      id: '123',
      use: 'official',
      value: '1234567890',
      system: 'http://hl7.org/fhir/sid/us-npi',
      period: {
        start: '2020-01-01',
        end: '2020-01-02',
      },
      assigner: {
        reference: 'WrongResourceType/id',
      },
    };

    const { error } = ConformanceValidator(item, 'Identifier');
    expect(error).toBe(
      "ReferenceException. Value: 'WrongResourceType'. ResourceType must be one of the following: 'Organization'. Path: Identifier.assigner.reference",
    );
  });

  it('should be able to validate a new reference and validate with wrong data', async () => {
    const item = {
      id: '123',
      use: 'official',
      value: '1234567890',
      system: 'http://hl7.org/fhir/sid/us-npi',
      period: {
        start: '2020-01-01',
        end: '2020-01-02',
      },
      assigner: {
        reference: 'Organization/123',
      },
      wrongProperty: 'wrongProperty', // wrong property
    };

    const { error } = ConformanceValidator(item, 'Identifier');
    expect(error).toBe("InvalidFieldException. Field(s): 'wrongProperty'. Path: Identifier.");
  });

  it('should be able to create a new identifier using builder methods [new IdentifierBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const period = Period.builder().setStart('2020-01-01').setEnd('2020-01-02').build();

    const item = Identifier.builder()
      .setUse('official')
      .setSystem('http://hl7.org/fhir/sid/us-npi')
      .setPeriod(period)
      .setValue('1234567890')
      .setAssigner({ reference: 'Organization/123' })
      .build();

    expect(item).toBeDefined();
    expect(item).toBeInstanceOf(Identifier);

    const { error } = item.validate();
    expect(error).toBeNull();

    expect(item).toEqual({
      assigner: {
        reference: 'Organization/123',
      },
      period: {
        start: '2020-01-01',
        end: '2020-01-02',
      },
      system: 'http://hl7.org/fhir/sid/us-npi',
      use: 'official',
      value: '1234567890',
    });
  });
});
