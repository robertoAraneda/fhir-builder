import {
  AdministrativeGenderType,
  ICodeableConcept,
  IContactPoint,
  IElement,
  IHumanName,
  IPeriod,
  IReference,
} from 'fhirtypes/dist/r4';
import { BackboneElementBuilder } from '../base';
import { IPatientContactBuilder } from '../../interfaces';
import { PatientContact } from '../../models';

export class PatientContactBuilder extends BackboneElementBuilder implements IPatientContactBuilder {
  private readonly patientContact: PatientContact;

  constructor() {
    super();
    this.patientContact = new PatientContact();
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
    return this.patientContact;
  }
}
