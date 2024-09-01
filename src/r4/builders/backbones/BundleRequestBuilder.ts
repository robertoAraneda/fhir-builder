import { BundleEntryRequestMethodType, IElement } from 'fhirtypes/dist/r4';
import { BundleRequest } from '../../models';
import { BackboneBuilder, IBuildable } from '../base';
import { ExtractUnderscoreKeys } from '../../../core/commons/utils';

// Extract the keys that start with an underscore
type PrimitiveExtensionFields = ExtractUnderscoreKeys<BundleRequest>;

/**
 * @description Interface for chaining the building of a BundleRequest
 * @interface IBundleRequestBuilder
 * @extends {IBuildable<BundleRequest>}
 */
interface IBundleRequestBuilder extends IBuildable<BundleRequest> {
  setMethod(value: BundleEntryRequestMethodType): this;
  setUrl(value: string): this;
  setIfNoneMatch(value: string): this;
  setIfModifiedSince(value: string): this;
  setIfMatch(value: string): this;
  setIfNoneExist(value: string): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a BundleRequest
 * @class BundleRequestBuilder
 * @extends {BackboneBuilder}
 * @implements {IBundleRequestBuilder}
 * @author Roberto Araneda Espinoza
 */
export class BundleRequestBuilder extends BackboneBuilder implements IBundleRequestBuilder {
  private readonly bundleRequest: BundleRequest;

  constructor() {
    super();
    this.bundleRequest = new BundleRequest();
  }

  /**
   * @description Adds a primitive extension to the element
   * @param param - the field to add the extension to
   * @param extension - the extension to add
   * @returns {this}
   * @example addPrimitiveExtension('_value', { value: 'test' })
   */
  addPrimitiveExtension(param: PrimitiveExtensionFields, extension: IElement): this {
    this.bundleRequest[param] = extension;
    return this;
  }

  /**
   * @description Builds the model
   * @returns {BundleRequest}
   */
  build(): BundleRequest {
    return Object.assign(this.bundleRequest, super.build());
  }

  /**
    * @description Sets the method value
    * @description In a transaction or batch, this is the HTTP action to be executed for this entry. In a history bundle, this indicates the HTTP action that occurred.
GET | HEAD | POST | PUT | DELETE | PATCH.
    * @param value - the value to set
    * @returns {this}
    */
  setMethod(value: BundleEntryRequestMethodType): this {
    this.bundleRequest.method = value;
    return this;
  }

  /**
   * @description Sets the url value
   * @description The URL for this entry, relative to the root (the address to which the request is posted).
   * @param value - the value to set
   * @returns {this}
   */
  setUrl(value: string): this {
    this.bundleRequest.url = value;
    return this;
  }

  /**
   * @description Sets the ifNoneMatch value
   * @description If the ETag values match, return a 304 Not Modified status. See the API documentation for ["Conditional Read"](http.html#cread).
   * @param value - the value to set
   * @returns {this}
   */
  setIfNoneMatch(value: string): this {
    this.bundleRequest.ifNoneMatch = value;
    return this;
  }

  /**
   * @description Sets the ifModifiedSince value
   * @description Only perform the operation if the last updated date matches. See the API documentation for ["Conditional Read"](http.html#cread).
   * @param value - the value to set
   * @returns {this}
   */
  setIfModifiedSince(value: string): this {
    this.bundleRequest.ifModifiedSince = value;
    return this;
  }

  /**
   * @description Sets the ifMatch value
   * @description Only perform the operation if the Etag value matches. For more information, see the API section ["Managing Resource Contention"](http.html#concurrency).
   * @param value - the value to set
   * @returns {this}
   */
  setIfMatch(value: string): this {
    this.bundleRequest.ifMatch = value;
    return this;
  }

  /**
   * @description Sets the ifNoneExist value
   * @description Instruct the server not to perform the create if a specified resource already exists. For further information, see the API documentation for ["Conditional Create"](http.html#ccreate). This is just the query portion of the URL - what follows the "?" (not including the "?").
   * @param value - the value to set
   * @returns {this}
   */
  setIfNoneExist(value: string): this {
    this.bundleRequest.ifNoneExist = value;
    return this;
  }
}
