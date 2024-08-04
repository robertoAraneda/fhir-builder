import { IBuildable } from '../base';
import { Coding } from '../../../models';
import { IElementBuilder } from './element-builder.interface';
import { IElement } from 'fhirtypes/dist/r4';
import { CodingParamExtensionType } from '../../../types';

export interface ICodingBuilder extends IBuildable<Coding>, IElementBuilder {
  addParamExtension(param: CodingParamExtensionType, extension: IElement): this;
  setSystem(value: string): this;
  setVersion(value: string): this;
  setCode(value: string): this;
  setDisplay(value: string): this;
  setUserSelected(value: boolean): this;
}
