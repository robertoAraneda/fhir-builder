import { IDomainResourceBuilder } from '../../interfaces/builders/datatypes/domain-resource-builder.interface';
import { ResourceBuilder } from './resource.builder';
import { IDomainResource, IExtension, INarrative } from 'fhirtypes/dist/r4';

export class DomainResourceBuilder extends ResourceBuilder implements IDomainResourceBuilder {
  private readonly domainResource: IDomainResource;

  constructor() {
    super();
    this.domainResource = {} as IDomainResource;
  }

  setText(text: INarrative): this {
    // TODO: move to a validation function
    if (text.div) {
      if (!text.div.startsWith('<div')) throw new Error('Narrative.div must start with <div');
      if (!text.div.includes('xmlns="http://www.w3.org/1999/xhtml')) {
        throw new Error('Narrative.div must include the XHTML namespace');
      }
    }
    this.domainResource.text = text;

    return this;
  }

  // TODO: This should be a generic type
  addContained(contained: any): this {
    this.domainResource.contained = this.domainResource.contained || [];
    this.domainResource.contained.push(contained);
    return this;
  }

  // TODO: This should be a generic type
  setMultipleContained(contained: any[]): this {
    this.domainResource.contained = contained;
    return this as unknown as this;
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

  setMultipleExtension(extension: IExtension[]): this {
    this.domainResource.extension = extension;
    return this;
  }

  setMultipleModifierExtension(modifierExtension: IExtension[]): this {
    this.domainResource.modifierExtension = modifierExtension;
    return this;
  }

  entity(): IDomainResource {
    return {
      ...this.domainResource,
      ...super.entity(),
    };
  }
}
