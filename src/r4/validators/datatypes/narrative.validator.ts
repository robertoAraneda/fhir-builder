import { createDatatypeDefinition } from '../base/definitions';
import { INarrative } from 'fhirtypes/dist/r4';
import assert from 'node:assert';
import { RemoveUndefinedAttributes } from '../../utils/remove-undefined-attributes.util';
import { BaseValidator } from '../base/base.validator';

export const modelFields = createDatatypeDefinition<INarrative>([
  {
    name: 'status',
    type: 'code',
    isRequired: true,
    isArray: false,
    enumValues: ['generated', 'extensions', 'additional', 'empty'],
  },
  {
    name: 'div',
    type: 'string',
    isRequired: true,
    isArray: false,
  },
]);

export function NarrativeValidator(dataToValidate: INarrative | INarrative[], path: string = 'Narrative') {
  assert(
    typeof dataToValidate === 'object',
    `Expected Attachment to be of type object, received ${typeof dataToValidate}`,
  );

  if (Array.isArray(dataToValidate)) {
    dataToValidate.forEach((item, index) => {
      NarrativeValidator(item, `${path}[${index}]`);
    });
    return;
  }

  BaseValidator(dataToValidate, modelFields, path);
}
