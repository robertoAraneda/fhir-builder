import { ElementBuilder } from '../../../core/r4/builders/base/element.builder';
import { ICoding, IElement } from 'fhirtypes/dist/r4';
import { MetaParamsExtensionType } from '../../../core/r4/types';
import { Meta } from '../../models';
import { IBuildable } from '../../../core/r4/interfaces';
import { IElementBuilder } from '../../../core/r4/interfaces/element-builder.interface';

interface IMetaBuilder extends IBuildable<Meta>, IElementBuilder {
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

export class MetaBuilder extends ElementBuilder implements IMetaBuilder {
  private readonly meta: Meta;

  constructor() {
    super();

    this.meta = new Meta();
  }

  addParamExtension<T extends MetaParamsExtensionType>(param: T, extension: IElement): this {
    this.meta[`_${param}`] = extension as IElement;

    return this;
  }

  setSource(source: string): this {
    this.meta.source = source;
    return this;
  }

  setMultipleTag(tag: ICoding[]): this {
    this.meta.tag = tag;
    return this;
  }

  setVersionId(versionId: string | number): this {
    this.meta.versionId = versionId;
    return this;
  }

  setLastUpdated(lastUpdated: string): this {
    this.meta.lastUpdated = lastUpdated;
    return this;
  }

  setMultipleProfile(profile: string[]): this {
    this.meta.profile = profile;
    return this;
  }

  setMultipleSecurity(security: ICoding[]): this {
    this.meta.security = security;
    return this;
  }

  addTag(tag: ICoding): this {
    this.meta.tag = this.meta.tag || [];
    this.meta.tag.push(tag);
    return this;
  }

  addProfile(profile: string): this {
    this.meta.profile = this.meta.profile || [];
    this.meta.profile.push(profile);
    return this;
  }

  addSecurity(security: ICoding): this {
    this.meta.security = this.meta.security || [];
    this.meta.security.push(security);
    return this;
  }

  build(): Meta {
    Object.assign(this.meta, { ...super.entity() });
    return this.meta;
  }
}
