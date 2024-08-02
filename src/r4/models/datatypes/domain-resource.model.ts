import { IDomainResource, IExtension, INarrative } from 'fhirtypes/dist/r4';
import { Resource } from './resource.model';

export abstract class DomainResource extends Resource implements IDomainResource {
  // TODO change any to Resource
  contained?: any[];
  extension?: IExtension[];
  modifierExtension?: IExtension[];
  text?: INarrative;
}
