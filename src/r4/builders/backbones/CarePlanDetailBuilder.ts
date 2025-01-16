import { IElement, ICodeableConcept, IReference, ITiming, IPeriod, IQuantity } from 'fhirtypes/dist/r4';
import { CarePlanDetail } from '../../models';
import { BackboneBuilder, IBuildable } from '../base';
import { ExtractUnderscoreKeys, ExtractUnderscoreArrayKeys } from '../../../core/commons/utils';
import { CarePlanActivityKindType, CarePlanActivityStatusType } from 'fhirtypes/dist/r4/types';

// Extract the keys that start with an underscore
type PrimitiveExtensionFields = ExtractUnderscoreKeys<CarePlanDetail>;

// Extract the keys that are arrays and start with an underscore
type UnderscoreArrayElements = ExtractUnderscoreArrayKeys<CarePlanDetail>;
/**
 * @description Interface for chaining the building of a CarePlanDetail
 * @interface ICarePlanDetailBuilder
 * @extends {IBuildable<CarePlanDetail>}
 */
interface ICarePlanDetailBuilder extends IBuildable<CarePlanDetail> {
  setKind(value: CarePlanActivityKindType): this;
  addInstantiatesCanonical(value: string): this;
  addInstantiatesUri(value: string): this;
  setCode(value: ICodeableConcept): this;
  addReasonCode(value: ICodeableConcept): this;
  addReasonReference(value: IReference): this;
  addGoal(value: IReference): this;
  setStatus(value: CarePlanActivityStatusType): this;
  setStatusReason(value: ICodeableConcept): this;
  setDoNotPerform(value: boolean): this;
  setScheduledTiming(value: ITiming): this;
  setScheduledPeriod(value: IPeriod): this;
  setScheduledString(value: string): this;
  setLocation(value: IReference): this;
  addPerformer(value: IReference): this;
  setProductCodeableConcept(value: ICodeableConcept): this;
  setProductReference(value: IReference): this;
  setDailyAmount(value: IQuantity): this;
  setQuantity(value: IQuantity): this;
  setDescription(value: string): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a CarePlanDetail
 * @class CarePlanDetailBuilder
 * @extends {BackboneBuilder}
 * @implements {ICarePlanDetailBuilder}
 * @author Roberto Araneda Espinoza
 */
export class CarePlanDetailBuilder extends BackboneBuilder implements ICarePlanDetailBuilder {
  private readonly carePlanDetail: CarePlanDetail;

  constructor() {
    super();
    this.carePlanDetail = new CarePlanDetail();
  }

  /**
   * @description Adds a primitive extension to the element
   * @param param - the field to add the extension to
   * @param extension - the extension to add
   * @returns {this}
   * @example addPrimitiveExtension('_value', { value: 'test' })
   */
  addPrimitiveExtension<T extends PrimitiveExtensionFields>(param: T, extension: IElement): this {
    const arrayParam = ['_instantiatesUri'];
    if (arrayParam.includes(param)) {
      this.carePlanDetail[param] = this.carePlanDetail[param] || [];
      (this.carePlanDetail[param] as IElement[]).push(extension as IElement);

      return this;
    }

    const localParam = param as Exclude<PrimitiveExtensionFields, UnderscoreArrayElements>;
    this.carePlanDetail[localParam] = extension as IElement;
    return this;
  }

  /**
   * @description Builds the model
   * @returns {CarePlanDetail}
   */
  build(): CarePlanDetail {
    return Object.assign(this.carePlanDetail, super.build());
  }

  /**
   * @description Sets the kind value
   * @description A description of the kind of resource the in-line definition of a care plan activity is representing.  The CarePlan.activity.detail is an in-line definition when a resource is not referenced using CarePlan.activity.reference.  For example, a MedicationRequest, a ServiceRequest, or a CommunicationRequest.
   * @param value - the value to set
   * @returns {this}
   */
  setKind(value: CarePlanActivityKindType): this {
    this.carePlanDetail.kind = value;
    return this;
  }

  /**
   * @description Adds a value to the instantiatesCanonical array
   * @description The URL pointing to a FHIR-defined protocol, guideline, questionnaire or other definition that is adhered to in whole or in part by this CarePlan activity.
   * @param value - the value to add
   * @returns {this}
   */
  addInstantiatesCanonical(value: string): this {
    this.carePlanDetail.instantiatesCanonical = this.carePlanDetail.instantiatesCanonical || [];
    this.carePlanDetail.instantiatesCanonical.push(value);
    return this;
  }
  /**
   * @description Adds a value to the instantiatesUri array
   * @description The URL pointing to an externally maintained protocol, guideline, questionnaire or other definition that is adhered to in whole or in part by this CarePlan activity.
   * @param value - the value to add
   * @returns {this}
   */
  addInstantiatesUri(value: string): this {
    this.carePlanDetail.instantiatesUri = this.carePlanDetail.instantiatesUri || [];
    this.carePlanDetail.instantiatesUri.push(value);
    return this;
  }
  /**
   * @description Sets the code value
   * @description Detailed description of the type of planned activity; e.g. what lab test, what procedure, what kind of encounter.
   * @param value - the value to set
   * @returns {this}
   */
  setCode(value: ICodeableConcept): this {
    this.carePlanDetail.code = value;
    return this;
  }

  /**
   * @description Adds a value to the reasonCode array
   * @description Provides the rationale that drove the inclusion of this particular activity as part of the plan or the reason why the activity was prohibited.
   * @param value - the value to add
   * @returns {this}
   */
  addReasonCode(value: ICodeableConcept): this {
    this.carePlanDetail.reasonCode = this.carePlanDetail.reasonCode || [];
    this.carePlanDetail.reasonCode.push(value);
    return this;
  }
  /**
   * @description Adds a value to the reasonReference array
   * @description Indicates another resource, such as the health condition(s), whose existence justifies this request and drove the inclusion of this particular activity as part of the plan.
   * @param value - the value to add
   * @returns {this}
   */
  addReasonReference(value: IReference): this {
    this.carePlanDetail.reasonReference = this.carePlanDetail.reasonReference || [];
    this.carePlanDetail.reasonReference.push(value);
    return this;
  }
  /**
   * @description Adds a value to the goal array
   * @description Internal reference that identifies the goals that this activity is intended to contribute towards meeting.
   * @param value - the value to add
   * @returns {this}
   */
  addGoal(value: IReference): this {
    this.carePlanDetail.goal = this.carePlanDetail.goal || [];
    this.carePlanDetail.goal.push(value);
    return this;
  }
  /**
   * @description Sets the status value
   * @description Identifies what progress is being made for the specific activity.
   * @param value - the value to set
   * @returns {this}
   */
  setStatus(value: CarePlanActivityStatusType): this {
    this.carePlanDetail.status = value;
    return this;
  }

  /**
   * @description Sets the statusReason value
   * @description Provides reason why the activity isn't yet started, is on hold, was cancelled, etc.
   * @param value - the value to set
   * @returns {this}
   */
  setStatusReason(value: ICodeableConcept): this {
    this.carePlanDetail.statusReason = value;
    return this;
  }

  /**
   * @description Sets the doNotPerform value
   * @description If true, indicates that the described activity is one that must NOT be engaged in when following the plan.  If false, or missing, indicates that the described activity is one that should be engaged in when following the plan.
   * @param value - the value to set
   * @returns {this}
   */
  setDoNotPerform(value: boolean): this {
    this.carePlanDetail.doNotPerform = value;
    return this;
  }

  /**
   * @description Sets the scheduledTiming value
   * @description The period, timing or frequency upon which the described activity is to occur.
   * @param value - the value to set
   * @returns {this}
   */
  setScheduledTiming(value: ITiming): this {
    this.carePlanDetail.scheduledTiming = value;
    return this;
  }

  /**
   * @description Sets the scheduledPeriod value
   * @description The period, timing or frequency upon which the described activity is to occur.
   * @param value - the value to set
   * @returns {this}
   */
  setScheduledPeriod(value: IPeriod): this {
    this.carePlanDetail.scheduledPeriod = value;
    return this;
  }

  /**
   * @description Sets the scheduledString value
   * @description The period, timing or frequency upon which the described activity is to occur.
   * @param value - the value to set
   * @returns {this}
   */
  setScheduledString(value: string): this {
    this.carePlanDetail.scheduledString = value;
    return this;
  }

  /**
   * @description Sets the location value
   * @description Identifies the facility where the activity will occur; e.g. home, hospital, specific clinic, etc.
   * @param value - the value to set
   * @returns {this}
   */
  setLocation(value: IReference): this {
    this.carePlanDetail.location = value;
    return this;
  }

  /**
   * @description Adds a value to the performer array
   * @description Identifies who's expected to be involved in the activity.
   * @param value - the value to add
   * @returns {this}
   */
  addPerformer(value: IReference): this {
    this.carePlanDetail.performer = this.carePlanDetail.performer || [];
    this.carePlanDetail.performer.push(value);
    return this;
  }
  /**
   * @description Sets the productCodeableConcept value
   * @description Identifies the food, drug or other product to be consumed or supplied in the activity.
   * @param value - the value to set
   * @returns {this}
   */
  setProductCodeableConcept(value: ICodeableConcept): this {
    this.carePlanDetail.productCodeableConcept = value;
    return this;
  }

  /**
   * @description Sets the productReference value
   * @description Identifies the food, drug or other product to be consumed or supplied in the activity.
   * @param value - the value to set
   * @returns {this}
   */
  setProductReference(value: IReference): this {
    this.carePlanDetail.productReference = value;
    return this;
  }

  /**
   * @description Sets the dailyAmount value
   * @description Identifies the quantity expected to be consumed in a given day.
   * @param value - the value to set
   * @returns {this}
   */
  setDailyAmount(value: IQuantity): this {
    this.carePlanDetail.dailyAmount = value;
    return this;
  }

  /**
   * @description Sets the quantity value
   * @description Identifies the quantity expected to be supplied, administered or consumed by the subject.
   * @param value - the value to set
   * @returns {this}
   */
  setQuantity(value: IQuantity): this {
    this.carePlanDetail.quantity = value;
    return this;
  }

  /**
   * @description Sets the description value
   * @description This provides a textual description of constraints on the intended activity occurrence, including relation to other activities.  It may also include objectives, pre-conditions and end-conditions.  Finally, it may convey specifics about the activity such as body site, method, route, etc.
   * @param value - the value to set
   * @returns {this}
   */
  setDescription(value: string): this {
    this.carePlanDetail.description = value;
    return this;
  }
}
