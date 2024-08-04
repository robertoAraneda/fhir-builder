import { IElement } from 'fhirtypes/dist/r4';
import { createDatatypeDefinition } from '../base/definitions';
import { BaseValidator } from '../base/base.validator';
import assert from 'node:assert';
import { RemoveUndefinedAttributes } from '../../utils/remove-undefined-attributes.util';

export const modelFields = createDatatypeDefinition<IElement>([]);

export const ElementValidator = (dataToValidate: IElement | IElement[], path: string = 'Element'): void => {
  assert(
    typeof dataToValidate === 'object',
    `Expected Attachment to be of type object, received ${typeof dataToValidate}`,
  );

  if (Array.isArray(dataToValidate)) {
    dataToValidate.forEach((item, index) => {
      ElementValidator(item, `${path}[${index}]`);
    });
    return;
  }

  BaseValidator(dataToValidate, modelFields, path);
};
