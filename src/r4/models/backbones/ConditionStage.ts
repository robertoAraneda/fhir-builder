import { ICodeableConcept, IReference } from 'fhirtypes/dist/r4';
import { IConditionStage, IOperationOutcome } from 'fhirtypes/dist/r4';
import { BackboneElement, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';

/**
  * @version R4 (v4.0.1)
  * @summary FHIR® Specification by HL7®
  * @description Class for ConditionStage BackboneElement
  undefined
  * @property {ICodeableConcept} summary
  * @property {IReference[]} assessment
  * @property {ICodeableConcept} type
  * @author Roberto Araneda Espinoza
  */
export class ConditionStage extends BackboneElement implements IConditionStage, IValidatable, ISerializable {
  /**
   * @description A simple summary of the stage such as "Stage 3". The determination of the stage is disease-specific.
   */
  summary?: ICodeableConcept;

  /**
   * @description Reference to a formal record of the evidence on which the staging assessment is based.
   */
  assessment?: IReference[];

  /**
   * @description The kind of staging, such as pathological or clinical staging.
   */
  type?: ICodeableConcept;

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
    return `ConditionStage${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `ConditionStage${JSON.stringify(this.toJson(), null, 2)}`;
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
    return ConformanceValidator('ConditionStage', this);
  }

  constructor(args?: IConditionStage) {
    super();
    if (args) Object.assign(this, args);
  }
}
