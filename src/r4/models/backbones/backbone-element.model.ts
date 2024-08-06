import { IExtension } from 'fhirtypes/dist/r4';
import { Element } from '../datatypes/element.model';

export abstract class BackboneElement extends Element {
  modifierExtension?: IExtension[];
}
