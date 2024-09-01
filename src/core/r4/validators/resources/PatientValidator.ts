import { createResourceDefinition } from '../base/definitions';
import { IPatient, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { Patient } from '../../../../r4/models';
import { OperationOutcomeIssueException } from '../../../commons/exceptions/operation-outcome.exception';

/**
 * @description The model fields for the Patient model
 */
const modelFields = createResourceDefinition<IPatient>([
  { name: 'identifier', type: 'Identifier', isArray: true, isRequired: false },
  { name: 'active', type: 'boolean', isArray: false, isRequired: false },
  { name: '_active', type: 'Element', isArray: false, isRequired: false },
  { name: 'name', type: 'HumanName', isArray: true, isRequired: false },
  { name: 'telecom', type: 'ContactPoint', isArray: true, isRequired: false },
  {
    name: 'gender',
    type: 'code',
    isArray: false,
    isRequired: false,
    enumValues: ['male', 'female', 'other', 'unknown'],
  },
  { name: '_gender', type: 'Element', isArray: false, isRequired: false },
  { name: 'birthDate', type: 'date', isArray: false, isRequired: false },
  { name: '_birthDate', type: 'Element', isArray: false, isRequired: false },
  { name: 'deceasedBoolean', type: 'boolean', isArray: false, isRequired: false },
  { name: '_deceasedBoolean', type: 'Element', isArray: false, isRequired: false },
  { name: 'deceasedDateTime', type: 'dateTime', isArray: false, isRequired: false },
  { name: '_deceasedDateTime', type: 'Element', isArray: false, isRequired: false },
  { name: 'address', type: 'Address', isArray: true, isRequired: false },
  { name: 'maritalStatus', type: 'CodeableConcept', isArray: false, isRequired: false },
  { name: 'multipleBirthBoolean', type: 'boolean', isArray: false, isRequired: false },
  { name: '_multipleBirthBoolean', type: 'Element', isArray: false, isRequired: false },
  { name: 'multipleBirthInteger', type: 'integer', isArray: false, isRequired: false },
  { name: '_multipleBirthInteger', type: 'Element', isArray: false, isRequired: false },
  { name: 'photo', type: 'Attachment', isArray: true, isRequired: false },
  { name: 'contact', type: 'PatientContact', isArray: true, isRequired: false },
  { name: 'communication', type: 'PatientCommunication', isArray: true, isRequired: false },
  {
    name: 'generalPractitioner',
    type: 'Reference',
    isArray: true,
    isRequired: false,
    referenceTypes: ['PractitionerRole', 'Practitioner', 'Organization'],
  },
  {
    name: 'managingOrganization',
    type: 'Reference',
    isArray: false,
    isRequired: false,
    referenceTypes: ['Organization'],
  },
  { name: 'link', type: 'PatientLink', isArray: true, isRequired: false },
]);

/**
 * @description Validates the Patient model
 * @param dataToValidate - the Patient model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function PatientValidator<T extends IPatient>(
  dataToValidate: T,
  path = 'Patient',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new Patient());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
    additionalValidation: [ConstraintValidator],
  });
}

function ConstraintValidator(payload: IPatient, path: string, errors: IOperationOutcomeIssue[]): void {
  if (payload.contact && payload.contact.length > 0) {
    payload.contact.forEach((contact, index) => {
      // SHALL at least contain a contact's details or a reference to an organization
      if (!contact.name && !contact.organization && !contact.telecom && !contact.address) {
        errors.push(
          new OperationOutcomeIssueException({
            severity: 'error',
            code: 'invariant',
            diagnostics: `+ Rule (pat-1). SHALL at least contain a contact's details or a reference to an organization`,
            details: {
              text: `Path: ${path}.contact[${index}].`,
            },
          }),
        );
      }
    });
  }
}
