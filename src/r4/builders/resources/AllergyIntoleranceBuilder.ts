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
import { AllergyIntolerance } from '../../models';
import { DomainResourceBuilder, IBuildable } from '../base';
import { ExtractUnderscoreKeys, ExtractUnderscoreArrayKeys } from '../../../core/commons/utils';

// Extract the keys that start with an underscore
type PrimitiveExtensionFields = ExtractUnderscoreKeys<AllergyIntolerance>;

// Extract the keys that are arrays and start with an underscore
type UnderscoreArrayElements = ExtractUnderscoreArrayKeys<AllergyIntolerance>;
/**
 * @description Interface for chaining the building of a AllergyIntolerance
 * @interface IAllergyIntoleranceBuilder
 * @extends {IBuildable<AllergyIntolerance>}
 */
interface IAllergyIntoleranceBuilder extends IBuildable<AllergyIntolerance> {
  addIdentifier(value: IIdentifier): this;
  setClinicalStatus(value: ICodeableConcept): this;
  setVerificationStatus(value: ICodeableConcept): this;
  setType(value: AllergyIntoleranceTypeType): this;
  addCategory(value: AllergyIntoleranceCategoryType): this;
  setCriticality(value: AllergyIntoleranceCriticalityType): this;
  setCode(value: ICodeableConcept): this;
  setPatient(value: IReference): this;
  setEncounter(value: IReference): this;
  setOnsetDateTime(value: string): this;
  setOnsetAge(value: IAge): this;
  setOnsetPeriod(value: IPeriod): this;
  setOnsetRange(value: IRange): this;
  setOnsetString(value: string): this;
  setRecordedDate(value: string): this;
  setRecorder(value: IReference): this;
  setAsserter(value: IReference): this;
  setLastOccurrence(value: string): this;
  addNote(value: IAnnotation): this;
  addReaction(value: IAllergyIntoleranceReaction): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a AllergyIntolerance
 * @class AllergyIntoleranceBuilder
 * @extends {DomainResourceBuilder}
 * @implements {IAllergyIntoleranceBuilder}
 * @author Roberto Araneda Espinoza
 */
export class AllergyIntoleranceBuilder extends DomainResourceBuilder implements IAllergyIntoleranceBuilder {
  private readonly allergyIntolerance: AllergyIntolerance;

  constructor() {
    super();
    this.allergyIntolerance = new AllergyIntolerance();
  }

  /**
   * @description Sets the resource type to AllergyIntolerance
   * @param json - the json to parse
   * @returns {this}
   */
  fromJSON(json: unknown): this {
    const incomingData = typeof json === 'string' ? JSON.parse(json) : json;
    Object.assign(this.allergyIntolerance, incomingData);
    return this;
  }

  /**
   * @description Adds a primitive extension to the element
   * @param param - the field to add the extension to
   * @param extension - the extension to add
   * @returns {this}
   * @example addPrimitiveExtension('_value', { value: 'test' })
   */
  addPrimitiveExtension<T extends PrimitiveExtensionFields>(
    param: T,
    extension: T extends Extract<PrimitiveExtensionFields, UnderscoreArrayElements> ? IElement[] : IElement,
  ): this {
    const arrayParam = ['_category'];
    if (arrayParam.includes(param)) {
      this.allergyIntolerance[param] = extension as IElement[];
      return this;
    }

    const localParam = param as Exclude<PrimitiveExtensionFields, UnderscoreArrayElements>;
    this.allergyIntolerance[localParam] = extension as IElement;
    return this;
  }

  /**
   * @description Builds the model
   * @returns {AllergyIntolerance}
   */
  build(): AllergyIntolerance {
    return Object.assign(this.allergyIntolerance, super.build());
  }

  /**
   * @description Adds a value to the identifier array
   * @description Business identifiers assigned to this AllergyIntolerance by the performer or other systems which remain constant as the resource is updated and propagates from server to server.
   * @param value - the value to add
   * @returns {this}
   */
  addIdentifier(value: IIdentifier): this {
    this.allergyIntolerance.identifier = this.allergyIntolerance.identifier || [];
    this.allergyIntolerance.identifier.push(value);
    return this;
  }
  /**
   * @description Sets the clinicalStatus value
   * @description The clinical status of the allergy or intolerance.
   * @param value - the value to set
   * @returns {this}
   */
  setClinicalStatus(value: ICodeableConcept): this {
    this.allergyIntolerance.clinicalStatus = value;
    return this;
  }

  /**
   * @description Sets the verificationStatus value
   * @description Assertion about certainty associated with the propensity, or potential risk, of a reaction to the identified substance (including pharmaceutical product).
   * @param value - the value to set
   * @returns {this}
   */
  setVerificationStatus(value: ICodeableConcept): this {
    this.allergyIntolerance.verificationStatus = value;
    return this;
  }

  /**
    * @description Sets the type value
    * @description Identification of the underlying physiological mechanism for the reaction risk.
allergy | intolerance.
    * @param value - the value to set
    * @returns {this}
    */
  setType(value: AllergyIntoleranceTypeType): this {
    this.allergyIntolerance.type = value;
    return this;
  }

  /**
    * @description Adds a value to the category array
    * @description Category of the identified substance.
food | medication | environment | biologic.
    * @param value - the value to add
    * @returns {this}
    */
  addCategory(value: AllergyIntoleranceCategoryType): this {
    this.allergyIntolerance.category = this.allergyIntolerance.category || [];
    this.allergyIntolerance.category.push(value);
    return this;
  }
  /**
    * @description Sets the criticality value
    * @description Estimate of the potential clinical harm, or seriousness, of the reaction to the identified substance.
low | high | unable-to-assess.
    * @param value - the value to set
    * @returns {this}
    */
  setCriticality(value: AllergyIntoleranceCriticalityType): this {
    this.allergyIntolerance.criticality = value;
    return this;
  }

  /**
   * @description Sets the code value
   * @description Code for an allergy or intolerance statement (either a positive or a negated/excluded statement).  This may be a code for a substance or pharmaceutical product that is considered to be responsible for the adverse reaction risk (e.g., "Latex"), an allergy or intolerance condition (e.g., "Latex allergy"), or a negated/excluded code for a specific substance or class (e.g., "No latex allergy") or a general or categorical negated statement (e.g.,  "No known allergy", "No known drug allergies").  Note: the substance for a specific reaction may be different from the substance identified as the cause of the risk, but it must be consistent with it. For instance, it may be a more specific substance (e.g. a brand medication) or a composite product that includes the identified substance. It must be clinically safe to only process the 'code' and ignore the 'reaction.substance'.  If a receiving system is unable to confirm that AllergyIntolerance.reaction.substance falls within the semantic scope of AllergyIntolerance.code, then the receiving system should ignore AllergyIntolerance.reaction.substance.
   * @param value - the value to set
   * @returns {this}
   */
  setCode(value: ICodeableConcept): this {
    this.allergyIntolerance.code = value;
    return this;
  }

  /**
   * @description Sets the patient value
   * @description The patient who has the allergy or intolerance.
   * @param value - the value to set
   * @returns {this}
   */
  setPatient(value: IReference): this {
    this.allergyIntolerance.patient = value;
    return this;
  }

  /**
   * @description Sets the encounter value
   * @description The encounter when the allergy or intolerance was asserted.
   * @param value - the value to set
   * @returns {this}
   */
  setEncounter(value: IReference): this {
    this.allergyIntolerance.encounter = value;
    return this;
  }

  /**
   * @description Sets the onsetDateTime value
   * @description Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
   * @param value - the value to set
   * @returns {this}
   */
  setOnsetDateTime(value: string): this {
    this.allergyIntolerance.onsetDateTime = value;
    return this;
  }

  /**
   * @description Sets the onsetAge value
   * @description Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
   * @param value - the value to set
   * @returns {this}
   */
  setOnsetAge(value: IAge): this {
    this.allergyIntolerance.onsetAge = value;
    return this;
  }

  /**
   * @description Sets the onsetPeriod value
   * @description Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
   * @param value - the value to set
   * @returns {this}
   */
  setOnsetPeriod(value: IPeriod): this {
    this.allergyIntolerance.onsetPeriod = value;
    return this;
  }

  /**
   * @description Sets the onsetRange value
   * @description Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
   * @param value - the value to set
   * @returns {this}
   */
  setOnsetRange(value: IRange): this {
    this.allergyIntolerance.onsetRange = value;
    return this;
  }

  /**
   * @description Sets the onsetString value
   * @description Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
   * @param value - the value to set
   * @returns {this}
   */
  setOnsetString(value: string): this {
    this.allergyIntolerance.onsetString = value;
    return this;
  }

  /**
   * @description Sets the recordedDate value
   * @description The recordedDate represents when this particular AllergyIntolerance record was created in the system, which is often a system-generated date.
   * @param value - the value to set
   * @returns {this}
   */
  setRecordedDate(value: string): this {
    this.allergyIntolerance.recordedDate = value;
    return this;
  }

  /**
   * @description Sets the recorder value
   * @description Individual who recorded the record and takes responsibility for its content.
   * @param value - the value to set
   * @returns {this}
   */
  setRecorder(value: IReference): this {
    this.allergyIntolerance.recorder = value;
    return this;
  }

  /**
   * @description Sets the asserter value
   * @description The source of the information about the allergy that is recorded.
   * @param value - the value to set
   * @returns {this}
   */
  setAsserter(value: IReference): this {
    this.allergyIntolerance.asserter = value;
    return this;
  }

  /**
   * @description Sets the lastOccurrence value
   * @description Represents the date and/or time of the last known occurrence of a reaction event.
   * @param value - the value to set
   * @returns {this}
   */
  setLastOccurrence(value: string): this {
    this.allergyIntolerance.lastOccurrence = value;
    return this;
  }

  /**
   * @description Adds a value to the note array
   * @description Additional narrative about the propensity for the Adverse Reaction, not captured in other fields.
   * @param value - the value to add
   * @returns {this}
   */
  addNote(value: IAnnotation): this {
    this.allergyIntolerance.note = this.allergyIntolerance.note || [];
    this.allergyIntolerance.note.push(value);
    return this;
  }
  /**
   * @description Adds a value to the reaction array
   * @description Details about each adverse reaction event linked to exposure to the identified substance.
   * @param value - the value to add
   * @returns {this}
   */
  addReaction(value: IAllergyIntoleranceReaction): this {
    this.allergyIntolerance.reaction = this.allergyIntolerance.reaction || [];
    this.allergyIntolerance.reaction.push(value);
    return this;
  }
}
