import { createResourceDefinition } from '../base/definitions';
import { IOrganization, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { Organization } from '../../../../r4/models';
import { OperationOutcomeIssueException } from '../../../commons/exceptions/operation-outcome.exception';

/**
 * @description The model fields for the Organization model
 */
const modelFields = createResourceDefinition<IOrganization>([
  { name: 'identifier', type: 'Identifier', isArray: true, isRequired: false },
  { name: 'active', type: 'boolean', isArray: false, isRequired: false },
  { name: '_active', type: 'Element', isArray: false, isRequired: false },
  { name: 'type', type: 'CodeableConcept', isArray: true, isRequired: false },
  { name: 'name', type: 'string', isArray: false, isRequired: false },
  { name: '_name', type: 'Element', isArray: false, isRequired: false },
  { name: 'alias', type: 'string', isArray: true, isRequired: false },
  { name: '_alias', type: 'Element', isArray: true, isRequired: false },
  { name: 'telecom', type: 'ContactPoint', isArray: true, isRequired: false },
  { name: 'address', type: 'Address', isArray: true, isRequired: false },
  { name: 'partOf', type: 'Reference', isArray: false, isRequired: false, referenceTypes: ['Organization'] },
  { name: 'contact', type: 'OrganizationContact', isArray: true, isRequired: false },
  { name: 'endpoint', type: 'Reference', isArray: true, isRequired: false, referenceTypes: ['Endpoint'] },
]);

/**
 * @description Validates the Organization model
 * @param dataToValidate - the Organization model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function OrganizationValidator<T extends IOrganization>(
  dataToValidate: T,
  path = 'Organization',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new Organization());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
    additionalValidation: [ValidateConformance],
  });
}

function ValidateConformance(dataToValidate: IOrganization, path: string, errors: IOperationOutcomeIssue[]): void {
  // org-1	Rule	(base)	The organization SHALL at least have a name or an identifier, and possibly more than one	(identifier.count() + name.count()) > 0
  if (!(dataToValidate.identifier || dataToValidate.name)) {
    errors.push(
      new OperationOutcomeIssueException({
        severity: 'error',
        code: 'invariant',
        details: {
          text: `Path: ${path}`,
        },
        diagnostics: `+ Rule: (org-1). The organization SHALL at least have a name or an identifier, and possibly more than one`,
      }),
    );
  }

  // org-2	Rule	Organization.address	An address of an organization can never be of use 'home'	where(use = 'home').empty()
  if (dataToValidate.address && dataToValidate.address.some((address) => address.use === 'home')) {
    errors.push(
      new OperationOutcomeIssueException({
        severity: 'error',
        code: 'invariant',
        details: {
          text: `Path: ${path}.address`,
        },
        diagnostics: `+ Rule: (org-2). An address of an organization can never be of use 'home'`,
      }),
    );
  }

  // org-3	Rule	Organization.telecom	The telecom of an organization can never be of use 'home'	where(use = 'home').empty()
  if (dataToValidate.telecom && dataToValidate.telecom.some((telecom) => telecom.use === 'home')) {
    errors.push(
      new OperationOutcomeIssueException({
        severity: 'error',
        code: 'invariant',
        details: {
          text: `Path: ${path}.telecom`,
        },
        diagnostics: `+ Rule: (org-3). The telecom of an organization can never be of use 'home'`,
      }),
    );
  }
}
