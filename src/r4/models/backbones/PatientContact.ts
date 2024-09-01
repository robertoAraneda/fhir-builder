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
import { IPatientContact, IOperationOutcome } from 'fhirtypes/dist/r4';
import { BackboneElement, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for PatientContact BackboneElement
 * @property {ICodeableConcept[]} relationship
 * @property {IHumanName} name
 * @property {IContactPoint[]} telecom
 * @property {IAddress} address
 * @property {AdministrativeGenderType} gender
 * @property {IElement} _gender
 * @property {IReference} organization
 * @property {IPeriod} period
 * @author Roberto Araneda Espinoza
 */
export class PatientContact extends BackboneElement implements IPatientContact, IValidatable, ISerializable {
  /**
   * @description The nature of the relationship between the patient and the contact person.
   */
  relationship?: ICodeableConcept[];

  /**
   * @description A name associated with the contact person.
   */
  name?: IHumanName;

  /**
   * @description A contact detail for the person, e.g. a telephone number or an email address.
   */
  telecom?: IContactPoint[];

  /**
   * @description Address for the contact person.
   */
  address?: IAddress;

  /**
   * @description Administrative Gender - the gender that the contact person is considered to have for administration and record keeping purposes.
   */
  gender?: AdministrativeGenderType;

  /**
   * @description Extensions for gender
   */
  _gender?: IElement;

  /**
   * @description Organization on behalf of which the contact is acting or for which the contact is working.
   */
  organization?: IReference;

  /**
   * @description The period during which this contact person or organization is valid to be contacted relating to this patient.
   */
  period?: IPeriod;

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
    return `PatientContact${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `PatientContact${JSON.stringify(this.toJson(), null, 2)}`;
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
    return ConformanceValidator('PatientContact', this);
  }

  constructor(args?: IPatientContact) {
    super();
    if (args) Object.assign(this, args);
  }
}
