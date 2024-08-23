import { createDatatypeDefinition } from '../base/definitions';
import { IAnnotation, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';

const modelDefinition = createDatatypeDefinition<IAnnotation>([
  {
    name: 'authorReference',
    type: 'Reference',
    isRequired: false,
    isArray: false,
    referenceTypes: ['Practitioner', 'Patient', 'RelatedPerson', 'Organization'],
  },
  { name: 'authorString', type: 'string', isRequired: false, isArray: false },
  { name: 'time', type: 'dateTime', isRequired: false, isArray: false },
  { name: 'text', type: 'string', isRequired: true, isArray: false },
  { name: '_time', type: 'Element', isRequired: false, isArray: false },
  { name: '_text', type: 'Element', isRequired: false, isArray: false },
]);

export const AnnotationValidator = <T extends IAnnotation>(
  dataToValidate: T,
  path: string,
  errors: IOperationOutcomeIssue[],
): void => {
  ModelValidator<T>({
    dataToValidate,
    path,
    modelDefinition,
    errors,
  });
};
