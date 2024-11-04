import { IElement, IAttachment, ICoding, IQuantity, IReference, IQuestionnaireResponseItem } from 'fhirtypes/dist/r4';
import { QuestionnaireResponseAnswer } from '../../models';
import { BackboneBuilder, IBuildable } from '../base';
import { ExtractUnderscoreKeys } from '../../../core/commons/utils';

// Extract the keys that start with an underscore
type PrimitiveExtensionFields = ExtractUnderscoreKeys<QuestionnaireResponseAnswer>;

/**
 * @description Interface for chaining the building of a QuestionnaireResponseAnswer
 * @interface IQuestionnaireResponseAnswerBuilder
 * @extends {IBuildable<QuestionnaireResponseAnswer>}
 */
interface IQuestionnaireResponseAnswerBuilder extends IBuildable<QuestionnaireResponseAnswer> {
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
  addItem(value: IQuestionnaireResponseItem): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a QuestionnaireResponseAnswer
 * @class QuestionnaireResponseAnswerBuilder
 * @extends {BackboneBuilder}
 * @implements {IQuestionnaireResponseAnswerBuilder}
 * @author Roberto Araneda Espinoza
 */
export class QuestionnaireResponseAnswerBuilder extends BackboneBuilder implements IQuestionnaireResponseAnswerBuilder {
  private readonly questionnaireResponseAnswer: QuestionnaireResponseAnswer;

  constructor() {
    super();
    this.questionnaireResponseAnswer = new QuestionnaireResponseAnswer();
  }

  /**
   * @description Adds a primitive extension to the element
   * @param param - the field to add the extension to
   * @param extension - the extension to add
   * @returns {this}
   * @example addPrimitiveExtension('_value', { value: 'test' })
   */
  addPrimitiveExtension(param: PrimitiveExtensionFields, extension: IElement): this {
    this.questionnaireResponseAnswer[param] = extension;
    return this;
  }

  /**
   * @description Builds the model
   * @returns {QuestionnaireResponseAnswer}
   */
  build(): QuestionnaireResponseAnswer {
    return Object.assign(this.questionnaireResponseAnswer, super.build());
  }

  /**
   * @description Sets the valueBoolean value
   * @description The answer (or one of the answers) provided by the respondent to the question.
   * @param value - the value to set
   * @returns {this}
   */
  setValueBoolean(value: boolean): this {
    this.questionnaireResponseAnswer.valueBoolean = value;
    return this;
  }

  /**
   * @description Sets the valueDecimal value
   * @description The answer (or one of the answers) provided by the respondent to the question.
   * @param value - the value to set
   * @returns {this}
   */
  setValueDecimal(value: number): this {
    this.questionnaireResponseAnswer.valueDecimal = value;
    return this;
  }

  /**
   * @description Sets the valueInteger value
   * @description The answer (or one of the answers) provided by the respondent to the question.
   * @param value - the value to set
   * @returns {this}
   */
  setValueInteger(value: number): this {
    this.questionnaireResponseAnswer.valueInteger = value;
    return this;
  }

  /**
   * @description Sets the valueDate value
   * @description The answer (or one of the answers) provided by the respondent to the question.
   * @param value - the value to set
   * @returns {this}
   */
  setValueDate(value: string): this {
    this.questionnaireResponseAnswer.valueDate = value;
    return this;
  }

  /**
   * @description Sets the valueDateTime value
   * @description The answer (or one of the answers) provided by the respondent to the question.
   * @param value - the value to set
   * @returns {this}
   */
  setValueDateTime(value: string): this {
    this.questionnaireResponseAnswer.valueDateTime = value;
    return this;
  }

  /**
   * @description Sets the valueTime value
   * @description The answer (or one of the answers) provided by the respondent to the question.
   * @param value - the value to set
   * @returns {this}
   */
  setValueTime(value: string): this {
    this.questionnaireResponseAnswer.valueTime = value;
    return this;
  }

  /**
   * @description Sets the valueString value
   * @description The answer (or one of the answers) provided by the respondent to the question.
   * @param value - the value to set
   * @returns {this}
   */
  setValueString(value: string): this {
    this.questionnaireResponseAnswer.valueString = value;
    return this;
  }

  /**
   * @description Sets the valueUri value
   * @description The answer (or one of the answers) provided by the respondent to the question.
   * @param value - the value to set
   * @returns {this}
   */
  setValueUri(value: string): this {
    this.questionnaireResponseAnswer.valueUri = value;
    return this;
  }

  /**
   * @description Sets the valueAttachment value
   * @description The answer (or one of the answers) provided by the respondent to the question.
   * @param value - the value to set
   * @returns {this}
   */
  setValueAttachment(value: IAttachment): this {
    this.questionnaireResponseAnswer.valueAttachment = value;
    return this;
  }

  /**
   * @description Sets the valueCoding value
   * @description The answer (or one of the answers) provided by the respondent to the question.
   * @param value - the value to set
   * @returns {this}
   */
  setValueCoding(value: ICoding): this {
    this.questionnaireResponseAnswer.valueCoding = value;
    return this;
  }

  /**
   * @description Sets the valueQuantity value
   * @description The answer (or one of the answers) provided by the respondent to the question.
   * @param value - the value to set
   * @returns {this}
   */
  setValueQuantity(value: IQuantity): this {
    this.questionnaireResponseAnswer.valueQuantity = value;
    return this;
  }

  /**
   * @description Sets the valueReference value
   * @description The answer (or one of the answers) provided by the respondent to the question.
   * @param value - the value to set
   * @returns {this}
   */
  setValueReference(value: IReference): this {
    this.questionnaireResponseAnswer.valueReference = value;
    return this;
  }

  /**
   * @description Adds a value to the item array
   * @description Nested groups and/or questions found within this particular answer.
   * @param value - the value to add
   * @returns {this}
   */
  addItem(value: IQuestionnaireResponseItem): this {
    this.questionnaireResponseAnswer.item = this.questionnaireResponseAnswer.item || [];
    this.questionnaireResponseAnswer.item.push(value);
    return this;
  }
}
