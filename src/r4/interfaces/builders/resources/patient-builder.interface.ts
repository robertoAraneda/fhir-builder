import { IBuildable } from '../base/buildable.interface';
import { Patient } from '../../../models/resources/patient.model';
import { IDomainResourceBuilder } from '../datatypes/domain-resource-builder.interface';
import { IResourceBuilder } from '../datatypes/resource-builder.interface';
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

export type PatientParamExtensionType =
  | 'implicitRules'
  | 'language'
  | 'active'
  | 'birthDate'
  | 'gender'
  | 'multipleBirthBoolean'
  | 'multipleBirthInteger'
  | 'deceasedBoolean'
  | 'deceasedDateTime';

export interface IPatientBuilder extends IBuildable<Patient>, IDomainResourceBuilder, IResourceBuilder {
  addParamExtension<T extends PatientParamExtensionType>(param: T, extension: IElement): this;
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
}
