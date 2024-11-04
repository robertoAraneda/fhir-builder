import { IReference, IElement, ICodeableConcept, IPeriod, EncounterLocationStatusType } from 'fhirtypes/dist/r4';
import { IEncounterLocation, IOperationOutcome } from 'fhirtypes/dist/r4';
import { BackboneElement, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';

/**
  * @version R4 (v4.0.1)
  * @summary FHIR® Specification by HL7®
  * @description Class for EncounterLocation BackboneElement
  undefined
  * @property {IReference} location
  * @property {string} status
  * @property {IElement} _status
  * @property {ICodeableConcept} physicalType
  * @property {IPeriod} period
  * @author Roberto Araneda Espinoza
  */
export class EncounterLocation extends BackboneElement implements IEncounterLocation, IValidatable, ISerializable {
  /**
   * @description The location where the encounter takes place.
   */
  location: IReference;

  /**
   * @description The status of the participants' presence at the specified location during the period specified. If the participant is no longer at the location, then the period will have an end date/time.
   */
  status?: EncounterLocationStatusType;

  /**
   * @description Extensions for status
   */
  _status?: IElement;

  /**
   * @description This will be used to specify the required levels (bed/ward/room/etc.) desired to be recorded to simplify either messaging or query.
   */
  physicalType?: ICodeableConcept;

  /**
   * @description Time period during which the patient was present at the location.
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
    return `EncounterLocation${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `EncounterLocation${JSON.stringify(this.toJson(), null, 2)}`;
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
    return ConformanceValidator('EncounterLocation', this);
  }

  constructor(args?: IEncounterLocation) {
    super();
    if (args) Object.assign(this, args);
  }
}
