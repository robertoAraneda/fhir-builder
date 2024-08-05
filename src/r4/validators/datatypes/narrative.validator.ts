import { createDatatypeDefinition } from '../base/definitions';
import { INarrative } from 'fhirtypes/dist/r4';
import { validator } from '../base/object.validator';

const modelFields = createDatatypeDefinition<INarrative>([
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

export function NarrativeValidator(dataToValidate: INarrative, path: string = 'Narrative') {
  validator<INarrative>({
    dataToValidate,
    path,
    modelDefinition: modelFields,
  });
}
