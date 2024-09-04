import { ICoding, IElement, IReference } from 'fhirtypes/dist/r4';
import { ISignature, IOperationOutcome } from 'fhirtypes/dist/r4';
import { Element, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for Signature Resource
 * @property {ICoding[]} type
 * @property {string} when
 * @property {IElement} _when
 * @property {IReference} who
 * @property {IReference} onBehalfOf
 * @property {string} targetFormat
 * @property {IElement} _targetFormat
 * @property {string} sigFormat
 * @property {IElement} _sigFormat
 * @property {string} data
 * @property {IElement} _data
 * @author Roberto Araneda Espinoza
 */
export class Signature extends Element implements ISignature, IValidatable, ISerializable {
  /**
   * @description An indication of the reason that the entity signed this document. This may be explicitly included as part of the signature information and can be used when determining accountability for various actions concerning the document.
   */
  type: ICoding[];

  /**
   * @description When the digital signature was signed.
   */
  when: string;

  /**
   * @description Extensions for when
   */
  _when?: IElement;

  /**
   * @description A reference to an application-usable description of the identity that signed  (e.g. the signature used their private key).
   */
  who: IReference;

  /**
   * @description A reference to an application-usable description of the identity that is represented by the signature.
   */
  onBehalfOf?: IReference;

  /**
   * @description A mime type that indicates the technical format of the target resources signed by the signature.
   */
  targetFormat?: string;

  /**
   * @description Extensions for targetFormat
   */
  _targetFormat?: IElement;

  /**
   * @description A mime type that indicates the technical format of the signature. Important mime types are application/signature+xml for X ML DigSig, application/jose for JWS, and image/* for a graphical image of a signature, etc.
   */
  sigFormat?: string;

  /**
   * @description Extensions for sigFormat
   */
  _sigFormat?: IElement;

  /**
   * @description The base64 encoding of the Signature content. When signature is not recorded electronically this element would be empty.
   */
  data?: string;

  /**
   * @description Extensions for data
   */
  _data?: IElement;

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
    return `Signature${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `Signature${JSON.stringify(this.toJson(), null, 2)}`;
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
    return ConformanceValidator('Signature', this);
  }

  constructor(args?: ISignature) {
    super();
    if (args) Object.assign(this, args);
  }
}
