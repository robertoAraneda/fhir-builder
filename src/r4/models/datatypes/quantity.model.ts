import { Element } from '../base';
import { IElement, IQuantity, QuantityComparatorType } from 'fhirtypes/dist/r4';
import { QuantityBuilder } from '../../builders';
import { ValReturnType } from '../../validators/base/datatype.validator';
import { conformanceValidation } from '../../validators/base/object.validator';

export class Quantity extends Element implements IQuantity {
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

  toJson(): Quantity {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `Quantity${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `Quantity${JSON.stringify(this.toJson())}`;
  }

  validate(): ValReturnType {
    const { error } = conformanceValidation(this, 'Quantity');
    return { error };
  }

  static builder(): QuantityBuilder {
    return new QuantityBuilder();
  }

  constructor(args?: IQuantity) {
    super();
    Object.assign(this, args);
  }
}
