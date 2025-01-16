import { createBackboneDefinition } from '../base/definitions';
import { ICarePlanActivity, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { CarePlanActivity } from '../../../../r4/models';

/**
 * @description The model fields for the CarePlanActivity model
 */
const modelFields = createBackboneDefinition<ICarePlanActivity>([
  { name: 'outcomeCodeableConcept', type: 'CodeableConcept', isArray: true, isRequired: false },
  {
    name: 'outcomeReference',
    type: 'Reference',
    isArray: true,
    isRequired: false,
    referenceTypes: ['Any'],
  },
  { name: 'progress', type: 'Annotation', isArray: true, isRequired: false },
  {
    name: 'reference',
    type: 'Reference',
    isArray: false,
    isRequired: false,
    referenceTypes: [
      'Appointment',
      'CommunicationRequest',
      'DeviceRequest',
      'MedicationRequest',
      'NutritionOrder',
      'Task',
      'ServiceRequest',
      'VisionPrescription',
      'RequestGroup',
    ],
  },
  { name: 'detail', type: 'CarePlanDetail', isArray: false, isRequired: false },
]);

/**
 * @description Validates the CarePlanActivity model
 * @param dataToValidate - the CarePlanActivity model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function CarePlanActivityValidator<T extends ICarePlanActivity>(
  dataToValidate: T,
  path = 'CarePlanActivity',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new CarePlanActivity());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
  });
}
