import { IElementBuilder } from './element-builder.interface';
import { IElement, QuantityComparatorType } from 'fhirtypes/dist/r4';
import { QuantityParamExtensionType } from '../../../types';
import { Quantity } from '../../../models';
import { IBuildable } from '../base';

export interface IQuantityBuilder extends IBuildable<Quantity>, IElementBuilder {
  addParamExtension(param: QuantityParamExtensionType, extension: IElement): this;
  setCode(value: string): this;
  setSystem(value: string): this;
  setUnit(value: string): this;
  setValue(value: number): this;
  setComparator(value: QuantityComparatorType): this;
}
