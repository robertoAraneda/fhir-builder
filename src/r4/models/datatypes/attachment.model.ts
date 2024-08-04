import { IAttachment, IElement } from 'fhirtypes/dist/r4';
import { Element } from '../base/element.model';
import { AttachmentBuilder } from '../../builders/datatypes/attachment.builder';
import { DatatypeValidator, ValReturnType } from '../../validators/base/datatype.validator';
import { IGenericObject } from '../../interfaces';
import { AddressValidator } from '../../validators/datatypes/address.validator';
import { AttachmentValidator } from '../../validators/datatypes/attachment.validator';

export class Attachment extends Element implements IAttachment {
  contentType?: string;
  data?: string;
  language?: string;
  url?: string;
  size?: number;
  hash?: string;
  title?: string;
  creation?: string;
  _contentType?: IElement;
  _creation?: IElement;
  _data?: IElement;
  _hash?: IElement;
  _language?: IElement;
  _size?: IElement;
  _title?: IElement;
  _url?: IElement;

  toJson(): Attachment {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `Attachment${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `Attachment${JSON.stringify(this.toJson())}`;
  }

  private isValid(args: IGenericObject): ValReturnType {
    try {
      AttachmentValidator(args);
      return { error: null };
    } catch (e: any) {
      return { error: e.message };
    }
  }

  validate(): ValReturnType {
    const { error } = this.isValid(this);
    return { error };
  }

  static builder(): AttachmentBuilder {
    return new AttachmentBuilder();
  }

  constructor(args?: IAttachment) {
    super();
    Object.assign(this, args);
  }
}
