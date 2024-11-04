import { IElement, IAttachment, ICoding, IQuantity, IReference } from 'fhirtypes/dist/r4';
import { QuestionnaireInitial } from '../../models';
import { BackboneBuilder, IBuildable } from '../base';
import { ExtractUnderscoreKeys } from '../../../core/commons/utils';

// Extract the keys that start with an underscore
type PrimitiveExtensionFields = ExtractUnderscoreKeys<QuestionnaireInitial>;

/**
 * @description Interface for chaining the building of a QuestionnaireInitial
 * @interface IQuestionnaireInitialBuilder
 * @extends {IBuildable<QuestionnaireInitial>}
 */
interface IQuestionnaireInitialBuilder extends IBuildable<QuestionnaireInitial> {
  setValueBoolean(value: boolean): this;
  setValueDecimal(value: number): this;
  setValueInteger(value: number): this;
  setValueDate(value: string): this;
  setValueDateTime(value: string): this;
  setValueTime(value: string): this;
  setValueString(value: string): this;
  setValueUri(value: string): this;
  setValueAttachment(value: IAttachment): this;
  setValueCoding(value: ICoding): this;
  setValueQuantity(value: IQuantity): this;
  setValueReference(value: IReference): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a QuestionnaireInitial
 * @class QuestionnaireInitialBuilder
 * @extends {BackboneBuilder}
 * @implements {IQuestionnaireInitialBuilder}
 * @author Roberto Araneda Espinoza
 */
export class QuestionnaireInitialBuilder extends BackboneBuilder implements IQuestionnaireInitialBuilder {
  private readonly questionnaireInitial: QuestionnaireInitial;

  constructor() {
    super();
    this.questionnaireInitial = new QuestionnaireInitial();
  }

  /**
   * @description Adds a primitive extension to the element
   * @param param - the field to add the extension to
   * @param extension - the extension to add
   * @returns {this}
   * @example addPrimitiveExtension('_value', { value: 'test' })
   */
  addPrimitiveExtension(param: PrimitiveExtensionFields, extension: IElement): this {
    this.questionnaireInitial[param] = extension;
    return this;
  }

  /**
   * @description Builds the model
   * @returns {QuestionnaireInitial}
   */
  build(): QuestionnaireInitial {
    return Object.assign(this.questionnaireInitial, super.build());
  }

  /**
   * @description Sets the valueBoolean value
   * @description The actual value to for an initial answer.
   * @param value - the value to set
   * @returns {this}
   */
  setValueBoolean(value: boolean): this {
    this.questionnaireInitial.valueBoolean = value;
    return this;
  }

  /**
   * @description Sets the valueDecimal value
   * @description The actual value to for an initial answer.
   * @param value - the value to set
   * @returns {this}
   */
  setValueDecimal(value: number): this {
    this.questionnaireInitial.valueDecimal = value;
    return this;
  }

  /**
   * @description Sets the valueInteger value
   * @description The actual value to for an initial answer.
   * @param value - the value to set
   * @returns {this}
   */
  setValueInteger(value: number): this {
    this.questionnaireInitial.valueInteger = value;
    return this;
  }

  /**
   * @description Sets the valueDate value
   * @description The actual value to for an initial answer.
   * @param value - the value to set
   * @returns {this}
   */
  setValueDate(value: string): this {
    this.questionnaireInitial.valueDate = value;
    return this;
  }

  /**
   * @description Sets the valueDateTime value
   * @description The actual value to for an initial answer.
   * @param value - the value to set
   * @returns {this}
   */
  setValueDateTime(value: string): this {
    this.questionnaireInitial.valueDateTime = value;
    return this;
  }

  /**
   * @description Sets the valueTime value
   * @description The actual value to for an initial answer.
   * @param value - the value to set
   * @returns {this}
   */
  setValueTime(value: string): this {
    this.questionnaireInitial.valueTime = value;
    return this;
  }

  /**
   * @description Sets the valueString value
   * @description The actual value to for an initial answer.
   * @param value - the value to set
   * @returns {this}
   */
  setValueString(value: string): this {
    this.questionnaireInitial.valueString = value;
    return this;
  }

  /**
   * @description Sets the valueUri value
   * @description The actual value to for an initial answer.
   * @param value - the value to set
   * @returns {this}
   */
  setValueUri(value: string): this {
    this.questionnaireInitial.valueUri = value;
    return this;
  }

  /**
   * @description Sets the valueAttachment value
   * @description The actual value to for an initial answer.
   * @param value - the value to set
   * @returns {this}
   */
  setValueAttachment(value: IAttachment): this {
    this.questionnaireInitial.valueAttachment = value;
    return this;
  }

  /**
   * @description Sets the valueCoding value
   * @description The actual value to for an initial answer.
   * @param value - the value to set
   * @returns {this}
   */
  setValueCoding(value: ICoding): this {
    this.questionnaireInitial.valueCoding = value;
    return this;
  }

  /**
   * @description Sets the valueQuantity value
   * @description The actual value to for an initial answer.
   * @param value - the value to set
   * @returns {this}
   */
  setValueQuantity(value: IQuantity): this {
    this.questionnaireInitial.valueQuantity = value;
    return this;
  }

  /**
   * @description Sets the valueReference value
   * @description The actual value to for an initial answer.
   * @param value - the value to set
   * @returns {this}
   */
  setValueReference(value: IReference): this {
    this.questionnaireInitial.valueReference = value;
    return this;
  }
}
