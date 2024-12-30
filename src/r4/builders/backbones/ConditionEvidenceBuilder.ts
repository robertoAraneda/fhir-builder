import { ICodeableConcept, IReference } from 'fhirtypes/dist/r4';
import { ConditionEvidence } from '../../models';
import { BackboneBuilder, IBuildable } from '../base';

/**
 * @description Interface for chaining the building of a ConditionEvidence
 * @interface IConditionEvidenceBuilder
 * @extends {IBuildable<ConditionEvidence>}
 */
interface IConditionEvidenceBuilder extends IBuildable<ConditionEvidence> {
  addCode(value: ICodeableConcept): this;
  addDetail(value: IReference): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a ConditionEvidence
 * @class ConditionEvidenceBuilder
 * @extends {BackboneBuilder}
 * @implements {IConditionEvidenceBuilder}
 * @author Roberto Araneda Espinoza
 */
export class ConditionEvidenceBuilder extends BackboneBuilder implements IConditionEvidenceBuilder {
  private readonly conditionEvidence: ConditionEvidence;

  constructor() {
    super();
    this.conditionEvidence = new ConditionEvidence();
  }

  /**
   * @description Builds the model
   * @returns {ConditionEvidence}
   */
  build(): ConditionEvidence {
    return Object.assign(this.conditionEvidence, super.build());
  }

  /**
   * @description Adds a value to the code array
   * @description A manifestation or symptom that led to the recording of this condition.
   * @param value - the value to add
   * @returns {this}
   */
  addCode(value: ICodeableConcept): this {
    this.conditionEvidence.code = this.conditionEvidence.code || [];
    this.conditionEvidence.code.push(value);
    return this;
  }
  /**
   * @description Adds a value to the detail array
   * @description Links to other relevant information, including pathology reports.
   * @param value - the value to add
   * @returns {this}
   */
  addDetail(value: IReference): this {
    this.conditionEvidence.detail = this.conditionEvidence.detail || [];
    this.conditionEvidence.detail.push(value);
    return this;
  }
}
