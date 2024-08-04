import { IPatientContactBuilder } from '../../interfaces/builders/backbones/patient-contact-builder.interface';
import { BackboneElementBuilder } from '../base/backbone-element.builder';
import {
  AdministrativeGenderType,
  ICodeableConcept,
  IContactPoint,
  IElement,
  IHumanName,
  IPatientContact,
  IPeriod,
  IReference,
} from 'fhirtypes/dist/r4';
import { PatientContact } from '../../models/backbones/patient-contact.model';

export class PatientContactBuilder extends BackboneElementBuilder implements IPatientContactBuilder {
  private readonly patientContact: IPatientContact;

  constructor() {
    super();
    this.patientContact = {} as IPatientContact;
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
    Object.assign(this.patientContact, { ...super.entity() });
    return new PatientContact(this.patientContact);
  }
}
