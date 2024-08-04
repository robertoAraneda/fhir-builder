import { NarrativeStatusType } from 'fhirtypes/dist/r4';
import { IElementBuilder } from './element-builder.interface';
import { Narrative } from '../../../models';
import { IBuildable } from '../base';

export interface INarrativeBuilder extends IBuildable<Narrative>, IElementBuilder {
  setDiv(div: string): this;
  setStatus(status: NarrativeStatusType): this;
}
