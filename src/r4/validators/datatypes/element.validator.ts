import { IElement } from 'fhirtypes/dist/r4';
import { createDatatypeDefinition } from '../base/definitions';
import { validator } from '../base/object.validator';

const modelFields = createDatatypeDefinition<IElement>([]);

export const ElementValidator = (dataToValidate: IElement, path: string = 'Element'): void => {
  validator<IElement>({
    path,
    dataToValidate,
    modelDefinition: modelFields,
  });
};
