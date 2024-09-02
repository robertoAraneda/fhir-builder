import {
  IIdentifier,
  IElement,
  ICodeableConcept,
  IContactPoint,
  IAddress,
  IReference,
  IOrganizationContact,
} from 'fhirtypes/dist/r4';
import { IOrganization, IOperationOutcome } from 'fhirtypes/dist/r4';
import { DomainResource, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for Organization Resource
 * @property {string} resourceType
 * @property {IIdentifier[]} identifier
 * @property {boolean} active
 * @property {IElement} _active
 * @property {ICodeableConcept[]} type
 * @property {string} name
 * @property {IElement} _name
 * @property {string[]} alias
 * @property {IElement[]} _alias
 * @property {IContactPoint[]} telecom
 * @property {IAddress[]} address
 * @property {IReference} partOf
 * @property {IOrganizationContact[]} contact
 * @property {IReference[]} endpoint
 * @author Roberto Araneda Espinoza
 */
export class Organization extends DomainResource implements IOrganization, IValidatable, ISerializable {
  /**
   * @description The type of resource
   */
  resourceType? = 'Organization';

  /**
   * @description Identifier for the organization that is used to identify the organization across multiple disparate systems.
   */
  identifier?: IIdentifier[];

  /**
   * @description Whether the organization's record is still in active use.
   */
  active?: boolean;

  /**
   * @description Extensions for active
   */
  _active?: IElement;

  /**
   * @description The kind(s) of organization that this is.
   */
  type?: ICodeableConcept[];

  /**
   * @description A name associated with the organization.
   */
  name?: string;

  /**
   * @description Extensions for name
   */
  _name?: IElement;

  /**
   * @description A list of alternate names that the organization is known as, or was known as in the past.
   */
  alias?: string[];

  /**
   * @description Extensions for alias
   */
  _alias?: IElement[];

  /**
   * @description A contact detail for the organization.
   */
  telecom?: IContactPoint[];

  /**
   * @description An address for the organization.
   */
  address?: IAddress[];

  /**
   * @description The organization of which this organization forms a part.
   */
  partOf?: IReference;

  /**
   * @description Contact for the organization for a certain purpose.
   */
  contact?: IOrganizationContact[];

  /**
   * @description Technical endpoints providing access to services operated for the organization.
   */
  endpoint?: IReference[];

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
    return `Organization${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `Organization${JSON.stringify(this.toJson(), null, 2)}`;
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
    return ConformanceValidator('Organization', this);
  }

  constructor(args?: IOrganization) {
    super();
    if (args) Object.assign(this, args);
  }
}
