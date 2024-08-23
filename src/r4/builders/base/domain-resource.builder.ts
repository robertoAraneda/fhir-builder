import { ResourceBuilder } from './resource.builder';
import { IDomainResource, IExtension, INarrative } from 'fhirtypes/dist/r4';
import { IDomainResourceBuilder } from './domain-resource-builder.interface';
import { ResourceType, ResourceValue } from './resource-type-map.interface';

export class DomainResourceBuilder extends ResourceBuilder implements IDomainResourceBuilder {
  private readonly domainResource: IDomainResource;

  constructor() {
    super();
    this.domainResource = {} as IDomainResource;
  }
  setText(text: INarrative): this {
    this.domainResource.text = text;
    return this;
  }

  addContained<T extends ResourceType>(type: T, contained: ResourceValue<T>): this {
    this.domainResource.contained = this.domainResource.contained || [];
    this.domainResource.contained.push(contained);
    return this;
  }
  addExtension(extension: IExtension): this {
    this.domainResource.extension = this.domainResource.extension || [];
    this.domainResource.extension.push(extension);
    return this;
  }
  addModifierExtension(modifierExtension: IExtension): this {
    this.domainResource.modifierExtension = this.domainResource.modifierExtension || [];
    this.domainResource.modifierExtension.push(modifierExtension);
    return this;
  }

  build(): IDomainResource {
    return Object.assign(this.domainResource, super.build());
  }
}
