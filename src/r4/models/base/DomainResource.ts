import { IExtension, INarrative } from 'fhirtypes/dist/r4';
import { Resource } from './Resource';
import { ResourceTypesValues } from '../../builders/base/resource-type-map.interface';

export abstract class DomainResource extends Resource {
  // TODO change any to Resource
  contained?: ResourceTypesValues[];
  extension?: IExtension[];
  modifierExtension?: IExtension[];
  text?: INarrative;
}
