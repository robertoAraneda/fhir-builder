import { ICodeableConcept, IElement, IAnnotation, AllergyIntoleranceSeverityType } from 'fhirtypes/dist/r4';
import { IAllergyIntoleranceReaction, IOperationOutcome } from 'fhirtypes/dist/r4';
import { BackboneElement, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for AllergyIntoleranceReaction BackboneElement
 * @property {ICodeableConcept} substance
 * @property {ICodeableConcept[]} manifestation
 * @property {string} description
 * @property {IElement} _description
 * @property {string} onset
 * @property {IElement} _onset
 * @property {AllergyIntoleranceSeverityType} severity
 * @property {IElement} _severity
 * @property {ICodeableConcept} exposureRoute
 * @property {IAnnotation[]} note
 * @author Roberto Araneda Espinoza
 */
export class AllergyIntoleranceReaction
  extends BackboneElement
  implements IAllergyIntoleranceReaction, IValidatable, ISerializable
{
  /**
   * @description Identification of the specific substance (or pharmaceutical product) considered to be responsible for the Adverse Reaction event. Note: the substance for a specific reaction may be different from the substance identified as the cause of the risk, but it must be consistent with it. For instance, it may be a more specific substance (e.g. a brand medication) or a composite product that includes the identified substance. It must be clinically safe to only process the 'code' and ignore the 'reaction.substance'.  If a receiving system is unable to confirm that AllergyIntolerance.reaction.substance falls within the semantic scope of AllergyIntolerance.code, then the receiving system should ignore AllergyIntolerance.reaction.substance.
   */
  substance?: ICodeableConcept;

  /**
   * @description Clinical symptoms and/or signs that are observed or associated with the adverse reaction event.
   */
  manifestation: ICodeableConcept[];

  /**
   * @description Text description about the reaction as a whole, including details of the manifestation if required.
   */
  description?: string;

  /**
   * @description Extensions for description
   */
  _description?: IElement;

  /**
   * @description Record of the date and/or time of the onset of the Reaction.
   */
  onset?: string;

  /**
   * @description Extensions for onset
   */
  _onset?: IElement;

  /**
   * @description Clinical assessment of the severity of the reaction event as a whole, potentially considering multiple different manifestations.
mild | moderate | severe.
   */
  severity?: AllergyIntoleranceSeverityType;

  /**
   * @description Extensions for severity
   */
  _severity?: IElement;

  /**
   * @description Identification of the route by which the subject was exposed to the substance.
   */
  exposureRoute?: ICodeableConcept;

  /**
   * @description Additional text about the adverse reaction event not captured in other fields.
   */
  note?: IAnnotation[];

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
    return `AllergyIntoleranceReaction${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `AllergyIntoleranceReaction${JSON.stringify(this.toJson(), null, 2)}`;
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
    return ConformanceValidator('AllergyIntoleranceReaction', this);
  }

  constructor(args?: IAllergyIntoleranceReaction) {
    super();
    if (args) Object.assign(this, args);
  }
}
