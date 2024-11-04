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
import { IQuestionnaire, IOperationOutcome } from 'fhirtypes/dist/r4';
import { DomainResource, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';
import { PublicationStatusType, ResourceTypesType } from 'fhirtypes/dist/r4/types';

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for Questionnaire Resource
 * @property {string} resourceType
 * @property {string} url
 * @property {IElement} _url
 * @property {IIdentifier[]} identifier
 * @property {string} version
 * @property {IElement} _version
 * @property {string} name
 * @property {IElement} _name
 * @property {string} title
 * @property {IElement} _title
 * @property {string[]} derivedFrom
 * @property {string} status
 * @property {IElement} _status
 * @property {boolean} experimental
 * @property {IElement} _experimental
 * @property {string[]} subjectType
 * @property {IElement[]} _subjectType
 * @property {string} date
 * @property {IElement} _date
 * @property {string} publisher
 * @property {IElement} _publisher
 * @property {IContactDetail[]} contact
 * @property {string} description
 * @property {IElement} _description
 * @property {IUsageContext[]} useContext
 * @property {ICodeableConcept[]} jurisdiction
 * @property {string} purpose
 * @property {IElement} _purpose
 * @property {string} copyright
 * @property {IElement} _copyright
 * @property {string} approvalDate
 * @property {IElement} _approvalDate
 * @property {string} lastReviewDate
 * @property {IElement} _lastReviewDate
 * @property {IPeriod} effectivePeriod
 * @property {ICoding[]} code
 * @property {IQuestionnaireItem[]} item
 * @author Roberto Araneda Espinoza
 */
export class Questionnaire extends DomainResource implements IQuestionnaire, IValidatable, ISerializable {
  /**
   * @description The type of resource
   */
  resourceType? = 'Questionnaire';

  /**
   * @description An absolute URI that is used to identify this questionnaire when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this questionnaire is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the questionnaire is stored on different servers.
   */
  url?: string;

  /**
   * @description Extensions for url
   */
  _url?: IElement;

  /**
   * @description A formal identifier that is used to identify this questionnaire when it is represented in other formats, or referenced in a specification, model, design or an instance.
   */
  identifier?: IIdentifier[];

  /**
   * @description The identifier that is used to identify this version of the questionnaire when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the questionnaire author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
   */
  version?: string;

  /**
   * @description Extensions for version
   */
  _version?: IElement;

  /**
   * @description A natural language name identifying the questionnaire. This name should be usable as an identifier for the module by machine processing applications such as code generation.
   */
  name?: string;

  /**
   * @description Extensions for name
   */
  _name?: IElement;

  /**
   * @description A short, descriptive, user-friendly title for the questionnaire.
   */
  title?: string;

  /**
   * @description Extensions for title
   */
  _title?: IElement;

  /**
   * @description The URL of a Questionnaire that this Questionnaire is based on.
   */
  derivedFrom?: string[];

  /**
   * @description The status of this questionnaire. Enables tracking the life-cycle of the content.
   */
  status: PublicationStatusType;

  /**
   * @description Extensions for status
   */
  _status?: IElement;

  /**
   * @description A Boolean value to indicate that this questionnaire is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
   */
  experimental?: boolean;

  /**
   * @description Extensions for experimental
   */
  _experimental?: IElement;

  /**
   * @description The types of subjects that can be the subject of responses created for the questionnaire.
   */
  subjectType?: ResourceTypesType[];

  /**
   * @description Extensions for subjectType
   */
  _subjectType?: IElement[];

  /**
   * @description The date  (and optionally time) when the questionnaire was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the questionnaire changes.
   */
  date?: string;

  /**
   * @description Extensions for date
   */
  _date?: IElement;

  /**
   * @description The name of the organization or individual that published the questionnaire.
   */
  publisher?: string;

  /**
   * @description Extensions for publisher
   */
  _publisher?: IElement;

  /**
   * @description Contact details to assist a user in finding and communicating with the publisher.
   */
  contact?: IContactDetail[];

  /**
   * @description A free text natural language description of the questionnaire from a consumer's perspective.
   */
  description?: string;

  /**
   * @description Extensions for description
   */
  _description?: IElement;

  /**
   * @description The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate questionnaire instances.
   */
  useContext?: IUsageContext[];

  /**
   * @description A legal or geographic region in which the questionnaire is intended to be used.
   */
  jurisdiction?: ICodeableConcept[];

  /**
   * @description Explanation of why this questionnaire is needed and why it has been designed as it has.
   */
  purpose?: string;

  /**
   * @description Extensions for purpose
   */
  _purpose?: IElement;

  /**
   * @description A copyright statement relating to the questionnaire and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the questionnaire.
   */
  copyright?: string;

  /**
   * @description Extensions for copyright
   */
  _copyright?: IElement;

  /**
   * @description The date on which the resource content was approved by the publisher. Approval happens once when the content is officially approved for usage.
   */
  approvalDate?: string;

  /**
   * @description Extensions for approvalDate
   */
  _approvalDate?: IElement;

  /**
   * @description The date on which the resource content was last reviewed. Review happens periodically after approval but does not change the original approval date.
   */
  lastReviewDate?: string;

  /**
   * @description Extensions for lastReviewDate
   */
  _lastReviewDate?: IElement;

  /**
   * @description The period during which the questionnaire content was or is planned to be in active use.
   */
  effectivePeriod?: IPeriod;

  /**
   * @description An identifier for this question or group of questions in a particular terminology such as LOINC.
   */
  code?: ICoding[];

  /**
   * @description A particular question, question grouping or display text that is part of the questionnaire.
   */
  item?: IQuestionnaireItem[];

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
    return `Questionnaire${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `Questionnaire${JSON.stringify(this.toJson(), null, 2)}`;
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
    return ConformanceValidator('Questionnaire', this);
  }

  constructor(args?: IQuestionnaire) {
    super();
    if (args) Object.assign(this, args);
  }
}
