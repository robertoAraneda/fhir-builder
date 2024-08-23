import { ICodeableConcept, IdentifierUseType, IElement, IExtension, IPeriod, IReference } from 'fhirtypes/dist/r4';
import { Identifier } from '../../models';
import { IElementBuilder } from '../base/element-builder.interface';
import { IBuildable } from '../base/buildable.interface';
import { UnderscoreKeys } from '../base/resource-type-map.interface';

type PrimitiveExtensionFields = keyof Pick<Identifier, UnderscoreKeys<Identifier>>;

interface IIdentifierBuilder extends IElementBuilder, IBuildable<Identifier> {
  setType(value: ICodeableConcept): this;
  setUse(value: IdentifierUseType): this;
  setSystem(value: string): this;
  setValue(value: string): this;
  setPeriod(value: IPeriod): this;
  setAssigner(value: IReference): this;
}

export class IdentifierBuilder implements IIdentifierBuilder {
  private readonly identifier: Identifier;

  constructor() {
    this.identifier = new Identifier();
  }
  setId(id: string): this {
    this.identifier.id = id;
    return this;
  }

  addExtension(extension: IExtension): this {
    this.identifier.extension = this.identifier.extension || [];
    this.identifier.extension.push(extension);
    return this;
  }

  addPrimitiveExtension(param: PrimitiveExtensionFields, extension: IElement): this {
    this.identifier[param] = extension;

    return this;
  }

  setType(value: ICodeableConcept): this {
    this.identifier.type = value;

    return this;
  }

  setUse(value: IdentifierUseType): this {
    this.identifier.use = value;

    return this;
  }

  setSystem(value: string): this {
    this.identifier.system = value;

    return this;
  }

  setValue(value: string): this {
    this.identifier.value = value;

    return this;
  }

  setPeriod(value: IPeriod): this {
    this.identifier.period = value;

    return this;
  }

  setAssigner(value: IReference): this {
    this.identifier.assigner = value;

    return this;
  }

  build(): Identifier {
    return this.identifier;
  }
}
