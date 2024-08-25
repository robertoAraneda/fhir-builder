import { IMeta } from 'fhirtypes/dist/r4';

export interface IResourceBuilder {
  setId(id: string): this;
  setMeta(meta: IMeta): this;
  setImplicitRules(implicitRules: string): this;
  setLanguage(language: string): this;
}
