import { ICodeableConcept, IElement, IRepeat, ITiming } from 'fhirtypes/dist/r4';
import { ConformanceValidator } from '../../../core/r4/validators/base';
import { TimingBuilder } from '../../builders';
import { BackboneElement, IValidatable, ISerializable } from '../base';

export class Timing extends BackboneElement implements ITiming, IValidatable, ISerializable {
  /**
   * @description Identifies specific times when the event occurs.
   */
  event?: string[];
  /**
   * @description A set of rules that describe when the event is scheduled.
   */
  repeat?: IRepeat;
  /**
   * @description A code for the timing schedule (or just text in code.text).
   */
  code?: ICodeableConcept;
  /**
   * @description Extensions for event
   */
  _event?: IElement[];

  toJson() {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `Timing${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `Timing${JSON.stringify(this.toJson())}`;
  }

  validate() {
    return ConformanceValidator('Timing', this);
  }

  constructor(args?: ITiming) {
    super();
    if (args) Object.assign(this, args);
  }

  protected builderInstance(): TimingBuilder {
    return new TimingBuilder();
  }

  serialize(): string {
    return JSON.stringify(this.toJson());
  }
}
