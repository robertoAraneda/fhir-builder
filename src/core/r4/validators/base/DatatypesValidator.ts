import * as DataTypeValidators from '../datatypes';
import { IOperationOutcomeIssue } from 'fhirtypes/dist/r4';

type RemoveValidatorSuffix<T extends string> = T extends `${infer U}Validator` ? U : T;

type ValidatorTypes = RemoveValidatorSuffix<keyof typeof DataTypeValidators>;

export const DatatypesValidator: Record<
  ValidatorTypes,
  (dataToValidate: any, path: string, errors: IOperationOutcomeIssue[]) => void
> = {
  Period: DataTypeValidators.PeriodValidator,
  Address: DataTypeValidators.AddressValidator,
  Attachment: DataTypeValidators.AttachmentValidator,
  Resource: DataTypeValidators.ResourceValidator,
  CodeableConcept: DataTypeValidators.CodeableConceptValidator,
  Coding: DataTypeValidators.CodingValidator,
  HumanName: DataTypeValidators.HumanNameValidator,
  Element: DataTypeValidators.ElementValidator,
  Extension: DataTypeValidators.ExtensionValidator,
  ContactPoint: DataTypeValidators.ContactPointValidator,
  Identifier: DataTypeValidators.IdentifierValidator,
  Reference: DataTypeValidators.ReferenceValidator,
  Meta: DataTypeValidators.MetaValidator,
  Narrative: DataTypeValidators.NarrativeValidator,
  Quantity: DataTypeValidators.QuantityValidator,
  Annotation: DataTypeValidators.AnnotationValidator,
  Repeat: DataTypeValidators.RepeatValidator,
  Duration: DataTypeValidators.DurationValidator,
  Range: DataTypeValidators.RangeValidator,
  SimpleQuantity: DataTypeValidators.SimpleQuantityValidator,
  Money: DataTypeValidators.MoneyValidator,
  Signature: DataTypeValidators.SignatureValidator,
  ContactDetail: DataTypeValidators.ContactDetailValidator,
  UsageContext: DataTypeValidators.UsageContextValidator,
  Age: DataTypeValidators.AgeValidator,
};
