import { IAge } from 'fhirtypes/dist/r4';
import { ISerializable, IValidatable } from '../base';
import { QuantityComparatorType } from 'fhirtypes/dist/r4/types';
import { IElement } from 'fhirtypes/dist/r4/base';
import { ConformanceValidator } from '../../../core/r4/validators/base';

export class Age implements IAge, ISerializable, IValidatable {
  /**
   * @description The value of the measured amount. The value includes an implicit precision in the presentation of the value.
   */
  value?: number;
  /**
   * @description How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is "<" , then the real value is < stated value.
   * @description < | <= | >= | >
   * @see <a href="https://hl7.org/fhir/R4/valueset-quantity-comparator.html">QuantityComparator</a>
   */
  comparator?: QuantityComparatorType;
  /**
   * @description A human-readable form of the unit.
   */
  unit?: string;
  /**
   * @description The identification of the system that provides the coded form of the unit.
   */
  system?: string;
  /**
   * @description A computer processable form of the unit in some unit representation system.
   */
  code?: string;
  /**
   * @description Extension for value
   */
  _value?: IElement;
  /**
   * @description Extension for comparator
   */
  _comparator?: IElement;
  /**
   * @description Extension for unit
   */
  _unit?: IElement;
  /**
   * @description Extension for system
   */
  _system?: IElement;
  /**
   * @description Extension for code
   */
  _code?: IElement;

  toJson(): Record<string, any> {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `Address${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `Address${JSON.stringify(this.toJson())}`;
  }

  serialize(): string {
    return JSON.stringify(this.toJson());
  }

  validate() {
    return ConformanceValidator('Address', this);
  }

  constructor(age: IAge) {
    this.value = age.value;
    this.comparator = age.comparator;
    this.unit = age.unit;
    this.system = age.system;
    this.code = age.code;
    this._value = age._value;
    this._comparator = age._comparator;
    this._unit = age._unit;
    this._system = age._system;
    this._code = age._code;
  }
}
