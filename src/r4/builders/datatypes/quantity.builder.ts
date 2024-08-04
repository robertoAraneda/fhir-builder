import { ElementBuilder } from './element.builder';
import {
  IQuantityBuilder,
  QuantityParamExtensionType,
} from '../../interfaces/builders/datatypes/quantity-builder.interface';
import { IElement, IQuantity, QuantityComparatorType } from 'fhirtypes/dist/r4';
import { Quantity } from '../../models/datatypes/quantity.model';

export class QuantityBuilder extends ElementBuilder implements IQuantityBuilder {
  private readonly quantity: IQuantity;

  constructor() {
    super();
    this.quantity = {} as IQuantity;
  }

  addParamExtension<T extends QuantityParamExtensionType>(param: T, extension: IElement): this {
    this.quantity[`_${param}`] = extension;

    return this;
  }

  build(): Quantity {
    Object.assign(this.quantity, { ...super.entity() });
    return new Quantity(this.quantity);
  }

  setCode(value: string): this {
    this.quantity.code = value;

    return this;
  }

  setComparator(value: QuantityComparatorType): this {
    this.quantity.comparator = value;
    return this;
  }

  setSystem(value: string): this {
    this.quantity.system = value;
    return this;
  }

  setUnit(value: string): this {
    this.quantity.unit = value;
    return this;
  }

  setValue(value: number): this {
    this.quantity.value = value;
    return this;
  }
}
