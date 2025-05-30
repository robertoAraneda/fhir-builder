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
import { Encounter } from '../../models';
import { DomainResourceBuilder, IBuildable } from '../base';
import { ExtractUnderscoreKeys } from '../../../core/commons/utils';

// Extract the keys that start with an underscore
type PrimitiveExtensionFields = ExtractUnderscoreKeys<Encounter>;

/**
 * @description Interface for chaining the building of a Encounter
 * @interface IEncounterBuilder
 * @extends {IBuildable<Encounter>}
 */
interface IEncounterBuilder extends IBuildable<Encounter> {
  addIdentifier(value: IIdentifier): this;
  setStatus(value: EncounterStatusType): this;
  addStatusHistory(value: IEncounterStatusHistory): this;
  setClass(value: ICoding): this;
  addClassHistory(value: IEncounterClassHistory): this;
  addType(value: ICodeableConcept): this;
  setServiceType(value: ICodeableConcept): this;
  setPriority(value: ICodeableConcept): this;
  setSubject(value: IReference): this;
  addEpisodeOfCare(value: IReference): this;
  addBasedOn(value: IReference): this;
  addParticipant(value: IEncounterParticipant): this;
  addAppointment(value: IReference): this;
  setPeriod(value: IPeriod): this;
  setLength(value: IDuration): this;
  addReasonCode(value: ICodeableConcept): this;
  addReasonReference(value: IReference): this;
  addDiagnosis(value: IEncounterDiagnosis): this;
  addAccount(value: IReference): this;
  setHospitalization(value: IEncounterHospitalization): this;
  addLocation(value: IEncounterLocation): this;
  setServiceProvider(value: IReference): this;
  setPartOf(value: IReference): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a Encounter
 * @class EncounterBuilder
 * @extends {DomainResourceBuilder}
 * @implements {IEncounterBuilder}
 * @author Roberto Araneda Espinoza
 */
export class EncounterBuilder extends DomainResourceBuilder implements IEncounterBuilder {
  private readonly encounter: Encounter;

  constructor() {
    super();
    this.encounter = new Encounter();
  }

  /**
   * @description Sets the resource type to Encounter
   * @param json - the json to parse
   * @returns {this}
   */
  fromJSON(json: unknown): this {
    const incomingData = typeof json === 'string' ? JSON.parse(json) : json;
    Object.assign(this.encounter, incomingData);
    return this;
  }

  /**
   * @description Adds a primitive extension to the element
   * @param param - the field to add the extension to
   * @param extension - the extension to add
   * @returns {this}
   * @example addPrimitiveExtension('_value', { value: 'test' })
   */
  addPrimitiveExtension(param: PrimitiveExtensionFields, extension: IElement): this {
    this.encounter[param] = extension;
    return this;
  }

  /**
   * @description Builds the model
   * @returns {Encounter}
   */
  build(): Encounter {
    return Object.assign(this.encounter, super.build());
  }

  /**
   * @description Adds a value to the identifier array
   * @description Identifier(s) by which this encounter is known.
   * @param value - the value to add
   * @returns {this}
   */
  addIdentifier(value: IIdentifier): this {
    this.encounter.identifier = this.encounter.identifier || [];
    this.encounter.identifier.push(value);
    return this;
  }
  /**
   * @description Sets the status value
   * @description planned | arrived | triaged | in-progress | onleave | finished | cancelled +.
   * @param value - the value to set
   * @returns {this}
   */
  setStatus(value: EncounterStatusType): this {
    this.encounter.status = value;
    return this;
  }

  /**
   * @description Adds a value to the statusHistory array
   * @description The status history permits the encounter resource to contain the status history without needing to read through the historical versions of the resource, or even have the server store them.
   * @param value - the value to add
   * @returns {this}
   */
  addStatusHistory(value: IEncounterStatusHistory): this {
    this.encounter.statusHistory = this.encounter.statusHistory || [];
    this.encounter.statusHistory.push(value);
    return this;
  }
  /**
   * @description Sets the class value
   * @description Concepts representing classification of patient encounter such as ambulatory (outpatient), inpatient, emergency, home health or others due to local variations.
   * @param value - the value to set
   * @returns {this}
   */
  setClass(value: ICoding): this {
    this.encounter.class = value;
    return this;
  }

  /**
   * @description Adds a value to the classHistory array
   * @description The class history permits the tracking of the encounters transitions without needing to go  through the resource history.  This would be used for a case where an admission starts of as an emergency encounter, then transitions into an inpatient scenario. Doing this and not restarting a new encounter ensures that any lab/diagnostic results can more easily follow the patient and not require re-processing and not get lost or cancelled during a kind of discharge from emergency to inpatient.
   * @param value - the value to add
   * @returns {this}
   */
  addClassHistory(value: IEncounterClassHistory): this {
    this.encounter.classHistory = this.encounter.classHistory || [];
    this.encounter.classHistory.push(value);
    return this;
  }
  /**
   * @description Adds a value to the type array
   * @description Specific type of encounter (e.g. e-mail consultation, surgical day-care, skilled nursing, rehabilitation).
   * @param value - the value to add
   * @returns {this}
   */
  addType(value: ICodeableConcept): this {
    this.encounter.type = this.encounter.type || [];
    this.encounter.type.push(value);
    return this;
  }
  /**
   * @description Sets the serviceType value
   * @description Broad categorization of the service that is to be provided (e.g. cardiology).
   * @param value - the value to set
   * @returns {this}
   */
  setServiceType(value: ICodeableConcept): this {
    this.encounter.serviceType = value;
    return this;
  }

  /**
   * @description Sets the priority value
   * @description Indicates the urgency of the encounter.
   * @param value - the value to set
   * @returns {this}
   */
  setPriority(value: ICodeableConcept): this {
    this.encounter.priority = value;
    return this;
  }

  /**
   * @description Sets the subject value
   * @description The patient or group present at the encounter.
   * @param value - the value to set
   * @returns {this}
   */
  setSubject(value: IReference): this {
    this.encounter.subject = value;
    return this;
  }

  /**
   * @description Adds a value to the episodeOfCare array
   * @description Where a specific encounter should be classified as a part of a specific episode(s) of care this field should be used. This association can facilitate grouping of related encounters together for a specific purpose, such as government reporting, issue tracking, association via a common problem.  The association is recorded on the encounter as these are typically created after the episode of care and grouped on entry rather than editing the episode of care to append another encounter to it (the episode of care could span years).
   * @param value - the value to add
   * @returns {this}
   */
  addEpisodeOfCare(value: IReference): this {
    this.encounter.episodeOfCare = this.encounter.episodeOfCare || [];
    this.encounter.episodeOfCare.push(value);
    return this;
  }
  /**
   * @description Adds a value to the basedOn array
   * @description The request this encounter satisfies (e.g. incoming referral or procedure request).
   * @param value - the value to add
   * @returns {this}
   */
  addBasedOn(value: IReference): this {
    this.encounter.basedOn = this.encounter.basedOn || [];
    this.encounter.basedOn.push(value);
    return this;
  }
  /**
   * @description Adds a value to the participant array
   * @description The list of people responsible for providing the service.
   * @param value - the value to add
   * @returns {this}
   */
  addParticipant(value: IEncounterParticipant): this {
    this.encounter.participant = this.encounter.participant || [];
    this.encounter.participant.push(value);
    return this;
  }
  /**
   * @description Adds a value to the appointment.json array
   * @description The appointment.json that scheduled this encounter.
   * @param value - the value to add
   * @returns {this}
   */
  addAppointment(value: IReference): this {
    this.encounter.appointment = this.encounter.appointment || [];
    this.encounter.appointment.push(value);
    return this;
  }
  /**
   * @description Sets the period value
   * @description The start and end time of the encounter.
   * @param value - the value to set
   * @returns {this}
   */
  setPeriod(value: IPeriod): this {
    this.encounter.period = value;
    return this;
  }

  /**
   * @description Sets the length value
   * @description Quantity of time the encounter lasted. This excludes the time during leaves of absence.
   * @param value - the value to set
   * @returns {this}
   */
  setLength(value: IDuration): this {
    this.encounter.length = value;
    return this;
  }

  /**
   * @description Adds a value to the reasonCode array
   * @description Reason the encounter takes place, expressed as a code. For admissions, this can be used for a coded admission diagnosis.
   * @param value - the value to add
   * @returns {this}
   */
  addReasonCode(value: ICodeableConcept): this {
    this.encounter.reasonCode = this.encounter.reasonCode || [];
    this.encounter.reasonCode.push(value);
    return this;
  }
  /**
   * @description Adds a value to the reasonReference array
   * @description Reason the encounter takes place, expressed as a code. For admissions, this can be used for a coded admission diagnosis.
   * @param value - the value to add
   * @returns {this}
   */
  addReasonReference(value: IReference): this {
    this.encounter.reasonReference = this.encounter.reasonReference || [];
    this.encounter.reasonReference.push(value);
    return this;
  }
  /**
   * @description Adds a value to the diagnosis array
   * @description The list of diagnosis relevant to this encounter.
   * @param value - the value to add
   * @returns {this}
   */
  addDiagnosis(value: IEncounterDiagnosis): this {
    this.encounter.diagnosis = this.encounter.diagnosis || [];
    this.encounter.diagnosis.push(value);
    return this;
  }
  /**
   * @description Adds a value to the account array
   * @description The set of accounts that may be used for billing for this Encounter.
   * @param value - the value to add
   * @returns {this}
   */
  addAccount(value: IReference): this {
    this.encounter.account = this.encounter.account || [];
    this.encounter.account.push(value);
    return this;
  }
  /**
   * @description Sets the hospitalization value
   * @description Details about the admission to a healthcare service.
   * @param value - the value to set
   * @returns {this}
   */
  setHospitalization(value: IEncounterHospitalization): this {
    this.encounter.hospitalization = value;
    return this;
  }

  /**
   * @description Adds a value to the location array
   * @description List of locations where  the patient has been during this encounter.
   * @param value - the value to add
   * @returns {this}
   */
  addLocation(value: IEncounterLocation): this {
    this.encounter.location = this.encounter.location || [];
    this.encounter.location.push(value);
    return this;
  }
  /**
   * @description Sets the serviceProvider value
   * @description The organization that is primarily responsible for this Encounter's services. This MAY be the same as the organization on the Patient record, however it could be different, such as if the actor performing the services was from an external organization (which may be billed seperately) for an external consultation.  Refer to the example bundle showing an abbreviated set of Encounters for a colonoscopy.
   * @param value - the value to set
   * @returns {this}
   */
  setServiceProvider(value: IReference): this {
    this.encounter.serviceProvider = value;
    return this;
  }

  /**
   * @description Sets the partOf value
   * @description Another Encounter of which this encounter is a part of (administratively or in time).
   * @param value - the value to set
   * @returns {this}
   */
  setPartOf(value: IReference): this {
    this.encounter.partOf = value;
    return this;
  }
}
