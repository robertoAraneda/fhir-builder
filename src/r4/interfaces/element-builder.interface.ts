import { IExtension } from 'fhirtypes/dist/r4';

export interface ElementBuilderInterface {
  setId(id: string): this;
  addExtension(extension: IExtension): this;
  setMultipleExtension(extension: IExtension[]): this;
}
