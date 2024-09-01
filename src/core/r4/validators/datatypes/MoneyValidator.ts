import { createDatatypeDefinition } from '../base/definitions';
import { IMoney } from 'fhirtypes/dist/r4/datatypes';
import { CurrencyCodeEnum } from 'fhirtypes/dist/r4/enums';
import { IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { validateFields } from '../../../../r4/builders/base/resource-type-map.interface';
import { Money } from '../../../../r4/models';

const currencyValues: readonly string[] = Object.values(CurrencyCodeEnum);

const modelFields = createDatatypeDefinition<IMoney>([
  { name: 'value', type: 'decimal', isArray: false, isRequired: true },
  { name: 'currency', type: 'code', isArray: false, isRequired: true, enumValues: currencyValues },
  { name: '_value', type: 'Element', isArray: false, isRequired: false },
]);

export const MoneyValidator = (dataToValidate: IMoney, path = 'Money', errors: IOperationOutcomeIssue[] = []): void => {
  validateFields(modelFields, new Money());

  ModelValidator<IMoney>({
    path,
    dataToValidate,
    modelDefinition: modelFields,
    errors,
  });
};
