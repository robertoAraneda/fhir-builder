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
  IResource,
} from 'fhirtypes/dist/r4';
import { EpisodeOfCare } from '../../models';

interface IEpisodeOfCareBuilder {
  // Resource properties
  setId(id: string): this;
  setMeta(meta: any): this;
  setImplicitRules(implicitRules: string): this;
  setLanguage(language: string): this;

  // DomainResource properties
  setText(text: INarrative): this;
  addContained(contained: IResource): this;
  setMultipleContained(contained: IResource[]): this;
  addExtension(extension: IExtension): this;
  setMultipleExtension(extension: IExtension[]): this;
  addModifierExtension(modifierExtension: IExtension): this;
  setMultipleModifierExtension(modifierExtension: IExtension[]): this;

  // EpisodeOfCare properties
  addParamExtension(param: 'status', extension: IElement): this;
  addIdentifier(identifier: IIdentifier): this;
  setMultipleIdentifier(identifiers: IIdentifier[]): this;
  setStatus(status: EpisodeOfCareStatusType): this;
  addStatusHistory(statusHistory: IEpisodeOfCareStatusHistory): this;
  setMultipleStatusHistory(statusHistory: IEpisodeOfCareStatusHistory[]): this;
  addType(type: ICodeableConcept): this;
  setMultipleType(type: ICodeableConcept[]): this;
  addDiagnosis(diagnosis: IEpisodeOfCareDiagnosis): this;
  setMultipleDiagnosis(diagnosis: IEpisodeOfCareDiagnosis[]): this;
  setPatient(patient: IReference): this;
  setManagingOrganization(managingOrganization: IReference): this;
  setPeriod(period: IPeriod): this;
  addReferralRequest(referralRequest: IReference): this;
  setMultipleReferralRequest(referralRequest: IReference[]): this;
  setCareManager(careManager: IReference): this;
  addTeam(team: IReference): this;
  setMultipleTeam(team: IReference[]): this;
  addAccount(account: IReference): this;
  setMultipleAccount(account: IReference[]): this;
  fromJSON(json: unknown | string): this;
}

export class EpisodeOfCareBuilder implements IEpisodeOfCareBuilder {
  private readonly episodeOfCare: EpisodeOfCare;

  constructor() {
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

  setMultipleContained(contained: any[]): this {
    this.episodeOfCare.contained = contained;
    return this as unknown as this;
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

  setMultipleExtension(extension: IExtension[]): this {
    this.episodeOfCare.extension = extension;
    return this;
  }

  setMultipleModifierExtension(modifierExtension: IExtension[]): this {
    this.episodeOfCare.modifierExtension = modifierExtension;
    return this;
  }

  fromJSON(json: unknown | string): this {
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

  setMultipleIdentifier(identifiers: IIdentifier[]): this {
    this.episodeOfCare.identifier = identifiers;
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

  setMultipleStatusHistory(statusHistory: IEpisodeOfCareStatusHistory[]): this {
    this.episodeOfCare.statusHistory = statusHistory;
    return this;
  }

  addType(type: ICodeableConcept): this {
    this.episodeOfCare.type = this.episodeOfCare.type || [];
    this.episodeOfCare.type.push(type);
    return this;
  }

  setMultipleType(types: ICodeableConcept[]): this {
    this.episodeOfCare.type = types;
    return this;
  }

  addDiagnosis(diagnosis: IEpisodeOfCareDiagnosis): this {
    this.episodeOfCare.diagnosis = this.episodeOfCare.diagnosis || [];
    this.episodeOfCare.diagnosis.push(diagnosis);
    return this;
  }

  setMultipleDiagnosis(diagnoses: IEpisodeOfCareDiagnosis[]): this {
    this.episodeOfCare.diagnosis = diagnoses;
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

  setMultipleReferralRequest(referralRequests: IReference[]): this {
    this.episodeOfCare.referralRequest = referralRequests;
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

  setMultipleTeam(teams: IReference[]): this {
    this.episodeOfCare.team = teams;
    return this;
  }

  addAccount(account: IReference): this {
    this.episodeOfCare.account = this.episodeOfCare.account || [];
    this.episodeOfCare.account.push(account);
    return this;
  }

  setMultipleAccount(accounts: IReference[]): this {
    this.episodeOfCare.account = accounts;
    return this;
  }

  build(): EpisodeOfCare {
    return this.episodeOfCare;
  }
}
