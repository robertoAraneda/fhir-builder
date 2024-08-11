import { IExtension, INarrative, IResource } from 'fhirtypes/dist/r4';
import { IResourceBuilder } from './IResourceBuilder';

export interface IDomainResourceBuilder extends IResourceBuilder {
  setText(text: INarrative): this;
  addContained(contained: IResource): this;
  addExtension(extension: IExtension): this;
  addModifierExtension(modifierExtension: IExtension): this;
}
