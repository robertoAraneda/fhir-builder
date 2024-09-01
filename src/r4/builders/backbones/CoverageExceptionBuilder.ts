import { ICodeableConcept, IPeriod } from 'fhirtypes/dist/r4';
import { CoverageException } from '../../models';
import { BackboneBuilder, IBuildable } from '../base';

/**
 * @description Interface for chaining the building of a CoverageException
 * @interface ICoverageExceptionBuilder
 * @extends {IBuildable<CoverageException>}
 */
interface ICoverageExceptionBuilder extends IBuildable<CoverageException> {
  setType(value: ICodeableConcept): this;
  setPeriod(value: IPeriod): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a CoverageException
 * @class CoverageExceptionBuilder
 * @extends {BackboneBuilder}
 * @implements {ICoverageExceptionBuilder}
 * @author Roberto Araneda Espinoza
 */
export class CoverageExceptionBuilder extends BackboneBuilder implements ICoverageExceptionBuilder {
  private readonly coverageException: CoverageException;

  constructor() {
    super();
    this.coverageException = new CoverageException();
  }

  /**
   * @description Sets the resource type to CoverageException
   * @param json - the json to parse
   * @returns {this}
   */
  fromJSON(json: unknown): this {
    const incomingData = typeof json === 'string' ? JSON.parse(json) : json;
    Object.assign(this.coverageException, incomingData);
    return this;
  }

  /**
   * @description Builds the model
   * @returns {CoverageException}
   */
  build(): CoverageException {
    return Object.assign(this.coverageException, super.build());
  }

  /**
   * @description Sets the type value
   * @description The code for the specific exception.
   * @param value - the value to set
   * @returns {this}
   */
  setType(value: ICodeableConcept): this {
    this.coverageException.type = value;
    return this;
  }

  /**
   * @description Sets the period value
   * @description The timeframe during when the exception is in force.
   * @param value - the value to set
   * @returns {this}
   */
  setPeriod(value: IPeriod): this {
    this.coverageException.period = value;
    return this;
  }
}
