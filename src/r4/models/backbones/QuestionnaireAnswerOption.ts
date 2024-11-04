import { IElement, ICoding, IReference } from 'fhirtypes/dist/r4';
import { IQuestionnaireAnswerOption, IOperationOutcome } from 'fhirtypes/dist/r4';
import { BackboneElement, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';

/**
  * @version R4 (v4.0.1)
  * @summary FHIR® Specification by HL7®
  * @description Class for QuestionnaireAnswerOption BackboneElement
  undefined
  * @property {number} valueInteger
  * @property {IElement} _valueInteger
  * @property {string} valueDate
  * @property {IElement} _valueDate
  * @property {string} valueTime
  * @property {IElement} _valueTime
  * @property {string} valueString
  * @property {IElement} _valueString
  * @property {ICoding} valueCoding
  * @property {IReference} valueReference
  * @property {boolean} initialSelected
  * @property {IElement} _initialSelected
  * @author Roberto Araneda Espinoza
  */
export class QuestionnaireAnswerOption
  extends BackboneElement
  implements IQuestionnaireAnswerOption, IValidatable, ISerializable
{
  /**
   * @description A potential answer that's allowed as the answer to this question.
   */
  valueInteger?: number;

  /**
   * @description Extensions for valueInteger
   */
  _valueInteger?: IElement;

  /**
   * @description A potential answer that's allowed as the answer to this question.
   */
  valueDate?: string;

  /**
   * @description Extensions for valueDate
   */
  _valueDate?: IElement;

  /**
   * @description A potential answer that's allowed as the answer to this question.
   */
  valueTime?: string;

  /**
   * @description Extensions for valueTime
   */
  _valueTime?: IElement;

  /**
   * @description A potential answer that's allowed as the answer to this question.
   */
  valueString?: string;

  /**
   * @description Extensions for valueString
   */
  _valueString?: IElement;

  /**
   * @description A potential answer that's allowed as the answer to this question.
   */
  valueCoding?: ICoding;

  /**
   * @description A potential answer that's allowed as the answer to this question.
   */
  valueReference?: IReference;

  /**
   * @description Indicates whether the answer value is selected when the list of possible answers is initially shown.
   */
  initialSelected?: boolean;

  /**
   * @description Extensions for initialSelected
   */
  _initialSelected?: IElement;

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
    return `QuestionnaireAnswerOption${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `QuestionnaireAnswerOption${JSON.stringify(this.toJson(), null, 2)}`;
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
    return ConformanceValidator('QuestionnaireAnswerOption', this);
  }

  constructor(args?: IQuestionnaireAnswerOption) {
    super();
    if (args) Object.assign(this, args);
  }
}
