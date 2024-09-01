import { ICodeableConcept, IReference, IPeriod } from 'fhirtypes/dist/r4';
import { CareTeamParticipant } from '../../models';
import { BackboneBuilder, IBuildable } from '../base';

/**
 * @description Interface for chaining the building of a CareTeamParticipant
 * @interface ICareTeamParticipantBuilder
 * @extends {IBuildable<CareTeamParticipant>}
 */
interface ICareTeamParticipantBuilder extends IBuildable<CareTeamParticipant> {
  addRole(value: ICodeableConcept): this;
  setMember(value: IReference): this;
  setOnBehalfOf(value: IReference): this;
  setPeriod(value: IPeriod): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a CareTeamParticipant
 * @class CareTeamParticipantBuilder
 * @extends {BackboneBuilder}
 * @implements {ICareTeamParticipantBuilder}
 * @author Roberto Araneda Espinoza
 */
export class CareTeamParticipantBuilder extends BackboneBuilder implements ICareTeamParticipantBuilder {
  private readonly careTeamParticipant: CareTeamParticipant;

  constructor() {
    super();
    this.careTeamParticipant = new CareTeamParticipant();
  }

  /**
   * @description Sets the resource type to CareTeamParticipant
   * @param json - the json to parse
   * @returns {this}
   */
  fromJSON(json: unknown): this {
    const incomingData = typeof json === 'string' ? JSON.parse(json) : json;
    Object.assign(this.careTeamParticipant, incomingData);
    return this;
  }

  /**
   * @description Builds the model
   * @returns {CareTeamParticipant}
   */
  build(): CareTeamParticipant {
    return Object.assign(this.careTeamParticipant, super.build());
  }

  /**
   * @description Adds a value to the role array
   * @description Indicates specific responsibility of an individual within the care team, such as "Primary care physician", "Trained social worker counselor", "Caregiver", etc.
   * @param value - the value to add
   * @returns {this}
   */
  addRole(value: ICodeableConcept): this {
    this.careTeamParticipant.role = this.careTeamParticipant.role || [];
    this.careTeamParticipant.role.push(value);
    return this;
  }
  /**
   * @description Sets the member value
   * @description The specific person or organization who is participating/expected to participate in the care team.
   * @param value - the value to set
   * @returns {this}
   */
  setMember(value: IReference): this {
    this.careTeamParticipant.member = value;
    return this;
  }

  /**
   * @description Sets the onBehalfOf value
   * @description The organization of the practitioner.
   * @param value - the value to set
   * @returns {this}
   */
  setOnBehalfOf(value: IReference): this {
    this.careTeamParticipant.onBehalfOf = value;
    return this;
  }

  /**
   * @description Sets the period value
   * @description Indicates when the specific member or organization did (or is intended to) come into effect and end.
   * @param value - the value to set
   * @returns {this}
   */
  setPeriod(value: IPeriod): this {
    this.careTeamParticipant.period = value;
    return this;
  }
}
