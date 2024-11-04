import { IElement, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { IMoney } from 'fhirtypes/dist/r4/datatypes';
import { Money, MoneyBuilder, MoneyValidator } from '../../../src/r4';

describe('Money FHIR R4', () => {
  describe('MoneyModel', () => {
    it('should initialize with default values', () => {
      const money = new Money();
      expect(money.value).toBeUndefined();
      expect(money.currency).toBeUndefined();
      expect(money._value).toBeUndefined();
    });

    it('should initialize with provided values', () => {
      const money = new Money({ value: 100, currency: 'USD' });
      expect(money.value).toBe(100);
      expect(money.currency).toBe('USD');
    });

    it('should serialize to JSON correctly', () => {
      const money = new Money({ value: 100, currency: 'USD' });
      const json = money.toJson();
      expect(json.value).toBe(100);
      expect(json.currency).toBe('USD');
    });

    it('should convert to pretty string correctly', () => {
      const money = new Money({ value: 100, currency: 'USD' });
      const prettyString = money.toPrettyString();
      expect(prettyString).toContain('"value": 100');
      expect(prettyString).toContain('"currency": "USD"');
    });

    it('should validate correctly', () => {
      const money = new Money({ value: 100, currency: 'USD' });
      const validationResult = money.validate();
      expect(validationResult).toBeTruthy();
    });

    it('should add an error if value is not a number', () => {
      const money = new Money({ value: 'invalid' as any, currency: 'USD' });
      const validationResult = money.validate();
      expect(validationResult.isValid).toBeFalsy();
    });

    it('should add an error if currency is not a valid ISO 4217 code', () => {
      const money = new Money({ value: 100, currency: 'INVALID' as any });
      const validationResult = money.validate();
      expect(validationResult.isValid).toBeFalsy();
    });

    it('should serialize correctly', () => {
      const money = new Money({ value: 100, currency: 'USD' });
      const serialized = money.serialize();
      expect(serialized).toBe(JSON.stringify(money.toJson()));
    });
  });

  describe('MoneyBuilder', () => {
    it('should build a Money object with default values', () => {
      const builder = new MoneyBuilder();
      const money = builder.build();
      expect(money.value).toBeUndefined();
      expect(money.currency).toBeUndefined();
    });

    it('should set value correctly', () => {
      const builder = new MoneyBuilder();
      const money = builder.setValue(100).build();
      expect(money.value).toBe(100);
    });

    it('should set currency correctly', () => {
      const builder = new MoneyBuilder();
      const money = builder.setCurrency('USD').build();
      expect(money.currency).toBe('USD');
    });

    it('should add primitive extension correctly', () => {
      const builder = new MoneyBuilder();
      const extension = { id: 'ext1' } as IElement;
      const money = builder.addPrimitiveExtension('_value', extension).build();
      expect(money._value).toBe(extension);
    });

    it('should build a Money object with all properties set', () => {
      const builder = new MoneyBuilder();
      const extension = { id: 'ext1' } as IElement;
      const money = builder.setValue(100).setCurrency('USD').addPrimitiveExtension('_value', extension).build();
      expect(money.value).toBe(100);
      expect(money.currency).toBe('USD');
      expect(money._value).toBe(extension);
    });
  });

  describe('MoneyValidator', () => {
    it('should validate a valid Money object', () => {
      const money: IMoney = { value: 100, currency: 'USD' };
      const errors: IOperationOutcomeIssue[] = [];
      MoneyValidator(money, 'Money', errors);
      expect(errors.length).toBe(0);
    });

    it('should add an error if value is missing', () => {
      const money: IMoney = { currency: 'USD' } as any;
      const errors: IOperationOutcomeIssue[] = [];
      MoneyValidator(money, 'Money', errors);
      expect(errors.length).toBeGreaterThan(0);
      expect(errors[0].details?.text).toContain('value');
    });

    it('should add an error if currency is missing', () => {
      const money: IMoney = { value: 100 } as any;
      const errors: IOperationOutcomeIssue[] = [];
      MoneyValidator(money, 'Money', errors);
      expect(errors.length).toBeGreaterThan(0);
      expect(errors[0].details?.text).toContain('currency');
    });

    it('should add an error if currency is not a valid ISO 4217 code', () => {
      const money: IMoney = { value: 100, currency: 'INVALID' as any };
      const errors: IOperationOutcomeIssue[] = [];
      MoneyValidator(money, 'Money', errors);
      expect(errors.length).toBeGreaterThan(0);
      expect(errors[0].details?.text).toContain('currency');
    });

    it('should add an error if value is not a number', () => {
      const money: IMoney = { value: 'invalid' as any, currency: 'USD' };
      const errors: IOperationOutcomeIssue[] = [];
      MoneyValidator(money, 'Money', errors);
      expect(errors.length).toBeGreaterThan(0);
      expect(errors[0].details?.text).toContain('value');
    });
  });
});
