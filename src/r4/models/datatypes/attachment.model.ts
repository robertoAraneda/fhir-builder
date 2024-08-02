import { IAttachment, IElement } from 'fhirtypes/dist/r4';
import { Element } from './element.model';
import { AttachmentBuilder } from '../../builders/datatypes/attachment.builder';
import { CodingValidator } from '../../validators/datatypes/coding.validator';
import { AttachmentValidator } from '../../validators/datatypes/attachment.validator';
import { IGenericObject } from '../../interfaces';

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

  isValid(): { error: string | null } {
    try {
      AttachmentValidator(this);
      return { error: null };
    } catch (e: any) {
      return { error: e.message };
    }
  }

  static builder(): AttachmentBuilder {
    return new AttachmentBuilder();
  }

  static validate(args: IGenericObject): { error: string | null } {
    try {
      AttachmentValidator(args);
      return { error: null };
    } catch (e: any) {
      return { error: e.message };
    }
  }

  constructor(args: IAttachment) {
    super();
    Object.assign(this, args);
  }
}
