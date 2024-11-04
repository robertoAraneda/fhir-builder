import {
  IElement,
  ICoding,
  IQuestionnaireEnableWhen,
  IQuestionnaireAnswerOption,
  IQuestionnaireInitial,
} from 'fhirtypes/dist/r4';
import { IQuestionnaireItem, IOperationOutcome } from 'fhirtypes/dist/r4';
import { BackboneElement, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';
import { ItemTypeType, QuestionnaireEnableBehaviorType } from 'fhirtypes/dist/r4/types';

/**
  * @version R4 (v4.0.1)
  * @summary FHIR® Specification by HL7®
  * @description Class for QuestionnaireItem BackboneElement
  undefined
  * @property {string} linkId
  * @property {IElement} _linkId
  * @property {string} definition
  * @property {IElement} _definition
  * @property {ICoding[]} code
  * @property {string} prefix
  * @property {IElement} _prefix
  * @property {string} text
  * @property {IElement} _text
  * @property {string} type
  * @property {IElement} _type
  * @property {IQuestionnaireEnableWhen[]} enableWhen
  * @property {string} enableBehavior
  * @property {IElement} _enableBehavior
  * @property {boolean} required
  * @property {IElement} _required
  * @property {boolean} repeats
  * @property {IElement} _repeats
  * @property {boolean} readOnly
  * @property {IElement} _readOnly
  * @property {number} maxLength
  * @property {IElement} _maxLength
  * @property {string} answerValueSet
  * @property {IQuestionnaireAnswerOption[]} answerOption
  * @property {IQuestionnaireInitial[]} initial
  * @property {IQuestionnaireItem[]} item
  * @author Roberto Araneda Espinoza
  */
export class QuestionnaireItem extends BackboneElement implements IQuestionnaireItem, IValidatable, ISerializable {
  /**
   * @description An identifier that is unique within the Questionnaire allowing linkage to the equivalent item in a QuestionnaireResponse resource.
   */
  linkId: string;

  /**
   * @description Extensions for linkId
   */
  _linkId?: IElement;

  /**
   * @description This element is a URI that refers to an [[[ElementDefinition]]] that provides information about this item, including information that might otherwise be included in the instance of the Questionnaire resource. A detailed description of the construction of the URI is shown in Comments, below. If this element is present then the following element values MAY be derived from the Element Definition if the corresponding elements of this Questionnaire resource instance have no value:

* code (ElementDefinition.code) 
* type (ElementDefinition.type) 
* required (ElementDefinition.min) 
* repeats (ElementDefinition.max) 
* maxLength (ElementDefinition.maxLength) 
* answerValueSet (ElementDefinition.binding)
* options (ElementDefinition.binding).
   */
  definition?: string;

  /**
   * @description Extensions for definition
   */
  _definition?: IElement;

  /**
   * @description A terminology code that corresponds to this group or question (e.g. a code from LOINC, which defines many questions and answers).
   */
  code?: ICoding[];

  /**
   * @description A short label for a particular group, question or set of display text within the questionnaire used for reference by the individual completing the questionnaire.
   */
  prefix?: string;

  /**
   * @description Extensions for prefix
   */
  _prefix?: IElement;

  /**
   * @description The name of a section, the text of a question or text content for a display item.
   */
  text?: string;

  /**
   * @description Extensions for text
   */
  _text?: IElement;

  /**
   * @description The type of questionnaire item this is - whether text for display, a grouping of other items or a particular type of data to be captured (string, integer, coded choice, etc.).
   */
  type: ItemTypeType;

  /**
   * @description Extensions for type
   */
  _type?: IElement;

  /**
   * @description A constraint indicating that this item should only be enabled (displayed/allow answers to be captured) when the specified condition is true.
   */
  enableWhen?: IQuestionnaireEnableWhen[];

  /**
   * @description Controls how multiple enableWhen values are interpreted -  whether all or any must be true.
   */
  enableBehavior?: QuestionnaireEnableBehaviorType;

  /**
   * @description Extensions for enableBehavior
   */
  _enableBehavior?: IElement;

  /**
   * @description An indication, if true, that the item must be present in a "completed" QuestionnaireResponse.  If false, the item may be skipped when answering the questionnaire.
   */
  required?: boolean;

  /**
   * @description Extensions for required
   */
  _required?: IElement;

  /**
   * @description An indication, if true, that the item may occur multiple times in the response, collecting multiple answers for questions or multiple sets of answers for groups.
   */
  repeats?: boolean;

  /**
   * @description Extensions for repeats
   */
  _repeats?: IElement;

  /**
   * @description An indication, when true, that the value cannot be changed by a human respondent to the Questionnaire.
   */
  readOnly?: boolean;

  /**
   * @description Extensions for readOnly
   */
  _readOnly?: IElement;

  /**
   * @description The maximum number of characters that are permitted in the answer to be considered a "valid" QuestionnaireResponse.
   */
  maxLength?: number;

  /**
   * @description Extensions for maxLength
   */
  _maxLength?: IElement;

  /**
   * @description A reference to a value set containing a list of codes representing permitted answers for a "choice" or "open-choice" question.
   */
  answerValueSet?: string;

  /**
   * @description One of the permitted answers for a "choice" or "open-choice" question.
   */
  answerOption?: IQuestionnaireAnswerOption[];

  /**
   * @description One or more values that should be pre-populated in the answer when initially rendering the questionnaire for user input.
   */
  initial?: IQuestionnaireInitial[];

  /**
   * @description Text, questions and other groups to be nested beneath a question or group.
   */
  item?: IQuestionnaireItem[];

  /**
   * @description Returns a JSON representation of the model
   * @returns {Record<string, any>}
   */
  toJson(): Record<string, any> {
    return JSON.parse(JSON.stringify(this));
  }

  /**
   * @description Returns a string representation of the model
   * @returns {string}
   */
  toString(): string {
    return `QuestionnaireItem${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `QuestionnaireItem${JSON.stringify(this.toJson(), null, 2)}`;
  }

  /**
   * @description Returns a serialized string representation of the model
   * @returns {string}
   */
  serialize(): string {
    return JSON.stringify(this.toJson());
  }

  /**
   * @description Validates the model
   * @returns {isValid: boolean, operationOutcome: IOperationOutcome}
   */
  validate(): { isValid: boolean; operationOutcome: IOperationOutcome } {
    return ConformanceValidator('QuestionnaireItem', this);
  }

  constructor(args?: IQuestionnaireItem) {
    super();
    if (args) Object.assign(this, args);
  }
}
