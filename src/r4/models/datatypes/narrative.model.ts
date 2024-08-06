import { INarrative, NarrativeStatusType } from 'fhirtypes/dist/r4';
import { ValReturnType } from '../../../core/r4/validators/base/datatype.validator';
import { NarrativeBuilder } from '../../builders';

import { ConformanceValidator } from '../../../core/r4/validators/base';
import { Element } from './element.model';

export class Narrative extends Element implements INarrative {
  status: NarrativeStatusType;
  div: string;

  toJson(): Narrative {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `Narrative${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `Narrative${JSON.stringify(this.toJson())}`;
  }

  validate(): { error: string | null } {
    const { error } = ConformanceValidator(this, 'Narrative');
    return { error };
  }

  static builder(): NarrativeBuilder {
    return new NarrativeBuilder();
  }

  constructor(args?: INarrative) {
    super();
    Object.assign(this, args);
  }
}
