import { IBuildable } from '../base/buildable.interface';
import { Coding } from '../../../models';
import { IElementBuilder } from './element-builder.interface';
import { IElement } from 'fhirtypes/dist/r4';

export type ParamExtensionType = 'system' | 'version' | 'code' | 'display' | 'userSelected';

export interface CodingBuilderInterface extends IBuildable<Coding>, IElementBuilder {
  setSystem: (value: string) => this;
  setVersion: (value: string) => this;
  setCode: (value: string) => this;
  setDisplay: (value: string) => this;
  setUserSelected: (value: boolean) => this;
  addParamExtension: <T extends ParamExtensionType>(param: T, extension: IElement) => this;
}
