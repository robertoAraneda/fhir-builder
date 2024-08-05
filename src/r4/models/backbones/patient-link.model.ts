import { IElement, IPatientLink, IReference, LinkTypeType } from 'fhirtypes/dist/r4';
import { BackboneElement } from '../base';
import { PatientLinkBuilder } from '../../builders';
import { ValReturnType } from '../../validators/base/datatype.validator';
import { conformanceValidation } from '../../validators/base/object.validator';

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
    const { error } = conformanceValidation(this, 'PatientLink');
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
