import { ICodeableConcept, IdentifierUseType, IElement, IPeriod, IReference } from 'fhirtypes/dist/r4';
import { IElementBuilder } from './element-builder.interface';
import { Identifier } from '../../../models';
import { IBuildable } from '../base';

export interface IIdentifierBuilder extends IBuildable<Identifier>, IElementBuilder {
  addParamExtension(param: 'use' | 'system' | 'value', extension: IElement): this;
  setType(value: ICodeableConcept): this;
  setUse(value: IdentifierUseType): this;
  setSystem(value: string): this;
  setValue(value: string): this;
  setPeriod(value: IPeriod): this;
  setAssigner(value: IReference): this;
}
