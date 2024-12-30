import { IElement } from 'fhirtypes/dist/r4';
import { IPractitionerRoleAvailableTime, IOperationOutcome } from 'fhirtypes/dist/r4';
import { BackboneElement, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';
import { DaysOfWeekType } from 'fhirtypes/dist/r4/types';

/**
  * @version R4 (v4.0.1)
  * @summary FHIR® Specification by HL7®
  * @description Class for PractitionerRoleAvailableTime BackboneElement
  undefined
  * @property {string[]} daysOfWeek
  * @property {IElement[]} _daysOfWeek
  * @property {boolean} allDay
  * @property {IElement} _allDay
  * @property {string} availableStartTime
  * @property {IElement} _availableStartTime
  * @property {string} availableEndTime
  * @property {IElement} _availableEndTime
  * @author Roberto Araneda Espinoza
  */
export class PractitionerRoleAvailableTime
  extends BackboneElement
  implements IPractitionerRoleAvailableTime, IValidatable, ISerializable
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
   * @description Is this always available? (hence times are irrelevant) e.g. 24 hour service.
   */
  allDay?: boolean;

  /**
   * @description Extensions for allDay
   */
  _allDay?: IElement;

  /**
   * @description The opening time of day. Note: If the AllDay flag is set, then this time is ignored.
   */
  availableStartTime?: string;

  /**
   * @description Extensions for availableStartTime
   */
  _availableStartTime?: IElement;

  /**
   * @description The closing time of day. Note: If the AllDay flag is set, then this time is ignored.
   */
  availableEndTime?: string;

  /**
   * @description Extensions for availableEndTime
   */
  _availableEndTime?: IElement;

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
    return `PractitionerRoleAvailableTime${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `PractitionerRoleAvailableTime${JSON.stringify(this.toJson(), null, 2)}`;
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
    return ConformanceValidator('PractitionerRoleAvailableTime', this);
  }

  constructor(args?: IPractitionerRoleAvailableTime) {
    super();
    if (args) Object.assign(this, args);
  }
}
