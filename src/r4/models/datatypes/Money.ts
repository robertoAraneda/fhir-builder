import { Element } from '../base/Element';
import { IMoney } from 'fhirtypes/dist/r4/datatypes';
import { CurrencyCodeType } from 'fhirtypes/dist/r4/types';
import { IElement } from 'fhirtypes/dist/r4/base';
import { IValidatable } from '../base/IValidatable';
import { ISerializable } from '../base/ISerializable';
import { ConformanceValidator } from '../../../core/r4/validators/base';

export class Money extends Element implements IMoney, IValidatable, ISerializable {
  /**
   * @description Numerical value (with implicit precision).
   */
  value?: number;
  /**
   * @description ISO 4217 Currency Code.
   * @descrption 'AED' | 'AFN' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BHD' | 'BIF' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BTN' | 'BWP' | 'BYN' | 'BZD' | 'CAD' | 'CDF' | 'CHF' | 'CLP' | 'CNY' | 'COP' | 'CRC' | 'CUC' | 'CUP' | 'CVE' | 'CZK' | 'DJF' | 'DKK' | 'DOP' | 'DZD' | 'EGP' | 'ERN' | 'ETB' | 'EUR' | 'FJD' | 'FKP' | 'FOK' | 'GBP' | 'GEL' | 'GGP' | 'GHS' | 'GIP' | 'GMD' | 'GNF' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HRK' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'IMP' | 'INR' | 'IQD' | 'IRR' | 'ISK' | 'JEP' | 'JMD' | 'JOD' | 'JPY' | 'KES' | 'KGS' | 'KHR' | 'KID' | 'KMF' | 'KRW' | 'KWD' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'LYD' | 'MAD' | 'MDL' | 'MGA' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MRU' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' |...
   * @see <a href="https://hl7.org/fhir/R4/valueset-currencies.html">CurrencyCode</a>
   */
  currency?: CurrencyCodeType;
  /**
   * @description Extensions for value
   */
  _value?: IElement;

  toJson() {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString() {
    return `Money${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `Money${JSON.stringify(this.toJson())}`;
  }

  validate() {
    return ConformanceValidator('Money', this);
  }

  serialize(): string {
    return JSON.stringify(this.toJson());
  }

  constructor(args?: IMoney) {
    super();
    if (args) Object.assign(this, args);
  }
}
