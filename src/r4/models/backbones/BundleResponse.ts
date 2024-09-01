import { IElement, IResource } from 'fhirtypes/dist/r4';
import { IBundleResponse, IOperationOutcome } from 'fhirtypes/dist/r4';
import { BackboneElement, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for BundleResponse BackboneElement
 * @property {string} status
 * @property {IElement} _status
 * @property {string} location
 * @property {IElement} _location
 * @property {string} etag
 * @property {IElement} _etag
 * @property {string} lastModified
 * @property {IElement} _lastModified
 * @property {IResource & Record<string, any>} outcome
 * @author Roberto Araneda Espinoza
 */
export class BundleResponse extends BackboneElement implements IBundleResponse, IValidatable, ISerializable {
  /**
   * @description The status code returned by processing this entry. The status SHALL start with a 3 digit HTTP code (e.g. 404) and may contain the standard HTTP description associated with the status code.
   */
  status: string;

  /**
   * @description Extensions for status
   */
  _status?: IElement;

  /**
   * @description The location header created by processing this operation, populated if the operation returns a location.
   */
  location?: string;

  /**
   * @description Extensions for location
   */
  _location?: IElement;

  /**
   * @description The Etag for the resource, if the operation for the entry produced a versioned resource (see [Resource Metadata and Versioning](http.html#versioning) and [Managing Resource Contention](http.html#concurrency)).
   */
  etag?: string;

  /**
   * @description Extensions for etag
   */
  _etag?: IElement;

  /**
   * @description The date/time that the resource was modified on the server.
   */
  lastModified?: string;

  /**
   * @description Extensions for lastModified
   */
  _lastModified?: IElement;

  /**
   * @description An OperationOutcome containing hints and warnings produced as part of processing this entry in a batch or transaction.
   */
  outcome?: IResource & Record<string, any>;

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
    return `BundleResponse${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `BundleResponse${JSON.stringify(this.toJson(), null, 2)}`;
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
    return ConformanceValidator('BundleResponse', this);
  }

  constructor(args?: IBundleResponse) {
    super();
    if (args) Object.assign(this, args);
  }
}
