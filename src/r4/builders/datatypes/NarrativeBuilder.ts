import { NarrativeStatusType } from 'fhirtypes/dist/r4';
import { Narrative } from '../../models';
import { IBuildable } from '../base/IBuildable';
import { ElementBuilder } from '../base/ElementBuilder';

interface INarrativeBuilder extends IBuildable<Narrative> {
  // Narrative properties
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
    return Object.assign(this.narrative, super.build());
  }
}
