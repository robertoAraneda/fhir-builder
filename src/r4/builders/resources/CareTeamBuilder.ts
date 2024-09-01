import {
  IIdentifier,
  IElement,
  ICodeableConcept,
  IReference,
  IPeriod,
  ICareTeamParticipant,
  IContactPoint,
  IAnnotation,
  CareTeamStatusType,
} from 'fhirtypes/dist/r4';
import { CareTeam } from '../../models';
import { DomainResourceBuilder, IBuildable } from '../base';
import { ExtractUnderscoreKeys } from '../../../core/commons/utils';

// Extract the keys that start with an underscore
type PrimitiveExtensionFields = ExtractUnderscoreKeys<CareTeam>;

/**
 * @description Interface for chaining the building of a CareTeam
 * @interface ICareTeamBuilder
 * @extends {IBuildable<CareTeam>}
 */
interface ICareTeamBuilder extends IBuildable<CareTeam> {
  addIdentifier(value: IIdentifier): this;
  setStatus(value: CareTeamStatusType): this;
  addCategory(value: ICodeableConcept): this;
  setName(value: string): this;
  setSubject(value: IReference): this;
  setEncounter(value: IReference): this;
  setPeriod(value: IPeriod): this;
  addParticipant(value: ICareTeamParticipant): this;
  addReasonCode(value: ICodeableConcept): this;
  addReasonReference(value: IReference): this;
  addManagingOrganization(value: IReference): this;
  addTelecom(value: IContactPoint): this;
  addNote(value: IAnnotation): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a CareTeam
 * @class CareTeamBuilder
 * @extends {DomainResourceBuilder}
 * @implements {ICareTeamBuilder}
 * @author Roberto Araneda Espinoza
 */
export class CareTeamBuilder extends DomainResourceBuilder implements ICareTeamBuilder {
  private readonly careTeam: CareTeam;

  constructor() {
    super();
    this.careTeam = new CareTeam();
  }

  /**
   * @description Sets the resource type to CareTeam
   * @param json - the json to parse
   * @returns {this}
   */
  fromJSON(json: unknown): this {
    const incomingData = typeof json === 'string' ? JSON.parse(json) : json;
    Object.assign(this.careTeam, incomingData);
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
    this.careTeam[param] = extension;
    return this;
  }

  /**
   * @description Builds the model
   * @returns {CareTeam}
   */
  build(): CareTeam {
    return Object.assign(this.careTeam, super.build());
  }

  /**
   * @description Adds a value to the identifier array
   * @description Business identifiers assigned to this care team by the performer or other systems which remain constant as the resource is updated and propagates from server to server.
   * @param value - the value to add
   * @returns {this}
   */
  addIdentifier(value: IIdentifier): this {
    this.careTeam.identifier = this.careTeam.identifier || [];
    this.careTeam.identifier.push(value);
    return this;
  }
  /**
    * @description Sets the status value
    * @description Indicates the current state of the care team.
proposed | active | suspended | inactive | entered-in-error.
    * @param value - the value to set
    * @returns {this}
    */
  setStatus(value: CareTeamStatusType): this {
    this.careTeam.status = value;
    return this;
  }

  /**
   * @description Adds a value to the category array
   * @description Identifies what kind of team.  This is to support differentiation between multiple co-existing teams, such as care plan team, episode of care team, longitudinal care team.
   * @param value - the value to add
   * @returns {this}
   */
  addCategory(value: ICodeableConcept): this {
    this.careTeam.category = this.careTeam.category || [];
    this.careTeam.category.push(value);
    return this;
  }
  /**
   * @description Sets the name value
   * @description A label for human use intended to distinguish like teams.  E.g. the "red" vs. "green" trauma teams.
   * @param value - the value to set
   * @returns {this}
   */
  setName(value: string): this {
    this.careTeam.name = value;
    return this;
  }

  /**
   * @description Sets the subject value
   * @description Identifies the patient or group whose intended care is handled by the team.
   * @param value - the value to set
   * @returns {this}
   */
  setSubject(value: IReference): this {
    this.careTeam.subject = value;
    return this;
  }

  /**
   * @description Sets the encounter value
   * @description The Encounter during which this CareTeam was created or to which the creation of this record is tightly associated.
   * @param value - the value to set
   * @returns {this}
   */
  setEncounter(value: IReference): this {
    this.careTeam.encounter = value;
    return this;
  }

  /**
   * @description Sets the period value
   * @description Indicates when the team did (or is intended to) come into effect and end.
   * @param value - the value to set
   * @returns {this}
   */
  setPeriod(value: IPeriod): this {
    this.careTeam.period = value;
    return this;
  }

  /**
   * @description Adds a value to the participant array
   * @description Identifies all people and organizations who are expected to be involved in the care team.
   * @param value - the value to add
   * @returns {this}
   */
  addParticipant(value: ICareTeamParticipant): this {
    this.careTeam.participant = this.careTeam.participant || [];
    this.careTeam.participant.push(value);
    return this;
  }
  /**
   * @description Adds a value to the reasonCode array
   * @description Describes why the care team exists.
   * @param value - the value to add
   * @returns {this}
   */
  addReasonCode(value: ICodeableConcept): this {
    this.careTeam.reasonCode = this.careTeam.reasonCode || [];
    this.careTeam.reasonCode.push(value);
    return this;
  }
  /**
   * @description Adds a value to the reasonReference array
   * @description Condition(s) that this care team addresses.
   * @param value - the value to add
   * @returns {this}
   */
  addReasonReference(value: IReference): this {
    this.careTeam.reasonReference = this.careTeam.reasonReference || [];
    this.careTeam.reasonReference.push(value);
    return this;
  }
  /**
   * @description Adds a value to the managingOrganization array
   * @description The organization responsible for the care team.
   * @param value - the value to add
   * @returns {this}
   */
  addManagingOrganization(value: IReference): this {
    this.careTeam.managingOrganization = this.careTeam.managingOrganization || [];
    this.careTeam.managingOrganization.push(value);
    return this;
  }
  /**
   * @description Adds a value to the telecom array
   * @description A central contact detail for the care team (that applies to all members).
   * @param value - the value to add
   * @returns {this}
   */
  addTelecom(value: IContactPoint): this {
    this.careTeam.telecom = this.careTeam.telecom || [];
    this.careTeam.telecom.push(value);
    return this;
  }
  /**
   * @description Adds a value to the note array
   * @description Comments made about the CareTeam.
   * @param value - the value to add
   * @returns {this}
   */
  addNote(value: IAnnotation): this {
    this.careTeam.note = this.careTeam.note || [];
    this.careTeam.note.push(value);
    return this;
  }
}
