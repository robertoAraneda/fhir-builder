import { IElement, IExtension } from 'fhirtypes/dist/r4';
import { AttachmentParamExtensionType } from '../../types';
import { Attachment } from '../../models';

interface IAttachmentBuilder {
  // Element properties
  setId(id: string): this;
  addExtension(extension: IExtension): this;
  setMultipleExtension(extension: IExtension[]): this;

  // Attachment properties
  addParamExtension(param: AttachmentParamExtensionType, extension: IElement): this;
  setContentType(contentType: string): this;
  setLanguage(language: string): this;
  setData(data: string): this;
  setUrl(url: string): this;
  setTitle(title: string): this;
  setCreation(creation: string): this;
  setHash(hash: string): this;
  setSize(size: number): this;

  // Build
  build(): Attachment;
}

export class AttachmentBuilder implements IAttachmentBuilder {
  private readonly attachment: Attachment;

  constructor() {
    this.attachment = new Attachment();
  }

  setId(id: string): this {
    this.attachment.id = id;
    return this;
  }

  setMultipleExtension(extension: IExtension[]): this {
    this.attachment.extension = extension;
    return this;
  }

  addExtension(extension: IExtension): this {
    this.attachment.extension = this.attachment.extension || [];
    this.attachment.extension.push(extension);
    return this;
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
    return this.attachment;
  }
}
