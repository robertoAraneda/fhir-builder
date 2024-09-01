import { ICodeableConcept, IPeriod } from 'fhirtypes/dist/r4';
import { ICoverageException, IOperationOutcome } from 'fhirtypes/dist/r4';
import { BackboneElement, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for CoverageException BackboneElement
 * @property {ICodeableConcept} type
 * @property {IPeriod} period
 * @author Roberto Araneda Espinoza
 */
export class CoverageException extends BackboneElement implements ICoverageException, IValidatable, ISerializable {
  /**
   * @description The code for the specific exception.
   */
  type: ICodeableConcept;

  /**
   * @description The timeframe during when the exception is in force.
   */
  period?: IPeriod;

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
    return `CoverageException${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `CoverageException${JSON.stringify(this.toJson(), null, 2)}`;
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
    return ConformanceValidator('CoverageException', this);
  }

  constructor(args?: ICoverageException) {
    super();
    if (args) Object.assign(this, args);
  }
}
