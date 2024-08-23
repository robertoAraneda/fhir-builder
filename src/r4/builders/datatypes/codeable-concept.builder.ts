import { ICoding, IElement, IExtension } from 'fhirtypes/dist/r4';
import { CodeableConcept } from '../../models';
import { IElementBuilder } from '../base/element-builder.interface';
import { IBuildable } from '../base/buildable.interface';
import { UnderscoreKeys } from '../base/resource-type-map.interface';

type PrimitiveExtensionFields = keyof Pick<CodeableConcept, UnderscoreKeys<CodeableConcept>>;

interface ICodeableConceptBuilder extends IElementBuilder, IBuildable<CodeableConcept> {
  addCoding(coding: ICoding): this;
  setText(text: string): this;
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
    return this.codeableConcept;
  }
}
