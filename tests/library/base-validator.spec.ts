import {
  validateAdditionalFields,
  validateArray,
  validateEnumValues,
  validateObject,
  ValidateReferenceFormat,
  validateRequiredFieldByDefinition,
} from '../../src/core/r4/validators/base/base.validator';
import { InvalidFieldException } from '../../src/core/commons/exceptions/invalid-field.exception';
import { RequiredException } from '../../src/core/commons/exceptions/required.exception';
import { contextR4 } from '../../lib';

describe('BaseValidator', () => {
  it('lib', () => {
    const { Patient } = contextR4();
    const patient = new Patient();
    patient.name = [{ given: ['John'] }];
    expect(patient).toBeDefined();
  });
  it('should validate additionalFields', () => {
    const data = {
      id: '123',
      preferred: true,
    };

    const definitions = [
      {
        name: 'id',
        type: 'string',
        isArray: false,
        isRequired: true,
      },
      {
        name: 'preferred',
        type: 'boolean',
        isArray: false,
        isRequired: false,
      },
    ];

    const path = 'PatientCommunication';

    expect(() => validateAdditionalFields(data, definitions as any, path)).not.toThrow();
  });

  it('should validate additionalFields with wrong data', () => {
    const data = {
      id: '123',
      preferred: true,
      wrongProperty: 'wrongProperty',
    };

    const definitions = [
      {
        name: 'id',
        type: 'string',
        isArray: false,
        isRequired: true,
      },
      {
        name: 'preferred',
        type: 'boolean',
        isArray: false,
        isRequired: false,
      },
    ];

    const path = 'Path';

    try {
      validateAdditionalFields(data, definitions as any, path);
    } catch (e: any) {
      expect(e).toBeInstanceOf(InvalidFieldException);
      expect(e.message).toBe("InvalidFieldException. Field(s): 'wrongProperty'. Path: Path.");
    }
  });

  it('should validate required fields', () => {
    const data = {
      id: '123',
      preferred: true,
    };

    const definitions = [
      {
        name: 'id',
        type: 'string',
        isArray: false,
        isRequired: true,
      },
      {
        name: 'preferred',
        type: 'boolean',
        isArray: false,
        isRequired: false,
      },
    ];

    const path = 'PatientCommunication';

    expect(() => validateRequiredFieldByDefinition(data, definitions as any, path)).not.toThrow();
  });

  it('should validate required fields with wrong data', () => {
    const data = {
      preferred: true,
    };

    const definitions = [
      {
        name: 'id',
        type: 'string',
        isArray: false,
        isRequired: true,
      },
      {
        name: 'preferred',
        type: 'boolean',
        isArray: false,
        isRequired: false,
      },
    ];

    const path = 'PatientCommunication';

    try {
      validateRequiredFieldByDefinition(data, definitions as any, path);
    } catch (e: any) {
      expect(e).toBeInstanceOf(RequiredException);
      expect(e.message).toBe("RequiredFieldException. Field: 'id'. Path: PatientCommunication.id");
    }
  });

  // validateEnumValues
  it('should validate enum values', () => {
    const data = 'value';
    const definition = {
      name: 'id',
      type: 'string',
      isArray: false,
      isRequired: true,
      enumValues: ['value'],
    };
    const path = 'PatientCommunication';

    expect(() => validateEnumValues(data, definition as any, path)).not.toThrow();
  });

  it('should validate enum values with wrong data', () => {
    const data = 'wrongValue';
    const definition = {
      name: 'id',
      type: 'string',
      isArray: false,
      isRequired: true,
      enumValues: ['value'],
    };
    const path = 'PatientCommunication';

    try {
      validateEnumValues(data, definition as any, path);
    } catch (e: any) {
      expect(e).toBeInstanceOf(Error);
      expect(e.message).toBe('Field must be one of [value] in PatientCommunication.id');
    }
  });

  // validateArray
  it('should validate array', () => {
    const data = ['value'];
    const definition = {
      name: 'id',
      type: 'string',
      isArray: true,
      isRequired: true,
    };
    const path = 'PatientCommunication';

    expect(() => validateArray(data, definition as any, path)).not.toThrow();
  });

  it('should validate array with wrong data', () => {
    const data = 'value';
    const definition = {
      name: 'id',
      type: 'string',
      isArray: true,
      isRequired: true,
    };
    const path = 'PatientCommunication';

    try {
      validateArray(data, definition as any, path);
    } catch (e: any) {
      expect(e).toBeInstanceOf(Error);
      expect(e.message).toBe('Field id must be an array in PatientCommunication');
    }
  });

  // validateObject
  it('should validate object', () => {
    const data = {
      id: '123',
    };
    const definition = {
      name: 'id',
      type: 'string', // correct type
      isArray: false,
      isRequired: true,
    };
    const path = 'PatientCommunication';

    expect(() => validateObject(data.id, definition as any, path)).not.toThrow();
  });

  it('should validate object with wrong unknown type', () => {
    const data = {
      id: 123,
    };
    const definition = {
      name: 'id',
      type: 'unknown', // wrong type
      isArray: false,
      isRequired: true,
    };
    const path = 'PatientCommunication';

    try {
      validateObject(data.id, definition as any, path);
    } catch (e: any) {
      expect(e).toBeInstanceOf(Error);
      expect(e.message).toEqual('No validator found for unknown');
    }
  });

  it('should validate object with wrong data', () => {
    const data = {
      id: 'wrong',
    };
    const definition = {
      name: 'id',
      type: 'oid', // correct type
      isArray: false,
      isRequired: true,
    };
    const path = 'PatientCommunication';

    try {
      validateObject(data.id, definition as any, path);
    } catch (e: any) {
      expect(e).toBeInstanceOf(Error);
      expect(e.message).toEqual('Invalid oid: wrong at path: PatientCommunication.id');
    }
  });

  // validate reference format
  it('should validate reference format', () => {
    const value = {
      reference: 'Patient/123',
    };
    const resources = ['Patient'];
    const path = 'PatientCommunication';

    expect(() => ValidateReferenceFormat(value, resources as any[], path)).not.toThrow();
  });

  it('should validate reference format with wrong data', () => {
    const value = {
      reference: 'Patient/123',
    };
    const resources = ['Observation'];
    const path = 'PatientCommunication';

    try {
      ValidateReferenceFormat(value, resources as any[], path);
    } catch (e: any) {
      expect(e.message).toEqual(
        "ReferenceException. Value: 'Patient'. ResourceType must be one of the following: 'Observation'. Path: PatientCommunication.reference",
      );
    }
  });

  it('should validate reference format with no resources', () => {
    const value = {
      reference: 'Patient/123',
    };
    const path = 'PatientCommunication';

    expect(() => ValidateReferenceFormat(value, null, path)).not.toThrow();
  });

  it('should validate reference format with no reference', () => {
    const value = {
      reference: '',
    };
    const path = 'PatientCommunication';

    expect(() => ValidateReferenceFormat(value, null, path)).not.toThrow();
  });
});
