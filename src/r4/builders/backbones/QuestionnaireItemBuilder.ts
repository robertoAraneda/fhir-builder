import {
  IElement,
  ICoding,
  IQuestionnaireEnableWhen,
  IQuestionnaireAnswerOption,
  IQuestionnaireInitial,
  IQuestionnaireItem,
} from 'fhirtypes/dist/r4';
import { QuestionnaireItem } from '../../models';
import { BackboneBuilder, IBuildable } from '../base';
import { ExtractUnderscoreKeys } from '../../../core/commons/utils';
import { ItemTypeType, QuestionnaireEnableBehaviorType } from 'fhirtypes/dist/r4/types';

// Extract the keys that start with an underscore
type PrimitiveExtensionFields = ExtractUnderscoreKeys<QuestionnaireItem>;

/**
 * @description Interface for chaining the building of a QuestionnaireItem
 * @interface IQuestionnaireItemBuilder
 * @extends {IBuildable<QuestionnaireItem>}
 */
interface IQuestionnaireItemBuilder extends IBuildable<QuestionnaireItem> {
  setLinkId(value: string): this;
  setDefinition(value: string): this;
  addCode(value: ICoding): this;
  setPrefix(value: string): this;
  setText(value: string): this;
  setType(value: ItemTypeType): this;
  addEnableWhen(value: IQuestionnaireEnableWhen): this;
  setEnableBehavior(value: QuestionnaireEnableBehaviorType): this;
  setRequired(value: boolean): this;
  setRepeats(value: boolean): this;
  setReadOnly(value: boolean): this;
  setMaxLength(value: number): this;
  setAnswerValueSet(value: string): this;
  addAnswerOption(value: IQuestionnaireAnswerOption): this;
  addInitial(value: IQuestionnaireInitial): this;
  addItem(value: IQuestionnaireItem): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a QuestionnaireItem
 * @class QuestionnaireItemBuilder
 * @extends {BackboneBuilder}
 * @implements {IQuestionnaireItemBuilder}
 * @author Roberto Araneda Espinoza
 */
export class QuestionnaireItemBuilder extends BackboneBuilder implements IQuestionnaireItemBuilder {
  private readonly questionnaireItem: QuestionnaireItem;

  constructor() {
    super();
    this.questionnaireItem = new QuestionnaireItem();
  }

  /**
   * @description Adds a primitive extension to the element
   * @param param - the field to add the extension to
   * @param extension - the extension to add
   * @returns {this}
   * @example addPrimitiveExtension('_value', { value: 'test' })
   */
  addPrimitiveExtension(param: PrimitiveExtensionFields, extension: IElement): this {
    this.questionnaireItem[param] = extension;
    return this;
  }

  /**
   * @description Builds the model
   * @returns {QuestionnaireItem}
   */
  build(): QuestionnaireItem {
    return Object.assign(this.questionnaireItem, super.build());
  }

  /**
   * @description Sets the linkId value
   * @description An identifier that is unique within the Questionnaire allowing linkage to the equivalent item in a QuestionnaireResponse resource.
   * @param value - the value to set
   * @returns {this}
   */
  setLinkId(value: string): this {
    this.questionnaireItem.linkId = value;
    return this;
  }

  /**
    * @description Sets the definition value
    * @description This element is a URI that refers to an [[[ElementDefinition]]] that provides information about this item, including information that might otherwise be included in the instance of the Questionnaire resource. A detailed description of the construction of the URI is shown in Comments, below. If this element is present then the following element values MAY be derived from the Element Definition if the corresponding elements of this Questionnaire resource instance have no value:

* code (ElementDefinition.code) 
* type (ElementDefinition.type) 
* required (ElementDefinition.min) 
* repeats (ElementDefinition.max) 
* maxLength (ElementDefinition.maxLength) 
* answerValueSet (ElementDefinition.binding)
* options (ElementDefinition.binding).
    * @param value - the value to set
    * @returns {this}
    */
  setDefinition(value: string): this {
    this.questionnaireItem.definition = value;
    return this;
  }

  /**
   * @description Adds a value to the code array
   * @description A terminology code that corresponds to this group or question (e.g. a code from LOINC, which defines many questions and answers).
   * @param value - the value to add
   * @returns {this}
   */
  addCode(value: ICoding): this {
    this.questionnaireItem.code = this.questionnaireItem.code || [];
    this.questionnaireItem.code.push(value);
    return this;
  }
  /**
   * @description Sets the prefix value
   * @description A short label for a particular group, question or set of display text within the questionnaire used for reference by the individual completing the questionnaire.
   * @param value - the value to set
   * @returns {this}
   */
  setPrefix(value: string): this {
    this.questionnaireItem.prefix = value;
    return this;
  }

  /**
   * @description Sets the text value
   * @description The name of a section, the text of a question or text content for a display item.
   * @param value - the value to set
   * @returns {this}
   */
  setText(value: string): this {
    this.questionnaireItem.text = value;
    return this;
  }

  /**
   * @description Sets the type value
   * @description The type of questionnaire item this is - whether text for display, a grouping of other items or a particular type of data to be captured (string, integer, coded choice, etc.).
   * @param value - the value to set
   * @returns {this}
   */
  setType(value: ItemTypeType): this {
    this.questionnaireItem.type = value;
    return this;
  }

  /**
   * @description Adds a value to the enableWhen array
   * @description A constraint indicating that this item should only be enabled (displayed/allow answers to be captured) when the specified condition is true.
   * @param value - the value to add
   * @returns {this}
   */
  addEnableWhen(value: IQuestionnaireEnableWhen): this {
    this.questionnaireItem.enableWhen = this.questionnaireItem.enableWhen || [];
    this.questionnaireItem.enableWhen.push(value);
    return this;
  }
  /**
   * @description Sets the enableBehavior value
   * @description Controls how multiple enableWhen values are interpreted -  whether all or any must be true.
   * @param value - the value to set
   * @returns {this}
   */
  setEnableBehavior(value: QuestionnaireEnableBehaviorType): this {
    this.questionnaireItem.enableBehavior = value;
    return this;
  }

  /**
   * @description Sets the required value
   * @description An indication, if true, that the item must be present in a "completed" QuestionnaireResponse.  If false, the item may be skipped when answering the questionnaire.
   * @param value - the value to set
   * @returns {this}
   */
  setRequired(value: boolean): this {
    this.questionnaireItem.required = value;
    return this;
  }

  /**
   * @description Sets the repeats value
   * @description An indication, if true, that the item may occur multiple times in the response, collecting multiple answers for questions or multiple sets of answers for groups.
   * @param value - the value to set
   * @returns {this}
   */
  setRepeats(value: boolean): this {
    this.questionnaireItem.repeats = value;
    return this;
  }

  /**
   * @description Sets the readOnly value
   * @description An indication, when true, that the value cannot be changed by a human respondent to the Questionnaire.
   * @param value - the value to set
   * @returns {this}
   */
  setReadOnly(value: boolean): this {
    this.questionnaireItem.readOnly = value;
    return this;
  }

  /**
   * @description Sets the maxLength value
   * @description The maximum number of characters that are permitted in the answer to be considered a "valid" QuestionnaireResponse.
   * @param value - the value to set
   * @returns {this}
   */
  setMaxLength(value: number): this {
    this.questionnaireItem.maxLength = value;
    return this;
  }

  /**
   * @description Sets the answerValueSet value
   * @description A reference to a value set containing a list of codes representing permitted answers for a "choice" or "open-choice" question.
   * @param value - the value to set
   * @returns {this}
   */
  setAnswerValueSet(value: string): this {
    this.questionnaireItem.answerValueSet = value;
    return this;
  }

  /**
   * @description Adds a value to the answerOption array
   * @description One of the permitted answers for a "choice" or "open-choice" question.
   * @param value - the value to add
   * @returns {this}
   */
  addAnswerOption(value: IQuestionnaireAnswerOption): this {
    this.questionnaireItem.answerOption = this.questionnaireItem.answerOption || [];
    this.questionnaireItem.answerOption.push(value);
    return this;
  }
  /**
   * @description Adds a value to the initial array
   * @description One or more values that should be pre-populated in the answer when initially rendering the questionnaire for user input.
   * @param value - the value to add
   * @returns {this}
   */
  addInitial(value: IQuestionnaireInitial): this {
    this.questionnaireItem.initial = this.questionnaireItem.initial || [];
    this.questionnaireItem.initial.push(value);
    return this;
  }
  /**
   * @description Adds a value to the item array
   * @description Text, questions and other groups to be nested beneath a question or group.
   * @param value - the value to add
   * @returns {this}
   */
  addItem(value: IQuestionnaireItem): this {
    this.questionnaireItem.item = this.questionnaireItem.item || [];
    this.questionnaireItem.item.push(value);
    return this;
  }
}
