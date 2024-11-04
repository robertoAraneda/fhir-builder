import { IIdentifier, IReference, ICodeableConcept } from 'fhirtypes/dist/r4';
import { EncounterHospitalization } from '../../models';
import { BackboneBuilder, IBuildable } from '../base';

/**
 * @description Interface for chaining the building of a EncounterHospitalization
 * @interface IEncounterHospitalizationBuilder
 * @extends {IBuildable<EncounterHospitalization>}
 */
interface IEncounterHospitalizationBuilder extends IBuildable<EncounterHospitalization> {
  setPreAdmissionIdentifier(value: IIdentifier): this;
  setOrigin(value: IReference): this;
  setAdmitSource(value: ICodeableConcept): this;
  setReAdmission(value: ICodeableConcept): this;
  addDietPreference(value: ICodeableConcept): this;
  addSpecialCourtesy(value: ICodeableConcept): this;
  addSpecialArrangement(value: ICodeableConcept): this;
  setDestination(value: IReference): this;
  setDischargeDisposition(value: ICodeableConcept): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a EncounterHospitalization
 * @class EncounterHospitalizationBuilder
 * @extends {BackboneBuilder}
 * @implements {IEncounterHospitalizationBuilder}
 * @author Roberto Araneda Espinoza
 */
export class EncounterHospitalizationBuilder extends BackboneBuilder implements IEncounterHospitalizationBuilder {
  private readonly encounterHospitalization: EncounterHospitalization;

  constructor() {
    super();
    this.encounterHospitalization = new EncounterHospitalization();
  }

  /**
   * @description Builds the model
   * @returns {EncounterHospitalization}
   */
  build(): EncounterHospitalization {
    return Object.assign(this.encounterHospitalization, super.build());
  }

  /**
   * @description Sets the preAdmissionIdentifier value
   * @description Pre-admission identifier.
   * @param value - the value to set
   * @returns {this}
   */
  setPreAdmissionIdentifier(value: IIdentifier): this {
    this.encounterHospitalization.preAdmissionIdentifier = value;
    return this;
  }

  /**
   * @description Sets the origin value
   * @description The location/organization from which the patient came before admission.
   * @param value - the value to set
   * @returns {this}
   */
  setOrigin(value: IReference): this {
    this.encounterHospitalization.origin = value;
    return this;
  }

  /**
   * @description Sets the admitSource value
   * @description From where patient was admitted (physician referral, transfer).
   * @param value - the value to set
   * @returns {this}
   */
  setAdmitSource(value: ICodeableConcept): this {
    this.encounterHospitalization.admitSource = value;
    return this;
  }

  /**
   * @description Sets the reAdmission value
   * @description Whether this hospitalization is a readmission and why if known.
   * @param value - the value to set
   * @returns {this}
   */
  setReAdmission(value: ICodeableConcept): this {
    this.encounterHospitalization.reAdmission = value;
    return this;
  }

  /**
   * @description Adds a value to the dietPreference array
   * @description Diet preferences reported by the patient.
   * @param value - the value to add
   * @returns {this}
   */
  addDietPreference(value: ICodeableConcept): this {
    this.encounterHospitalization.dietPreference = this.encounterHospitalization.dietPreference || [];
    this.encounterHospitalization.dietPreference.push(value);
    return this;
  }
  /**
   * @description Adds a value to the specialCourtesy array
   * @description Special courtesies (VIP, board member).
   * @param value - the value to add
   * @returns {this}
   */
  addSpecialCourtesy(value: ICodeableConcept): this {
    this.encounterHospitalization.specialCourtesy = this.encounterHospitalization.specialCourtesy || [];
    this.encounterHospitalization.specialCourtesy.push(value);
    return this;
  }
  /**
   * @description Adds a value to the specialArrangement array
   * @description Any special requests that have been made for this hospitalization encounter, such as the provision of specific equipment or other things.
   * @param value - the value to add
   * @returns {this}
   */
  addSpecialArrangement(value: ICodeableConcept): this {
    this.encounterHospitalization.specialArrangement = this.encounterHospitalization.specialArrangement || [];
    this.encounterHospitalization.specialArrangement.push(value);
    return this;
  }
  /**
   * @description Sets the destination value
   * @description Location/organization to which the patient is discharged.
   * @param value - the value to set
   * @returns {this}
   */
  setDestination(value: IReference): this {
    this.encounterHospitalization.destination = value;
    return this;
  }

  /**
   * @description Sets the dischargeDisposition value
   * @description Category or kind of location after discharge.
   * @param value - the value to set
   * @returns {this}
   */
  setDischargeDisposition(value: ICodeableConcept): this {
    this.encounterHospitalization.dischargeDisposition = value;
    return this;
  }
}
