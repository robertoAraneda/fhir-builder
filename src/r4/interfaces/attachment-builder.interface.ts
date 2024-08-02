import { BuildableInterface } from './buildable.interface';
import { Attachment } from '../models/datatypes/attachment.model';
import { ElementBuilderInterface } from './element-builder.interface';
import { IElement } from 'fhirtypes/dist/r4';

export type AttachmentParamExtensionType =
  | 'contentType'
  | 'creation'
  | 'data'
  | 'hash'
  | 'language'
  | 'title'
  | 'url'
  | 'size';

export interface AttachmentBuilderInterface extends BuildableInterface<Attachment>, ElementBuilderInterface {
  addParamExtension<T extends AttachmentParamExtensionType>(param: T, extension: IElement): this;

  setContentType(contentType: string): this;

  setLanguage(language: string): this;

  setData(data: string): this;

  setUrl(url: string): this;

  setTitle(title: string): this;

  setCreation(creation: string): this;

  setHash(hash: string): this;

  setSize(size: number): this;
}
