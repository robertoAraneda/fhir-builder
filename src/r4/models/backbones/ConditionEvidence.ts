import { ICodeableConcept, IReference } from 'fhirtypes/dist/r4';
import { IConditionEvidence, IOperationOutcome } from 'fhirtypes/dist/r4';
import { BackboneElement, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';

/**
  * @version R4 (v4.0.1)
  * @summary FHIR® Specification by HL7®
  * @description Class for ConditionEvidence BackboneElement
  undefined
  * @property {ICodeableConcept[]} code
  * @property {IReference[]} detail
  * @author Roberto Araneda Espinoza
  */
export class ConditionEvidence extends BackboneElement implements IConditionEvidence, IValidatable, ISerializable {
  /**
   * @description A manifestation or symptom that led to the recording of this condition.
   */
  code?: ICodeableConcept[];

  /**
   * @description Links to other relevant information, including pathology reports.
   */
  detail?: IReference[];

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
    return `ConditionEvidence${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `ConditionEvidence${JSON.stringify(this.toJson(), null, 2)}`;
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
    return ConformanceValidator('ConditionEvidence', this);
  }

  constructor(args?: IConditionEvidence) {
    super();
    if (args) Object.assign(this, args);
  }
}
