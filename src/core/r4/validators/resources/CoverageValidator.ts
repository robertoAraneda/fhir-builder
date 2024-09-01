import { createResourceDefinition } from '../base/definitions';
import { ICoverage, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { Coverage } from '../../../../r4/models';

/**
 * @description The model fields for the Coverage model
 */
const modelFields = createResourceDefinition<ICoverage>([
  { name: 'identifier', type: 'Identifier', isArray: true, isRequired: false },
  {
    name: 'status',
    type: 'code',
    isArray: false,
    isRequired: true,
    enumValues: ['active', 'cancelled', 'draft', 'entered-in-error'],
  },
  { name: '_status', type: 'Element', isArray: false, isRequired: false },
  { name: 'type', type: 'CodeableConcept', isArray: false, isRequired: false },
  {
    name: 'policyHolder',
    type: 'Reference',
    isArray: false,
    isRequired: false,
    referenceTypes: ['Patient', 'RelatedPerson', 'Organization'],
  },
  {
    name: 'subscriber',
    type: 'Reference',
    isArray: false,
    isRequired: false,
    referenceTypes: ['Patient', 'RelatedPerson'],
  },
  { name: 'subscriberId', type: 'string', isArray: false, isRequired: false },
  { name: '_subscriberId', type: 'Element', isArray: false, isRequired: false },
  { name: 'beneficiary', type: 'Reference', isArray: false, isRequired: true, referenceTypes: ['Patient'] },
  { name: 'dependent', type: 'string', isArray: false, isRequired: false },
  { name: '_dependent', type: 'Element', isArray: false, isRequired: false },
  { name: 'relationship', type: 'CodeableConcept', isArray: false, isRequired: false },
  { name: 'period', type: 'Period', isArray: false, isRequired: false },
  {
    name: 'payor',
    type: 'Reference',
    isArray: true,
    isRequired: true,
    referenceTypes: ['Organization', 'Patient', 'RelatedPerson'],
  },
  { name: 'class', type: 'CoverageClass', isArray: true, isRequired: false },
  { name: 'order', type: 'positiveInt', isArray: false, isRequired: false },
  { name: '_order', type: 'Element', isArray: false, isRequired: false },
  { name: 'network', type: 'string', isArray: false, isRequired: false },
  { name: '_network', type: 'Element', isArray: false, isRequired: false },
  { name: 'costToBeneficiary', type: 'CoverageCostToBeneficiary', isArray: true, isRequired: false },
  { name: 'subrogation', type: 'boolean', isArray: false, isRequired: false },
  { name: '_subrogation', type: 'Element', isArray: false, isRequired: false },
  { name: 'contract', type: 'Reference', isArray: true, isRequired: false, referenceTypes: ['Contract'] },
]);

/**
 * @description Validates the Coverage model
 * @param dataToValidate - the Coverage model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function CoverageValidator<T extends ICoverage>(
  dataToValidate: T,
  path = 'Coverage',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new Coverage());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
  });
}
