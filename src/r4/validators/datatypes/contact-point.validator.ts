import { createDatatypeDefinition } from '../base/definitions';
import { IContactPoint } from 'fhirtypes/dist/r4';
import { ConstraintException } from '../../../commons/exceptions/constraint.exception';
import { ContactPointSystemEnum, ContactPointUseEnum } from 'fhirtypes/dist/r4/enums';
import { validator } from '../base/object.validator';

const contactPointSystemValues: ReadonlyArray<string> = Object.values(ContactPointSystemEnum);
const contactPointUseValues: ReadonlyArray<string> = Object.values(ContactPointUseEnum);

const modelFields = createDatatypeDefinition<IContactPoint>([
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

const validateConstraint = (payload: IContactPoint, path: string): void => {
  // cpt-2: A system is required if a value is provided
  if (payload.value && !payload.system) {
    throw new ConstraintException(path, 'A system is required if a value is provided (cpt-2)');
  }
};

export const ContactPointValidator = (dataToValidate: IContactPoint, path: string = 'ContactPoint'): void => {
  validator<IContactPoint>({
    path,
    dataToValidate,
    modelDefinition: modelFields,
    additionalValidation: [validateConstraint],
  });
};
