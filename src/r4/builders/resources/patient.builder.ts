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
} from 'fhirtypes/dist/r4';
import { PatientParamExtensionType } from '../../params-types';
import { Patient } from '../../models';
import { DomainResourceBuilder } from '../base/DomainResourceBuilder';
import { IBuildable } from '../base/IBuildable';

interface IPatientBuilder extends IBuildable<Patient> {
  // Patient properties
  addParamExtension(param: PatientParamExtensionType, extension: IElement): this;
  addIdentifier(identifier: IIdentifier): this;
  setActive(active: boolean): this;
  addName(name: IHumanName): this;
  addTelecom(telecom: IContactPoint): this;
  setGender(gender: AdministrativeGenderType): this;
  setBirthDate(birthDate: string): this;
  setDeceasedBoolean(deceasedBoolean: boolean): this;
  setDeceasedDateTime(deceasedDateTime: string): this;
  addAddress(address: IAddress): this;
  setMaritalStatus(maritalStatus: ICodeableConcept): this;
  setMultipleBirthBoolean(multipleBirthBoolean: boolean): this;
  setMultipleBirthInteger(multipleBirthInteger: number): this;
  addPhoto(photo: IAttachment): this;
  addContact(contact: IPatientContact): this;
  addCommunication(communication: IPatientCommunication): this;
  addGeneralPractitioner(generalPractitioner: IReference): this;
  setManagingOrganization(managingOrganization: IReference): this;
  addLink(link: IPatientLink): this;
}

export class PatientBuilder extends DomainResourceBuilder implements IPatientBuilder {
  private readonly patient: Patient;

  constructor() {
    super();
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

  fromJSON<T extends IPatient>(json: T | string): this {
    const incomingPatient = typeof json === 'string' ? JSON.parse(json) : json;

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

  addContact(contact: IPatientContact): this {
    this.patient.contact = this.patient.contact || [];

    this.patient.contact.push(contact);
    return this;
  }

  addPhoto(attachment: IAttachment): this {
    this.patient.photo = this.patient.photo || [];
    this.patient.photo.push(attachment);
    return this;
  }

  addAddress(address: IAddress): this {
    this.patient.address = this.patient.address || [];
    this.patient.address.push(address);
    return this;
  }

  addGeneralPractitioner(generalPractitioner: IReference): this {
    this.patient.generalPractitioner = this.patient.generalPractitioner || [];
    this.patient.generalPractitioner.push(generalPractitioner);
    return this;
  }

  build(): Patient {
    return new Patient(this.patient);
  }
}
