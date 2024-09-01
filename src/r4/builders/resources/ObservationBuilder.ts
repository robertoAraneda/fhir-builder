import {
  IIdentifier,
  IReference,
  IElement,
  ICodeableConcept,
  IPeriod,
  ITiming,
  IQuantity,
  IRange,
  IRatio,
  ISampledData,
  IAnnotation,
  IObservationReferenceRange,
  IObservationComponent,
  ObservationStatusType,
} from 'fhirtypes/dist/r4';
import { Observation } from '../../models';
import { DomainResourceBuilder, IBuildable } from '../base';
import { ExtractUnderscoreKeys } from '../../../core/commons/utils';

// Extract the keys that start with an underscore
type PrimitiveExtensionFields = ExtractUnderscoreKeys<Observation>;

/**
 * @description Interface for chaining the building of a Observation
 * @interface IObservationBuilder
 * @extends {IBuildable<Observation>}
 */
interface IObservationBuilder extends IBuildable<Observation> {
  addIdentifier(value: IIdentifier): this;
  addBasedOn(value: IReference): this;
  addPartOf(value: IReference): this;
  setStatus(value: ObservationStatusType): this;
  addCategory(value: ICodeableConcept): this;
  setCode(value: ICodeableConcept): this;
  setSubject(value: IReference): this;
  addFocus(value: IReference): this;
  setEncounter(value: IReference): this;
  setEffectiveDateTime(value: string): this;
  setEffectivePeriod(value: IPeriod): this;
  setEffectiveTiming(value: ITiming): this;
  setEffectiveInstant(value: string): this;
  setIssued(value: string): this;
  addPerformer(value: IReference): this;
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
  addNote(value: IAnnotation): this;
  setBodySite(value: ICodeableConcept): this;
  setMethod(value: ICodeableConcept): this;
  setSpecimen(value: IReference): this;
  setDevice(value: IReference): this;
  addReferenceRange(value: IObservationReferenceRange): this;
  addHasMember(value: IReference): this;
  addDerivedFrom(value: IReference): this;
  addComponent(value: IObservationComponent): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a Observation
 * @class ObservationBuilder
 * @extends {DomainResourceBuilder}
 * @implements {IObservationBuilder}
 * @author Roberto Araneda Espinoza
 */
export class ObservationBuilder extends DomainResourceBuilder implements IObservationBuilder {
  private readonly observation: Observation;

  constructor() {
    super();
    this.observation = new Observation();
  }

  /**
   * @description Sets the resource type to Observation
   * @param json - the json to parse
   * @returns {this}
   */
  fromJSON(json: unknown): this {
    const incomingData = typeof json === 'string' ? JSON.parse(json) : json;
    Object.assign(this.observation, incomingData);
    return this;
  }

  /**
   * @description Adds a primitive extension to the element
   * @param param - the field to add the extension to
   * @param extension - the extension to add
   * @returns {this}
   * @example addPrimitiveExtension('_value', { value: 'test' })
   */
  addPrimitiveExtension(param: PrimitiveExtensionFields, extension: IElement): this {
    this.observation[param] = extension;
    return this;
  }

  /**
   * @description Builds the model
   * @returns {Observation}
   */
  build(): Observation {
    return Object.assign(this.observation, super.build());
  }

  /**
   * @description Adds a value to the identifier array
   * @description A unique identifier assigned to this observation.
   * @param value - the value to add
   * @returns {this}
   */
  addIdentifier(value: IIdentifier): this {
    this.observation.identifier = this.observation.identifier || [];
    this.observation.identifier.push(value);
    return this;
  }
  /**
   * @description Adds a value to the basedOn array
   * @description A plan, proposal or order that is fulfilled in whole or in part by this event.  For example, a MedicationRequest may require a patient to have laboratory test performed before  it is dispensed.
   * @param value - the value to add
   * @returns {this}
   */
  addBasedOn(value: IReference): this {
    this.observation.basedOn = this.observation.basedOn || [];
    this.observation.basedOn.push(value);
    return this;
  }
  /**
   * @description Adds a value to the partOf array
   * @description A larger event of which this particular Observation is a component or step.  For example,  an observation as part of a procedure.
   * @param value - the value to add
   * @returns {this}
   */
  addPartOf(value: IReference): this {
    this.observation.partOf = this.observation.partOf || [];
    this.observation.partOf.push(value);
    return this;
  }
  /**
    * @description Sets the status value
    * @description The status of the result value. 
 registered | preliminary | final | amended | corrected | cancelled | entered-in-error | unknown.
    * @param value - the value to set
    * @returns {this}
    */
  setStatus(value: ObservationStatusType): this {
    this.observation.status = value;
    return this;
  }

  /**
   * @description Adds a value to the category array
   * @description A code that classifies the general type of observation being made.
   * @param value - the value to add
   * @returns {this}
   */
  addCategory(value: ICodeableConcept): this {
    this.observation.category = this.observation.category || [];
    this.observation.category.push(value);
    return this;
  }
  /**
   * @description Sets the code value
   * @description Describes what was observed. Sometimes this is called the observation "name".
   * @param value - the value to set
   * @returns {this}
   */
  setCode(value: ICodeableConcept): this {
    this.observation.code = value;
    return this;
  }

  /**
   * @description Sets the subject value
   * @description The patient, or group of patients, location, or device this observation is about and into whose record the observation is placed. If the actual focus of the observation is different from the subject (or a sample of, part, or region of the subject), the `focus` element or the `code` itself specifies the actual focus of the observation.
   * @param value - the value to set
   * @returns {this}
   */
  setSubject(value: IReference): this {
    this.observation.subject = value;
    return this;
  }

  /**
   * @description Adds a value to the focus array
   * @description The actual focus of an observation when it is not the patient of record representing something or someone associated with the patient such as a spouse, parent, fetus, or donor. For example, fetus observations in a mother's record.  The focus of an observation could also be an existing condition,  an intervention, the subject's diet,  another observation of the subject,  or a body structure such as tumor or implanted device.   An example use case would be using the Observation resource to capture whether the mother is trained to change her child's tracheostomy tube. In this example, the child is the patient of record and the mother is the focus.
   * @param value - the value to add
   * @returns {this}
   */
  addFocus(value: IReference): this {
    this.observation.focus = this.observation.focus || [];
    this.observation.focus.push(value);
    return this;
  }
  /**
   * @description Sets the encounter value
   * @description The healthcare event  (e.g. a patient and healthcare provider interaction) during which this observation is made.
   * @param value - the value to set
   * @returns {this}
   */
  setEncounter(value: IReference): this {
    this.observation.encounter = value;
    return this;
  }

  /**
   * @description Sets the effectiveDateTime value
   * @description The time or time-period the observed value is asserted as being true. For biological subjects - e.g. human patients - this is usually called the "physiologically relevant time". This is usually either the time of the procedure or of specimen collection, but very often the source of the date/time is not known, only the date/time itself.
   * @param value - the value to set
   * @returns {this}
   */
  setEffectiveDateTime(value: string): this {
    this.observation.effectiveDateTime = value;
    return this;
  }

  /**
   * @description Sets the effectivePeriod value
   * @description The time or time-period the observed value is asserted as being true. For biological subjects - e.g. human patients - this is usually called the "physiologically relevant time". This is usually either the time of the procedure or of specimen collection, but very often the source of the date/time is not known, only the date/time itself.
   * @param value - the value to set
   * @returns {this}
   */
  setEffectivePeriod(value: IPeriod): this {
    this.observation.effectivePeriod = value;
    return this;
  }

  /**
   * @description Sets the effectiveTiming value
   * @description The time or time-period the observed value is asserted as being true. For biological subjects - e.g. human patients - this is usually called the "physiologically relevant time". This is usually either the time of the procedure or of specimen collection, but very often the source of the date/time is not known, only the date/time itself.
   * @param value - the value to set
   * @returns {this}
   */
  setEffectiveTiming(value: ITiming): this {
    this.observation.effectiveTiming = value;
    return this;
  }

  /**
   * @description Sets the effectiveInstant value
   * @description The time or time-period the observed value is asserted as being true. For biological subjects - e.g. human patients - this is usually called the "physiologically relevant time". This is usually either the time of the procedure or of specimen collection, but very often the source of the date/time is not known, only the date/time itself.
   * @param value - the value to set
   * @returns {this}
   */
  setEffectiveInstant(value: string): this {
    this.observation.effectiveInstant = value;
    return this;
  }

  /**
   * @description Sets the issued value
   * @description The date and time this version of the observation was made available to providers, typically after the results have been reviewed and verified.
   * @param value - the value to set
   * @returns {this}
   */
  setIssued(value: string): this {
    this.observation.issued = value;
    return this;
  }

  /**
   * @description Adds a value to the performer array
   * @description Who was responsible for asserting the observed value as "true".
   * @param value - the value to add
   * @returns {this}
   */
  addPerformer(value: IReference): this {
    this.observation.performer = this.observation.performer || [];
    this.observation.performer.push(value);
    return this;
  }
  /**
   * @description Sets the valueQuantity value
   * @description The information determined as a result of making the observation, if the information has a simple value.
   * @param value - the value to set
   * @returns {this}
   */
  setValueQuantity(value: IQuantity): this {
    this.observation.valueQuantity = value;
    return this;
  }

  /**
   * @description Sets the valueCodeableConcept value
   * @description The information determined as a result of making the observation, if the information has a simple value.
   * @param value - the value to set
   * @returns {this}
   */
  setValueCodeableConcept(value: ICodeableConcept): this {
    this.observation.valueCodeableConcept = value;
    return this;
  }

  /**
   * @description Sets the valueString value
   * @description The information determined as a result of making the observation, if the information has a simple value.
   * @param value - the value to set
   * @returns {this}
   */
  setValueString(value: string): this {
    this.observation.valueString = value;
    return this;
  }

  /**
   * @description Sets the valueBoolean value
   * @description The information determined as a result of making the observation, if the information has a simple value.
   * @param value - the value to set
   * @returns {this}
   */
  setValueBoolean(value: boolean): this {
    this.observation.valueBoolean = value;
    return this;
  }

  /**
   * @description Sets the valueInteger value
   * @description The information determined as a result of making the observation, if the information has a simple value.
   * @param value - the value to set
   * @returns {this}
   */
  setValueInteger(value: number): this {
    this.observation.valueInteger = value;
    return this;
  }

  /**
   * @description Sets the valueRange value
   * @description The information determined as a result of making the observation, if the information has a simple value.
   * @param value - the value to set
   * @returns {this}
   */
  setValueRange(value: IRange): this {
    this.observation.valueRange = value;
    return this;
  }

  /**
   * @description Sets the valueRatio value
   * @description The information determined as a result of making the observation, if the information has a simple value.
   * @param value - the value to set
   * @returns {this}
   */
  setValueRatio(value: IRatio): this {
    this.observation.valueRatio = value;
    return this;
  }

  /**
   * @description Sets the valueSampledData value
   * @description The information determined as a result of making the observation, if the information has a simple value.
   * @param value - the value to set
   * @returns {this}
   */
  setValueSampledData(value: ISampledData): this {
    this.observation.valueSampledData = value;
    return this;
  }

  /**
   * @description Sets the valueTime value
   * @description The information determined as a result of making the observation, if the information has a simple value.
   * @param value - the value to set
   * @returns {this}
   */
  setValueTime(value: string): this {
    this.observation.valueTime = value;
    return this;
  }

  /**
   * @description Sets the valueDateTime value
   * @description The information determined as a result of making the observation, if the information has a simple value.
   * @param value - the value to set
   * @returns {this}
   */
  setValueDateTime(value: string): this {
    this.observation.valueDateTime = value;
    return this;
  }

  /**
   * @description Sets the valuePeriod value
   * @description The information determined as a result of making the observation, if the information has a simple value.
   * @param value - the value to set
   * @returns {this}
   */
  setValuePeriod(value: IPeriod): this {
    this.observation.valuePeriod = value;
    return this;
  }

  /**
   * @description Sets the dataAbsentReason value
   * @description Provides a reason why the expected value in the element Observation.value[x] is missing.
   * @param value - the value to set
   * @returns {this}
   */
  setDataAbsentReason(value: ICodeableConcept): this {
    this.observation.dataAbsentReason = value;
    return this;
  }

  /**
   * @description Adds a value to the interpretation array
   * @description A categorical assessment of an observation value.  For example, high, low, normal.
   * @param value - the value to add
   * @returns {this}
   */
  addInterpretation(value: ICodeableConcept): this {
    this.observation.interpretation = this.observation.interpretation || [];
    this.observation.interpretation.push(value);
    return this;
  }
  /**
   * @description Adds a value to the note array
   * @description Comments about the observation or the results.
   * @param value - the value to add
   * @returns {this}
   */
  addNote(value: IAnnotation): this {
    this.observation.note = this.observation.note || [];
    this.observation.note.push(value);
    return this;
  }
  /**
   * @description Sets the bodySite value
   * @description Indicates the site on the subject's body where the observation was made (i.e. the target site).
   * @param value - the value to set
   * @returns {this}
   */
  setBodySite(value: ICodeableConcept): this {
    this.observation.bodySite = value;
    return this;
  }

  /**
   * @description Sets the method value
   * @description Indicates the mechanism used to perform the observation.
   * @param value - the value to set
   * @returns {this}
   */
  setMethod(value: ICodeableConcept): this {
    this.observation.method = value;
    return this;
  }

  /**
   * @description Sets the specimen value
   * @description The specimen that was used when this observation was made.
   * @param value - the value to set
   * @returns {this}
   */
  setSpecimen(value: IReference): this {
    this.observation.specimen = value;
    return this;
  }

  /**
   * @description Sets the device value
   * @description The device used to generate the observation data.
   * @param value - the value to set
   * @returns {this}
   */
  setDevice(value: IReference): this {
    this.observation.device = value;
    return this;
  }

  /**
   * @description Adds a value to the referenceRange array
   * @description Guidance on how to interpret the value by comparison to a normal or recommended range.  Multiple reference ranges are interpreted as an "OR".   In other words, to represent two distinct target populations, two `referenceRange` elements would be used.
   * @param value - the value to add
   * @returns {this}
   */
  addReferenceRange(value: IObservationReferenceRange): this {
    this.observation.referenceRange = this.observation.referenceRange || [];
    this.observation.referenceRange.push(value);
    return this;
  }
  /**
   * @description Adds a value to the hasMember array
   * @description This observation is a group observation (e.g. a battery, a panel of tests, a set of vital sign measurements) that includes the target as a member of the group.
   * @param value - the value to add
   * @returns {this}
   */
  addHasMember(value: IReference): this {
    this.observation.hasMember = this.observation.hasMember || [];
    this.observation.hasMember.push(value);
    return this;
  }
  /**
   * @description Adds a value to the derivedFrom array
   * @description The target resource that represents a measurement from which this observation value is derived. For example, a calculated anion gap or a fetal measurement based on an ultrasound image.
   * @param value - the value to add
   * @returns {this}
   */
  addDerivedFrom(value: IReference): this {
    this.observation.derivedFrom = this.observation.derivedFrom || [];
    this.observation.derivedFrom.push(value);
    return this;
  }
  /**
   * @description Adds a value to the component array
   * @description Some observations have multiple component observations.  These component observations are expressed as separate code value pairs that share the same attributes.  Examples include systolic and diastolic component observations for blood pressure measurement and multiple component observations for genetics observations.
   * @param value - the value to add
   * @returns {this}
   */
  addComponent(value: IObservationComponent): this {
    this.observation.component = this.observation.component || [];
    this.observation.component.push(value);
    return this;
  }
}
