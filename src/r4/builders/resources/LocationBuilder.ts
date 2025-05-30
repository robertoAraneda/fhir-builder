import {
  IIdentifier,
  IElement,
  ICoding,
  ICodeableConcept,
  IContactPoint,
  IAddress,
  ILocationPosition,
  IReference,
  ILocationHoursOfOperation,
} from 'fhirtypes/dist/r4';
import { Location } from '../../models';
import { DomainResourceBuilder, IBuildable } from '../base';
import { ExtractUnderscoreKeys, ExtractUnderscoreArrayKeys } from '../../../core/commons/utils';
import { LocationModeType, LocationStatusType } from 'fhirtypes/dist/r4/types';

// Extract the keys that start with an underscore
type PrimitiveExtensionFields = ExtractUnderscoreKeys<Location>;

// Extract the keys that are arrays and start with an underscore
type UnderscoreArrayElements = ExtractUnderscoreArrayKeys<Location>;
/**
 * @description Interface for chaining the building of a Location
 * @interface ILocationBuilder
 * @extends {IBuildable<Location>}
 */
interface ILocationBuilder extends IBuildable<Location> {
  addIdentifier(value: IIdentifier): this;
  setStatus(value: LocationStatusType): this;
  setOperationalStatus(value: ICoding): this;
  setName(value: string): this;
  addAlias(value: string): this;
  setDescription(value: string): this;
  setMode(value: LocationModeType): this;
  addType(value: ICodeableConcept): this;
  addTelecom(value: IContactPoint): this;
  setAddress(value: IAddress): this;
  setPhysicalType(value: ICodeableConcept): this;
  setPosition(value: ILocationPosition): this;
  setManagingOrganization(value: IReference): this;
  setPartOf(value: IReference): this;
  addHoursOfOperation(value: ILocationHoursOfOperation): this;
  setAvailabilityExceptions(value: string): this;
  addEndpoint(value: IReference): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a Location
 * @class LocationBuilder
 * @extends {DomainResourceBuilder}
 * @implements {ILocationBuilder}
 * @author Roberto Araneda Espinoza
 */
export class LocationBuilder extends DomainResourceBuilder implements ILocationBuilder {
  private readonly location: Location;

  constructor() {
    super();
    this.location = new Location();
  }

  /**
   * @description Sets the resource type to Location
   * @param json - the json to parse
   * @returns {this}
   */
  fromJSON(json: unknown): this {
    const incomingData = typeof json === 'string' ? JSON.parse(json) : json;
    Object.assign(this.location, incomingData);
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
      this.location[param] = this.location[param] || [];
      (this.location[param] as IElement[]).push(extension as IElement);

      return this;
    }

    const localParam = param as Exclude<PrimitiveExtensionFields, UnderscoreArrayElements>;
    this.location[localParam] = extension as IElement;
    return this;
  }

  /**
   * @description Builds the model
   * @returns {Location}
   */
  build(): Location {
    return Object.assign(this.location, super.build());
  }

  /**
   * @description Adds a value to the identifier array
   * @description Unique code or number identifying the location to its users.
   * @param value - the value to add
   * @returns {this}
   */
  addIdentifier(value: IIdentifier): this {
    this.location.identifier = this.location.identifier || [];
    this.location.identifier.push(value);
    return this;
  }
  /**
   * @description Sets the status value
   * @description The status property covers the general availability of the resource, not the current value which may be covered by the operationStatus, or by a schedule/slots if they are configured for the location.
   * @param value - the value to set
   * @returns {this}
   */
  setStatus(value: LocationStatusType): this {
    this.location.status = value;
    return this;
  }

  /**
   * @description Sets the operationalStatus value
   * @description The operational status covers operation values most relevant to beds (but can also apply to rooms/units/chairs/etc. such as an isolation unit/dialysis chair). This typically covers concepts such as contamination, housekeeping, and other activities like maintenance.
   * @param value - the value to set
   * @returns {this}
   */
  setOperationalStatus(value: ICoding): this {
    this.location.operationalStatus = value;
    return this;
  }

  /**
   * @description Sets the name value
   * @description Name of the location as used by humans. Does not need to be unique.
   * @param value - the value to set
   * @returns {this}
   */
  setName(value: string): this {
    this.location.name = value;
    return this;
  }

  /**
   * @description Adds a value to the alias array
   * @description A list of alternate names that the location is known as, or was known as, in the past.
   * @param value - the value to add
   * @returns {this}
   */
  addAlias(value: string): this {
    this.location.alias = this.location.alias || [];
    this.location.alias.push(value);
    return this;
  }
  /**
   * @description Sets the description value
   * @description Description of the Location, which helps in finding or referencing the place.
   * @param value - the value to set
   * @returns {this}
   */
  setDescription(value: string): this {
    this.location.description = value;
    return this;
  }

  /**
   * @description Sets the mode value
   * @description Indicates whether a resource instance represents a specific location or a class of locations.
   * @param value - the value to set
   * @returns {this}
   */
  setMode(value: LocationModeType): this {
    this.location.mode = value;
    return this;
  }

  /**
   * @description Adds a value to the type array
   * @description Indicates the type of function performed at the location.
   * @param value - the value to add
   * @returns {this}
   */
  addType(value: ICodeableConcept): this {
    this.location.type = this.location.type || [];
    this.location.type.push(value);
    return this;
  }
  /**
   * @description Adds a value to the telecom array
   * @description The contact details of communication devices available at the location. This can include phone numbers, fax numbers, mobile numbers, email addresses and web sites.
   * @param value - the value to add
   * @returns {this}
   */
  addTelecom(value: IContactPoint): this {
    this.location.telecom = this.location.telecom || [];
    this.location.telecom.push(value);
    return this;
  }
  /**
   * @description Sets the address value
   * @description Physical location.
   * @param value - the value to set
   * @returns {this}
   */
  setAddress(value: IAddress): this {
    this.location.address = value;
    return this;
  }

  /**
   * @description Sets the physicalType value
   * @description Physical form of the location, e.g. building, room, vehicle, road.
   * @param value - the value to set
   * @returns {this}
   */
  setPhysicalType(value: ICodeableConcept): this {
    this.location.physicalType = value;
    return this;
  }

  /**
   * @description Sets the position value
   * @description The absolute geographic location of the Location, expressed using the WGS84 datum (This is the same co-ordinate system used in KML).
   * @param value - the value to set
   * @returns {this}
   */
  setPosition(value: ILocationPosition): this {
    this.location.position = value;
    return this;
  }

  /**
   * @description Sets the managingOrganization value
   * @description The organization responsible for the provisioning and upkeep of the location.
   * @param value - the value to set
   * @returns {this}
   */
  setManagingOrganization(value: IReference): this {
    this.location.managingOrganization = value;
    return this;
  }

  /**
   * @description Sets the partOf value
   * @description Another Location of which this Location is physically a part of.
   * @param value - the value to set
   * @returns {this}
   */
  setPartOf(value: IReference): this {
    this.location.partOf = value;
    return this;
  }

  /**
   * @description Adds a value to the hoursOfOperation array
   * @description What days/times during a week is this location usually open.
   * @param value - the value to add
   * @returns {this}
   */
  addHoursOfOperation(value: ILocationHoursOfOperation): this {
    this.location.hoursOfOperation = this.location.hoursOfOperation || [];
    this.location.hoursOfOperation.push(value);
    return this;
  }
  /**
   * @description Sets the availabilityExceptions value
   * @description A description of when the locations opening ours are different to normal, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as detailed in the opening hours Times.
   * @param value - the value to set
   * @returns {this}
   */
  setAvailabilityExceptions(value: string): this {
    this.location.availabilityExceptions = value;
    return this;
  }

  /**
   * @description Adds a value to the endpoint array
   * @description Technical endpoints providing access to services operated for the location.
   * @param value - the value to add
   * @returns {this}
   */
  addEndpoint(value: IReference): this {
    this.location.endpoint = this.location.endpoint || [];
    this.location.endpoint.push(value);
    return this;
  }
}
