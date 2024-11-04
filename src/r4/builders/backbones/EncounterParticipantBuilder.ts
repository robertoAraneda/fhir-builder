import { ICodeableConcept, IPeriod, IReference } from 'fhirtypes/dist/r4';
import { EncounterParticipant } from '../../models';
import { BackboneBuilder, IBuildable } from '../base';

/**
 * @description Interface for chaining the building of a EncounterParticipant
 * @interface IEncounterParticipantBuilder
 * @extends {IBuildable<EncounterParticipant>}
 */
interface IEncounterParticipantBuilder extends IBuildable<EncounterParticipant> {
  addType(value: ICodeableConcept): this;
  setPeriod(value: IPeriod): this;
  setIndividual(value: IReference): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a EncounterParticipant
 * @class EncounterParticipantBuilder
 * @extends {BackboneBuilder}
 * @implements {IEncounterParticipantBuilder}
 * @author Roberto Araneda Espinoza
 */
export class EncounterParticipantBuilder extends BackboneBuilder implements IEncounterParticipantBuilder {
  private readonly encounterParticipant: EncounterParticipant;

  constructor() {
    super();
    this.encounterParticipant = new EncounterParticipant();
  }

  /**
   * @description Builds the model
   * @returns {EncounterParticipant}
   */
  build(): EncounterParticipant {
    return Object.assign(this.encounterParticipant, super.build());
  }

  /**
   * @description Adds a value to the type array
   * @description Role of participant in encounter.
   * @param value - the value to add
   * @returns {this}
   */
  addType(value: ICodeableConcept): this {
    this.encounterParticipant.type = this.encounterParticipant.type || [];
    this.encounterParticipant.type.push(value);
    return this;
  }
  /**
   * @description Sets the period value
   * @description The period of time that the specified participant participated in the encounter. These can overlap or be sub-sets of the overall encounter's period.
   * @param value - the value to set
   * @returns {this}
   */
  setPeriod(value: IPeriod): this {
    this.encounterParticipant.period = value;
    return this;
  }

  /**
   * @description Sets the individual value
   * @description Persons involved in the encounter other than the patient.
   * @param value - the value to set
   * @returns {this}
   */
  setIndividual(value: IReference): this {
    this.encounterParticipant.individual = value;
    return this;
  }
}
