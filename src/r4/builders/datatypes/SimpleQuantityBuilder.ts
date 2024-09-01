import { SimpleQuantity } from '../../models';
import { IElement } from 'fhirtypes/dist/r4';
import { ElementBuilder, IBuildable } from '../base';
import { ExtractUnderscoreKeys } from '../../../core/commons/utils/ExtractUnderscoreKeys';

type PrimitiveExtensionFields = ExtractUnderscoreKeys<SimpleQuantity>;

interface ISimpleQuantityBuilder extends IBuildable<SimpleQuantity> {
  setValue(value: number): this;
  setUnit(unit: string): this;
  setSystem(system: string): this;
  setCode(code: string): this;
}

export class SimpleQuantityBuilder extends ElementBuilder implements ISimpleQuantityBuilder {
  private readonly simpleQuantity: SimpleQuantity;

  constructor() {
    super();
    this.simpleQuantity = new SimpleQuantity();
  }

  build(): SimpleQuantity {
    return Object.assign(this.simpleQuantity, super.build());
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
