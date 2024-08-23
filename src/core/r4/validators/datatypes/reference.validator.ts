import { IOperationOutcomeIssue, IReference } from 'fhirtypes/dist/r4';
import { createDatatypeDefinition } from '../base/definitions';
import { ModelValidator } from '../base';
import { OperationOutcomeIssueException } from '../../../commons/exceptions/operation-outcome.exception';

const modelFields = createDatatypeDefinition<IReference>([
  { name: 'reference', type: 'string', isRequired: false, isArray: false },
  { name: 'type', type: 'uri', isRequired: false, isArray: false },
  { name: 'identifier', type: 'Identifier', isRequired: false, isArray: false },
  { name: 'display', type: 'string', isRequired: false, isArray: false },
  { name: '_display', type: 'Element', isRequired: false, isArray: false },
  { name: '_reference', type: 'Element', isRequired: false, isArray: false },
  { name: '_type', type: 'Element', isRequired: false, isArray: false },
]);

export const ValidateReferenceFormat = (value: IReference, path: string, errors: IOperationOutcomeIssue[]): void => {
  const { reference } = value;
  if (!reference) return;

  if (reference.startsWith('#')) return;
  if (reference.startsWith('urn:')) return;
  if (reference.startsWith('urn:')) return;
  if (reference.startsWith('http://') || reference.startsWith('https://')) return;

  // regex for resourceType/id
  const regex = /^[a-zA-Z]+\/[a-zA-Z0-9\-.]+$/;

  // match with regex
  if (!regex.test(reference)) {
    errors.push(
      new OperationOutcomeIssueException({
        severity: 'error',
        code: 'invalid',
        diagnostics: `Invalid reference format. Reference must be in the format '{ResourceType}/{id}'.`,
        details: {
          text: `Path: ${path}.reference. Value: ${reference}`,
        },
      }),
    );
    // throw new ReferenceException(reference, null, `${path}.reference`);
  }
};

export const ReferenceValidator = (
  dataToValidate: IReference,
  path = 'Reference',
  errors: IOperationOutcomeIssue[],
): void => {
  ModelValidator<IReference>({
    dataToValidate,
    path,
    modelDefinition: modelFields,
    additionalValidation: [ValidateReferenceFormat],
    errors,
  });
};
