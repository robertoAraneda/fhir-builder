import { ICoding, IElement, IExtension } from 'fhirtypes/dist/r4';
import { Meta } from '../../models';
import { IElementBuilder } from '../base/element-builder.interface';
import { IBuildable } from '../base/buildable.interface';
import { UnderscoreKeys } from '../base/resource-type-map.interface';

type PrimitiveExtensionFields = keyof Pick<Meta, UnderscoreKeys<Meta>>;

interface IMetaBuilder extends IElementBuilder, IBuildable<Meta> {
  setSource(source: string): this;
  setVersionId(versionId: string | number): this;
  setLastUpdated(lastUpdated: string): this;
  addTag(tag: ICoding): this;
  addProfile(profile: string): this;
  addSecurity(security: ICoding): this;
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

  addExtension(extension: IExtension): this {
    this.meta.extension = this.meta.extension || [];
    this.meta.extension.push(extension);
    return this;
  }

  addPrimitiveExtension<T extends PrimitiveExtensionFields>(
    param: T,
    extension: T extends '_profile' ? IElement[] : IElement,
  ): this {
    if (param === '_profile') {
      this.meta[param] = extension as IElement[];
    } else {
      const internalParam = param as Exclude<PrimitiveExtensionFields, '_profile'>;
      this.meta[internalParam] = extension as IElement;
    }

    return this;
  }

  setSource(source: string): this {
    this.meta.source = source;
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
