import { IElement, IHumanName, IPeriod, NameUseType } from 'fhirtypes/dist/r4';
import { HumanNameBuilder } from '../../builders';
import { ConformanceValidator } from '../../../core/r4/validators/base';
import { Element } from '../base/Element';
import { IValidatable } from '../base/IValidatable';
import { ISerializable } from '../base/ISerializable';

/**
 * @description Name of a human or other living entity - parts and usage
 * @implements {IHumanName}
 * @property {string} id - Unique id for inter-element referencing
 * @property {IExtension[]} extension - Additional content defined by implementations
 * @property {NameUseEnum} use - usual | official | temp | nickname | anonymous | old | maiden
 * @property {string} text - Text representation of the full name
 * @property {string} family - Family name (often called 'Surname')
 * @property {string[]} given - Given names (not always 'first'). Includes middle names
 * @property {string[]} prefix - Parts that come before the name
 * @property {string[]} suffix - Parts that come after the name
 * @property {IPeriod} period - Time period when name was/is in use
 * @property {IElement} _use - Extension of use
 * @property {IElement} _text - Extension of text
 * @property {IElement} _family - Extension of family
 * @property {IElement[]} _given - Extension of given
 * @property {IElement[]} _prefix - Extension of prefix
 * @property {IElement[]} _suffix - Extension of suffix
 * @see {@link https://www.hl7.org/fhir/datatypes.html#HumanName HumanName}
 * @author Roberto Araneda
 */
export class HumanName extends Element implements IHumanName, IValidatable, ISerializable {
  /**
   * @description usual | official | temp | nickname | anonymous | old | maiden
   */
  use?: NameUseType;

  /**
   * @description Text representation of the full name
   */
  text?: string;

  /**
   * @description Family name (often called 'Surname')
   */
  family?: string;

  /**
   * @description Given names (not always 'first'). Includes middle names
   */
  given?: string[];

  /**
   * @description Parts that come before the name
   */
  prefix?: string[];

  /**
   * @description Parts that come after the name
   */
  suffix?: string[];

  /**
   * @description Time period when name was/is in use
   */
  period?: IPeriod;

  // Extensions

  /**
   * @description Extension of use
   */
  _use?: IElement;

  /**
   * @description Extension of text
   */
  _text?: IElement;

  /**
   * @description Extension of family
   */
  _family?: IElement;

  /**
   * @description Extension of given
   */
  _given?: IElement[];

  /**
   * @description Extension of prefix
   */
  _prefix?: IElement[];

  /**
   * @description Extension of suffix
   */
  _suffix?: IElement[];

  toJson() {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `HumanName${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `HumanName${JSON.stringify(this.toJson())}`;
  }

  validate() {
    return ConformanceValidator('HumanName', this);
  }

  constructor(args?: IHumanName) {
    super();
    Object.assign(this, args);
  }

  protected builderInstance(): HumanNameBuilder {
    return new HumanNameBuilder();
  }

  serialize(): string {
    return JSON.stringify(this.toJson());
  }
}
