import { ICodeableConcept, IElement } from 'fhirtypes/dist/r4';
import { ICoverageClass, IOperationOutcome } from 'fhirtypes/dist/r4';
import { BackboneElement, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for CoverageClass BackboneElement
 * @property {ICodeableConcept} type
 * @property {string} value
 * @property {IElement} _value
 * @property {string} name
 * @property {IElement} _name
 * @author Roberto Araneda Espinoza
 */
export class CoverageClass extends BackboneElement implements ICoverageClass, IValidatable, ISerializable {
  /**
   * @description The type of classification for which an insurer-specific class label or number and optional name is provided, for example may be used to identify a class of coverage or employer group, Policy, Plan.
   */
  type: ICodeableConcept;

  /**
   * @description The alphanumeric string value associated with the insurer issued label.
   */
  value: string;

  /**
   * @description Extensions for value
   */
  _value?: IElement;

  /**
   * @description A short description for the class.
   */
  name?: string;

  /**
   * @description Extensions for name
   */
  _name?: IElement;

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
    return `CoverageClass${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `CoverageClass${JSON.stringify(this.toJson(), null, 2)}`;
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
    return ConformanceValidator('CoverageClass', this);
  }

  constructor(args?: ICoverageClass) {
    super();
    if (args) Object.assign(this, args);
  }
}
