import { IAttachment, IElement } from 'fhirtypes/dist/r4';
import { AttachmentBuilder } from '../../builders';
import { ConformanceValidator } from '../../../core/r4/validators/base';
import { Element } from '../base/Element';
import { IValidatable } from '../base/IValidatable';
import { ISerializable } from '../base/ISerializable';

export class Attachment extends Element implements IAttachment, IValidatable, ISerializable {
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

  toJson() {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `Attachment${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `Attachment${JSON.stringify(this.toJson())}`;
  }

  validate() {
    return ConformanceValidator('Attachment', this);
  }

  constructor(args?: IAttachment) {
    super();
    Object.assign(this, args);
  }

  protected builderInstance(): AttachmentBuilder {
    return new AttachmentBuilder();
  }

  serialize(): string {
    return JSON.stringify(this.toJson());
  }
}
