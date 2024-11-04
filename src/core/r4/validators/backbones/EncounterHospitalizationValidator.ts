import { createBackboneDefinition } from '../base/definitions';
import { IEncounterHospitalization, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { EncounterHospitalization } from '../../../../r4/models';

/**
 * @description The model fields for the EncounterHospitalization model
 */
const modelFields = createBackboneDefinition<IEncounterHospitalization>([
  { name: 'preAdmissionIdentifier', type: 'Identifier', isArray: false, isRequired: false },
  {
    name: 'origin',
    type: 'Reference',
    isArray: false,
    isRequired: false,
    referenceTypes: ['Location', 'Organization'],
  },
  { name: 'admitSource', type: 'CodeableConcept', isArray: false, isRequired: false },
  { name: 'reAdmission', type: 'CodeableConcept', isArray: false, isRequired: false },
  { name: 'dietPreference', type: 'CodeableConcept', isArray: true, isRequired: false },
  { name: 'specialCourtesy', type: 'CodeableConcept', isArray: true, isRequired: false },
  { name: 'specialArrangement', type: 'CodeableConcept', isArray: true, isRequired: false },
  {
    name: 'destination',
    type: 'Reference',
    isArray: false,
    isRequired: false,
    referenceTypes: ['Location', 'Organization'],
  },
  { name: 'dischargeDisposition', type: 'CodeableConcept', isArray: false, isRequired: false },
]);

/**
 * @description Validates the EncounterHospitalization model
 * @param dataToValidate - the EncounterHospitalization model to validate
 * @param path - the path to the model
 * @param errors - the errors array
 */
export function EncounterHospitalizationValidator<T extends IEncounterHospitalization>(
  dataToValidate: T,
  path = 'EncounterHospitalization',
  errors: IOperationOutcomeIssue[] = [],
): void {
  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new EncounterHospitalization());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
  });
}
