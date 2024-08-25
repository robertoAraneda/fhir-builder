import type { IElement, IIdentifier, ResourceType } from 'fhirtypes/dist/r4';
import { Reference } from '../../models';
import { IBuildable } from '../base/buildable.interface';
import { UnderscoreKeys } from '../base/resource-type-map.interface';
import { ElementBuilder } from '../base/element.builder';

type PrimitiveExtensionFields = keyof Pick<Reference, UnderscoreKeys<Reference>>;

interface IReferenceBuilder extends IBuildable<Reference> {
  setReference(value: { resourceType: ResourceType; id: string | number } | string): this;
  setDisplay(value: string): this;
  setIdentifier(value: IIdentifier): this;
  setType(value: string): this;
}

export class ReferenceBuilder extends ElementBuilder implements IReferenceBuilder {
  private readonly reference: Reference;

  constructor() {
    super();
    this.reference = new Reference();
  }

  addPrimitiveExtension(param: PrimitiveExtensionFields, extension: IElement): this {
    this.reference[param] = extension;

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
    return Object.assign(this.reference, super.build());
  }
}

function transformReference<T extends { resourceType: ResourceType; id: string | number }>(item: T): string {
  if (!item.resourceType) throw new Error('Reference must have a resourceType');
  if (!item.id) throw new Error('Reference must have an id');

  return `${item.resourceType}/${item.id}`;
}
