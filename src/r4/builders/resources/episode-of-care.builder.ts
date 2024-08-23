import {
  EpisodeOfCareStatusType,
  ICodeableConcept,
  IElement,
  IEpisodeOfCareDiagnosis,
  IEpisodeOfCareStatusHistory,
  IIdentifier,
  IPeriod,
  IReference,
} from 'fhirtypes/dist/r4';
import { EpisodeOfCare } from '../../models';
import { IBuildable } from '../base/buildable.interface';
import { UnderscoreKeys } from '../base/resource-type-map.interface';
import { DomainResourceBuilder } from '../base/domain-resource.builder';

type PrimitiveExtensionFields = keyof Pick<EpisodeOfCare, UnderscoreKeys<EpisodeOfCare>>;

interface IEpisodeOfCareBuilder extends IBuildable<EpisodeOfCare> {
  addIdentifier(identifier: IIdentifier): this;
  setStatus(status: EpisodeOfCareStatusType): this;
  addStatusHistory(statusHistory: IEpisodeOfCareStatusHistory): this;
  addType(type: ICodeableConcept): this;
  addDiagnosis(diagnosis: IEpisodeOfCareDiagnosis): this;
  setPatient(patient: IReference): this;
  setManagingOrganization(managingOrganization: IReference): this;
  setPeriod(period: IPeriod): this;
  addReferralRequest(referralRequest: IReference): this;
  setCareManager(careManager: IReference): this;
  addTeam(team: IReference): this;
  addAccount(account: IReference): this;
}

export class EpisodeOfCareBuilder extends DomainResourceBuilder implements IEpisodeOfCareBuilder {
  private readonly episodeOfCare: EpisodeOfCare;

  constructor() {
    super();
    this.episodeOfCare = new EpisodeOfCare();
  }

  fromJSON(json: unknown): this {
    const incomingJson = typeof json === 'string' ? JSON.parse(json) : json;

    Object.assign(this.episodeOfCare, incomingJson);
    return this;
  }

  addPrimitiveExtension(param: PrimitiveExtensionFields, extension: IElement): this {
    this.episodeOfCare[param] = extension;
    return this;
  }

  addIdentifier(identifier: IIdentifier): this {
    this.episodeOfCare.identifier = this.episodeOfCare.identifier || [];
    this.episodeOfCare.identifier.push(identifier);
    return this;
  }

  setStatus(status: EpisodeOfCareStatusType): this {
    this.episodeOfCare.status = status;
    return this;
  }

  addStatusHistory(statusHistory: IEpisodeOfCareStatusHistory): this {
    this.episodeOfCare.statusHistory = this.episodeOfCare.statusHistory || [];
    this.episodeOfCare.statusHistory.push(statusHistory);
    return this;
  }

  addType(type: ICodeableConcept): this {
    this.episodeOfCare.type = this.episodeOfCare.type || [];
    this.episodeOfCare.type.push(type);
    return this;
  }

  addDiagnosis(diagnosis: IEpisodeOfCareDiagnosis): this {
    this.episodeOfCare.diagnosis = this.episodeOfCare.diagnosis || [];
    this.episodeOfCare.diagnosis.push(diagnosis);
    return this;
  }

  setPatient(patient: IReference): this {
    this.episodeOfCare.patient = patient;
    return this;
  }

  setManagingOrganization(managingOrganization: IReference): this {
    this.episodeOfCare.managingOrganization = managingOrganization;
    return this;
  }

  setPeriod(period: IPeriod): this {
    this.episodeOfCare.period = period;
    return this;
  }

  addReferralRequest(referralRequest: IReference): this {
    this.episodeOfCare.referralRequest = this.episodeOfCare.referralRequest || [];
    this.episodeOfCare.referralRequest.push(referralRequest);
    return this;
  }

  setCareManager(careManager: IReference): this {
    this.episodeOfCare.careManager = careManager;
    return this;
  }

  addTeam(team: IReference): this {
    this.episodeOfCare.team = this.episodeOfCare.team || [];
    this.episodeOfCare.team.push(team);
    return this;
  }

  addAccount(account: IReference): this {
    this.episodeOfCare.account = this.episodeOfCare.account || [];
    this.episodeOfCare.account.push(account);
    return this;
  }

  build(): EpisodeOfCare {
    return Object.assign(this.episodeOfCare, super.build());
  }
}
