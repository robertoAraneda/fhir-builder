import { IReference, ICodeableConcept, IElement } from 'fhirtypes/dist/r4';
import { EpisodeOfCareDiagnosis } from '../../models';
import { BackboneBuilder, IBuildable } from '../base';
import { ExtractUnderscoreKeys } from '../../../core/commons/utils';

// Extract the keys that start with an underscore
type PrimitiveExtensionFields = ExtractUnderscoreKeys<EpisodeOfCareDiagnosis>;

/**
 * @description Interface for chaining the building of a EpisodeOfCareDiagnosis
 * @interface IEpisodeOfCareDiagnosisBuilder
 * @extends {IBuildable<EpisodeOfCareDiagnosis>}
 */
interface IEpisodeOfCareDiagnosisBuilder extends IBuildable<EpisodeOfCareDiagnosis> {
  setCondition(value: IReference): this;
  setRole(value: ICodeableConcept): this;
  setRank(value: number): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a EpisodeOfCareDiagnosis
 * @class EpisodeOfCareDiagnosisBuilder
 * @extends {BackboneBuilder}
 * @implements {IEpisodeOfCareDiagnosisBuilder}
 * @author Roberto Araneda Espinoza
 */
export class EpisodeOfCareDiagnosisBuilder extends BackboneBuilder implements IEpisodeOfCareDiagnosisBuilder {
  private readonly episodeOfCareDiagnosis: EpisodeOfCareDiagnosis;

  constructor() {
    super();
    this.episodeOfCareDiagnosis = new EpisodeOfCareDiagnosis();
  }

  /**
   * @description Adds a primitive extension to the element
   * @param param - the field to add the extension to
   * @param extension - the extension to add
   * @returns {this}
   * @example addPrimitiveExtension('_value', { value: 'test' })
   */
  addPrimitiveExtension(param: PrimitiveExtensionFields, extension: IElement): this {
    this.episodeOfCareDiagnosis[param] = extension;
    return this;
  }

  /**
   * @description Builds the model
   * @returns {EpisodeOfCareDiagnosis}
   */
  build(): EpisodeOfCareDiagnosis {
    return Object.assign(this.episodeOfCareDiagnosis, super.build());
  }

  /**
   * @description Sets the condition value
   * @description A list of conditions/problems/diagnoses that this episode of care is intended to be providing care for.
   * @param value - the value to set
   * @returns {this}
   */
  setCondition(value: IReference): this {
    this.episodeOfCareDiagnosis.condition = value;
    return this;
  }

  /**
   * @description Sets the role value
   * @description Role that this diagnosis has within the episode of care (e.g. admission, billing, discharge …).
   * @param value - the value to set
   * @returns {this}
   */
  setRole(value: ICodeableConcept): this {
    this.episodeOfCareDiagnosis.role = value;
    return this;
  }

  /**
   * @description Sets the rank value
   * @description Ranking of the diagnosis (for each role type).
   * @param value - the value to set
   * @returns {this}
   */
  setRank(value: number): this {
    this.episodeOfCareDiagnosis.rank = value;
    return this;
  }
}
