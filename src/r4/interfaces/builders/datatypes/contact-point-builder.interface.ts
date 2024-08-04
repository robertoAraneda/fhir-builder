import { ContactPointSystemType, ContactPointUseType, IElement, IPeriod } from 'fhirtypes/dist/r4';
import { IElementBuilder } from './element-builder.interface';
import { ContactPointParamExtensionType } from '../../../types';
import { ContactPoint } from '../../../models';
import { IBuildable } from '../base';

export interface IContactPointBuilder extends IBuildable<ContactPoint>, IElementBuilder {
  addParamExtension(param: ContactPointParamExtensionType, extension: IElement): this;
  setSystem(value: ContactPointSystemType): this;
  setValue(value: string): this;
  setUse(value: ContactPointUseType): this;
  setRank(value: number): this;
  setPeriod(value: IPeriod): this;
}
