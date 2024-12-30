import {
  IIdentifier,
  IElement,
  IPeriod,
  IReference,
  ICodeableConcept,
  IContactPoint,
  IPractitionerRoleAvailableTime,
  IPractitionerRoleNotAvailable,
} from 'fhirtypes/dist/r4';
import { IPractitionerRole, IOperationOutcome } from 'fhirtypes/dist/r4';
import { DomainResource, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for PractitionerRole Resource
 * @property {string} resourceType
 * @property {IIdentifier[]} identifier
 * @property {boolean} active
 * @property {IElement} _active
 * @property {IPeriod} period
 * @property {IReference} practitioner
 * @property {IReference} organization
 * @property {ICodeableConcept[]} code
 * @property {ICodeableConcept[]} specialty
 * @property {IReference[]} location
 * @property {IReference[]} healthcareService
 * @property {IContactPoint[]} telecom
 * @property {IPractitionerRoleAvailableTime[]} availableTime
 * @property {IPractitionerRoleNotAvailable[]} notAvailable
 * @property {string} availabilityExceptions
 * @property {IElement} _availabilityExceptions
 * @property {IReference[]} endpoint
 * @author Roberto Araneda Espinoza
 */
export class PractitionerRole extends DomainResource implements IPractitionerRole, IValidatable, ISerializable {
  /**
   * @description The type of resource
   */
  resourceType? = 'PractitionerRole';

  /**
   * @description Business Identifiers that are specific to a role/location.
   */
  identifier?: IIdentifier[];

  /**
   * @description Whether this practitioner role record is in active use.
   */
  active?: boolean;

  /**
   * @description Extensions for active
   */
  _active?: IElement;

  /**
   * @description The period during which the person is authorized to act as a practitioner in these role(s) for the organization.
   */
  period?: IPeriod;

  /**
   * @description Practitioner that is able to provide the defined services for the organization.
   */
  practitioner?: IReference;

  /**
   * @description The organization where the Practitioner performs the roles associated.
   */
  organization?: IReference;

  /**
   * @description Roles which this practitioner is authorized to perform for the organization.
   */
  code?: ICodeableConcept[];

  /**
   * @description Specific specialty of the practitioner.
   */
  specialty?: ICodeableConcept[];

  /**
   * @description The location(s) at which this practitioner provides care.
   */
  location?: IReference[];

  /**
   * @description The list of healthcare services that this worker provides for this role's Organization/Location(s).
   */
  healthcareService?: IReference[];

  /**
   * @description Contact details that are specific to the role/location/service.
   */
  telecom?: IContactPoint[];

  /**
   * @description A collection of times the practitioner is available or performing this role at the location and/or healthcareservice.
   */
  availableTime?: IPractitionerRoleAvailableTime[];

  /**
   * @description The practitioner is not available or performing this role during this period of time due to the provided reason.
   */
  notAvailable?: IPractitionerRoleNotAvailable[];

  /**
   * @description A description of site availability exceptions, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as details in the available Times and not available Times.
   */
  availabilityExceptions?: string;

  /**
   * @description Extensions for availabilityExceptions
   */
  _availabilityExceptions?: IElement;

  /**
   * @description Technical endpoints providing access to services operated for the practitioner with this role.
   */
  endpoint?: IReference[];

  /**
   * @description Returns a JSON representation of the model
   * @returns {Record<string, any>}
   */
  toJson(): Record<string, any> {
    return JSON.parse(JSON.stringify(this));
  }

  /**
   * @description Returns a string representation of the model
   * @returns {string}
   */
  toString(): string {
    return `PractitionerRole${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `PractitionerRole${JSON.stringify(this.toJson(), null, 2)}`;
  }

  /**
   * @description Returns a serialized string representation of the model
   * @returns {string}
   */
  serialize(): string {
    return JSON.stringify(this.toJson());
  }

  /**
   * @description Validates the model
   * @returns {isValid: boolean, operationOutcome: IOperationOutcome}
   */
  validate(): { isValid: boolean; operationOutcome: IOperationOutcome } {
    return ConformanceValidator('PractitionerRole', this);
  }

  constructor(args?: IPractitionerRole) {
    super();
    if (args) Object.assign(this, args);
  }
}
