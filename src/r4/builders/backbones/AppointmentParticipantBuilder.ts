import { ICodeableConcept, IReference, IElement, IPeriod } from 'fhirtypes/dist/r4';
import { AppointmentParticipant } from '../../models';
import { BackboneBuilder, IBuildable } from '../base';
import { ExtractUnderscoreKeys } from '../../../core/commons/utils';
import { ParticipantRequiredType, ParticipationStatusType } from 'fhirtypes/dist/r4/types';

// Extract the keys that start with an underscore
type PrimitiveExtensionFields = ExtractUnderscoreKeys<AppointmentParticipant>;

/**
 * @description Interface for chaining the building of a AppointmentParticipant
 * @interface IAppointmentParticipantBuilder
 * @extends {IBuildable<AppointmentParticipant>}
 */
interface IAppointmentParticipantBuilder extends IBuildable<AppointmentParticipant> {
  addType(value: ICodeableConcept): this;
  setActor(value: IReference): this;
  setRequired(value: ParticipantRequiredType): this;
  setStatus(value: ParticipationStatusType): this;
  setPeriod(value: IPeriod): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a AppointmentParticipant
 * @class AppointmentParticipantBuilder
 * @extends {BackboneBuilder}
 * @implements {IAppointmentParticipantBuilder}
 * @author Roberto Araneda Espinoza
 */
export class AppointmentParticipantBuilder extends BackboneBuilder implements IAppointmentParticipantBuilder {
  private readonly appointmentParticipant: AppointmentParticipant;

  constructor() {
    super();
    this.appointmentParticipant = new AppointmentParticipant();
  }

  /**
   * @description Adds a primitive extension to the element
   * @param param - the field to add the extension to
   * @param extension - the extension to add
   * @returns {this}
   * @example addPrimitiveExtension('_value', { value: 'test' })
   */
  addPrimitiveExtension(param: PrimitiveExtensionFields, extension: IElement): this {
    this.appointmentParticipant[param] = extension;
    return this;
  }

  /**
   * @description Builds the model
   * @returns {AppointmentParticipant}
   */
  build(): AppointmentParticipant {
    return Object.assign(this.appointmentParticipant, super.build());
  }

  /**
   * @description Adds a value to the type array
   * @description Role of participant in the appointment.
   * @param value - the value to add
   * @returns {this}
   */
  addType(value: ICodeableConcept): this {
    this.appointmentParticipant.type = this.appointmentParticipant.type || [];
    this.appointmentParticipant.type.push(value);
    return this;
  }
  /**
   * @description Sets the actor value
   * @description A Person, Location/HealthcareService or Device that is participating in the appointment.
   * @param value - the value to set
   * @returns {this}
   */
  setActor(value: IReference): this {
    this.appointmentParticipant.actor = value;
    return this;
  }

  /**
   * @description Sets the required value
   * @description Whether this participant is required to be present at the meeting. This covers a use-case where two doctors need to meet to discuss the results for a specific patient, and the patient is not required to be present.
   * @param value - the value to set
   * @returns {this}
   */
  setRequired(value: ParticipantRequiredType): this {
    this.appointmentParticipant.required = value;
    return this;
  }

  /**
   * @description Sets the status value
   * @description Participation status of the actor.
   * @param value - the value to set
   * @returns {this}
   */
  setStatus(value: ParticipationStatusType): this {
    this.appointmentParticipant.status = value;
    return this;
  }

  /**
   * @description Sets the period value
   * @description Participation period of the actor.
   * @param value - the value to set
   * @returns {this}
   */
  setPeriod(value: IPeriod): this {
    this.appointmentParticipant.period = value;
    return this;
  }
}
