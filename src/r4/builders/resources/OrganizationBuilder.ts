import {
  IIdentifier,
  IElement,
  ICodeableConcept,
  IContactPoint,
  IAddress,
  IReference,
  IOrganizationContact,
} from 'fhirtypes/dist/r4';
import { Organization } from '../../models';
import { DomainResourceBuilder, IBuildable } from '../base';
import { ExtractUnderscoreKeys, ExtractUnderscoreArrayKeys } from '../../../core/commons/utils';

// Extract the keys that start with an underscore
type PrimitiveExtensionFields = ExtractUnderscoreKeys<Organization>;

// Extract the keys that are arrays and start with an underscore
type UnderscoreArrayElements = ExtractUnderscoreArrayKeys<Organization>;
/**
 * @description Interface for chaining the building of a Organization
 * @interface IOrganizationBuilder
 * @extends {IBuildable<Organization>}
 */
interface IOrganizationBuilder extends IBuildable<Organization> {
  addIdentifier(value: IIdentifier): this;
  setActive(value: boolean): this;
  addType(value: ICodeableConcept): this;
  setName(value: string): this;
  addAlias(value: string): this;
  addTelecom(value: IContactPoint): this;
  addAddress(value: IAddress): this;
  setPartOf(value: IReference): this;
  addContact(value: IOrganizationContact): this;
  addEndpoint(value: IReference): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a Organization
 * @class OrganizationBuilder
 * @extends {DomainResourceBuilder}
 * @implements {IOrganizationBuilder}
 * @author Roberto Araneda Espinoza
 */
export class OrganizationBuilder extends DomainResourceBuilder implements IOrganizationBuilder {
  private readonly organization: Organization;

  constructor() {
    super();
    this.organization = new Organization();
  }

  /**
   * @description Sets the resource type to Organization
   * @param json - the json to parse
   * @returns {this}
   */
  fromJSON(json: unknown): this {
    const incomingData = typeof json === 'string' ? JSON.parse(json) : json;
    Object.assign(this.organization, incomingData);
    return this;
  }

  /**
   * @description Adds a primitive extension to the element
   * @param param - the field to add the extension to
   * @param extension - the extension to add
   * @returns {this}
   * @example addPrimitiveExtension('_value', { value: 'test' })
   */
  addPrimitiveExtension<T extends PrimitiveExtensionFields>(param: T, extension: IElement): this {
    const arrayParam = ['_alias'];
    if (arrayParam.includes(param)) {
      this.organization[param] = this.organization[param] || [];
      (this.organization[param] as IElement[]).push(extension as IElement);

      return this;
    }

    const localParam = param as Exclude<PrimitiveExtensionFields, UnderscoreArrayElements>;
    this.organization[localParam] = extension as IElement;
    return this;
  }

  /**
   * @description Builds the model
   * @returns {Organization}
   */
  build(): Organization {
    return Object.assign(this.organization, super.build());
  }

  /**
   * @description Adds a value to the identifier array
   * @description Identifier for the organization that is used to identify the organization across multiple disparate systems.
   * @param value - the value to add
   * @returns {this}
   */
  addIdentifier(value: IIdentifier): this {
    this.organization.identifier = this.organization.identifier || [];
    this.organization.identifier.push(value);
    return this;
  }
  /**
   * @description Sets the active value
   * @description Whether the organization's record is still in active use.
   * @param value - the value to set
   * @returns {this}
   */
  setActive(value: boolean): this {
    this.organization.active = value;
    return this;
  }

  /**
   * @description Adds a value to the type array
   * @description The kind(s) of organization that this is.
   * @param value - the value to add
   * @returns {this}
   */
  addType(value: ICodeableConcept): this {
    this.organization.type = this.organization.type || [];
    this.organization.type.push(value);
    return this;
  }
  /**
   * @description Sets the name value
   * @description A name associated with the organization.
   * @param value - the value to set
   * @returns {this}
   */
  setName(value: string): this {
    this.organization.name = value;
    return this;
  }

  /**
   * @description Adds a value to the alias array
   * @description A list of alternate names that the organization is known as, or was known as in the past.
   * @param value - the value to add
   * @returns {this}
   */
  addAlias(value: string): this {
    this.organization.alias = this.organization.alias || [];
    this.organization.alias.push(value);
    return this;
  }
  /**
   * @description Adds a value to the telecom array
   * @description A contact detail for the organization.
   * @param value - the value to add
   * @returns {this}
   */
  addTelecom(value: IContactPoint): this {
    this.organization.telecom = this.organization.telecom || [];
    this.organization.telecom.push(value);
    return this;
  }
  /**
   * @description Adds a value to the address array
   * @description An address for the organization.
   * @param value - the value to add
   * @returns {this}
   */
  addAddress(value: IAddress): this {
    this.organization.address = this.organization.address || [];
    this.organization.address.push(value);
    return this;
  }
  /**
   * @description Sets the partOf value
   * @description The organization of which this organization forms a part.
   * @param value - the value to set
   * @returns {this}
   */
  setPartOf(value: IReference): this {
    this.organization.partOf = value;
    return this;
  }

  /**
   * @description Adds a value to the contact array
   * @description Contact for the organization for a certain purpose.
   * @param value - the value to add
   * @returns {this}
   */
  addContact(value: IOrganizationContact): this {
    this.organization.contact = this.organization.contact || [];
    this.organization.contact.push(value);
    return this;
  }
  /**
   * @description Adds a value to the endpoint array
   * @description Technical endpoints providing access to services operated for the organization.
   * @param value - the value to add
   * @returns {this}
   */
  addEndpoint(value: IReference): this {
    this.organization.endpoint = this.organization.endpoint || [];
    this.organization.endpoint.push(value);
    return this;
  }
}
