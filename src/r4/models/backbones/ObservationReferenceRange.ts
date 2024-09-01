import { IQuantity, ICodeableConcept, IRange, IElement } from 'fhirtypes/dist/r4';
import { IObservationReferenceRange, IOperationOutcome } from 'fhirtypes/dist/r4';
import { BackboneElement, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for ObservationReferenceRange BackboneElement
 * @property {IQuantity} low
 * @property {IQuantity} high
 * @property {ICodeableConcept} type
 * @property {ICodeableConcept[]} appliesTo
 * @property {IRange} age
 * @property {string} text
 * @property {IElement} _text
 * @author Roberto Araneda Espinoza
 */
export class ObservationReferenceRange
  extends BackboneElement
  implements IObservationReferenceRange, IValidatable, ISerializable
{
  /**
   * @description The value of the low bound of the reference range.  The low bound of the reference range endpoint is inclusive of the value (e.g.  reference range is >=5 - <=9). If the low bound is omitted,  it is assumed to be meaningless (e.g. reference range is <=2.3).
   */
  low?: IQuantity;

  /**
   * @description The value of the high bound of the reference range.  The high bound of the reference range endpoint is inclusive of the value (e.g.  reference range is >=5 - <=9). If the high bound is omitted,  it is assumed to be meaningless (e.g. reference range is >= 2.3).
   */
  high?: IQuantity;

  /**
   * @description Codes to indicate the what part of the targeted reference population it applies to. For example, the normal or therapeutic range.
   */
  type?: ICodeableConcept;

  /**
   * @description Codes to indicate the target population this reference range applies to.  For example, a reference range may be based on the normal population or a particular sex or race.  Multiple `appliesTo`  are interpreted as an "AND" of the target populations.  For example, to represent a target population of African American females, both a code of female and a code for African American would be used.
   */
  appliesTo?: ICodeableConcept[];

  /**
   * @description The age at which this reference range is applicable. This is a neonatal age (e.g. number of weeks at term) if the meaning says so.
   */
  age?: IRange;

  /**
   * @description Text based reference range in an observation which may be used when a quantitative range is not appropriate for an observation.  An example would be a reference value of "Negative" or a list or table of "normals".
   */
  text?: string;

  /**
   * @description Extensions for text
   */
  _text?: IElement;

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
    return `ObservationReferenceRange${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `ObservationReferenceRange${JSON.stringify(this.toJson(), null, 2)}`;
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
    return ConformanceValidator('ObservationReferenceRange', this);
  }

  constructor(args?: IObservationReferenceRange) {
    super();
    if (args) Object.assign(this, args);
  }
}
