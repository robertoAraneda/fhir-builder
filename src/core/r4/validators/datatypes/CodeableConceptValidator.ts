import { ICodeableConcept, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { createDatatypeDefinition } from '../base/definitions';
import { ModelValidator } from '../base';

const modelFields = createDatatypeDefinition<ICodeableConcept>([
  { name: 'coding', type: 'Coding', isRequired: false, isArray: true },
  { name: 'text', type: 'string', isRequired: false, isArray: false },
  { name: '_text', type: 'Element', isRequired: false, isArray: false },
]);

export const CodeableConceptValidator = (
  dataToValidate: ICodeableConcept,
  path = 'CodeableConcept',
  errors: IOperationOutcomeIssue[],
): void => {
  ModelValidator<ICodeableConcept>({
    path,
    dataToValidate,
    modelDefinition: modelFields,
    errors,
  });
};
