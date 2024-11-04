import {
  IElement,
  IQuestionnaireResponseAnswer,
  IQuestionnaireResponseItem,
  IOperationOutcome,
} from 'fhirtypes/dist/r4';
import { BackboneElement, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';

/**
  * @version R4 (v4.0.1)
  * @summary FHIR® Specification by HL7®
  * @description Class for QuestionnaireResponseItem BackboneElement
  undefined
  * @property {string} linkId
  * @property {IElement} _linkId
  * @property {string} definition
  * @property {IElement} _definition
  * @property {string} text
  * @property {IElement} _text
  * @property {IQuestionnaireResponseAnswer[]} answer
  * @property {IQuestionnaireResponseItem[]} item
  * @author Roberto Araneda Espinoza
  */
export class QuestionnaireResponseItem
  extends BackboneElement
  implements IQuestionnaireResponseItem, IValidatable, ISerializable
{
  /**
   * @description The item from the Questionnaire that corresponds to this item in the QuestionnaireResponse resource.
   */
  linkId: string;

  /**
   * @description Extensions for linkId
   */
  _linkId?: IElement;

  /**
   * @description A reference to an [[[ElementDefinition]]] that provides the details for the item.
   */
  definition?: string;

  /**
   * @description Extensions for definition
   */
  _definition?: IElement;

  /**
   * @description Text that is displayed above the contents of the group or as the text of the question being answered.
   */
  text?: string;

  /**
   * @description Extensions for text
   */
  _text?: IElement;

  /**
   * @description The respondent's answer(s) to the question.
   */
  answer?: IQuestionnaireResponseAnswer[];

  /**
   * @description Questions or sub-groups nested beneath a question or group.
   */
  item?: IQuestionnaireResponseItem[];

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
    return `QuestionnaireResponseItem${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `QuestionnaireResponseItem${JSON.stringify(this.toJson(), null, 2)}`;
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
    return ConformanceValidator('QuestionnaireResponseItem', this);
  }

  constructor(args?: IQuestionnaireResponseItem) {
    super();
    if (args) Object.assign(this, args);
  }
}
