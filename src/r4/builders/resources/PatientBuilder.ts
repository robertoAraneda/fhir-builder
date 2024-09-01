import {
  IIdentifier,
  IElement,
  IHumanName,
  IContactPoint,
  IAddress,
  ICodeableConcept,
  IAttachment,
  IPatientContact,
  IPatientCommunication,
  IReference,
  IPatientLink,
  AdministrativeGenderType,
} from 'fhirtypes/dist/r4';
import { Patient } from '../../models';
import { DomainResourceBuilder, IBuildable } from '../base';
import { ExtractUnderscoreKeys } from '../../../core/commons/utils';

// Extract the keys that start with an underscore
type PrimitiveExtensionFields = ExtractUnderscoreKeys<Patient>;

/**
 * @description Interface for chaining the building of a Patient
 * @interface IPatientBuilder
 * @extends {IBuildable<Patient>}
 */
interface IPatientBuilder extends IBuildable<Patient> {
  addIdentifier(value: IIdentifier): this;
  setActive(value: boolean): this;
  addName(value: IHumanName): this;
  addTelecom(value: IContactPoint): this;
  setGender(value: AdministrativeGenderType): this;
  setBirthDate(value: string): this;
  setDeceasedBoolean(value: boolean): this;
  setDeceasedDateTime(value: string): this;
  addAddress(value: IAddress): this;
  setMaritalStatus(value: ICodeableConcept): this;
  setMultipleBirthBoolean(value: boolean): this;
  setMultipleBirthInteger(value: number): this;
  addPhoto(value: IAttachment): this;
  addContact(value: IPatientContact): this;
  addCommunication(value: IPatientCommunication): this;
  addGeneralPractitioner(value: IReference): this;
  setManagingOrganization(value: IReference): this;
  addLink(value: IPatientLink): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a Patient
 * @class PatientBuilder
 * @extends {DomainResourceBuilder}
 * @implements {IPatientBuilder}
 * @author Roberto Araneda Espinoza
 */
export class PatientBuilder extends DomainResourceBuilder implements IPatientBuilder {
  private readonly patient: Patient;

  constructor() {
    super();
    this.patient = new Patient();
  }

  /**
   * @description Sets the resource type to Patient
   * @param json - the json to parse
   * @returns {this}
   */
  fromJSON(json: unknown): this {
    const incomingData = typeof json === 'string' ? JSON.parse(json) : json;
    Object.assign(this.patient, incomingData);
    return this;
  }

  /**
   * @description Adds a primitive extension to the element
   * @param param - the field to add the extension to
   * @param extension - the extension to add
   * @returns {this}
   * @example addPrimitiveExtension('_value', { value: 'test' })
   */
  addPrimitiveExtension(param: PrimitiveExtensionFields, extension: IElement): this {
    this.patient[param] = extension;
    return this;
  }

  /**
   * @description Builds the model
   * @returns {Patient}
   */
  build(): Patient {
    return Object.assign(this.patient, super.build());
  }

  /**
   * @description Adds a value to the identifier array
   * @description An identifier for this patient.
   * @param value - the value to add
   * @returns {this}
   */
  addIdentifier(value: IIdentifier): this {
    this.patient.identifier = this.patient.identifier || [];
    this.patient.identifier.push(value);
    return this;
  }
  /**
    * @description Sets the active value
    * @description Whether this patient record is in active use. 
Many systems use this property to mark as non-current patients, such as those that have not been seen for a period of time based on an organization's business rules.

It is often used to filter patient lists to exclude inactive patients

Deceased patients may also be marked as inactive for the same reasons, but may be active for some time after death.
    * @param value - the value to set
    * @returns {this}
    */
  setActive(value: boolean): this {
    this.patient.active = value;
    return this;
  }

  /**
   * @description Adds a value to the name array
   * @description A name associated with the individual.
   * @param value - the value to add
   * @returns {this}
   */
  addName(value: IHumanName): this {
    this.patient.name = this.patient.name || [];
    this.patient.name.push(value);
    return this;
  }
  /**
   * @description Adds a value to the telecom array
   * @description A contact detail (e.g. a telephone number or an email address) by which the individual may be contacted.
   * @param value - the value to add
   * @returns {this}
   */
  addTelecom(value: IContactPoint): this {
    this.patient.telecom = this.patient.telecom || [];
    this.patient.telecom.push(value);
    return this;
  }
  /**
   * @description Sets the gender value
   * @description Administrative Gender - the gender that the patient is considered to have for administration and record keeping purposes.
   * @param value - the value to set
   * @returns {this}
   */
  setGender(value: AdministrativeGenderType): this {
    this.patient.gender = value;
    return this;
  }

  /**
   * @description Sets the birthDate value
   * @description The date of birth for the individual.
   * @param value - the value to set
   * @returns {this}
   */
  setBirthDate(value: string): this {
    this.patient.birthDate = value;
    return this;
  }

  /**
   * @description Sets the deceasedBoolean value
   * @description Indicates if the individual is deceased or not.
   * @param value - the value to set
   * @returns {this}
   */
  setDeceasedBoolean(value: boolean): this {
    this.patient.deceasedBoolean = value;
    return this;
  }

  /**
   * @description Sets the deceasedDateTime value
   * @description Indicates if the individual is deceased or not.
   * @param value - the value to set
   * @returns {this}
   */
  setDeceasedDateTime(value: string): this {
    this.patient.deceasedDateTime = value;
    return this;
  }

  /**
   * @description Adds a value to the address array
   * @description An address for the individual.
   * @param value - the value to add
   * @returns {this}
   */
  addAddress(value: IAddress): this {
    this.patient.address = this.patient.address || [];
    this.patient.address.push(value);
    return this;
  }
  /**
   * @description Sets the maritalStatus value
   * @description This field contains a patient's most recent marital (civil) status.
   * @param value - the value to set
   * @returns {this}
   */
  setMaritalStatus(value: ICodeableConcept): this {
    this.patient.maritalStatus = value;
    return this;
  }

  /**
   * @description Sets the multipleBirthBoolean value
   * @description Indicates whether the patient is part of a multiple (boolean) or indicates the actual birth order (integer).
   * @param value - the value to set
   * @returns {this}
   */
  setMultipleBirthBoolean(value: boolean): this {
    this.patient.multipleBirthBoolean = value;
    return this;
  }

  /**
   * @description Sets the multipleBirthInteger value
   * @description Indicates whether the patient is part of a multiple (boolean) or indicates the actual birth order (integer).
   * @param value - the value to set
   * @returns {this}
   */
  setMultipleBirthInteger(value: number): this {
    this.patient.multipleBirthInteger = value;
    return this;
  }

  /**
   * @description Adds a value to the photo array
   * @description Image of the patient.
   * @param value - the value to add
   * @returns {this}
   */
  addPhoto(value: IAttachment): this {
    this.patient.photo = this.patient.photo || [];
    this.patient.photo.push(value);
    return this;
  }
  /**
   * @description Adds a value to the contact array
   * @description A contact party (e.g. guardian, partner, friend) for the patient.
   * @param value - the value to add
   * @returns {this}
   */
  addContact(value: IPatientContact): this {
    this.patient.contact = this.patient.contact || [];
    this.patient.contact.push(value);
    return this;
  }
  /**
   * @description Adds a value to the communication array
   * @description A language which may be used to communicate with the patient about his or her health.
   * @param value - the value to add
   * @returns {this}
   */
  addCommunication(value: IPatientCommunication): this {
    this.patient.communication = this.patient.communication || [];
    this.patient.communication.push(value);
    return this;
  }
  /**
   * @description Adds a value to the generalPractitioner array
   * @description Patient's nominated care provider.
   * @param value - the value to add
   * @returns {this}
   */
  addGeneralPractitioner(value: IReference): this {
    this.patient.generalPractitioner = this.patient.generalPractitioner || [];
    this.patient.generalPractitioner.push(value);
    return this;
  }
  /**
   * @description Sets the managingOrganization value
   * @description Organization that is the custodian of the patient record.
   * @param value - the value to set
   * @returns {this}
   */
  setManagingOrganization(value: IReference): this {
    this.patient.managingOrganization = value;
    return this;
  }

  /**
   * @description Adds a value to the link array
   * @description Link to another patient resource that concerns the same actual patient.
   * @param value - the value to add
   * @returns {this}
   */
  addLink(value: IPatientLink): this {
    this.patient.link = this.patient.link || [];
    this.patient.link.push(value);
    return this;
  }
}
