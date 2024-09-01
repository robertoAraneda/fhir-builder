import { IIdentifier, IElement, IBundleLink, IBundleEntry, ISignature, BundleTypeType } from 'fhirtypes/dist/r4';
import { Bundle } from '../../models';
import { DomainResourceBuilder, IBuildable } from '../base';
import { ExtractUnderscoreKeys } from '../../../core/commons/utils';

// Extract the keys that start with an underscore
type PrimitiveExtensionFields = ExtractUnderscoreKeys<Bundle>;

/**
 * @description Interface for chaining the building of a Bundle
 * @interface IBundleBuilder
 * @extends {IBuildable<Bundle>}
 */
interface IBundleBuilder extends IBuildable<Bundle> {
  setIdentifier(value: IIdentifier): this;
  setType(value: BundleTypeType): this;
  setTimestamp(value: string): this;
  setTotal(value: number): this;
  addLink(value: IBundleLink): this;
  addEntry(value: IBundleEntry): this;
  setSignature(value: ISignature): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a Bundle
 * @class BundleBuilder
 * @extends {DomainResourceBuilder}
 * @implements {IBundleBuilder}
 * @author Roberto Araneda Espinoza
 */
export class BundleBuilder extends DomainResourceBuilder implements IBundleBuilder {
  private readonly bundle: Bundle;

  constructor() {
    super();
    this.bundle = new Bundle();
  }

  /**
   * @description Sets the resource type to Bundle
   * @param json - the json to parse
   * @returns {this}
   */
  fromJSON(json: unknown): this {
    const incomingData = typeof json === 'string' ? JSON.parse(json) : json;
    Object.assign(this.bundle, incomingData);
    return this;
  }

  /**
   * @description Adds a primitive extension to the element
   * @param param - the field to add the extension to
   * @param extension - the extension to add
   * @returns {this}
   * @example addPrimitiveExtension('_value', { value: 'test' })
   */
  addPrimitiveExtension(param: PrimitiveExtensionFields, extension: IElement): this {
    this.bundle[param] = extension;
    return this;
  }

  /**
   * @description Builds the model
   * @returns {Bundle}
   */
  build(): Bundle {
    return Object.assign(this.bundle, super.build());
  }

  /**
   * @description Sets the identifier value
   * @description A persistent identifier for the bundle that won't change as a bundle is copied from server to server.
   * @param value - the value to set
   * @returns {this}
   */
  setIdentifier(value: IIdentifier): this {
    this.bundle.identifier = value;
    return this;
  }

  /**
    * @description Sets the type value
    * @description Indicates the purpose of this bundle - how it is intended to be used.
document | message | transaction | transaction-response | batch | batch-response | history | searchset | collection.
    * @param value - the value to set
    * @returns {this}
    */
  setType(value: BundleTypeType): this {
    this.bundle.type = value;
    return this;
  }

  /**
   * @description Sets the timestamp value
   * @description The date/time that the bundle was assembled - i.e. when the resources were placed in the bundle.
   * @param value - the value to set
   * @returns {this}
   */
  setTimestamp(value: string): this {
    this.bundle.timestamp = value;
    return this;
  }

  /**
   * @description Sets the total value
   * @description If a set of search matches, this is the total number of entries of type 'match' across all pages in the search.  It does not include search.mode = 'include' or 'outcome' entries and it does not provide a count of the number of entries in the Bundle.
   * @param value - the value to set
   * @returns {this}
   */
  setTotal(value: number): this {
    this.bundle.total = value;
    return this;
  }

  /**
   * @description Adds a value to the link array
   * @description A series of links that provide context to this bundle.
   * @param value - the value to add
   * @returns {this}
   */
  addLink(value: IBundleLink): this {
    this.bundle.link = this.bundle.link || [];
    this.bundle.link.push(value);
    return this;
  }
  /**
   * @description Adds a value to the entry array
   * @description An entry in a bundle resource - will either contain a resource or information about a resource (transactions and history only).
   * @param value - the value to add
   * @returns {this}
   */
  addEntry(value: IBundleEntry): this {
    this.bundle.entry = this.bundle.entry || [];
    this.bundle.entry.push(value);
    return this;
  }
  /**
   * @description Sets the signature value
   * @description Digital Signature - base64 encoded. XML-DSig or a JWT.
   * @param value - the value to set
   * @returns {this}
   */
  setSignature(value: ISignature): this {
    this.bundle.signature = value;
    return this;
  }
}
