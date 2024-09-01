import { IResourceBuilder } from './IResourceBuilder';
import { IMeta, IResource } from 'fhirtypes/dist/r4';

export class ResourceBuilder implements IResourceBuilder {
  private readonly resource: IResource;
  constructor() {
    this.resource = {} as IResource;
  }
  setId(id: string): this {
    this.resource.id = id;
    return this;
  }
  setMeta(meta: IMeta): this {
    this.resource.meta = meta;
    return this;
  }
  setImplicitRules(implicitRules: string): this {
    this.resource.implicitRules = implicitRules;
    return this;
  }
  setLanguage(language: string): this {
    this.resource.language = language;
    return this;
  }

  build(): IResource {
    return JSON.parse(JSON.stringify(this.resource));
  }
}
