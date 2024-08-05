import { ElementBuilder } from '../base/element.builder';
import { IQuantityBuilder } from '../../interfaces';
import { IElement, IQuantity, QuantityComparatorType } from 'fhirtypes/dist/r4';
import { QuantityParamExtensionType } from '../../types';
import { Quantity } from '../../models';

export class QuantityBuilder extends ElementBuilder implements IQuantityBuilder {
  private readonly quantity: Quantity;

  constructor() {
    super();
    this.quantity = new Quantity();
  }

  addParamExtension<T extends QuantityParamExtensionType>(param: T, extension: IElement): this {
    this.quantity[`_${param}`] = extension;

    return this;
  }

  build(): Quantity {
    Object.assign(this.quantity, { ...super.entity() });
    return this.quantity;
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
