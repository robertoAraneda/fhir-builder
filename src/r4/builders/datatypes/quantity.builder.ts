import { IElement, IExtension, QuantityComparatorType } from 'fhirtypes/dist/r4';
import { QuantityParamExtensionType } from '../../params-types';
import { Quantity } from '../../models';

interface IQuantityBuilder {
  // Element properties
  setId(id: string): this;
  addExtension(extension: IExtension): this;
  setMultipleExtension(extension: IExtension[]): this;

  // Quantity properties
  addParamExtension(param: QuantityParamExtensionType, extension: IElement): this;
  setCode(value: string): this;
  setSystem(value: string): this;
  setUnit(value: string): this;
  setValue(value: number): this;
  setComparator(value: QuantityComparatorType): this;

  // Build
  build(): Quantity;
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

  setMultipleExtension(extension: IExtension[]): this {
    this.quantity.extension = extension;
    return this;
  }

  addExtension(extension: IExtension): this {
    this.quantity.extension = this.quantity.extension || [];
    this.quantity.extension.push(extension);
    return this;
  }

  addParamExtension<T extends QuantityParamExtensionType>(param: T, extension: IElement): this {
    this.quantity[`_${param}`] = extension;

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
