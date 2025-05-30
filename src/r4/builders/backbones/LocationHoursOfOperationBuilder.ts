import { IElement } from 'fhirtypes/dist/r4';
import { LocationHoursOfOperation } from '../../models';
import { BackboneBuilder, IBuildable } from '../base';
import { ExtractUnderscoreKeys, ExtractUnderscoreArrayKeys } from '../../../core/commons/utils';
import { DaysOfWeekType } from 'fhirtypes/dist/r4/types';

// Extract the keys that start with an underscore
type PrimitiveExtensionFields = ExtractUnderscoreKeys<LocationHoursOfOperation>;

// Extract the keys that are arrays and start with an underscore
type UnderscoreArrayElements = ExtractUnderscoreArrayKeys<LocationHoursOfOperation>;
/**
 * @description Interface for chaining the building of a LocationHoursOfOperation
 * @interface ILocationHoursOfOperationBuilder
 * @extends {IBuildable<LocationHoursOfOperation>}
 */
interface ILocationHoursOfOperationBuilder extends IBuildable<LocationHoursOfOperation> {
  addDaysOfWeek(value: string): this;
  setAllDay(value: boolean): this;
  setOpeningTime(value: string): this;
  setClosingTime(value: string): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a LocationHoursOfOperation
 * @class LocationHoursOfOperationBuilder
 * @extends {BackboneBuilder}
 * @implements {ILocationHoursOfOperationBuilder}
 * @author Roberto Araneda Espinoza
 */
export class LocationHoursOfOperationBuilder extends BackboneBuilder implements ILocationHoursOfOperationBuilder {
  private readonly locationHoursOfOperation: LocationHoursOfOperation;

  constructor() {
    super();
    this.locationHoursOfOperation = new LocationHoursOfOperation();
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
      this.locationHoursOfOperation[param] = this.locationHoursOfOperation[param] || [];
      (this.locationHoursOfOperation[param] as IElement[]).push(extension as IElement);

      return this;
    }

    const localParam = param as Exclude<PrimitiveExtensionFields, UnderscoreArrayElements>;
    this.locationHoursOfOperation[localParam] = extension as IElement;
    return this;
  }

  /**
   * @description Builds the model
   * @returns {LocationHoursOfOperation}
   */
  build(): LocationHoursOfOperation {
    return Object.assign(this.locationHoursOfOperation, super.build());
  }

  /**
   * @description Adds a value to the daysOfWeek array
   * @description Indicates which days of the week are available between the start and end Times.
   * @param value - the value to add
   * @returns {this}
   */
  addDaysOfWeek(value: DaysOfWeekType): this {
    this.locationHoursOfOperation.daysOfWeek = this.locationHoursOfOperation.daysOfWeek || [];
    this.locationHoursOfOperation.daysOfWeek.push(value);
    return this;
  }
  /**
   * @description Sets the allDay value
   * @description The Location is open all day.
   * @param value - the value to set
   * @returns {this}
   */
  setAllDay(value: boolean): this {
    this.locationHoursOfOperation.allDay = value;
    return this;
  }

  /**
   * @description Sets the openingTime value
   * @description Time that the Location opens.
   * @param value - the value to set
   * @returns {this}
   */
  setOpeningTime(value: string): this {
    this.locationHoursOfOperation.openingTime = value;
    return this;
  }

  /**
   * @description Sets the closingTime value
   * @description Time that the Location closes.
   * @param value - the value to set
   * @returns {this}
   */
  setClosingTime(value: string): this {
    this.locationHoursOfOperation.closingTime = value;
    return this;
  }
}
