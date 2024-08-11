import { IResourceBuilder } from './IResourceBuilder';

export abstract class ResourceBuilder implements IResourceBuilder {
  abstract setId(id: string): this;
  abstract setMeta(meta: any): this;
  abstract setImplicitRules(implicitRules: string): this;
  abstract setLanguage(language: string): this;
}
