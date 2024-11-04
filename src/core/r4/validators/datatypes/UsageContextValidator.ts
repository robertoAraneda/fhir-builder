import { createDatatypeDefinition } from '../base/definitions';
import { IOperationOutcomeIssue, IUsageContext } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { OperationOutcomeIssueException } from '../../../commons/exceptions/operation-outcome.exception';

const modelFields = createDatatypeDefinition<IUsageContext>([
  {
    name: 'code',
    type: 'Coding',
    isRequired: true,
    isArray: false,
  },
  {
    name: 'valueCodeableConcept',
    type: 'CodeableConcept',
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
    name: 'valueRange',
    type: 'Range',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'valueReference',
    type: 'Reference',
    isRequired: false,
    isArray: false,
    referenceTypes: [
      'PlanDefinition',
      'ResearchStudy',
      'InsurancePlan',
      'HealthcareService',
      'Group',
      'Location',
      'Organization',
    ],
  },
]);

function validateRequiredValue(dataToValidate: IUsageContext, path: string, errors: IOperationOutcomeIssue[]): void {
  if (
    !dataToValidate.valueCodeableConcept &&
    !dataToValidate.valueQuantity &&
    !dataToValidate.valueRange &&
    !dataToValidate.valueReference
  ) {
    errors.push(
      new OperationOutcomeIssueException({
        severity: 'error',
        code: 'required',
        details: {
          text: 'valueCodeableConcept, valueQuantity, valueRange or valueReference is required',
        },
        diagnostics: `The field valueCodeableConcept, valueQuantity, valueRange or valueReference is required in ${path}`,
      }),
    );
  }
}

export const UsageContextValidator = (
  dataToValidate: IUsageContext,
  path = 'UsageContext',
  errors: IOperationOutcomeIssue[],
): void => {
  ModelValidator<IUsageContext>({
    path,
    dataToValidate,
    modelDefinition: modelFields,
    errors,
    additionalValidation: [validateRequiredValue],
  });
};
