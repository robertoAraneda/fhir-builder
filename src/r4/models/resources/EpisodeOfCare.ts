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
import { IEpisodeOfCare, IOperationOutcome } from 'fhirtypes/dist/r4';
import { DomainResource, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for EpisodeOfCare Resource
 * @property {string} resourceType
 * @property {IIdentifier[]} identifier
 * @property {EpisodeOfCareStatusType} status
 * @property {IElement} _status
 * @property {IEpisodeOfCareStatusHistory[]} statusHistory
 * @property {ICodeableConcept[]} type
 * @property {IEpisodeOfCareDiagnosis[]} diagnosis
 * @property {IReference} patient
 * @property {IReference} managingOrganization
 * @property {IPeriod} period
 * @property {IReference[]} referralRequest
 * @property {IReference} careManager
 * @property {IReference[]} team
 * @property {IReference[]} account
 * @author Roberto Araneda Espinoza
 */
export class EpisodeOfCare extends DomainResource implements IEpisodeOfCare, IValidatable, ISerializable {
  /**
   * @description The type of resource
   */
  resourceType? = 'EpisodeOfCare';

  /**
   * @description The EpisodeOfCare may be known by different identifiers for different contexts of use, such as when an external agency is tracking the Episode for funding purposes.
   */
  identifier?: IIdentifier[];

  /**
   * @description planned | waitlist | active | onhold | finished | cancelled.
   */
  status: EpisodeOfCareStatusType;

  /**
   * @description Extensions for status
   */
  _status?: IElement;

  /**
   * @description The history of statuses that the EpisodeOfCare has been through (without requiring processing the history of the resource).
   */
  statusHistory?: IEpisodeOfCareStatusHistory[];

  /**
   * @description A classification of the type of episode of care; e.g. specialist referral, disease management, type of funded care.
   */
  type?: ICodeableConcept[];

  /**
   * @description The list of diagnosis relevant to this episode of care.
   */
  diagnosis?: IEpisodeOfCareDiagnosis[];

  /**
   * @description The patient who is the focus of this episode of care.
   */
  patient: IReference;

  /**
   * @description The organization that has assumed the specific responsibilities for the specified duration.
   */
  managingOrganization?: IReference;

  /**
   * @description The interval during which the managing organization assumes the defined responsibility.
   */
  period?: IPeriod;

  /**
   * @description Referral Request(s) that are fulfilled by this EpisodeOfCare, incoming referrals.
   */
  referralRequest?: IReference[];

  /**
   * @description The practitioner that is the care manager/care coordinator for this patient.
   */
  careManager?: IReference;

  /**
   * @description The list of practitioners that may be facilitating this episode of care for specific purposes.
   */
  team?: IReference[];

  /**
   * @description The set of accounts that may be used for billing for this EpisodeOfCare.
   */
  account?: IReference[];

  /**
   * @description Returns a JSON representation of the model
   * @returns {Record<string, any>}
   */
  toJson(): Record<string, any> {
    return JSON.parse(JSON.stringify(this));
  }

  /**
   * @description Returns a string representation of the model
   * @returns {string}
   */
  toString(): string {
    return `EpisodeOfCare${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `EpisodeOfCare${JSON.stringify(this.toJson(), null, 2)}`;
  }

  /**
   * @description Returns a serialized string representation of the model
   * @returns {string}
   */
  serialize(): string {
    return JSON.stringify(this.toJson());
  }

  /**
   * @description Validates the model
   * @returns {isValid: boolean, operationOutcome: IOperationOutcome}
   */
  validate(): { isValid: boolean; operationOutcome: IOperationOutcome } {
    return ConformanceValidator('EpisodeOfCare', this);
  }

  constructor(args?: IEpisodeOfCare) {
    super();
    if (args) Object.assign(this, args);
  }
}
