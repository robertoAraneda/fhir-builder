import { contextR4 } from '../../../src';
import { ICodeableConcept, IElement, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ICoverageClass } from 'fhirtypes/dist/r4/backbones';
import { CoverageClassValidator } from '../../../src/core/r4/validators/backbones';

describe('CoverageClass FHIR R4', () => {
  const { CoverageClass, CoverageClassBuilder } = contextR4();

  describe('CoverageClass', () => {
    it('should initialize with default values', () => {
      const coverageClass = new CoverageClass();
      expect(coverageClass.type).toBeUndefined();
      expect(coverageClass.value).toBeUndefined();
      expect(coverageClass.name).toBeUndefined();
      expect(coverageClass._value).toBeUndefined();
      expect(coverageClass._name).toBeUndefined();
    });

    it('should initialize with provided values', () => {
      const coverageClass = new CoverageClass({
        type: { text: 'Type1' } as ICodeableConcept,
        value: 'Value1',
        name: 'Name1',
        _value: { id: 'value-extension' } as IElement,
        _name: { id: 'name-extension' } as IElement,
      });
      expect(coverageClass.type.text).toBe('Type1');
      expect(coverageClass.value).toBe('Value1');
      expect(coverageClass.name).toBe('Name1');
      expect(coverageClass._value?.id).toBe('value-extension');
      expect(coverageClass._name?.id).toBe('name-extension');
    });

    it('should serialize to JSON correctly', () => {
      const coverageClass = new CoverageClass({
        type: { text: 'Type1' } as ICodeableConcept,
        value: 'Value1',
        _value: { id: 'value-extension' } as IElement,
      });
      const json = coverageClass.toJson();
      expect(json.type.text).toBe('Type1');
      expect(json.value).toBe('Value1');
    });

    it('should convert to pretty string correctly', () => {
      const coverageClass = new CoverageClass({
        type: { text: 'Type1' } as ICodeableConcept,
        value: 'Value1',
        _value: { id: 'value-extension' } as IElement,
      });
      const prettyString = coverageClass.toPrettyString();
      expect(prettyString).toContain('  "type": {\n' + '    "text": "Type1"\n' + '  },');
      expect(prettyString).toContain('"value": "Value1"');
    });

    it('should validate correctly', () => {
      const coverageClass = new CoverageClass({
        type: { text: 'Type1' } as ICodeableConcept,
        value: 'Value1',
        _value: { id: 'value-extension' } as IElement,
      });
      const validationResult = coverageClass.validate();
      expect(validationResult).toBeTruthy();
    });

    it('should serialize correctly', () => {
      const coverageClass = new CoverageClass({
        type: { text: 'Type1' } as ICodeableConcept,
        value: 'Value1',
        _value: { id: 'value-extension' } as IElement,
      });
      const serialized = coverageClass.serialize();
      expect(serialized).toBe(JSON.stringify(coverageClass.toJson()));
    });
  });

  describe('CoverageClassBuilder', () => {
    it('should build a CoverageClass with all properties set', () => {
      const builder = new CoverageClassBuilder();
      const coverageClass = builder
        .setType({ text: 'Type1' } as ICodeableConcept)
        .setValue('Value1')
        .setName('Name1')
        .addPrimitiveExtension('_value', { id: 'value-extension' } as IElement)
        .addPrimitiveExtension('_name', { id: 'name-extension' } as IElement)
        .build();
      expect(coverageClass.type?.text).toBe('Type1');
      expect(coverageClass.value).toBe('Value1');
      expect(coverageClass.name).toBe('Name1');
      expect(coverageClass._value?.id).toBe('value-extension');
      expect(coverageClass._name?.id).toBe('name-extension');
    });

    it('should set type correctly', () => {
      const builder = new CoverageClassBuilder();
      const coverageClass = builder.setType({ text: 'Type1' } as ICodeableConcept).build();
      expect(coverageClass.type?.text).toBe('Type1');
    });

    it('should set value correctly', () => {
      const builder = new CoverageClassBuilder();
      const coverageClass = builder.setValue('Value1').build();
      expect(coverageClass.value).toBe('Value1');
    });

    it('should set name correctly', () => {
      const builder = new CoverageClassBuilder();
      const coverageClass = builder.setName('Name1').build();
      expect(coverageClass.name).toBe('Name1');
    });
  });

  describe('CoverageClassValidator', () => {
    it('should validate a valid CoverageClass object', () => {
      const coverageClass = {
        type: { text: 'Type1' },
        value: 'Value1',
        name: 'Name1',
      };
      const errors: IOperationOutcomeIssue[] = [];
      CoverageClassValidator(coverageClass as ICoverageClass, 'CoverageClass', errors);
      expect(errors.length).toBe(0);
    });

    it('should add an error if type is missing', () => {
      const coverageClass = {
        value: 'Value1',
        name: 'Name1',
      };
      const errors: IOperationOutcomeIssue[] = [];
      CoverageClassValidator(coverageClass as ICoverageClass, 'CoverageClass', errors);
      expect(errors.length).toBeGreaterThan(0);
      expect(errors[0].details?.text).toContain('type');
      expect(errors[0].code).toContain('required');
    });

    it('should add an error if value is missing', () => {
      const coverageClass = {
        type: { text: 'Type1' },
        name: 'Name1',
      };
      const errors: IOperationOutcomeIssue[] = [];
      CoverageClassValidator(coverageClass as ICoverageClass, 'CoverageClass', errors);
      expect(errors.length).toBeGreaterThan(0);
      expect(errors[0].details?.text).toContain('value');
      expect(errors[0].code).toContain('required');
    });

    it('should not add an error if name is missing', () => {
      const coverageClass = {
        type: { text: 'Type1' },
        value: 'Value1',
      };
      const errors: IOperationOutcomeIssue[] = [];
      CoverageClassValidator(coverageClass as ICoverageClass, 'CoverageClass', errors);
      expect(errors.length).toBe(0);
    });
  });
});
