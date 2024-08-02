import { AddressTypeType, AddressUseType, IAddress, IElement, IPeriod } from 'fhirtypes/dist/r4';
import { AddressBuilder } from '../../builders';
import { Element } from './element.model';
import { DatatypeValidator as Validator } from '../../utils/datatype.validator';

export class Address extends Element implements IAddress {
  constructor(args?: IAddress) {
    super();
    Object.assign(this, args);
  }

  toJson(): Address {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `Address${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `Address${JSON.stringify(this.toJson())}`;
  }

  isValid(): { error: string | null } {
    const { error } = Validator.Address(this);
    return { error };
  }

  static builder(): AddressBuilder {
    return new AddressBuilder();
  }

  /**
   * @description home | work | temp | old | billing - purpose of this address
   */
  use?: AddressUseType;

  /**
   * @description postal | physical | both
   */
  type?: AddressTypeType;

  /**
   * @description Text representation of the address
   */
  text?: string;

  /**
   * @description Street name, number, direction & P.O. Box etc.
   */
  line?: string[];

  /**
   * @description Name of city, town etc.
   */
  city?: string;

  /**
   * @description District name (aka county)
   */
  district?: string;

  /**
   * @description Sub-unit of country (abbreviations ok)
   */
  state?: string;

  /**
   * @description Postal code for area
   */
  postalCode?: string;

  /**
   * @description Country (e.g. can be ISO 3166 2 or 3-letter code)
   */
  country?: string;

  /**
   * @description Time period when address was/is in use
   */
  period?: IPeriod;

  /**
   * Extensions for use
   */
  _use?: IElement;

  /**
   * Extensions for type
   */
  _type?: IElement;

  /**
   *
   */
  _text?: IElement;

  /**
   * Extensions for line
   */
  _line?: IElement[];

  /**
   * Extensions for city
   */
  _city?: IElement;

  /**
   * Extensions for district
   */
  _district?: IElement;

  /**
   * Extensions for state
   */
  _state?: IElement;

  /**
   * Extensions for postalCode
   */
  _postalCode?: IElement;

  /**
   * Extensions for country
   */
  _country?: IElement;
}
