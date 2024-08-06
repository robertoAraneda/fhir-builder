import { IElement, IPatientLink, IReference, LinkTypeType } from 'fhirtypes/dist/r4';
import { PatientLinkBuilder } from '../../builders';
import { ValReturnType } from '../../../core/r4/validators/base/datatype.validator';

import { ConformanceValidator } from '../../../core/r4/validators/base';
import { BackboneElement } from './backbone-element.model';

export class PatientLink extends BackboneElement implements IPatientLink {
  // PatientLink attributes
  other: IReference;
  type?: LinkTypeType;
  _type?: IElement;

  toJson(): PatientLink {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `PatientLink${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `PatientLink${JSON.stringify(this.toJson())}`;
  }

  validate(): ValReturnType {
    const { error } = ConformanceValidator(this, 'PatientLink');
    return { error };
  }

  static builder(): PatientLinkBuilder {
    return new PatientLinkBuilder();
  }

  constructor(args?: IPatientLink) {
    super();
    Object.assign(this, args);
  }
}
