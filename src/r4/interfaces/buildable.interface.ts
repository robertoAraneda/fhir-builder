import { BackboneElementModel } from '../models/datatypes/backbone-element.model';
import { DomainResource } from '../models/datatypes/domain-resource.model';

// TODO: add R5 models
type InstanceClass = DomainResource | BackboneElementModel;

export interface BuildableInterface<Class extends InstanceClass> {
  build(): Class;
}
