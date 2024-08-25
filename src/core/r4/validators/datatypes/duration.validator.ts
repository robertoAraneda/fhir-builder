import { createDatatypeDefinition } from '../base/definitions';
import { IDuration, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { QuantityComparatorEnum } from 'fhirtypes/dist/r4/enums';
import { ModelValidator } from '../base';
import { OperationOutcomeIssueException } from '../../../commons/exceptions/operation-outcome.exception';

const comparatorValues: readonly string[] = Object.values(QuantityComparatorEnum);

const modelDefinitions = createDatatypeDefinition<IDuration>([
  { name: 'value', type: 'decimal', isRequired: false, isArray: false },
  { name: 'comparator', type: 'code', isRequired: false, isArray: false, enumValues: comparatorValues },
  { name: 'unit', type: 'string', isRequired: false, isArray: false },
  { name: 'system', type: 'string', isRequired: false, isArray: false },
  { name: 'code', type: 'string', isRequired: false, isArray: false },
  { name: '_value', type: 'Element', isRequired: false, isArray: false },
  { name: '_comparator', type: 'Element', isRequired: false, isArray: false },
  { name: '_unit', type: 'Element', isRequired: false, isArray: false },
  { name: '_system', type: 'Element', isRequired: false, isArray: false },
  { name: '_code', type: 'Element', isRequired: false, isArray: false },
]);

const ConstraintValidator = (payload: IDuration, path: string, errors: IOperationOutcomeIssue[]): void => {
  // There SHALL be a code if there is a value and it SHALL be an expression of time. If system is present, it SHALL be UCUM.
  if (payload.value && !payload.code) {
    errors.push(
      new OperationOutcomeIssueException({
        severity: 'error',
        code: 'invariant',
        diagnostics: `There SHALL be a code if there is a value and it SHALL be an expression of time. If system is present, it SHALL be UCUM.`,
        details: {
          text: `Path: ${path}. Value: value:${payload.value} | code:${payload.code}`,
        },
      }),
    );
  }
};

export const DurationValidator = (
  dataToValidate: IDuration,
  path = 'Duration',
  errors: IOperationOutcomeIssue[],
): void => {
  ModelValidator<IDuration>({
    path,
    dataToValidate,
    modelDefinition: modelDefinitions,
    additionalValidation: [ConstraintValidator],
    errors,
  });
};
