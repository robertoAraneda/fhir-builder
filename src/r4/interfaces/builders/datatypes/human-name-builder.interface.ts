import { IElement, IPeriod, NameUseType } from 'fhirtypes/dist/r4';
import { IBuildable } from '../base';
import { IElementBuilder } from './element-builder.interface';
import { HumanName } from '../../../models';
import { HumanNameParamType as Type, HumanNameArrayParamType as ArrayType } from '../../../types';

export interface IHumanNameBuilder extends IBuildable<HumanName>, IElementBuilder {
  addParamExtension<T extends Type>(param: T, extension: T extends ArrayType ? IElement[] : IElement): this;
  setUse(value: NameUseType): this;
  setText(value: string): this;
  setFamily(value: string): this;
  addGiven(value: string): this;
  setMultipleGiven(value: string[]): this;
  addPrefix(value: string): this;
  setMultiplePrefix(value: string[]): this;
  addSuffix(value: string): this;
  setMultipleSuffix(value: string[]): this;
  setPeriod(value: IPeriod): this;
}
