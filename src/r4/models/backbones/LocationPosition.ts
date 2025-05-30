import { IElement } from 'fhirtypes/dist/r4';
import { ILocationPosition, IOperationOutcome } from 'fhirtypes/dist/r4';
import { BackboneElement, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';

/**
  * @version R4 (v4.0.1)
  * @summary FHIR® Specification by HL7®
  * @description Class for LocationPosition BackboneElement
  undefined
  * @property {number} longitude
  * @property {IElement} _longitude
  * @property {number} latitude
  * @property {IElement} _latitude
  * @property {number} altitude
  * @property {IElement} _altitude
  * @author Roberto Araneda Espinoza
  */
export class LocationPosition extends BackboneElement implements ILocationPosition, IValidatable, ISerializable {
  /**
   * @description Longitude. The value domain and the interpretation are the same as for the text of the longitude element in KML (see notes below).
   */
  longitude: number;

  /**
   * @description Extensions for longitude
   */
  _longitude?: IElement;

  /**
   * @description Latitude. The value domain and the interpretation are the same as for the text of the latitude element in KML (see notes below).
   */
  latitude: number;

  /**
   * @description Extensions for latitude
   */
  _latitude?: IElement;

  /**
   * @description Altitude. The value domain and the interpretation are the same as for the text of the altitude element in KML (see notes below).
   */
  altitude?: number;

  /**
   * @description Extensions for altitude
   */
  _altitude?: IElement;

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
    return `LocationPosition${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `LocationPosition${JSON.stringify(this.toJson(), null, 2)}`;
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
    return ConformanceValidator('LocationPosition', this);
  }

  constructor(args?: ILocationPosition) {
    super();
    if (args) Object.assign(this, args);
  }
}
