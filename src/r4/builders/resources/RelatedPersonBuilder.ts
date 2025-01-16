import {
  IIdentifier,
  IElement,
  IReference,
  ICodeableConcept,
  IHumanName,
  IContactPoint,
  IAddress,
  IAttachment,
  IPeriod,
  IRelatedPersonCommunication,
  AdministrativeGenderType,
} from 'fhirtypes/dist/r4';
import { RelatedPerson } from '../../models';
import { DomainResourceBuilder, IBuildable } from '../base';
import { ExtractUnderscoreKeys } from '../../../core/commons/utils';

// Extract the keys that start with an underscore
type PrimitiveExtensionFields = ExtractUnderscoreKeys<RelatedPerson>;

/**
 * @description Interface for chaining the building of a RelatedPerson
 * @interface IRelatedPersonBuilder
 * @extends {IBuildable<RelatedPerson>}
 */
interface IRelatedPersonBuilder extends IBuildable<RelatedPerson> {
  addIdentifier(value: IIdentifier): this;
  setActive(value: boolean): this;
  setPatient(value: IReference): this;
  addRelationship(value: ICodeableConcept): this;
  addName(value: IHumanName): this;
  addTelecom(value: IContactPoint): this;
  setGender(value: AdministrativeGenderType): this;
  setBirthDate(value: string): this;
  addAddress(value: IAddress): this;
  addPhoto(value: IAttachment): this;
  setPeriod(value: IPeriod): this;
  addCommunication(value: IRelatedPersonCommunication): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a RelatedPerson
 * @class RelatedPersonBuilder
 * @extends {DomainResourceBuilder}
 * @implements {IRelatedPersonBuilder}
 * @author Roberto Araneda Espinoza
 */
export class RelatedPersonBuilder extends DomainResourceBuilder implements IRelatedPersonBuilder {
  private readonly relatedPerson: RelatedPerson;

  constructor() {
    super();
    this.relatedPerson = new RelatedPerson();
  }

  /**
   * @description Sets the resource type to RelatedPerson
   * @param json - the json to parse
   * @returns {this}
   */
  fromJSON(json: unknown): this {
    const incomingData = typeof json === 'string' ? JSON.parse(json) : json;
    Object.assign(this.relatedPerson, incomingData);
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
    this.relatedPerson[param] = extension;
    return this;
  }

  /**
   * @description Builds the model
   * @returns {RelatedPerson}
   */
  build(): RelatedPerson {
    return Object.assign(this.relatedPerson, super.build());
  }

  /**
   * @description Adds a value to the identifier array
   * @description Identifier for a person within a particular scope.
   * @param value - the value to add
   * @returns {this}
   */
  addIdentifier(value: IIdentifier): this {
    this.relatedPerson.identifier = this.relatedPerson.identifier || [];
    this.relatedPerson.identifier.push(value);
    return this;
  }
  /**
   * @description Sets the active value
   * @description Whether this related person record is in active use.
   * @param value - the value to set
   * @returns {this}
   */
  setActive(value: boolean): this {
    this.relatedPerson.active = value;
    return this;
  }

  /**
   * @description Sets the patient value
   * @description The patient this person is related to.
   * @param value - the value to set
   * @returns {this}
   */
  setPatient(value: IReference): this {
    this.relatedPerson.patient = value;
    return this;
  }

  /**
   * @description Adds a value to the relationship array
   * @description The nature of the relationship between a patient and the related person.
   * @param value - the value to add
   * @returns {this}
   */
  addRelationship(value: ICodeableConcept): this {
    this.relatedPerson.relationship = this.relatedPerson.relationship || [];
    this.relatedPerson.relationship.push(value);
    return this;
  }
  /**
   * @description Adds a value to the name array
   * @description A name associated with the person.
   * @param value - the value to add
   * @returns {this}
   */
  addName(value: IHumanName): this {
    this.relatedPerson.name = this.relatedPerson.name || [];
    this.relatedPerson.name.push(value);
    return this;
  }
  /**
   * @description Adds a value to the telecom array
   * @description A contact detail for the person, e.g. a telephone number or an email address.
   * @param value - the value to add
   * @returns {this}
   */
  addTelecom(value: IContactPoint): this {
    this.relatedPerson.telecom = this.relatedPerson.telecom || [];
    this.relatedPerson.telecom.push(value);
    return this;
  }
  /**
   * @description Sets the gender value
   * @description Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.
   * @param value - the value to set
   * @returns {this}
   */
  setGender(value: AdministrativeGenderType): this {
    this.relatedPerson.gender = value;
    return this;
  }

  /**
   * @description Sets the birthDate value
   * @description The date on which the related person was born.
   * @param value - the value to set
   * @returns {this}
   */
  setBirthDate(value: string): this {
    this.relatedPerson.birthDate = value;
    return this;
  }

  /**
   * @description Adds a value to the address array
   * @description Address where the related person can be contacted or visited.
   * @param value - the value to add
   * @returns {this}
   */
  addAddress(value: IAddress): this {
    this.relatedPerson.address = this.relatedPerson.address || [];
    this.relatedPerson.address.push(value);
    return this;
  }
  /**
   * @description Adds a value to the photo array
   * @description Image of the person.
   * @param value - the value to add
   * @returns {this}
   */
  addPhoto(value: IAttachment): this {
    this.relatedPerson.photo = this.relatedPerson.photo || [];
    this.relatedPerson.photo.push(value);
    return this;
  }
  /**
   * @description Sets the period value
   * @description The period of time during which this relationship is or was active. If there are no dates defined, then the interval is unknown.
   * @param value - the value to set
   * @returns {this}
   */
  setPeriod(value: IPeriod): this {
    this.relatedPerson.period = value;
    return this;
  }

  /**
   * @description Adds a value to the communication array
   * @description A language which may be used to communicate with about the patient's health.
   * @param value - the value to add
   * @returns {this}
   */
  addCommunication(value: IRelatedPersonCommunication): this {
    this.relatedPerson.communication = this.relatedPerson.communication || [];
    this.relatedPerson.communication.push(value);
    return this;
  }
}
