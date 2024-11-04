import { IReference, ICodeableConcept, IElement } from 'fhirtypes/dist/r4';
import { IEncounterDiagnosis, IOperationOutcome } from 'fhirtypes/dist/r4';
import { BackboneElement, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';

/**
  * @version R4 (v4.0.1)
  * @summary FHIR® Specification by HL7®
  * @description Class for EncounterDiagnosis BackboneElement
  undefined
  * @property {IReference} condition
  * @property {ICodeableConcept} use
  * @property {number} rank
  * @property {IElement} _rank
  * @author Roberto Araneda Espinoza
  */
export class EncounterDiagnosis extends BackboneElement implements IEncounterDiagnosis, IValidatable, ISerializable {
  /**
   * @description Reason the encounter takes place, as specified using information from another resource. For admissions, this is the admission diagnosis. The indication will typically be a Condition (with other resources referenced in the evidence.detail), or a Procedure.
   */
  condition: IReference;

  /**
   * @description Role that this diagnosis has within the encounter (e.g. admission, billing, discharge …).
   */
  use?: ICodeableConcept;

  /**
   * @description Ranking of the diagnosis (for each role type).
   */
  rank?: number;

  /**
   * @description Extensions for rank
   */
  _rank?: IElement;

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
    return `EncounterDiagnosis${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `EncounterDiagnosis${JSON.stringify(this.toJson(), null, 2)}`;
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
    return ConformanceValidator('EncounterDiagnosis', this);
  }

  constructor(args?: IEncounterDiagnosis) {
    super();
    if (args) Object.assign(this, args);
  }
}
