import { IGenericObject } from '../interfaces';
import { PeriodValidator } from '../validators/datatypes/period.validator';
import { AddressValidator } from '../validators/datatypes/address.validator';
import { AttachmentValidator } from '../validators/datatypes/attachment.validator';
import { ResourceValidator } from '../validators/datatypes/resource.validator';
import { CodeableConceptValidator } from '../validators/datatypes/codeable-concept.validator';
import { CodingValidator } from '../validators/datatypes/coding.validator';
import { HumanNameValidator } from '../validators/datatypes/human-name.validator';
import { ElementValidator } from '../validators/datatypes/element.validator';
import { ExtensionValidator } from '../validators/datatypes/extension.validator';
import { IExtension } from 'fhirtypes/dist/r4';
import { ContactPointValidator } from '../validators/datatypes/contact-point.validator';
import { IdentifierValidator } from '../validators/datatypes/identifier.validator';
import { ReferenceValidator } from '../validators/datatypes/reference.validator';

const PeriodVal = (args: IGenericObject): { error: string | null } => {
  try {
    PeriodValidator(args);
    return { error: null };
  } catch (e: any) {
    return { error: e.message };
  }
};

const AddressVal = (args: IGenericObject): { error: string | null } => {
  try {
    AddressValidator(args);
    return { error: null };
  } catch (e: any) {
    return { error: e.message };
  }
};

const AttachmentVal = (args: IGenericObject): { error: string | null } => {
  try {
    AttachmentValidator(args);
    return { error: null };
  } catch (e: any) {
    return { error: e.message };
  }
};

const ResourceVal = (args: IGenericObject): { error: string | null } => {
  try {
    ResourceValidator(args);
    return { error: null };
  } catch (e: any) {
    return { error: e.message };
  }
};

const CodeableConceptVal = (args: IGenericObject): { error: string | null } => {
  try {
    CodeableConceptValidator(args);
    return { error: null };
  } catch (e: any) {
    return { error: e.message };
  }
};

const CodingVal = (args: IGenericObject): { error: string | null } => {
  try {
    CodingValidator(args);
    return { error: null };
  } catch (e: any) {
    return { error: e.message };
  }
};

const HumanNameVal = (args: IGenericObject): { error: string | null } => {
  try {
    HumanNameValidator(args);
    return { error: null };
  } catch (e: any) {
    return { error: e.message };
  }
};

const ElementVal = (args: IGenericObject): { error: string | null } => {
  try {
    ElementValidator(args);
    return { error: null };
  } catch (e: any) {
    return { error: e.message };
  }
};

const ExtensionVal = (args: IGenericObject): { error: string | null } => {
  try {
    ExtensionValidator(args as IExtension | IExtension[]);
    return { error: null };
  } catch (e: any) {
    return { error: e.message };
  }
};

const ContactPointVal = (args: IGenericObject): { error: string | null } => {
  try {
    ContactPointValidator(args);
    return { error: null };
  } catch (e: any) {
    return { error: e.message };
  }
};

const IdentifierVal = (args: IGenericObject): { error: string | null } => {
  try {
    IdentifierValidator(args);
    return { error: null };
  } catch (e: any) {
    return { error: e.message };
  }
};

const ReferenceVal = (args: IGenericObject): { error: string | null } => {
  try {
    ReferenceValidator(args);
    return { error: null };
  } catch (e: any) {
    return { error: e.message };
  }
};

export type DatatypeValidatorType = {
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
};

export const InternalDataTypeValidator: DatatypeValidatorType = {
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
};

export const DatatypeValidator = {
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
};
