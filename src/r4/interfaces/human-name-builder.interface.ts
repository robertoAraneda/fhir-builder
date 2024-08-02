import { HumanNameBuilder } from '../builders/datatypes/human-name.builder';
import { BuildableInterface } from './buildable.interface';
import { IElement, IHumanName, IPeriod, NameUseType } from 'fhirtypes/dist/r4';
import { ElementBuilderInterface } from './element-builder.interface';
import { HumanName } from '../models/datatypes/human-name.model';

export type HumanNameParamType = 'use' | 'text' | 'family' | 'given' | 'prefix' | 'suffix';
export type HumanNameMultipleParamType = 'given' | 'prefix' | 'suffix';

export interface HumanNameBuilderInterface extends BuildableInterface<HumanName>, ElementBuilderInterface {
  addParamExtension(param: HumanNameParamType, extension: IElement | IElement[]): this;
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
