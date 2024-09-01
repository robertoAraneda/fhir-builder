import { IIdentifier, IElement, IBundleLink, IBundleEntry, ISignature, BundleTypeType } from 'fhirtypes/dist/r4';
import { IBundle, IOperationOutcome } from 'fhirtypes/dist/r4';
import { DomainResource, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for Bundle Resource
 * @property {string} resourceType
 * @property {IIdentifier} identifier
 * @property {BundleTypeType} type
 * @property {IElement} _type
 * @property {string} timestamp
 * @property {IElement} _timestamp
 * @property {number} total
 * @property {IElement} _total
 * @property {IBundleLink[]} link
 * @property {IBundleEntry[]} entry
 * @property {ISignature} signature
 * @author Roberto Araneda Espinoza
 */
export class Bundle extends DomainResource implements IBundle, IValidatable, ISerializable {
  /**
   * @description The type of resource
   */
  resourceType? = 'Bundle';

  /**
   * @description A persistent identifier for the bundle that won't change as a bundle is copied from server to server.
   */
  identifier?: IIdentifier;

  /**
   * @description Indicates the purpose of this bundle - how it is intended to be used.
document | message | transaction | transaction-response | batch | batch-response | history | searchset | collection.
   */
  type: BundleTypeType;

  /**
   * @description Extensions for type
   */
  _type?: IElement;

  /**
   * @description The date/time that the bundle was assembled - i.e. when the resources were placed in the bundle.
   */
  timestamp?: string;

  /**
   * @description Extensions for timestamp
   */
  _timestamp?: IElement;

  /**
   * @description If a set of search matches, this is the total number of entries of type 'match' across all pages in the search.  It does not include search.mode = 'include' or 'outcome' entries and it does not provide a count of the number of entries in the Bundle.
   */
  total?: number;

  /**
   * @description Extensions for total
   */
  _total?: IElement;

  /**
   * @description A series of links that provide context to this bundle.
   */
  link?: IBundleLink[];

  /**
   * @description An entry in a bundle resource - will either contain a resource or information about a resource (transactions and history only).
   */
  entry?: IBundleEntry[];

  /**
   * @description Digital Signature - base64 encoded. XML-DSig or a JWT.
   */
  signature?: ISignature;

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
    return `Bundle${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `Bundle${JSON.stringify(this.toJson(), null, 2)}`;
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
    return ConformanceValidator('Bundle', this);
  }

  constructor(args?: IBundle) {
    super();
    if (args) Object.assign(this, args);
  }
}
