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
import { ICareTeam, IOperationOutcome } from 'fhirtypes/dist/r4';
import { DomainResource, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for CareTeam Resource
 * @property {string} resourceType
 * @property {IIdentifier[]} identifier
 * @property {CareTeamStatusType} status
 * @property {IElement} _status
 * @property {ICodeableConcept[]} category
 * @property {string} name
 * @property {IElement} _name
 * @property {IReference} subject
 * @property {IReference} encounter
 * @property {IPeriod} period
 * @property {ICareTeamParticipant[]} participant
 * @property {ICodeableConcept[]} reasonCode
 * @property {IReference[]} reasonReference
 * @property {IReference[]} managingOrganization
 * @property {IContactPoint[]} telecom
 * @property {IAnnotation[]} note
 * @author Roberto Araneda Espinoza
 */
export class CareTeam extends DomainResource implements ICareTeam, IValidatable, ISerializable {
  /**
   * @description The type of resource
   */
  resourceType? = 'CareTeam';

  /**
   * @description Business identifiers assigned to this care team by the performer or other systems which remain constant as the resource is updated and propagates from server to server.
   */
  identifier?: IIdentifier[];

  /**
   * @description Indicates the current state of the care team.
proposed | active | suspended | inactive | entered-in-error.
   */
  status?: CareTeamStatusType;

  /**
   * @description Extensions for status
   */
  _status?: IElement;

  /**
   * @description Identifies what kind of team.  This is to support differentiation between multiple co-existing teams, such as care plan team, episode of care team, longitudinal care team.
   */
  category?: ICodeableConcept[];

  /**
   * @description A label for human use intended to distinguish like teams.  E.g. the "red" vs. "green" trauma teams.
   */
  name?: string;

  /**
   * @description Extensions for name
   */
  _name?: IElement;

  /**
   * @description Identifies the patient or group whose intended care is handled by the team.
   */
  subject?: IReference;

  /**
   * @description The Encounter during which this CareTeam was created or to which the creation of this record is tightly associated.
   */
  encounter?: IReference;

  /**
   * @description Indicates when the team did (or is intended to) come into effect and end.
   */
  period?: IPeriod;

  /**
   * @description Identifies all people and organizations who are expected to be involved in the care team.
   */
  participant?: ICareTeamParticipant[];

  /**
   * @description Describes why the care team exists.
   */
  reasonCode?: ICodeableConcept[];

  /**
   * @description Condition(s) that this care team addresses.
   */
  reasonReference?: IReference[];

  /**
   * @description The organization responsible for the care team.
   */
  managingOrganization?: IReference[];

  /**
   * @description A central contact detail for the care team (that applies to all members).
   */
  telecom?: IContactPoint[];

  /**
   * @description Comments made about the CareTeam.
   */
  note?: IAnnotation[];

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
    return `CareTeam${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `CareTeam${JSON.stringify(this.toJson(), null, 2)}`;
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
    return ConformanceValidator('CareTeam', this);
  }

  constructor(args?: ICareTeam) {
    super();
    if (args) Object.assign(this, args);
  }
}
