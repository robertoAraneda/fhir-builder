import { IElement, ICoding, IQuantity, IReference } from 'fhirtypes/dist/r4';
import { IQuestionnaireEnableWhen, IOperationOutcome } from 'fhirtypes/dist/r4';
import { BackboneElement, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';
import { QuestionnaireEnableOperatorType } from 'fhirtypes/dist/r4/types';

/**
  * @version R4 (v4.0.1)
  * @summary FHIR® Specification by HL7®
  * @description Class for QuestionnaireEnableWhen BackboneElement
  undefined
  * @property {string} question
  * @property {IElement} _question
  * @property {string} operator
  * @property {IElement} _operator
  * @property {boolean} answerBoolean
  * @property {IElement} _answerBoolean
  * @property {number} answerDecimal
  * @property {IElement} _answerDecimal
  * @property {number} answerInteger
  * @property {IElement} _answerInteger
  * @property {string} answerDate
  * @property {IElement} _answerDate
  * @property {string} answerDateTime
  * @property {IElement} _answerDateTime
  * @property {string} answerTime
  * @property {IElement} _answerTime
  * @property {string} answerString
  * @property {IElement} _answerString
  * @property {ICoding} answerCoding
  * @property {IQuantity} answerQuantity
  * @property {IReference} answerReference
  * @author Roberto Araneda Espinoza
  */
export class QuestionnaireEnableWhen
  extends BackboneElement
  implements IQuestionnaireEnableWhen, IValidatable, ISerializable
{
  /**
   * @description The linkId for the question whose answer (or lack of answer) governs whether this item is enabled.
   */
  question: string;

  /**
   * @description Extensions for question
   */
  _question?: IElement;

  /**
   * @description Specifies the criteria by which the question is enabled.
   */
  operator: QuestionnaireEnableOperatorType;

  /**
   * @description Extensions for operator
   */
  _operator?: IElement;

  /**
   * @description A value that the referenced question is tested using the specified operator in order for the item to be enabled.
   */
  answerBoolean?: boolean;

  /**
   * @description Extensions for answerBoolean
   */
  _answerBoolean?: IElement;

  /**
   * @description A value that the referenced question is tested using the specified operator in order for the item to be enabled.
   */
  answerDecimal?: number;

  /**
   * @description Extensions for answerDecimal
   */
  _answerDecimal?: IElement;

  /**
   * @description A value that the referenced question is tested using the specified operator in order for the item to be enabled.
   */
  answerInteger?: number;

  /**
   * @description Extensions for answerInteger
   */
  _answerInteger?: IElement;

  /**
   * @description A value that the referenced question is tested using the specified operator in order for the item to be enabled.
   */
  answerDate?: string;

  /**
   * @description Extensions for answerDate
   */
  _answerDate?: IElement;

  /**
   * @description A value that the referenced question is tested using the specified operator in order for the item to be enabled.
   */
  answerDateTime?: string;

  /**
   * @description Extensions for answerDateTime
   */
  _answerDateTime?: IElement;

  /**
   * @description A value that the referenced question is tested using the specified operator in order for the item to be enabled.
   */
  answerTime?: string;

  /**
   * @description Extensions for answerTime
   */
  _answerTime?: IElement;

  /**
   * @description A value that the referenced question is tested using the specified operator in order for the item to be enabled.
   */
  answerString?: string;

  /**
   * @description Extensions for answerString
   */
  _answerString?: IElement;

  /**
   * @description A value that the referenced question is tested using the specified operator in order for the item to be enabled.
   */
  answerCoding?: ICoding;

  /**
   * @description A value that the referenced question is tested using the specified operator in order for the item to be enabled.
   */
  answerQuantity?: IQuantity;

  /**
   * @description A value that the referenced question is tested using the specified operator in order for the item to be enabled.
   */
  answerReference?: IReference;

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
    return `QuestionnaireEnableWhen${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `QuestionnaireEnableWhen${JSON.stringify(this.toJson(), null, 2)}`;
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
    return ConformanceValidator('QuestionnaireEnableWhen', this);
  }

  constructor(args?: IQuestionnaireEnableWhen) {
    super();
    if (args) Object.assign(this, args);
  }
}
