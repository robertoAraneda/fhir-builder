import { IElement, IPatientLink, IReference, LinkTypeType } from 'fhirtypes/dist/r4';
import { BackboneElement } from '../base/backbone-element.model';
import { PatientLinkBuilder } from '../../builders/backbones/patient-link.builder';
import { IGenericObject } from '../../interfaces';
import { ValReturnType } from '../../validators/base/datatype.validator';
import { PatientLinkValidator } from '../../validators/backbones/patient-link.validator';

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

  private isValid(args: IGenericObject): ValReturnType {
    try {
      PatientLinkValidator(args as IPatientLink | IPatientLink[]);
      return { error: null };
    } catch (e: any) {
      return { error: e.message };
    }
  }

  validate(): ValReturnType {
    const { error } = this.isValid(this);
    return { error };
  }

  static builder(): PatientLinkBuilder {
    return new PatientLinkBuilder();
  }

  constructor(args: IPatientLink) {
    super();
    Object.assign(this, args);
  }
}
