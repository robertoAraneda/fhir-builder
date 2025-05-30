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
import { ILocation, IOperationOutcome } from 'fhirtypes/dist/r4';
import { DomainResource, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';
import { LocationModeType, LocationStatusType } from 'fhirtypes/dist/r4/types';

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for Location Resource
 * @property {string} resourceType
 * @property {IIdentifier[]} identifier
 * @property {string} status
 * @property {IElement} _status
 * @property {ICoding} operationalStatus
 * @property {string} name
 * @property {IElement} _name
 * @property {string[]} alias
 * @property {IElement[]} _alias
 * @property {string} description
 * @property {IElement} _description
 * @property {string} mode
 * @property {IElement} _mode
 * @property {ICodeableConcept[]} type
 * @property {IContactPoint[]} telecom
 * @property {IAddress} address
 * @property {ICodeableConcept} physicalType
 * @property {ILocationPosition} position
 * @property {IReference} managingOrganization
 * @property {IReference} partOf
 * @property {ILocationHoursOfOperation[]} hoursOfOperation
 * @property {string} availabilityExceptions
 * @property {IElement} _availabilityExceptions
 * @property {IReference[]} endpoint
 * @author Roberto Araneda Espinoza
 */
export class Location extends DomainResource implements ILocation, IValidatable, ISerializable {
  /**
   * @description The type of resource
   */
  resourceType? = 'Location';

  /**
   * @description Unique code or number identifying the location to its users.
   */
  identifier?: IIdentifier[];

  /**
   * @description The status property covers the general availability of the resource, not the current value which may be covered by the operationStatus, or by a schedule/slots if they are configured for the location.
   */
  status?: LocationStatusType;

  /**
   * @description Extensions for status
   */
  _status?: IElement;

  /**
   * @description The operational status covers operation values most relevant to beds (but can also apply to rooms/units/chairs/etc. such as an isolation unit/dialysis chair). This typically covers concepts such as contamination, housekeeping, and other activities like maintenance.
   */
  operationalStatus?: ICoding;

  /**
   * @description Name of the location as used by humans. Does not need to be unique.
   */
  name?: string;

  /**
   * @description Extensions for name
   */
  _name?: IElement;

  /**
   * @description A list of alternate names that the location is known as, or was known as, in the past.
   */
  alias?: string[];

  /**
   * @description Extensions for alias
   */
  _alias?: IElement[];

  /**
   * @description Description of the Location, which helps in finding or referencing the place.
   */
  description?: string;

  /**
   * @description Extensions for description
   */
  _description?: IElement;

  /**
   * @description Indicates whether a resource instance represents a specific location or a class of locations.
   */
  mode?: LocationModeType;

  /**
   * @description Extensions for mode
   */
  _mode?: IElement;

  /**
   * @description Indicates the type of function performed at the location.
   */
  type?: ICodeableConcept[];

  /**
   * @description The contact details of communication devices available at the location. This can include phone numbers, fax numbers, mobile numbers, email addresses and web sites.
   */
  telecom?: IContactPoint[];

  /**
   * @description Physical location.
   */
  address?: IAddress;

  /**
   * @description Physical form of the location, e.g. building, room, vehicle, road.
   */
  physicalType?: ICodeableConcept;

  /**
   * @description The absolute geographic location of the Location, expressed using the WGS84 datum (This is the same co-ordinate system used in KML).
   */
  position?: ILocationPosition;

  /**
   * @description The organization responsible for the provisioning and upkeep of the location.
   */
  managingOrganization?: IReference;

  /**
   * @description Another Location of which this Location is physically a part of.
   */
  partOf?: IReference;

  /**
   * @description What days/times during a week is this location usually open.
   */
  hoursOfOperation?: ILocationHoursOfOperation[];

  /**
   * @description A description of when the locations opening ours are different to normal, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as detailed in the opening hours Times.
   */
  availabilityExceptions?: string;

  /**
   * @description Extensions for availabilityExceptions
   */
  _availabilityExceptions?: IElement;

  /**
   * @description Technical endpoints providing access to services operated for the location.
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
    return `Location${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `Location${JSON.stringify(this.toJson(), null, 2)}`;
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
    return ConformanceValidator('Location', this);
  }

  constructor(args?: ILocation) {
    super();
    if (args) Object.assign(this, args);
  }
}
