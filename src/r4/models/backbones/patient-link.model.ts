import { IElement, IPatientLink, IReference, LinkTypeType } from 'fhirtypes/dist/r4';
import { PatientLinkBuilder } from '../../builders';
import { ConformanceValidator } from '../../../core/r4/validators/base';
import { BackboneElement } from '../base/backbone-element.model';
import { IValidatable } from '../base/validatable.interface';
import { ISerializable } from '../base/serializable.interface';

export class PatientLink extends BackboneElement implements IPatientLink, IValidatable, ISerializable {
  // PatientLink attributes
  other: IReference;
  type?: LinkTypeType;
  _type?: IElement;

  toJson() {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `PatientLink${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `PatientLink${JSON.stringify(this.toJson())}`;
  }

  validate() {
    return ConformanceValidator(this, 'PatientLink');
  }

  constructor(args?: IPatientLink) {
    super();
    Object.assign(this, args);
  }

  protected builderInstance(): PatientLinkBuilder {
    return new PatientLinkBuilder();
  }

  serialize(): string {
    return JSON.stringify(this.toJson());
  }
}
