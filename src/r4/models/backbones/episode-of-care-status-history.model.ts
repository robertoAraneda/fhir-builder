import { Element } from '../datatypes/element.model';
import { EpisodeOfCareStatusHistoryCodeType, IElement, IEpisodeOfCareStatusHistory, IPeriod } from 'fhirtypes/dist/r4';
import { ConformanceValidator } from '../../../core/r4/validators/base';
import { PatientBuilder } from '../../builders';

export class EpisodeOfCareStatusHistory extends Element implements IEpisodeOfCareStatusHistory {
  status: EpisodeOfCareStatusHistoryCodeType;
  period: IPeriod;

  _status: IElement;

  toJson(): unknown {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `EpisodeOfCareStatusHistory${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `EpisodeOfCareStatusHistory${JSON.stringify(this.toJson())}`;
  }

  validate(): { error: string | null } {
    const { error } = ConformanceValidator(this, 'EpisodeOfCareStatusHistory');
    return { error };
  }

  static builder(): PatientBuilder {
    return new PatientBuilder();
  }

  constructor(args?: IEpisodeOfCareStatusHistory) {
    super();
    if (args) Object.assign(this, args);
  }
}
