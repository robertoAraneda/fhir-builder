import { IElement, IResource } from 'fhirtypes/dist/r4';
import { BundleResponse } from '../../models';
import { BackboneBuilder, IBuildable } from '../base';
import { ExtractUnderscoreKeys } from '../../../core/commons/utils';

// Extract the keys that start with an underscore
type PrimitiveExtensionFields = ExtractUnderscoreKeys<BundleResponse>;

/**
 * @description Interface for chaining the building of a BundleResponse
 * @interface IBundleResponseBuilder
 * @extends {IBuildable<BundleResponse>}
 */
interface IBundleResponseBuilder extends IBuildable<BundleResponse> {
  setStatus(value: string): this;
  setLocation(value: string): this;
  setEtag(value: string): this;
  setLastModified(value: string): this;
  setOutcome(value: IResource & Record<string, any>): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a BundleResponse
 * @class BundleResponseBuilder
 * @extends {BackboneBuilder}
 * @implements {IBundleResponseBuilder}
 * @author Roberto Araneda Espinoza
 */
export class BundleResponseBuilder extends BackboneBuilder implements IBundleResponseBuilder {
  private readonly bundleResponse: BundleResponse;

  constructor() {
    super();
    this.bundleResponse = new BundleResponse();
  }

  /**
   * @description Adds a primitive extension to the element
   * @param param - the field to add the extension to
   * @param extension - the extension to add
   * @returns {this}
   * @example addPrimitiveExtension('_value', { value: 'test' })
   */
  addPrimitiveExtension(param: PrimitiveExtensionFields, extension: IElement): this {
    this.bundleResponse[param] = extension;
    return this;
  }

  /**
   * @description Builds the model
   * @returns {BundleResponse}
   */
  build(): BundleResponse {
    return Object.assign(this.bundleResponse, super.build());
  }

  /**
   * @description Sets the status value
   * @description The status code returned by processing this entry. The status SHALL start with a 3 digit HTTP code (e.g. 404) and may contain the standard HTTP description associated with the status code.
   * @param value - the value to set
   * @returns {this}
   */
  setStatus(value: string): this {
    this.bundleResponse.status = value;
    return this;
  }

  /**
   * @description Sets the location value
   * @description The location header created by processing this operation, populated if the operation returns a location.
   * @param value - the value to set
   * @returns {this}
   */
  setLocation(value: string): this {
    this.bundleResponse.location = value;
    return this;
  }

  /**
   * @description Sets the etag value
   * @description The Etag for the resource, if the operation for the entry produced a versioned resource (see [Resource Metadata and Versioning](http.html#versioning) and [Managing Resource Contention](http.html#concurrency)).
   * @param value - the value to set
   * @returns {this}
   */
  setEtag(value: string): this {
    this.bundleResponse.etag = value;
    return this;
  }

  /**
   * @description Sets the lastModified value
   * @description The date/time that the resource was modified on the server.
   * @param value - the value to set
   * @returns {this}
   */
  setLastModified(value: string): this {
    this.bundleResponse.lastModified = value;
    return this;
  }

  /**
   * @description Sets the outcome value
   * @description An OperationOutcome containing hints and warnings produced as part of processing this entry in a batch or transaction.
   * @param value - the value to set
   * @returns {this}
   */
  setOutcome(value: IResource & Record<string, any>): this {
    this.bundleResponse.outcome = value;
    return this;
  }
}
