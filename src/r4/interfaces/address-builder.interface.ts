import { AddressTypeType, AddressUseType, IElement, IPeriod } from 'fhirtypes/dist/r4';
import { Address } from '../models';
import { BuildableInterface } from './buildable.interface';
import { ElementBuilderInterface } from './element-builder.interface';

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

export interface AddressBuilderInterface extends BuildableInterface<Address>, ElementBuilderInterface {
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
