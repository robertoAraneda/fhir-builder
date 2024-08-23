import { IElement, IExtension, QuantityComparatorType } from 'fhirtypes/dist/r4';
import { Quantity } from '../../models';
import { IElementBuilder } from '../base/element-builder.interface';
import { IBuildable } from '../base/buildable.interface';
import { UnderscoreKeys } from '../base/resource-type-map.interface';

type PrimitiveExtensionFields = keyof Pick<Quantity, UnderscoreKeys<Quantity>>;

interface IQuantityBuilder extends IElementBuilder, IBuildable<Quantity> {
  setCode(value: string): this;
  setSystem(value: string): this;
  setUnit(value: string): this;
  setValue(value: number): this;
  setComparator(value: QuantityComparatorType): this;
}

export class QuantityBuilder implements IQuantityBuilder {
  private readonly quantity: Quantity;

  constructor() {
    this.quantity = new Quantity();
  }

  setId(id: string): this {
    this.quantity.id = id;
    return this;
  }

  addExtension(extension: IExtension): this {
    this.quantity.extension = this.quantity.extension || [];
    this.quantity.extension.push(extension);
    return this;
  }

  addPrimitiveExtension(param: PrimitiveExtensionFields, extension: IElement): this {
    this.quantity[param] = extension;

    return this;
  }

  build(): Quantity {
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
