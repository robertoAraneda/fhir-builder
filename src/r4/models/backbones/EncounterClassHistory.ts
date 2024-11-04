import { ICoding, IPeriod } from 'fhirtypes/dist/r4';
import { IEncounterClassHistory, IOperationOutcome } from 'fhirtypes/dist/r4';
import { BackboneElement, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';

/**
  * @version R4 (v4.0.1)
  * @summary FHIR® Specification by HL7®
  * @description Class for EncounterClassHistory BackboneElement
  undefined
  * @property {ICoding} class
  * @property {IPeriod} period
  * @author Roberto Araneda Espinoza
  */
export class EncounterClassHistory
  extends BackboneElement
  implements IEncounterClassHistory, IValidatable, ISerializable
{
  /**
   * @description inpatient | outpatient | ambulatory | emergency +.
   */
  class: ICoding;

  /**
   * @description The time that the episode was in the specified class.
   */
  period: IPeriod;

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
    return `EncounterClassHistory${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `EncounterClassHistory${JSON.stringify(this.toJson(), null, 2)}`;
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
    return ConformanceValidator('EncounterClassHistory', this);
  }

  constructor(args?: IEncounterClassHistory) {
    super();
    if (args) Object.assign(this, args);
  }
}
