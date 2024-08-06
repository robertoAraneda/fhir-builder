import { ICodeableConcept, IdentifierUseType, IElement, IExtension, IPeriod, IReference } from 'fhirtypes/dist/r4';
import { Identifier } from '../../models';

interface IIdentifierBuilder {
  // Element properties
  setId(id: string): this;
  addExtension(extension: IExtension): this;
  setMultipleExtension(extension: IExtension[]): this;

  // Identifier properties
  addParamExtension(param: 'use' | 'system' | 'value', extension: IElement): this;
  setType(value: ICodeableConcept): this;
  setUse(value: IdentifierUseType): this;
  setSystem(value: string): this;
  setValue(value: string): this;
  setPeriod(value: IPeriod): this;
  setAssigner(value: IReference): this;

  // Build
  build(): Identifier;
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

  setMultipleExtension(extension: IExtension[]): this {
    this.identifier.extension = extension;
    return this;
  }

  addExtension(extension: IExtension): this {
    this.identifier.extension = this.identifier.extension || [];
    this.identifier.extension.push(extension);
    return this;
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
    return this.identifier;
  }
}
