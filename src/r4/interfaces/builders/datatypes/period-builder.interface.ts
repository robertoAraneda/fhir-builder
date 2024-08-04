import { IElement } from 'fhirtypes/dist/r4';
import { Period } from '../../../models/datatypes/period.model';
import { IBuildable } from '../base/buildable.interface';
import { IElementBuilder } from './element-builder.interface';

export interface PeriodBuilderInterface extends IBuildable<Period>, IElementBuilder {
  addParamExtension(param: 'start' | 'end', extension: IElement): this;

  setStart(value: string): this;

  setEnd(value: string): this;
}
