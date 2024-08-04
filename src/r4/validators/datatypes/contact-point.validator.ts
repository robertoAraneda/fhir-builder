import { createDatatypeDefinition } from '../base/definitions';
import { IContactPoint } from 'fhirtypes/dist/r4';
import { ConstraintException } from '../../../commons/exceptions/constraint.exception';
import { BaseValidator } from '../base/base.validator';
import assert from 'node:assert';
import { RemoveUndefinedAttributes } from '../../utils/remove-undefined-attributes.util';
import { ContactPointSystemEnum, ContactPointUseEnum } from 'fhirtypes/dist/r4/enums';

export const contactPointSystemValues: ReadonlyArray<string> = Object.values(ContactPointSystemEnum);
export const contactPointUseValues: ReadonlyArray<string> = Object.values(ContactPointUseEnum);

export const modelFields = createDatatypeDefinition<IContactPoint>([
  {
    name: 'system',
    type: 'code',
    isRequired: false,
    isArray: false,
    enumValues: contactPointSystemValues,
  },
  {
    name: 'value',
    type: 'string',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'use',
    type: 'code',
    isRequired: false,
    isArray: false,
    enumValues: contactPointUseValues,
  },
  {
    name: 'rank',
    type: 'positiveInt',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'period',
    type: 'Period',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_system',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_value',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_use',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_rank',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
]);

export const contactPointKeys = modelFields.map((item) => item.name);

const validateConstraint = (payload: IContactPoint, path: string): void => {
  // cpt-2: A system is required if a value is provided
  if (payload.value && !payload.system) {
    throw new ConstraintException(path, 'A system is required if a value is provided (cpt-2)');
  }
};

export const ContactPointValidator = (
  dataToValidate: IContactPoint | IContactPoint[],
  path: string = 'ContactPoint',
): void => {
  assert(
    typeof dataToValidate === 'object',
    `Expected Attachment to be of type object, received ${typeof dataToValidate}`,
  );
  const cleanObject = RemoveUndefinedAttributes(dataToValidate);

  if (cleanObject instanceof Array) {
    cleanObject.forEach((item) => {
      ContactPointValidator(item);
    });
    return;
  }

  BaseValidator(cleanObject, modelFields, path);
  validateConstraint(cleanObject, path);
};
