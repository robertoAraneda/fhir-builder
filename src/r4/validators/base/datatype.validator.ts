import { IGenericObject } from '../../interfaces';
import { IExtension, INarrative } from 'fhirtypes/dist/r4';
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

export const PeriodVal = (args: IGenericObject): ValReturnType => {
  try {
    PeriodValidator(args);
    return { error: null };
  } catch (e: any) {
    return { error: e.message };
  }
};

export const AddressVal = (args: IGenericObject): ValReturnType => {
  try {
    AddressValidator(args);
    return { error: null };
  } catch (e: any) {
    return { error: e.message };
  }
};

export const AttachmentVal = (args: IGenericObject): ValReturnType => {
  try {
    AttachmentValidator(args);
    return { error: null };
  } catch (e: any) {
    return { error: e.message };
  }
};

export const ResourceVal = (args: IGenericObject): ValReturnType => {
  try {
    ResourceValidator(args);
    return { error: null };
  } catch (e: any) {
    return { error: e.message };
  }
};

export const CodeableConceptVal = (args: IGenericObject): ValReturnType => {
  try {
    CodeableConceptValidator(args);
    return { error: null };
  } catch (e: any) {
    return { error: e.message };
  }
};

export const CodingVal = (args: IGenericObject): ValReturnType => {
  try {
    CodingValidator(args);
    return { error: null };
  } catch (e: any) {
    return { error: e.message };
  }
};

export const HumanNameVal = (args: IGenericObject): ValReturnType => {
  try {
    HumanNameValidator(args);
    return { error: null };
  } catch (e: any) {
    return { error: e.message };
  }
};

export const ElementVal = (args: IGenericObject): ValReturnType => {
  try {
    ElementValidator(args);
    return { error: null };
  } catch (e: any) {
    return { error: e.message };
  }
};

export const ExtensionVal = (args: IGenericObject): ValReturnType => {
  try {
    ExtensionValidator(args as IExtension | IExtension[]);
    return { error: null };
  } catch (e: any) {
    return { error: e.message };
  }
};

export const ContactPointVal = (args: IGenericObject): ValReturnType => {
  try {
    ContactPointValidator(args);
    return { error: null };
  } catch (e: any) {
    return { error: e.message };
  }
};

export const IdentifierVal = (args: IGenericObject): ValReturnType => {
  try {
    IdentifierValidator(args);
    return { error: null };
  } catch (e: any) {
    return { error: e.message };
  }
};

export const ReferenceVal = (args: IGenericObject): ValReturnType => {
  try {
    ReferenceValidator(args);
    return { error: null };
  } catch (e: any) {
    return { error: e.message };
  }
};

export const MetaVal = (args: IGenericObject): ValReturnType => {
  try {
    MetaValidator(args);
    return { error: null };
  } catch (e: any) {
    return { error: e.message };
  }
};

export const NarrativeVal = (args: IGenericObject): ValReturnType => {
  try {
    NarrativeValidator(args as INarrative | INarrative[]);
    return { error: null };
  } catch (e: any) {
    return { error: e.message };
  }
};

export const QuantityVal = (args: IGenericObject): ValReturnType => {
  try {
    QuantityValidator(args);
    return { error: null };
  } catch (e: any) {
    return { error: e.message };
  }
};

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

type DatatypeValidationReturnType = (args: IGenericObject) => ValReturnType;

type DatatypeValidatorType = {
  Period: DatatypeValidationReturnType;
  Address: DatatypeValidationReturnType;
  Attachment: DatatypeValidationReturnType;
  Resource: DatatypeValidationReturnType;
  CodeableConcept: DatatypeValidationReturnType;
  Coding: DatatypeValidationReturnType;
  HumanName: DatatypeValidationReturnType;
  Element: DatatypeValidationReturnType;
  Extension: DatatypeValidationReturnType;
  ContactPoint: DatatypeValidationReturnType;
  Identifier: DatatypeValidationReturnType;
  Reference: DatatypeValidationReturnType;
  Meta: DatatypeValidationReturnType;
  Narrative: DatatypeValidationReturnType;
  Quantity: DatatypeValidationReturnType;
};

export const DatatypeValidator: DatatypeValidatorType = {
  Period: PeriodVal,
  Address: AddressVal,
  Attachment: AttachmentVal,
  Resource: ResourceVal,
  CodeableConcept: CodeableConceptVal,
  Coding: CodingVal,
  HumanName: HumanNameVal,
  Element: ElementVal,
  Extension: ExtensionVal,
  ContactPoint: ContactPointVal,
  Identifier: IdentifierVal,
  Reference: ReferenceVal,
  Meta: MetaVal,
  Narrative: NarrativeVal,
  Quantity: QuantityVal,
};
