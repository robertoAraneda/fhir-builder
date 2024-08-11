import { EpisodeOfCareStatusHistoryCodeType, IElement, IExtension, IPeriod } from 'fhirtypes/dist/r4';
import { EpisodeOfCareStatusHistory } from '../../models/backbones/episode-of-care-status-history.model';

interface IEpisodeOfCareStatusHistoryBuilder {
  // BackboneElement properties
  setId(id: string): this;
  addExtension(extension: IExtension): this;
  setMultipleExtension(extension: IExtension[]): this;

  // EpisodeOfCareStatusHistory properties
  addParamExtension(param: 'status', extension: IElement): this;
  setStatus(status: EpisodeOfCareStatusHistoryCodeType): this;
  setPeriod(period: IPeriod): this;
}

export class EpisodeOfCareStatusHistoryBuilder implements IEpisodeOfCareStatusHistoryBuilder {
  private readonly episodeOfCareStatusHistory: EpisodeOfCareStatusHistory;

  constructor() {
    this.episodeOfCareStatusHistory = new EpisodeOfCareStatusHistory();
  }

  setId(id: string): this {
    this.episodeOfCareStatusHistory.id = id;
    return this;
  }

  setMultipleExtension(extension: IExtension[]): this {
    this.episodeOfCareStatusHistory.extension = extension;
    return this;
  }

  addExtension(extension: IExtension): this {
    this.episodeOfCareStatusHistory.extension = this.episodeOfCareStatusHistory.extension || [];
    this.episodeOfCareStatusHistory.extension.push(extension);
    return this;
  }

  addParamExtension(param: 'status', extension: IElement): this {
    this.episodeOfCareStatusHistory[`_${param}`] = extension;
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

  build(): IPeriod {
    return this.episodeOfCareStatusHistory;
  }
}
