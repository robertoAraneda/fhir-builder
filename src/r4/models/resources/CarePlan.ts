import {
  IIdentifier,
  IElement,
  IReference,
  ICodeableConcept,
  IPeriod,
  ICarePlanActivity,
  IAnnotation,
} from 'fhirtypes/dist/r4';
import { ICarePlan, IOperationOutcome } from 'fhirtypes/dist/r4';
import { DomainResource, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';
import { CarePlanIntentType, RequestStatusType } from 'fhirtypes/dist/r4/types';

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for CarePlan Resource
 * @property {string} resourceType
 * @property {IIdentifier[]} identifier
 * @property {string[]} instantiatesCanonical
 * @property {string[]} instantiatesUri
 * @property {IElement[]} _instantiatesUri
 * @property {IReference[]} basedOn
 * @property {IReference[]} replaces
 * @property {IReference[]} partOf
 * @property {string} status
 * @property {IElement} _status
 * @property {string} intent
 * @property {IElement} _intent
 * @property {ICodeableConcept[]} category
 * @property {string} title
 * @property {IElement} _title
 * @property {string} description
 * @property {IElement} _description
 * @property {IReference} subject
 * @property {IReference} encounter
 * @property {IPeriod} period
 * @property {string} created
 * @property {IElement} _created
 * @property {IReference} author
 * @property {IReference[]} contributor
 * @property {IReference[]} careTeam
 * @property {IReference[]} addresses
 * @property {IReference[]} supportingInfo
 * @property {IReference[]} goal
 * @property {ICarePlanActivity[]} activity
 * @property {IAnnotation[]} note
 * @author Roberto Araneda Espinoza
 */
export class CarePlan extends DomainResource implements ICarePlan, IValidatable, ISerializable {
  /**
   * @description The type of resource
   */
  resourceType? = 'CarePlan';

  /**
   * @description Business identifiers assigned to this care plan by the performer or other systems which remain constant as the resource is updated and propagates from server to server.
   */
  identifier?: IIdentifier[];

  /**
   * @description The URL pointing to a FHIR-defined protocol, guideline, questionnaire or other definition that is adhered to in whole or in part by this CarePlan.
   */
  instantiatesCanonical?: string[];

  /**
   * @description The URL pointing to an externally maintained protocol, guideline, questionnaire or other definition that is adhered to in whole or in part by this CarePlan.
   */
  instantiatesUri?: string[];

  /**
   * @description Extensions for instantiatesUri
   */
  _instantiatesUri?: IElement[];

  /**
   * @description A care plan that is fulfilled in whole or in part by this care plan.
   */
  basedOn?: IReference[];

  /**
   * @description Completed or terminated care plan whose function is taken by this new care plan.
   */
  replaces?: IReference[];

  /**
   * @description A larger care plan of which this particular care plan is a component or step.
   */
  partOf?: IReference[];

  /**
   * @description Indicates whether the plan is currently being acted upon, represents future intentions or is now a historical record.
   */
  status: RequestStatusType;

  /**
   * @description Extensions for status
   */
  _status?: IElement;

  /**
   * @description Indicates the level of authority/intentionality associated with the care plan and where the care plan fits into the workflow chain.
   */
  intent: CarePlanIntentType;

  /**
   * @description Extensions for intent
   */
  _intent?: IElement;

  /**
   * @description Identifies what "kind" of plan this is to support differentiation between multiple co-existing plans; e.g. "Home health", "psychiatric", "asthma", "disease management", "wellness plan", etc.
   */
  category?: ICodeableConcept[];

  /**
   * @description Human-friendly name for the care plan.
   */
  title?: string;

  /**
   * @description Extensions for title
   */
  _title?: IElement;

  /**
   * @description A description of the scope and nature of the plan.
   */
  description?: string;

  /**
   * @description Extensions for description
   */
  _description?: IElement;

  /**
   * @description Identifies the patient or group whose intended care is described by the plan.
   */
  subject: IReference;

  /**
   * @description The Encounter during which this CarePlan was created or to which the creation of this record is tightly associated.
   */
  encounter?: IReference;

  /**
   * @description Indicates when the plan did (or is intended to) come into effect and end.
   */
  period?: IPeriod;

  /**
   * @description Represents when this particular CarePlan record was created in the system, which is often a system-generated date.
   */
  created?: string;

  /**
   * @description Extensions for created
   */
  _created?: IElement;

  /**
   * @description When populated, the author is responsible for the care plan.  The care plan is attributed to the author.
   */
  author?: IReference;

  /**
   * @description Identifies the individual(s) or organization who provided the contents of the care plan.
   */
  contributor?: IReference[];

  /**
   * @description Identifies all people and organizations who are expected to be involved in the care envisioned by this plan.
   */
  careTeam?: IReference[];

  /**
   * @description Identifies the conditions/problems/concerns/diagnoses/etc. whose management and/or mitigation are handled by this plan.
   */
  addresses?: IReference[];

  /**
   * @description Identifies portions of the patient's record that specifically influenced the formation of the plan.  These might include comorbidities, recent procedures, limitations, recent assessments, etc.
   */
  supportingInfo?: IReference[];

  /**
   * @description Describes the intended objective(s) of carrying out the care plan.
   */
  goal?: IReference[];

  /**
   * @description Identifies a planned action to occur as part of the plan.  For example, a medication to be used, lab tests to perform, self-monitoring, education, etc.
   */
  activity?: ICarePlanActivity[];

  /**
   * @description General notes about the care plan not covered elsewhere.
   */
  note?: IAnnotation[];

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
    return `CarePlan${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `CarePlan${JSON.stringify(this.toJson(), null, 2)}`;
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
    return ConformanceValidator('CarePlan', this);
  }

  constructor(args?: ICarePlan) {
    super();
    if (args) Object.assign(this, args);
  }
}
