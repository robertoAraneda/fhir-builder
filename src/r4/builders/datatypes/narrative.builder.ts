import { IExtension, NarrativeStatusType } from 'fhirtypes/dist/r4';
import { Narrative } from '../../models';

interface INarrativeBuilder {
  // Element properties
  setId(id: string): this;
  addExtension(extension: IExtension): this;
  setMultipleExtension(extension: IExtension[]): this;

  // Narrative properties
  setDiv(div: string): this;
  setStatus(status: NarrativeStatusType): this;
  build(): Narrative;
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

  setMultipleExtension(extension: IExtension[]): this {
    this.narrative.extension = extension;
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
