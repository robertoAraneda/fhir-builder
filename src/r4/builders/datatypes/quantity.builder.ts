import { ElementBuilder } from '../../../core/r4/builders/base/element.builder';
import { IElement, QuantityComparatorType } from 'fhirtypes/dist/r4';
import { QuantityParamExtensionType } from '../../../core/r4/types';
import { Quantity } from '../../models';
import { IBuildable } from '../../../core/r4/interfaces';
import { IElementBuilder } from '../../../core/r4/interfaces/element-builder.interface';

interface IQuantityBuilder extends IBuildable<Quantity>, IElementBuilder {
  addParamExtension(param: QuantityParamExtensionType, extension: IElement): this;
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
