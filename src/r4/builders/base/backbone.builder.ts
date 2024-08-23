import { ElementBuilder } from './element.builder';
import { IBackboneElement, IExtension } from 'fhirtypes/dist/r4';
import { IBackboneBuilder } from './backbone-builder.interface';

/**
 * @description Backbone Element Builder
 * @description Base for elements defined inside a resource
 * @see {@link https://hl7.org/fhir/R4/backboneelement.html}
 *
 */
export class BackboneBuilder extends ElementBuilder implements IBackboneBuilder {
  private readonly backbone: IBackboneElement;

  constructor() {
    super();
    this.backbone = {} as IBackboneElement;
  }

  /**
   * @description Extensions that cannot be ignored even if unrecognized
   * @param modifierExtension
   */
  addModifierExtension(modifierExtension: IExtension): this {
    this.backbone.modifierExtension = this.backbone.modifierExtension || [];
    this.backbone.modifierExtension.push(modifierExtension);
    return this;
  }

  /**
   * @description Returns the backbone element
   */
  build(): IBackboneElement {
    return Object.assign(this.backbone, super.build());
  }
}
