import { createDatatypeDefinition } from '../base/definitions';
import { IOperationOutcomeIssue, IRange } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';

const modelDefinition = createDatatypeDefinition<IRange>([
  { name: 'low', type: 'SimpleQuantity', isRequired: false, isArray: false },
  { name: 'high', type: 'SimpleQuantity', isRequired: false, isArray: false },
]);

export const RangeValidator = (dataToValidate: IRange, path = 'Range', errors: IOperationOutcomeIssue[]) => {
  ModelValidator<IRange>({
    dataToValidate,
    path,
    modelDefinition,
    errors,
  });
};
