import {
  IIdentifier,
  IElement,
  IHumanName,
  IContactPoint,
  IAddress,
  IAttachment,
  IPractitionerQualification,
  ICodeableConcept,
  AdministrativeGenderType,
} from 'fhirtypes/dist/r4';
import { Practitioner } from '../../models';
import { DomainResourceBuilder, IBuildable } from '../base';
import { ExtractUnderscoreKeys } from '../../../core/commons/utils';

// Extract the keys that start with an underscore
type PrimitiveExtensionFields = ExtractUnderscoreKeys<Practitioner>;

/**
 * @description Interface for chaining the building of a Practitioner
 * @interface IPractitionerBuilder
 * @extends {IBuildable<Practitioner>}
 */
interface IPractitionerBuilder extends IBuildable<Practitioner> {
  addIdentifier(value: IIdentifier): this;
  setActive(value: boolean): this;
  addName(value: IHumanName): this;
  addTelecom(value: IContactPoint): this;
  addAddress(value: IAddress): this;
  setGender(value: AdministrativeGenderType): this;
  setBirthDate(value: string): this;
  addPhoto(value: IAttachment): this;
  addQualification(value: IPractitionerQualification): this;
  addCommunication(value: ICodeableConcept): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a Practitioner
 * @class PractitionerBuilder
 * @extends {DomainResourceBuilder}
 * @implements {IPractitionerBuilder}
 * @author Roberto Araneda Espinoza
 */
export class PractitionerBuilder extends DomainResourceBuilder implements IPractitionerBuilder {
  private readonly practitioner: Practitioner;

  constructor() {
    super();
    this.practitioner = new Practitioner();
  }

  /**
   * @description Sets the resource type to Practitioner
   * @param json - the json to parse
   * @returns {this}
   */
  fromJSON(json: unknown): this {
    const incomingData = typeof json === 'string' ? JSON.parse(json) : json;
    Object.assign(this.practitioner, incomingData);
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
    this.practitioner[param] = extension;
    return this;
  }

  /**
   * @description Builds the model
   * @returns {Practitioner}
   */
  build(): Practitioner {
    return Object.assign(this.practitioner, super.build());
  }

  /**
   * @description Adds a value to the identifier array
   * @description An identifier that applies to this person in this role.
   * @param value - the value to add
   * @returns {this}
   */
  addIdentifier(value: IIdentifier): this {
    this.practitioner.identifier = this.practitioner.identifier || [];
    this.practitioner.identifier.push(value);
    return this;
  }
  /**
   * @description Sets the active value
   * @description Whether this practitioner's record is in active use.
   * @param value - the value to set
   * @returns {this}
   */
  setActive(value: boolean): this {
    this.practitioner.active = value;
    return this;
  }

  /**
   * @description Adds a value to the name array
   * @description The name(s) associated with the practitioner.
   * @param value - the value to add
   * @returns {this}
   */
  addName(value: IHumanName): this {
    this.practitioner.name = this.practitioner.name || [];
    this.practitioner.name.push(value);
    return this;
  }
  /**
   * @description Adds a value to the telecom array
   * @description A contact detail for the practitioner, e.g. a telephone number or an email address.
   * @param value - the value to add
   * @returns {this}
   */
  addTelecom(value: IContactPoint): this {
    this.practitioner.telecom = this.practitioner.telecom || [];
    this.practitioner.telecom.push(value);
    return this;
  }
  /**
    * @description Adds a value to the address array
    * @description Address(es) of the practitioner that are not role specific (typically home address). 
Work addresses are not typically entered in this property as they are usually role dependent.
    * @param value - the value to add
    * @returns {this}
    */
  addAddress(value: IAddress): this {
    this.practitioner.address = this.practitioner.address || [];
    this.practitioner.address.push(value);
    return this;
  }
  /**
   * @description Sets the gender value
   * @description Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.
   * @param value - the value to set
   * @returns {this}
   */
  setGender(value: AdministrativeGenderType): this {
    this.practitioner.gender = value;
    return this;
  }

  /**
   * @description Sets the birthDate value
   * @description The date of birth for the practitioner.
   * @param value - the value to set
   * @returns {this}
   */
  setBirthDate(value: string): this {
    this.practitioner.birthDate = value;
    return this;
  }

  /**
   * @description Adds a value to the photo array
   * @description Image of the person.
   * @param value - the value to add
   * @returns {this}
   */
  addPhoto(value: IAttachment): this {
    this.practitioner.photo = this.practitioner.photo || [];
    this.practitioner.photo.push(value);
    return this;
  }
  /**
   * @description Adds a value to the qualification array
   * @description The official certifications, training, and licenses that authorize or otherwise pertain to the provision of care by the practitioner.  For example, a medical license issued by a medical board authorizing the practitioner to practice medicine within a certian locality.
   * @param value - the value to add
   * @returns {this}
   */
  addQualification(value: IPractitionerQualification): this {
    this.practitioner.qualification = this.practitioner.qualification || [];
    this.practitioner.qualification.push(value);
    return this;
  }
  /**
   * @description Adds a value to the communication array
   * @description A language the practitioner can use in patient communication.
   * @param value - the value to add
   * @returns {this}
   */
  addCommunication(value: ICodeableConcept): this {
    this.practitioner.communication = this.practitioner.communication || [];
    this.practitioner.communication.push(value);
    return this;
  }
}
