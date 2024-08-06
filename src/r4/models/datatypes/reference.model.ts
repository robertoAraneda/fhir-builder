import { IElement, IIdentifier, IReference } from 'fhirtypes/dist/r4';
import { ReferenceBuilder } from '../../builders';

import { ConformanceValidator } from '../../../core/r4/validators/base';
import { Element } from './element.model';

export class Reference extends Element implements IReference {
  // Reference attributes
  reference: string;
  type: string;
  identifier: IIdentifier;
  display: string;

  // Extensions
  _display: IElement;
  _reference: IElement;
  _type: IElement;

  toJson(): Reference {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `Reference${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `Reference${JSON.stringify(this.toJson())}`;
  }

  validate(): { error: string | null } {
    const { error } = ConformanceValidator(this, 'Reference');
    return { error };
  }

  static builder(): ReferenceBuilder {
    return new ReferenceBuilder();
  }

  constructor(args?: IReference) {
    super();
    Object.assign(this, args);
  }
}
