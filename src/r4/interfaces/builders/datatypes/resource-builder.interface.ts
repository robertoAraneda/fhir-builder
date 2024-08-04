import { IResource } from 'fhirtypes/dist/r4';

export interface IResourceBuilder {
  setId(id: string): this;
  setMeta(meta: any): this;
  setImplicitRules(implicitRules: string): this;
  setLanguage(language: string): this;
  entity(): IResource;
}
