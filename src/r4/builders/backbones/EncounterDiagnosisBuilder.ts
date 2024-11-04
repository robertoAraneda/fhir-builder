import { IReference, ICodeableConcept, IElement } from 'fhirtypes/dist/r4';
import { EncounterDiagnosis } from '../../models';
import { BackboneBuilder, IBuildable } from '../base';
import { ExtractUnderscoreKeys } from '../../../core/commons/utils';

// Extract the keys that start with an underscore
type PrimitiveExtensionFields = ExtractUnderscoreKeys<EncounterDiagnosis>;

/**
 * @description Interface for chaining the building of a EncounterDiagnosis
 * @interface IEncounterDiagnosisBuilder
 * @extends {IBuildable<EncounterDiagnosis>}
 */
interface IEncounterDiagnosisBuilder extends IBuildable<EncounterDiagnosis> {
  setCondition(value: IReference): this;
  setUse(value: ICodeableConcept): this;
  setRank(value: number): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a EncounterDiagnosis
 * @class EncounterDiagnosisBuilder
 * @extends {BackboneBuilder}
 * @implements {IEncounterDiagnosisBuilder}
 * @author Roberto Araneda Espinoza
 */
export class EncounterDiagnosisBuilder extends BackboneBuilder implements IEncounterDiagnosisBuilder {
  private readonly encounterDiagnosis: EncounterDiagnosis;

  constructor() {
    super();
    this.encounterDiagnosis = new EncounterDiagnosis();
  }

  /**
   * @description Adds a primitive extension to the element
   * @param param - the field to add the extension to
   * @param extension - the extension to add
   * @returns {this}
   * @example addPrimitiveExtension('_value', { value: 'test' })
   */
  addPrimitiveExtension(param: PrimitiveExtensionFields, extension: IElement): this {
    this.encounterDiagnosis[param] = extension;
    return this;
  }

  /**
   * @description Builds the model
   * @returns {EncounterDiagnosis}
   */
  build(): EncounterDiagnosis {
    return Object.assign(this.encounterDiagnosis, super.build());
  }

  /**
   * @description Sets the condition value
   * @description Reason the encounter takes place, as specified using information from another resource. For admissions, this is the admission diagnosis. The indication will typically be a Condition (with other resources referenced in the evidence.detail), or a Procedure.
   * @param value - the value to set
   * @returns {this}
   */
  setCondition(value: IReference): this {
    this.encounterDiagnosis.condition = value;
    return this;
  }

  /**
   * @description Sets the use value
   * @description Role that this diagnosis has within the encounter (e.g. admission, billing, discharge …).
   * @param value - the value to set
   * @returns {this}
   */
  setUse(value: ICodeableConcept): this {
    this.encounterDiagnosis.use = value;
    return this;
  }

  /**
   * @description Sets the rank value
   * @description Ranking of the diagnosis (for each role type).
   * @param value - the value to set
   * @returns {this}
   */
  setRank(value: number): this {
    this.encounterDiagnosis.rank = value;
    return this;
  }
}
