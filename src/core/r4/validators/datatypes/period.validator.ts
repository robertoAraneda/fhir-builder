import { IOperationOutcomeIssue, IPeriod } from 'fhirtypes/dist/r4';
import { createDatatypeDefinition } from '../base/definitions';
import { ModelValidator } from '../base';
import { OperationOutcomeIssueException } from '../../../commons/exceptions/operation-outcome.exception';

const modelFields = createDatatypeDefinition<IPeriod>([
  { name: 'start', type: 'dateTime', isArray: false, isRequired: false },
  { name: 'end', type: 'dateTime', isArray: false, isRequired: false },
  { name: '_start', type: 'Element', isArray: false, isRequired: false },
  { name: '_end', type: 'Element', isArray: false, isRequired: false },
]);

const ValidateStartEnd = (data: IPeriod, path: string, errors: IOperationOutcomeIssue[]) => {
  if (data.start && data.end) {
    if (new Date(data.start) > new Date(data.end)) {
      errors.push(
        new OperationOutcomeIssueException({
          severity: 'error',
          code: 'invariant',
          diagnostics: `+ Rule (per-1). If present, start SHALL have a lower value than end`,
          details: {
            text: `Path: ${path}`,
          },
        }),
      );
      // throw new Error(`The start date ${data.start} is after the end date ${data.end}. Path: ${path}`);
    }
  }
};

export const PeriodValidator = (dataToValidate: IPeriod, path = 'Period', errors: IOperationOutcomeIssue[]): void => {
  ModelValidator<IPeriod>({
    dataToValidate,
    path,
    modelDefinition: modelFields,
    errors,
    additionalValidation: [ValidateStartEnd],
  });
};
