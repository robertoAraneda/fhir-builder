import { IElement, IAttachment, ICoding, IQuantity, IReference, IQuestionnaireResponseItem } from 'fhirtypes/dist/r4';
import { IQuestionnaireResponseAnswer, IOperationOutcome } from 'fhirtypes/dist/r4';
import { BackboneElement, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';

/**
  * @version R4 (v4.0.1)
  * @summary FHIR® Specification by HL7®
  * @description Class for QuestionnaireResponseAnswer BackboneElement
  undefined
  * @property {boolean} valueBoolean
  * @property {IElement} _valueBoolean
  * @property {number} valueDecimal
  * @property {IElement} _valueDecimal
  * @property {number} valueInteger
  * @property {IElement} _valueInteger
  * @property {string} valueDate
  * @property {IElement} _valueDate
  * @property {string} valueDateTime
  * @property {IElement} _valueDateTime
  * @property {string} valueTime
  * @property {IElement} _valueTime
  * @property {string} valueString
  * @property {IElement} _valueString
  * @property {string} valueUri
  * @property {IElement} _valueUri
  * @property {IAttachment} valueAttachment
  * @property {ICoding} valueCoding
  * @property {IQuantity} valueQuantity
  * @property {IReference} valueReference
  * @property {IQuestionnaireResponseItem[]} item
  * @author Roberto Araneda Espinoza
  */
export class QuestionnaireResponseAnswer
  extends BackboneElement
  implements IQuestionnaireResponseAnswer, IValidatable, ISerializable
{
  /**
   * @description The answer (or one of the answers) provided by the respondent to the question.
   */
  valueBoolean?: boolean;

  /**
   * @description Extensions for valueBoolean
   */
  _valueBoolean?: IElement;

  /**
   * @description The answer (or one of the answers) provided by the respondent to the question.
   */
  valueDecimal?: number;

  /**
   * @description Extensions for valueDecimal
   */
  _valueDecimal?: IElement;

  /**
   * @description The answer (or one of the answers) provided by the respondent to the question.
   */
  valueInteger?: number;

  /**
   * @description Extensions for valueInteger
   */
  _valueInteger?: IElement;

  /**
   * @description The answer (or one of the answers) provided by the respondent to the question.
   */
  valueDate?: string;

  /**
   * @description Extensions for valueDate
   */
  _valueDate?: IElement;

  /**
   * @description The answer (or one of the answers) provided by the respondent to the question.
   */
  valueDateTime?: string;

  /**
   * @description Extensions for valueDateTime
   */
  _valueDateTime?: IElement;

  /**
   * @description The answer (or one of the answers) provided by the respondent to the question.
   */
  valueTime?: string;

  /**
   * @description Extensions for valueTime
   */
  _valueTime?: IElement;

  /**
   * @description The answer (or one of the answers) provided by the respondent to the question.
   */
  valueString?: string;

  /**
   * @description Extensions for valueString
   */
  _valueString?: IElement;

  /**
   * @description The answer (or one of the answers) provided by the respondent to the question.
   */
  valueUri?: string;

  /**
   * @description Extensions for valueUri
   */
  _valueUri?: IElement;

  /**
   * @description The answer (or one of the answers) provided by the respondent to the question.
   */
  valueAttachment?: IAttachment;

  /**
   * @description The answer (or one of the answers) provided by the respondent to the question.
   */
  valueCoding?: ICoding;

  /**
   * @description The answer (or one of the answers) provided by the respondent to the question.
   */
  valueQuantity?: IQuantity;

  /**
   * @description The answer (or one of the answers) provided by the respondent to the question.
   */
  valueReference?: IReference;

  /**
   * @description Nested groups and/or questions found within this particular answer.
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
    return `QuestionnaireResponseAnswer${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `QuestionnaireResponseAnswer${JSON.stringify(this.toJson(), null, 2)}`;
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
    return ConformanceValidator('QuestionnaireResponseAnswer', this);
  }

  constructor(args?: IQuestionnaireResponseAnswer) {
    super();
    if (args) Object.assign(this, args);
  }
}
