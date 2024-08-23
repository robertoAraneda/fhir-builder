import { IAttachment, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { createDatatypeDefinition } from '../base/definitions';
import { ModelValidator } from '../base';
import { ValidationError } from '../base/base.validator';
import { OperationOutcomeIssueException } from '../../../commons/exceptions/operation-outcome.exception';

const modelDefinition = createDatatypeDefinition<IAttachment>([
  { name: 'contentType', type: 'code', isRequired: false, isArray: false },
  { name: 'language', type: 'code', isRequired: false, isArray: false },
  { name: 'data', type: 'base64Binary', isRequired: false, isArray: false },
  { name: 'url', type: 'url', isRequired: false, isArray: false },
  { name: 'size', type: 'unsignedInt', isRequired: false, isArray: false },
  { name: 'hash', type: 'base64Binary', isRequired: false, isArray: false },
  { name: 'title', type: 'string', isRequired: false, isArray: false },
  { name: 'creation', type: 'dateTime', isRequired: false, isArray: false },
  { name: '_contentType', type: 'Element', isArray: false, isRequired: false },
  { name: '_language', type: 'Element', isArray: false, isRequired: false },
  { name: '_data', type: 'Element', isArray: false, isRequired: false },
  { name: '_url', type: 'Element', isArray: false, isRequired: false },
  { name: '_size', type: 'Element', isArray: false, isRequired: false },
  { name: '_hash', type: 'Element', isArray: false, isRequired: false },
  { name: '_title', type: 'Element', isArray: false, isRequired: false },
  { name: '_creation', type: 'Element', isArray: false, isRequired: false },
]);

function ValidateConstraint(payload: IAttachment, path: string, errors: ValidationError[]): void {
  // att-1: If the Attachment has data, it SHALL have a contentType
  if (payload.data && !payload.contentType) {
    errors.push(
      new OperationOutcomeIssueException({
        severity: 'error',
        code: 'invariant',
        diagnostics: `If the Attachment has data, it SHALL have a contentType (att-1)`,
        details: {
          text: `Path: ${path}.contentType. Value: ${payload.contentType}`,
        },
      }),
    );
    //throw new ConstraintException('Attachment', 'If the Attachment has data, it SHALL have a contentType (att-1)');
  }
}

export const AttachmentValidator = (
  dataToValidate: IAttachment,
  path = 'Attachment',
  errors: IOperationOutcomeIssue[],
): void => {
  ModelValidator<IAttachment>({
    dataToValidate,
    path,
    modelDefinition,
    additionalValidation: [ValidateConstraint],
    errors,
  });
};
