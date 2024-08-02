import { IElement, IExtension } from 'fhirtypes/dist/r4';

export abstract class Element implements IElement {
  id?: string;
  extension?: IExtension[];
  abstract toJson(): any;
  abstract toString(): string;
  abstract toPrettyString(): string;
}
