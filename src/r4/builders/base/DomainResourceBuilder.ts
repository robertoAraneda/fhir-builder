import { ResourceBuilder } from './ResourceBuilder';
import { IDomainResourceBuilder } from './IDomainResourceBuilder';

export abstract class DomainResourceBuilder extends ResourceBuilder implements IDomainResourceBuilder {
  abstract setText(text: any): this;
  abstract addContained(contained: any): this;
  abstract addExtension(extension: any): this;
  abstract addModifierExtension(modifierExtension: any): this;
}
