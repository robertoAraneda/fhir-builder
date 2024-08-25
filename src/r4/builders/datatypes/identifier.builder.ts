import { ICodeableConcept, IdentifierUseType, IElement, IPeriod, IReference } from 'fhirtypes/dist/r4';
import { Identifier } from '../../models';
import { IBuildable } from '../base/buildable.interface';
import { UnderscoreKeys } from '../base/resource-type-map.interface';
import { ElementBuilder } from '../base/element.builder';

type PrimitiveExtensionFields = keyof Pick<Identifier, UnderscoreKeys<Identifier>>;

interface IIdentifierBuilder extends IBuildable<Identifier> {
  setType(value: ICodeableConcept): this;
  setUse(value: IdentifierUseType): this;
  setSystem(value: string): this;
  setValue(value: string): this;
  setPeriod(value: IPeriod): this;
  setAssigner(value: IReference): this;
}

export class IdentifierBuilder extends ElementBuilder implements IIdentifierBuilder {
  private readonly identifier: Identifier;

  constructor() {
    super();
    this.identifier = new Identifier();
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
    return Object.assign(this.identifier, super.build());
  }
}
