import { IElementBuilder } from './IElementBuilder';
import { IExtension } from 'fhirtypes/dist/r4';

export abstract class ElementBuilder implements IElementBuilder {
  abstract setId(id: string): this;
  abstract addExtension(extension: IExtension): this;
}
