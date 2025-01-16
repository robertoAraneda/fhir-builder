import {
  IIdentifier,
  IElement,
  IReference,
  ICodeableConcept,
  IPeriod,
  ICarePlanActivity,
  IAnnotation,
} from 'fhirtypes/dist/r4';
import { CarePlan } from '../../models';
import { DomainResourceBuilder, IBuildable } from '../base';
import { ExtractUnderscoreKeys, ExtractUnderscoreArrayKeys } from '../../../core/commons/utils';
import { CarePlanIntentType, RequestStatusType } from 'fhirtypes/dist/r4/types';

// Extract the keys that start with an underscore
type PrimitiveExtensionFields = ExtractUnderscoreKeys<CarePlan>;

// Extract the keys that are arrays and start with an underscore
type UnderscoreArrayElements = ExtractUnderscoreArrayKeys<CarePlan>;
/**
 * @description Interface for chaining the building of a CarePlan
 * @interface ICarePlanBuilder
 * @extends {IBuildable<CarePlan>}
 */
interface ICarePlanBuilder extends IBuildable<CarePlan> {
  addIdentifier(value: IIdentifier): this;
  addInstantiatesCanonical(value: string): this;
  addInstantiatesUri(value: string): this;
  addBasedOn(value: IReference): this;
  addReplaces(value: IReference): this;
  addPartOf(value: IReference): this;
  setStatus(value: RequestStatusType): this;
  setIntent(value: CarePlanIntentType): this;
  addCategory(value: ICodeableConcept): this;
  setTitle(value: string): this;
  setDescription(value: string): this;
  setSubject(value: IReference): this;
  setEncounter(value: IReference): this;
  setPeriod(value: IPeriod): this;
  setCreated(value: string): this;
  setAuthor(value: IReference): this;
  addContributor(value: IReference): this;
  addCareTeam(value: IReference): this;
  addAddresses(value: IReference): this;
  addSupportingInfo(value: IReference): this;
  addGoal(value: IReference): this;
  addActivity(value: ICarePlanActivity): this;
  addNote(value: IAnnotation): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a CarePlan
 * @class CarePlanBuilder
 * @extends {DomainResourceBuilder}
 * @implements {ICarePlanBuilder}
 * @author Roberto Araneda Espinoza
 */
export class CarePlanBuilder extends DomainResourceBuilder implements ICarePlanBuilder {
  private readonly carePlan: CarePlan;

  constructor() {
    super();
    this.carePlan = new CarePlan();
  }

  /**
   * @description Sets the resource type to CarePlan
   * @param json - the json to parse
   * @returns {this}
   */
  fromJSON(json: unknown): this {
    const incomingData = typeof json === 'string' ? JSON.parse(json) : json;
    Object.assign(this.carePlan, incomingData);
    return this;
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
      this.carePlan[param] = this.carePlan[param] || [];
      (this.carePlan[param] as IElement[]).push(extension as IElement);

      return this;
    }

    const localParam = param as Exclude<PrimitiveExtensionFields, UnderscoreArrayElements>;
    this.carePlan[localParam] = extension as IElement;
    return this;
  }

  /**
   * @description Builds the model
   * @returns {CarePlan}
   */
  build(): CarePlan {
    return Object.assign(this.carePlan, super.build());
  }

  /**
   * @description Adds a value to the identifier array
   * @description Business identifiers assigned to this care plan by the performer or other systems which remain constant as the resource is updated and propagates from server to server.
   * @param value - the value to add
   * @returns {this}
   */
  addIdentifier(value: IIdentifier): this {
    this.carePlan.identifier = this.carePlan.identifier || [];
    this.carePlan.identifier.push(value);
    return this;
  }
  /**
   * @description Adds a value to the instantiatesCanonical array
   * @description The URL pointing to a FHIR-defined protocol, guideline, questionnaire or other definition that is adhered to in whole or in part by this CarePlan.
   * @param value - the value to add
   * @returns {this}
   */
  addInstantiatesCanonical(value: string): this {
    this.carePlan.instantiatesCanonical = this.carePlan.instantiatesCanonical || [];
    this.carePlan.instantiatesCanonical.push(value);
    return this;
  }
  /**
   * @description Adds a value to the instantiatesUri array
   * @description The URL pointing to an externally maintained protocol, guideline, questionnaire or other definition that is adhered to in whole or in part by this CarePlan.
   * @param value - the value to add
   * @returns {this}
   */
  addInstantiatesUri(value: string): this {
    this.carePlan.instantiatesUri = this.carePlan.instantiatesUri || [];
    this.carePlan.instantiatesUri.push(value);
    return this;
  }
  /**
   * @description Adds a value to the basedOn array
   * @description A care plan that is fulfilled in whole or in part by this care plan.
   * @param value - the value to add
   * @returns {this}
   */
  addBasedOn(value: IReference): this {
    this.carePlan.basedOn = this.carePlan.basedOn || [];
    this.carePlan.basedOn.push(value);
    return this;
  }
  /**
   * @description Adds a value to the replaces array
   * @description Completed or terminated care plan whose function is taken by this new care plan.
   * @param value - the value to add
   * @returns {this}
   */
  addReplaces(value: IReference): this {
    this.carePlan.replaces = this.carePlan.replaces || [];
    this.carePlan.replaces.push(value);
    return this;
  }
  /**
   * @description Adds a value to the partOf array
   * @description A larger care plan of which this particular care plan is a component or step.
   * @param value - the value to add
   * @returns {this}
   */
  addPartOf(value: IReference): this {
    this.carePlan.partOf = this.carePlan.partOf || [];
    this.carePlan.partOf.push(value);
    return this;
  }
  /**
   * @description Sets the status value
   * @description Indicates whether the plan is currently being acted upon, represents future intentions or is now a historical record.
   * @param value - the value to set
   * @returns {this}
   */
  setStatus(value: RequestStatusType): this {
    this.carePlan.status = value;
    return this;
  }

  /**
   * @description Sets the intent value
   * @description Indicates the level of authority/intentionality associated with the care plan and where the care plan fits into the workflow chain.
   * @param value - the value to set
   * @returns {this}
   */
  setIntent(value: CarePlanIntentType): this {
    this.carePlan.intent = value;
    return this;
  }

  /**
   * @description Adds a value to the category array
   * @description Identifies what "kind" of plan this is to support differentiation between multiple co-existing plans; e.g. "Home health", "psychiatric", "asthma", "disease management", "wellness plan", etc.
   * @param value - the value to add
   * @returns {this}
   */
  addCategory(value: ICodeableConcept): this {
    this.carePlan.category = this.carePlan.category || [];
    this.carePlan.category.push(value);
    return this;
  }
  /**
   * @description Sets the title value
   * @description Human-friendly name for the care plan.
   * @param value - the value to set
   * @returns {this}
   */
  setTitle(value: string): this {
    this.carePlan.title = value;
    return this;
  }

  /**
   * @description Sets the description value
   * @description A description of the scope and nature of the plan.
   * @param value - the value to set
   * @returns {this}
   */
  setDescription(value: string): this {
    this.carePlan.description = value;
    return this;
  }

  /**
   * @description Sets the subject value
   * @description Identifies the patient or group whose intended care is described by the plan.
   * @param value - the value to set
   * @returns {this}
   */
  setSubject(value: IReference): this {
    this.carePlan.subject = value;
    return this;
  }

  /**
   * @description Sets the encounter value
   * @description The Encounter during which this CarePlan was created or to which the creation of this record is tightly associated.
   * @param value - the value to set
   * @returns {this}
   */
  setEncounter(value: IReference): this {
    this.carePlan.encounter = value;
    return this;
  }

  /**
   * @description Sets the period value
   * @description Indicates when the plan did (or is intended to) come into effect and end.
   * @param value - the value to set
   * @returns {this}
   */
  setPeriod(value: IPeriod): this {
    this.carePlan.period = value;
    return this;
  }

  /**
   * @description Sets the created value
   * @description Represents when this particular CarePlan record was created in the system, which is often a system-generated date.
   * @param value - the value to set
   * @returns {this}
   */
  setCreated(value: string): this {
    this.carePlan.created = value;
    return this;
  }

  /**
   * @description Sets the author value
   * @description When populated, the author is responsible for the care plan.  The care plan is attributed to the author.
   * @param value - the value to set
   * @returns {this}
   */
  setAuthor(value: IReference): this {
    this.carePlan.author = value;
    return this;
  }

  /**
   * @description Adds a value to the contributor array
   * @description Identifies the individual(s) or organization who provided the contents of the care plan.
   * @param value - the value to add
   * @returns {this}
   */
  addContributor(value: IReference): this {
    this.carePlan.contributor = this.carePlan.contributor || [];
    this.carePlan.contributor.push(value);
    return this;
  }
  /**
   * @description Adds a value to the careTeam array
   * @description Identifies all people and organizations who are expected to be involved in the care envisioned by this plan.
   * @param value - the value to add
   * @returns {this}
   */
  addCareTeam(value: IReference): this {
    this.carePlan.careTeam = this.carePlan.careTeam || [];
    this.carePlan.careTeam.push(value);
    return this;
  }
  /**
   * @description Adds a value to the addresses array
   * @description Identifies the conditions/problems/concerns/diagnoses/etc. whose management and/or mitigation are handled by this plan.
   * @param value - the value to add
   * @returns {this}
   */
  addAddresses(value: IReference): this {
    this.carePlan.addresses = this.carePlan.addresses || [];
    this.carePlan.addresses.push(value);
    return this;
  }
  /**
   * @description Adds a value to the supportingInfo array
   * @description Identifies portions of the patient's record that specifically influenced the formation of the plan.  These might include comorbidities, recent procedures, limitations, recent assessments, etc.
   * @param value - the value to add
   * @returns {this}
   */
  addSupportingInfo(value: IReference): this {
    this.carePlan.supportingInfo = this.carePlan.supportingInfo || [];
    this.carePlan.supportingInfo.push(value);
    return this;
  }
  /**
   * @description Adds a value to the goal array
   * @description Describes the intended objective(s) of carrying out the care plan.
   * @param value - the value to add
   * @returns {this}
   */
  addGoal(value: IReference): this {
    this.carePlan.goal = this.carePlan.goal || [];
    this.carePlan.goal.push(value);
    return this;
  }
  /**
   * @description Adds a value to the activity array
   * @description Identifies a planned action to occur as part of the plan.  For example, a medication to be used, lab tests to perform, self-monitoring, education, etc.
   * @param value - the value to add
   * @returns {this}
   */
  addActivity(value: ICarePlanActivity): this {
    this.carePlan.activity = this.carePlan.activity || [];
    this.carePlan.activity.push(value);
    return this;
  }
  /**
   * @description Adds a value to the note array
   * @description General notes about the care plan not covered elsewhere.
   * @param value - the value to add
   * @returns {this}
   */
  addNote(value: IAnnotation): this {
    this.carePlan.note = this.carePlan.note || [];
    this.carePlan.note.push(value);
    return this;
  }
}
