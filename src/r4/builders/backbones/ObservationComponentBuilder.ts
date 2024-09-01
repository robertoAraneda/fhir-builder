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
import { ObservationComponent } from '../../models';
import { BackboneBuilder, IBuildable } from '../base';
import { ExtractUnderscoreKeys } from '../../../core/commons/utils';

// Extract the keys that start with an underscore
type PrimitiveExtensionFields = ExtractUnderscoreKeys<ObservationComponent>;

/**
 * @description Interface for chaining the building of a ObservationComponent
 * @interface IObservationComponentBuilder
 * @extends {IBuildable<ObservationComponent>}
 */
interface IObservationComponentBuilder extends IBuildable<ObservationComponent> {
  setCode(value: ICodeableConcept): this;
  setValueQuantity(value: IQuantity): this;
  setValueCodeableConcept(value: ICodeableConcept): this;
  setValueString(value: string): this;
  setValueBoolean(value: boolean): this;
  setValueInteger(value: number): this;
  setValueRange(value: IRange): this;
  setValueRatio(value: IRatio): this;
  setValueSampledData(value: ISampledData): this;
  setValueTime(value: string): this;
  setValueDateTime(value: string): this;
  setValuePeriod(value: IPeriod): this;
  setDataAbsentReason(value: ICodeableConcept): this;
  addInterpretation(value: ICodeableConcept): this;
  addReferenceRange(value: IObservationReferenceRange): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a ObservationComponent
 * @class ObservationComponentBuilder
 * @extends {BackboneBuilder}
 * @implements {IObservationComponentBuilder}
 * @author Roberto Araneda Espinoza
 */
export class ObservationComponentBuilder extends BackboneBuilder implements IObservationComponentBuilder {
  private readonly observationComponent: ObservationComponent;

  constructor() {
    super();
    this.observationComponent = new ObservationComponent();
  }

  /**
   * @description Adds a primitive extension to the element
   * @param param - the field to add the extension to
   * @param extension - the extension to add
   * @returns {this}
   * @example addPrimitiveExtension('_value', { value: 'test' })
   */
  addPrimitiveExtension(param: PrimitiveExtensionFields, extension: IElement): this {
    this.observationComponent[param] = extension;
    return this;
  }

  /**
   * @description Builds the model
   * @returns {ObservationComponent}
   */
  build(): ObservationComponent {
    return Object.assign(this.observationComponent, super.build());
  }

  /**
   * @description Sets the code value
   * @description Describes what was observed. Sometimes this is called the observation "code".
   * @param value - the value to set
   * @returns {this}
   */
  setCode(value: ICodeableConcept): this {
    this.observationComponent.code = value;
    return this;
  }

  /**
   * @description Sets the valueQuantity value
   * @description The information determined as a result of making the observation, if the information has a simple value.
   * @param value - the value to set
   * @returns {this}
   */
  setValueQuantity(value: IQuantity): this {
    this.observationComponent.valueQuantity = value;
    return this;
  }

  /**
   * @description Sets the valueCodeableConcept value
   * @description The information determined as a result of making the observation, if the information has a simple value.
   * @param value - the value to set
   * @returns {this}
   */
  setValueCodeableConcept(value: ICodeableConcept): this {
    this.observationComponent.valueCodeableConcept = value;
    return this;
  }

  /**
   * @description Sets the valueString value
   * @description The information determined as a result of making the observation, if the information has a simple value.
   * @param value - the value to set
   * @returns {this}
   */
  setValueString(value: string): this {
    this.observationComponent.valueString = value;
    return this;
  }

  /**
   * @description Sets the valueBoolean value
   * @description The information determined as a result of making the observation, if the information has a simple value.
   * @param value - the value to set
   * @returns {this}
   */
  setValueBoolean(value: boolean): this {
    this.observationComponent.valueBoolean = value;
    return this;
  }

  /**
   * @description Sets the valueInteger value
   * @description The information determined as a result of making the observation, if the information has a simple value.
   * @param value - the value to set
   * @returns {this}
   */
  setValueInteger(value: number): this {
    this.observationComponent.valueInteger = value;
    return this;
  }

  /**
   * @description Sets the valueRange value
   * @description The information determined as a result of making the observation, if the information has a simple value.
   * @param value - the value to set
   * @returns {this}
   */
  setValueRange(value: IRange): this {
    this.observationComponent.valueRange = value;
    return this;
  }

  /**
   * @description Sets the valueRatio value
   * @description The information determined as a result of making the observation, if the information has a simple value.
   * @param value - the value to set
   * @returns {this}
   */
  setValueRatio(value: IRatio): this {
    this.observationComponent.valueRatio = value;
    return this;
  }

  /**
   * @description Sets the valueSampledData value
   * @description The information determined as a result of making the observation, if the information has a simple value.
   * @param value - the value to set
   * @returns {this}
   */
  setValueSampledData(value: ISampledData): this {
    this.observationComponent.valueSampledData = value;
    return this;
  }

  /**
   * @description Sets the valueTime value
   * @description The information determined as a result of making the observation, if the information has a simple value.
   * @param value - the value to set
   * @returns {this}
   */
  setValueTime(value: string): this {
    this.observationComponent.valueTime = value;
    return this;
  }

  /**
   * @description Sets the valueDateTime value
   * @description The information determined as a result of making the observation, if the information has a simple value.
   * @param value - the value to set
   * @returns {this}
   */
  setValueDateTime(value: string): this {
    this.observationComponent.valueDateTime = value;
    return this;
  }

  /**
   * @description Sets the valuePeriod value
   * @description The information determined as a result of making the observation, if the information has a simple value.
   * @param value - the value to set
   * @returns {this}
   */
  setValuePeriod(value: IPeriod): this {
    this.observationComponent.valuePeriod = value;
    return this;
  }

  /**
   * @description Sets the dataAbsentReason value
   * @description Provides a reason why the expected value in the element Observation.component.value[x] is missing.
   * @param value - the value to set
   * @returns {this}
   */
  setDataAbsentReason(value: ICodeableConcept): this {
    this.observationComponent.dataAbsentReason = value;
    return this;
  }

  /**
   * @description Adds a value to the interpretation array
   * @description A categorical assessment of an observation value.  For example, high, low, normal.
   * @param value - the value to add
   * @returns {this}
   */
  addInterpretation(value: ICodeableConcept): this {
    this.observationComponent.interpretation = this.observationComponent.interpretation || [];
    this.observationComponent.interpretation.push(value);
    return this;
  }
  /**
   * @description Adds a value to the referenceRange array
   * @description Guidance on how to interpret the value by comparison to a normal or recommended range.
   * @param value - the value to add
   * @returns {this}
   */
  addReferenceRange(value: IObservationReferenceRange): this {
    this.observationComponent.referenceRange = this.observationComponent.referenceRange || [];
    this.observationComponent.referenceRange.push(value);
    return this;
  }
}
