import { IElement } from 'fhirtypes/dist/r4';
import { LocationPosition } from '../../models';
import { BackboneBuilder, IBuildable } from '../base';
import { ExtractUnderscoreKeys } from '../../../core/commons/utils';

// Extract the keys that start with an underscore
type PrimitiveExtensionFields = ExtractUnderscoreKeys<LocationPosition>;

/**
 * @description Interface for chaining the building of a LocationPosition
 * @interface ILocationPositionBuilder
 * @extends {IBuildable<LocationPosition>}
 */
interface ILocationPositionBuilder extends IBuildable<LocationPosition> {
  setLongitude(value: number): this;
  setLatitude(value: number): this;
  setAltitude(value: number): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a LocationPosition
 * @class LocationPositionBuilder
 * @extends {BackboneBuilder}
 * @implements {ILocationPositionBuilder}
 * @author Roberto Araneda Espinoza
 */
export class LocationPositionBuilder extends BackboneBuilder implements ILocationPositionBuilder {
  private readonly locationPosition: LocationPosition;

  constructor() {
    super();
    this.locationPosition = new LocationPosition();
  }

  /**
   * @description Adds a primitive extension to the element
   * @param param - the field to add the extension to
   * @param extension - the extension to add
   * @returns {this}
   * @example addPrimitiveExtension('_value', { value: 'test' })
   */
  addPrimitiveExtension(param: PrimitiveExtensionFields, extension: IElement): this {
    this.locationPosition[param] = extension;
    return this;
  }

  /**
   * @description Builds the model
   * @returns {LocationPosition}
   */
  build(): LocationPosition {
    return Object.assign(this.locationPosition, super.build());
  }

  /**
   * @description Sets the longitude value
   * @description Longitude. The value domain and the interpretation are the same as for the text of the longitude element in KML (see notes below).
   * @param value - the value to set
   * @returns {this}
   */
  setLongitude(value: number): this {
    this.locationPosition.longitude = value;
    return this;
  }

  /**
   * @description Sets the latitude value
   * @description Latitude. The value domain and the interpretation are the same as for the text of the latitude element in KML (see notes below).
   * @param value - the value to set
   * @returns {this}
   */
  setLatitude(value: number): this {
    this.locationPosition.latitude = value;
    return this;
  }

  /**
   * @description Sets the altitude value
   * @description Altitude. The value domain and the interpretation are the same as for the text of the altitude element in KML (see notes below).
   * @param value - the value to set
   * @returns {this}
   */
  setAltitude(value: number): this {
    this.locationPosition.altitude = value;
    return this;
  }
}
