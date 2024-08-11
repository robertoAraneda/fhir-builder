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

  static fromJsonBuilder(json: unknown | string): PatientBuilder {
    const patient = json as Patient;
    const patientBuilder = new PatientBuilder();
    return patientBuilder.fromJSON(patient);
  }

  // getters
  getIdentifiers(): IIdentifier[] | undefined {
    return this.identifier;
  }

  getActive(): boolean | undefined {
    return this.active;
  }

  getNames(): IHumanName[] | undefined {
    return this.name;
  }

  getTelecoms(): IContactPoint[] | undefined {
    return this.telecom;
  }

  getGender(): AdministrativeGenderType | undefined {
    return this.gender;
  }

  getBirthDate(): string | undefined {
    return this.birthDate;
  }

  getDeceasedBoolean(): boolean | undefined {
    return this.deceasedBoolean;
  }

  getDeceasedDateTime(): string | undefined {
    return this.deceasedDateTime;
  }

  getAddresses(int?: number): IAddress | IAddress[] | undefined {
    if (int) return this.address?.[int];
    return this.address;
  }

  getMaritalStatus(): ICodeableConcept | undefined {
    return this.maritalStatus;
  }

  getMultipleBirthBoolean(): boolean | undefined {
    return this.multipleBirthBoolean;
  }

  getMultipleBirthInteger(): number | undefined {
    return this.multipleBirthInteger;
  }

  getPhotos(): IAttachment[] | undefined {
    return this.photo;
  }

  getContacts(): IPatientContact[] | undefined {
    return this.contact;
  }

  getCommunications(): IPatientCommunication[] | undefined {
    return this.communication;
  }

  getGeneralPractitioners(): IReference[] | undefined {
    return this.generalPractitioner;
  }

  getManagingOrganization(): IReference | undefined {
    return this.managingOrganization;
  }

  getLinks(): IPatientLink[] | undefined {
    return this.link;
  }

  getActiveExtension(): IElement | undefined {
    return this._active;
  }

  getBirthDateExtension(): IElement | undefined {
    return this._birthDate;
  }

  getGenderExtension(): IElement | undefined {
    return;
  }

  constructor(args?: IPatient) {
    super();
    if (args) Object.assign(this, args);
  }
}
