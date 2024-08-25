import { createDatatypeDefinition } from '../base/definitions';
import { ISimpleQuantity } from 'fhirtypes/dist/r4/datatypes/ISimpleQuantity';
import { ModelValidator } from '../base';
import { IOperationOutcomeIssue } from 'fhirtypes/dist/r4';

const modelFields = createDatatypeDefinition<ISimpleQuantity>([
  { name: 'value', type: 'decimal', isRequired: false, isArray: false },
  { name: 'unit', type: 'string', isRequired: false, isArray: false },
  { name: 'system', type: 'string', isRequired: false, isArray: false },
  { name: 'code', type: 'string', isRequired: false, isArray: false },
  { name: '_value', type: 'Element', isRequired: false, isArray: false },
  { name: '_code', type: 'Element', isRequired: false, isArray: false },
  { name: '_system', type: 'Element', isRequired: false, isArray: false },
  { name: '_unit', type: 'Element', isRequired: false, isArray: false },
]);

export const SimpleQuantityValidator = (
  dataToValidate: ISimpleQuantity,
  path = 'SimpleQuantity',
  errors: IOperationOutcomeIssue[],
): void => {
  ModelValidator({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
  });
};
