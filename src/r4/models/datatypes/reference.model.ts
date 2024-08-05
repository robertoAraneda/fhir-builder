import { IElement, IIdentifier, IReference } from 'fhirtypes/dist/r4';
import { Element } from '../../../core/r4/models/base';
import { ReferenceBuilder } from '../../builders';
import { ValReturnType } from '../../../core/r4/validators/base/datatype.validator';

import { ConformanceValidator } from '../../../core/r4/validators/base/conformance.validator';

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

  validate(): ValReturnType {
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
