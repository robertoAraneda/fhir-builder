import { ContactPointSystemType, ContactPointUseType, IContactPoint, IElement, IPeriod } from 'fhirtypes/dist/r4';
import { ContactPointBuilder } from '../../builders';

import { ConformanceValidator } from '../../../core/r4/validators/base';
import { Element } from '../base/Element';
import { IValidatable } from '../base/IValidatable';
import { ISerializable } from '../base/ISerializable';

/**
 * @description Details for all kinds of technology-mediated contact points for a person or organization, including telephone, email, etc.
 * @property {string} id - Unique id for inter-element referencing
 * @property {IExtension[]} extension - Additional content defined by implementations
 * @property {IPeriod} period - Time period when the contact point was/is in use
 * @property {number} rank - Specify preferred order of use (1 = highest)
 * @property {ContactPointSystemEnum} system - phone | fax | email | pager | url | sms | other
 * @property {string} value - The actual contact point details
 * @property {ContactPointUseEnum} use - home | work | temp | old | mobile - purpose of this contact point
 * @property {IElement} _system - Extension of system element
 * @property {IElement} _value - Extension of value element
 * @property {IElement} _use - Extension of use element
 * @property {IElement} _rank - Extension of rank element
 * @see https://www.hl7.org/fhir/datatypes.html#ContactPoint ContactPoint
 * @author Roberto Araneda
 */
export class ContactPoint extends Element implements IContactPoint, IValidatable, ISerializable {
  /**
   * @description phone | fax | email | pager | url | sms | other
   */
  system?: ContactPointSystemType;

  /**
   * @description The actual contact point details
   */
  value?: string;

  /**
   * @description home | work | temp | old | mobile - purpose of this contact point
   */
  use?: ContactPointUseType;

  /**
   * @description Specify preferred order of use (1 = highest)
   */
  rank?: number;

  /**
   * @description Time period when the contact point was/is in use
   */
  period?: IPeriod;

  // Extensions

  /**
   * @description Extension of system element
   */
  _system?: IElement;

  /**
   * @description Extension of value element
   */
  _value?: IElement;

  /**
   * @description Extension of use element
   */
  _use?: IElement;

  /**
   * @description Extension of rank element
   */
  _rank?: IElement;

  toJson() {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `ContactPoint${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `ContactPoint${JSON.stringify(this.toJson())}`;
  }

  validate() {
    return ConformanceValidator('ContactPoint', this);
  }

  constructor(args?: IContactPoint) {
    super();
    Object.assign(this, args);
  }

  protected builderInstance(): ContactPointBuilder {
    return new ContactPointBuilder();
  }

  serialize(): string {
    return JSON.stringify(this.toJson());
  }
}
