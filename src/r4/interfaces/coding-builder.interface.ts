import { BuildableInterface } from './buildable.interface';
import { Coding } from '../models';
import { ElementBuilderInterface } from './element-builder.interface';
import { IElement } from 'fhirtypes/dist/r4';

export type ParamExtensionType = 'system' | 'version' | 'code' | 'display' | 'userSelected';

export interface CodingBuilderInterface extends BuildableInterface<Coding>, ElementBuilderInterface {
  setSystem: (value: string) => this;
  setVersion: (value: string) => this;
  setCode: (value: string) => this;
  setDisplay: (value: string) => this;
  setUserSelected: (value: boolean) => this;
  addParamExtension: <T extends ParamExtensionType>(param: T, extension: IElement) => this;
}
