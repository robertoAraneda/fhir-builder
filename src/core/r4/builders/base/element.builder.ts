import { IElement, IExtension } from 'fhirtypes/dist/r4';
import { IElementBuilder } from '../../interfaces/element-builder.interface';

export class ElementBuilder implements IElementBuilder {
  private readonly element: IElement;

  constructor() {
    this.element = {} as IElement;
  }

  setId(id: string): this {
    this.element.id = id;
    return this;
  }

  setMultipleExtension(extension: IExtension[]): this {
    this.element.extension = extension;
    return this;
  }

  addExtension(extension: IExtension): this {
    this.element.extension = this.element.extension || [];
    this.element.extension.push(extension);
    return this;
  }

  protected entity(): IElement {
    return {
      ...this.element,
    };
  }
}
