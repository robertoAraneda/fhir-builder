import { IIdentifier, IReference, ResourceType } from 'fhirtypes/dist/r4';
import { ElementBuilder } from '../../../core/r4/builders/base/element.builder';
import { Reference } from '../../models';
import { IBuildable } from '../../../core/r4/interfaces';
import { IElementBuilder } from '../../../core/r4/interfaces/element-builder.interface';

interface IReferenceBuilder extends IBuildable<Reference>, IElementBuilder {
  addParamExtension(param: 'display' | 'type' | 'reference', extension: Element): this;
  setReference(value: { resourceType: ResourceType; id: string | number } | string): this;
  setDisplay(value: string): this;
  setIdentifier(value: IIdentifier): this;
  setType(value: string): this;
}

export class ReferenceBuilder extends ElementBuilder implements IReferenceBuilder {
  private readonly reference: IReference;

  constructor() {
    super();

    this.reference = {} as IReference;
  }

  addParamExtension(param: 'display' | 'type' | 'reference', extension: Element): this {
    this.reference[`_${param}`] = extension;

    return this;
  }

  setReference(value: { resourceType: ResourceType; id: string | number } | string): this {
    if (typeof value === 'string') {
      this.reference.reference = value;
    } else {
      this.reference.reference = transformReference(value);
    }
    return this;
  }

  setDisplay(value: string): this {
    this.reference.display = value;
    return this;
  }

  setIdentifier(value: IIdentifier): this {
    this.reference.identifier = value;
    return this;
  }

  setType(value: string): this {
    this.reference.type = value;
    return this;
  }

  build(): Reference {
    Object.assign(this.reference, { ...super.entity() });
    return new Reference(this.reference);
  }
}

const transformReference = <T extends { resourceType: ResourceType; id: string | number }>(item: T): string => {
  if (!item.resourceType) throw new Error('Reference must have a resourceType');
  if (!item.id) throw new Error('Reference must have an id');

  return `${item.resourceType}/${item.id}`;
};
