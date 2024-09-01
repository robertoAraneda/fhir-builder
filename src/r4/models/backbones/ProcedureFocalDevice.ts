import { ICodeableConcept, IReference } from 'fhirtypes/dist/r4';
import { IProcedureFocalDevice, IOperationOutcome } from 'fhirtypes/dist/r4';
import { BackboneElement, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';

/**
  * @version R4 (v4.0.1)
  * @summary FHIR® Specification by HL7®
  * @description Class for ProcedureFocalDevice BackboneElement
  undefined
  * @property {ICodeableConcept} action
  * @property {IReference} manipulated
  * @author Roberto Araneda Espinoza
  */
export class ProcedureFocalDevice
  extends BackboneElement
  implements IProcedureFocalDevice, IValidatable, ISerializable
{
  /**
   * @description The kind of change that happened to the device during the procedure.
   */
  action?: ICodeableConcept;

  /**
   * @description The device that was manipulated (changed) during the procedure.
   */
  manipulated: IReference;

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
    return `ProcedureFocalDevice${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `ProcedureFocalDevice${JSON.stringify(this.toJson(), null, 2)}`;
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
    return ConformanceValidator('ProcedureFocalDevice', this);
  }

  constructor(args?: IProcedureFocalDevice) {
    super();
    if (args) Object.assign(this, args);
  }
}
