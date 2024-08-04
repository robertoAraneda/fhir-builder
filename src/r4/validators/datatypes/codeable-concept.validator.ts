import { createDatatypeDefinition } from '../base/definitions';
import { ICodeableConcept } from 'fhirtypes/dist/r4';
import { BaseValidator } from '../base/base.validator';
import assert from 'node:assert';
import { RemoveUndefinedAttributes } from '../../utils/remove-undefined-attributes.util';

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
  assert(
    typeof dataToValidate === 'object',
    `Expected Attachment to be of type object, received ${typeof dataToValidate}`,
  );
  const cleanObject = RemoveUndefinedAttributes(dataToValidate);

  if (Array.isArray(cleanObject)) {
    cleanObject.forEach((item, index) => {
      CodeableConceptValidator(item, `${path}[${index}]`);
    });
    return;
  }

  BaseValidator(cleanObject, modelFields, path);
};
