import {
  EpisodeOfCareStatusType,
  ICodeableConcept,
  IElement,
  IEpisodeOfCareDiagnosis,
  IEpisodeOfCareStatusHistory,
  IExtension,
  IIdentifier,
  INarrative,
  IPeriod,
  IReference,
} from 'fhirtypes/dist/r4';
import { EpisodeOfCare } from '../../models';
import { IBuildable } from '../base/IBuildable';
import { DomainResourceBuilder } from '../base/DomainResourceBuilder';

interface IEpisodeOfCareBuilder extends IBuildable<EpisodeOfCare> {
  // EpisodeOfCare properties
  addParamExtension(param: 'status', extension: IElement): this;
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

  setId(id: string): this {
    this.episodeOfCare.id = id;
    return this;
  }

  setMeta(meta: any): this {
    this.episodeOfCare.meta = meta;
    return this;
  }

  setImplicitRules(implicitRules: string): this {
    this.episodeOfCare.implicitRules = implicitRules;
    return this;
  }

  setLanguage(language: string): this {
    this.episodeOfCare.language = language;
    return this;
  }

  setText(text: INarrative): this {
    this.episodeOfCare.text = text;
    return this;
  }

  addContained(contained: any): this {
    this.episodeOfCare.contained = this.episodeOfCare.contained || [];
    this.episodeOfCare.contained.push(contained);
    return this;
  }

  addExtension(extension: IExtension): this {
    this.episodeOfCare.extension = this.episodeOfCare.extension || [];
    this.episodeOfCare.extension.push(extension);
    return this;
  }

  addModifierExtension(modifierExtension: IExtension): this {
    this.episodeOfCare.modifierExtension = this.episodeOfCare.modifierExtension || [];
    this.episodeOfCare.modifierExtension.push(modifierExtension);
    return this;
  }

  fromJSON(json: unknown): this {
    const incomingJson = typeof json === 'string' ? JSON.parse(json) : json;

    Object.assign(this.episodeOfCare, incomingJson);
    return this;
  }

  addParamExtension(param: 'status', extension: IElement): this {
    this.episodeOfCare[`_${param}`] = extension;
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
    return this.episodeOfCare;
  }
}
