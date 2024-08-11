import { INarrative } from 'fhirtypes/dist/r4';
import { createDatatypeDefinition } from '../base/definitions';
import { ModelValidator } from '../base';

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

export function NarrativeValidator(dataToValidate: INarrative, path = 'Narrative') {
  ModelValidator<INarrative>({
    dataToValidate,
    path,
    modelDefinition: modelFields,
  });
}
