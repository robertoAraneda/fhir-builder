import { IElement } from 'fhirtypes/dist/r4';
import { IElementBuilder } from './element-builder.interface';
import { Period } from '../../../models';

export interface IPeriodBuilder extends IElementBuilder {
  addParamExtension(param: 'start' | 'end', extension: IElement): this;
  setStart(value: string): this;
  setEnd(value: string): this;
  build(): Period;
}
