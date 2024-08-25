import { IExtension, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { createDatatypeDefinition } from '../base/definitions';
import { ModelValidator } from '../base';
import { OperationOutcomeIssueException } from '../../../commons/exceptions/operation-outcome.exception';

const modelFields = createDatatypeDefinition<IExtension>([
  { name: 'url', type: 'uri', isRequired: true, isArray: false },
  { name: 'valueBase64Binary', type: 'base64Binary', isRequired: false, isArray: false },
  { name: 'valueBoolean', type: 'boolean', isRequired: false, isArray: false },
  { name: 'valueCanonical', type: 'canonical', isRequired: false, isArray: false },
  { name: 'valueCode', type: 'code', isRequired: false, isArray: false },
  { name: 'valueCodeableConcept', type: 'CodeableConcept', isRequired: false, isArray: false },
  { name: 'valueHumanName', type: 'HumanName', isRequired: false, isArray: false },
  { name: 'valueAddress', type: 'Address', isRequired: false, isArray: false },
  { name: 'valueAttachment', type: 'Attachment', isRequired: false, isArray: false },
  { name: 'valueContactPoint', type: 'ContactPoint', isRequired: false, isArray: false },
  { name: 'valueIdentifier', type: 'Identifier', isRequired: false, isArray: false },
  { name: 'valuePeriod', type: 'Period', isRequired: false, isArray: false },
  { name: 'valueQuantity', type: 'Quantity', isRequired: false, isArray: false },
  { name: 'valueRange', type: 'Range', isRequired: false, isArray: false },
  { name: 'valueCoding', type: 'Coding', isRequired: false, isArray: false },
  { name: 'valueDate', type: 'date', isRequired: false, isArray: false },
  { name: 'valueDateTime', type: 'dateTime', isRequired: false, isArray: false },
  { name: 'valueDecimal', type: 'decimal', isRequired: false, isArray: false },
  { name: 'valueId', type: 'id', isRequired: false, isArray: false },
  { name: 'valueInstant', type: 'instant', isRequired: false, isArray: false },
  { name: 'valueInteger', type: 'integer', isRequired: false, isArray: false },
  { name: 'valueMarkdown', type: 'markdown', isRequired: false, isArray: false },
  { name: 'valueOid', type: 'oid', isRequired: false, isArray: false },
  { name: 'valuePositiveInt', type: 'positiveInt', isRequired: false, isArray: false },
  { name: 'valueString', type: 'string', isRequired: false, isArray: false },
  { name: 'valueTime', type: 'time', isRequired: false, isArray: false },
  { name: 'valueUnsignedInt', type: 'unsignedInt', isRequired: false, isArray: false },
  { name: 'valueUri', type: 'uri', isRequired: false, isArray: false },
  { name: 'valueUrl', type: 'url', isRequired: false, isArray: false },
  { name: 'valueUuid', type: 'uuid', isRequired: false, isArray: false },
  { name: '_url', type: 'Element', isRequired: false, isArray: false },
]);

const ValidateConstraints = (args: IExtension, path: string, errors: IOperationOutcomeIssue[]): void => {
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
    errors.push(
      new OperationOutcomeIssueException({
        severity: 'error',
        code: 'invariant',
        diagnostics: `Must have either extensions or value[x], not both.`,
        details: {
          text: `Path: ${path}`,
        },
      }),
    );
    // throw new ConstraintException(path, `Must have either extensions or value[x], not both.`);
  }
};

export const ExtensionValidator = (
  dataToValidate: IExtension,
  path = 'Extension',
  errors: IOperationOutcomeIssue[],
): void => {
  ModelValidator<IExtension>({
    path,
    dataToValidate,
    modelDefinition: modelFields,
    additionalValidation: [ValidateConstraints],
    errors,
  });
};
