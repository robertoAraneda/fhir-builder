import { ElementBuilder } from './element.builder';
import { IAttachment, IElement } from 'fhirtypes/dist/r4';
import { IAttachmentBuilder } from '../../interfaces';
import { AttachmentParamExtensionType } from '../../types';
import { Attachment } from '../../models';

export class AttachmentBuilder extends ElementBuilder implements IAttachmentBuilder {
  private readonly attachment: IAttachment;

  constructor() {
    super();
    this.attachment = {} as IAttachment;
  }

  addParamExtension(param: AttachmentParamExtensionType, extension: IElement): this {
    this.attachment[`_${param}`] = extension;
    return this;
  }

  setContentType(contentType: string): this {
    this.attachment.contentType = contentType;
    return this;
  }

  setLanguage(language: string): this {
    this.attachment.language = language;
    return this;
  }

  setData(data: string): this {
    this.attachment.data = data;
    return this;
  }

  setUrl(url: string): this {
    this.attachment.url = url;
    return this;
  }

  setSize(size: number): this {
    this.attachment.size = size;
    return this;
  }

  setHash(hash: string): this {
    this.attachment.hash = hash;
    return this;
  }

  setTitle(title: string): this {
    this.attachment.title = title;
    return this;
  }

  setCreation(creation: string): this {
    this.attachment.creation = creation;
    return this;
  }

  build(): Attachment {
    Object.assign(this.attachment, { ...super.entity() });
    return new Attachment(this.attachment);
  }
}
