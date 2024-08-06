import { ICoding, IElement, IExtension } from 'fhirtypes/dist/r4';
import { CodeableConcept } from '../../models';

interface ICodeableConceptBuilder {
  // Element properties
  setId(id: string): this;
  addExtension(extension: IExtension): this;
  setMultipleExtension(extension: IExtension[]): this;

  // CodeableConcept properties
  addCodeableConceptParamExtension(param: 'text', extension: IElement): this;
  addCoding(coding: ICoding): this;
  setMultipleCoding(coding: ICoding[]): this;
  setText(text: string): this;

  // Build
  build(): CodeableConcept;
}

export class CodeableConceptBuilder implements ICodeableConceptBuilder {
  private readonly codeableConcept: CodeableConcept;

  constructor() {
    this.codeableConcept = new CodeableConcept();
  }
  setId(id: string): this {
    this.codeableConcept.id = id;
    return this;
  }

  setMultipleExtension(extension: IExtension[]): this {
    this.codeableConcept.extension = extension;
    return this;
  }

  addExtension(extension: IExtension): this {
    this.codeableConcept.extension = this.codeableConcept.extension || [];
    this.codeableConcept.extension.push(extension);
    return this;
  }

  /**
   * @description Add a param extension to the codeable concept
   * @param {string} param The param to add the extension to
   * @param {IElement} extension The extension to add
   * @returns {CodeableConceptBuilder} The builder
   */
  addCodeableConceptParamExtension(param: 'text', extension: IElement): this {
    this.codeableConcept[`_${param}`] = extension;

    return this;
  }

  addCoding(coding: ICoding): this {
    this.codeableConcept.coding = this.codeableConcept.coding || [];

    this.codeableConcept.coding.push(coding);
    return this;
  }

  setMultipleCoding(coding: ICoding[]): this {
    this.codeableConcept.coding = coding;
    return this;
  }

  setText(text: string): this {
    this.codeableConcept.text = text;
    return this;
  }

  build(): CodeableConcept {
    return this.codeableConcept;
  }
}
