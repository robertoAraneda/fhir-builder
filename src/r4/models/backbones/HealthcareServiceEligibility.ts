import { ICodeableConcept, IElement } from 'fhirtypes/dist/r4';
import { IHealthcareServiceEligibility, IOperationOutcome } from 'fhirtypes/dist/r4';
import { BackboneElement, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';

/**
  * @version R4 (v4.0.1)
  * @summary FHIR® Specification by HL7®
  * @description Class for HealthcareServiceEligibility BackboneElement
  undefined
  * @property {ICodeableConcept} code
  * @property {string} comment
  * @property {IElement} _comment
  * @author Roberto Araneda Espinoza
  */
export class HealthcareServiceEligibility
  extends BackboneElement
  implements IHealthcareServiceEligibility, IValidatable, ISerializable
{
  /**
   * @description Coded value for the eligibility.
   */
  code?: ICodeableConcept;

  /**
   * @description Describes the eligibility conditions for the service.
   */
  comment?: string;

  /**
   * @description Extensions for comment
   */
  _comment?: IElement;

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
    return `HealthcareServiceEligibility${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `HealthcareServiceEligibility${JSON.stringify(this.toJson(), null, 2)}`;
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
    return ConformanceValidator('HealthcareServiceEligibility', this);
  }

  constructor(args?: IHealthcareServiceEligibility) {
    super();
    if (args) Object.assign(this, args);
  }
}