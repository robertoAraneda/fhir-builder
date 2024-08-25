import { Element } from '../base/element.model';
import { IRange } from 'fhirtypes/dist/r4';
import { ISimpleQuantity } from 'fhirtypes/dist/r4/datatypes/ISimpleQuantity';
import { IValidatable } from '../base/validatable.interface';
import { ISerializable } from '../base/serializable.interface';
import { ConformanceValidator } from '../../../core/r4/validators/base';
import { RangeBuilder } from '../../builders';

export class Range extends Element implements IRange, IValidatable, ISerializable {
  low?: ISimpleQuantity;
  high?: ISimpleQuantity;

  toJson() {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return JSON.stringify(this.toJson(), null, 2);
  }

  toString(): string {
    return JSON.stringify(this.toJson());
  }

  constructor(args?: IRange) {
    super();
    if (args) {
      Object.assign(this, args);
    }
  }

  protected builderInstance(): RangeBuilder {
    return new RangeBuilder();
  }

  serialize(): string {
    return JSON.stringify(this.toJson());
  }

  validate() {
    return ConformanceValidator(this, 'Range');
  }
}
