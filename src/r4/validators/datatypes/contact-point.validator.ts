import { createDatatypeDefinition } from '../../utils/resources';
import { IContactPoint } from 'fhirtypes/dist/r4';
import { ConstraintException } from '../../../commons/exceptions/constraint.exception';
import { baseValidator } from '../../utils/base.validator';

export const contactPointSystems = ['phone', 'fax', 'email', 'pager', 'url', 'sms', 'other'];
export const contactPointUses = ['home', 'work', 'temp', 'old', 'mobile'];

export const modelFields = createDatatypeDefinition<IContactPoint>([
  {
    name: 'system',
    type: 'code',
    isRequired: false,
    isArray: false,
    enumValues: contactPointSystems,
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
    enumValues: contactPointUses,
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
  if (dataToValidate instanceof Array) {
    dataToValidate.forEach((item) => {
      ContactPointValidator(item);
    });
    return;
  }

  baseValidator(dataToValidate, modelFields, path);
  validateConstraint(dataToValidate, path);
};
