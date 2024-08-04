import { IExtension } from 'fhirtypes/dist/r4';
import { ConstraintException } from '../../../commons/exceptions/constraint.exception';
import { createDatatypeDefinition } from '../base/definitions';
import { BaseValidator } from '../base/base.validator';
import { RemoveUndefinedAttributes } from '../../utils/remove-undefined-attributes.util';
import assert from 'node:assert';

export const extensionAttributes: string[] = [
  'id',
  'extension',
  'url',
  'valueAddress',
  'valueAttachment',
  'valueBase64Binary',
  'valueBoolean',
  'valueCanonical',
  'valueCode',
  'valueCodeableConcept',
  'valueCoding',
  'valueContactPoint',
  'valueDate',
  'valueDateTime',
  'valueDecimal',
  'valueId',
  'valueIdentifier',
  'valueInstant',
  'valueInteger',
  'valueMarkdown',
  'valueOid',
  'valuePeriod',
  'valuePositiveInt',
  'valueQuantity',
  'valueString',
  'valueTime',
  'valueUnsignedInt',
  'valueUri',
  'valueUrl',
  'valueUuid',
  'valueDuration',
  'valueHumanName',
  'valueMeta',
  'valueReference',
  '_url',
  '_valueBase64Binary',
  '_valueBoolean',
  '_valueCanonical',
  '_valueCode',
  '_valueDate',
  '_valueDateTime',
  '_valueDecimal',
  '_valueId',
  '_valueInstant',
  '_valueInteger',
  '_valueMarkdown',
  '_valueOid',
  '_valuePositiveInt',
  '_valueString',
  '_valueTime',
  '_valueUnsignedInt',
  '_valueUri',
  '_valueUrl',
  '_valueUuid',
];

export const modelFields = createDatatypeDefinition<IExtension>([
  {
    name: 'url',
    type: 'uri',
    isRequired: true,
    isArray: false,
  },
  {
    name: 'valueBase64Binary',
    type: 'base64Binary',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'valueBoolean',
    type: 'boolean',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'valueCanonical',
    type: 'canonical',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'valueCode',
    type: 'code',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'valueCoding',
    type: 'Coding',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'valueQuantity',
    type: 'Quantity',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'valueDate',
    type: 'date',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'valueDateTime',
    type: 'dateTime',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'valueDecimal',
    type: 'decimal',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'valueId',
    type: 'id',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'valueInstant',
    type: 'instant',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'valueInteger',
    type: 'integer',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'valueMarkdown',
    type: 'markdown',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'valueOid',
    type: 'oid',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'valuePositiveInt',
    type: 'positiveInt',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'valueString',
    type: 'string',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'valueTime',
    type: 'time',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'valueUnsignedInt',
    type: 'unsignedInt',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'valueUri',
    type: 'uri',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'valueUrl',
    type: 'url',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'valueUuid',
    type: 'uuid',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_url',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_valueBase64Binary',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_valueBoolean',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_valueCanonical',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_valueCode',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_valueDate',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_valueDateTime',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_valueDecimal',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_valueId',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_valueInstant',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_valueInteger',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_valueMarkdown',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_valueOid',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_valuePositiveInt',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_valueString',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_valueTime',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_valueUnsignedInt',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_valueUri',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_valueUrl',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_valueUuid',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
]);

const ValidateConstraints = (args: IExtension, path: string): void => {
  // + Rule: Must have either extensions or value[x], not both
  // remove undefined keys

  const keys = Object.keys(args) as (keyof IExtension)[];
  const included = ['id', 'url'] as (keyof IExtension)[];

  included.forEach((key) => {
    if (keys.includes(key)) {
      keys.splice(keys.indexOf(key), 1);
    }
  });

  if (keys.length > 1 && keys.includes('extension')) {
    throw new ConstraintException(path, `Must have either extensions or value[x], not both.`);
  }
};

export const ExtensionValidator = (dataToValidate: IExtension | IExtension[], path: string = 'Extension'): void => {
  assert(
    typeof dataToValidate === 'object',
    `Expected Attachment to be of type object, received ${typeof dataToValidate}`,
  );

  const cleanObject = RemoveUndefinedAttributes(dataToValidate);

  if (Array.isArray(cleanObject)) {
    cleanObject.forEach((item, index) => {
      ExtensionValidator(item, `${path}[${index}]`);
    });
    return;
  }

  ValidateConstraints(cleanObject, path);
  BaseValidator(cleanObject, modelFields, path);
};