import { ICodeableConcept, IQuantity, IMoney, ICoverageException } from 'fhirtypes/dist/r4';
import { ICoverageCostToBeneficiary, IOperationOutcome } from 'fhirtypes/dist/r4';
import { BackboneElement, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for CoverageCostToBeneficiary BackboneElement
 * @property {ICodeableConcept} type
 * @property {IQuantity} valueQuantity
 * @property {IMoney} valueMoney
 * @property {ICoverageException[]} exception
 * @author Roberto Araneda Espinoza
 */
export class CoverageCostToBeneficiary
  extends BackboneElement
  implements ICoverageCostToBeneficiary, IValidatable, ISerializable
{
  /**
   * @description The category of patient centric costs associated with treatment.
   */
  type?: ICodeableConcept;

  /**
   * @description The amount due from the patient for the cost category.
   */
  valueQuantity?: IQuantity;

  /**
   * @description The amount due from the patient for the cost category.
   */
  valueMoney?: IMoney;

  /**
   * @description A suite of codes indicating exceptions or reductions to patient costs and their effective periods.
   */
  exception?: ICoverageException[];

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
    return `CoverageCostToBeneficiary${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `CoverageCostToBeneficiary${JSON.stringify(this.toJson(), null, 2)}`;
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
    return ConformanceValidator('CoverageCostToBeneficiary', this);
  }

  constructor(args?: ICoverageCostToBeneficiary) {
    super();
    if (args) Object.assign(this, args);
  }
}
