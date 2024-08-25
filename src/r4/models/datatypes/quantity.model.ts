import { IElement, IQuantity, QuantityComparatorType } from 'fhirtypes/dist/r4';
import { QuantityBuilder } from '../../builders';

import { ConformanceValidator } from '../../../core/r4/validators/base';
import { Element } from '../base/element.model';
import { IValidatable } from '../base/validatable.interface';
import { ISerializable } from '../base/serializable.interface';

export class Quantity extends Element implements IQuantity, IValidatable, ISerializable {
  // Quantity Properties
  code: string;
  comparator: QuantityComparatorType;
  system: string;
  unit: string;
  value: number;

  // Quantity Extensions
  _code: IElement;
  _comparator: IElement;
  _system: IElement;
  _unit: IElement;
  _value: IElement;

  toJson() {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `Quantity${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `Quantity${JSON.stringify(this.toJson())}`;
  }

  validate() {
    return ConformanceValidator(this, 'Quantity');
  }

  static builder(): QuantityBuilder {
    return new QuantityBuilder();
  }

  constructor(args?: IQuantity) {
    super();
    Object.assign(this, args);
  }

  protected builderInstance(): QuantityBuilder {
    return new QuantityBuilder();
  }

  serialize(): string {
    return JSON.stringify(this.toJson());
  }
}
