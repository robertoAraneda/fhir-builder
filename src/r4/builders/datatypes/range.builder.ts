import { IElementBuilder } from '../base/element-builder.interface';
import { IBuildable } from '../base/buildable.interface';
import { Range } from '../../models';
import { ISimpleQuantity } from 'fhirtypes/dist/r4/datatypes/ISimpleQuantity';
import { IExtension } from 'fhirtypes/dist/r4';

interface IRangeBuilder extends IElementBuilder, IBuildable<Range> {
  setLow(low: ISimpleQuantity): this;
  setHigh(high: ISimpleQuantity): this;
}

export class RangeBuilder implements IRangeBuilder {
  private range: Range = new Range();

  build(): Range {
    return this.range;
  }

  setLow(low: ISimpleQuantity): this {
    this.range.low = low;
    return this;
  }

  setHigh(high: ISimpleQuantity): this {
    this.range.high = high;
    return this;
  }

  addExtension(extension: IExtension): this {
    this.range.extension = this.range.extension || [];
    this.range.extension.push(extension);
    return this;
  }

  setId(id: string): this {
    this.range.id = id;
    return this;
  }
}
