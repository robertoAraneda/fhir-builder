import { ICodeableConcept, IdentifierUseType, IElement, IIdentifier, IPeriod, IReference } from 'fhirtypes/dist/r4';
import { ElementBuilder } from './element.builder';
import { IIdentifierBuilder } from '../../interfaces';
import { Identifier } from '../../models';

export class IdentifierBuilder extends ElementBuilder implements IIdentifierBuilder {
  private readonly identifier: IIdentifier;

  constructor() {
    super();

    this.identifier = {} as IIdentifier;
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
    return new Identifier(this.identifier);
  }
}
