import { IBuildable } from '../base/buildable.interface';
import { IElementBuilder } from './element-builder.interface';
import { ContactPointSystemType, ContactPointUseType, IElement, IPeriod } from 'fhirtypes/dist/r4';
import { ContactPoint } from '../../../models';

export type ContactPointParamExtensionType = 'system' | 'value' | 'use' | 'rank';

export interface ContactPointBuilderInterface extends IBuildable<ContactPoint>, IElementBuilder {
  addParamExtension<T extends ContactPointParamExtensionType>(param: T, extension: IElement): this;
  setSystem(value: ContactPointSystemType): this;
  setValue(value: string): this;
  setUse(value: ContactPointUseType): this;
  setRank(value: number): this;
  setPeriod(value: IPeriod): this;
}
