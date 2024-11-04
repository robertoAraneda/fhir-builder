import {
  IElement,
  IIdentifier,
  IContactDetail,
  IUsageContext,
  ICodeableConcept,
  IPeriod,
  ICoding,
  IQuestionnaireItem,
} from 'fhirtypes/dist/r4';
import { Questionnaire } from '../../models';
import { DomainResourceBuilder, IBuildable } from '../base';
import { ExtractUnderscoreKeys, ExtractUnderscoreArrayKeys } from '../../../core/commons/utils';
import { PublicationStatusType, ResourceTypesType } from 'fhirtypes/dist/r4/types';

// Extract the keys that start with an underscore
type PrimitiveExtensionFields = ExtractUnderscoreKeys<Questionnaire>;

// Extract the keys that are arrays and start with an underscore
type UnderscoreArrayElements = ExtractUnderscoreArrayKeys<Questionnaire>;
/**
 * @description Interface for chaining the building of a Questionnaire
 * @interface IQuestionnaireBuilder
 * @extends {IBuildable<Questionnaire>}
 */
interface IQuestionnaireBuilder extends IBuildable<Questionnaire> {
  setUrl(value: string): this;
  addIdentifier(value: IIdentifier): this;
  setVersion(value: string): this;
  setName(value: string): this;
  setTitle(value: string): this;
  addDerivedFrom(value: string): this;
  setStatus(value: PublicationStatusType): this;
  setExperimental(value: boolean): this;
  addSubjectType(value: ResourceTypesType): this;
  setDate(value: string): this;
  setPublisher(value: string): this;
  addContact(value: IContactDetail): this;
  setDescription(value: string): this;
  addUseContext(value: IUsageContext): this;
  addJurisdiction(value: ICodeableConcept): this;
  setPurpose(value: string): this;
  setCopyright(value: string): this;
  setApprovalDate(value: string): this;
  setLastReviewDate(value: string): this;
  setEffectivePeriod(value: IPeriod): this;
  addCode(value: ICoding): this;
  addItem(value: IQuestionnaireItem): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a Questionnaire
 * @class QuestionnaireBuilder
 * @extends {DomainResourceBuilder}
 * @implements {IQuestionnaireBuilder}
 * @author Roberto Araneda Espinoza
 */
export class QuestionnaireBuilder extends DomainResourceBuilder implements IQuestionnaireBuilder {
  private readonly questionnaire: Questionnaire;

  constructor() {
    super();
    this.questionnaire = new Questionnaire();
  }

  /**
   * @description Sets the resource type to Questionnaire
   * @param json - the json to parse
   * @returns {this}
   */
  fromJSON(json: unknown): this {
    const incomingData = typeof json === 'string' ? JSON.parse(json) : json;
    Object.assign(this.questionnaire, incomingData);
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
    const arrayParam = ['_subjectType'];
    if (arrayParam.includes(param)) {
      this.questionnaire[param] = this.questionnaire[param] || [];
      (this.questionnaire[param] as IElement[]).push(extension as IElement);

      return this;
    }

    const localParam = param as Exclude<PrimitiveExtensionFields, UnderscoreArrayElements>;
    this.questionnaire[localParam] = extension as IElement;
    return this;
  }

  /**
   * @description Builds the model
   * @returns {Questionnaire}
   */
  build(): Questionnaire {
    return Object.assign(this.questionnaire, super.build());
  }

  /**
   * @description Sets the url value
   * @description An absolute URI that is used to identify this questionnaire when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this questionnaire is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the questionnaire is stored on different servers.
   * @param value - the value to set
   * @returns {this}
   */
  setUrl(value: string): this {
    this.questionnaire.url = value;
    return this;
  }

  /**
   * @description Adds a value to the identifier array
   * @description A formal identifier that is used to identify this questionnaire when it is represented in other formats, or referenced in a specification, model, design or an instance.
   * @param value - the value to add
   * @returns {this}
   */
  addIdentifier(value: IIdentifier): this {
    this.questionnaire.identifier = this.questionnaire.identifier || [];
    this.questionnaire.identifier.push(value);
    return this;
  }
  /**
   * @description Sets the version value
   * @description The identifier that is used to identify this version of the questionnaire when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the questionnaire author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
   * @param value - the value to set
   * @returns {this}
   */
  setVersion(value: string): this {
    this.questionnaire.version = value;
    return this;
  }

  /**
   * @description Sets the name value
   * @description A natural language name identifying the questionnaire. This name should be usable as an identifier for the module by machine processing applications such as code generation.
   * @param value - the value to set
   * @returns {this}
   */
  setName(value: string): this {
    this.questionnaire.name = value;
    return this;
  }

  /**
   * @description Sets the title value
   * @description A short, descriptive, user-friendly title for the questionnaire.
   * @param value - the value to set
   * @returns {this}
   */
  setTitle(value: string): this {
    this.questionnaire.title = value;
    return this;
  }

  /**
   * @description Adds a value to the derivedFrom array
   * @description The URL of a Questionnaire that this Questionnaire is based on.
   * @param value - the value to add
   * @returns {this}
   */
  addDerivedFrom(value: string): this {
    this.questionnaire.derivedFrom = this.questionnaire.derivedFrom || [];
    this.questionnaire.derivedFrom.push(value);
    return this;
  }
  /**
   * @description Sets the status value
   * @description The status of this questionnaire. Enables tracking the life-cycle of the content.
   * @param value - the value to set
   * @returns {this}
   */
  setStatus(value: PublicationStatusType): this {
    this.questionnaire.status = value;
    return this;
  }

  /**
   * @description Sets the experimental value
   * @description A Boolean value to indicate that this questionnaire is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
   * @param value - the value to set
   * @returns {this}
   */
  setExperimental(value: boolean): this {
    this.questionnaire.experimental = value;
    return this;
  }

  /**
   * @description Adds a value to the subjectType array
   * @description The types of subjects that can be the subject of responses created for the questionnaire.
   * @param value - the value to add
   * @returns {this}
   */
  addSubjectType(value: ResourceTypesType): this {
    this.questionnaire.subjectType = this.questionnaire.subjectType || [];
    this.questionnaire.subjectType.push(value);
    return this;
  }
  /**
   * @description Sets the date value
   * @description The date  (and optionally time) when the questionnaire was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the questionnaire changes.
   * @param value - the value to set
   * @returns {this}
   */
  setDate(value: string): this {
    this.questionnaire.date = value;
    return this;
  }

  /**
   * @description Sets the publisher value
   * @description The name of the organization or individual that published the questionnaire.
   * @param value - the value to set
   * @returns {this}
   */
  setPublisher(value: string): this {
    this.questionnaire.publisher = value;
    return this;
  }

  /**
   * @description Adds a value to the contact array
   * @description Contact details to assist a user in finding and communicating with the publisher.
   * @param value - the value to add
   * @returns {this}
   */
  addContact(value: IContactDetail): this {
    this.questionnaire.contact = this.questionnaire.contact || [];
    this.questionnaire.contact.push(value);
    return this;
  }
  /**
   * @description Sets the description value
   * @description A free text natural language description of the questionnaire from a consumer's perspective.
   * @param value - the value to set
   * @returns {this}
   */
  setDescription(value: string): this {
    this.questionnaire.description = value;
    return this;
  }

  /**
   * @description Adds a value to the useContext array
   * @description The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate questionnaire instances.
   * @param value - the value to add
   * @returns {this}
   */
  addUseContext(value: IUsageContext): this {
    this.questionnaire.useContext = this.questionnaire.useContext || [];
    this.questionnaire.useContext.push(value);
    return this;
  }
  /**
   * @description Adds a value to the jurisdiction array
   * @description A legal or geographic region in which the questionnaire is intended to be used.
   * @param value - the value to add
   * @returns {this}
   */
  addJurisdiction(value: ICodeableConcept): this {
    this.questionnaire.jurisdiction = this.questionnaire.jurisdiction || [];
    this.questionnaire.jurisdiction.push(value);
    return this;
  }
  /**
   * @description Sets the purpose value
   * @description Explanation of why this questionnaire is needed and why it has been designed as it has.
   * @param value - the value to set
   * @returns {this}
   */
  setPurpose(value: string): this {
    this.questionnaire.purpose = value;
    return this;
  }

  /**
   * @description Sets the copyright value
   * @description A copyright statement relating to the questionnaire and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the questionnaire.
   * @param value - the value to set
   * @returns {this}
   */
  setCopyright(value: string): this {
    this.questionnaire.copyright = value;
    return this;
  }

  /**
   * @description Sets the approvalDate value
   * @description The date on which the resource content was approved by the publisher. Approval happens once when the content is officially approved for usage.
   * @param value - the value to set
   * @returns {this}
   */
  setApprovalDate(value: string): this {
    this.questionnaire.approvalDate = value;
    return this;
  }

  /**
   * @description Sets the lastReviewDate value
   * @description The date on which the resource content was last reviewed. Review happens periodically after approval but does not change the original approval date.
   * @param value - the value to set
   * @returns {this}
   */
  setLastReviewDate(value: string): this {
    this.questionnaire.lastReviewDate = value;
    return this;
  }

  /**
   * @description Sets the effectivePeriod value
   * @description The period during which the questionnaire content was or is planned to be in active use.
   * @param value - the value to set
   * @returns {this}
   */
  setEffectivePeriod(value: IPeriod): this {
    this.questionnaire.effectivePeriod = value;
    return this;
  }

  /**
   * @description Adds a value to the code array
   * @description An identifier for this question or group of questions in a particular terminology such as LOINC.
   * @param value - the value to add
   * @returns {this}
   */
  addCode(value: ICoding): this {
    this.questionnaire.code = this.questionnaire.code || [];
    this.questionnaire.code.push(value);
    return this;
  }
  /**
   * @description Adds a value to the item array
   * @description A particular question, question grouping or display text that is part of the questionnaire.
   * @param value - the value to add
   * @returns {this}
   */
  addItem(value: IQuestionnaireItem): this {
    this.questionnaire.item = this.questionnaire.item || [];
    this.questionnaire.item.push(value);
    return this;
  }
}
