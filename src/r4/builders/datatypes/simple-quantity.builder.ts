import { IElementBuilder } from '../base/element-builder.interface';
import { IBuildable } from '../base/buildable.interface';
import { SimpleQuantity } from '../../models';
import { IElement } from 'fhirtypes/dist/r4';
import { UnderscoreKeys } from '../base/resource-type-map.interface';

type PrimitiveExtensionFields = keyof Pick<SimpleQuantity, UnderscoreKeys<SimpleQuantity>>;

interface ISimpleQuantityBuilder extends IElementBuilder, IBuildable<SimpleQuantity> {
  setValue(value: number): this;
  setUnit(unit: string): this;
  setSystem(system: string): this;
  setCode(code: string): this;
}

export class SimpleQuantityBuilder implements ISimpleQuantityBuilder {
  private readonly simpleQuantity: SimpleQuantity;

  constructor() {
    this.simpleQuantity = new SimpleQuantity();
  }

  build(): SimpleQuantity {
    return this.simpleQuantity;
  }

  setId(id: string): this {
    this.simpleQuantity.id = id;
    return this;
  }

  addExtension(extension: any): this {
    this.simpleQuantity.extension = this.simpleQuantity.extension || [];
    this.simpleQuantity.extension.push(extension);
    return this;
  }

  addPrimitiveExtension(param: PrimitiveExtensionFields, extension: IElement): this {
    this.simpleQuantity[param] = extension;
    return this;
  }

  setValue(value: number): this {
    this.simpleQuantity.value = value;
    return this;
  }

  setUnit(unit: string): this {
    this.simpleQuantity.unit = unit;
    return this;
  }

  setSystem(system: string): this {
    this.simpleQuantity.system = system;
    return this;
  }

  setCode(code: string): this {
    this.simpleQuantity.code = code;
    return this;
  }
}
