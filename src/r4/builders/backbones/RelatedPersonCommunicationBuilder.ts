import { ICodeableConcept, IElement } from 'fhirtypes/dist/r4';
import { RelatedPersonCommunication } from '../../models';
import { BackboneBuilder, IBuildable } from '../base';
import { ExtractUnderscoreKeys } from '../../../core/commons/utils';

// Extract the keys that start with an underscore
type PrimitiveExtensionFields = ExtractUnderscoreKeys<RelatedPersonCommunication>;

/**
 * @description Interface for chaining the building of a RelatedPersonCommunication
 * @interface IRelatedPersonCommunicationBuilder
 * @extends {IBuildable<RelatedPersonCommunication>}
 */
interface IRelatedPersonCommunicationBuilder extends IBuildable<RelatedPersonCommunication> {
  setLanguage(value: ICodeableConcept): this;
  setPreferred(value: boolean): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a RelatedPersonCommunication
 * @class RelatedPersonCommunicationBuilder
 * @extends {BackboneBuilder}
 * @implements {IRelatedPersonCommunicationBuilder}
 * @author Roberto Araneda Espinoza
 */
export class RelatedPersonCommunicationBuilder extends BackboneBuilder implements IRelatedPersonCommunicationBuilder {
  private readonly relatedPersonCommunication: RelatedPersonCommunication;

  constructor() {
    super();
    this.relatedPersonCommunication = new RelatedPersonCommunication();
  }

  /**
   * @description Adds a primitive extension to the element
   * @param param - the field to add the extension to
   * @param extension - the extension to add
   * @returns {this}
   * @example addPrimitiveExtension('_value', { value: 'test' })
   */
  addPrimitiveExtension(param: PrimitiveExtensionFields, extension: IElement): this {
    this.relatedPersonCommunication[param] = extension;
    return this;
  }

  /**
   * @description Builds the model
   * @returns {RelatedPersonCommunication}
   */
  build(): RelatedPersonCommunication {
    return Object.assign(this.relatedPersonCommunication, super.build());
  }

  /**
   * @description Sets the language value
   * @description The ISO-639-1 alpha 2 code in lower case for the language, optionally followed by a hyphen and the ISO-3166-1 alpha 2 code for the region in upper case; e.g. "en" for English, or "en-US" for American English versus "en-EN" for England English.
   * @param value - the value to set
   * @returns {this}
   */
  setLanguage(value: ICodeableConcept): this {
    this.relatedPersonCommunication.language = value;
    return this;
  }

  /**
   * @description Sets the preferred value
   * @description Indicates whether or not the patient prefers this language (over other languages he masters up a certain level).
   * @param value - the value to set
   * @returns {this}
   */
  setPreferred(value: boolean): this {
    this.relatedPersonCommunication.preferred = value;
    return this;
  }
}
