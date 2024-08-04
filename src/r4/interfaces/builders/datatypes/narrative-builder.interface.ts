import { IElementBuilder } from './element-builder.interface';
import { Narrative } from '../../../models/datatypes/narrative.model';
import { IBuildable } from '../base/buildable.interface';
import { NarrativeStatusType } from 'fhirtypes/dist/r4';

export interface INarrativeBuilder extends IBuildable<Narrative>, IElementBuilder {
  setDiv(div: string): this;
  setStatus(status: NarrativeStatusType): this;
}
