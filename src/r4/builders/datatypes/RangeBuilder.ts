import { IBuildable } from '../base/IBuildable';
import { Range } from '../../models';
import { ISimpleQuantity } from 'fhirtypes/dist/r4/datatypes/ISimpleQuantity';
import { ElementBuilder } from '../base/ElementBuilder';

interface IRangeBuilder extends IBuildable<Range> {
  setLow(low: ISimpleQuantity): this;
  setHigh(high: ISimpleQuantity): this;
}

export class RangeBuilder extends ElementBuilder implements IRangeBuilder {
  private readonly range: Range;

  constructor() {
    super();
    this.range = new Range();
  }

  build(): Range {
    return Object.assign(this.range, super.build());
  }

  setLow(low: ISimpleQuantity): this {
    this.range.low = low;
    return this;
  }

  setHigh(high: ISimpleQuantity): this {
    this.range.high = high;
    return this;
  }
}
