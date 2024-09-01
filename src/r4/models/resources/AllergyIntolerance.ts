import {
  IIdentifier,
  ICodeableConcept,
  IElement,
  IReference,
  IAge,
  IPeriod,
  IRange,
  IAnnotation,
  IAllergyIntoleranceReaction,
  AllergyIntoleranceTypeType,
  AllergyIntoleranceCategoryType,
  AllergyIntoleranceCriticalityType,
} from 'fhirtypes/dist/r4';
import { IAllergyIntolerance, IOperationOutcome } from 'fhirtypes/dist/r4';
import { DomainResource, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for AllergyIntolerance Resource
 * @property {string} resourceType
 * @property {IIdentifier[]} identifier
 * @property {ICodeableConcept} clinicalStatus
 * @property {ICodeableConcept} verificationStatus
 * @property {AllergyIntoleranceTypeType} type
 * @property {IElement} _type
 * @property {AllergyIntoleranceCategoryType[]} category
 * @property {IElement[]} _category
 * @property {AllergyIntoleranceCriticalityType} criticality
 * @property {IElement} _criticality
 * @property {ICodeableConcept} code
 * @property {IReference} patient
 * @property {IReference} encounter
 * @property {string} onsetDateTime
 * @property {IElement} _onsetDateTime
 * @property {IAge} onsetAge
 * @property {IPeriod} onsetPeriod
 * @property {IRange} onsetRange
 * @property {string} onsetString
 * @property {IElement} _onsetString
 * @property {string} recordedDate
 * @property {IElement} _recordedDate
 * @property {IReference} recorder
 * @property {IReference} asserter
 * @property {string} lastOccurrence
 * @property {IElement} _lastOccurrence
 * @property {IAnnotation[]} note
 * @property {IAllergyIntoleranceReaction[]} reaction
 * @author Roberto Araneda Espinoza
 */
export class AllergyIntolerance extends DomainResource implements IAllergyIntolerance, IValidatable, ISerializable {
  /**
   * @description The type of resource
   */
  resourceType? = 'AllergyIntolerance';

  /**
   * @description Business identifiers assigned to this AllergyIntolerance by the performer or other systems which remain constant as the resource is updated and propagates from server to server.
   */
  identifier?: IIdentifier[];

  /**
   * @description The clinical status of the allergy or intolerance.
   */
  clinicalStatus?: ICodeableConcept;

  /**
   * @description Assertion about certainty associated with the propensity, or potential risk, of a reaction to the identified substance (including pharmaceutical product).
   */
  verificationStatus?: ICodeableConcept;

  /**
   * @description Identification of the underlying physiological mechanism for the reaction risk.
allergy | intolerance.
   */
  type?: AllergyIntoleranceTypeType;

  /**
   * @description Extensions for type
   */
  _type?: IElement;

  /**
   * @description Category of the identified substance.
food | medication | environment | biologic.
   */
  category?: AllergyIntoleranceCategoryType[];

  /**
   * @description Extensions for category
   */
  _category?: IElement[];

  /**
   * @description Estimate of the potential clinical harm, or seriousness, of the reaction to the identified substance.
low | high | unable-to-assess.
   */
  criticality?: AllergyIntoleranceCriticalityType;

  /**
   * @description Extensions for criticality
   */
  _criticality?: IElement;

  /**
   * @description Code for an allergy or intolerance statement (either a positive or a negated/excluded statement).  This may be a code for a substance or pharmaceutical product that is considered to be responsible for the adverse reaction risk (e.g., "Latex"), an allergy or intolerance condition (e.g., "Latex allergy"), or a negated/excluded code for a specific substance or class (e.g., "No latex allergy") or a general or categorical negated statement (e.g.,  "No known allergy", "No known drug allergies").  Note: the substance for a specific reaction may be different from the substance identified as the cause of the risk, but it must be consistent with it. For instance, it may be a more specific substance (e.g. a brand medication) or a composite product that includes the identified substance. It must be clinically safe to only process the 'code' and ignore the 'reaction.substance'.  If a receiving system is unable to confirm that AllergyIntolerance.reaction.substance falls within the semantic scope of AllergyIntolerance.code, then the receiving system should ignore AllergyIntolerance.reaction.substance.
   */
  code?: ICodeableConcept;

  /**
   * @description The patient who has the allergy or intolerance.
   */
  patient: IReference;

  /**
   * @description The encounter when the allergy or intolerance was asserted.
   */
  encounter?: IReference;

  /**
   * @description Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
   */
  onsetDateTime?: string;

  /**
   * @description Extensions for onsetDateTime
   */
  _onsetDateTime?: IElement;

  /**
   * @description Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
   */
  onsetAge?: IAge;

  /**
   * @description Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
   */
  onsetPeriod?: IPeriod;

  /**
   * @description Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
   */
  onsetRange?: IRange;

  /**
   * @description Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
   */
  onsetString?: string;

  /**
   * @description Extensions for onsetString
   */
  _onsetString?: IElement;

  /**
   * @description The recordedDate represents when this particular AllergyIntolerance record was created in the system, which is often a system-generated date.
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
   * @description The source of the information about the allergy that is recorded.
   */
  asserter?: IReference;

  /**
   * @description Represents the date and/or time of the last known occurrence of a reaction event.
   */
  lastOccurrence?: string;

  /**
   * @description Extensions for lastOccurrence
   */
  _lastOccurrence?: IElement;

  /**
   * @description Additional narrative about the propensity for the Adverse Reaction, not captured in other fields.
   */
  note?: IAnnotation[];

  /**
   * @description Details about each adverse reaction event linked to exposure to the identified substance.
   */
  reaction?: IAllergyIntoleranceReaction[];

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
    return `AllergyIntolerance${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `AllergyIntolerance${JSON.stringify(this.toJson(), null, 2)}`;
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
    return ConformanceValidator('AllergyIntolerance', this);
  }

  constructor(args?: IAllergyIntolerance) {
    super();
    if (args) Object.assign(this, args);
  }
}
