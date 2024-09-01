import { ICoding, IElement, IReference } from 'fhirtypes/dist/r4';
import { Signature } from '../../models';
import { ElementBuilder, IBuildable } from '../base';
import { ExtractUnderscoreKeys } from '../../../core/commons/utils';

// Extract the keys that start with an underscore
type PrimitiveExtensionFields = ExtractUnderscoreKeys<Signature>;

/**
 * @description Interface for chaining the building of a Signature
 * @interface ISignatureBuilder
 * @extends {IBuildable<Signature>}
 */
interface ISignatureBuilder extends IBuildable<Signature> {
  addType(value: ICoding): this;
  setWhen(value: string): this;
  setWho(value: IReference): this;
  setOnBehalfOf(value: IReference): this;
  setTargetFormat(value: string): this;
  setSigFormat(value: string): this;
  setData(value: string): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a Signature
 * @class SignatureBuilder
 * @extends {Builder}
 * @implements {ISignatureBuilder}
 * @author Roberto Araneda Espinoza
 */
export class SignatureBuilder extends ElementBuilder implements ISignatureBuilder {
  private readonly signature: Signature;

  constructor() {
    super();
    this.signature = new Signature();
  }

  /**
   * @description Adds a primitive extension to the element
   * @param param - the field to add the extension to
   * @param extension - the extension to add
   * @returns {this}
   * @example addPrimitiveExtension('_value', { value: 'test' })
   */
  addPrimitiveExtension(param: PrimitiveExtensionFields, extension: IElement): this {
    this.signature[param] = extension;
    return this;
  }

  /**
   * @description Builds the model
   * @returns {Signature}
   */
  build(): Signature {
    return Object.assign(this.signature, super.build());
  }

  /**
   * @description Adds a value to the type array
   * @description An indication of the reason that the entity signed this document. This may be explicitly included as part of the signature information and can be used when determining accountability for various actions concerning the document.
   * @param value - the value to add
   * @returns {this}
   */
  addType(value: ICoding): this {
    this.signature.type = this.signature.type || [];
    this.signature.type.push(value);
    return this;
  }
  /**
   * @description Sets the when value
   * @description When the digital signature was signed.
   * @param value - the value to set
   * @returns {this}
   */
  setWhen(value: string): this {
    this.signature.when = value;
    return this;
  }

  /**
   * @description Sets the who value
   * @description A reference to an application-usable description of the identity that signed  (e.g. the signature used their private key).
   * @param value - the value to set
   * @returns {this}
   */
  setWho(value: IReference): this {
    this.signature.who = value;
    return this;
  }

  /**
   * @description Sets the onBehalfOf value
   * @description A reference to an application-usable description of the identity that is represented by the signature.
   * @param value - the value to set
   * @returns {this}
   */
  setOnBehalfOf(value: IReference): this {
    this.signature.onBehalfOf = value;
    return this;
  }

  /**
   * @description Sets the targetFormat value
   * @description A mime type that indicates the technical format of the target resources signed by the signature.
   * @param value - the value to set
   * @returns {this}
   */
  setTargetFormat(value: string): this {
    this.signature.targetFormat = value;
    return this;
  }

  /**
   * @description Sets the sigFormat value
   * @description A mime type that indicates the technical format of the signature. Important mime types are application/signature+xml for X ML DigSig, application/jose for JWS, and image/* for a graphical image of a signature, etc.
   * @param value - the value to set
   * @returns {this}
   */
  setSigFormat(value: string): this {
    this.signature.sigFormat = value;
    return this;
  }

  /**
   * @description Sets the data value
   * @description The base64 encoding of the Signature content. When signature is not recorded electronically this element would be empty.
   * @param value - the value to set
   * @returns {this}
   */
  setData(value: string): this {
    this.signature.data = value;
    return this;
  }
}
