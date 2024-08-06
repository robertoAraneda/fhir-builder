import {
  AdministrativeGenderType,
  ICodeableConcept,
  IContactPoint,
  IElement,
  IExtension,
  IHumanName,
  IPeriod,
  IReference,
} from 'fhirtypes/dist/r4';
import { PatientContact } from '../../models';

interface IPatientContactBuilder {
  // Element properties
  setId(id: string): this;
  addExtension(extension: IExtension): this;
  setMultipleExtension(extension: IExtension[]): this;

  // BackboneElement properties
  addModifierExtension(modifierExtension: IExtension): this;
  setMultipleModifierExtension(modifierExtension: IExtension[]): this;

  // PatientContact properties
  addParamExtension(param: 'gender', element: IElement): this;
  addRelationship(relationship: ICodeableConcept): this;
  setMultipleRelationship(relationship: ICodeableConcept[]): this;
  setName(name: IHumanName): this;
  addTelecom(telecom: IContactPoint): this;
  setMultipleTelecom(telecom: IContactPoint[]): this;
  setGender(gender: AdministrativeGenderType): this;
  setOrganization(organization: IReference): this;
  setPeriod(period: IPeriod): this;
}

export class PatientContactBuilder implements IPatientContactBuilder {
  private readonly patientContact: PatientContact;

  constructor() {
    this.patientContact = new PatientContact();
  }

  setId(id: string): this {
    this.patientContact.id = id;
    return this;
  }

  setMultipleExtension(extension: IExtension[]): this {
    this.patientContact.extension = extension;
    return this;
  }

  addExtension(extension: IExtension): this {
    this.patientContact.extension = this.patientContact.extension || [];
    this.patientContact.extension.push(extension);
    return this;
  }

  setMultipleModifierExtension(modifierExtension: IExtension[]): this {
    this.patientContact.modifierExtension = modifierExtension;
    return this;
  }

  addModifierExtension(modifierExtension: IExtension): this {
    this.patientContact.modifierExtension = this.patientContact.modifierExtension || [];
    this.patientContact.modifierExtension.push(modifierExtension);
    return this;
  }

  addParamExtension(param: 'gender', extension: IElement): this {
    this.patientContact[`_${param}`] = extension;
    return this;
  }

  addRelationship(relationship: ICodeableConcept): this {
    this.patientContact.relationship = this.patientContact.relationship || [];
    this.patientContact.relationship.push(relationship);
    return this;
  }

  setMultipleRelationship(relationship: ICodeableConcept[]): this {
    this.patientContact.relationship = relationship;
    return this;
  }

  setName(name: IHumanName): this {
    this.patientContact.name = name;
    return this;
  }

  addTelecom(telecom: IContactPoint): this {
    this.patientContact.telecom = this.patientContact.telecom || [];
    this.patientContact.telecom.push(telecom);
    return this;
  }

  setMultipleTelecom(telecom: IContactPoint[]): this {
    this.patientContact.telecom = telecom;
    return this;
  }

  setGender(gender: AdministrativeGenderType): this {
    this.patientContact.gender = gender;
    return this;
  }

  setOrganization(organization: IReference): this {
    this.patientContact.organization = organization;
    return this;
  }

  setPeriod(period: IPeriod): this {
    this.patientContact.period = period;
    return this;
  }

  build(): PatientContact {
    return this.patientContact;
  }
}
