import { ReferenceBuilderInterface } from '../../interfaces/builders/datatypes/reference-builder.interface';
import { ElementBuilder } from './element.builder';
import { IIdentifier, IReference, ResourceType } from 'fhirtypes/dist/r4';
import { Reference } from '../../models';

export class ReferenceBuilder extends ElementBuilder implements ReferenceBuilderInterface {
  private readonly reference: IReference;

  constructor() {
    super();

    this.reference = {} as IReference;
  }

  addParamExtension(param: 'display' | 'type' | 'reference', extension: Element): this {
    this.reference[`_${param}`] = extension;

    return this;
  }

  setReference<T extends { resourceType: ResourceType; id: string | number } | string>(value: T): this {
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

export const transformReference = <T extends { resourceType: ResourceType; id: string | number }>(item: T): string => {
  if (!item.resourceType) throw new Error('Reference must have a resourceType');
  if (!item.id) throw new Error('Reference must have an id');

  return `${item.resourceType}/${item.id}`;
};
