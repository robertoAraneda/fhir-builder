import { IElement, IQuestionnaireResponseAnswer, IQuestionnaireResponseItem } from 'fhirtypes/dist/r4';
import { QuestionnaireResponseItem } from '../../models';
import { BackboneBuilder, IBuildable } from '../base';
import { ExtractUnderscoreKeys } from '../../../core/commons/utils';

// Extract the keys that start with an underscore
type PrimitiveExtensionFields = ExtractUnderscoreKeys<QuestionnaireResponseItem>;

/**
 * @description Interface for chaining the building of a QuestionnaireResponseItem
 * @interface IQuestionnaireResponseItemBuilder
 * @extends {IBuildable<QuestionnaireResponseItem>}
 */
interface IQuestionnaireResponseItemBuilder extends IBuildable<QuestionnaireResponseItem> {
  setLinkId(value: string): this;
  setDefinition(value: string): this;
  setText(value: string): this;
  addAnswer(value: IQuestionnaireResponseAnswer): this;
  addItem(value: IQuestionnaireResponseItem): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a QuestionnaireResponseItem
 * @class QuestionnaireResponseItemBuilder
 * @extends {BackboneBuilder}
 * @implements {IQuestionnaireResponseItemBuilder}
 * @author Roberto Araneda Espinoza
 */
export class QuestionnaireResponseItemBuilder extends BackboneBuilder implements IQuestionnaireResponseItemBuilder {
  private readonly questionnaireResponseItem: QuestionnaireResponseItem;

  constructor() {
    super();
    this.questionnaireResponseItem = new QuestionnaireResponseItem();
  }

  /**
   * @description Adds a primitive extension to the element
   * @param param - the field to add the extension to
   * @param extension - the extension to add
   * @returns {this}
   * @example addPrimitiveExtension('_value', { value: 'test' })
   */
  addPrimitiveExtension(param: PrimitiveExtensionFields, extension: IElement): this {
    this.questionnaireResponseItem[param] = extension;
    return this;
  }

  /**
   * @description Builds the model
   * @returns {QuestionnaireResponseItem}
   */
  build(): QuestionnaireResponseItem {
    return Object.assign(this.questionnaireResponseItem, super.build());
  }

  /**
   * @description Sets the linkId value
   * @description The item from the Questionnaire that corresponds to this item in the QuestionnaireResponse resource.
   * @param value - the value to set
   * @returns {this}
   */
  setLinkId(value: string): this {
    this.questionnaireResponseItem.linkId = value;
    return this;
  }

  /**
   * @description Sets the definition value
   * @description A reference to an [[[ElementDefinition]]] that provides the details for the item.
   * @param value - the value to set
   * @returns {this}
   */
  setDefinition(value: string): this {
    this.questionnaireResponseItem.definition = value;
    return this;
  }

  /**
   * @description Sets the text value
   * @description Text that is displayed above the contents of the group or as the text of the question being answered.
   * @param value - the value to set
   * @returns {this}
   */
  setText(value: string): this {
    this.questionnaireResponseItem.text = value;
    return this;
  }

  /**
   * @description Adds a value to the answer array
   * @description The respondent's answer(s) to the question.
   * @param value - the value to add
   * @returns {this}
   */
  addAnswer(value: IQuestionnaireResponseAnswer): this {
    this.questionnaireResponseItem.answer = this.questionnaireResponseItem.answer || [];
    this.questionnaireResponseItem.answer.push(value);
    return this;
  }
  /**
   * @description Adds a value to the item array
   * @description Questions or sub-groups nested beneath a question or group.
   * @param value - the value to add
   * @returns {this}
   */
  addItem(value: IQuestionnaireResponseItem): this {
    this.questionnaireResponseItem.item = this.questionnaireResponseItem.item || [];
    this.questionnaireResponseItem.item.push(value);
    return this;
  }
}
