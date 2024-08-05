import { createDatatypeDefinition } from '../base/definitions';
import { ICodeableConcept } from 'fhirtypes/dist/r4';
import { validator } from '../base/object.validator';

const modelFields = createDatatypeDefinition<ICodeableConcept>([
  {
    name: 'coding',
    type: 'Coding',
    isRequired: false,
    isArray: true,
  },
  {
    name: 'text',
    type: 'string',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_text',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
]);

export const CodeableConceptValidator = (dataToValidate: ICodeableConcept, path: string = 'CodeableConcept'): void => {
  validator<ICodeableConcept>({
    path,
    dataToValidate,
    modelDefinition: modelFields,
  });
};
