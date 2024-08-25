import { IElementBuilder } from './element-builder.interface';
import { IExtension } from 'fhirtypes/dist/r4';

export interface IBackboneBuilder extends IElementBuilder {
  addModifierExtension(modifierExtension: IExtension): this;
}
