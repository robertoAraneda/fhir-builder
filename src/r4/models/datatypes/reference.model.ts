import { IElement, IIdentifier, IReference } from 'fhirtypes/dist/r4';
import { Element } from '../base/element.model';
import { ReferenceBuilder } from '../../builders/datatypes/reference.builder';
import { DatatypeValidator, ValReturnType } from '../../validators/base/datatype.validator';
import { IGenericObject } from '../../interfaces';
import { PeriodValidator } from '../../validators/datatypes/period.validator';
import { ReferenceValidator } from '../../validators/datatypes/reference.validator';

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

  private isValid(args: IGenericObject): ValReturnType {
    try {
      ReferenceValidator(args);
      return { error: null };
    } catch (e: any) {
      return { error: e.message };
    }
  }

  validate(): ValReturnType {
    const { error } = this.isValid(this);
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
