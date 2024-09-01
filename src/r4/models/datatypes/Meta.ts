import { ICoding, IElement, IMeta } from 'fhirtypes/dist/r4';
import { MetaBuilder } from '../../builders';
import { ConformanceValidator } from '../../../core/r4/validators/base';
import { Element } from '../base/Element';
import { IValidatable } from '../base/IValidatable';
import { ISerializable } from '../base/ISerializable';

export class Meta extends Element implements IMeta, IValidatable, ISerializable {
  // Meta Properties
  versionId?: string | number;
  lastUpdated?: string;
  source?: string;
  profile?: string[];
  security?: ICoding[];
  tag?: ICoding[];

  // Meta Extensions
  _versionId?: IElement;
  _lastUpdated?: IElement;
  _source?: IElement;
  _profile?: IElement[];

  toJson() {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `Meta${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `Meta${JSON.stringify(this.toJson())}`;
  }

  validate() {
    return ConformanceValidator('Meta', this);
  }

  constructor(args?: IMeta) {
    super();
    Object.assign(this, args);
  }

  protected builderInstance(): MetaBuilder {
    return new MetaBuilder();
  }

  serialize(): string {
    return JSON.stringify(this.toJson());
  }
}
