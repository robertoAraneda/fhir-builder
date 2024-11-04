import { createDatatypeDefinition } from '../base/definitions';
import { IContactDetail, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';

const modelFields = createDatatypeDefinition<IContactDetail>([
  {
    name: 'name',
    type: 'string',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'telecom',
    type: 'ContactPoint',
    isRequired: false,
    isArray: true,
  },
  {
    name: '_name',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
]);

export const ContactDetailValidator = (
  dataToValidate: IContactDetail,
  path = 'ContactDetail',
  errors: IOperationOutcomeIssue[],
): void => {
  ModelValidator<IContactDetail>({
    path,
    dataToValidate,
    modelDefinition: modelFields,
    errors,
  });
};
