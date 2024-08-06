import { ICoding, IElement, IExtension } from 'fhirtypes/dist/r4';
import { MetaParamsExtensionType } from '../../types';
import { Meta } from '../../models';

interface IMetaBuilder {
  // Element properties
  setId(id: string): this;
  addExtension(extension: IExtension): this;
  setMultipleExtension(extension: IExtension[]): this;

  // Meta properties
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

  // Build
  build(): Meta;
}

export class MetaBuilder implements IMetaBuilder {
  private readonly meta: Meta;

  constructor() {
    this.meta = new Meta();
  }

  setId(id: string): this {
    this.meta.id = id;
    return this;
  }

  setMultipleExtension(extension: IExtension[]): this {
    this.meta.extension = extension;
    return this;
  }

  addExtension(extension: IExtension): this {
    this.meta.extension = this.meta.extension || [];
    this.meta.extension.push(extension);
    return this;
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
    return this.meta;
  }
}
