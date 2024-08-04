import { AddressTypeType, AddressUseType, IElement, IPeriod } from 'fhirtypes/dist/r4';
import { Address } from '../../../models';
import { IBuildable } from '../base/buildable.interface';
import { IElementBuilder } from './element-builder.interface';

export type ParamExtensionType =
  | 'use'
  | 'type'
  | 'text'
  | 'line'
  | 'city'
  | 'district'
  | 'state'
  | 'postalCode'
  | 'country';

export interface AddressBuilderInterface extends IBuildable<Address>, IElementBuilder {
  addParamExtension<T extends ParamExtensionType>(param: T, extension: T extends 'line' ? IElement[] : IElement): this;

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
