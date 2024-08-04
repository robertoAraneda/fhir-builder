import { IPatientLink } from 'fhirtypes/dist/r4';
import assert from 'node:assert';
import { BaseValidator } from '../base/base.validator';
import { LinkTypeEnum } from 'fhirtypes/dist/r4/enums';
import { createBackboneDefinition } from '../base/definitions';
import { RemoveUndefinedAttributes } from '../../utils/remove-undefined-attributes.util';

const linkTypesValues = Object.values(LinkTypeEnum);

export const modelFields = createBackboneDefinition<IPatientLink>([
  {
    name: 'other',
    type: 'Reference',
    isArray: false,
    isRequired: true,
    referenceValues: ['Patient', 'RelatedPerson'],
  },
  {
    name: 'type',
    type: 'code',
    isArray: false,
    isRequired: true,
    enumValues: linkTypesValues,
  },
  {
    name: '_type',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
]);

export function PatientLinkValidator(
  dataToValidate: IPatientLink | IPatientLink[],
  path: string = 'PatientLink',
): void {
  assert(
    typeof dataToValidate === 'object',
    `Expected Attachment to be of type object, received ${typeof dataToValidate}`,
  );
  const cleanObject = RemoveUndefinedAttributes(dataToValidate);

  if (Array.isArray(cleanObject)) {
    cleanObject.forEach((item, index) => {
      PatientLinkValidator(item, `${path}[${index}]`);
    });
    return;
  }

  BaseValidator(cleanObject, modelFields, path);
}
