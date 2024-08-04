import { IElement, IPeriod } from 'fhirtypes/dist/r4';
import { ElementBuilder } from './element.builder';
import { IPeriodBuilder } from '../../interfaces';
import { Period } from '../../models';

export class PeriodBuilder extends ElementBuilder implements IPeriodBuilder {
  private readonly period: IPeriod;

  constructor() {
    super();
    this.period = {} as IPeriod;
  }

  addParamExtension(param: 'start' | 'end', extension: IElement): this {
    this.period[`_${param}`] = extension;

    return this;
  }

  setStart(value: string): this {
    this.period.start = value;

    return this;
  }

  setEnd(value: string): this {
    this.period.end = value;

    return this;
  }

  build(): Period {
    Object.assign(this.period, { ...super.entity() });
    return new Period(this.period);
  }
}
