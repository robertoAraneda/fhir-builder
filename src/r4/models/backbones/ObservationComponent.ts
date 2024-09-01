import {
  ICodeableConcept,
  IQuantity,
  IElement,
  IRange,
  IRatio,
  ISampledData,
  IPeriod,
  IObservationReferenceRange,
} from 'fhirtypes/dist/r4';
import { IObservationComponent, IOperationOutcome } from 'fhirtypes/dist/r4';
import { BackboneElement, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for ObservationComponent BackboneElement
 * @property {ICodeableConcept} code
 * @property {IQuantity} valueQuantity
 * @property {ICodeableConcept} valueCodeableConcept
 * @property {string} valueString
 * @property {IElement} _valueString
 * @property {boolean} valueBoolean
 * @property {IElement} _valueBoolean
 * @property {number} valueInteger
 * @property {IElement} _valueInteger
 * @property {IRange} valueRange
 * @property {IRatio} valueRatio
 * @property {ISampledData} valueSampledData
 * @property {string} valueTime
 * @property {IElement} _valueTime
 * @property {string} valueDateTime
 * @property {IElement} _valueDateTime
 * @property {IPeriod} valuePeriod
 * @property {ICodeableConcept} dataAbsentReason
 * @property {ICodeableConcept[]} interpretation
 * @property {IObservationReferenceRange[]} referenceRange
 * @author Roberto Araneda Espinoza
 */
export class ObservationComponent
  extends BackboneElement
  implements IObservationComponent, IValidatable, ISerializable
{
  /**
   * @description Describes what was observed. Sometimes this is called the observation "code".
   */
  code: ICodeableConcept;

  /**
   * @description The information determined as a result of making the observation, if the information has a simple value.
   */
  valueQuantity?: IQuantity;

  /**
   * @description The information determined as a result of making the observation, if the information has a simple value.
   */
  valueCodeableConcept?: ICodeableConcept;

  /**
   * @description The information determined as a result of making the observation, if the information has a simple value.
   */
  valueString?: string;

  /**
   * @description Extensions for valueString
   */
  _valueString?: IElement;

  /**
   * @description The information determined as a result of making the observation, if the information has a simple value.
   */
  valueBoolean?: boolean;

  /**
   * @description Extensions for valueBoolean
   */
  _valueBoolean?: IElement;

  /**
   * @description The information determined as a result of making the observation, if the information has a simple value.
   */
  valueInteger?: number;

  /**
   * @description Extensions for valueInteger
   */
  _valueInteger?: IElement;

  /**
   * @description The information determined as a result of making the observation, if the information has a simple value.
   */
  valueRange?: IRange;

  /**
   * @description The information determined as a result of making the observation, if the information has a simple value.
   */
  valueRatio?: IRatio;

  /**
   * @description The information determined as a result of making the observation, if the information has a simple value.
   */
  valueSampledData?: ISampledData;

  /**
   * @description The information determined as a result of making the observation, if the information has a simple value.
   */
  valueTime?: string;

  /**
   * @description Extensions for valueTime
   */
  _valueTime?: IElement;

  /**
   * @description The information determined as a result of making the observation, if the information has a simple value.
   */
  valueDateTime?: string;

  /**
   * @description Extensions for valueDateTime
   */
  _valueDateTime?: IElement;

  /**
   * @description The information determined as a result of making the observation, if the information has a simple value.
   */
  valuePeriod?: IPeriod;

  /**
   * @description Provides a reason why the expected value in the element Observation.component.value[x] is missing.
   */
  dataAbsentReason?: ICodeableConcept;

  /**
   * @description A categorical assessment of an observation value.  For example, high, low, normal.
   */
  interpretation?: ICodeableConcept[];

  /**
   * @description Guidance on how to interpret the value by comparison to a normal or recommended range.
   */
  referenceRange?: IObservationReferenceRange[];

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
    return `ObservationComponent${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `ObservationComponent${JSON.stringify(this.toJson(), null, 2)}`;
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
    return ConformanceValidator('ObservationComponent', this);
  }

  constructor(args?: IObservationComponent) {
    super();
    if (args) Object.assign(this, args);
  }
}
