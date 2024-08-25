import { IElement } from 'fhirtypes/dist/r4';

export interface IBuildable<T> {
  fromJSON?(json: unknown): this;
  /*
   * @description Add an extension to the element
   */
  addPrimitiveExtension?(param: string, extension: IElement): this;
  build(): T;
}
