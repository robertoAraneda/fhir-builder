import { IIdentifier, IReference, IElement, IQuestionnaireResponseItem } from 'fhirtypes/dist/r4';
import { IQuestionnaireResponse, IOperationOutcome } from 'fhirtypes/dist/r4';
import { DomainResource, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';
import { QuestionnaireAnswersStatusType } from 'fhirtypes/dist/r4/types';

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for QuestionnaireResponse Resource
 * @property {string} resourceType
 * @property {IIdentifier} identifier
 * @property {IReference[]} basedOn
 * @property {IReference[]} partOf
 * @property {string} questionnaire
 * @property {string} status
 * @property {IElement} _status
 * @property {IReference} subject
 * @property {IReference} encounter
 * @property {string} authored
 * @property {IElement} _authored
 * @property {IReference} author
 * @property {IReference} source
 * @property {IQuestionnaireResponseItem[]} item
 * @author Roberto Araneda Espinoza
 */
export class QuestionnaireResponse
  extends DomainResource
  implements IQuestionnaireResponse, IValidatable, ISerializable
{
  /**
   * @description The type of resource
   */
  resourceType? = 'QuestionnaireResponse';

  /**
   * @description A business identifier assigned to a particular completed (or partially completed) questionnaire.
   */
  identifier?: IIdentifier;

  /**
   * @description The order, proposal or plan that is fulfilled in whole or in part by this QuestionnaireResponse.  For example, a ServiceRequest seeking an intake assessment or a decision support recommendation to assess for post-partum depression.
   */
  basedOn?: IReference[];

  /**
   * @description A procedure or observation that this questionnaire was performed as part of the execution of.  For example, the surgery a checklist was executed as part of.
   */
  partOf?: IReference[];

  /**
   * @description The Questionnaire that defines and organizes the questions for which answers are being provided.
   */
  questionnaire?: string;

  /**
   * @description The position of the questionnaire response within its overall lifecycle.
   */
  status: QuestionnaireAnswersStatusType;

  /**
   * @description Extensions for status
   */
  _status?: IElement;

  /**
   * @description The subject of the questionnaire response.  This could be a patient, organization, practitioner, device, etc.  This is who/what the answers apply to, but is not necessarily the source of information.
   */
  subject?: IReference;

  /**
   * @description The Encounter during which this questionnaire response was created or to which the creation of this record is tightly associated.
   */
  encounter?: IReference;

  /**
   * @description The date and/or time that this set of answers were last changed.
   */
  authored?: string;

  /**
   * @description Extensions for authored
   */
  _authored?: IElement;

  /**
   * @description Person who received the answers to the questions in the QuestionnaireResponse and recorded them in the system.
   */
  author?: IReference;

  /**
   * @description The person who answered the questions about the subject.
   */
  source?: IReference;

  /**
   * @description A group or question item from the original questionnaire for which answers are provided.
   */
  item?: IQuestionnaireResponseItem[];

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
    return `QuestionnaireResponse${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `QuestionnaireResponse${JSON.stringify(this.toJson(), null, 2)}`;
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
    return ConformanceValidator('QuestionnaireResponse', this);
  }

  constructor(args?: IQuestionnaireResponse) {
    super();
    if (args) Object.assign(this, args);
  }
}
