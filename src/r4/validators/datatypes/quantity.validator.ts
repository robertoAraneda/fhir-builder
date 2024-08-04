import { createDatatypeDefinition } from '../base/definitions';
import { IQuantity } from 'fhirtypes/dist/r4';
import { quantityComparators } from '../../utils/quantity-comparators.util';
import { ConstraintException } from '../../../commons/exceptions/constraint.exception';
import assert from 'node:assert';
import { RemoveUndefinedAttributes } from '../../utils/remove-undefined-attributes.util';
import { BaseValidator } from '../base/base.validator';

export const modelFields = createDatatypeDefinition<IQuantity>([
  {
    name: 'value',
    type: 'decimal',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'comparator',
    type: 'code',
    isRequired: false,
    isArray: false,
    enumValues: quantityComparators,
  },
  {
    name: 'unit',
    type: 'string',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'system',
    type: 'uri',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'code',
    type: 'code',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_value',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_comparator',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_unit',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_system',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_code',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
]);

function ValidateConstraint(payload: IQuantity, path: string): void {
  // qty-3: If a code for the unit is present, the system SHALL also be present
  if (payload.code && !payload.system) {
    throw new ConstraintException(path, 'If a code for the unit is present, the system SHALL also be present (qty-3)');
  }
}

export function QuantityValidator(dataToValidate: IQuantity | IQuantity[], path: string = 'Quantity'): void {
  assert(
    typeof dataToValidate === 'object',
    `Expected Attachment to be of type object, received ${typeof dataToValidate}`,
  );
  const cleanObject = RemoveUndefinedAttributes(dataToValidate);

  if (Array.isArray(cleanObject)) {
    cleanObject.forEach((item, index) => {
      QuantityValidator(item, `${path}[${index}]`);
    });
    return;
  }

  BaseValidator(cleanObject, modelFields, path);
  ValidateConstraint(cleanObject, path);
}
