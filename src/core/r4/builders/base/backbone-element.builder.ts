import { ElementBuilder } from './element.builder';
import { IBackboneElement, IExtension } from 'fhirtypes/dist/r4';
import { IBackboneElementBuilder } from '../../interfaces/backbone-element-builder.interface';

export class BackboneElementBuilder extends ElementBuilder implements IBackboneElementBuilder {
  private readonly backboneElement: IBackboneElement;

  constructor() {
    super();
    this.backboneElement = {} as IBackboneElement;
  }

  setMultipleModifierExtension(modifierExtension: IExtension[]): this {
    this.backboneElement.modifierExtension = modifierExtension;
    return this;
  }

  addModifierExtension(modifierExtension: IExtension): this {
    this.backboneElement.modifierExtension = this.backboneElement.modifierExtension || [];
    this.backboneElement.modifierExtension.push(modifierExtension);
    return this;
  }

  entity(): IBackboneElement {
    return {
      ...this.backboneElement,
      ...super.entity(),
    };
  }
}
