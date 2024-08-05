import { INarrative, NarrativeStatusType } from 'fhirtypes/dist/r4';
import { ElementBuilder } from '../base/element.builder';
import { INarrativeBuilder } from '../../interfaces';
import { Narrative } from '../../models';

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
