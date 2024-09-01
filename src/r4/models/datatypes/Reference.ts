import { IElement, IIdentifier, IReference } from 'fhirtypes/dist/r4';
import { ReferenceBuilder } from '../../builders';

import { ConformanceValidator } from '../../../core/r4/validators/base';
import { Element } from '../base/Element';
import { IValidatable } from '../base/IValidatable';
import { ISerializable } from '../base/ISerializable';

export class Reference extends Element implements IReference, IValidatable, ISerializable {
  // Reference attributes
  reference: string;
  type: string;
  identifier: IIdentifier;
  display: string;

  // Extensions
  _display: IElement;
  _reference: IElement;
  _type: IElement;

  toJson() {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `Reference${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `Reference${JSON.stringify(this.toJson())}`;
  }

  validate() {
    return ConformanceValidator('Reference', this);
  }

  constructor(args?: IReference) {
    super();
    Object.assign(this, args);
  }

  protected builderInstance(): ReferenceBuilder {
    return new ReferenceBuilder();
  }

  serialize(): string {
    return JSON.stringify(this.toJson());
  }
}
