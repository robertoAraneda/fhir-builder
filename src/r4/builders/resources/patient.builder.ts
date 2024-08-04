import {
  AdministrativeGenderType,
  IAddress,
  IAttachment,
  ICodeableConcept,
  IContactPoint,
  IElement,
  IHumanName,
  IIdentifier,
  IPatient,
  IPatientCommunication,
  IPatientContact,
  IPatientLink,
  IReference,
} from 'fhirtypes/dist/r4';
import { DomainResourceBuilder } from '../base';
import { IPatientBuilder } from '../../interfaces';
import { PatientParamExtensionType } from '../../types';
import { Patient } from '../../models';

export class PatientBuilder extends DomainResourceBuilder implements IPatientBuilder {
  private patient: IPatient;

  constructor() {
    super();
    this.patient = {} as IPatient;
  }

  fromJSON<T extends IPatient>(json: T | string): this {
    if (typeof json === 'string') {
      this.patient = JSON.parse(json);
    } else {
      this.patient = json;
    }
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
    Object.assign(this.patient, { ...super.entity() });
    return new Patient(this.patient);
  }
}
