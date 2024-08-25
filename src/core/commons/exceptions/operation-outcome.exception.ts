import {
  ICodeableConcept,
  IOperationOutcomeIssue,
  OperationOutcomeIssueCodeType,
  OperationOutcomeIssueSeverityType,
} from 'fhirtypes/dist/r4';

type OperationOutcomeExceptionConfig = Pick<IOperationOutcomeIssue, 'code' | 'severity' | 'details' | 'diagnostics'>;

export class OperationOutcomeIssueException implements IOperationOutcomeIssue {
  constructor(config: OperationOutcomeExceptionConfig) {
    this.code = config.code;
    this.severity = config.severity;
    this.details = config.details || { text: 'OperationOutcomeIssueException' };
    this.diagnostics = config.diagnostics || 'OperationOutcomeIssueException';
  }
  severity: OperationOutcomeIssueSeverityType;
  code: OperationOutcomeIssueCodeType;
  details: ICodeableConcept;
  diagnostics: string;
}
