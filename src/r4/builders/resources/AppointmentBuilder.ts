import {
  IIdentifier,
  IElement,
  ICodeableConcept,
  IReference,
  IAppointmentParticipant,
  IPeriod,
} from 'fhirtypes/dist/r4';
import { Appointment } from '../../models';
import { DomainResourceBuilder, IBuildable } from '../base';
import { ExtractUnderscoreKeys } from '../../../core/commons/utils';
import { AppointmentStatusType } from 'fhirtypes/dist/r4/types';

// Extract the keys that start with an underscore
type PrimitiveExtensionFields = ExtractUnderscoreKeys<Appointment>;

/**
 * @description Interface for chaining the building of a Appointment
 * @interface IAppointmentBuilder
 * @extends {IBuildable<Appointment>}
 */
interface IAppointmentBuilder extends IBuildable<Appointment> {
  addIdentifier(value: IIdentifier): this;
  setStatus(value: AppointmentStatusType): this;
  setCancelationReason(value: ICodeableConcept): this;
  addServiceCategory(value: ICodeableConcept): this;
  addServiceType(value: ICodeableConcept): this;
  addSpecialty(value: ICodeableConcept): this;
  setAppointmentType(value: ICodeableConcept): this;
  addReasonCode(value: ICodeableConcept): this;
  addReasonReference(value: IReference): this;
  setPriority(value: number): this;
  setDescription(value: string): this;
  addSupportingInformation(value: IReference): this;
  setStart(value: string): this;
  setEnd(value: string): this;
  setMinutesDuration(value: number): this;
  addSlot(value: IReference): this;
  setCreated(value: string): this;
  setComment(value: string): this;
  setPatientInstruction(value: string): this;
  addBasedOn(value: IReference): this;
  addParticipant(value: IAppointmentParticipant): this;
  addRequestedPeriod(value: IPeriod): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a Appointment
 * @class AppointmentBuilder
 * @extends {DomainResourceBuilder}
 * @implements {IAppointmentBuilder}
 * @author Roberto Araneda Espinoza
 */
export class AppointmentBuilder extends DomainResourceBuilder implements IAppointmentBuilder {
  private readonly appointment: Appointment;

  constructor() {
    super();
    this.appointment = new Appointment();
  }

  /**
   * @description Sets the resource type to Appointment
   * @param json - the json to parse
   * @returns {this}
   */
  fromJSON(json: unknown): this {
    const incomingData = typeof json === 'string' ? JSON.parse(json) : json;
    Object.assign(this.appointment, incomingData);
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
    this.appointment[param] = extension;
    return this;
  }

  /**
   * @description Builds the model
   * @returns {Appointment}
   */
  build(): Appointment {
    return Object.assign(this.appointment, super.build());
  }

  /**
   * @description Adds a value to the identifier array
   * @description This records identifiers associated with this appointment concern that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
   * @param value - the value to add
   * @returns {this}
   */
  addIdentifier(value: IIdentifier): this {
    this.appointment.identifier = this.appointment.identifier || [];
    this.appointment.identifier.push(value);
    return this;
  }
  /**
   * @description Sets the status value
   * @description The overall status of the Appointment. Each of the participants has their own participation status which indicates their involvement in the process, however this status indicates the shared status.
   * @param value - the value to set
   * @returns {this}
   */
  setStatus(value: AppointmentStatusType): this {
    this.appointment.status = value;
    return this;
  }

  /**
   * @description Sets the cancelationReason value
   * @description The coded reason for the appointment being cancelled. This is often used in reporting/billing/futher processing to determine if further actions are required, or specific fees apply.
   * @param value - the value to set
   * @returns {this}
   */
  setCancelationReason(value: ICodeableConcept): this {
    this.appointment.cancelationReason = value;
    return this;
  }

  /**
   * @description Adds a value to the serviceCategory array
   * @description A broad categorization of the service that is to be performed during this appointment.
   * @param value - the value to add
   * @returns {this}
   */
  addServiceCategory(value: ICodeableConcept): this {
    this.appointment.serviceCategory = this.appointment.serviceCategory || [];
    this.appointment.serviceCategory.push(value);
    return this;
  }
  /**
   * @description Adds a value to the serviceType array
   * @description The specific service that is to be performed during this appointment.
   * @param value - the value to add
   * @returns {this}
   */
  addServiceType(value: ICodeableConcept): this {
    this.appointment.serviceType = this.appointment.serviceType || [];
    this.appointment.serviceType.push(value);
    return this;
  }
  /**
   * @description Adds a value to the specialty array
   * @description The specialty of a practitioner that would be required to perform the service requested in this appointment.
   * @param value - the value to add
   * @returns {this}
   */
  addSpecialty(value: ICodeableConcept): this {
    this.appointment.specialty = this.appointment.specialty || [];
    this.appointment.specialty.push(value);
    return this;
  }
  /**
   * @description Sets the appointmentType value
   * @description The style of appointment or patient that has been booked in the slot (not service type).
   * @param value - the value to set
   * @returns {this}
   */
  setAppointmentType(value: ICodeableConcept): this {
    this.appointment.appointmentType = value;
    return this;
  }

  /**
   * @description Adds a value to the reasonCode array
   * @description The coded reason that this appointment is being scheduled. This is more clinical than administrative.
   * @param value - the value to add
   * @returns {this}
   */
  addReasonCode(value: ICodeableConcept): this {
    this.appointment.reasonCode = this.appointment.reasonCode || [];
    this.appointment.reasonCode.push(value);
    return this;
  }
  /**
   * @description Adds a value to the reasonReference array
   * @description Reason the appointment has been scheduled to take place, as specified using information from another resource. When the patient arrives and the encounter begins it may be used as the admission diagnosis. The indication will typically be a Condition (with other resources referenced in the evidence.detail), or a Procedure.
   * @param value - the value to add
   * @returns {this}
   */
  addReasonReference(value: IReference): this {
    this.appointment.reasonReference = this.appointment.reasonReference || [];
    this.appointment.reasonReference.push(value);
    return this;
  }
  /**
   * @description Sets the priority value
   * @description The priority of the appointment. Can be used to make informed decisions if needing to re-prioritize appointments. (The iCal Standard specifies 0 as undefined, 1 as highest, 9 as lowest priority).
   * @param value - the value to set
   * @returns {this}
   */
  setPriority(value: number): this {
    this.appointment.priority = value;
    return this;
  }

  /**
   * @description Sets the description value
   * @description The brief description of the appointment as would be shown on a subject line in a meeting request, or appointment list. Detailed or expanded information should be put in the comment field.
   * @param value - the value to set
   * @returns {this}
   */
  setDescription(value: string): this {
    this.appointment.description = value;
    return this;
  }

  /**
   * @description Adds a value to the supportingInformation array
   * @description Additional information to support the appointment provided when making the appointment.
   * @param value - the value to add
   * @returns {this}
   */
  addSupportingInformation(value: IReference): this {
    this.appointment.supportingInformation = this.appointment.supportingInformation || [];
    this.appointment.supportingInformation.push(value);
    return this;
  }
  /**
   * @description Sets the start value
   * @description Date/Time that the appointment is to take place.
   * @param value - the value to set
   * @returns {this}
   */
  setStart(value: string): this {
    this.appointment.start = value;
    return this;
  }

  /**
   * @description Sets the end value
   * @description Date/Time that the appointment is to conclude.
   * @param value - the value to set
   * @returns {this}
   */
  setEnd(value: string): this {
    this.appointment.end = value;
    return this;
  }

  /**
   * @description Sets the minutesDuration value
   * @description Number of minutes that the appointment is to take. This can be less than the duration between the start and end times.  For example, where the actual time of appointment is only an estimate or if a 30 minute appointment is being requested, but any time would work.  Also, if there is, for example, a planned 15 minute break in the middle of a long appointment, the duration may be 15 minutes less than the difference between the start and end.
   * @param value - the value to set
   * @returns {this}
   */
  setMinutesDuration(value: number): this {
    this.appointment.minutesDuration = value;
    return this;
  }

  /**
   * @description Adds a value to the slot array
   * @description The slots from the participants' schedules that will be filled by the appointment.
   * @param value - the value to add
   * @returns {this}
   */
  addSlot(value: IReference): this {
    this.appointment.slot = this.appointment.slot || [];
    this.appointment.slot.push(value);
    return this;
  }
  /**
   * @description Sets the created value
   * @description The date that this appointment was initially created. This could be different to the meta.lastModified value on the initial entry, as this could have been before the resource was created on the FHIR server, and should remain unchanged over the lifespan of the appointment.
   * @param value - the value to set
   * @returns {this}
   */
  setCreated(value: string): this {
    this.appointment.created = value;
    return this;
  }

  /**
   * @description Sets the comment value
   * @description Additional comments about the appointment.
   * @param value - the value to set
   * @returns {this}
   */
  setComment(value: string): this {
    this.appointment.comment = value;
    return this;
  }

  /**
   * @description Sets the patientInstruction value
   * @description While Appointment.comment contains information for internal use, Appointment.patientInstructions is used to capture patient facing information about the Appointment (e.g. please bring your referral or fast from 8pm night before).
   * @param value - the value to set
   * @returns {this}
   */
  setPatientInstruction(value: string): this {
    this.appointment.patientInstruction = value;
    return this;
  }

  /**
   * @description Adds a value to the basedOn array
   * @description The service request this appointment is allocated to assess (e.g. incoming referral or procedure request).
   * @param value - the value to add
   * @returns {this}
   */
  addBasedOn(value: IReference): this {
    this.appointment.basedOn = this.appointment.basedOn || [];
    this.appointment.basedOn.push(value);
    return this;
  }
  /**
   * @description Adds a value to the participant array
   * @description List of participants involved in the appointment.
   * @param value - the value to add
   * @returns {this}
   */
  addParticipant(value: IAppointmentParticipant): this {
    this.appointment.participant = this.appointment.participant || [];
    this.appointment.participant.push(value);
    return this;
  }
  /**
    * @description Adds a value to the requestedPeriod array
    * @description A set of date ranges (potentially including times) that the appointment is preferred to be scheduled within.

The duration (usually in minutes) could also be provided to indicate the length of the appointment to fill and populate the start/end times for the actual allocated time. However, in other situations the duration may be calculated by the scheduling system.
    * @param value - the value to add
    * @returns {this}
    */
  addRequestedPeriod(value: IPeriod): this {
    this.appointment.requestedPeriod = this.appointment.requestedPeriod || [];
    this.appointment.requestedPeriod.push(value);
    return this;
  }
}
