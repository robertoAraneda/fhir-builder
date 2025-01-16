import { ICodeableConcept, IReference, IAnnotation, ICarePlanDetail } from 'fhirtypes/dist/r4';
import { ICarePlanActivity, IOperationOutcome } from 'fhirtypes/dist/r4';
import { BackboneElement, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';

/**
  * @version R4 (v4.0.1)
  * @summary FHIR® Specification by HL7®
  * @description Class for CarePlanActivity BackboneElement
  undefined
  * @property {ICodeableConcept[]} outcomeCodeableConcept
  * @property {IReference[]} outcomeReference
  * @property {IAnnotation[]} progress
  * @property {IReference} reference
  * @property {ICarePlanDetail} detail
  * @author Roberto Araneda Espinoza
  */
export class CarePlanActivity extends BackboneElement implements ICarePlanActivity, IValidatable, ISerializable {
  /**
   * @description Identifies the outcome at the point when the status of the activity is assessed.  For example, the outcome of an education activity could be patient understands (or not).
   */
  outcomeCodeableConcept?: ICodeableConcept[];

  /**
   * @description Details of the outcome or action resulting from the activity.  The reference to an "event" resource, such as Procedure or Encounter or Observation, is the result/outcome of the activity itself.  The activity can be conveyed using CarePlan.activity.detail OR using the CarePlan.activity.reference (a reference to a “request” resource).
   */
  outcomeReference?: IReference[];

  /**
   * @description Notes about the adherence/status/progress of the activity.
   */
  progress?: IAnnotation[];

  /**
   * @description The details of the proposed activity represented in a specific resource.
   */
  reference?: IReference;

  /**
   * @description A simple summary of a planned activity suitable for a general care plan system (e.g. form driven) that doesn't know about specific resources such as procedure etc.
   */
  detail?: ICarePlanDetail;

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
    return `CarePlanActivity${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `CarePlanActivity${JSON.stringify(this.toJson(), null, 2)}`;
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
    return ConformanceValidator('CarePlanActivity', this);
  }

  constructor(args?: ICarePlanActivity) {
    super();
    if (args) Object.assign(this, args);
  }
}
