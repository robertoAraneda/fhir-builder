import { IElement } from 'fhirtypes/dist/r4';
import { ElementBuilder } from '../base/element.builder';
import { IPeriodBuilder } from '../../interfaces';
import { Period } from '../../models';

/**
 * @description Class to build a Period instance with the builder pattern
 */
export class PeriodBuilder extends ElementBuilder implements IPeriodBuilder {
  private readonly period: Period;

  constructor() {
    super();
    this.period = new Period();
  }

  /**
   * @description Adds a parameter extension to the period
   * @param param - The parameter name ('start' or 'end')
   * @param extension - The extension to add
   * @returns The instance of PeriodBuilder for method chaining
   */
  addParamExtension(param: 'start' | 'end', extension: IElement): this {
    this.period[`_${param}`] = extension;

    return this;
  }

  /**
   * @description Sets the start date of the period
   * @param value - The start date as a string
   * @returns The instance of PeriodBuilder for method chaining
   */
  setStart(value: string): this {
    this.period.start = value;

    return this;
  }

  /**
   * @description Sets the end date of the period
   * @param value - The end date as a string
   * @returns The instance of PeriodBuilder for method chaining
   */
  setEnd(value: string): this {
    this.period.end = value;

    return this;
  }

  /**
   * @description Builds and returns the Period instance
   * @returns The built Period instance
   */
  build(): Period {
    Object.assign(this.period, { ...super.entity() });
    return this.period;
  }
}
