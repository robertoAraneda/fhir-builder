import {
  AddressValidator,
  AttachmentValidator,
  CodeableConceptValidator,
  CodingValidator,
  ContactPointValidator,
  ElementValidator,
  ExtensionValidator,
  HumanNameValidator,
  IdentifierValidator,
  MetaValidator,
  NarrativeValidator,
  PeriodValidator,
  QuantityValidator,
  ReferenceValidator,
  ResourceValidator,
} from '../datatypes';

export interface ValReturnType {
  error: string | null;
}

export type InternalDatatypeValidatorType = {
  Period: typeof PeriodValidator;
  Address: typeof AddressValidator;
  Attachment: typeof AttachmentValidator;
  Resource: typeof ResourceValidator;
  CodeableConcept: typeof CodeableConceptValidator;
  Coding: typeof CodingValidator;
  HumanName: typeof HumanNameValidator;
  Element: typeof ElementValidator;
  Extension: typeof ExtensionValidator;
  ContactPoint: typeof ContactPointValidator;
  Identifier: typeof IdentifierValidator;
  Reference: typeof ReferenceValidator;
  Meta: typeof MetaValidator;
  Narrative: typeof NarrativeValidator;
  Quantity: typeof QuantityValidator;
};

export const InternalDataTypeValidator: InternalDatatypeValidatorType = {
  Period: PeriodValidator,
  Address: AddressValidator,
  Attachment: AttachmentValidator,
  Resource: ResourceValidator,
  CodeableConcept: CodeableConceptValidator,
  Coding: CodingValidator,
  HumanName: HumanNameValidator,
  Element: ElementValidator,
  Extension: ExtensionValidator,
  ContactPoint: ContactPointValidator,
  Identifier: IdentifierValidator,
  Reference: ReferenceValidator,
  Meta: MetaValidator,
  Narrative: NarrativeValidator,
  Quantity: QuantityValidator,
};
