import { ICodeableConcept, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ISimpleQuantity } from 'fhirtypes/dist/r4/datatypes/ISimpleQuantity';
import { IMoney } from 'fhirtypes/dist/r4/datatypes';
import { ICoverageException } from 'fhirtypes/dist/r4/backbones';
import { ICoverageCostToBeneficiary } from 'fhirtypes/dist/r4/backbones';
import {
  CoverageCostToBeneficiary,
  CoverageCostToBeneficiaryBuilder,
  CoverageCostToBeneficiaryValidator,
} from '../../../src/r4';

describe('CoverageCostToBeneficiary FHIR R4', () => {
  describe('CoverageCostToBeneficiary', () => {
    it('should initialize with default values', () => {
      const coverageCostToBeneficiary = new CoverageCostToBeneficiary();
      expect(coverageCostToBeneficiary.type).toBeUndefined();
      expect(coverageCostToBeneficiary.valueQuantity).toBeUndefined();
      expect(coverageCostToBeneficiary.valueMoney).toBeUndefined();
      expect(coverageCostToBeneficiary.exception).toBeUndefined();
    });

    it('should initialize with provided values', () => {
      const coverageCostToBeneficiary = new CoverageCostToBeneficiary({
        type: { text: 'Type1' } as ICodeableConcept,
        valueQuantity: { value: 100 } as ISimpleQuantity,
        valueMoney: { value: 200, currency: 'USD' } as IMoney,
        exception: [{ type: { text: 'Exception1' } } as ICoverageException],
      });
      expect(coverageCostToBeneficiary.type?.text).toBe('Type1');
      expect(coverageCostToBeneficiary.valueQuantity?.value).toBe(100);
      expect(coverageCostToBeneficiary.valueMoney?.value).toBe(200);
      expect(coverageCostToBeneficiary.valueMoney?.currency).toBe('USD');
      expect(coverageCostToBeneficiary.exception?.[0].type.text).toBe('Exception1');
    });

    it('should serialize to JSON correctly', () => {
      const coverageCostToBeneficiary = new CoverageCostToBeneficiary({
        type: { text: 'Type1' } as ICodeableConcept,
        valueQuantity: { value: 100 } as ISimpleQuantity,
        valueMoney: { value: 200, currency: 'USD' } as IMoney,
      });
      const json = coverageCostToBeneficiary.toJson();
      expect(json.type.text).toBe('Type1');
      expect(json.valueQuantity.value).toBe(100);
      expect(json.valueMoney.value).toBe(200);
      expect(json.valueMoney.currency).toBe('USD');
    });

    it('should convert to pretty string correctly', () => {
      const coverageCostToBeneficiary = new CoverageCostToBeneficiary({
        type: { text: 'Type1' } as ICodeableConcept,
        valueQuantity: { value: 100 } as ISimpleQuantity,
        valueMoney: { value: 200, currency: 'USD' } as IMoney,
      });
      const prettyString = coverageCostToBeneficiary.toPrettyString();
      expect(prettyString).toContain('  "type": {\n' + '    "text": "Type1"\n' + '  },');
      expect(prettyString).toContain('  "valueQuantity": {\n' + '    "value": 100\n' + '  },');
      expect(prettyString).toContain('  "valueMoney": {\n' + '    "value": 200,\n' + '    "currency": "USD"\n' + '  }');
    });

    it('should validate correctly', () => {
      const coverageCostToBeneficiary = new CoverageCostToBeneficiary({
        type: { text: 'Type1' } as ICodeableConcept,
        // TODO: Fix this
        valueQuantity: { value: 100 } as ISimpleQuantity,
        valueMoney: { value: 200, currency: 'USD' } as IMoney,
      });
      const validationResult = coverageCostToBeneficiary.validate();
      expect(validationResult).toBeTruthy();
    });

    it('should serialize correctly', () => {
      const coverageCostToBeneficiary = new CoverageCostToBeneficiary({
        type: { text: 'Type1' } as ICodeableConcept,
        valueQuantity: { value: 100 } as ISimpleQuantity,
        valueMoney: { value: 200, currency: 'USD' } as IMoney,
      });
      const serialized = coverageCostToBeneficiary.serialize();
      expect(serialized).toBe(JSON.stringify(coverageCostToBeneficiary.toJson()));
    });
  });

  describe('CoverageCostToBeneficiaryBuilder', () => {
    it('should build a CoverageCostToBeneficiary with all properties set', () => {
      const builder = new CoverageCostToBeneficiaryBuilder();
      const coverageCostToBeneficiary = builder
        .setType({ text: 'Type1' } as ICodeableConcept)
        .setValueQuantity({ value: 100 } as ISimpleQuantity)
        .setValueMoney({ value: 200, currency: 'USD' } as IMoney)
        .addException({ type: { text: 'Exception1' } } as ICoverageException)
        .build();
      expect(coverageCostToBeneficiary.type?.text).toBe('Type1');
      expect(coverageCostToBeneficiary.valueQuantity?.value).toBe(100);
      expect(coverageCostToBeneficiary.valueMoney?.value).toBe(200);
      expect(coverageCostToBeneficiary.valueMoney?.currency).toBe('USD');
      expect(coverageCostToBeneficiary.exception?.[0].type.text).toBe('Exception1');
    });

    it('should set type correctly', () => {
      const builder = new CoverageCostToBeneficiaryBuilder();
      const coverageCostToBeneficiary = builder.setType({ text: 'Type1' } as ICodeableConcept).build();
      expect(coverageCostToBeneficiary.type?.text).toBe('Type1');
    });

    it('should set valueQuantity correctly', () => {
      const builder = new CoverageCostToBeneficiaryBuilder();
      const coverageCostToBeneficiary = builder.setValueQuantity({ value: 100 } as ISimpleQuantity).build();
      expect(coverageCostToBeneficiary.valueQuantity?.value).toBe(100);
    });

    it('should set valueMoney correctly', () => {
      const builder = new CoverageCostToBeneficiaryBuilder();
      const coverageCostToBeneficiary = builder.setValueMoney({ value: 200, currency: 'USD' } as IMoney).build();
      expect(coverageCostToBeneficiary.valueMoney?.value).toBe(200);
      expect(coverageCostToBeneficiary.valueMoney?.currency).toBe('USD');
    });

    it('should add exception correctly', () => {
      const builder = new CoverageCostToBeneficiaryBuilder();
      const exception = { type: { text: 'Exception1' } } as ICoverageException;
      const coverageCostToBeneficiary = builder.addException(exception).build();
      expect(coverageCostToBeneficiary.exception?.[0].type.text).toBe('Exception1');
    });
  });

  describe('CoverageCostToBeneficiaryValidator', () => {
    it('should validate a valid CoverageCostToBeneficiary object', () => {
      const coverageCostToBeneficiary = {
        type: { text: 'Type1' },
        valueQuantity: { value: 100 },
        exception: [{ type: { text: 'Exception1' } }],
      };
      const errors: IOperationOutcomeIssue[] = [];
      CoverageCostToBeneficiaryValidator(
        coverageCostToBeneficiary as ICoverageCostToBeneficiary,
        'CoverageCostToBeneficiary',
        errors,
      );
      expect(errors.length).toBe(0);
    });

    it('should add an error if valueQuantity and valueMoney are both missing', () => {
      const coverageCostToBeneficiary = {
        type: { text: 'Type1' },
        exception: [{ type: { text: 'Exception1' } }],
      };
      const errors: IOperationOutcomeIssue[] = [];
      CoverageCostToBeneficiaryValidator(
        coverageCostToBeneficiary as ICoverageCostToBeneficiary,
        'CoverageCostToBeneficiary',
        errors,
      );
      expect(errors.length).toBeGreaterThan(0);
      expect(errors[0].diagnostics).toContain(
        'The CoverageCostToBeneficiary must have either a valueQuantity or valueMoney',
      );
    });

    it('should add an error if exception is not an array', () => {
      const coverageCostToBeneficiary: ICoverageCostToBeneficiary = {
        type: { text: 'Type1' },
        valueQuantity: { value: 100 },
        valueMoney: { value: 200, currency: 'USD' },
        exception: { type: { text: 'Exception1' } } as any,
      };
      const errors: IOperationOutcomeIssue[] = [];
      CoverageCostToBeneficiaryValidator(coverageCostToBeneficiary, 'CoverageCostToBeneficiary', errors);
      expect(errors.length).toBeGreaterThan(0);
      expect(errors[0].details?.text).toContain('exception');
    });
  });
});
