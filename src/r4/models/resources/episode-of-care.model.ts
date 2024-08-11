import {
  EpisodeOfCareStatusType,
  ICodeableConcept,
  IElement,
  IEpisodeOfCare,
  IEpisodeOfCareDiagnosis,
  IEpisodeOfCareStatusHistory,
  IIdentifier,
  IPeriod,
  IReference,
} from 'fhirtypes/dist/r4';
import { DomainResource } from './domain-resource.model';
import { ConformanceValidator } from '../../../core/r4/validators/base';
import { EpisodeOfCareBuilder } from '../../builders';

export class EpisodeOfCare extends DomainResource implements IEpisodeOfCare {
  resourceType: 'EpisodeOfCare' = 'EpisodeOfCare' as const;
  identifier?: IIdentifier[];
  status: EpisodeOfCareStatusType;
  statusHistory?: IEpisodeOfCareStatusHistory[];
  type?: ICodeableConcept[];
  diagnosis?: IEpisodeOfCareDiagnosis[];
  patient: IReference;
  managingOrganization?: IReference;
  period?: IPeriod;
  referralRequest?: IReference[];
  careManager?: IReference;
  team?: IReference[];
  account?: IReference[];

  // extensions
  _status: IElement;

  toJson(): EpisodeOfCare {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `Patient${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `Patient${JSON.stringify(this.toJson())}`;
  }

  validate(): { error: string | null } {
    const { error } = ConformanceValidator(this, 'EpisodeOfCare');
    return { error };
  }

  static builder(): EpisodeOfCareBuilder {
    return new EpisodeOfCareBuilder();
  }

  static builderFromJson(json: unknown | string): EpisodeOfCareBuilder {
    const episodeOfCare = json as EpisodeOfCare;
    const episodeOfCareBuilder = new EpisodeOfCareBuilder();
    return episodeOfCareBuilder.fromJSON(episodeOfCare);
  }

  constructor(args?: IEpisodeOfCare) {
    super();
    if (args) Object.assign(this, args);
  }
}
