import { ICodeableConcept, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { IssueSeverityType, IssueTypeType } from 'fhirtypes/dist/r4/types';

type OperationOutcomeExceptionConfig = Pick<IOperationOutcomeIssue, 'code' | 'severity' | 'details' | 'diagnostics'>;

export class OperationOutcomeIssueException implements IOperationOutcomeIssue {
  constructor(config: OperationOutcomeExceptionConfig) {
    this.code = config.code;
    this.severity = config.severity;
    this.details = config.details || { text: 'OperationOutcomeIssueException' };
    this.diagnostics = config.diagnostics || 'OperationOutcomeIssueException';
  }
  severity: IssueSeverityType;
  code: IssueTypeType;
  details: ICodeableConcept;
  diagnostics: string;
}
