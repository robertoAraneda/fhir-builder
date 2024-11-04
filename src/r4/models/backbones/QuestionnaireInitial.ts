import { IElement, IAttachment, ICoding, IQuantity, IReference } from 'fhirtypes/dist/r4';
import { IQuestionnaireInitial, IOperationOutcome } from 'fhirtypes/dist/r4';
import { BackboneElement, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';

/**
  * @version R4 (v4.0.1)
  * @summary FHIR® Specification by HL7®
  * @description Class for QuestionnaireInitial BackboneElement
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
  * @author Roberto Araneda Espinoza
  */
export class QuestionnaireInitial
  extends BackboneElement
  implements IQuestionnaireInitial, IValidatable, ISerializable
{
  /**
   * @description The actual value to for an initial answer.
   */
  valueBoolean?: boolean;

  /**
   * @description Extensions for valueBoolean
   */
  _valueBoolean?: IElement;

  /**
   * @description The actual value to for an initial answer.
   */
  valueDecimal?: number;

  /**
   * @description Extensions for valueDecimal
   */
  _valueDecimal?: IElement;

  /**
   * @description The actual value to for an initial answer.
   */
  valueInteger?: number;

  /**
   * @description Extensions for valueInteger
   */
  _valueInteger?: IElement;

  /**
   * @description The actual value to for an initial answer.
   */
  valueDate?: string;

  /**
   * @description Extensions for valueDate
   */
  _valueDate?: IElement;

  /**
   * @description The actual value to for an initial answer.
   */
  valueDateTime?: string;

  /**
   * @description Extensions for valueDateTime
   */
  _valueDateTime?: IElement;

  /**
   * @description The actual value to for an initial answer.
   */
  valueTime?: string;

  /**
   * @description Extensions for valueTime
   */
  _valueTime?: IElement;

  /**
   * @description The actual value to for an initial answer.
   */
  valueString?: string;

  /**
   * @description Extensions for valueString
   */
  _valueString?: IElement;

  /**
   * @description The actual value to for an initial answer.
   */
  valueUri?: string;

  /**
   * @description Extensions for valueUri
   */
  _valueUri?: IElement;

  /**
   * @description The actual value to for an initial answer.
   */
  valueAttachment?: IAttachment;

  /**
   * @description The actual value to for an initial answer.
   */
  valueCoding?: ICoding;

  /**
   * @description The actual value to for an initial answer.
   */
  valueQuantity?: IQuantity;

  /**
   * @description The actual value to for an initial answer.
   */
  valueReference?: IReference;

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
    return `QuestionnaireInitial${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `QuestionnaireInitial${JSON.stringify(this.toJson(), null, 2)}`;
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
    return ConformanceValidator('QuestionnaireInitial', this);
  }

  constructor(args?: IQuestionnaireInitial) {
    super();
    if (args) Object.assign(this, args);
  }
}
