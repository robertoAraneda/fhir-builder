import { IElement, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { createDatatypeDefinition } from '../base/definitions';
import { ModelValidator } from '../base';

const modelFields = createDatatypeDefinition<IElement>([]);

export const ElementValidator = (
  dataToValidate: IElement,
  path = 'Element',
  errors: IOperationOutcomeIssue[],
): void => {
  ModelValidator<IElement>({
    path,
    dataToValidate,
    modelDefinition: modelFields,
    errors,
  });
};
