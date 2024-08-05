// TODO: add R5 models

import { BackboneElement, DomainResource } from '../models/base';

type InstanceClass = DomainResource | BackboneElement;

export interface IBuildable<Class extends InstanceClass> {
  build(): Class;
}
