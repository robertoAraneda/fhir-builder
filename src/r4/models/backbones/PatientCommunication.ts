import { ICodeableConcept, IElement } from 'fhirtypes/dist/r4';
import { IPatientCommunication, IOperationOutcome } from 'fhirtypes/dist/r4';
import { BackboneElement, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for PatientCommunication BackboneElement
 * @property {ICodeableConcept} language
 * @property {boolean} preferred
 * @property {IElement} _preferred
 * @author Roberto Araneda Espinoza
 */
export class PatientCommunication
  extends BackboneElement
  implements IPatientCommunication, IValidatable, ISerializable
{
  /**
   * @description The ISO-639-1 alpha 2 code in lower case for the language, optionally followed by a hyphen and the ISO-3166-1 alpha 2 code for the region in upper case; e.g. "en" for English, or "en-US" for American English versus "en-EN" for England English.
   */
  language: ICodeableConcept;

  /**
   * @description Indicates whether or not the patient prefers this language (over other languages he masters up a certain level).
   */
  preferred?: boolean;

  /**
   * @description Extensions for preferred
   */
  _preferred?: IElement;

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
    return `PatientCommunication${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `PatientCommunication${JSON.stringify(this.toJson(), null, 2)}`;
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
    return ConformanceValidator('PatientCommunication', this);
  }

  constructor(args?: IPatientCommunication) {
    super();
    if (args) Object.assign(this, args);
  }
}
