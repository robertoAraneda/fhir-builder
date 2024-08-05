import { NarrativeStatusType } from 'fhirtypes/dist/r4';
import { ElementBuilder } from '../../../core/r4/builders/base/element.builder';
import { Narrative } from '../../models';
import { IBuildable } from '../../../core/r4/interfaces';
import { IElementBuilder } from '../../../core/r4/interfaces/element-builder.interface';

interface INarrativeBuilder extends IBuildable<Narrative>, IElementBuilder {
  setDiv(div: string): this;
  setStatus(status: NarrativeStatusType): this;
}

export class NarrativeBuilder extends ElementBuilder implements INarrativeBuilder {
  private readonly narrative: Narrative;

  constructor() {
    super();
    this.narrative = new Narrative();
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
    Object.assign(this.narrative, super.entity());
    return this.narrative;
  }
}
