import { IElement, IExtension } from 'fhirtypes/dist/r4';
import { IElementBuilder } from './element-builder.interface';

/**
 * @description Base Element Builder
 * @see {@link https://www.hl7.org/fhir/datatypes.html#Element}
 * @implements {IElementBuilder}
 * @author Roberto Araneda
 */
export class ElementBuilder implements IElementBuilder {
  private readonly element: IElement;

  constructor() {
    this.element = {} as IElement;
  }

  /**
   * @description Unique id for inter-element referencing
   * @param id
   * @returns {this}
   */
  setId(id: string): this {
    this.element.id = id;
    return this;
  }

  /**
   * @description Additional content defined by implementations
   * @param extension
   * @returns {this}
   */
  addExtension(extension: IExtension): this {
    this.element.extension = this.element.extension || [];
    this.element.extension.push(extension);
    return this;
  }

  /**
   * @description Returns the element
   */
  build(): IElement {
    return this.element;
  }
}
