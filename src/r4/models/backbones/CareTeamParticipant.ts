import { ICodeableConcept, IReference, IPeriod } from 'fhirtypes/dist/r4';
import { ICareTeamParticipant, IOperationOutcome } from 'fhirtypes/dist/r4';
import { BackboneElement, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for CareTeamParticipant BackboneElement
 * @property {ICodeableConcept[]} role
 * @property {IReference} member
 * @property {IReference} onBehalfOf
 * @property {IPeriod} period
 * @author Roberto Araneda Espinoza
 */
export class CareTeamParticipant extends BackboneElement implements ICareTeamParticipant, IValidatable, ISerializable {
  /**
   * @description Indicates specific responsibility of an individual within the care team, such as "Primary care physician", "Trained social worker counselor", "Caregiver", etc.
   */
  role?: ICodeableConcept[];

  /**
   * @description The specific person or organization who is participating/expected to participate in the care team.
   */
  member?: IReference;

  /**
   * @description The organization of the practitioner.
   */
  onBehalfOf?: IReference;

  /**
   * @description Indicates when the specific member or organization did (or is intended to) come into effect and end.
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
    return `CareTeamParticipant${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `CareTeamParticipant${JSON.stringify(this.toJson(), null, 2)}`;
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
    return ConformanceValidator('CareTeamParticipant', this);
  }

  constructor(args?: ICareTeamParticipant) {
    super();
    if (args) Object.assign(this, args);
  }
}
