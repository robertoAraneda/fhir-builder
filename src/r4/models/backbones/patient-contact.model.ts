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
import { BackboneElement } from '../base';
import { PatientContactBuilder } from '../../builders';
import { ValReturnType } from '../../validators/base/datatype.validator';
import { conformanceValidation } from '../../validators/base/object.validator';

export class PatientContact extends BackboneElement implements IPatientContact {
  // PatientContact attributes
  relationship: ICodeableConcept[];
  name: IHumanName;
  telecom: IContactPoint[];
  address: IAddress;
  gender: AdministrativeGenderType;
  _gender: IElement;
  organization: IReference;
  period: IPeriod;

  toJson(): PatientContact {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `PatientContact${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `PatientContact${JSON.stringify(this.toJson())}`;
  }

  validate(): ValReturnType {
    const { error } = conformanceValidation(this, 'PatientContact');
    return { error };
  }

  // Factory method
  static builder(): PatientContactBuilder {
    return new PatientContactBuilder();
  }

  constructor(args?: IPatientContact) {
    super();
    Object.assign(this, args);
  }
}
