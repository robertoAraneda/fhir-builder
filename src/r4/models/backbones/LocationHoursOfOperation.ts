import { IElement } from 'fhirtypes/dist/r4';
import { ILocationHoursOfOperation, IOperationOutcome } from 'fhirtypes/dist/r4';
import { BackboneElement, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';
import { DaysOfWeekType } from 'fhirtypes/dist/r4/types';

/**
  * @version R4 (v4.0.1)
  * @summary FHIR® Specification by HL7®
  * @description Class for LocationHoursOfOperation BackboneElement
  undefined
  * @property {string[]} daysOfWeek
  * @property {IElement[]} _daysOfWeek
  * @property {boolean} allDay
  * @property {IElement} _allDay
  * @property {string} openingTime
  * @property {IElement} _openingTime
  * @property {string} closingTime
  * @property {IElement} _closingTime
  * @author Roberto Araneda Espinoza
  */
export class LocationHoursOfOperation
  extends BackboneElement
  implements ILocationHoursOfOperation, IValidatable, ISerializable
{
  /**
   * @description Indicates which days of the week are available between the start and end Times.
   */
  daysOfWeek?: DaysOfWeekType[];

  /**
   * @description Extensions for daysOfWeek
   */
  _daysOfWeek?: IElement[];

  /**
   * @description The Location is open all day.
   */
  allDay?: boolean;

  /**
   * @description Extensions for allDay
   */
  _allDay?: IElement;

  /**
   * @description Time that the Location opens.
   */
  openingTime?: string;

  /**
   * @description Extensions for openingTime
   */
  _openingTime?: IElement;

  /**
   * @description Time that the Location closes.
   */
  closingTime?: string;

  /**
   * @description Extensions for closingTime
   */
  _closingTime?: IElement;

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
    return `LocationHoursOfOperation${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `LocationHoursOfOperation${JSON.stringify(this.toJson(), null, 2)}`;
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
    return ConformanceValidator('LocationHoursOfOperation', this);
  }

  constructor(args?: ILocationHoursOfOperation) {
    super();
    if (args) Object.assign(this, args);
  }
}
