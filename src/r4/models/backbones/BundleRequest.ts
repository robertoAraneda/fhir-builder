import { HTTPVerbType, IElement } from 'fhirtypes/dist/r4';
import { IBundleRequest, IOperationOutcome } from 'fhirtypes/dist/r4';
import { BackboneElement, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for BundleRequest BackboneElement
 * @property {BundleEntryRequestMethodType} method
 * @property {IElement} _method
 * @property {string} url
 * @property {IElement} _url
 * @property {string} ifNoneMatch
 * @property {IElement} _ifNoneMatch
 * @property {string} ifModifiedSince
 * @property {IElement} _ifModifiedSince
 * @property {string} ifMatch
 * @property {IElement} _ifMatch
 * @property {string} ifNoneExist
 * @property {IElement} _ifNoneExist
 * @author Roberto Araneda Espinoza
 */
export class BundleRequest extends BackboneElement implements IBundleRequest, IValidatable, ISerializable {
  /**
   * @description In a transaction or batch, this is the HTTP action to be executed for this entry. In a history bundle, this indicates the HTTP action that occurred.
GET | HEAD | POST | PUT | DELETE | PATCH.
   */
  method: HTTPVerbType;

  /**
   * @description Extensions for method
   */
  _method?: IElement;

  /**
   * @description The URL for this entry, relative to the root (the address to which the request is posted).
   */
  url: string;

  /**
   * @description Extensions for url
   */
  _url?: IElement;

  /**
   * @description If the ETag values match, return a 304 Not Modified status. See the API documentation for ["Conditional Read"](http.html#cread).
   */
  ifNoneMatch?: string;

  /**
   * @description Extensions for ifNoneMatch
   */
  _ifNoneMatch?: IElement;

  /**
   * @description Only perform the operation if the last updated date matches. See the API documentation for ["Conditional Read"](http.html#cread).
   */
  ifModifiedSince?: string;

  /**
   * @description Extensions for ifModifiedSince
   */
  _ifModifiedSince?: IElement;

  /**
   * @description Only perform the operation if the Etag value matches. For more information, see the API section ["Managing Resource Contention"](http.html#concurrency).
   */
  ifMatch?: string;

  /**
   * @description Extensions for ifMatch
   */
  _ifMatch?: IElement;

  /**
   * @description Instruct the server not to perform the create if a specified resource already exists. For further information, see the API documentation for ["Conditional Create"](http.html#ccreate). This is just the query portion of the URL - what follows the "?" (not including the "?").
   */
  ifNoneExist?: string;

  /**
   * @description Extensions for ifNoneExist
   */
  _ifNoneExist?: IElement;

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
    return `BundleRequest${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `BundleRequest${JSON.stringify(this.toJson(), null, 2)}`;
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
    return ConformanceValidator('BundleRequest', this);
  }

  constructor(args?: IBundleRequest) {
    super();
    if (args) Object.assign(this, args);
  }
}
