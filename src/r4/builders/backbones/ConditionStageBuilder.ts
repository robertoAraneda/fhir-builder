import { ICodeableConcept, IReference } from 'fhirtypes/dist/r4';
import { ConditionStage } from '../../models';
import { BackboneBuilder, IBuildable } from '../base';

/**
 * @description Interface for chaining the building of a ConditionStage
 * @interface IConditionStageBuilder
 * @extends {IBuildable<ConditionStage>}
 */
interface IConditionStageBuilder extends IBuildable<ConditionStage> {
  setSummary(value: ICodeableConcept): this;
  addAssessment(value: IReference): this;
  setType(value: ICodeableConcept): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a ConditionStage
 * @class ConditionStageBuilder
 * @extends {BackboneBuilder}
 * @implements {IConditionStageBuilder}
 * @author Roberto Araneda Espinoza
 */
export class ConditionStageBuilder extends BackboneBuilder implements IConditionStageBuilder {
  private readonly conditionStage: ConditionStage;

  constructor() {
    super();
    this.conditionStage = new ConditionStage();
  }

  /**
   * @description Builds the model
   * @returns {ConditionStage}
   */
  build(): ConditionStage {
    return Object.assign(this.conditionStage, super.build());
  }

  /**
   * @description Sets the summary value
   * @description A simple summary of the stage such as "Stage 3". The determination of the stage is disease-specific.
   * @param value - the value to set
   * @returns {this}
   */
  setSummary(value: ICodeableConcept): this {
    this.conditionStage.summary = value;
    return this;
  }

  /**
   * @description Adds a value to the assessment array
   * @description Reference to a formal record of the evidence on which the staging assessment is based.
   * @param value - the value to add
   * @returns {this}
   */
  addAssessment(value: IReference): this {
    this.conditionStage.assessment = this.conditionStage.assessment || [];
    this.conditionStage.assessment.push(value);
    return this;
  }
  /**
   * @description Sets the type value
   * @description The kind of staging, such as pathological or clinical staging.
   * @param value - the value to set
   * @returns {this}
   */
  setType(value: ICodeableConcept): this {
    this.conditionStage.type = value;
    return this;
  }
}
