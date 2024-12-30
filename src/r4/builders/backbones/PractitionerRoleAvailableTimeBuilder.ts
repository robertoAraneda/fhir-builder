import { IElement } from 'fhirtypes/dist/r4';
import { PractitionerRoleAvailableTime } from '../../models';
import { BackboneBuilder, IBuildable } from '../base';
import { ExtractUnderscoreKeys, ExtractUnderscoreArrayKeys } from '../../../core/commons/utils';
import { DaysOfWeekType } from 'fhirtypes/dist/r4/types';

// Extract the keys that start with an underscore
type PrimitiveExtensionFields = ExtractUnderscoreKeys<PractitionerRoleAvailableTime>;

// Extract the keys that are arrays and start with an underscore
type UnderscoreArrayElements = ExtractUnderscoreArrayKeys<PractitionerRoleAvailableTime>;
/**
 * @description Interface for chaining the building of a PractitionerRoleAvailableTime
 * @interface IPractitionerRoleAvailableTimeBuilder
 * @extends {IBuildable<PractitionerRoleAvailableTime>}
 */
interface IPractitionerRoleAvailableTimeBuilder extends IBuildable<PractitionerRoleAvailableTime> {
  addDaysOfWeek(value: DaysOfWeekType): this;
  setAllDay(value: boolean): this;
  setAvailableStartTime(value: string): this;
  setAvailableEndTime(value: string): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a PractitionerRoleAvailableTime
 * @class PractitionerRoleAvailableTimeBuilder
 * @extends {BackboneBuilder}
 * @implements {IPractitionerRoleAvailableTimeBuilder}
 * @author Roberto Araneda Espinoza
 */
export class PractitionerRoleAvailableTimeBuilder
  extends BackboneBuilder
  implements IPractitionerRoleAvailableTimeBuilder
{
  private readonly practitionerRoleAvailableTime: PractitionerRoleAvailableTime;

  constructor() {
    super();
    this.practitionerRoleAvailableTime = new PractitionerRoleAvailableTime();
  }

  /**
   * @description Adds a primitive extension to the element
   * @param param - the field to add the extension to
   * @param extension - the extension to add
   * @returns {this}
   * @example addPrimitiveExtension('_value', { value: 'test' })
   */
  addPrimitiveExtension<T extends PrimitiveExtensionFields>(param: T, extension: IElement): this {
    const arrayParam = ['_daysOfWeek'];
    if (arrayParam.includes(param)) {
      this.practitionerRoleAvailableTime[param] = this.practitionerRoleAvailableTime[param] || [];
      (this.practitionerRoleAvailableTime[param] as IElement[]).push(extension as IElement);

      return this;
    }

    const localParam = param as Exclude<PrimitiveExtensionFields, UnderscoreArrayElements>;
    this.practitionerRoleAvailableTime[localParam] = extension as IElement;
    return this;
  }

  /**
   * @description Builds the model
   * @returns {PractitionerRoleAvailableTime}
   */
  build(): PractitionerRoleAvailableTime {
    return Object.assign(this.practitionerRoleAvailableTime, super.build());
  }

  /**
   * @description Adds a value to the daysOfWeek array
   * @description Indicates which days of the week are available between the start and end Times.
   * @param value - the value to add
   * @returns {this}
   */
  addDaysOfWeek(value: DaysOfWeekType): this {
    this.practitionerRoleAvailableTime.daysOfWeek = this.practitionerRoleAvailableTime.daysOfWeek || [];
    this.practitionerRoleAvailableTime.daysOfWeek.push(value);
    return this;
  }
  /**
   * @description Sets the allDay value
   * @description Is this always available? (hence times are irrelevant) e.g. 24 hour service.
   * @param value - the value to set
   * @returns {this}
   */
  setAllDay(value: boolean): this {
    this.practitionerRoleAvailableTime.allDay = value;
    return this;
  }

  /**
   * @description Sets the availableStartTime value
   * @description The opening time of day. Note: If the AllDay flag is set, then this time is ignored.
   * @param value - the value to set
   * @returns {this}
   */
  setAvailableStartTime(value: string): this {
    this.practitionerRoleAvailableTime.availableStartTime = value;
    return this;
  }

  /**
   * @description Sets the availableEndTime value
   * @description The closing time of day. Note: If the AllDay flag is set, then this time is ignored.
   * @param value - the value to set
   * @returns {this}
   */
  setAvailableEndTime(value: string): this {
    this.practitionerRoleAvailableTime.availableEndTime = value;
    return this;
  }
}
