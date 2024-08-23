import { IElement, IMeta, IResource } from 'fhirtypes/dist/r4';
import { Buildable } from './buildable.model';

export abstract class Resource extends Buildable<any> implements IResource {
  id?: string;

  language?: string;
  implicitRules?: string;

  meta?: IMeta;

  _implicitRules?: IElement;
  _language?: IElement;
}
