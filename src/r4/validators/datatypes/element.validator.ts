import { IElement } from 'fhirtypes/dist/r4';
import { createDatatypeDefinition } from '../../utils/resources';
import { baseValidator } from '../../utils/base.validator';

export const modelFields = createDatatypeDefinition<IElement>([
  {
    name: 'id',
    type: 'string',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'extension',
    type: 'Extension',
    isArray: true,
    isRequired: false,
  },
]);

export const ElementValidator = (dataToValidate: IElement | IElement[], path: string = 'Element'): void => {
  if (Array.isArray(dataToValidate)) {
    dataToValidate.forEach((item, index) => {
      ElementValidator(item, `${path}[${index}]`);
    });
    return;
  }

  baseValidator(dataToValidate, modelFields, path);
};
