import { IPeriod } from 'fhirtypes/dist/r4';
import { createDatatypeDefinition } from '../../utils/resources';
import { baseValidator } from '../../utils/base.validator';

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

export const PeriodValidator = (dataToValidate: IPeriod | IPeriod[], path: string = 'Period'): void => {
  if (Array.isArray(dataToValidate)) {
    dataToValidate.forEach((item, index) => {
      PeriodValidator(item, `${path}[${index}]`);
    });
    return;
  }

  baseValidator(dataToValidate, modelFields, path);
};
