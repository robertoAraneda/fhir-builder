import { EpisodeOfCareStatusHistoryCodeType, IElement, IEpisodeOfCareStatusHistory, IPeriod } from 'fhirtypes/dist/r4';
import { EpisodeOfCareStatusHistory } from '../../models';
import { IBuildable } from '../base/buildable.interface';
import { UnderscoreKeys } from '../base/resource-type-map.interface';
import { BackboneBuilder } from '../base/backbone.builder';

type PrimitiveExtensionFields = keyof Pick<IEpisodeOfCareStatusHistory, UnderscoreKeys<IEpisodeOfCareStatusHistory>>;

interface IEpisodeOfCareStatusHistoryBuilder extends IBuildable<EpisodeOfCareStatusHistory> {
  // EpisodeOfCareStatusHistory properties
  setStatus(status: EpisodeOfCareStatusHistoryCodeType): this;
  setPeriod(period: IPeriod): this;
}

export class EpisodeOfCareStatusHistoryBuilder extends BackboneBuilder implements IEpisodeOfCareStatusHistoryBuilder {
  private readonly episodeOfCareStatusHistory: EpisodeOfCareStatusHistory;

  constructor() {
    super();
    this.episodeOfCareStatusHistory = new EpisodeOfCareStatusHistory();
  }

  addPrimitiveExtension(param: PrimitiveExtensionFields, extension: IElement): this {
    this.episodeOfCareStatusHistory[`${param}`] = extension;
    return this;
  }

  setStatus(status: EpisodeOfCareStatusHistoryCodeType): this {
    this.episodeOfCareStatusHistory.status = status;
    return this;
  }

  setPeriod(period: IPeriod): this {
    this.episodeOfCareStatusHistory.period = period;
    return this;
  }

  build(): EpisodeOfCareStatusHistory {
    return Object.assign(this.episodeOfCareStatusHistory, super.build());
  }
}
