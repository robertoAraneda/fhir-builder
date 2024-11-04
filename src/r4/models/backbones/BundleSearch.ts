import { IElement } from 'fhirtypes/dist/r4';
import { IBundleSearch, IOperationOutcome } from 'fhirtypes/dist/r4';
import { BackboneElement, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';
import { SearchEntryModeType } from 'fhirtypes/dist/r4/types';

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for BundleSearch BackboneElement
 * @property {string} mode
 * @property {IElement} _mode
 * @property {number} score
 * @property {IElement} _score
 * @author Roberto Araneda Espinoza
 */
export class BundleSearch extends BackboneElement implements IBundleSearch, IValidatable, ISerializable {
  /**
   * @description Why this entry is in the result set - whether it's included as a match or because of an _include requirement, or to convey information or warning information about the search process.
match | include | outcome.
   */
  mode?: SearchEntryModeType;

  /**
   * @description Extensions for mode
   */
  _mode?: IElement;

  /**
   * @description When searching, the server's search ranking score for the entry.
   */
  score?: number;

  /**
   * @description Extensions for score
   */
  _score?: IElement;

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
    return `BundleSearch${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `BundleSearch${JSON.stringify(this.toJson(), null, 2)}`;
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
    return ConformanceValidator('BundleSearch', this);
  }

  constructor(args?: IBundleSearch) {
    super();
    if (args) Object.assign(this, args);
  }
}
