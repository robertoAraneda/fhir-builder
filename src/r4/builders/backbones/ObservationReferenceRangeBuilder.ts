import { IQuantity, ICodeableConcept, IRange, IElement } from 'fhirtypes/dist/r4';
import { ObservationReferenceRange } from '../../models';
import { BackboneBuilder, IBuildable } from '../base';
import { ExtractUnderscoreKeys } from '../../../core/commons/utils';

// Extract the keys that start with an underscore
type PrimitiveExtensionFields = ExtractUnderscoreKeys<ObservationReferenceRange>;

/**
 * @description Interface for chaining the building of a ObservationReferenceRange
 * @interface IObservationReferenceRangeBuilder
 * @extends {IBuildable<ObservationReferenceRange>}
 */
interface IObservationReferenceRangeBuilder extends IBuildable<ObservationReferenceRange> {
  setLow(value: IQuantity): this;
  setHigh(value: IQuantity): this;
  setType(value: ICodeableConcept): this;
  addAppliesTo(value: ICodeableConcept): this;
  setAge(value: IRange): this;
  setText(value: string): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a ObservationReferenceRange
 * @class ObservationReferenceRangeBuilder
 * @extends {BackboneBuilder}
 * @implements {IObservationReferenceRangeBuilder}
 * @author Roberto Araneda Espinoza
 */
export class ObservationReferenceRangeBuilder extends BackboneBuilder implements IObservationReferenceRangeBuilder {
  private readonly observationReferenceRange: ObservationReferenceRange;

  constructor() {
    super();
    this.observationReferenceRange = new ObservationReferenceRange();
  }

  /**
   * @description Adds a primitive extension to the element
   * @param param - the field to add the extension to
   * @param extension - the extension to add
   * @returns {this}
   * @example addPrimitiveExtension('_value', { value: 'test' })
   */
  addPrimitiveExtension(param: PrimitiveExtensionFields, extension: IElement): this {
    this.observationReferenceRange[param] = extension;
    return this;
  }

  /**
   * @description Builds the model
   * @returns {ObservationReferenceRange}
   */
  build(): ObservationReferenceRange {
    return Object.assign(this.observationReferenceRange, super.build());
  }

  /**
   * @description Sets the low value
   * @description The value of the low bound of the reference range.  The low bound of the reference range endpoint is inclusive of the value (e.g.  reference range is >=5 - <=9). If the low bound is omitted,  it is assumed to be meaningless (e.g. reference range is <=2.3).
   * @param value - the value to set
   * @returns {this}
   */
  setLow(value: IQuantity): this {
    this.observationReferenceRange.low = value;
    return this;
  }

  /**
   * @description Sets the high value
   * @description The value of the high bound of the reference range.  The high bound of the reference range endpoint is inclusive of the value (e.g.  reference range is >=5 - <=9). If the high bound is omitted,  it is assumed to be meaningless (e.g. reference range is >= 2.3).
   * @param value - the value to set
   * @returns {this}
   */
  setHigh(value: IQuantity): this {
    this.observationReferenceRange.high = value;
    return this;
  }

  /**
   * @description Sets the type value
   * @description Codes to indicate the what part of the targeted reference population it applies to. For example, the normal or therapeutic range.
   * @param value - the value to set
   * @returns {this}
   */
  setType(value: ICodeableConcept): this {
    this.observationReferenceRange.type = value;
    return this;
  }

  /**
   * @description Adds a value to the appliesTo array
   * @description Codes to indicate the target population this reference range applies to.  For example, a reference range may be based on the normal population or a particular sex or race.  Multiple `appliesTo`  are interpreted as an "AND" of the target populations.  For example, to represent a target population of African American females, both a code of female and a code for African American would be used.
   * @param value - the value to add
   * @returns {this}
   */
  addAppliesTo(value: ICodeableConcept): this {
    this.observationReferenceRange.appliesTo = this.observationReferenceRange.appliesTo || [];
    this.observationReferenceRange.appliesTo.push(value);
    return this;
  }
  /**
   * @description Sets the age value
   * @description The age at which this reference range is applicable. This is a neonatal age (e.g. number of weeks at term) if the meaning says so.
   * @param value - the value to set
   * @returns {this}
   */
  setAge(value: IRange): this {
    this.observationReferenceRange.age = value;
    return this;
  }

  /**
   * @description Sets the text value
   * @description Text based reference range in an observation which may be used when a quantitative range is not appropriate for an observation.  An example would be a reference value of "Negative" or a list or table of "normals".
   * @param value - the value to set
   * @returns {this}
   */
  setText(value: string): this {
    this.observationReferenceRange.text = value;
    return this;
  }
}
