import { Element } from '../base/element.model';
import { IElement, IQuantity, QuantityComparatorType } from 'fhirtypes/dist/r4';
import { QuantityBuilder } from '../../builders/datatypes/quantity.builder';
import { IGenericObject } from '../../interfaces';
import { ValReturnType } from '../../validators/base/datatype.validator';
import { PeriodValidator } from '../../validators/datatypes/period.validator';
import { QuantityValidator } from '../../validators/datatypes/quantity.validator';

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

  private isValid(args: IGenericObject): ValReturnType {
    try {
      QuantityValidator(args);
      return { error: null };
    } catch (e: any) {
      return { error: e.message };
    }
  }

  validate(): ValReturnType {
    const { error } = this.isValid(this);
    return { error };
  }

  static builder(): QuantityBuilder {
    return new QuantityBuilder();
  }

  constructor(args: IQuantity) {
    super();
    Object.assign(this, args);
  }
}
