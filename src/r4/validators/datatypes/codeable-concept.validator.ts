import { createDatatypeDefinition } from '../../utils/resources';
import { ICodeableConcept } from 'fhirtypes/dist/r4';
import { baseValidator } from '../../utils/base.validator';

export const modelFields = createDatatypeDefinition<ICodeableConcept>([
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

export const CodeableConceptValidator = (
  dataToValidate: ICodeableConcept | ICodeableConcept[],
  path: string = 'CodeableConcept',
): void => {
  if (Array.isArray(dataToValidate)) {
    dataToValidate.forEach((item, index) => {
      CodeableConceptValidator(item, `${path}[${index}]`);
    });
    return;
  }

  baseValidator(dataToValidate, modelFields, path);
};
