import { IExtension, INarrative, IResource } from 'fhirtypes/dist/r4';

export interface IDomainResourceBuilder {
  setText(text: INarrative): this;
  addContained(contained: IResource): this;
  setMultipleContained(contained: IResource[]): this;
  addExtension(extension: IExtension): this;
  setMultipleExtension(extension: IExtension[]): this;
  addModifierExtension(modifierExtension: IExtension): this;
  setMultipleModifierExtension(modifierExtension: IExtension[]): this;
}
