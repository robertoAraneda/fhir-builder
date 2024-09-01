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
import { IPatient, IOperationOutcome } from 'fhirtypes/dist/r4';
import { DomainResource, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for Patient Resource
 * @property {string} resourceType
 * @property {IIdentifier[]} identifier
 * @property {boolean} active
 * @property {IElement} _active
 * @property {IHumanName[]} name
 * @property {IContactPoint[]} telecom
 * @property {AdministrativeGenderType} gender
 * @property {IElement} _gender
 * @property {string} birthDate
 * @property {IElement} _birthDate
 * @property {boolean} deceasedBoolean
 * @property {IElement} _deceasedBoolean
 * @property {string} deceasedDateTime
 * @property {IElement} _deceasedDateTime
 * @property {IAddress[]} address
 * @property {ICodeableConcept} maritalStatus
 * @property {boolean} multipleBirthBoolean
 * @property {IElement} _multipleBirthBoolean
 * @property {number} multipleBirthInteger
 * @property {IElement} _multipleBirthInteger
 * @property {IAttachment[]} photo
 * @property {IPatientContact[]} contact
 * @property {IPatientCommunication[]} communication
 * @property {IReference[]} generalPractitioner
 * @property {IReference} managingOrganization
 * @property {IPatientLink[]} link
 * @author Roberto Araneda Espinoza
 */
export class Patient extends DomainResource implements IPatient, IValidatable, ISerializable {
  /**
   * @description The type of resource
   */
  resourceType? = 'Patient';

  /**
   * @description An identifier for this patient.
   */
  identifier?: IIdentifier[];

  /**
   * @description Whether this patient record is in active use. 
Many systems use this property to mark as non-current patients, such as those that have not been seen for a period of time based on an organization's business rules.

It is often used to filter patient lists to exclude inactive patients

Deceased patients may also be marked as inactive for the same reasons, but may be active for some time after death.
   */
  active?: boolean;

  /**
   * @description Extensions for active
   */
  _active?: IElement;

  /**
   * @description A name associated with the individual.
   */
  name?: IHumanName[];

  /**
   * @description A contact detail (e.g. a telephone number or an email address) by which the individual may be contacted.
   */
  telecom?: IContactPoint[];

  /**
   * @description Administrative Gender - the gender that the patient is considered to have for administration and record keeping purposes.
   */
  gender?: AdministrativeGenderType;

  /**
   * @description Extensions for gender
   */
  _gender?: IElement;

  /**
   * @description The date of birth for the individual.
   */
  birthDate?: string;

  /**
   * @description Extensions for birthDate
   */
  _birthDate?: IElement;

  /**
   * @description Indicates if the individual is deceased or not.
   */
  deceasedBoolean?: boolean;

  /**
   * @description Extensions for deceasedBoolean
   */
  _deceasedBoolean?: IElement;

  /**
   * @description Indicates if the individual is deceased or not.
   */
  deceasedDateTime?: string;

  /**
   * @description Extensions for deceasedDateTime
   */
  _deceasedDateTime?: IElement;

  /**
   * @description An address for the individual.
   */
  address?: IAddress[];

  /**
   * @description This field contains a patient's most recent marital (civil) status.
   */
  maritalStatus?: ICodeableConcept;

  /**
   * @description Indicates whether the patient is part of a multiple (boolean) or indicates the actual birth order (integer).
   */
  multipleBirthBoolean?: boolean;

  /**
   * @description Extensions for multipleBirthBoolean
   */
  _multipleBirthBoolean?: IElement;

  /**
   * @description Indicates whether the patient is part of a multiple (boolean) or indicates the actual birth order (integer).
   */
  multipleBirthInteger?: number;

  /**
   * @description Extensions for multipleBirthInteger
   */
  _multipleBirthInteger?: IElement;

  /**
   * @description Image of the patient.
   */
  photo?: IAttachment[];

  /**
   * @description A contact party (e.g. guardian, partner, friend) for the patient.
   */
  contact?: IPatientContact[];

  /**
   * @description A language which may be used to communicate with the patient about his or her health.
   */
  communication?: IPatientCommunication[];

  /**
   * @description Patient's nominated care provider.
   */
  generalPractitioner?: IReference[];

  /**
   * @description Organization that is the custodian of the patient record.
   */
  managingOrganization?: IReference;

  /**
   * @description Link to another patient resource that concerns the same actual patient.
   */
  link?: IPatientLink[];

  /**
   * @description Returns a JSON representation of the model
   * @returns {Record<string, any>}
   */
  toJson(): Record<string, any> {
    return JSON.parse(JSON.stringify(this));
  }

  /**
   * @description Returns a string representation of the model
   * @returns {string}
   */
  toString(): string {
    return `Patient${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `Patient${JSON.stringify(this.toJson(), null, 2)}`;
  }

  /**
   * @description Returns a serialized string representation of the model
   * @returns {string}
   */
  serialize(): string {
    return JSON.stringify(this.toJson());
  }

  /**
   * @description Validates the model
   * @returns {isValid: boolean, operationOutcome: IOperationOutcome}
   */
  validate(): { isValid: boolean; operationOutcome: IOperationOutcome } {
    return ConformanceValidator('Patient', this);
  }

  constructor(args?: IPatient) {
    super();
    if (args) Object.assign(this, args);
  }
}
