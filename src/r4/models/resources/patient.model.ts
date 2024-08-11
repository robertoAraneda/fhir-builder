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
import { PatientBuilder } from '../../builders';

import { ConformanceValidator } from '../../../core/r4/validators/base';
import { DomainResource } from './domain-resource.model';

/**
 * @description FHIR R4
 */
export class Patient extends DomainResource implements IPatient {
  resourceType?: 'Patient' = 'Patient' as const;

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
  _gender?: IElement;

  toJson(): unknown {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `Patient${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `Patient${JSON.stringify(this.toJson())}`;
  }

  validate(): { error: string | null } {
    const { error } = ConformanceValidator(this, 'Patient');
    return { error };
  }

  static builder(): PatientBuilder {
    return new PatientBuilder();
  }

  static builderFromJson(json: unknown | string): PatientBuilder {
    const patient = json as Patient;
    const patientBuilder = new PatientBuilder();
    return patientBuilder.fromJSON(patient);
  }

  constructor(args?: IPatient) {
    super();
    if (args) Object.assign(this, args);
  }
}
