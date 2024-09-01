import { ICodeableConcept, IQuantity, IMoney, ICoverageException } from 'fhirtypes/dist/r4';
import { CoverageCostToBeneficiary } from '../../models';
import { BackboneBuilder, IBuildable } from '../base';

/**
 * @description Interface for chaining the building of a CoverageCostToBeneficiary
 * @interface ICoverageCostToBeneficiaryBuilder
 * @extends {IBuildable<CoverageCostToBeneficiary>}
 */
interface ICoverageCostToBeneficiaryBuilder extends IBuildable<CoverageCostToBeneficiary> {
  setType(value: ICodeableConcept): this;
  setValueQuantity(value: IQuantity): this;
  setValueMoney(value: IMoney): this;
  addException(value: ICoverageException): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a CoverageCostToBeneficiary
 * @class CoverageCostToBeneficiaryBuilder
 * @extends {BackboneBuilder}
 * @implements {ICoverageCostToBeneficiaryBuilder}
 * @author Roberto Araneda Espinoza
 */
export class CoverageCostToBeneficiaryBuilder extends BackboneBuilder implements ICoverageCostToBeneficiaryBuilder {
  private readonly coverageCostToBeneficiary: CoverageCostToBeneficiary;

  constructor() {
    super();
    this.coverageCostToBeneficiary = new CoverageCostToBeneficiary();
  }

  /**
   * @description Sets the resource type to CoverageCostToBeneficiary
   * @param json - the json to parse
   * @returns {this}
   */
  fromJSON(json: unknown): this {
    const incomingData = typeof json === 'string' ? JSON.parse(json) : json;
    Object.assign(this.coverageCostToBeneficiary, incomingData);
    return this;
  }

  /**
   * @description Builds the model
   * @returns {CoverageCostToBeneficiary}
   */
  build(): CoverageCostToBeneficiary {
    return Object.assign(this.coverageCostToBeneficiary, super.build());
  }

  /**
   * @description Sets the type value
   * @description The category of patient centric costs associated with treatment.
   * @param value - the value to set
   * @returns {this}
   */
  setType(value: ICodeableConcept): this {
    this.coverageCostToBeneficiary.type = value;
    return this;
  }

  /**
   * @description Sets the valueQuantity value
   * @description The amount due from the patient for the cost category.
   * @param value - the value to set
   * @returns {this}
   */
  setValueQuantity(value: IQuantity): this {
    this.coverageCostToBeneficiary.valueQuantity = value;
    return this;
  }

  /**
   * @description Sets the valueMoney value
   * @description The amount due from the patient for the cost category.
   * @param value - the value to set
   * @returns {this}
   */
  setValueMoney(value: IMoney): this {
    this.coverageCostToBeneficiary.valueMoney = value;
    return this;
  }

  /**
   * @description Adds a value to the exception array
   * @description A suite of codes indicating exceptions or reductions to patient costs and their effective periods.
   * @param value - the value to add
   * @returns {this}
   */
  addException(value: ICoverageException): this {
    this.coverageCostToBeneficiary.exception = this.coverageCostToBeneficiary.exception || [];
    this.coverageCostToBeneficiary.exception.push(value);
    return this;
  }
}
