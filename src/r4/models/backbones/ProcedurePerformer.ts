import { ICodeableConcept, IReference } from 'fhirtypes/dist/r4';
import { IProcedurePerformer, IOperationOutcome } from 'fhirtypes/dist/r4';
import { BackboneElement, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';

/**
  * @version R4 (v4.0.1)
  * @summary FHIR® Specification by HL7®
  * @description Class for ProcedurePerformer BackboneElement
  undefined
  * @property {ICodeableConcept} function
  * @property {IReference} actor
  * @property {IReference} onBehalfOf
  * @author Roberto Araneda Espinoza
  */
export class ProcedurePerformer extends BackboneElement implements IProcedurePerformer, IValidatable, ISerializable {
  /**
   * @description Distinguishes the type of involvement of the performer in the procedure. For example, surgeon, anaesthetist, endoscopist.
   */
  function?: ICodeableConcept;

  /**
   * @description The practitioner who was involved in the procedure.
   */
  actor: IReference;

  /**
   * @description The organization the device or practitioner was acting on behalf of.
   */
  onBehalfOf?: IReference;

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
    return `ProcedurePerformer${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `ProcedurePerformer${JSON.stringify(this.toJson(), null, 2)}`;
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
    return ConformanceValidator('ProcedurePerformer', this);
  }

  constructor(args?: IProcedurePerformer) {
    super();
    if (args) Object.assign(this, args);
  }
}
