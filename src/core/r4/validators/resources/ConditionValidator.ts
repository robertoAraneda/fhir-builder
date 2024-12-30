import { createResourceDefinition } from '../base/definitions';
import { ICondition, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { Condition } from '../../../../r4/models';
import { OperationOutcomeIssueException } from '../../../commons/exceptions/operation-outcome.exception';

/**
 * @description The model fields for the Condition model
 */
const modelFields = createResourceDefinition<ICondition>([
  { name: 'identifier', type: 'Identifier', isArray: true, isRequired: false },
  {
    name: 'clinicalStatus',
    type: 'CodeableConcept',
    isArray: false,
    isRequired: false,
    enumValues: ['active', 'recurrence', 'relapse', 'inactive', 'remission', 'resolved'],
  },
  {
    name: 'verificationStatus',
    type: 'CodeableConcept',
    isArray: false,
    isRequired: false,
    enumValues: ['unconfirmed', 'provisional', 'differential', 'confirmed', 'refuted', 'entered-in-error'],
  },
  { name: 'category', type: 'CodeableConcept', isArray: true, isRequired: false },
  { name: 'severity', type: 'CodeableConcept', isArray: false, isRequired: false },
  { name: 'code', type: 'CodeableConcept', isArray: false, isRequired: false },
  { name: 'bodySite', type: 'CodeableConcept', isArray: true, isRequired: false },
  {
    name: 'subject',
    type: 'Reference',
    isArray: false,
    isRequired: true,
    referenceTypes: ['Patient', 'Group'],
  },
  {
    name: 'encounter',
    type: 'Reference',
    isArray: false,
    isRequired: false,
    referenceTypes: ['Encounter'],
  },
  { name: 'onsetDateTime', type: 'dateTime', isArray: false, isRequired: false },
  { name: '_onsetDateTime', type: 'Element', isArray: false, isRequired: false },
  { name: 'onsetAge', type: 'Age', isArray: false, isRequired: false },
  { name: 'onsetPeriod', type: 'Period', isArray: false, isRequired: false },
  { name: 'onsetRange', type: 'Range', isArray: false, isRequired: false },
  { name: 'onsetString', type: 'string', isArray: false, isRequired: false },
  { name: '_onsetString', type: 'Element', isArray: false, isRequired: false },
  { name: 'abatementDateTime', type: 'dateTime', isArray: false, isRequired: false },
  { name: '_abatementDateTime', type: 'Element', isArray: false, isRequired: false },
  { name: 'abatementAge', type: 'Age', isArray: false, isRequired: false },
  { name: 'abatementPeriod', type: 'Period', isArray: false, isRequired: false },
  { name: 'abatementRange', type: 'Range', isArray: false, isRequired: false },
  { name: 'abatementString', type: 'string', isArray: false, isRequired: false },
  { name: '_abatementString', type: 'Element', isArray: false, isRequired: false },
  { name: 'recordedDate', type: 'dateTime', isArray: false, isRequired: false },
  { name: '_recordedDate', type: 'Element', isArray: false, isRequired: false },
  {
    name: 'recorder',
    type: 'Reference',
    isArray: false,
    isRequired: false,
    referenceTypes: ['Practitioner', 'PractitionerRole', 'Patient', 'RelatedPerson'],
  },
  {
    name: 'asserter',
    type: 'Reference',
    isArray: false,
    isRequired: false,
    referenceTypes: ['Practitioner', 'PractitionerRole', 'Patient', 'RelatedPerson'],
  },
  { name: 'stage', type: 'ConditionStage', isArray: true, isRequired: false },
  { name: 'evidence', type: 'ConditionEvidence', isArray: true, isRequired: false },
  { name: 'note', type: 'Annotation', isArray: true, isRequired: false },
]);

/**
 * @description Validates the Condition model
 * @param dataToValidate - the Condition model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function ConditionValidator<T extends ICondition>(
  dataToValidate: T,
  path = 'Condition',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new Condition());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
    additionalValidation: [ConstraintValidator],
  });
}

function ConstraintValidator(dataToValidate: ICondition, path: string, errors: IOperationOutcomeIssue[] = []) {
  // con-1	Rule	Condition.stage	Stage SHALL have summary or assessment
  // summary.exists() or assessment.exists()
  if (dataToValidate.stage && dataToValidate.stage.length > 0) {
    dataToValidate.stage.forEach((stage) => {
      if (!stage.summary && !stage.assessment) {
        errors.push(
          new OperationOutcomeIssueException({
            severity: 'error',
            code: 'invariant',
            details: {
              text: `Path: ${path}.stage`,
            },
            diagnostics: `+ Rule: (con-1). Stage SHALL have summary or assessment`,
          }),
        );
      }
    });
  }

  // con-4	Rule	(base)	If condition is abated, then clinicalStatus must be either inactive, resolved, or remission
  // abatement.empty() or clinicalStatus.coding.where(system='http://terminology.hl7.org/CodeSystem/condition-clinical' and (code='resolved' or code='remission' or code='inactive')).exists()
  if (
    dataToValidate.abatementDateTime ||
    dataToValidate.abatementAge ||
    dataToValidate.abatementPeriod ||
    dataToValidate.abatementRange ||
    dataToValidate.abatementString
  ) {
    const clinicalStatus = dataToValidate.clinicalStatus?.coding?.find(
      (coding) => coding.system === 'http://terminology.hl7.org/CodeSystem/condition-clinical',
    );

    if (!clinicalStatus || !['resolved', 'remission', 'inactive'].includes(clinicalStatus.code as string)) {
      errors.push(
        new OperationOutcomeIssueException({
          severity: 'error',
          code: 'invariant',
          details: {
            text: `Path: ${path}`,
          },
          diagnostics: `+ Rule: (con-4). If condition is abated, then clinicalStatus must be either inactive, resolved, or remission`,
        }),
      );
    }
  }

  //con-5	Rule	(base)	Condition.clinicalStatus SHALL NOT be present if verification Status is entered-in-error
  // verificationStatus.coding.where(system='http://terminology.hl7.org/CodeSystem/condition-ver-status' and code='entered-in-error').empty() or clinicalStatus.empty()

  if (
    dataToValidate.verificationStatus?.coding?.find(
      (coding) =>
        coding.system === 'http://terminology.hl7.org/CodeSystem/condition-ver-status' &&
        coding.code === 'entered-in-error',
    ) &&
    dataToValidate.clinicalStatus
  ) {
    errors.push(
      new OperationOutcomeIssueException({
        severity: 'error',
        code: 'invariant',
        details: {
          text: `Path: ${path}`,
        },
        diagnostics: `+ Rule: (con-5). Condition.clinicalStatus SHALL NOT be present if verification Status is entered-in-error`,
      }),
    );
  }
}
