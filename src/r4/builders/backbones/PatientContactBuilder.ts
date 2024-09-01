import {
  ICodeableConcept,
  IHumanName,
  IContactPoint,
  IAddress,
  IElement,
  IReference,
  IPeriod,
  AdministrativeGenderType,
} from 'fhirtypes/dist/r4';
import { PatientContact } from '../../models';
import { BackboneBuilder, IBuildable } from '../base';
import { ExtractUnderscoreKeys } from '../../../core/commons/utils';

// Extract the keys that start with an underscore
type PrimitiveExtensionFields = ExtractUnderscoreKeys<PatientContact>;

/**
 * @description Interface for chaining the building of a PatientContact
 * @interface IPatientContactBuilder
 * @extends {IBuildable<PatientContact>}
 */
interface IPatientContactBuilder extends IBuildable<PatientContact> {
  addRelationship(value: ICodeableConcept): this;
  setName(value: IHumanName): this;
  addTelecom(value: IContactPoint): this;
  setAddress(value: IAddress): this;
  setGender(value: AdministrativeGenderType): this;
  setOrganization(value: IReference): this;
  setPeriod(value: IPeriod): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a PatientContact
 * @class PatientContactBuilder
 * @extends {BackboneBuilder}
 * @implements {IPatientContactBuilder}
 * @author Roberto Araneda Espinoza
 */
export class PatientContactBuilder extends BackboneBuilder implements IPatientContactBuilder {
  private readonly patientContact: PatientContact;

  constructor() {
    super();
    this.patientContact = new PatientContact();
  }

  /**
   * @description Adds a primitive extension to the element
   * @param param - the field to add the extension to
   * @param extension - the extension to add
   * @returns {this}
   * @example addPrimitiveExtension('_value', { value: 'test' })
   */
  addPrimitiveExtension(param: PrimitiveExtensionFields, extension: IElement): this {
    this.patientContact[param] = extension;
    return this;
  }

  /**
   * @description Builds the model
   * @returns {PatientContact}
   */
  build(): PatientContact {
    return Object.assign(this.patientContact, super.build());
  }

  /**
   * @description Adds a value to the relationship array
   * @description The nature of the relationship between the patient and the contact person.
   * @param value - the value to add
   * @returns {this}
   */
  addRelationship(value: ICodeableConcept): this {
    this.patientContact.relationship = this.patientContact.relationship || [];
    this.patientContact.relationship.push(value);
    return this;
  }
  /**
   * @description Sets the name value
   * @description A name associated with the contact person.
   * @param value - the value to set
   * @returns {this}
   */
  setName(value: IHumanName): this {
    this.patientContact.name = value;
    return this;
  }

  /**
   * @description Adds a value to the telecom array
   * @description A contact detail for the person, e.g. a telephone number or an email address.
   * @param value - the value to add
   * @returns {this}
   */
  addTelecom(value: IContactPoint): this {
    this.patientContact.telecom = this.patientContact.telecom || [];
    this.patientContact.telecom.push(value);
    return this;
  }
  /**
   * @description Sets the address value
   * @description Address for the contact person.
   * @param value - the value to set
   * @returns {this}
   */
  setAddress(value: IAddress): this {
    this.patientContact.address = value;
    return this;
  }

  /**
   * @description Sets the gender value
   * @description Administrative Gender - the gender that the contact person is considered to have for administration and record keeping purposes.
   * @param value - the value to set
   * @returns {this}
   */
  setGender(value: AdministrativeGenderType): this {
    this.patientContact.gender = value;
    return this;
  }

  /**
   * @description Sets the organization value
   * @description Organization on behalf of which the contact is acting or for which the contact is working.
   * @param value - the value to set
   * @returns {this}
   */
  setOrganization(value: IReference): this {
    this.patientContact.organization = value;
    return this;
  }

  /**
   * @description Sets the period value
   * @description The period during which this contact person or organization is valid to be contacted relating to this patient.
   * @param value - the value to set
   * @returns {this}
   */
  setPeriod(value: IPeriod): this {
    this.patientContact.period = value;
    return this;
  }
}
