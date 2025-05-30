import {
  IIdentifier,
  IElement,
  IReference,
  ICodeableConcept,
  IAttachment,
  IContactPoint,
  IHealthcareServiceEligibility,
  IHealthcareServiceAvailableTime,
  IHealthcareServiceNotAvailable,
} from 'fhirtypes/dist/r4';
import { IHealthcareService, IOperationOutcome } from 'fhirtypes/dist/r4';
import { DomainResource, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for HealthcareService Resource
 * @property {string} resourceType
 * @property {IIdentifier[]} identifier
 * @property {boolean} active
 * @property {IElement} _active
 * @property {IReference} providedBy
 * @property {ICodeableConcept[]} category
 * @property {ICodeableConcept[]} type
 * @property {ICodeableConcept[]} specialty
 * @property {IReference[]} location
 * @property {string} name
 * @property {IElement} _name
 * @property {string} comment
 * @property {IElement} _comment
 * @property {string} extraDetails
 * @property {IElement} _extraDetails
 * @property {IAttachment} photo
 * @property {IContactPoint[]} telecom
 * @property {IReference[]} coverageArea
 * @property {ICodeableConcept[]} serviceProvisionCode
 * @property {IHealthcareServiceEligibility[]} eligibility
 * @property {ICodeableConcept[]} program
 * @property {ICodeableConcept[]} characteristic
 * @property {ICodeableConcept[]} communication
 * @property {ICodeableConcept[]} referralMethod
 * @property {boolean} appointmentRequired
 * @property {IElement} _appointmentRequired
 * @property {IHealthcareServiceAvailableTime[]} availableTime
 * @property {IHealthcareServiceNotAvailable[]} notAvailable
 * @property {string} availabilityExceptions
 * @property {IElement} _availabilityExceptions
 * @property {IReference[]} endpoint
 * @author Roberto Araneda Espinoza
 */
export class HealthcareService extends DomainResource implements IHealthcareService, IValidatable, ISerializable {
  /**
   * @description The type of resource
   */
  resourceType? = 'HealthcareService';

  /**
   * @description External identifiers for this item.
   */
  identifier?: IIdentifier[];

  /**
   * @description This flag is used to mark the record to not be used. This is not used when a center is closed for maintenance, or for holidays, the notAvailable period is to be used for this.
   */
  active?: boolean;

  /**
   * @description Extensions for active
   */
  _active?: IElement;

  /**
   * @description The organization that provides this healthcare service.
   */
  providedBy?: IReference;

  /**
   * @description Identifies the broad category of service being performed or delivered.
   */
  category?: ICodeableConcept[];

  /**
   * @description The specific type of service that may be delivered or performed.
   */
  type?: ICodeableConcept[];

  /**
   * @description Collection of specialties handled by the service site. This is more of a medical term.
   */
  specialty?: ICodeableConcept[];

  /**
   * @description The location(s) where this healthcare service may be provided.
   */
  location?: IReference[];

  /**
   * @description Further description of the service as it would be presented to a consumer while searching.
   */
  name?: string;

  /**
   * @description Extensions for name
   */
  _name?: IElement;

  /**
   * @description Any additional description of the service and/or any specific issues not covered by the other attributes, which can be displayed as further detail under the serviceName.
   */
  comment?: string;

  /**
   * @description Extensions for comment
   */
  _comment?: IElement;

  /**
   * @description Extra details about the service that can't be placed in the other fields.
   */
  extraDetails?: string;

  /**
   * @description Extensions for extraDetails
   */
  _extraDetails?: IElement;

  /**
   * @description If there is a photo/symbol associated with this HealthcareService, it may be included here to facilitate quick identification of the service in a list.
   */
  photo?: IAttachment;

  /**
   * @description List of contacts related to this specific healthcare service.
   */
  telecom?: IContactPoint[];

  /**
   * @description The location(s) that this service is available to (not where the service is provided).
   */
  coverageArea?: IReference[];

  /**
   * @description The code(s) that detail the conditions under which the healthcare service is available/offered.
   */
  serviceProvisionCode?: ICodeableConcept[];

  /**
   * @description Does this service have specific eligibility requirements that need to be met in order to use the service?
   */
  eligibility?: IHealthcareServiceEligibility[];

  /**
   * @description Programs that this service is applicable to.
   */
  program?: ICodeableConcept[];

  /**
   * @description Collection of characteristics (attributes).
   */
  characteristic?: ICodeableConcept[];

  /**
   * @description Some services are specifically made available in multiple languages, this property permits a directory to declare the languages this is offered in. Typically this is only provided where a service operates in communities with mixed languages used.
   */
  communication?: ICodeableConcept[];

  /**
   * @description Ways that the service accepts referrals, if this is not provided then it is implied that no referral is required.
   */
  referralMethod?: ICodeableConcept[];

  /**
   * @description Indicates whether or not a prospective consumer will require an appointment.json for a particular service at a site to be provided by the Organization. Indicates if an appointment.json is required for access to this service.
   */
  appointmentRequired?: boolean;

  /**
   * @description Extensions for appointmentRequired
   */
  _appointmentRequired?: IElement;

  /**
   * @description A collection of times that the Service Site is available.
   */
  availableTime?: IHealthcareServiceAvailableTime[];

  /**
   * @description The HealthcareService is not available during this period of time due to the provided reason.
   */
  notAvailable?: IHealthcareServiceNotAvailable[];

  /**
   * @description A description of site availability exceptions, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as details in the available Times and not available Times.
   */
  availabilityExceptions?: string;

  /**
   * @description Extensions for availabilityExceptions
   */
  _availabilityExceptions?: IElement;

  /**
   * @description Technical endpoints providing access to services operated for the specific healthcare services defined at this resource.
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
    return `HealthcareService${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `HealthcareService${JSON.stringify(this.toJson(), null, 2)}`;
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
    return ConformanceValidator('HealthcareService', this);
  }

  constructor(args?: IHealthcareService) {
    super();
    if (args) Object.assign(this, args);
  }
}
