import { IIdentifier, IReference, ICodeableConcept } from 'fhirtypes/dist/r4';
import { IEncounterHospitalization, IOperationOutcome } from 'fhirtypes/dist/r4';
import { BackboneElement, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';

/**
  * @version R4 (v4.0.1)
  * @summary FHIR® Specification by HL7®
  * @description Class for EncounterHospitalization BackboneElement
  undefined
  * @property {IIdentifier} preAdmissionIdentifier
  * @property {IReference} origin
  * @property {ICodeableConcept} admitSource
  * @property {ICodeableConcept} reAdmission
  * @property {ICodeableConcept[]} dietPreference
  * @property {ICodeableConcept[]} specialCourtesy
  * @property {ICodeableConcept[]} specialArrangement
  * @property {IReference} destination
  * @property {ICodeableConcept} dischargeDisposition
  * @author Roberto Araneda Espinoza
  */
export class EncounterHospitalization
  extends BackboneElement
  implements IEncounterHospitalization, IValidatable, ISerializable
{
  /**
   * @description Pre-admission identifier.
   */
  preAdmissionIdentifier?: IIdentifier;

  /**
   * @description The location/organization from which the patient came before admission.
   */
  origin?: IReference;

  /**
   * @description From where patient was admitted (physician referral, transfer).
   */
  admitSource?: ICodeableConcept;

  /**
   * @description Whether this hospitalization is a readmission and why if known.
   */
  reAdmission?: ICodeableConcept;

  /**
   * @description Diet preferences reported by the patient.
   */
  dietPreference?: ICodeableConcept[];

  /**
   * @description Special courtesies (VIP, board member).
   */
  specialCourtesy?: ICodeableConcept[];

  /**
   * @description Any special requests that have been made for this hospitalization encounter, such as the provision of specific equipment or other things.
   */
  specialArrangement?: ICodeableConcept[];

  /**
   * @description Location/organization to which the patient is discharged.
   */
  destination?: IReference;

  /**
   * @description Category or kind of location after discharge.
   */
  dischargeDisposition?: ICodeableConcept;

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
    return `EncounterHospitalization${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `EncounterHospitalization${JSON.stringify(this.toJson(), null, 2)}`;
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
    return ConformanceValidator('EncounterHospitalization', this);
  }

  constructor(args?: IEncounterHospitalization) {
    super();
    if (args) Object.assign(this, args);
  }
}
