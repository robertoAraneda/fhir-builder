import { AddressTypeType, AddressUseType, IElement, IPeriod } from 'fhirtypes/dist/r4';
import { IBuildable } from '../base';
import { IElementBuilder } from './element-builder.interface';
import { AddressParamExtensionType as Type } from '../../../types';
import { Address } from '../../../models';

export interface IAddressBuilder extends IBuildable<Address>, IElementBuilder {
  addParamExtension<T extends Type>(param: T, extension: T extends 'line' ? IElement[] : IElement): this;
  setUse(value: AddressUseType): this;
  setType(value: AddressTypeType): this;
  setText(value: string): this;
  addLine(value: string): this;
  setMultipleLines(value: string[]): this;
  setCity(value: string): this;
  setDistrict(value: string): this;
  setState(value: string): this;
  setPostalCode(value: string): this;
  setCountry(value: string): this;
  setPeriod(value: IPeriod): this;
}
