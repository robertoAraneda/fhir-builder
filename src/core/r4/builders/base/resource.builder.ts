import { IResource } from 'fhirtypes/dist/r4';

interface IResourceBuilder {
  setId(id: string): this;
  setMeta(meta: any): this;
  setImplicitRules(implicitRules: string): this;
  setLanguage(language: string): this;
  entity(): IResource;
}

export class ResourceBuilder implements IResourceBuilder {
  private readonly resource: IResource;

  constructor() {
    this.resource = {} as IResource;
  }

  setId(id: string): this {
    this.resource.id = id;
    return this;
  }

  setMeta(meta: any): this {
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

  entity(): IResource {
    return {
      ...this.resource,
    };
  }
}
