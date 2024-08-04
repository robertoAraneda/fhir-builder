import { Element } from '../base/element.model';
import { INarrative, NarrativeStatusType } from 'fhirtypes/dist/r4';
import { IGenericObject } from '../../interfaces';
import { ValReturnType } from '../../validators/base/datatype.validator';
import { NarrativeValidator } from '../../validators/datatypes/narrative.validator';
import { NarrativeBuilder } from '../../builders/datatypes/narrative.builder';

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

  private isValid(args: IGenericObject): ValReturnType {
    try {
      NarrativeValidator(args as INarrative | INarrative[]);
      return { error: null };
    } catch (e: any) {
      return { error: e.message };
    }
  }

  validate(): ValReturnType {
    const { error } = this.isValid(this);
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
