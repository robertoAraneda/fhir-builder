import { IElement, ICoding, IReference } from 'fhirtypes/dist/r4';
import { QuestionnaireAnswerOption } from '../../models';
import { BackboneBuilder, IBuildable } from '../base';
import { ExtractUnderscoreKeys } from '../../../core/commons/utils';

// Extract the keys that start with an underscore
type PrimitiveExtensionFields = ExtractUnderscoreKeys<QuestionnaireAnswerOption>;

/**
 * @description Interface for chaining the building of a QuestionnaireAnswerOption
 * @interface IQuestionnaireAnswerOptionBuilder
 * @extends {IBuildable<QuestionnaireAnswerOption>}
 */
interface IQuestionnaireAnswerOptionBuilder extends IBuildable<QuestionnaireAnswerOption> {
  setValueInteger(value: number): this;
  setValueDate(value: string): this;
  setValueTime(value: string): this;
  setValueString(value: string): this;
  setValueCoding(value: ICoding): this;
  setValueReference(value: IReference): this;
  setInitialSelected(value: boolean): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a QuestionnaireAnswerOption
 * @class QuestionnaireAnswerOptionBuilder
 * @extends {BackboneBuilder}
 * @implements {IQuestionnaireAnswerOptionBuilder}
 * @author Roberto Araneda Espinoza
 */
export class QuestionnaireAnswerOptionBuilder extends BackboneBuilder implements IQuestionnaireAnswerOptionBuilder {
  private readonly questionnaireAnswerOption: QuestionnaireAnswerOption;

  constructor() {
    super();
    this.questionnaireAnswerOption = new QuestionnaireAnswerOption();
  }

  /**
   * @description Adds a primitive extension to the element
   * @param param - the field to add the extension to
   * @param extension - the extension to add
   * @returns {this}
   * @example addPrimitiveExtension('_value', { value: 'test' })
   */
  addPrimitiveExtension(param: PrimitiveExtensionFields, extension: IElement): this {
    this.questionnaireAnswerOption[param] = extension;
    return this;
  }

  /**
   * @description Builds the model
   * @returns {QuestionnaireAnswerOption}
   */
  build(): QuestionnaireAnswerOption {
    return Object.assign(this.questionnaireAnswerOption, super.build());
  }

  /**
   * @description Sets the valueInteger value
   * @description A potential answer that's allowed as the answer to this question.
   * @param value - the value to set
   * @returns {this}
   */
  setValueInteger(value: number): this {
    this.questionnaireAnswerOption.valueInteger = value;
    return this;
  }

  /**
   * @description Sets the valueDate value
   * @description A potential answer that's allowed as the answer to this question.
   * @param value - the value to set
   * @returns {this}
   */
  setValueDate(value: string): this {
    this.questionnaireAnswerOption.valueDate = value;
    return this;
  }

  /**
   * @description Sets the valueTime value
   * @description A potential answer that's allowed as the answer to this question.
   * @param value - the value to set
   * @returns {this}
   */
  setValueTime(value: string): this {
    this.questionnaireAnswerOption.valueTime = value;
    return this;
  }

  /**
   * @description Sets the valueString value
   * @description A potential answer that's allowed as the answer to this question.
   * @param value - the value to set
   * @returns {this}
   */
  setValueString(value: string): this {
    this.questionnaireAnswerOption.valueString = value;
    return this;
  }

  /**
   * @description Sets the valueCoding value
   * @description A potential answer that's allowed as the answer to this question.
   * @param value - the value to set
   * @returns {this}
   */
  setValueCoding(value: ICoding): this {
    this.questionnaireAnswerOption.valueCoding = value;
    return this;
  }

  /**
   * @description Sets the valueReference value
   * @description A potential answer that's allowed as the answer to this question.
   * @param value - the value to set
   * @returns {this}
   */
  setValueReference(value: IReference): this {
    this.questionnaireAnswerOption.valueReference = value;
    return this;
  }

  /**
   * @description Sets the initialSelected value
   * @description Indicates whether the answer value is selected when the list of possible answers is initially shown.
   * @param value - the value to set
   * @returns {this}
   */
  setInitialSelected(value: boolean): this {
    this.questionnaireAnswerOption.initialSelected = value;
    return this;
  }
}
