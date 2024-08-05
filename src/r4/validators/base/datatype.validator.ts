import { PeriodValidator } from '../datatypes/period.validator';
import { AddressValidator } from '../datatypes/address.validator';
import { AttachmentValidator } from '../datatypes/attachment.validator';
import { ResourceValidator } from '../datatypes/resource.validator';
import { CodeableConceptValidator } from '../datatypes/codeable-concept.validator';
import { CodingValidator } from '../datatypes/coding.validator';
import { HumanNameValidator } from '../datatypes/human-name.validator';
import { ElementValidator } from '../datatypes/element.validator';
import { ExtensionValidator } from '../datatypes/extension.validator';
import { ContactPointValidator } from '../datatypes/contact-point.validator';
import { IdentifierValidator } from '../datatypes/identifier.validator';
import { ReferenceValidator } from '../datatypes/reference.validator';
import { MetaValidator } from '../datatypes/meta.validator';
import { NarrativeValidator } from '../datatypes/narrative.validator';
import { QuantityValidator } from '../datatypes/quantity.validator';

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
