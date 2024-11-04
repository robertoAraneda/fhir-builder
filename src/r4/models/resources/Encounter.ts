import {
  IIdentifier,
  IElement,
  IEncounterStatusHistory,
  ICoding,
  IEncounterClassHistory,
  ICodeableConcept,
  IReference,
  IEncounterParticipant,
  IPeriod,
  IDuration,
  IEncounterDiagnosis,
  IEncounterHospitalization,
  IEncounterLocation,
  EncounterStatusType,
} from 'fhirtypes/dist/r4';
import { IEncounter, IOperationOutcome } from 'fhirtypes/dist/r4';
import { DomainResource, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for Encounter Resource
 * @property {string} resourceType
 * @property {IIdentifier[]} identifier
 * @property {string} status
 * @property {IElement} _status
 * @property {IEncounterStatusHistory[]} statusHistory
 * @property {ICoding} class
 * @property {IEncounterClassHistory[]} classHistory
 * @property {ICodeableConcept[]} type
 * @property {ICodeableConcept} serviceType
 * @property {ICodeableConcept} priority
 * @property {IReference} subject
 * @property {IReference[]} episodeOfCare
 * @property {IReference[]} basedOn
 * @property {IEncounterParticipant[]} participant
 * @property {IReference[]} appointment
 * @property {IPeriod} period
 * @property {IDuration} length
 * @property {ICodeableConcept[]} reasonCode
 * @property {IReference[]} reasonReference
 * @property {IEncounterDiagnosis[]} diagnosis
 * @property {IReference[]} account
 * @property {IEncounterHospitalization} hospitalization
 * @property {IEncounterLocation[]} location
 * @property {IReference} serviceProvider
 * @property {IReference} partOf
 * @author Roberto Araneda Espinoza
 */
export class Encounter extends DomainResource implements IEncounter, IValidatable, ISerializable {
  /**
   * @description The type of resource
   */
  resourceType? = 'Encounter';

  /**
   * @description Identifier(s) by which this encounter is known.
   */
  identifier?: IIdentifier[];

  /**
   * @description planned | arrived | triaged | in-progress | onleave | finished | cancelled +.
   */
  status: EncounterStatusType;

  /**
   * @description Extensions for status
   */
  _status?: IElement;

  /**
   * @description The status history permits the encounter resource to contain the status history without needing to read through the historical versions of the resource, or even have the server store them.
   */
  statusHistory?: IEncounterStatusHistory[];

  /**
   * @description Concepts representing classification of patient encounter such as ambulatory (outpatient), inpatient, emergency, home health or others due to local variations.
   */
  class: ICoding;

  /**
   * @description The class history permits the tracking of the encounters transitions without needing to go  through the resource history.  This would be used for a case where an admission starts of as an emergency encounter, then transitions into an inpatient scenario. Doing this and not restarting a new encounter ensures that any lab/diagnostic results can more easily follow the patient and not require re-processing and not get lost or cancelled during a kind of discharge from emergency to inpatient.
   */
  classHistory?: IEncounterClassHistory[];

  /**
   * @description Specific type of encounter (e.g. e-mail consultation, surgical day-care, skilled nursing, rehabilitation).
   */
  type?: ICodeableConcept[];

  /**
   * @description Broad categorization of the service that is to be provided (e.g. cardiology).
   */
  serviceType?: ICodeableConcept;

  /**
   * @description Indicates the urgency of the encounter.
   */
  priority?: ICodeableConcept;

  /**
   * @description The patient or group present at the encounter.
   */
  subject?: IReference;

  /**
   * @description Where a specific encounter should be classified as a part of a specific episode(s) of care this field should be used. This association can facilitate grouping of related encounters together for a specific purpose, such as government reporting, issue tracking, association via a common problem.  The association is recorded on the encounter as these are typically created after the episode of care and grouped on entry rather than editing the episode of care to append another encounter to it (the episode of care could span years).
   */
  episodeOfCare?: IReference[];

  /**
   * @description The request this encounter satisfies (e.g. incoming referral or procedure request).
   */
  basedOn?: IReference[];

  /**
   * @description The list of people responsible for providing the service.
   */
  participant?: IEncounterParticipant[];

  /**
   * @description The appointment that scheduled this encounter.
   */
  appointment?: IReference[];

  /**
   * @description The start and end time of the encounter.
   */
  period?: IPeriod;

  /**
   * @description Quantity of time the encounter lasted. This excludes the time during leaves of absence.
   */
  length?: IDuration;

  /**
   * @description Reason the encounter takes place, expressed as a code. For admissions, this can be used for a coded admission diagnosis.
   */
  reasonCode?: ICodeableConcept[];

  /**
   * @description Reason the encounter takes place, expressed as a code. For admissions, this can be used for a coded admission diagnosis.
   */
  reasonReference?: IReference[];

  /**
   * @description The list of diagnosis relevant to this encounter.
   */
  diagnosis?: IEncounterDiagnosis[];

  /**
   * @description The set of accounts that may be used for billing for this Encounter.
   */
  account?: IReference[];

  /**
   * @description Details about the admission to a healthcare service.
   */
  hospitalization?: IEncounterHospitalization;

  /**
   * @description List of locations where  the patient has been during this encounter.
   */
  location?: IEncounterLocation[];

  /**
   * @description The organization that is primarily responsible for this Encounter's services. This MAY be the same as the organization on the Patient record, however it could be different, such as if the actor performing the services was from an external organization (which may be billed seperately) for an external consultation.  Refer to the example bundle showing an abbreviated set of Encounters for a colonoscopy.
   */
  serviceProvider?: IReference;

  /**
   * @description Another Encounter of which this encounter is a part of (administratively or in time).
   */
  partOf?: IReference;

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
    return `Encounter${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `Encounter${JSON.stringify(this.toJson(), null, 2)}`;
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
    return ConformanceValidator('Encounter', this);
  }

  constructor(args?: IEncounter) {
    super();
    if (args) Object.assign(this, args);
  }
}
