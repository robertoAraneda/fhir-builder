import { ICodeableConcept, IOperationOutcomeIssue, IPeriod } from 'fhirtypes/dist/r4';
import { CoverageException, CoverageExceptionBuilder, CoverageExceptionValidator } from '../../../src/r4';

describe('CoverageException FHIR R4', () => {
  describe('CoverageException Model', () => {
    it('should initialize with default values', () => {
      const exception = new CoverageException();
      expect(exception.type).toBeUndefined();
      expect(exception.period).toBeUndefined();
    });

    it('should initialize with provided values', () => {
      const exception = new CoverageException({
        type: { text: 'Type1' },
        period: { start: '2023-01-01', end: '2023-12-31' },
      });
      expect(exception.type.text).toBe('Type1');
      expect(exception.period?.start).toBe('2023-01-01');
      expect(exception.period?.end).toBe('2023-12-31');
    });

    it('should serialize to JSON correctly', () => {
      const exception = new CoverageException({
        type: { text: 'Type1' },
        period: { start: '2023-01-01', end: '2023-12-31' },
      });
      const json = exception.toJson();
      expect(json.type.text).toBe('Type1');
      expect(json.period.start).toBe('2023-01-01');
      expect(json.period.end).toBe('2023-12-31');
    });

    it('should convert to pretty string correctly', () => {
      const exception = new CoverageException({
        type: { text: 'Type1' },
        period: { start: '2023-01-01', end: '2023-12-31' },
      });
      const prettyString = exception.toPrettyString();
      expect(prettyString).toContain('  "type": {\n' + '    "text": "Type1"\n' + '  },');
      expect(prettyString).toContain(
        '  "period": {\n' + '    "start": "2023-01-01",\n' + '    "end": "2023-12-31"\n' + '  }',
      );
    });

    it('should validate correctly', () => {
      const exception = new CoverageException({
        type: { text: 'Type1' },
        period: { start: '2023-01-01', end: '2023-12-31' },
      });
      const validationResult = exception.validate();
      expect(validationResult).toBeTruthy();
    });

    it('should serialize correctly', () => {
      const exception = new CoverageException({
        type: { text: 'Type1' },
        period: { start: '2023-01-01', end: '2023-12-31' },
      });
      const serialized = exception.serialize();
      expect(serialized).toBe(JSON.stringify(exception.toJson()));
    });
  });

  describe('CoverageExceptionBuilder', () => {
    it('should build a CoverageException with default values', () => {
      const builder = new CoverageExceptionBuilder();
      const exception = builder.build();
      expect(exception.type).toBeUndefined();
      expect(exception.period).toBeUndefined();
    });

    it('should set type correctly', () => {
      const builder = new CoverageExceptionBuilder();
      const type = { text: 'Type1' } as ICodeableConcept;
      const exception = builder.setType(type).build();
      expect(exception.type).toBe(type);
    });

    it('should set period correctly', () => {
      const builder = new CoverageExceptionBuilder();
      const period = { start: '2023-01-01', end: '2023-12-31' } as IPeriod;
      const exception = builder.setPeriod(period).build();
      expect(exception.period).toBe(period);
    });

    it('should build a CoverageException with all properties set', () => {
      const builder = new CoverageExceptionBuilder();
      const type = { text: 'Type1' } as ICodeableConcept;
      const period = { start: '2023-01-01', end: '2023-12-31' } as IPeriod;
      const exception = builder.setType(type).setPeriod(period).build();
      expect(exception.type).toBe(type);
      expect(exception.period).toBe(period);
    });
  });

  describe('CoverageExceptionValidator', () => {
    it('should validate a valid CoverageException object', () => {
      const exception = {
        type: { text: 'Type1' },
        period: { start: '2023-01-01', end: '2023-12-31' },
      };
      const errors: IOperationOutcomeIssue[] = [];
      CoverageExceptionValidator(exception, 'CoverageException', errors);
      expect(errors.length).toBe(0);
    });

    it('should add an error if type is missing', () => {
      const exception = {
        period: { start: '2023-01-01', end: '2023-12-31' },
      };
      const errors: IOperationOutcomeIssue[] = [];
      CoverageExceptionValidator(exception as any, 'CoverageException', errors);
      expect(errors.length).toBeGreaterThan(0);
      expect(errors[0].details?.text).toContain('type');
    });

    it('should add an error if period is not a valid Period object', () => {
      const exception = {
        type: { text: 'Type1' },
        period: { start: 'invalid-date', end: '2023-12-31' } as any,
      };
      const errors: IOperationOutcomeIssue[] = [];
      CoverageExceptionValidator(exception, 'CoverageException', errors);
      expect(errors.length).toBeGreaterThan(0);
      expect(errors[0].details?.text).toContain('period');
    });

    it('should add an error if period is missing', () => {
      const exception = {
        type: { text: 'Type1' },
      };
      const errors: IOperationOutcomeIssue[] = [];
      CoverageExceptionValidator(exception, 'CoverageException', errors);
      expect(errors.length).toBe(0); // period is optional, so no error should be added
    });
  });
});
