import { IIdentifier, ResourceType } from 'fhirtypes/dist/r4';
import { IElementBuilder } from './element-builder.interface';
import { Reference } from '../../../models';
import { IBuildable } from '../base';

export interface IReferenceBuilder extends IBuildable<Reference>, IElementBuilder {
  addParamExtension(param: 'display' | 'type' | 'reference', extension: Element): this;
  setReference(value: { resourceType: ResourceType; id: string | number } | string): this;
  setDisplay(value: string): this;
  setIdentifier(value: IIdentifier): this;
  setType(value: string): this;
}
