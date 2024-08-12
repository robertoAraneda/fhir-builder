import { createDatatypeDefinition } from '../base/definitions';
import { IAnnotation } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';

const modelDefinition = createDatatypeDefinition<IAnnotation>([
  {
    name: 'authorReference',
    type: 'Reference',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'authorString',
    type: 'string',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'time',
    type: 'dateTime',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'text',
    type: 'string',
    isRequired: true,
    isArray: false,
  },
  {
    name: '_time',
    type: 'Element',
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

export const AnnotationValidator = <T extends IAnnotation>(dataToValidate: T, path: string): void => {
  ModelValidator<T>({
    dataToValidate,
    path,
    modelDefinition,
  });
};
