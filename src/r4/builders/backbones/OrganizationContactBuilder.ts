import { ICodeableConcept, IHumanName, IContactPoint, IAddress } from 'fhirtypes/dist/r4';
import { OrganizationContact } from '../../models';
import { BackboneBuilder, IBuildable } from '../base';

/**
 * @description Interface for chaining the building of a OrganizationContact
 * @interface IOrganizationContactBuilder
 * @extends {IBuildable<OrganizationContact>}
 */
interface IOrganizationContactBuilder extends IBuildable<OrganizationContact> {
  setPurpose(value: ICodeableConcept): this;
  setName(value: IHumanName): this;
  addTelecom(value: IContactPoint): this;
  setAddress(value: IAddress): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a OrganizationContact
 * @class OrganizationContactBuilder
 * @extends {BackboneBuilder}
 * @implements {IOrganizationContactBuilder}
 * @author Roberto Araneda Espinoza
 */
export class OrganizationContactBuilder extends BackboneBuilder implements IOrganizationContactBuilder {
  private readonly organizationContact: OrganizationContact;

  constructor() {
    super();
    this.organizationContact = new OrganizationContact();
  }

  /**
   * @description Builds the model
   * @returns {OrganizationContact}
   */
  build(): OrganizationContact {
    return Object.assign(this.organizationContact, super.build());
  }

  /**
   * @description Sets the purpose value
   * @description Indicates a purpose for which the contact can be reached.
   * @param value - the value to set
   * @returns {this}
   */
  setPurpose(value: ICodeableConcept): this {
    this.organizationContact.purpose = value;
    return this;
  }

  /**
   * @description Sets the name value
   * @description A name associated with the contact.
   * @param value - the value to set
   * @returns {this}
   */
  setName(value: IHumanName): this {
    this.organizationContact.name = value;
    return this;
  }

  /**
   * @description Adds a value to the telecom array
   * @description A contact detail (e.g. a telephone number or an email address) by which the party may be contacted.
   * @param value - the value to add
   * @returns {this}
   */
  addTelecom(value: IContactPoint): this {
    this.organizationContact.telecom = this.organizationContact.telecom || [];
    this.organizationContact.telecom.push(value);
    return this;
  }
  /**
   * @description Sets the address value
   * @description Visiting or postal addresses for the contact.
   * @param value - the value to set
   * @returns {this}
   */
  setAddress(value: IAddress): this {
    this.organizationContact.address = value;
    return this;
  }
}
