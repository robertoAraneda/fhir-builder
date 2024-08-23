import {
  AdministrativeGenderType,
  IAddress,
  IAttachment,
  ICodeableConcept,
  IContactPoint,
  IElement,
  IHumanName,
  IIdentifier,
  IPatientCommunication,
  IPatientContact,
  IPatientLink,
  IReference,
} from 'fhirtypes/dist/r4';
import { Patient } from '../../models';
import { IBuildable } from '../base/buildable.interface';
import { UnderscoreKeys } from '../base/resource-type-map.interface';
import { IDomainResourceBuilder } from '../base/domain-resource-builder.interface';
import { DomainResourceBuilder } from '../base/domain-resource.builder';

interface IDeceasedMap {
  deceasedBoolean: boolean;
  deceasedDateTime: string;
}
type DeceasedValue<T extends keyof IDeceasedMap> = IDeceasedMap[T];
interface IMultipleBirth {
  multipleBirthBoolean: boolean;
  multipleBirthInteger: number;
}
type MultipleBirthValue<T extends keyof IMultipleBirth> = IMultipleBirth[T];
type PrimitiveExtensionFields = keyof Pick<Patient, UnderscoreKeys<Patient>>;

interface IPatientBuilder extends IDomainResourceBuilder, IBuildable<Patient> {
  // Patient properties
  addIdentifier(identifier: IIdentifier): this;
  setActive(active: boolean): this;
  addName(name: IHumanName): this;
  addTelecom(telecom: IContactPoint): this;
  setGender(gender: AdministrativeGenderType): this;
  setBirthDate(birthDate: string): this;
  setDeceased<T extends keyof IDeceasedMap>(type: T, value: DeceasedValue<T>): this;
  addAddress(address: IAddress): this;
  setMaritalStatus(maritalStatus: ICodeableConcept): this;
  setMultipleBirth<T extends keyof IMultipleBirth>(type: T, value: MultipleBirthValue<T>): this;
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

  fromJSON(json: unknown): this {
    const incomingPatient = typeof json === 'string' ? JSON.parse(json) : json;

    Object.assign(this.patient, incomingPatient);
    return this;
  }

  addPrimitiveExtension(param: PrimitiveExtensionFields, extension: IElement): this {
    this.patient[param] = extension;

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

  setDeceased<T extends keyof IDeceasedMap>(type: T, value: DeceasedValue<T>): this {
    if (type === 'deceasedBoolean') {
      this.patient.deceasedBoolean = value as boolean;
    }
    if (type === 'deceasedDateTime') {
      this.patient.deceasedDateTime = value as string;
    }
    return this;
  }

  setMultipleBirth<T extends keyof IMultipleBirth>(type: T, value: MultipleBirthValue<T>): this {
    if (type === 'multipleBirthBoolean') {
      this.patient.multipleBirthBoolean = value as boolean;
    }
    if (type === 'multipleBirthInteger') {
      this.patient.multipleBirthInteger = value as number;
    }
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
    return Object.assign(this.patient, super.build());
  }
}
