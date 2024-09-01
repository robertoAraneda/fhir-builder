import { ICodeableConcept, IElement } from 'fhirtypes/dist/r4';
import { PatientCommunication } from '../../models';
import { BackboneBuilder, IBuildable } from '../base';
import { ExtractUnderscoreKeys } from '../../../core/commons/utils';

// Extract the keys that start with an underscore
type PrimitiveExtensionFields = ExtractUnderscoreKeys<PatientCommunication>;

/**
 * @description Interface for chaining the building of a PatientCommunication
 * @interface IPatientCommunicationBuilder
 * @extends {IBuildable<PatientCommunication>}
 */
interface IPatientCommunicationBuilder extends IBuildable<PatientCommunication> {
  setLanguage(value: ICodeableConcept): this;
  setPreferred(value: boolean): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a PatientCommunication
 * @class PatientCommunicationBuilder
 * @extends {BackboneBuilder}
 * @implements {IPatientCommunicationBuilder}
 * @author Roberto Araneda Espinoza
 */
export class PatientCommunicationBuilder extends BackboneBuilder implements IPatientCommunicationBuilder {
  private readonly patientCommunication: PatientCommunication;

  constructor() {
    super();
    this.patientCommunication = new PatientCommunication();
  }

  /**
   * @description Adds a primitive extension to the element
   * @param param - the field to add the extension to
   * @param extension - the extension to add
   * @returns {this}
   * @example addPrimitiveExtension('_value', { value: 'test' })
   */
  addPrimitiveExtension(param: PrimitiveExtensionFields, extension: IElement): this {
    this.patientCommunication[param] = extension;
    return this;
  }

  /**
   * @description Builds the model
   * @returns {PatientCommunication}
   */
  build(): PatientCommunication {
    return Object.assign(this.patientCommunication, super.build());
  }

  /**
   * @description Sets the language value
   * @description The ISO-639-1 alpha 2 code in lower case for the language, optionally followed by a hyphen and the ISO-3166-1 alpha 2 code for the region in upper case; e.g. "en" for English, or "en-US" for American English versus "en-EN" for England English.
   * @param value - the value to set
   * @returns {this}
   */
  setLanguage(value: ICodeableConcept): this {
    this.patientCommunication.language = value;
    return this;
  }

  /**
   * @description Sets the preferred value
   * @description Indicates whether or not the patient prefers this language (over other languages he masters up a certain level).
   * @param value - the value to set
   * @returns {this}
   */
  setPreferred(value: boolean): this {
    this.patientCommunication.preferred = value;
    return this;
  }
}
