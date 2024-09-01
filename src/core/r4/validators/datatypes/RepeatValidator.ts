import { createDatatypeDefinition } from '../base/definitions';
import { IOperationOutcomeIssue, IRepeat } from 'fhirtypes/dist/r4';
import { DaysOfWeekEnum, EventTimingEnum, UnitsOfTimeEnum } from 'fhirtypes/dist/r4/enums';
import { ModelValidator } from '../base';
import { OperationOutcomeIssueException } from '../../../commons/exceptions/operation-outcome.exception';

const unitOfTimeValues: readonly string[] = Object.values(UnitsOfTimeEnum);
const daysOfWeekValues: readonly string[] = Object.values(DaysOfWeekEnum);
const eventTimingValues: readonly string[] = Object.values(EventTimingEnum);

const modelFields = createDatatypeDefinition<IRepeat>([
  { name: 'boundsDuration', type: 'Duration', isArray: false, isRequired: false },
  { name: 'boundsRange', type: 'Range', isArray: false, isRequired: false },
  { name: 'boundsPeriod', type: 'Period', isArray: false, isRequired: false },
  { name: 'count', type: 'positiveInt', isArray: false, isRequired: false },
  { name: 'countMax', type: 'positiveInt', isArray: false, isRequired: false },
  { name: 'duration', type: 'decimal', isArray: false, isRequired: false },
  { name: 'durationMax', type: 'decimal', isArray: false, isRequired: false },
  { name: 'durationUnit', type: 'code', isArray: false, isRequired: false, enumValues: unitOfTimeValues },
  { name: 'frequency', type: 'positiveInt', isArray: false, isRequired: false },
  { name: 'frequencyMax', type: 'positiveInt', isArray: false, isRequired: false },
  { name: 'period', type: 'decimal', isArray: false, isRequired: false },
  { name: 'periodMax', type: 'decimal', isArray: false, isRequired: false },
  { name: 'periodUnit', type: 'code', isArray: false, isRequired: false, enumValues: unitOfTimeValues },
  { name: 'dayOfWeek', type: 'code', isArray: true, isRequired: false, enumValues: daysOfWeekValues },
  { name: 'timeOfDay', type: 'time', isArray: true, isRequired: false },
  { name: 'when', type: 'code', isArray: true, isRequired: false, enumValues: eventTimingValues },
  { name: 'offset', type: 'unsignedInt', isArray: false, isRequired: false },
  { name: '_count', type: 'Element', isArray: false, isRequired: false },
  { name: '_countMax', type: 'Element', isArray: false, isRequired: false },
  { name: '_duration', type: 'Element', isArray: false, isRequired: false },
  { name: '_durationMax', type: 'Element', isArray: false, isRequired: false },
  { name: '_durationUnit', type: 'Element', isArray: false, isRequired: false },
  { name: '_frequency', type: 'Element', isArray: false, isRequired: false },
  { name: '_frequencyMax', type: 'Element', isArray: false, isRequired: false },
  { name: '_period', type: 'Element', isArray: false, isRequired: false },
  { name: '_periodMax', type: 'Element', isArray: false, isRequired: false },
  { name: '_periodUnit', type: 'Element', isArray: false, isRequired: false },
  { name: '_dayOfWeek', type: 'Element', isArray: true, isRequired: false },
  { name: '_timeOfDay', type: 'Element', isArray: true, isRequired: false },
  { name: '_when', type: 'Element', isArray: true, isRequired: false },
  { name: '_offset', type: 'Element', isArray: false, isRequired: false },
]);

// TODO: Refactor errors to be more specific
const ValidateConstraint = (payload: IRepeat, path: string, errors: IOperationOutcomeIssue[]): void => {
  // + Rule: if there's a duration, there needs to be duration units
  if (payload.duration && !payload.durationUnit) {
    errors.push(
      new OperationOutcomeIssueException({
        severity: 'error',
        code: 'invariant',
        diagnostics: `+ Rule (tim-1). If there is a duration, there needs to be duration units`,
        details: {
          text: `Path: ${path}. Value: duration:${payload.duration} | durationUnit:${payload.durationUnit}`,
        },
      }),
    );
  }

  // + Rule: if there's a period, there needs to be period units
  if (payload.period && !payload.periodUnit) {
    errors.push(
      new OperationOutcomeIssueException({
        severity: 'error',
        code: 'invariant',
        diagnostics: `+ Rule (tim-2). If there is a period, there needs to be period units`,
        details: {
          text: `Path: ${path}. Value: period:${payload.period} | periodUnit:${payload.periodUnit}`,
        },
      }),
    );
  }

  // + Rule: duration SHALL be a non-negative value
  if (payload.duration && payload.duration < 0) {
    errors.push(
      new OperationOutcomeIssueException({
        severity: 'error',
        code: 'invariant',
        diagnostics: `+ Rule (tim-4). Duration SHALL be a non-negative value`,
        details: {
          text: `Path: ${path}. Value: duration:${payload.duration}`,
        },
      }),
    );
  }

  // + Rule: period SHALL be a non-negative value
  if (payload.period && payload.period < 0) {
    errors.push(
      new OperationOutcomeIssueException({
        severity: 'error',
        code: 'invariant',
        diagnostics: `+ Rule (tim-5). Period SHALL be a non-negative value`,
        details: {
          text: `Path: ${path}. Value: period:${payload.period}`,
        },
      }),
    );
  }

  // + Rule: If there's a periodMax, there must be a period
  if (payload.periodMax && !payload.period) {
    errors.push(
      new OperationOutcomeIssueException({
        severity: 'error',
        code: 'invariant',
        diagnostics: `+ Rule (tim-6). If there is a periodMax, there must be a period`,
        details: {
          text: `Path: ${path}. Value: periodMax:${payload.periodMax} | period:${payload.period}`,
        },
      }),
    );
  }

  // + Rule: If there's a durationMax, there must be a duration
  if (payload.durationMax && !payload.duration) {
    errors.push(
      new OperationOutcomeIssueException({
        severity: 'error',
        code: 'invariant',
        diagnostics: `+ Rule (tim-7). If there is a durationMax, there must be a duration`,
        details: {
          text: `Path: ${path}. Value: durationMax:${payload.durationMax} | duration:${payload.duration}`,
        },
      }),
    );
  }

  // + Rule: If there's a countMax, there must be a count
  if (payload.countMax && !payload.count) {
    errors.push(
      new OperationOutcomeIssueException({
        severity: 'error',
        code: 'invariant',
        diagnostics: `+ Rule (tim-8). If there is a countMax, there must be a count`,
        details: {
          text: `Path: ${path}. Value: countMax:${payload.countMax} | count:${payload.count}`,
        },
      }),
    );
  }

  // + Rule: If there's an offset, there must be a when (and not C, CM, CD, CV)
  if (payload.offset && payload.when?.length) {
    let isViolation = false;
    payload.when.forEach((value) => {
      if (['C', 'CM', 'CD', 'CV'].includes(value)) {
        isViolation = true;
      }
    });

    if (isViolation) {
      errors.push(
        new OperationOutcomeIssueException({
          severity: 'error',
          code: 'invariant',
          diagnostics: `+ Rule (tim-9). If there is an offset, there must be a when (and not C, CM, CD, CV)`,
          details: {
            text: `Path: ${path}. Value: offset:${payload.offset} | when:${payload.when.join(', ')}`,
          },
        }),
      );
    }
  }

  // + Rule: If there's a timeOfDay, there cannot be a when, or vice versa
  if (payload.timeOfDay && payload.when?.length) {
    errors.push(
      new OperationOutcomeIssueException({
        severity: 'error',
        code: 'invariant',
        diagnostics: `+ Rule (tim-10). If there's a timeOfDay, there cannot be a when, or vice versa`,
        details: {
          text: `Path: ${path}. Value: timeOfDay:${payload.timeOfDay} | when:${payload.when.join(', ')}`,
        },
      }),
    );
  }
};

export const RepeatValidator = (dataToValidate: IRepeat, path = 'Repeat', errors: IOperationOutcomeIssue[]): void => {
  ModelValidator<IRepeat>({
    dataToValidate,
    path,
    modelDefinition: modelFields,
    additionalValidation: [ValidateConstraint],
    errors,
  });
};
