import { createDatatypeDefinition } from '../base/definitions';
import { IAge, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { QuantityComparatorEnum } from 'fhirtypes/dist/r4/enums';
import { ModelValidator } from '../base';

const quantityComparatorValues: readonly string[] = Object.values(QuantityComparatorEnum);

const modelFields = createDatatypeDefinition<IAge>([
  {
    name: 'value',
    type: 'decimal',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'comparator',
    type: 'code',
    isRequired: false,
    isArray: false,
    enumValues: quantityComparatorValues,
  },
  { name: 'unit', type: 'string', isRequired: false, isArray: false },
  { name: 'system', type: 'uri', isRequired: false, isArray: false },
  { name: 'code', type: 'code', isRequired: false, isArray: false },
  { name: '_value', type: 'Element', isArray: false, isRequired: false },
  { name: '_comparator', type: 'Element', isArray: false, isRequired: false },
  { name: '_unit', type: 'Element', isArray: false, isRequired: false },
  { name: '_system', type: 'Element', isArray: false, isRequired: false },
  { name: '_code', type: 'Element', isArray: false, isRequired: false },
]);

export const AgeValidator = (dataToValidate: IAge, path = 'Age', errors: IOperationOutcomeIssue[]): void => {
  ModelValidator<IAge>({
    dataToValidate,
    path,
    modelDefinition: modelFields,
    errors,
  });
};
