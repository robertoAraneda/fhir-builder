import { IReference, ICodeableConcept, IElement } from 'fhirtypes/dist/r4';
import { IEpisodeOfCareDiagnosis, IOperationOutcome } from 'fhirtypes/dist/r4';
import { BackboneElement, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for EpisodeOfCareDiagnosis BackboneElement
 * @property {IReference} condition
 * @property {ICodeableConcept} role
 * @property {number} rank
 * @property {IElement} _rank
 * @author Roberto Araneda Espinoza
 */
export class EpisodeOfCareDiagnosis
  extends BackboneElement
  implements IEpisodeOfCareDiagnosis, IValidatable, ISerializable
{
  /**
   * @description A list of conditions/problems/diagnoses that this episode of care is intended to be providing care for.
   */
  condition: IReference;

  /**
   * @description Role that this diagnosis has within the episode of care (e.g. admission, billing, discharge …).
   */
  role?: ICodeableConcept;

  /**
   * @description Ranking of the diagnosis (for each role type).
   */
  rank?: number;

  /**
   * @description Extensions for rank
   */
  _rank?: IElement;

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
    return `EpisodeOfCareDiagnosis${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `EpisodeOfCareDiagnosis${JSON.stringify(this.toJson(), null, 2)}`;
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
    return ConformanceValidator('EpisodeOfCareDiagnosis', this);
  }

  constructor(args?: IEpisodeOfCareDiagnosis) {
    super();
    if (args) Object.assign(this, args);
  }
}
