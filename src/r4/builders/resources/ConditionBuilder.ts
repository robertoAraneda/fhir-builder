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
import { Condition } from '../../models';
import { DomainResourceBuilder, IBuildable } from '../base';
import { ExtractUnderscoreKeys } from '../../../core/commons/utils';

// Extract the keys that start with an underscore
type PrimitiveExtensionFields = ExtractUnderscoreKeys<Condition>;

/**
 * @description Interface for chaining the building of a Condition
 * @interface IConditionBuilder
 * @extends {IBuildable<Condition>}
 */
interface IConditionBuilder extends IBuildable<Condition> {
  addIdentifier(value: IIdentifier): this;
  setClinicalStatus(value: ICodeableConcept): this;
  setVerificationStatus(value: ICodeableConcept): this;
  addCategory(value: ICodeableConcept): this;
  setSeverity(value: ICodeableConcept): this;
  setCode(value: ICodeableConcept): this;
  addBodySite(value: ICodeableConcept): this;
  setSubject(value: IReference): this;
  setEncounter(value: IReference): this;
  setOnsetDateTime(value: string): this;
  setOnsetAge(value: IAge): this;
  setOnsetPeriod(value: IPeriod): this;
  setOnsetRange(value: IRange): this;
  setOnsetString(value: string): this;
  setAbatementDateTime(value: string): this;
  setAbatementAge(value: IAge): this;
  setAbatementPeriod(value: IPeriod): this;
  setAbatementRange(value: IRange): this;
  setAbatementString(value: string): this;
  setRecordedDate(value: string): this;
  setRecorder(value: IReference): this;
  setAsserter(value: IReference): this;
  addStage(value: IConditionStage): this;
  addEvidence(value: IConditionEvidence): this;
  addNote(value: IAnnotation): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a Condition
 * @class ConditionBuilder
 * @extends {DomainResourceBuilder}
 * @implements {IConditionBuilder}
 * @author Roberto Araneda Espinoza
 */
export class ConditionBuilder extends DomainResourceBuilder implements IConditionBuilder {
  private readonly condition: Condition;

  constructor() {
    super();
    this.condition = new Condition();
  }

  /**
   * @description Sets the resource type to Condition
   * @param json - the json to parse
   * @returns {this}
   */
  fromJSON(json: unknown): this {
    const incomingData = typeof json === 'string' ? JSON.parse(json) : json;
    Object.assign(this.condition, incomingData);
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
    this.condition[param] = extension;
    return this;
  }

  /**
   * @description Builds the model
   * @returns {Condition}
   */
  build(): Condition {
    return Object.assign(this.condition, super.build());
  }

  /**
   * @description Adds a value to the identifier array
   * @description Business identifiers assigned to this condition by the performer or other systems which remain constant as the resource is updated and propagates from server to server.
   * @param value - the value to add
   * @returns {this}
   */
  addIdentifier(value: IIdentifier): this {
    this.condition.identifier = this.condition.identifier || [];
    this.condition.identifier.push(value);
    return this;
  }
  /**
   * @description Sets the clinicalStatus value
   * @description The clinical status of the condition.
   * @param value - the value to set
   * @returns {this}
   */
  setClinicalStatus(value: ICodeableConcept): this {
    this.condition.clinicalStatus = value;
    return this;
  }

  /**
   * @description Sets the verificationStatus value
   * @description The verification status to support the clinical status of the condition.
   * @param value - the value to set
   * @returns {this}
   */
  setVerificationStatus(value: ICodeableConcept): this {
    this.condition.verificationStatus = value;
    return this;
  }

  /**
   * @description Adds a value to the category array
   * @description A category assigned to the condition.
   * @param value - the value to add
   * @returns {this}
   */
  addCategory(value: ICodeableConcept): this {
    this.condition.category = this.condition.category || [];
    this.condition.category.push(value);
    return this;
  }
  /**
   * @description Sets the severity value
   * @description A subjective assessment of the severity of the condition as evaluated by the clinician.
   * @param value - the value to set
   * @returns {this}
   */
  setSeverity(value: ICodeableConcept): this {
    this.condition.severity = value;
    return this;
  }

  /**
   * @description Sets the code value
   * @description Identification of the condition, problem or diagnosis.
   * @param value - the value to set
   * @returns {this}
   */
  setCode(value: ICodeableConcept): this {
    this.condition.code = value;
    return this;
  }

  /**
   * @description Adds a value to the bodySite array
   * @description The anatomical location where this condition manifests itself.
   * @param value - the value to add
   * @returns {this}
   */
  addBodySite(value: ICodeableConcept): this {
    this.condition.bodySite = this.condition.bodySite || [];
    this.condition.bodySite.push(value);
    return this;
  }
  /**
   * @description Sets the subject value
   * @description Indicates the patient or group who the condition record is associated with.
   * @param value - the value to set
   * @returns {this}
   */
  setSubject(value: IReference): this {
    this.condition.subject = value;
    return this;
  }

  /**
   * @description Sets the encounter value
   * @description The Encounter during which this Condition was created or to which the creation of this record is tightly associated.
   * @param value - the value to set
   * @returns {this}
   */
  setEncounter(value: IReference): this {
    this.condition.encounter = value;
    return this;
  }

  /**
   * @description Sets the onsetDateTime value
   * @description Estimated or actual date or date-time  the condition began, in the opinion of the clinician.
   * @param value - the value to set
   * @returns {this}
   */
  setOnsetDateTime(value: string): this {
    this.condition.onsetDateTime = value;
    return this;
  }

  /**
   * @description Sets the onsetAge value
   * @description Estimated or actual date or date-time  the condition began, in the opinion of the clinician.
   * @param value - the value to set
   * @returns {this}
   */
  setOnsetAge(value: IAge): this {
    this.condition.onsetAge = value;
    return this;
  }

  /**
   * @description Sets the onsetPeriod value
   * @description Estimated or actual date or date-time  the condition began, in the opinion of the clinician.
   * @param value - the value to set
   * @returns {this}
   */
  setOnsetPeriod(value: IPeriod): this {
    this.condition.onsetPeriod = value;
    return this;
  }

  /**
   * @description Sets the onsetRange value
   * @description Estimated or actual date or date-time  the condition began, in the opinion of the clinician.
   * @param value - the value to set
   * @returns {this}
   */
  setOnsetRange(value: IRange): this {
    this.condition.onsetRange = value;
    return this;
  }

  /**
   * @description Sets the onsetString value
   * @description Estimated or actual date or date-time  the condition began, in the opinion of the clinician.
   * @param value - the value to set
   * @returns {this}
   */
  setOnsetString(value: string): this {
    this.condition.onsetString = value;
    return this;
  }

  /**
   * @description Sets the abatementDateTime value
   * @description The date or estimated date that the condition resolved or went into remission. This is called "abatement" because of the many overloaded connotations associated with "remission" or "resolution" - Conditions are never really resolved, but they can abate.
   * @param value - the value to set
   * @returns {this}
   */
  setAbatementDateTime(value: string): this {
    this.condition.abatementDateTime = value;
    return this;
  }

  /**
   * @description Sets the abatementAge value
   * @description The date or estimated date that the condition resolved or went into remission. This is called "abatement" because of the many overloaded connotations associated with "remission" or "resolution" - Conditions are never really resolved, but they can abate.
   * @param value - the value to set
   * @returns {this}
   */
  setAbatementAge(value: IAge): this {
    this.condition.abatementAge = value;
    return this;
  }

  /**
   * @description Sets the abatementPeriod value
   * @description The date or estimated date that the condition resolved or went into remission. This is called "abatement" because of the many overloaded connotations associated with "remission" or "resolution" - Conditions are never really resolved, but they can abate.
   * @param value - the value to set
   * @returns {this}
   */
  setAbatementPeriod(value: IPeriod): this {
    this.condition.abatementPeriod = value;
    return this;
  }

  /**
   * @description Sets the abatementRange value
   * @description The date or estimated date that the condition resolved or went into remission. This is called "abatement" because of the many overloaded connotations associated with "remission" or "resolution" - Conditions are never really resolved, but they can abate.
   * @param value - the value to set
   * @returns {this}
   */
  setAbatementRange(value: IRange): this {
    this.condition.abatementRange = value;
    return this;
  }

  /**
   * @description Sets the abatementString value
   * @description The date or estimated date that the condition resolved or went into remission. This is called "abatement" because of the many overloaded connotations associated with "remission" or "resolution" - Conditions are never really resolved, but they can abate.
   * @param value - the value to set
   * @returns {this}
   */
  setAbatementString(value: string): this {
    this.condition.abatementString = value;
    return this;
  }

  /**
   * @description Sets the recordedDate value
   * @description The recordedDate represents when this particular Condition record was created in the system, which is often a system-generated date.
   * @param value - the value to set
   * @returns {this}
   */
  setRecordedDate(value: string): this {
    this.condition.recordedDate = value;
    return this;
  }

  /**
   * @description Sets the recorder value
   * @description Individual who recorded the record and takes responsibility for its content.
   * @param value - the value to set
   * @returns {this}
   */
  setRecorder(value: IReference): this {
    this.condition.recorder = value;
    return this;
  }

  /**
   * @description Sets the asserter value
   * @description Individual who is making the condition statement.
   * @param value - the value to set
   * @returns {this}
   */
  setAsserter(value: IReference): this {
    this.condition.asserter = value;
    return this;
  }

  /**
   * @description Adds a value to the stage array
   * @description Clinical stage or grade of a condition. May include formal severity assessments.
   * @param value - the value to add
   * @returns {this}
   */
  addStage(value: IConditionStage): this {
    this.condition.stage = this.condition.stage || [];
    this.condition.stage.push(value);
    return this;
  }
  /**
   * @description Adds a value to the evidence array
   * @description Supporting evidence / manifestations that are the basis of the Condition's verification status, such as evidence that confirmed or refuted the condition.
   * @param value - the value to add
   * @returns {this}
   */
  addEvidence(value: IConditionEvidence): this {
    this.condition.evidence = this.condition.evidence || [];
    this.condition.evidence.push(value);
    return this;
  }
  /**
   * @description Adds a value to the note array
   * @description Additional information about the Condition. This is a general notes/comments entry  for description of the Condition, its diagnosis and prognosis.
   * @param value - the value to add
   * @returns {this}
   */
  addNote(value: IAnnotation): this {
    this.condition.note = this.condition.note || [];
    this.condition.note.push(value);
    return this;
  }
}
