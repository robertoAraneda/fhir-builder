import {
  IIdentifier,
  IElement,
  IEpisodeOfCareStatusHistory,
  ICodeableConcept,
  IEpisodeOfCareDiagnosis,
  IReference,
  IPeriod,
  EpisodeOfCareStatusType,
} from 'fhirtypes/dist/r4';
import { EpisodeOfCare } from '../../models';
import { DomainResourceBuilder, IBuildable } from '../base';
import { ExtractUnderscoreKeys } from '../../../core/commons/utils';

// Extract the keys that start with an underscore
type PrimitiveExtensionFields = ExtractUnderscoreKeys<EpisodeOfCare>;

/**
 * @description Interface for chaining the building of a EpisodeOfCare
 * @interface IEpisodeOfCareBuilder
 * @extends {IBuildable<EpisodeOfCare>}
 */
interface IEpisodeOfCareBuilder extends IBuildable<EpisodeOfCare> {
  addIdentifier(value: IIdentifier): this;
  setStatus(value: EpisodeOfCareStatusType): this;
  addStatusHistory(value: IEpisodeOfCareStatusHistory): this;
  addType(value: ICodeableConcept): this;
  addDiagnosis(value: IEpisodeOfCareDiagnosis): this;
  setPatient(value: IReference): this;
  setManagingOrganization(value: IReference): this;
  setPeriod(value: IPeriod): this;
  addReferralRequest(value: IReference): this;
  setCareManager(value: IReference): this;
  addTeam(value: IReference): this;
  addAccount(value: IReference): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a EpisodeOfCare
 * @class EpisodeOfCareBuilder
 * @extends {DomainResourceBuilder}
 * @implements {IEpisodeOfCareBuilder}
 * @author Roberto Araneda Espinoza
 */
export class EpisodeOfCareBuilder extends DomainResourceBuilder implements IEpisodeOfCareBuilder {
  private readonly episodeOfCare: EpisodeOfCare;

  constructor() {
    super();
    this.episodeOfCare = new EpisodeOfCare();
  }

  /**
   * @description Adds a primitive extension to the element
   * @param param - the field to add the extension to
   * @param extension - the extension to add
   * @returns {this}
   * @example addPrimitiveExtension('_value', { value: 'test' })
   */
  addPrimitiveExtension(param: PrimitiveExtensionFields, extension: IElement): this {
    this.episodeOfCare[param] = extension;
    return this;
  }

  /**
   * @description Builds the model
   * @returns {EpisodeOfCare}
   */
  build(): EpisodeOfCare {
    return Object.assign(this.episodeOfCare, super.build());
  }

  /**
   * @description Adds a value to the identifier array
   * @description The EpisodeOfCare may be known by different identifiers for different contexts of use, such as when an external agency is tracking the Episode for funding purposes.
   * @param value - the value to add
   * @returns {this}
   */
  addIdentifier(value: IIdentifier): this {
    this.episodeOfCare.identifier = this.episodeOfCare.identifier || [];
    this.episodeOfCare.identifier.push(value);
    return this;
  }
  /**
   * @description Sets the status value
   * @description planned | waitlist | active | onhold | finished | cancelled.
   * @param value - the value to set
   * @returns {this}
   */
  setStatus(value: EpisodeOfCareStatusType): this {
    this.episodeOfCare.status = value;
    return this;
  }

  /**
   * @description Adds a value to the statusHistory array
   * @description The history of statuses that the EpisodeOfCare has been through (without requiring processing the history of the resource).
   * @param value - the value to add
   * @returns {this}
   */
  addStatusHistory(value: IEpisodeOfCareStatusHistory): this {
    this.episodeOfCare.statusHistory = this.episodeOfCare.statusHistory || [];
    this.episodeOfCare.statusHistory.push(value);
    return this;
  }
  /**
   * @description Adds a value to the type array
   * @description A classification of the type of episode of care; e.g. specialist referral, disease management, type of funded care.
   * @param value - the value to add
   * @returns {this}
   */
  addType(value: ICodeableConcept): this {
    this.episodeOfCare.type = this.episodeOfCare.type || [];
    this.episodeOfCare.type.push(value);
    return this;
  }
  /**
   * @description Adds a value to the diagnosis array
   * @description The list of diagnosis relevant to this episode of care.
   * @param value - the value to add
   * @returns {this}
   */
  addDiagnosis(value: IEpisodeOfCareDiagnosis): this {
    this.episodeOfCare.diagnosis = this.episodeOfCare.diagnosis || [];
    this.episodeOfCare.diagnosis.push(value);
    return this;
  }
  /**
   * @description Sets the patient value
   * @description The patient who is the focus of this episode of care.
   * @param value - the value to set
   * @returns {this}
   */
  setPatient(value: IReference): this {
    this.episodeOfCare.patient = value;
    return this;
  }

  /**
   * @description Sets the managingOrganization value
   * @description The organization that has assumed the specific responsibilities for the specified duration.
   * @param value - the value to set
   * @returns {this}
   */
  setManagingOrganization(value: IReference): this {
    this.episodeOfCare.managingOrganization = value;
    return this;
  }

  /**
   * @description Sets the period value
   * @description The interval during which the managing organization assumes the defined responsibility.
   * @param value - the value to set
   * @returns {this}
   */
  setPeriod(value: IPeriod): this {
    this.episodeOfCare.period = value;
    return this;
  }

  /**
   * @description Adds a value to the referralRequest array
   * @description Referral Request(s) that are fulfilled by this EpisodeOfCare, incoming referrals.
   * @param value - the value to add
   * @returns {this}
   */
  addReferralRequest(value: IReference): this {
    this.episodeOfCare.referralRequest = this.episodeOfCare.referralRequest || [];
    this.episodeOfCare.referralRequest.push(value);
    return this;
  }
  /**
   * @description Sets the careManager value
   * @description The practitioner that is the care manager/care coordinator for this patient.
   * @param value - the value to set
   * @returns {this}
   */
  setCareManager(value: IReference): this {
    this.episodeOfCare.careManager = value;
    return this;
  }

  /**
   * @description Adds a value to the team array
   * @description The list of practitioners that may be facilitating this episode of care for specific purposes.
   * @param value - the value to add
   * @returns {this}
   */
  addTeam(value: IReference): this {
    this.episodeOfCare.team = this.episodeOfCare.team || [];
    this.episodeOfCare.team.push(value);
    return this;
  }
  /**
   * @description Adds a value to the account array
   * @description The set of accounts that may be used for billing for this EpisodeOfCare.
   * @param value - the value to add
   * @returns {this}
   */
  addAccount(value: IReference): this {
    this.episodeOfCare.account = this.episodeOfCare.account || [];
    this.episodeOfCare.account.push(value);
    return this;
  }

  /**
   * @description Sets the resource type to EpisodeOfCare
   * @param json - the json to parse
   * @returns {this}
   */
  fromJSON(json: unknown): this {
    const incomingData = typeof json === 'string' ? JSON.parse(json) : json;
    Object.assign(this.episodeOfCare, incomingData);
    return this;
  }
}
