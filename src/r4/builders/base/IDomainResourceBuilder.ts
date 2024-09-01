import { IExtension, INarrative } from 'fhirtypes/dist/r4';
import { IResourceBuilder } from './IResourceBuilder';
import { ResourceType, ResourceValue } from './resource-type-map.interface';

export interface IDomainResourceBuilder extends IResourceBuilder {
  setText(text: INarrative): this;
  addContained<T extends ResourceType>(type: T, contained: ResourceValue<T>): this;
  addExtension(extension: IExtension): this;
  addModifierExtension(modifierExtension: IExtension): this;
}
