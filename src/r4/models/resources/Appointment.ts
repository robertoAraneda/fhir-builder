import {
  IIdentifier,
  IElement,
  ICodeableConcept,
  IReference,
  IAppointmentParticipant,
  IPeriod,
} from 'fhirtypes/dist/r4';
import { IAppointment, IOperationOutcome } from 'fhirtypes/dist/r4';
import { DomainResource, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';
import { AppointmentStatusType } from 'fhirtypes/dist/r4/types';

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for Appointment Resource
 * @property {string} resourceType
 * @property {IIdentifier[]} identifier
 * @property {string} status
 * @property {IElement} _status
 * @property {ICodeableConcept} cancelationReason
 * @property {ICodeableConcept[]} serviceCategory
 * @property {ICodeableConcept[]} serviceType
 * @property {ICodeableConcept[]} specialty
 * @property {ICodeableConcept} appointmentType
 * @property {ICodeableConcept[]} reasonCode
 * @property {IReference[]} reasonReference
 * @property {number} priority
 * @property {IElement} _priority
 * @property {string} description
 * @property {IElement} _description
 * @property {IReference[]} supportingInformation
 * @property {string} start
 * @property {IElement} _start
 * @property {string} end
 * @property {IElement} _end
 * @property {number} minutesDuration
 * @property {IElement} _minutesDuration
 * @property {IReference[]} slot
 * @property {string} created
 * @property {IElement} _created
 * @property {string} comment
 * @property {IElement} _comment
 * @property {string} patientInstruction
 * @property {IElement} _patientInstruction
 * @property {IReference[]} basedOn
 * @property {IAppointmentParticipant[]} participant
 * @property {IPeriod[]} requestedPeriod
 * @author Roberto Araneda Espinoza
 */
export class Appointment extends DomainResource implements IAppointment, IValidatable, ISerializable {
  /**
   * @description The type of resource
   */
  resourceType? = 'Appointment';

  /**
   * @description This records identifiers associated with this appointment concern that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
   */
  identifier?: IIdentifier[];

  /**
   * @description The overall status of the Appointment. Each of the participants has their own participation status which indicates their involvement in the process, however this status indicates the shared status.
   */
  status: AppointmentStatusType;

  /**
   * @description Extensions for status
   */
  _status?: IElement;

  /**
   * @description The coded reason for the appointment being cancelled. This is often used in reporting/billing/futher processing to determine if further actions are required, or specific fees apply.
   */
  cancelationReason?: ICodeableConcept;

  /**
   * @description A broad categorization of the service that is to be performed during this appointment.
   */
  serviceCategory?: ICodeableConcept[];

  /**
   * @description The specific service that is to be performed during this appointment.
   */
  serviceType?: ICodeableConcept[];

  /**
   * @description The specialty of a practitioner that would be required to perform the service requested in this appointment.
   */
  specialty?: ICodeableConcept[];

  /**
   * @description The style of appointment or patient that has been booked in the slot (not service type).
   */
  appointmentType?: ICodeableConcept;

  /**
   * @description The coded reason that this appointment is being scheduled. This is more clinical than administrative.
   */
  reasonCode?: ICodeableConcept[];

  /**
   * @description Reason the appointment has been scheduled to take place, as specified using information from another resource. When the patient arrives and the encounter begins it may be used as the admission diagnosis. The indication will typically be a Condition (with other resources referenced in the evidence.detail), or a Procedure.
   */
  reasonReference?: IReference[];

  /**
   * @description The priority of the appointment. Can be used to make informed decisions if needing to re-prioritize appointments. (The iCal Standard specifies 0 as undefined, 1 as highest, 9 as lowest priority).
   */
  priority?: number;

  /**
   * @description Extensions for priority
   */
  _priority?: IElement;

  /**
   * @description The brief description of the appointment as would be shown on a subject line in a meeting request, or appointment list. Detailed or expanded information should be put in the comment field.
   */
  description?: string;

  /**
   * @description Extensions for description
   */
  _description?: IElement;

  /**
   * @description Additional information to support the appointment provided when making the appointment.
   */
  supportingInformation?: IReference[];

  /**
   * @description Date/Time that the appointment is to take place.
   */
  start?: string;

  /**
   * @description Extensions for start
   */
  _start?: IElement;

  /**
   * @description Date/Time that the appointment is to conclude.
   */
  end?: string;

  /**
   * @description Extensions for end
   */
  _end?: IElement;

  /**
   * @description Number of minutes that the appointment is to take. This can be less than the duration between the start and end times.  For example, where the actual time of appointment is only an estimate or if a 30 minute appointment is being requested, but any time would work.  Also, if there is, for example, a planned 15 minute break in the middle of a long appointment, the duration may be 15 minutes less than the difference between the start and end.
   */
  minutesDuration?: number;

  /**
   * @description Extensions for minutesDuration
   */
  _minutesDuration?: IElement;

  /**
   * @description The slots from the participants' schedules that will be filled by the appointment.
   */
  slot?: IReference[];

  /**
   * @description The date that this appointment was initially created. This could be different to the meta.lastModified value on the initial entry, as this could have been before the resource was created on the FHIR server, and should remain unchanged over the lifespan of the appointment.
   */
  created?: string;

  /**
   * @description Extensions for created
   */
  _created?: IElement;

  /**
   * @description Additional comments about the appointment.
   */
  comment?: string;

  /**
   * @description Extensions for comment
   */
  _comment?: IElement;

  /**
   * @description While Appointment.comment contains information for internal use, Appointment.patientInstructions is used to capture patient facing information about the Appointment (e.g. please bring your referral or fast from 8pm night before).
   */
  patientInstruction?: string;

  /**
   * @description Extensions for patientInstruction
   */
  _patientInstruction?: IElement;

  /**
   * @description The service request this appointment is allocated to assess (e.g. incoming referral or procedure request).
   */
  basedOn?: IReference[];

  /**
   * @description List of participants involved in the appointment.
   */
  participant: IAppointmentParticipant[];

  /**
   * @description A set of date ranges (potentially including times) that the appointment is preferred to be scheduled within.

The duration (usually in minutes) could also be provided to indicate the length of the appointment to fill and populate the start/end times for the actual allocated time. However, in other situations the duration may be calculated by the scheduling system.
   */
  requestedPeriod?: IPeriod[];

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
    return `Appointment${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `Appointment${JSON.stringify(this.toJson(), null, 2)}`;
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
    return ConformanceValidator('Appointment', this);
  }

  constructor(args?: IAppointment) {
    super();
    if (args) Object.assign(this, args);
  }
}
