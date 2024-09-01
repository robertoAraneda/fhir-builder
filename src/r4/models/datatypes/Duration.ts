import { Element } from '../base/Element';
import { IDuration, IElement, QuantityComparatorType } from 'fhirtypes/dist/r4';
import { IValidatable } from '../base/IValidatable';
import { ISerializable } from '../base/ISerializable';
import { DurationBuilder } from '../../builders';
import { ConformanceValidator } from '../../../core/r4/validators/base';

export class Duration extends Element implements IDuration, IValidatable, ISerializable {
  /**
   * @description The value of the measured amount. The value includes an implicit precision in the presentation of the value.
   */
  value?: number;
  /**
   * @description How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is "<" , then the real value is < stated value.
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
   * @description Extensions for value
   */
  _value?: IElement;
  /**
   * @description Extensions for comparator
   */
  _comparator?: IElement;
  /**
   * @description Extensions for unit
   */
  _unit?: IElement;
  /**
   * @description Extensions for system
   */
  _system?: IElement;
  /**
   * @description Extensions for code
   */
  _code?: IElement;

  toJson(): any {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return JSON.stringify(this.toJson(), null, 2);
  }

  toString(): string {
    return JSON.stringify(this.toJson());
  }

  constructor(args?: IDuration) {
    super();
    if (args) {
      Object.assign(this, args);
    }
  }

  protected builderInstance(): DurationBuilder {
    return new DurationBuilder();
  }

  serialize(): string {
    return JSON.stringify(this.toJson());
  }

  validate() {
    return ConformanceValidator('Duration', this);
  }
}
