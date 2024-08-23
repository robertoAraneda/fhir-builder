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
import { PatientContact } from '../../models';
import { IBuildable } from '../base/buildable.interface';
import { UnderscoreKeys } from '../base/resource-type-map.interface';
import { BackboneBuilder } from '../base/backbone.builder';

type PrimitiveExtensionFields = keyof Pick<IPatientContact, UnderscoreKeys<IPatientContact>>;

interface IPatientContactBuilder extends IBuildable<PatientContact> {
  // PatientContact properties
  addRelationship(relationship: ICodeableConcept): this;
  setName(name: IHumanName): this;
  addTelecom(telecom: IContactPoint): this;
  setGender(gender: AdministrativeGenderType): this;
  setOrganization(organization: IReference): this;
  setPeriod(period: IPeriod): this;
}

export class PatientContactBuilder extends BackboneBuilder implements IPatientContactBuilder {
  private readonly patientContact: PatientContact;

  constructor() {
    super();
    this.patientContact = new PatientContact();
  }

  addRelationship(relationship: ICodeableConcept): this {
    this.patientContact.relationship = this.patientContact.relationship || [];
    this.patientContact.relationship.push(relationship);
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

  addPrimitiveExtension(param: PrimitiveExtensionFields, extension: IElement): this {
    this.patientContact[param] = extension;
    return this;
  }

  build(): PatientContact {
    return Object.assign(this.patientContact, super.build());
  }
}
