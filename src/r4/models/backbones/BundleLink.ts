import { IElement } from 'fhirtypes/dist/r4';
import { IBundleLink, IOperationOutcome } from 'fhirtypes/dist/r4';
import { BackboneElement, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for BundleLink BackboneElement
 * @property {string} relation
 * @property {IElement} _relation
 * @property {string} url
 * @property {IElement} _url
 * @author Roberto Araneda Espinoza
 */
export class BundleLink extends BackboneElement implements IBundleLink, IValidatable, ISerializable {
  /**
   * @description A name which details the functional use for this link - see [http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1](http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1).
   */
  relation: string;

  /**
   * @description Extensions for relation
   */
  _relation?: IElement;

  /**
   * @description The reference details for the link.
   */
  url: string;

  /**
   * @description Extensions for url
   */
  _url?: IElement;

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
    return `BundleLink${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `BundleLink${JSON.stringify(this.toJson(), null, 2)}`;
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
    return ConformanceValidator('BundleLink', this);
  }

  constructor(args?: IBundleLink) {
    super();
    if (args) Object.assign(this, args);
  }
}
