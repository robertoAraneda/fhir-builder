import { Identifier } from '../models';
import { BuildableInterface } from './buildable.interface';
import { ElementBuilderInterface } from './element-builder.interface';
import { ICodeableConcept, IdentifierUseType, IElement, IPeriod, IReference } from 'fhirtypes/dist/r4';

export interface IdentifierBuilderInterface extends BuildableInterface<Identifier>, ElementBuilderInterface {
  addParamExtension(param: 'use' | 'system' | 'value', extension: IElement): this;

  setType(value: ICodeableConcept): this;

  setUse(value: IdentifierUseType): this;

  setSystem(value: string): this;

  setValue(value: string): this;

  setPeriod(value: IPeriod): this;

  setAssigner(value: IReference): this;
}
