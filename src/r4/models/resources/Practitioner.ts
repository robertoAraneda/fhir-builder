import {
  IIdentifier,
  IElement,
  IHumanName,
  IContactPoint,
  IAddress,
  IAttachment,
  IPractitionerQualification,
  ICodeableConcept,
  AdministrativeGenderType,
} from 'fhirtypes/dist/r4';
import { IPractitioner, IOperationOutcome } from 'fhirtypes/dist/r4';
import { DomainResource, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for Practitioner Resource
 * @property {string} resourceType
 * @property {IIdentifier[]} identifier
 * @property {boolean} active
 * @property {IElement} _active
 * @property {IHumanName[]} name
 * @property {IContactPoint[]} telecom
 * @property {IAddress[]} address
 * @property {string} gender
 * @property {IElement} _gender
 * @property {string} birthDate
 * @property {IElement} _birthDate
 * @property {IAttachment[]} photo
 * @property {IPractitionerQualification[]} qualification
 * @property {ICodeableConcept[]} communication
 * @author Roberto Araneda Espinoza
 */
export class Practitioner extends DomainResource implements IPractitioner, IValidatable, ISerializable {
  /**
   * @description The type of resource
   */
  resourceType? = 'Practitioner';

  /**
   * @description An identifier that applies to this person in this role.
   */
  identifier?: IIdentifier[];

  /**
   * @description Whether this practitioner's record is in active use.
   */
  active?: boolean;

  /**
   * @description Extensions for active
   */
  _active?: IElement;

  /**
   * @description The name(s) associated with the practitioner.
   */
  name?: IHumanName[];

  /**
   * @description A contact detail for the practitioner, e.g. a telephone number or an email address.
   */
  telecom?: IContactPoint[];

  /**
   * @description Address(es) of the practitioner that are not role specific (typically home address). 
Work addresses are not typically entered in this property as they are usually role dependent.
   */
  address?: IAddress[];

  /**
   * @description Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.
   */
  gender?: AdministrativeGenderType;

  /**
   * @description Extensions for gender
   */
  _gender?: IElement;

  /**
   * @description The date of birth for the practitioner.
   */
  birthDate?: string;

  /**
   * @description Extensions for birthDate
   */
  _birthDate?: IElement;

  /**
   * @description Image of the person.
   */
  photo?: IAttachment[];

  /**
   * @description The official certifications, training, and licenses that authorize or otherwise pertain to the provision of care by the practitioner.  For example, a medical license issued by a medical board authorizing the practitioner to practice medicine within a certian locality.
   */
  qualification?: IPractitionerQualification[];

  /**
   * @description A language the practitioner can use in patient communication.
   */
  communication?: ICodeableConcept[];

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
    return `Practitioner${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `Practitioner${JSON.stringify(this.toJson(), null, 2)}`;
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
    return ConformanceValidator('Practitioner', this);
  }

  constructor(args?: IPractitioner) {
    super();
    if (args) Object.assign(this, args);
  }
}
