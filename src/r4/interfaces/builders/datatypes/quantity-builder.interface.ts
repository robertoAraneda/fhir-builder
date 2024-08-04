import { IElementBuilder } from './element-builder.interface';
import { Quantity } from '../../../models/datatypes/quantity.model';
import { IBuildable } from '../base/buildable.interface';
import { IElement, QuantityComparatorType } from 'fhirtypes/dist/r4';

export type QuantityParamExtensionType = 'code' | 'system' | 'unit' | 'value' | 'comparator';

export interface IQuantityBuilder extends IBuildable<Quantity>, IElementBuilder {
  setCode(value: string): this;
  setSystem(value: string): this;
  setUnit(value: string): this;
  setValue(value: number): this;
  setComparator(value: QuantityComparatorType): this;
  addParamExtension<T extends QuantityParamExtensionType>(param: T, extension: IElement): this;
}
