import { IExtension, NarrativeStatusType } from 'fhirtypes/dist/r4';
import { Narrative } from '../../models';
import { IBuildable } from '../base/buildable.interface';
import { IElementBuilder } from '../base/element-builder.interface';

interface INarrativeBuilder extends IElementBuilder, IBuildable<Narrative> {
  // Narrative properties
  setDiv(div: string): this;
  setStatus(status: NarrativeStatusType): this;
}

export class NarrativeBuilder implements INarrativeBuilder {
  private readonly narrative: Narrative;

  constructor() {
    this.narrative = new Narrative();
  }

  setId(id: string): this {
    this.narrative.id = id;
    return this;
  }

  addExtension(extension: IExtension): this {
    this.narrative.extension = this.narrative.extension || [];
    this.narrative.extension.push(extension);
    return this;
  }

  setStatus(status: NarrativeStatusType): this {
    this.narrative.status = status;
    return this;
  }

  setDiv(div: string): this {
    this.narrative.div = div;
    return this;
  }

  build(): Narrative {
    return this.narrative;
  }
}
