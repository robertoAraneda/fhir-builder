import { IElement, QuantityComparatorType } from 'fhirtypes/dist/r4';
import { Quantity } from '../../models';
import { IBuildable } from '../base/IBuildable';
import { UnderscoreKeys } from '../base/resource-type-map.interface';
import { ElementBuilder } from '../base/ElementBuilder';

type PrimitiveExtensionFields = keyof Pick<Quantity, UnderscoreKeys<Quantity>>;

interface IQuantityBuilder extends IBuildable<Quantity> {
  setCode(value: string): this;
  setSystem(value: string): this;
  setUnit(value: string): this;
  setValue(value: number): this;
  setComparator(value: QuantityComparatorType): this;
}

export class QuantityBuilder extends ElementBuilder implements IQuantityBuilder {
  private readonly quantity: Quantity;

  constructor() {
    super();
    this.quantity = new Quantity();
  }

  addPrimitiveExtension(param: PrimitiveExtensionFields, extension: IElement): this {
    this.quantity[param] = extension;

    return this;
  }

  build(): Quantity {
    return Object.assign(this.quantity, super.build());
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
