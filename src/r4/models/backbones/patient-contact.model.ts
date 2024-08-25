import {
  AdministrativeGenderType,
  IAddress,
  ICodeableConcept,
  IContactPoint,
  IElement,
  IHumanName,
  IPatientContact,
  IPeriod,
  IReference,
} from 'fhirtypes/dist/r4';
import { PatientContactBuilder } from '../../builders';

import { ConformanceValidator } from '../../../core/r4/validators/base';
import { BackboneElement } from '../base/backbone-element.model';
import { IValidatable } from '../base/validatable.interface';
import { ISerializable } from '../base/serializable.interface';

export class PatientContact extends BackboneElement implements IPatientContact, IValidatable, ISerializable {
  // PatientContact attributes
  relationship: ICodeableConcept[];
  name: IHumanName;
  telecom: IContactPoint[];
  address: IAddress;
  gender: AdministrativeGenderType;
  organization: IReference;
  period: IPeriod;

  _gender: IElement;

  toJson() {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `PatientContact${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `PatientContact${JSON.stringify(this.toJson())}`;
  }

  validate() {
    return ConformanceValidator(this, 'PatientContact');
  }

  constructor(args?: IPatientContact) {
    super();
    Object.assign(this, args);
  }

  protected builderInstance(): any {
    return new PatientContactBuilder();
  }

  serialize(): string {
    return JSON.stringify(this.toJson());
  }
}
