import { IIdentifier, IReference, IElement, IQuestionnaireResponseItem } from 'fhirtypes/dist/r4';
import { QuestionnaireResponse } from '../../models';
import { DomainResourceBuilder, IBuildable } from '../base';
import { ExtractUnderscoreKeys } from '../../../core/commons/utils';
import { QuestionnaireAnswersStatusType } from 'fhirtypes/dist/r4/types';

// Extract the keys that start with an underscore
type PrimitiveExtensionFields = ExtractUnderscoreKeys<QuestionnaireResponse>;

/**
 * @description Interface for chaining the building of a QuestionnaireResponse
 * @interface IQuestionnaireResponseBuilder
 * @extends {IBuildable<QuestionnaireResponse>}
 */
interface IQuestionnaireResponseBuilder extends IBuildable<QuestionnaireResponse> {
  setIdentifier(value: IIdentifier): this;
  addBasedOn(value: IReference): this;
  addPartOf(value: IReference): this;
  setQuestionnaire(value: string): this;
  setStatus(value: QuestionnaireAnswersStatusType): this;
  setSubject(value: IReference): this;
  setEncounter(value: IReference): this;
  setAuthored(value: string): this;
  setAuthor(value: IReference): this;
  setSource(value: IReference): this;
  addItem(value: IQuestionnaireResponseItem): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a QuestionnaireResponse
 * @class QuestionnaireResponseBuilder
 * @extends {DomainResourceBuilder}
 * @implements {IQuestionnaireResponseBuilder}
 * @author Roberto Araneda Espinoza
 */
export class QuestionnaireResponseBuilder extends DomainResourceBuilder implements IQuestionnaireResponseBuilder {
  private readonly questionnaireResponse: QuestionnaireResponse;

  constructor() {
    super();
    this.questionnaireResponse = new QuestionnaireResponse();
  }

  /**
   * @description Sets the resource type to QuestionnaireResponse
   * @param json - the json to parse
   * @returns {this}
   */
  fromJSON(json: unknown): this {
    const incomingData = typeof json === 'string' ? JSON.parse(json) : json;
    Object.assign(this.questionnaireResponse, incomingData);
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
    this.questionnaireResponse[param] = extension;
    return this;
  }

  /**
   * @description Builds the model
   * @returns {QuestionnaireResponse}
   */
  build(): QuestionnaireResponse {
    return Object.assign(this.questionnaireResponse, super.build());
  }

  /**
   * @description Sets the identifier value
   * @description A business identifier assigned to a particular completed (or partially completed) questionnaire.
   * @param value - the value to set
   * @returns {this}
   */
  setIdentifier(value: IIdentifier): this {
    this.questionnaireResponse.identifier = value;
    return this;
  }

  /**
   * @description Adds a value to the basedOn array
   * @description The order, proposal or plan that is fulfilled in whole or in part by this QuestionnaireResponse.  For example, a ServiceRequest seeking an intake assessment or a decision support recommendation to assess for post-partum depression.
   * @param value - the value to add
   * @returns {this}
   */
  addBasedOn(value: IReference): this {
    this.questionnaireResponse.basedOn = this.questionnaireResponse.basedOn || [];
    this.questionnaireResponse.basedOn.push(value);
    return this;
  }
  /**
   * @description Adds a value to the partOf array
   * @description A procedure or observation that this questionnaire was performed as part of the execution of.  For example, the surgery a checklist was executed as part of.
   * @param value - the value to add
   * @returns {this}
   */
  addPartOf(value: IReference): this {
    this.questionnaireResponse.partOf = this.questionnaireResponse.partOf || [];
    this.questionnaireResponse.partOf.push(value);
    return this;
  }
  /**
   * @description Sets the questionnaire value
   * @description The Questionnaire that defines and organizes the questions for which answers are being provided.
   * @param value - the value to set
   * @returns {this}
   */
  setQuestionnaire(value: string): this {
    this.questionnaireResponse.questionnaire = value;
    return this;
  }

  /**
   * @description Sets the status value
   * @description The position of the questionnaire response within its overall lifecycle.
   * @param value - the value to set
   * @returns {this}
   */
  setStatus(value: QuestionnaireAnswersStatusType): this {
    this.questionnaireResponse.status = value;
    return this;
  }

  /**
   * @description Sets the subject value
   * @description The subject of the questionnaire response.  This could be a patient, organization, practitioner, device, etc.  This is who/what the answers apply to, but is not necessarily the source of information.
   * @param value - the value to set
   * @returns {this}
   */
  setSubject(value: IReference): this {
    this.questionnaireResponse.subject = value;
    return this;
  }

  /**
   * @description Sets the encounter value
   * @description The Encounter during which this questionnaire response was created or to which the creation of this record is tightly associated.
   * @param value - the value to set
   * @returns {this}
   */
  setEncounter(value: IReference): this {
    this.questionnaireResponse.encounter = value;
    return this;
  }

  /**
   * @description Sets the authored value
   * @description The date and/or time that this set of answers were last changed.
   * @param value - the value to set
   * @returns {this}
   */
  setAuthored(value: string): this {
    this.questionnaireResponse.authored = value;
    return this;
  }

  /**
   * @description Sets the author value
   * @description Person who received the answers to the questions in the QuestionnaireResponse and recorded them in the system.
   * @param value - the value to set
   * @returns {this}
   */
  setAuthor(value: IReference): this {
    this.questionnaireResponse.author = value;
    return this;
  }

  /**
   * @description Sets the source value
   * @description The person who answered the questions about the subject.
   * @param value - the value to set
   * @returns {this}
   */
  setSource(value: IReference): this {
    this.questionnaireResponse.source = value;
    return this;
  }

  /**
   * @description Adds a value to the item array
   * @description A group or question item from the original questionnaire for which answers are provided.
   * @param value - the value to add
   * @returns {this}
   */
  addItem(value: IQuestionnaireResponseItem): this {
    this.questionnaireResponse.item = this.questionnaireResponse.item || [];
    this.questionnaireResponse.item.push(value);
    return this;
  }
}
