import { IElement, IExtension } from 'fhirtypes/dist/r4';
import { Period } from '../../models';
import { IElementBuilder } from '../base/element-builder.interface';
import { IBuildable } from '../base/buildable.interface';
import { UnderscoreKeys } from '../base/resource-type-map.interface';

type PrimitiveExtensionFields = keyof Pick<Period, UnderscoreKeys<Period>>;

interface IPeriodBuilder extends IElementBuilder, IBuildable<Period> {
  setStart(value: string): this;
  setEnd(value: string): this;
}

/**
 * @description Class to build a Period instance with the builder pattern
 */
export class PeriodBuilder implements IPeriodBuilder {
  private readonly period: Period;

  constructor() {
    this.period = new Period();
  }
  setId(id: string): this {
    this.period.id = id;
    return this;
  }

  addExtension(extension: IExtension): this {
    this.period.extension = this.period.extension || [];
    this.period.extension.push(extension);
    return this;
  }

  /**
   * @description Adds a parameter extension to the period
   * @param param - The parameter name ('start' or 'end')
   * @param extension - The extension to add
   * @returns The instance of PeriodBuilder for method chaining
   */
  addPrimitiveExtension(param: PrimitiveExtensionFields, extension: IElement): this {
    this.period[param] = extension;

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
    return this.period;
  }
}
