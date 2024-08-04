import { Reference } from '../../../models';
import { IBuildable } from '../base/buildable.interface';
import { IElementBuilder } from './element-builder.interface';
import { IDomainResource, IIdentifier, ResourceType } from 'fhirtypes/dist/r4';

export interface ReferenceBuilderInterface extends IBuildable<Reference>, IElementBuilder {
  addParamExtension(param: 'display' | 'type' | 'reference', extension: Element): this;
  setReference<T extends { resourceType: ResourceType; id: string | number } | string>(value: T): this;
  setDisplay(value: string): this;
  setIdentifier(value: IIdentifier): this;
  setType(value: string): this;
}
