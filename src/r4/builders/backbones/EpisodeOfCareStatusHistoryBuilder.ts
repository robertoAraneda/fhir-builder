import { EpisodeOfCareStatusType, IElement, IPeriod } from 'fhirtypes/dist/r4';
import { EpisodeOfCareStatusHistory } from '../../models';
import { BackboneBuilder, IBuildable } from '../base';
import { ExtractUnderscoreKeys } from '../../../core/commons/utils';

// Extract the keys that start with an underscore
type PrimitiveExtensionFields = ExtractUnderscoreKeys<EpisodeOfCareStatusHistory>;

/**
 * @description Interface for chaining the building of a EpisodeOfCareStatusHistory
 * @interface IEpisodeOfCareStatusHistoryBuilder
 * @extends {IBuildable<EpisodeOfCareStatusHistory>}
 */
interface IEpisodeOfCareStatusHistoryBuilder extends IBuildable<EpisodeOfCareStatusHistory> {
  setStatus(value: EpisodeOfCareStatusType): this;
  setPeriod(value: IPeriod): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a EpisodeOfCareStatusHistory
 * @class EpisodeOfCareStatusHistoryBuilder
 * @extends {BackboneBuilder}
 * @implements {IEpisodeOfCareStatusHistoryBuilder}
 * @author Roberto Araneda Espinoza
 */
export class EpisodeOfCareStatusHistoryBuilder extends BackboneBuilder implements IEpisodeOfCareStatusHistoryBuilder {
  private readonly episodeOfCareStatusHistory: EpisodeOfCareStatusHistory;

  constructor() {
    super();
    this.episodeOfCareStatusHistory = new EpisodeOfCareStatusHistory();
  }

  /**
   * @description Adds a primitive extension to the element
   * @param param - the field to add the extension to
   * @param extension - the extension to add
   * @returns {this}
   * @example addPrimitiveExtension('_value', { value: 'test' })
   */
  addPrimitiveExtension(param: PrimitiveExtensionFields, extension: IElement): this {
    this.episodeOfCareStatusHistory[param] = extension;
    return this;
  }

  /**
   * @description Builds the model
   * @returns {EpisodeOfCareStatusHistory}
   */
  build(): EpisodeOfCareStatusHistory {
    return Object.assign(this.episodeOfCareStatusHistory, super.build());
  }

  /**
   * @description Sets the status value
   * @description planned | waitlist | active | onhold | finished | cancelled.
   * @param value - the value to set
   * @returns {this}
   */
  setStatus(value: EpisodeOfCareStatusType): this {
    this.episodeOfCareStatusHistory.status = value;
    return this;
  }

  /**
   * @description Sets the period value
   * @description The period during this EpisodeOfCare that the specific status applied.
   * @param value - the value to set
   * @returns {this}
   */
  setPeriod(value: IPeriod): this {
    this.episodeOfCareStatusHistory.period = value;
    return this;
  }
}
