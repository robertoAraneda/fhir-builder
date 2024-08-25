import { ICoding, IElement } from 'fhirtypes/dist/r4';
import { Meta } from '../../models';
import { IBuildable } from '../base/buildable.interface';
import { UnderscoreKeys } from '../base/resource-type-map.interface';
import { ElementBuilder } from '../base/element.builder';

type PrimitiveExtensionFields = keyof Pick<Meta, UnderscoreKeys<Meta>>;

interface IMetaBuilder extends IBuildable<Meta> {
  setSource(source: string): this;
  setVersionId(versionId: string | number): this;
  setLastUpdated(lastUpdated: string): this;
  addTag(tag: ICoding): this;
  addProfile(profile: string): this;
  addSecurity(security: ICoding): this;
}

export class MetaBuilder extends ElementBuilder implements IMetaBuilder {
  private readonly meta: Meta;

  constructor() {
    super();
    this.meta = new Meta();
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
    return Object.assign(this.meta, super.build());
  }
}
