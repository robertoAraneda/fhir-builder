import { IBundleLink, IElement, IResource, IBundleSearch, IBundleRequest, IBundleResponse } from 'fhirtypes/dist/r4';
import { IBundleEntry, IOperationOutcome } from 'fhirtypes/dist/r4';
import { BackboneElement, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for BundleEntry BackboneElement
 * @property {IBundleLink[]} link
 * @property {string} fullUrl
 * @property {IElement} _fullUrl
 * @property {IResource & Record<string, any>} resource
 * @property {IBundleSearch} search
 * @property {IBundleRequest} request
 * @property {IBundleResponse} response
 * @author Roberto Araneda Espinoza
 */
export class BundleEntry extends BackboneElement implements IBundleEntry, IValidatable, ISerializable {
  /**
   * @description A series of links that provide context to this entry.
   */
  link?: IBundleLink[];

  /**
   * @description The Absolute URL for the resource.  The fullUrl SHALL NOT disagree with the id in the resource - i.e. if the fullUrl is not a urn:uuid, the URL shall be version-independent URL consistent with the Resource.id. The fullUrl is a version independent reference to the resource. The fullUrl element SHALL have a value except that:
   * fullUrl can be empty on a POST (although it does not need to when specifying a temporary id for reference in the bundle)
   * Results from operations might involve resources that are not identified.
   */
  fullUrl?: string;

  /**
   * @description Extensions for fullUrl
   */
  _fullUrl?: IElement;

  /**
   * @description The Resource for the entry. The purpose/meaning of the resource is determined by the Bundle.type.
   */
  resource?: IResource & Record<string, any>;

  /**
   * @description Information about the search process that lead to the creation of this entry.
   */
  search?: IBundleSearch;

  /**
   * @description Additional information about how this entry should be processed as part of a transaction or batch.  For history, it shows how the entry was processed to create the version contained in the entry.
   */
  request?: IBundleRequest;

  /**
   * @description Indicates the results of processing the corresponding 'request' entry in the batch or transaction being responded to or what the results of an operation where when returning history.
   */
  response?: IBundleResponse;

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
    return `BundleEntry${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `BundleEntry${JSON.stringify(this.toJson(), null, 2)}`;
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
    return ConformanceValidator('BundleEntry', this);
  }

  constructor(args?: IBundleEntry) {
    super();
    if (args) Object.assign(this, args);
  }
}
