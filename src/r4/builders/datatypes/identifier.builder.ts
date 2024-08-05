import { ICodeableConcept, IdentifierUseType, IElement, IPeriod, IReference } from 'fhirtypes/dist/r4';
import { ElementBuilder } from '../../../core/r4/builders/base/element.builder';
import { Identifier } from '../../models';
import { IBuildable } from '../../../core/r4/interfaces';
import { IElementBuilder } from '../../../core/r4/interfaces/element-builder.interface';

interface IIdentifierBuilder extends IBuildable<Identifier>, IElementBuilder {
  addParamExtension(param: 'use' | 'system' | 'value', extension: IElement): this;
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

  addParamExtension(param: 'use' | 'system' | 'value', extension: IElement): this {
    this.identifier[`_${param}`] = extension;

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
    /*
    if (value.reference) {
      ValidateReferenceFormatHelper(value.reference, ['Organization']);
    }
     */

    this.identifier.assigner = value;

    return this;
  }

  build(): Identifier {
    Object.assign(this.identifier, { ...super.entity() });
    return this.identifier;
  }
}
