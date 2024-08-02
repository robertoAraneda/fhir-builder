import { IElement } from 'fhirtypes/dist/r4';
import { Period } from '../models/datatypes/period.model';
import { BuildableInterface } from './buildable.interface';
import { ElementBuilderInterface } from './element-builder.interface';

export interface PeriodBuilderInterface extends BuildableInterface<Period>, ElementBuilderInterface {
  addParamExtension(param: 'start' | 'end', extension: IElement): this;

  setStart(value: string): this;

  setEnd(value: string): this;
}
