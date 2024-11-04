import { IElement, ICoding, IQuantity, IReference } from 'fhirtypes/dist/r4';
import { QuestionnaireEnableWhen } from '../../models';
import { BackboneBuilder, IBuildable } from '../base';
import { ExtractUnderscoreKeys } from '../../../core/commons/utils';
import { QuestionnaireEnableOperatorType } from 'fhirtypes/dist/r4/types';

// Extract the keys that start with an underscore
type PrimitiveExtensionFields = ExtractUnderscoreKeys<QuestionnaireEnableWhen>;

/**
 * @description Interface for chaining the building of a QuestionnaireEnableWhen
 * @interface IQuestionnaireEnableWhenBuilder
 * @extends {IBuildable<QuestionnaireEnableWhen>}
 */
interface IQuestionnaireEnableWhenBuilder extends IBuildable<QuestionnaireEnableWhen> {
  setQuestion(value: string): this;
  setOperator(value: QuestionnaireEnableOperatorType): this;
  setAnswerBoolean(value: boolean): this;
  setAnswerDecimal(value: number): this;
  setAnswerInteger(value: number): this;
  setAnswerDate(value: string): this;
  setAnswerDateTime(value: string): this;
  setAnswerTime(value: string): this;
  setAnswerString(value: string): this;
  setAnswerCoding(value: ICoding): this;
  setAnswerQuantity(value: IQuantity): this;
  setAnswerReference(value: IReference): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a QuestionnaireEnableWhen
 * @class QuestionnaireEnableWhenBuilder
 * @extends {BackboneBuilder}
 * @implements {IQuestionnaireEnableWhenBuilder}
 * @author Roberto Araneda Espinoza
 */
export class QuestionnaireEnableWhenBuilder extends BackboneBuilder implements IQuestionnaireEnableWhenBuilder {
  private readonly questionnaireEnableWhen: QuestionnaireEnableWhen;

  constructor() {
    super();
    this.questionnaireEnableWhen = new QuestionnaireEnableWhen();
  }

  /**
   * @description Adds a primitive extension to the element
   * @param param - the field to add the extension to
   * @param extension - the extension to add
   * @returns {this}
   * @example addPrimitiveExtension('_value', { value: 'test' })
   */
  addPrimitiveExtension(param: PrimitiveExtensionFields, extension: IElement): this {
    this.questionnaireEnableWhen[param] = extension;
    return this;
  }

  /**
   * @description Builds the model
   * @returns {QuestionnaireEnableWhen}
   */
  build(): QuestionnaireEnableWhen {
    return Object.assign(this.questionnaireEnableWhen, super.build());
  }

  /**
   * @description Sets the question value
   * @description The linkId for the question whose answer (or lack of answer) governs whether this item is enabled.
   * @param value - the value to set
   * @returns {this}
   */
  setQuestion(value: string): this {
    this.questionnaireEnableWhen.question = value;
    return this;
  }

  /**
   * @description Sets the operator value
   * @description Specifies the criteria by which the question is enabled.
   * @param value - the value to set
   * @returns {this}
   */
  setOperator(value: QuestionnaireEnableOperatorType): this {
    this.questionnaireEnableWhen.operator = value;
    return this;
  }

  /**
   * @description Sets the answerBoolean value
   * @description A value that the referenced question is tested using the specified operator in order for the item to be enabled.
   * @param value - the value to set
   * @returns {this}
   */
  setAnswerBoolean(value: boolean): this {
    this.questionnaireEnableWhen.answerBoolean = value;
    return this;
  }

  /**
   * @description Sets the answerDecimal value
   * @description A value that the referenced question is tested using the specified operator in order for the item to be enabled.
   * @param value - the value to set
   * @returns {this}
   */
  setAnswerDecimal(value: number): this {
    this.questionnaireEnableWhen.answerDecimal = value;
    return this;
  }

  /**
   * @description Sets the answerInteger value
   * @description A value that the referenced question is tested using the specified operator in order for the item to be enabled.
   * @param value - the value to set
   * @returns {this}
   */
  setAnswerInteger(value: number): this {
    this.questionnaireEnableWhen.answerInteger = value;
    return this;
  }

  /**
   * @description Sets the answerDate value
   * @description A value that the referenced question is tested using the specified operator in order for the item to be enabled.
   * @param value - the value to set
   * @returns {this}
   */
  setAnswerDate(value: string): this {
    this.questionnaireEnableWhen.answerDate = value;
    return this;
  }

  /**
   * @description Sets the answerDateTime value
   * @description A value that the referenced question is tested using the specified operator in order for the item to be enabled.
   * @param value - the value to set
   * @returns {this}
   */
  setAnswerDateTime(value: string): this {
    this.questionnaireEnableWhen.answerDateTime = value;
    return this;
  }

  /**
   * @description Sets the answerTime value
   * @description A value that the referenced question is tested using the specified operator in order for the item to be enabled.
   * @param value - the value to set
   * @returns {this}
   */
  setAnswerTime(value: string): this {
    this.questionnaireEnableWhen.answerTime = value;
    return this;
  }

  /**
   * @description Sets the answerString value
   * @description A value that the referenced question is tested using the specified operator in order for the item to be enabled.
   * @param value - the value to set
   * @returns {this}
   */
  setAnswerString(value: string): this {
    this.questionnaireEnableWhen.answerString = value;
    return this;
  }

  /**
   * @description Sets the answerCoding value
   * @description A value that the referenced question is tested using the specified operator in order for the item to be enabled.
   * @param value - the value to set
   * @returns {this}
   */
  setAnswerCoding(value: ICoding): this {
    this.questionnaireEnableWhen.answerCoding = value;
    return this;
  }

  /**
   * @description Sets the answerQuantity value
   * @description A value that the referenced question is tested using the specified operator in order for the item to be enabled.
   * @param value - the value to set
   * @returns {this}
   */
  setAnswerQuantity(value: IQuantity): this {
    this.questionnaireEnableWhen.answerQuantity = value;
    return this;
  }

  /**
   * @description Sets the answerReference value
   * @description A value that the referenced question is tested using the specified operator in order for the item to be enabled.
   * @param value - the value to set
   * @returns {this}
   */
  setAnswerReference(value: IReference): this {
    this.questionnaireEnableWhen.answerReference = value;
    return this;
  }
}
