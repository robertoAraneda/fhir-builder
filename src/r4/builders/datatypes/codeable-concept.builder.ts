import { CodeableConceptBuilderInterface } from '../../interfaces/codeable-concept-builder.interface';
import { ElementBuilder } from './element.builder';
import { ICodeableConcept, ICoding, IElement } from 'fhirtypes/dist/r4';
import { CodeableConcept } from '../../models';

export class CodeableConceptBuilder extends ElementBuilder implements CodeableConceptBuilderInterface {
  private readonly codeableConcept: ICodeableConcept;

  constructor() {
    super();

    this.codeableConcept = {} as ICodeableConcept;
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

  setText(text: string): CodeableConceptBuilder {
    this.codeableConcept.text = text;
    return this;
  }

  build(): CodeableConcept {
    Object.assign(this.codeableConcept, { ...super.entity() });
    return new CodeableConcept(this.codeableConcept);
  }
}
