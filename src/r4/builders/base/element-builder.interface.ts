import { IExtension } from 'fhirtypes/dist/r4';

export interface IElementBuilder {
  setId(id: string): this;
  addExtension(extension: IExtension): this;
}
