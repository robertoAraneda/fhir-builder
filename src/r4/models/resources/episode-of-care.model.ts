import { DomainResource } from '../base/domain-resource.model';
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

export class EpisodeOfCare extends DomainResource implements IEpisodeOfCare {
  resourceType?: 'EpisodeOfCare';
  _status: IElement;
  account: IReference[];
  careManager: IReference;
  diagnosis: IEpisodeOfCareDiagnosis[];
  identifier: IIdentifier[];
  managingOrganization: IReference;
  patient: IReference;
  period: IPeriod;
  referralRequest: IReference[];
  status: EpisodeOfCareStatusType;
  statusHistory: IEpisodeOfCareStatusHistory[];
  team: IReference[];
  type: ICodeableConcept[];

  toJson(): EpisodeOfCare {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `Patient${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `Patient${JSON.stringify(this.toJson())}`;
  }
}
