import { IElement, IExtension } from 'fhirtypes/dist/r4';

export abstract class Element implements IElement {
  id?: string;
  extension?: IExtension[];
}
