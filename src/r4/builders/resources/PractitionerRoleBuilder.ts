import {
  IIdentifier,
  IElement,
  IPeriod,
  IReference,
  ICodeableConcept,
  IContactPoint,
  IPractitionerRoleAvailableTime,
  IPractitionerRoleNotAvailable,
} from 'fhirtypes/dist/r4';
import { PractitionerRole } from '../../models';
import { DomainResourceBuilder, IBuildable } from '../base';
import { ExtractUnderscoreKeys } from '../../../core/commons/utils';

// Extract the keys that start with an underscore
type PrimitiveExtensionFields = ExtractUnderscoreKeys<PractitionerRole>;

/**
 * @description Interface for chaining the building of a PractitionerRole
 * @interface IPractitionerRoleBuilder
 * @extends {IBuildable<PractitionerRole>}
 */
interface IPractitionerRoleBuilder extends IBuildable<PractitionerRole> {
  addIdentifier(value: IIdentifier): this;
  setActive(value: boolean): this;
  setPeriod(value: IPeriod): this;
  setPractitioner(value: IReference): this;
  setOrganization(value: IReference): this;
  addCode(value: ICodeableConcept): this;
  addSpecialty(value: ICodeableConcept): this;
  addLocation(value: IReference): this;
  addHealthcareService(value: IReference): this;
  addTelecom(value: IContactPoint): this;
  addAvailableTime(value: IPractitionerRoleAvailableTime): this;
  addNotAvailable(value: IPractitionerRoleNotAvailable): this;
  setAvailabilityExceptions(value: string): this;
  addEndpoint(value: IReference): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a PractitionerRole
 * @class PractitionerRoleBuilder
 * @extends {DomainResourceBuilder}
 * @implements {IPractitionerRoleBuilder}
 * @author Roberto Araneda Espinoza
 */
export class PractitionerRoleBuilder extends DomainResourceBuilder implements IPractitionerRoleBuilder {
  private readonly practitionerRole: PractitionerRole;

  constructor() {
    super();
    this.practitionerRole = new PractitionerRole();
  }

  /**
   * @description Sets the resource type to PractitionerRole
   * @param json - the json to parse
   * @returns {this}
   */
  fromJSON(json: unknown): this {
    const incomingData = typeof json === 'string' ? JSON.parse(json) : json;
    Object.assign(this.practitionerRole, incomingData);
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
    this.practitionerRole[param] = extension;
    return this;
  }

  /**
   * @description Builds the model
   * @returns {PractitionerRole}
   */
  build(): PractitionerRole {
    return Object.assign(this.practitionerRole, super.build());
  }

  /**
   * @description Adds a value to the identifier array
   * @description Business Identifiers that are specific to a role/location.
   * @param value - the value to add
   * @returns {this}
   */
  addIdentifier(value: IIdentifier): this {
    this.practitionerRole.identifier = this.practitionerRole.identifier || [];
    this.practitionerRole.identifier.push(value);
    return this;
  }
  /**
   * @description Sets the active value
   * @description Whether this practitioner role record is in active use.
   * @param value - the value to set
   * @returns {this}
   */
  setActive(value: boolean): this {
    this.practitionerRole.active = value;
    return this;
  }

  /**
   * @description Sets the period value
   * @description The period during which the person is authorized to act as a practitioner in these role(s) for the organization.
   * @param value - the value to set
   * @returns {this}
   */
  setPeriod(value: IPeriod): this {
    this.practitionerRole.period = value;
    return this;
  }

  /**
   * @description Sets the practitioner value
   * @description Practitioner that is able to provide the defined services for the organization.
   * @param value - the value to set
   * @returns {this}
   */
  setPractitioner(value: IReference): this {
    this.practitionerRole.practitioner = value;
    return this;
  }

  /**
   * @description Sets the organization value
   * @description The organization where the Practitioner performs the roles associated.
   * @param value - the value to set
   * @returns {this}
   */
  setOrganization(value: IReference): this {
    this.practitionerRole.organization = value;
    return this;
  }

  /**
   * @description Adds a value to the code array
   * @description Roles which this practitioner is authorized to perform for the organization.
   * @param value - the value to add
   * @returns {this}
   */
  addCode(value: ICodeableConcept): this {
    this.practitionerRole.code = this.practitionerRole.code || [];
    this.practitionerRole.code.push(value);
    return this;
  }
  /**
   * @description Adds a value to the specialty array
   * @description Specific specialty of the practitioner.
   * @param value - the value to add
   * @returns {this}
   */
  addSpecialty(value: ICodeableConcept): this {
    this.practitionerRole.specialty = this.practitionerRole.specialty || [];
    this.practitionerRole.specialty.push(value);
    return this;
  }
  /**
   * @description Adds a value to the location array
   * @description The location(s) at which this practitioner provides care.
   * @param value - the value to add
   * @returns {this}
   */
  addLocation(value: IReference): this {
    this.practitionerRole.location = this.practitionerRole.location || [];
    this.practitionerRole.location.push(value);
    return this;
  }
  /**
   * @description Adds a value to the healthcareService array
   * @description The list of healthcare services that this worker provides for this role's Organization/Location(s).
   * @param value - the value to add
   * @returns {this}
   */
  addHealthcareService(value: IReference): this {
    this.practitionerRole.healthcareService = this.practitionerRole.healthcareService || [];
    this.practitionerRole.healthcareService.push(value);
    return this;
  }
  /**
   * @description Adds a value to the telecom array
   * @description Contact details that are specific to the role/location/service.
   * @param value - the value to add
   * @returns {this}
   */
  addTelecom(value: IContactPoint): this {
    this.practitionerRole.telecom = this.practitionerRole.telecom || [];
    this.practitionerRole.telecom.push(value);
    return this;
  }
  /**
   * @description Adds a value to the availableTime array
   * @description A collection of times the practitioner is available or performing this role at the location and/or healthcareservice.
   * @param value - the value to add
   * @returns {this}
   */
  addAvailableTime(value: IPractitionerRoleAvailableTime): this {
    this.practitionerRole.availableTime = this.practitionerRole.availableTime || [];
    this.practitionerRole.availableTime.push(value);
    return this;
  }
  /**
   * @description Adds a value to the notAvailable array
   * @description The practitioner is not available or performing this role during this period of time due to the provided reason.
   * @param value - the value to add
   * @returns {this}
   */
  addNotAvailable(value: IPractitionerRoleNotAvailable): this {
    this.practitionerRole.notAvailable = this.practitionerRole.notAvailable || [];
    this.practitionerRole.notAvailable.push(value);
    return this;
  }
  /**
   * @description Sets the availabilityExceptions value
   * @description A description of site availability exceptions, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as details in the available Times and not available Times.
   * @param value - the value to set
   * @returns {this}
   */
  setAvailabilityExceptions(value: string): this {
    this.practitionerRole.availabilityExceptions = value;
    return this;
  }

  /**
   * @description Adds a value to the endpoint array
   * @description Technical endpoints providing access to services operated for the practitioner with this role.
   * @param value - the value to add
   * @returns {this}
   */
  addEndpoint(value: IReference): this {
    this.practitionerRole.endpoint = this.practitionerRole.endpoint || [];
    this.practitionerRole.endpoint.push(value);
    return this;
  }
}
