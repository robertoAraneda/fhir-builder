import { IElement, IIdentifier, IReference } from 'fhirtypes/dist/r4';
import { Element } from './element.model';
import { ReferenceBuilder } from '../../builders/datatypes/reference.builder';
import { ReferenceValidator } from '../../validators/datatypes/reference.validator';
import { IGenericObject } from '../../interfaces';
import { CodeableConceptValidator } from '../../validators/datatypes/codeable-concept.validator';

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

  isValid(): { error?: string } {
    try {
      ReferenceValidator(this);
      return { error: undefined };
    } catch (e: any) {
      return { error: e.message };
    }
  }

  static builder(): ReferenceBuilder {
    return new ReferenceBuilder();
  }

  static validate(args: IGenericObject): { error: string | null } {
    try {
      ReferenceValidator(args);
      return { error: null };
    } catch (e: any) {
      return { error: e.message };
    }
  }

  constructor(args: IReference) {
    super();
    Object.assign(this, args);
  }
}
