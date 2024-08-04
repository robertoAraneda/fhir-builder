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
import { BackboneElement } from '../base/backbone-element.model';
import { PatientContactBuilder } from '../../builders/backbones/patient-contact.builder';
import { IGenericObject } from '../../interfaces';
import { ValReturnType } from '../../validators/base/datatype.validator';
import { PatientContactValidator } from '../../validators/backbones/patient-contact.validator';

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

  private isValid(args: IGenericObject): ValReturnType {
    try {
      PatientContactValidator(args);
      return { error: null };
    } catch (e: any) {
      return { error: e.message };
    }
  }

  validate(): ValReturnType {
    const { error } = this.isValid(this);
    return { error };
  }

  // Factory method
  static builder(): PatientContactBuilder {
    return new PatientContactBuilder();
  }

  constructor(args: IPatientContact) {
    super();
    Object.assign(this, args);
  }
}
