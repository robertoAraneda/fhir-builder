import { ICodeableConcept, IHumanName, IContactPoint, IAddress } from 'fhirtypes/dist/r4';
import { IOrganizationContact, IOperationOutcome } from 'fhirtypes/dist/r4';
import { BackboneElement, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';

/**
  * @version R4 (v4.0.1)
  * @summary FHIR® Specification by HL7®
  * @description Class for OrganizationContact BackboneElement
  undefined
  * @property {ICodeableConcept} purpose
  * @property {IHumanName} name
  * @property {IContactPoint[]} telecom
  * @property {IAddress} address
  * @author Roberto Araneda Espinoza
  */
export class OrganizationContact extends BackboneElement implements IOrganizationContact, IValidatable, ISerializable {
  /**
   * @description Indicates a purpose for which the contact can be reached.
   */
  purpose?: ICodeableConcept;

  /**
   * @description A name associated with the contact.
   */
  name?: IHumanName;

  /**
   * @description A contact detail (e.g. a telephone number or an email address) by which the party may be contacted.
   */
  telecom?: IContactPoint[];

  /**
   * @description Visiting or postal addresses for the contact.
   */
  address?: IAddress;

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
    return `OrganizationContact${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `OrganizationContact${JSON.stringify(this.toJson(), null, 2)}`;
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
    return ConformanceValidator('OrganizationContact', this);
  }

  constructor(args?: IOrganizationContact) {
    super();
    if (args) Object.assign(this, args);
  }
}
