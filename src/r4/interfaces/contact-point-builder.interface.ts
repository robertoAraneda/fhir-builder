import { BuildableInterface } from './buildable.interface';
import { ElementBuilderInterface } from './element-builder.interface';
import { ContactPointSystemType, ContactPointUseType, IElement, IPeriod } from 'fhirtypes/dist/r4';
import ContactPoint from '../models/datatypes/contact-point.model';

export type ContactPointParamExtensionType = 'system' | 'value' | 'use' | 'rank';

export interface ContactPointBuilderInterface extends BuildableInterface<ContactPoint>, ElementBuilderInterface {
  addParamExtension<T extends ContactPointParamExtensionType>(param: T, extension: IElement): this;

  setSystem(value: ContactPointSystemType): this;

  setValue(value: string): this;

  setUse(value: ContactPointUseType): this;

  setRank(value: number): this;

  setPeriod(value: IPeriod): this;
}
