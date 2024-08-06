import { ICoding, IElement, IMeta } from 'fhirtypes/dist/r4';
import { MetaBuilder } from '../../builders';
import { ConformanceValidator } from '../../../core/r4/validators/base';
import { Element } from './element.model';

export class Meta extends Element implements IMeta {
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

  toJson(): Meta {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `Meta${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `Meta${JSON.stringify(this.toJson())}`;
  }

  validate(): { error: string | null } {
    const { error } = ConformanceValidator(this, 'Meta');
    return { error };
  }

  static builder(): MetaBuilder {
    return new MetaBuilder();
  }

  constructor(args?: IMeta) {
    super();
    Object.assign(this, args);
  }
}
