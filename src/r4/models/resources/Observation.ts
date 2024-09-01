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
import { IObservation, IOperationOutcome } from 'fhirtypes/dist/r4';
import { DomainResource, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for Observation Resource
 * @property {string} resourceType
 * @property {IIdentifier[]} identifier
 * @property {IReference[]} basedOn
 * @property {IReference[]} partOf
 * @property {ObservationStatusType} status
 * @property {IElement} _status
 * @property {ICodeableConcept[]} category
 * @property {ICodeableConcept} code
 * @property {IReference} subject
 * @property {IReference[]} focus
 * @property {IReference} encounter
 * @property {string} effectiveDateTime
 * @property {IElement} _effectiveDateTime
 * @property {IPeriod} effectivePeriod
 * @property {ITiming} effectiveTiming
 * @property {string} effectiveInstant
 * @property {IElement} _effectiveInstant
 * @property {string} issued
 * @property {IElement} _issued
 * @property {IReference[]} performer
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
 * @property {IAnnotation[]} note
 * @property {ICodeableConcept} bodySite
 * @property {ICodeableConcept} method
 * @property {IReference} specimen
 * @property {IReference} device
 * @property {IObservationReferenceRange[]} referenceRange
 * @property {IReference[]} hasMember
 * @property {IReference[]} derivedFrom
 * @property {IObservationComponent[]} component
 * @author Roberto Araneda Espinoza
 */
export class Observation extends DomainResource implements IObservation, IValidatable, ISerializable {
  /**
   * @description The type of resource
   */
  resourceType? = 'Observation';

  /**
   * @description A unique identifier assigned to this observation.
   */
  identifier?: IIdentifier[];

  /**
   * @description A plan, proposal or order that is fulfilled in whole or in part by this event.  For example, a MedicationRequest may require a patient to have laboratory test performed before  it is dispensed.
   */
  basedOn?: IReference[];

  /**
   * @description A larger event of which this particular Observation is a component or step.  For example,  an observation as part of a procedure.
   */
  partOf?: IReference[];

  /**
   * @description The status of the result value. 
 registered | preliminary | final | amended | corrected | cancelled | entered-in-error | unknown.
   */
  status: ObservationStatusType;

  /**
   * @description Extensions for status
   */
  _status?: IElement;

  /**
   * @description A code that classifies the general type of observation being made.
   */
  category?: ICodeableConcept[];

  /**
   * @description Describes what was observed. Sometimes this is called the observation "name".
   */
  code: ICodeableConcept;

  /**
   * @description The patient, or group of patients, location, or device this observation is about and into whose record the observation is placed. If the actual focus of the observation is different from the subject (or a sample of, part, or region of the subject), the `focus` element or the `code` itself specifies the actual focus of the observation.
   */
  subject?: IReference;

  /**
   * @description The actual focus of an observation when it is not the patient of record representing something or someone associated with the patient such as a spouse, parent, fetus, or donor. For example, fetus observations in a mother's record.  The focus of an observation could also be an existing condition,  an intervention, the subject's diet,  another observation of the subject,  or a body structure such as tumor or implanted device.   An example use case would be using the Observation resource to capture whether the mother is trained to change her child's tracheostomy tube. In this example, the child is the patient of record and the mother is the focus.
   */
  focus?: IReference[];

  /**
   * @description The healthcare event  (e.g. a patient and healthcare provider interaction) during which this observation is made.
   */
  encounter?: IReference;

  /**
   * @description The time or time-period the observed value is asserted as being true. For biological subjects - e.g. human patients - this is usually called the "physiologically relevant time". This is usually either the time of the procedure or of specimen collection, but very often the source of the date/time is not known, only the date/time itself.
   */
  effectiveDateTime?: string;

  /**
   * @description Extensions for effectiveDateTime
   */
  _effectiveDateTime?: IElement;

  /**
   * @description The time or time-period the observed value is asserted as being true. For biological subjects - e.g. human patients - this is usually called the "physiologically relevant time". This is usually either the time of the procedure or of specimen collection, but very often the source of the date/time is not known, only the date/time itself.
   */
  effectivePeriod?: IPeriod;

  /**
   * @description The time or time-period the observed value is asserted as being true. For biological subjects - e.g. human patients - this is usually called the "physiologically relevant time". This is usually either the time of the procedure or of specimen collection, but very often the source of the date/time is not known, only the date/time itself.
   */
  effectiveTiming?: ITiming;

  /**
   * @description The time or time-period the observed value is asserted as being true. For biological subjects - e.g. human patients - this is usually called the "physiologically relevant time". This is usually either the time of the procedure or of specimen collection, but very often the source of the date/time is not known, only the date/time itself.
   */
  effectiveInstant?: string;

  /**
   * @description Extensions for effectiveInstant
   */
  _effectiveInstant?: IElement;

  /**
   * @description The date and time this version of the observation was made available to providers, typically after the results have been reviewed and verified.
   */
  issued?: string;

  /**
   * @description Extensions for issued
   */
  _issued?: IElement;

  /**
   * @description Who was responsible for asserting the observed value as "true".
   */
  performer?: IReference[];

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
   * @description Provides a reason why the expected value in the element Observation.value[x] is missing.
   */
  dataAbsentReason?: ICodeableConcept;

  /**
   * @description A categorical assessment of an observation value.  For example, high, low, normal.
   */
  interpretation?: ICodeableConcept[];

  /**
   * @description Comments about the observation or the results.
   */
  note?: IAnnotation[];

  /**
   * @description Indicates the site on the subject's body where the observation was made (i.e. the target site).
   */
  bodySite?: ICodeableConcept;

  /**
   * @description Indicates the mechanism used to perform the observation.
   */
  method?: ICodeableConcept;

  /**
   * @description The specimen that was used when this observation was made.
   */
  specimen?: IReference;

  /**
   * @description The device used to generate the observation data.
   */
  device?: IReference;

  /**
   * @description Guidance on how to interpret the value by comparison to a normal or recommended range.  Multiple reference ranges are interpreted as an "OR".   In other words, to represent two distinct target populations, two `referenceRange` elements would be used.
   */
  referenceRange?: IObservationReferenceRange[];

  /**
   * @description This observation is a group observation (e.g. a battery, a panel of tests, a set of vital sign measurements) that includes the target as a member of the group.
   */
  hasMember?: IReference[];

  /**
   * @description The target resource that represents a measurement from which this observation value is derived. For example, a calculated anion gap or a fetal measurement based on an ultrasound image.
   */
  derivedFrom?: IReference[];

  /**
   * @description Some observations have multiple component observations.  These component observations are expressed as separate code value pairs that share the same attributes.  Examples include systolic and diastolic component observations for blood pressure measurement and multiple component observations for genetics observations.
   */
  component?: IObservationComponent[];

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
    return `Observation${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `Observation${JSON.stringify(this.toJson(), null, 2)}`;
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
    return ConformanceValidator('Observation', this);
  }

  constructor(args?: IObservation) {
    super();
    if (args) Object.assign(this, args);
  }
}
