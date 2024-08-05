import { IPeriod } from 'fhirtypes/dist/r4';
import { createDatatypeDefinition } from '../base/definitions';
import { ModelValidator } from '../base';

const modelFields = createDatatypeDefinition<IPeriod>([
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

export const PeriodValidator = (dataToValidate: IPeriod, path: string = 'Period'): void => {
  ModelValidator<IPeriod>({
    dataToValidate,
    path,
    modelDefinition: modelFields,
    additionalValidation: [ValidateStartEnd],
  });
};
