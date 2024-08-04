import { BackboneElement } from '../../../models/base/backbone-element.model';
import { DomainResource } from '../../../models/base/domain-resource.model';

// TODO: add R5 models
type InstanceClass = DomainResource | BackboneElement;

export interface IBuildable<Class extends InstanceClass> {
  build(): Class;
}
