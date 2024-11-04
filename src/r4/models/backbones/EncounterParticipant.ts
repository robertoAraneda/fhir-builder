import { ICodeableConcept, IPeriod, IReference } from 'fhirtypes/dist/r4';
import { IEncounterParticipant, IOperationOutcome } from 'fhirtypes/dist/r4';
import { BackboneElement, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';

/**
  * @version R4 (v4.0.1)
  * @summary FHIR® Specification by HL7®
  * @description Class for EncounterParticipant BackboneElement
  undefined
  * @property {ICodeableConcept[]} type
  * @property {IPeriod} period
  * @property {IReference} individual
  * @author Roberto Araneda Espinoza
  */
export class EncounterParticipant
  extends BackboneElement
  implements IEncounterParticipant, IValidatable, ISerializable
{
  /**
   * @description Role of participant in encounter.
   */
  type?: ICodeableConcept[];

  /**
   * @description The period of time that the specified participant participated in the encounter. These can overlap or be sub-sets of the overall encounter's period.
   */
  period?: IPeriod;

  /**
   * @description Persons involved in the encounter other than the patient.
   */
  individual?: IReference;

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
    return `EncounterParticipant${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `EncounterParticipant${JSON.stringify(this.toJson(), null, 2)}`;
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
    return ConformanceValidator('EncounterParticipant', this);
  }

  constructor(args?: IEncounterParticipant) {
    super();
    if (args) Object.assign(this, args);
  }
}
