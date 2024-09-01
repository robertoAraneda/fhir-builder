import { INarrative, NarrativeStatusType } from 'fhirtypes/dist/r4';
import { NarrativeBuilder } from '../../builders';

import { ConformanceValidator } from '../../../core/r4/validators/base';
import { Element } from '../base/Element';
import { IValidatable } from '../base/IValidatable';
import { ISerializable } from '../base/ISerializable';

export class Narrative extends Element implements INarrative, IValidatable, ISerializable {
  status: NarrativeStatusType;
  div: string;

  toJson() {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `Narrative${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `Narrative${JSON.stringify(this.toJson())}`;
  }

  validate() {
    return ConformanceValidator('Narrative', this);
  }

  constructor(args?: INarrative) {
    super();
    Object.assign(this, args);
  }

  protected builderInstance(): NarrativeBuilder {
    return new NarrativeBuilder();
  }

  serialize(): string {
    return JSON.stringify(this.toJson());
  }
}
