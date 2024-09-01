import { IAttachment, IElement } from 'fhirtypes/dist/r4';
import { Attachment } from '../../models';
import { IBuildable } from '../base/IBuildable';
import { UnderscoreKeys } from '../base/resource-type-map.interface';
import { ElementBuilder } from '../base/ElementBuilder';

type PrimitiveExtensionFields = keyof Pick<IAttachment, UnderscoreKeys<IAttachment>>;

interface IAttachmentBuilder extends IBuildable<Attachment> {
  setContentType(contentType: string): this;
  setLanguage(language: string): this;
  setData(data: string): this;
  setUrl(url: string): this;
  setTitle(title: string): this;
  setCreation(creation: string): this;
  setHash(hash: string): this;
  setSize(size: number): this;
}

export class AttachmentBuilder extends ElementBuilder implements IAttachmentBuilder {
  private readonly attachment: Attachment;

  constructor() {
    super();
    this.attachment = new Attachment();
  }

  addPrimitiveExtension(param: PrimitiveExtensionFields, extension: IElement): this {
    this.attachment[param] = extension;
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
    return Object.assign(this.attachment, super.build());
  }
}
