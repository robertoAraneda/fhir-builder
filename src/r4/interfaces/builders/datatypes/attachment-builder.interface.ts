import { IElementBuilder } from './element-builder.interface';
import { IElement } from 'fhirtypes/dist/r4';
import { Attachment } from '../../../models';
import { IBuildable } from '../base';
import { AttachmentParamExtensionType } from '../../../types';

export interface IAttachmentBuilder extends IBuildable<Attachment>, IElementBuilder {
  addParamExtension(param: AttachmentParamExtensionType, extension: IElement): this;
  setContentType(contentType: string): this;
  setLanguage(language: string): this;
  setData(data: string): this;
  setUrl(url: string): this;
  setTitle(title: string): this;
  setCreation(creation: string): this;
  setHash(hash: string): this;
  setSize(size: number): this;
}
