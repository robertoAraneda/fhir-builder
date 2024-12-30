import {
  IIdentifier,
  ICodeableConcept,
  IReference,
  IElement,
  IAge,
  IPeriod,
  IRange,
  IConditionStage,
  IConditionEvidence,
  IAnnotation,
} from 'fhirtypes/dist/r4';
import { ICondition, IOperationOutcome } from 'fhirtypes/dist/r4';
import { DomainResource, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for Condition Resource
 * @property {string} resourceType
 * @property {IIdentifier[]} identifier
 * @property {ICodeableConcept} clinicalStatus
 * @property {ICodeableConcept} verificationStatus
 * @property {ICodeableConcept[]} category
 * @property {ICodeableConcept} severity
 * @property {ICodeableConcept} code
 * @property {ICodeableConcept[]} bodySite
 * @property {IReference} subject
 * @property {IReference} encounter
 * @property {string} onsetDateTime
 * @property {IElement} _onsetDateTime
 * @property {IAge} onsetAge
 * @property {IPeriod} onsetPeriod
 * @property {IRange} onsetRange
 * @property {string} onsetString
 * @property {IElement} _onsetString
 * @property {string} abatementDateTime
 * @property {IElement} _abatementDateTime
 * @property {IAge} abatementAge
 * @property {IPeriod} abatementPeriod
 * @property {IRange} abatementRange
 * @property {string} abatementString
 * @property {IElement} _abatementString
 * @property {string} recordedDate
 * @property {IElement} _recordedDate
 * @property {IReference} recorder
 * @property {IReference} asserter
 * @property {IConditionStage[]} stage
 * @property {IConditionEvidence[]} evidence
 * @property {IAnnotation[]} note
 * @author Roberto Araneda Espinoza
 */
export class Condition extends DomainResource implements ICondition, IValidatable, ISerializable {
  /**
   * @description The type of resource
   */
  resourceType? = 'Condition';

  /**
   * @description Business identifiers assigned to this condition by the performer or other systems which remain constant as the resource is updated and propagates from server to server.
   */
  identifier?: IIdentifier[];

  /**
   * @description The clinical status of the condition.
   */
  clinicalStatus?: ICodeableConcept;

  /**
   * @description The verification status to support the clinical status of the condition.
   */
  verificationStatus?: ICodeableConcept;

  /**
   * @description A category assigned to the condition.
   */
  category?: ICodeableConcept[];

  /**
   * @description A subjective assessment of the severity of the condition as evaluated by the clinician.
   */
  severity?: ICodeableConcept;

  /**
   * @description Identification of the condition, problem or diagnosis.
   */
  code?: ICodeableConcept;

  /**
   * @description The anatomical location where this condition manifests itself.
   */
  bodySite?: ICodeableConcept[];

  /**
   * @description Indicates the patient or group who the condition record is associated with.
   */
  subject: IReference;

  /**
   * @description The Encounter during which this Condition was created or to which the creation of this record is tightly associated.
   */
  encounter?: IReference;

  /**
   * @description Estimated or actual date or date-time  the condition began, in the opinion of the clinician.
   */
  onsetDateTime?: string;

  /**
   * @description Extensions for onsetDateTime
   */
  _onsetDateTime?: IElement;

  /**
   * @description Estimated or actual date or date-time  the condition began, in the opinion of the clinician.
   */
  onsetAge?: IAge;

  /**
   * @description Estimated or actual date or date-time  the condition began, in the opinion of the clinician.
   */
  onsetPeriod?: IPeriod;

  /**
   * @description Estimated or actual date or date-time  the condition began, in the opinion of the clinician.
   */
  onsetRange?: IRange;

  /**
   * @description Estimated or actual date or date-time  the condition began, in the opinion of the clinician.
   */
  onsetString?: string;

  /**
   * @description Extensions for onsetString
   */
  _onsetString?: IElement;

  /**
   * @description The date or estimated date that the condition resolved or went into remission. This is called "abatement" because of the many overloaded connotations associated with "remission" or "resolution" - Conditions are never really resolved, but they can abate.
   */
  abatementDateTime?: string;

  /**
   * @description Extensions for abatementDateTime
   */
  _abatementDateTime?: IElement;

  /**
   * @description The date or estimated date that the condition resolved or went into remission. This is called "abatement" because of the many overloaded connotations associated with "remission" or "resolution" - Conditions are never really resolved, but they can abate.
   */
  abatementAge?: IAge;

  /**
   * @description The date or estimated date that the condition resolved or went into remission. This is called "abatement" because of the many overloaded connotations associated with "remission" or "resolution" - Conditions are never really resolved, but they can abate.
   */
  abatementPeriod?: IPeriod;

  /**
   * @description The date or estimated date that the condition resolved or went into remission. This is called "abatement" because of the many overloaded connotations associated with "remission" or "resolution" - Conditions are never really resolved, but they can abate.
   */
  abatementRange?: IRange;

  /**
   * @description The date or estimated date that the condition resolved or went into remission. This is called "abatement" because of the many overloaded connotations associated with "remission" or "resolution" - Conditions are never really resolved, but they can abate.
   */
  abatementString?: string;

  /**
   * @description Extensions for abatementString
   */
  _abatementString?: IElement;

  /**
   * @description The recordedDate represents when this particular Condition record was created in the system, which is often a system-generated date.
   */
  recordedDate?: string;

  /**
   * @description Extensions for recordedDate
   */
  _recordedDate?: IElement;

  /**
   * @description Individual who recorded the record and takes responsibility for its content.
   */
  recorder?: IReference;

  /**
   * @description Individual who is making the condition statement.
   */
  asserter?: IReference;

  /**
   * @description Clinical stage or grade of a condition. May include formal severity assessments.
   */
  stage?: IConditionStage[];

  /**
   * @description Supporting evidence / manifestations that are the basis of the Condition's verification status, such as evidence that confirmed or refuted the condition.
   */
  evidence?: IConditionEvidence[];

  /**
   * @description Additional information about the Condition. This is a general notes/comments entry  for description of the Condition, its diagnosis and prognosis.
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
    return `Condition${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `Condition${JSON.stringify(this.toJson(), null, 2)}`;
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
    return ConformanceValidator('Condition', this);
  }

  constructor(args?: ICondition) {
    super();
    if (args) Object.assign(this, args);
  }
}
