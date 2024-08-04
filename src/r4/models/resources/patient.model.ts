import { DomainResource } from '../base/domain-resource.model';
import {
  AdministrativeGenderType,
  IAddress,
  IAttachment,
  ICodeableConcept,
  IContactPoint,
  IElement,
  IHumanName,
  IIdentifier,
  IPatient,
  IPatientCommunication,
  IPatientContact,
  IPatientLink,
  IReference,
} from 'fhirtypes/dist/r4';
import { PatientBuilder } from '../../builders/resources/patient.builder';
import { IGenericObject } from '../../interfaces';
import { ValReturnType } from '../../validators/base/datatype.validator';
import { PatientValidator } from '../../validators/resources/patient.validator';

/**
 * @description FHIR R4
 */
export class Patient extends DomainResource implements IPatient {
  resourceType?: 'Patient';

  // Patient attributes
  /**
   * @description An identifier for this patient
   */
  identifier?: IIdentifier[];

  /**
   * @description Whether this patient's record is in active use
   */
  active?: boolean;
  name?: IHumanName[];
  telecom?: IContactPoint[];
  gender?: AdministrativeGenderType;
  birthDate?: string;
  deceasedBoolean?: boolean;
  deceasedDateTime?: string;
  address?: IAddress[];
  maritalStatus?: ICodeableConcept;
  multipleBirthBoolean?: boolean;
  multipleBirthInteger?: number;
  photo?: IAttachment[];
  contact?: IPatientContact[];
  communication?: IPatientCommunication[];
  generalPractitioner?: IReference[];
  managingOrganization?: IReference;
  link?: IPatientLink[];

  // Extensions
  _active?: IElement;
  _birthDate?: IElement;
  _multipleBirthBoolean?: IElement;
  _multipleBirthInteger?: IElement;
  _deceasedBoolean?: IElement;
  _deceasedDateTime?: IElement;
  _gender?: IElement;

  toJson(): Patient {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `Patient${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `Patient${JSON.stringify(this.toJson())}`;
  }

  private isValid(args: IGenericObject): ValReturnType {
    try {
      PatientValidator(args);
      return { error: null };
    } catch (e: any) {
      return { error: e.message };
    }
  }

  validate(): ValReturnType {
    const { error } = this.isValid(this);
    return { error };
  }

  static builder(): PatientBuilder {
    return new PatientBuilder();
  }

  constructor(args: IPatient) {
    super();
    Object.assign(this, args);
    this.resourceType = 'Patient';
  }
}
