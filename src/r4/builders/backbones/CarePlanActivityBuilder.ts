import { ICodeableConcept, IReference, IAnnotation, ICarePlanDetail } from 'fhirtypes/dist/r4';
import { CarePlanActivity } from '../../models';
import { BackboneBuilder, IBuildable } from '../base';

/**
 * @description Interface for chaining the building of a CarePlanActivity
 * @interface ICarePlanActivityBuilder
 * @extends {IBuildable<CarePlanActivity>}
 */
interface ICarePlanActivityBuilder extends IBuildable<CarePlanActivity> {
  addOutcomeCodeableConcept(value: ICodeableConcept): this;
  addOutcomeReference(value: IReference): this;
  addProgress(value: IAnnotation): this;
  setReference(value: IReference): this;
  setDetail(value: ICarePlanDetail): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a CarePlanActivity
 * @class CarePlanActivityBuilder
 * @extends {BackboneBuilder}
 * @implements {ICarePlanActivityBuilder}
 * @author Roberto Araneda Espinoza
 */
export class CarePlanActivityBuilder extends BackboneBuilder implements ICarePlanActivityBuilder {
  private readonly carePlanActivity: CarePlanActivity;

  constructor() {
    super();
    this.carePlanActivity = new CarePlanActivity();
  }

  /**
   * @description Builds the model
   * @returns {CarePlanActivity}
   */
  build(): CarePlanActivity {
    return Object.assign(this.carePlanActivity, super.build());
  }

  /**
   * @description Adds a value to the outcomeCodeableConcept array
   * @description Identifies the outcome at the point when the status of the activity is assessed.  For example, the outcome of an education activity could be patient understands (or not).
   * @param value - the value to add
   * @returns {this}
   */
  addOutcomeCodeableConcept(value: ICodeableConcept): this {
    this.carePlanActivity.outcomeCodeableConcept = this.carePlanActivity.outcomeCodeableConcept || [];
    this.carePlanActivity.outcomeCodeableConcept.push(value);
    return this;
  }
  /**
   * @description Adds a value to the outcomeReference array
   * @description Details of the outcome or action resulting from the activity.  The reference to an "event" resource, such as Procedure or Encounter or Observation, is the result/outcome of the activity itself.  The activity can be conveyed using CarePlan.activity.detail OR using the CarePlan.activity.reference (a reference to a “request” resource).
   * @param value - the value to add
   * @returns {this}
   */
  addOutcomeReference(value: IReference): this {
    this.carePlanActivity.outcomeReference = this.carePlanActivity.outcomeReference || [];
    this.carePlanActivity.outcomeReference.push(value);
    return this;
  }
  /**
   * @description Adds a value to the progress array
   * @description Notes about the adherence/status/progress of the activity.
   * @param value - the value to add
   * @returns {this}
   */
  addProgress(value: IAnnotation): this {
    this.carePlanActivity.progress = this.carePlanActivity.progress || [];
    this.carePlanActivity.progress.push(value);
    return this;
  }
  /**
   * @description Sets the reference value
   * @description The details of the proposed activity represented in a specific resource.
   * @param value - the value to set
   * @returns {this}
   */
  setReference(value: IReference): this {
    this.carePlanActivity.reference = value;
    return this;
  }

  /**
   * @description Sets the detail value
   * @description A simple summary of a planned activity suitable for a general care plan system (e.g. form driven) that doesn't know about specific resources such as procedure etc.
   * @param value - the value to set
   * @returns {this}
   */
  setDetail(value: ICarePlanDetail): this {
    this.carePlanActivity.detail = value;
    return this;
  }
}
