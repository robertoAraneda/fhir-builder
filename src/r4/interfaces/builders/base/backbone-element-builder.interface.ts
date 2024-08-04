import { IExtension } from 'fhirtypes/dist/r4';

export interface IBackboneElementBuilder {
  setMultipleModifierExtension(modifierExtension: IExtension[]): this;
  addModifierExtension(modifierExtension: IExtension): this;
}
