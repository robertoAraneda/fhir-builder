import { ICoding, IElement, IMeta } from 'fhirtypes/dist/r4';
import { Element } from '../base/element.model';
import { MetaBuilder } from '../../builders/datatypes/meta.builder';
import { IGenericObject } from '../../interfaces';
import { ValReturnType } from '../../validators/base/datatype.validator';
import { IdentifierValidator } from '../../validators/datatypes/identifier.validator';
import { MetaValidator } from '../../validators/datatypes/meta.validator';

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

  private isValid(args: IGenericObject): ValReturnType {
    try {
      MetaValidator(args);
      return { error: null };
    } catch (e: any) {
      return { error: e.message };
    }
  }

  validate(): ValReturnType {
    const { error } = this.isValid(this);
    return { error };
  }

  static builder(): MetaBuilder {
    return new MetaBuilder();
  }

  constructor(args: IMeta) {
    super();
    Object.assign(this, args);
  }
}
