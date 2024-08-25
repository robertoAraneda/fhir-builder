import { ICoding, IElement } from 'fhirtypes/dist/r4';
import { CodeableConcept } from '../../models';
import { IBuildable } from '../base/buildable.interface';
import { UnderscoreKeys } from '../base/resource-type-map.interface';
import { ElementBuilder } from '../base/element.builder';

type PrimitiveExtensionFields = keyof Pick<CodeableConcept, UnderscoreKeys<CodeableConcept>>;

interface ICodeableConceptBuilder extends IBuildable<CodeableConcept> {
  addCoding(coding: ICoding): this;
  setText(text: string): this;
}

export class CodeableConceptBuilder extends ElementBuilder implements ICodeableConceptBuilder {
  private readonly codeableConcept: CodeableConcept;

  constructor() {
    super();
    this.codeableConcept = new CodeableConcept();
  }

  /**
   * @description Add a param extension to the codeable concept
   * @param {string} param The param to add the extension to
   * @param {IElement} extension The extension to add
   * @returns {CodeableConceptBuilder} The builder
   */
  addPrimitiveExtension(param: PrimitiveExtensionFields, extension: IElement): this {
    this.codeableConcept[param] = extension;

    return this;
  }

  addCoding(coding: ICoding): this {
    this.codeableConcept.coding = this.codeableConcept.coding || [];

    this.codeableConcept.coding.push(coding);
    return this;
  }

  setText(text: string): this {
    this.codeableConcept.text = text;
    return this;
  }

  build(): CodeableConcept {
    return Object.assign(this.codeableConcept, super.build());
  }
}
