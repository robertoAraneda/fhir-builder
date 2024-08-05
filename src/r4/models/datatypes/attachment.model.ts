import { IAttachment, IElement } from 'fhirtypes/dist/r4';
import { Element } from '../../../core/r4/models/base';
import { AttachmentBuilder } from '../../builders';
import { ValReturnType } from '../../../core/r4/validators/base/datatype.validator';

import { ConformanceValidator } from '../../../core/r4/validators/base/conformance.validator';

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

  validate(): ValReturnType {
    const { error } = ConformanceValidator(this, 'Attachment');
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
