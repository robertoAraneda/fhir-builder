import { ICoding, IElement } from 'fhirtypes/dist/r4';
import { IElementBuilder } from './element-builder.interface';
import { IBuildable } from '../base';
import { Meta } from '../../../models';
import { MetaParamsExtensionType } from '../../../types';

export interface IMetaBuilder extends IBuildable<Meta>, IElementBuilder {
  addParamExtension(param: MetaParamsExtensionType, extension: IElement): this;
  setSource(source: string): this;
  setVersionId(versionId: string | number): this;
  setLastUpdated(lastUpdated: string): this;
  addTag(tag: ICoding): this;
  addProfile(profile: string): this;
  addSecurity(security: ICoding): this;
  setMultipleTag(tag: ICoding[]): this;
  setMultipleProfile(profile: string[]): this;
  setMultipleSecurity(security: ICoding[]): this;
}
