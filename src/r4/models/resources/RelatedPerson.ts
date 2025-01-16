import {
  IIdentifier,
  IElement,
  IReference,
  ICodeableConcept,
  IHumanName,
  IContactPoint,
  IAddress,
  IAttachment,
  IPeriod,
  IRelatedPersonCommunication,
  AdministrativeGenderType,
} from 'fhirtypes/dist/r4';
import { IRelatedPerson, IOperationOutcome } from 'fhirtypes/dist/r4';
import { DomainResource, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for RelatedPerson Resource
 * @property {string} resourceType
 * @property {IIdentifier[]} identifier
 * @property {boolean} active
 * @property {IElement} _active
 * @property {IReference} patient
 * @property {ICodeableConcept[]} relationship
 * @property {IHumanName[]} name
 * @property {IContactPoint[]} telecom
 * @property {string} gender
 * @property {IElement} _gender
 * @property {string} birthDate
 * @property {IElement} _birthDate
 * @property {IAddress[]} address
 * @property {IAttachment[]} photo
 * @property {IPeriod} period
 * @property {IRelatedPersonCommunication[]} communication
 * @author Roberto Araneda Espinoza
 */
export class RelatedPerson extends DomainResource implements IRelatedPerson, IValidatable, ISerializable {
  /**
   * @description The type of resource
   */
  resourceType? = 'RelatedPerson';

  /**
   * @description Identifier for a person within a particular scope.
   */
  identifier?: IIdentifier[];

  /**
   * @description Whether this related person record is in active use.
   */
  active?: boolean;

  /**
   * @description Extensions for active
   */
  _active?: IElement;

  /**
   * @description The patient this person is related to.
   */
  patient: IReference;

  /**
   * @description The nature of the relationship between a patient and the related person.
   */
  relationship?: ICodeableConcept[];

  /**
   * @description A name associated with the person.
   */
  name?: IHumanName[];

  /**
   * @description A contact detail for the person, e.g. a telephone number or an email address.
   */
  telecom?: IContactPoint[];

  /**
   * @description Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.
   */
  gender?: AdministrativeGenderType;

  /**
   * @description Extensions for gender
   */
  _gender?: IElement;

  /**
   * @description The date on which the related person was born.
   */
  birthDate?: string;

  /**
   * @description Extensions for birthDate
   */
  _birthDate?: IElement;

  /**
   * @description Address where the related person can be contacted or visited.
   */
  address?: IAddress[];

  /**
   * @description Image of the person.
   */
  photo?: IAttachment[];

  /**
   * @description The period of time during which this relationship is or was active. If there are no dates defined, then the interval is unknown.
   */
  period?: IPeriod;

  /**
   * @description A language which may be used to communicate with about the patient's health.
   */
  communication?: IRelatedPersonCommunication[];

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
    return `RelatedPerson${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `RelatedPerson${JSON.stringify(this.toJson(), null, 2)}`;
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
    return ConformanceValidator('RelatedPerson', this);
  }

  constructor(args?: IRelatedPerson) {
    super();
    if (args) Object.assign(this, args);
  }
}
