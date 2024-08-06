import {
  AdministrativeGenderType,
  IAddress,
  IAttachment,
  ICodeableConcept,
  IContactPoint,
  IElement,
  IExtension,
  IHumanName,
  IIdentifier,
  INarrative,
  IPatient,
  IPatientCommunication,
  IPatientContact,
  IPatientLink,
  IReference,
  IResource,
} from 'fhirtypes/dist/r4';
import { PatientParamExtensionType } from '../../types';
import { Patient } from '../../models';

interface IPatientBuilder {
  // Resource properties
  setId(id: string): this;
  setMeta(meta: any): this;
  setImplicitRules(implicitRules: string): this;
  setLanguage(language: string): this;

  // DomainResource properties
  setText(text: INarrative): this;
  addContained(contained: IResource): this;
  setMultipleContained(contained: IResource[]): this;
  addExtension(extension: IExtension): this;
  setMultipleExtension(extension: IExtension[]): this;
  addModifierExtension(modifierExtension: IExtension): this;
  setMultipleModifierExtension(modifierExtension: IExtension[]): this;

  // Patient properties
  addParamExtension(param: PatientParamExtensionType, extension: IElement): this;
  addIdentifier(identifier: IIdentifier): this;
  setMultipleIdentifier(identifiers: IIdentifier[]): this;
  setActive(active: boolean): this;
  addName(name: IHumanName): this;
  setMultipleName(names: IHumanName[]): this;
  addTelecom(telecom: IContactPoint): this;
  setMultipleTelecom(telecoms: IContactPoint[]): this;
  setGender(gender: AdministrativeGenderType): this;
  setBirthDate(birthDate: string): this;
  setDeceasedBoolean(deceasedBoolean: boolean): this;
  setDeceasedDateTime(deceasedDateTime: string): this;
  addAddress(address: IAddress): this;
  setMultipleAddress(addresses: IAddress[]): this;
  setMaritalStatus(maritalStatus: ICodeableConcept): this;
  setMultipleBirthBoolean(multipleBirthBoolean: boolean): this;
  setMultipleBirthInteger(multipleBirthInteger: number): this;
  addPhoto(photo: IAttachment): this;
  setMultiplePhoto(photos: IAttachment[]): this;
  addContact(contact: IPatientContact): this;
  setMultipleContact(contacts: IPatientContact[]): this;
  addCommunication(communication: IPatientCommunication): this;
  setMultipleCommunication(communications: IPatientCommunication[]): this;
  addGeneralPractitioner(generalPractitioner: IReference): this;
  setMultipleGeneralPractitioner(generalPractitioners: IReference[]): this;
  setManagingOrganization(managingOrganization: IReference): this;
  addLink(link: IPatientLink): this;
  setMultipleLink(links: IPatientLink[]): this;
  fromJSON(json: unknown | string): this;
}

export class PatientBuilder implements IPatientBuilder {
  private readonly patient: Patient;

  constructor() {
    this.patient = new Patient();
  }
  setId(id: string): this {
    this.patient.id = id;
    return this;
  }

  setMeta(meta: any): this {
    this.patient.meta = meta;
    return this;
  }

  setImplicitRules(implicitRules: string): this {
    this.patient.implicitRules = implicitRules;
    return this;
  }

  setLanguage(language: string): this {
    this.patient.language = language;
    return this;
  }

  setText(text: INarrative): this {
    // TODO: move to a validation function
    if (text.div) {
      if (!text.div.startsWith('<div')) throw new Error('Narrative.div must start with <div');
      if (!text.div.includes('xmlns="http://www.w3.org/1999/xhtml')) {
        throw new Error('Narrative.div must include the XHTML namespace');
      }
    }
    this.patient.text = text;

    return this;
  }

  // TODO: This should be a generic type
  addContained(contained: any): this {
    this.patient.contained = this.patient.contained || [];
    this.patient.contained.push(contained);
    return this;
  }

  // TODO: This should be a generic type
  setMultipleContained(contained: any[]): this {
    this.patient.contained = contained;
    return this as unknown as this;
  }

  addExtension(extension: IExtension): this {
    this.patient.extension = this.patient.extension || [];
    this.patient.extension.push(extension);

    return this;
  }

  addModifierExtension(modifierExtension: IExtension): this {
    this.patient.modifierExtension = this.patient.modifierExtension || [];
    this.patient.modifierExtension.push(modifierExtension);
    return this;
  }

  setMultipleExtension(extension: IExtension[]): this {
    this.patient.extension = extension;
    return this;
  }

  setMultipleModifierExtension(modifierExtension: IExtension[]): this {
    this.patient.modifierExtension = modifierExtension;
    return this;
  }

  fromJSON<T extends IPatient>(json: T | string): this {
    const incomingPatient: IPatient = typeof json === 'string' ? JSON.parse(json) : json;

    Object.assign(this.patient, incomingPatient);
    return this;
  }

  addParamExtension(param: PatientParamExtensionType, extension: IElement): this {
    this.patient[`_${param}`] = extension;

    return this;
  }

  addName(name: IHumanName): this {
    this.patient.name = this.patient.name || [];
    this.patient.name.push(name);
    return this;
  }

  setActive(active: boolean): this {
    this.patient.active = active;
    return this;
  }

  addIdentifier(identifier: IIdentifier): this {
    this.patient.identifier = this.patient.identifier || [];
    this.patient.identifier.push(identifier);
    return this;
  }

  addTelecom(telecom: IContactPoint): this {
    this.patient.telecom = this.patient.telecom || [];
    this.patient.telecom.push(telecom);
    return this;
  }

  setGender(gender: AdministrativeGenderType): this {
    this.patient.gender = gender;
    return this;
  }

  setBirthDate(birthDate: string): this {
    this.patient.birthDate = birthDate;
    return this;
  }

  setMaritalStatus(maritalStatus: ICodeableConcept): this {
    this.patient.maritalStatus = maritalStatus;

    return this;
  }

  addLink(link: IPatientLink): this {
    this.patient.link = this.patient.link || [];
    this.patient.link.push(link);
    return this;
  }

  setDeceasedBoolean(deceasedBoolean: boolean): this {
    this.patient.deceasedBoolean = deceasedBoolean;
    return this;
  }

  setDeceasedDateTime(deceasedDateTime: string): this {
    this.patient.deceasedDateTime = deceasedDateTime;
    return this;
  }

  setMultipleBirthBoolean(multipleBirthBoolean: boolean): this {
    this.patient.multipleBirthBoolean = multipleBirthBoolean;
    return this;
  }

  setMultipleBirthInteger(multipleBirthInteger: number): this {
    this.patient.multipleBirthInteger = multipleBirthInteger;
    return this;
  }

  setManagingOrganization(args: IReference): this {
    this.patient.managingOrganization = args;

    return this;
  }

  addCommunication(communication: IPatientCommunication): this {
    this.patient.communication = this.patient.communication || [];
    this.patient.communication.push(communication);
    return this;
  }

  setMultipleCommunication(communications: IPatientCommunication[]): this {
    this.patient.communication = communications;
    return this;
  }

  addContact(contact: IPatientContact): this {
    this.patient.contact = this.patient.contact || [];

    this.patient.contact.push(contact);
    return this;
  }

  setMultipleContact(contacts: IPatientContact[]): this {
    this.patient.contact = contacts;
    return this;
  }

  addPhoto(attachment: IAttachment): this {
    this.patient.photo = this.patient.photo || [];
    this.patient.photo.push(attachment);
    return this;
  }

  setMultiplePhoto(attachments: IAttachment[]): this {
    this.patient.photo = attachments;
    return this;
  }

  addAddress(address: IAddress): this {
    this.patient.address = this.patient.address || [];
    this.patient.address.push(address);
    return this;
  }

  setMultipleAddress(addresses: IAddress[]): this {
    this.patient.address = addresses;
    return this;
  }

  addGeneralPractitioner(generalPractitioner: IReference): this {
    this.patient.generalPractitioner = this.patient.generalPractitioner || [];
    this.patient.generalPractitioner.push(generalPractitioner);
    return this;
  }

  setMultipleGeneralPractitioner(generalPractitioners: IReference[]): this {
    this.patient.generalPractitioner = generalPractitioners;
    return this;
  }

  setMultipleIdentifier(identifiers: IIdentifier[]): this {
    this.patient.identifier = identifiers;
    return this;
  }

  setMultipleLink(links: IPatientLink[]): this {
    this.patient.link = links;
    return this;
  }

  setMultipleName(names: IHumanName[]): this {
    this.patient.name = names;
    return this;
  }

  setMultipleTelecom(telecoms: IContactPoint[]): this {
    this.patient.telecom = telecoms;
    return this;
  }

  build(): Patient {
    return new Patient(this.patient);
  }
}
