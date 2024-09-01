import { IExtension } from 'fhirtypes/dist/r4';
import { Element } from './Element';

export abstract class BackboneElement extends Element {
  modifierExtension?: IExtension[];
}
