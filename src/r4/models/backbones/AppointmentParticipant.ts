import { ICodeableConcept, IReference, IElement, IPeriod } from 'fhirtypes/dist/r4';
import { IAppointmentParticipant, IOperationOutcome } from 'fhirtypes/dist/r4';
import { BackboneElement, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';
import { ParticipantRequiredType, ParticipationStatusType } from 'fhirtypes/dist/r4/types';

/**
  * @version R4 (v4.0.1)
  * @summary FHIR® Specification by HL7®
  * @description Class for AppointmentParticipant BackboneElement
  undefined
  * @property {ICodeableConcept[]} type
  * @property {IReference} actor
  * @property {string} required
  * @property {IElement} _required
  * @property {string} status
  * @property {IElement} _status
  * @property {IPeriod} period
  * @author Roberto Araneda Espinoza
  */
export class AppointmentParticipant
  extends BackboneElement
  implements IAppointmentParticipant, IValidatable, ISerializable
{
  /**
   * @description Role of participant in the appointment.
   */
  type?: ICodeableConcept[];

  /**
   * @description A Person, Location/HealthcareService or Device that is participating in the appointment.
   */
  actor?: IReference;

  /**
   * @description Whether this participant is required to be present at the meeting. This covers a use-case where two doctors need to meet to discuss the results for a specific patient, and the patient is not required to be present.
   */
  required?: ParticipantRequiredType;

  /**
   * @description Extensions for required
   */
  _required?: IElement;

  /**
   * @description Participation status of the actor.
   */
  status: ParticipationStatusType;

  /**
   * @description Extensions for status
   */
  _status?: IElement;

  /**
   * @description Participation period of the actor.
   */
  period?: IPeriod;

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
    return `AppointmentParticipant${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `AppointmentParticipant${JSON.stringify(this.toJson(), null, 2)}`;
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
    return ConformanceValidator('AppointmentParticipant', this);
  }

  constructor(args?: IAppointmentParticipant) {
    super();
    if (args) Object.assign(this, args);
  }
}
