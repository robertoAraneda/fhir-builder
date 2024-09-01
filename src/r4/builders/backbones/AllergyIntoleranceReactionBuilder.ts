import { ICodeableConcept, IElement, IAnnotation, AllergyIntoleranceSeverityType } from 'fhirtypes/dist/r4';
import { AllergyIntoleranceReaction } from '../../models';
import { BackboneBuilder, IBuildable } from '../base';
import { ExtractUnderscoreKeys } from '../../../core/commons/utils';

// Extract the keys that start with an underscore
type PrimitiveExtensionFields = ExtractUnderscoreKeys<AllergyIntoleranceReaction>;

/**
 * @description Interface for chaining the building of a AllergyIntoleranceReaction
 * @interface IAllergyIntoleranceReactionBuilder
 * @extends {IBuildable<AllergyIntoleranceReaction>}
 */
interface IAllergyIntoleranceReactionBuilder extends IBuildable<AllergyIntoleranceReaction> {
  setSubstance(value: ICodeableConcept): this;
  addManifestation(value: ICodeableConcept): this;
  setDescription(value: string): this;
  setOnset(value: string): this;
  setSeverity(value: AllergyIntoleranceSeverityType): this;
  setExposureRoute(value: ICodeableConcept): this;
  addNote(value: IAnnotation): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a AllergyIntoleranceReaction
 * @class AllergyIntoleranceReactionBuilder
 * @extends {BackboneBuilder}
 * @implements {IAllergyIntoleranceReactionBuilder}
 * @author Roberto Araneda Espinoza
 */
export class AllergyIntoleranceReactionBuilder extends BackboneBuilder implements IAllergyIntoleranceReactionBuilder {
  private readonly allergyIntoleranceReaction: AllergyIntoleranceReaction;

  constructor() {
    super();
    this.allergyIntoleranceReaction = new AllergyIntoleranceReaction();
  }

  /**
   * @description Adds a primitive extension to the element
   * @param param - the field to add the extension to
   * @param extension - the extension to add
   * @returns {this}
   * @example addPrimitiveExtension('_value', { value: 'test' })
   */
  addPrimitiveExtension(param: PrimitiveExtensionFields, extension: IElement): this {
    this.allergyIntoleranceReaction[param] = extension;
    return this;
  }

  /**
   * @description Builds the model
   * @returns {AllergyIntoleranceReaction}
   */
  build(): AllergyIntoleranceReaction {
    return Object.assign(this.allergyIntoleranceReaction, super.build());
  }

  /**
   * @description Sets the substance value
   * @description Identification of the specific substance (or pharmaceutical product) considered to be responsible for the Adverse Reaction event. Note: the substance for a specific reaction may be different from the substance identified as the cause of the risk, but it must be consistent with it. For instance, it may be a more specific substance (e.g. a brand medication) or a composite product that includes the identified substance. It must be clinically safe to only process the 'code' and ignore the 'reaction.substance'.  If a receiving system is unable to confirm that AllergyIntolerance.reaction.substance falls within the semantic scope of AllergyIntolerance.code, then the receiving system should ignore AllergyIntolerance.reaction.substance.
   * @param value - the value to set
   * @returns {this}
   */
  setSubstance(value: ICodeableConcept): this {
    this.allergyIntoleranceReaction.substance = value;
    return this;
  }

  /**
   * @description Adds a value to the manifestation array
   * @description Clinical symptoms and/or signs that are observed or associated with the adverse reaction event.
   * @param value - the value to add
   * @returns {this}
   */
  addManifestation(value: ICodeableConcept): this {
    this.allergyIntoleranceReaction.manifestation = this.allergyIntoleranceReaction.manifestation || [];
    this.allergyIntoleranceReaction.manifestation.push(value);
    return this;
  }
  /**
   * @description Sets the description value
   * @description Text description about the reaction as a whole, including details of the manifestation if required.
   * @param value - the value to set
   * @returns {this}
   */
  setDescription(value: string): this {
    this.allergyIntoleranceReaction.description = value;
    return this;
  }

  /**
   * @description Sets the onset value
   * @description Record of the date and/or time of the onset of the Reaction.
   * @param value - the value to set
   * @returns {this}
   */
  setOnset(value: string): this {
    this.allergyIntoleranceReaction.onset = value;
    return this;
  }

  /**
    * @description Sets the severity value
    * @description Clinical assessment of the severity of the reaction event as a whole, potentially considering multiple different manifestations.
mild | moderate | severe.
    * @param value - the value to set
    * @returns {this}
    */
  setSeverity(value: AllergyIntoleranceSeverityType): this {
    this.allergyIntoleranceReaction.severity = value;
    return this;
  }

  /**
   * @description Sets the exposureRoute value
   * @description Identification of the route by which the subject was exposed to the substance.
   * @param value - the value to set
   * @returns {this}
   */
  setExposureRoute(value: ICodeableConcept): this {
    this.allergyIntoleranceReaction.exposureRoute = value;
    return this;
  }

  /**
   * @description Adds a value to the note array
   * @description Additional text about the adverse reaction event not captured in other fields.
   * @param value - the value to add
   * @returns {this}
   */
  addNote(value: IAnnotation): this {
    this.allergyIntoleranceReaction.note = this.allergyIntoleranceReaction.note || [];
    this.allergyIntoleranceReaction.note.push(value);
    return this;
  }
}
