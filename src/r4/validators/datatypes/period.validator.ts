import { IPeriod } from 'fhirtypes/dist/r4';
import { createDatatypeDefinition } from '../base/definitions';
import { BaseValidator } from '../base/base.validator';
import assert from 'node:assert';

export const modelFields = createDatatypeDefinition<IPeriod>([
  {
    name: 'start',
    type: 'dateTime',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'end',
    type: 'dateTime',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_start',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_end',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
]);

const ValidateStartEnd = (data: IPeriod, path: string) => {
  if (data.start && data.end) {
    if (new Date(data.start) > new Date(data.end)) {
      throw new Error(`The start date ${data.start} is after the end date ${data.end}`);
    }
  }
};

export const PeriodValidator = (dataToValidate: IPeriod | IPeriod[], path: string = 'Period'): void => {
  assert(
    typeof dataToValidate === 'object',
    `Expected Attachment to be of type object, received ${typeof dataToValidate}`,
  );

  if (Array.isArray(dataToValidate)) {
    dataToValidate.forEach((item, index) => {
      PeriodValidator(item, `${path}[${index}]`);
    });
    return;
  }

  ValidateStartEnd(dataToValidate, path);
  BaseValidator(dataToValidate, modelFields, path);
};
