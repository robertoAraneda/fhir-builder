import { Element } from '../base';
import { INarrative, NarrativeStatusType } from 'fhirtypes/dist/r4';
import { ValReturnType } from '../../validators/base/datatype.validator';
import { NarrativeBuilder } from '../../builders';
import { conformanceValidation } from '../../validators/base/object.validator';

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

  validate(): ValReturnType {
    const { error } = conformanceValidation(this, 'Narrative');
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
