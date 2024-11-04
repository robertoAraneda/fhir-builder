import { QuantityComparatorEnum } from 'fhirtypes/dist/r4/enums';
import { IElement, IOperationOutcomeIssue, IQuantity } from 'fhirtypes/dist/r4';
import { Quantity, QuantityBuilder, QuantityValidator } from '../../../src/r4';

describe('Quantity', () => {
  describe('QuantityBuilder', () => {
    it('should set code correctly', () => {
      const builder = new QuantityBuilder();
      builder.setCode('test-code');
      const quantity = builder.build();
      expect(quantity.code).toBe('test-code');
    });

    it('should set system correctly', () => {
      const builder = new QuantityBuilder();
      builder.setSystem('test-system');
      const quantity = builder.build();
      expect(quantity.system).toBe('test-system');
    });

    it('should set unit correctly', () => {
      const builder = new QuantityBuilder();
      builder.setUnit('test-unit');
      const quantity = builder.build();
      expect(quantity.unit).toBe('test-unit');
    });

    it('should set value correctly', () => {
      const builder = new QuantityBuilder();
      builder.setValue(123);
      const quantity = builder.build();
      expect(quantity.value).toBe(123);
    });

    it('should set comparator correctly', () => {
      const builder = new QuantityBuilder();
      builder.setComparator(QuantityComparatorEnum.LESS_THAN);
      const quantity = builder.build();
      expect(quantity.comparator).toBe(QuantityComparatorEnum.LESS_THAN);
    });

    it('should add primitive extension correctly', () => {
      const builder = new QuantityBuilder();
      const extension: IElement = { extension: [{ url: 'url', valueCode: 'code' }] };
      builder.addPrimitiveExtension('_code', extension);
      const quantity = builder.build();
      expect(quantity._code).toBe(extension);
    });

    it('should build a complete quantity object', () => {
      const builder = new QuantityBuilder();
      builder
        .setCode('test-code')
        .setSystem('test-system')
        .setUnit('test-unit')
        .setValue(123)
        .setComparator(QuantityComparatorEnum.LESS_THAN);
      const quantity = builder.build();
      expect(quantity.code).toBe('test-code');
      expect(quantity.system).toBe('test-system');
      expect(quantity.unit).toBe('test-unit');
      expect(quantity.value).toBe(123);
      expect(quantity.comparator).toBe(QuantityComparatorEnum.LESS_THAN);
    });
  });

  describe('Quantity Model', () => {
    it('should initialize with default values', () => {
      const quantity = new Quantity();
      expect(quantity.code).toBeUndefined();
      expect(quantity.comparator).toBeUndefined();
      expect(quantity.system).toBeUndefined();
      expect(quantity.unit).toBeUndefined();
      expect(quantity.value).toBeUndefined();
    });

    it('should initialize with provided values', () => {
      const quantity = new Quantity({
        code: 'test-code',
        comparator: QuantityComparatorEnum.LESS_THAN,
        system: 'test-system',
        unit: 'test-unit',
        value: 123,
      });
      expect(quantity.code).toBe('test-code');
      expect(quantity.comparator).toBe(QuantityComparatorEnum.LESS_THAN);
      expect(quantity.system).toBe('test-system');
      expect(quantity.unit).toBe('test-unit');
      expect(quantity.value).toBe(123);
    });

    it('should serialize to JSON correctly', () => {
      const quantity = new Quantity({
        code: 'test-code',
        comparator: QuantityComparatorEnum.LESS_THAN,
        system: 'test-system',
        unit: 'test-unit',
        value: 123,
      });
      const json = quantity.toJson();
      expect(json.code).toBe('test-code');
      expect(json.comparator).toBe(QuantityComparatorEnum.LESS_THAN);
      expect(json.system).toBe('test-system');
      expect(json.unit).toBe('test-unit');
      expect(json.value).toBe(123);
    });

    it('should convert to pretty string correctly', () => {
      const quantity = new Quantity({
        code: 'test-code',
        comparator: QuantityComparatorEnum.LESS_THAN,
        system: 'test-system',
        unit: 'test-unit',
        value: 123,
      });
      const prettyString = quantity.toPrettyString();
      expect(prettyString).toContain('"code": "test-code"');
      expect(prettyString).toContain('"comparator": "<"');
      expect(prettyString).toContain('"system": "test-system"');
      expect(prettyString).toContain('"unit": "test-unit"');
      expect(prettyString).toContain('"value": 123');
    });

    it('should validate correctly', () => {
      const quantity = new Quantity({
        code: 'test-code',
        comparator: QuantityComparatorEnum.LESS_THAN,
        system: 'test-system',
        unit: 'test-unit',
        value: 123,
      });
      const validationResult = quantity.validate();
      expect(validationResult).toBeTruthy();
    });
  });

  describe('QuantityValidator', () => {
    it('should validate a valid quantity object', () => {
      const quantity: IQuantity = {
        value: 123,
        comparator: '>',
        unit: 'mg',
        system: 'http://unitsofmeasure.org',
        code: 'mg',
      };
      const errors: IOperationOutcomeIssue[] = [];
      expect(() => QuantityValidator(quantity, 'Quantity', errors)).not.toThrow();
      expect(errors.length).toBe(0);
    });

    it('should add an error if code is present without system', () => {
      const quantity: IQuantity = {
        value: 123,
        comparator: '>',
        unit: 'mg',
        code: 'mg',
      };
      const errors: IOperationOutcomeIssue[] = [];
      QuantityValidator(quantity, 'Quantity', errors);
      expect(errors.length).toBeGreaterThan(0);
      expect(errors[0].diagnostics).toBe(
        '+ Rule (qty-3). If a code for the unit is present, the system SHALL also be present',
      );
    });
  });
});
