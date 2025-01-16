import { IElement, ICodeableConcept, IReference, ITiming, IPeriod, IQuantity } from 'fhirtypes/dist/r4';
import { ICarePlanDetail, IOperationOutcome } from 'fhirtypes/dist/r4';
import { BackboneElement, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';
import { CarePlanActivityKindType, CarePlanActivityStatusType } from 'fhirtypes/dist/r4/types';

/**
  * @version R4 (v4.0.1)
  * @summary FHIR® Specification by HL7®
  * @description Class for CarePlanDetail BackboneElement
  undefined
  * @property {string} kind
  * @property {IElement} _kind
  * @property {string[]} instantiatesCanonical
  * @property {string[]} instantiatesUri
  * @property {IElement[]} _instantiatesUri
  * @property {ICodeableConcept} code
  * @property {ICodeableConcept[]} reasonCode
  * @property {IReference[]} reasonReference
  * @property {IReference[]} goal
  * @property {string} status
  * @property {IElement} _status
  * @property {ICodeableConcept} statusReason
  * @property {boolean} doNotPerform
  * @property {IElement} _doNotPerform
  * @property {ITiming} scheduledTiming
  * @property {IPeriod} scheduledPeriod
  * @property {string} scheduledString
  * @property {IElement} _scheduledString
  * @property {IReference} location
  * @property {IReference[]} performer
  * @property {ICodeableConcept} productCodeableConcept
  * @property {IReference} productReference
  * @property {IQuantity} dailyAmount
  * @property {IQuantity} quantity
  * @property {string} description
  * @property {IElement} _description
  * @author Roberto Araneda Espinoza
  */
export class CarePlanDetail extends BackboneElement implements ICarePlanDetail, IValidatable, ISerializable {
  /**
   * @description A description of the kind of resource the in-line definition of a care plan activity is representing.  The CarePlan.activity.detail is an in-line definition when a resource is not referenced using CarePlan.activity.reference.  For example, a MedicationRequest, a ServiceRequest, or a CommunicationRequest.
   */
  kind?: CarePlanActivityKindType;

  /**
   * @description Extensions for kind
   */
  _kind?: IElement;

  /**
   * @description The URL pointing to a FHIR-defined protocol, guideline, questionnaire or other definition that is adhered to in whole or in part by this CarePlan activity.
   */
  instantiatesCanonical?: string[];

  /**
   * @description The URL pointing to an externally maintained protocol, guideline, questionnaire or other definition that is adhered to in whole or in part by this CarePlan activity.
   */
  instantiatesUri?: string[];

  /**
   * @description Extensions for instantiatesUri
   */
  _instantiatesUri?: IElement[];

  /**
   * @description Detailed description of the type of planned activity; e.g. what lab test, what procedure, what kind of encounter.
   */
  code?: ICodeableConcept;

  /**
   * @description Provides the rationale that drove the inclusion of this particular activity as part of the plan or the reason why the activity was prohibited.
   */
  reasonCode?: ICodeableConcept[];

  /**
   * @description Indicates another resource, such as the health condition(s), whose existence justifies this request and drove the inclusion of this particular activity as part of the plan.
   */
  reasonReference?: IReference[];

  /**
   * @description Internal reference that identifies the goals that this activity is intended to contribute towards meeting.
   */
  goal?: IReference[];

  /**
   * @description Identifies what progress is being made for the specific activity.
   */
  status: CarePlanActivityStatusType;

  /**
   * @description Extensions for status
   */
  _status?: IElement;

  /**
   * @description Provides reason why the activity isn't yet started, is on hold, was cancelled, etc.
   */
  statusReason?: ICodeableConcept;

  /**
   * @description If true, indicates that the described activity is one that must NOT be engaged in when following the plan.  If false, or missing, indicates that the described activity is one that should be engaged in when following the plan.
   */
  doNotPerform?: boolean;

  /**
   * @description Extensions for doNotPerform
   */
  _doNotPerform?: IElement;

  /**
   * @description The period, timing or frequency upon which the described activity is to occur.
   */
  scheduledTiming?: ITiming;

  /**
   * @description The period, timing or frequency upon which the described activity is to occur.
   */
  scheduledPeriod?: IPeriod;

  /**
   * @description The period, timing or frequency upon which the described activity is to occur.
   */
  scheduledString?: string;

  /**
   * @description Extensions for scheduledString
   */
  _scheduledString?: IElement;

  /**
   * @description Identifies the facility where the activity will occur; e.g. home, hospital, specific clinic, etc.
   */
  location?: IReference;

  /**
   * @description Identifies who's expected to be involved in the activity.
   */
  performer?: IReference[];

  /**
   * @description Identifies the food, drug or other product to be consumed or supplied in the activity.
   */
  productCodeableConcept?: ICodeableConcept;

  /**
   * @description Identifies the food, drug or other product to be consumed or supplied in the activity.
   */
  productReference?: IReference;

  /**
   * @description Identifies the quantity expected to be consumed in a given day.
   */
  dailyAmount?: IQuantity;

  /**
   * @description Identifies the quantity expected to be supplied, administered or consumed by the subject.
   */
  quantity?: IQuantity;

  /**
   * @description This provides a textual description of constraints on the intended activity occurrence, including relation to other activities.  It may also include objectives, pre-conditions and end-conditions.  Finally, it may convey specifics about the activity such as body site, method, route, etc.
   */
  description?: string;

  /**
   * @description Extensions for description
   */
  _description?: IElement;

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
    return `CarePlanDetail${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `CarePlanDetail${JSON.stringify(this.toJson(), null, 2)}`;
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
    return ConformanceValidator('CarePlanDetail', this);
  }

  constructor(args?: ICarePlanDetail) {
    super();
    if (args) Object.assign(this, args);
  }
}
