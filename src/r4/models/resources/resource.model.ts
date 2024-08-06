import { IElement, IMeta, IResource } from 'fhirtypes/dist/r4';

export abstract class Resource implements IResource {
  id?: number | string;

  language?: string;
  implicitRules?: string;

  meta?: IMeta;

  _implicitRules?: IElement;
  _language?: IElement;

  abstract toJson(): any;
  abstract toString(): string;
  abstract toPrettyString(): string;
}