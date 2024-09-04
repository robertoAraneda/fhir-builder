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
import { HealthcareService } from '../../models';
import { DomainResourceBuilder, IBuildable } from '../base';
import { ExtractUnderscoreKeys } from '../../../core/commons/utils';

// Extract the keys that start with an underscore
type PrimitiveExtensionFields = ExtractUnderscoreKeys<HealthcareService>;

/**
 * @description Interface for chaining the building of a HealthcareService
 * @interface IHealthcareServiceBuilder
 * @extends {IBuildable<HealthcareService>}
 */
interface IHealthcareServiceBuilder extends IBuildable<HealthcareService> {
  addIdentifier(value: IIdentifier): this;
  setActive(value: boolean): this;
  setProvidedBy(value: IReference): this;
  addCategory(value: ICodeableConcept): this;
  addType(value: ICodeableConcept): this;
  addSpecialty(value: ICodeableConcept): this;
  addLocation(value: IReference): this;
  setName(value: string): this;
  setComment(value: string): this;
  setExtraDetails(value: string): this;
  setPhoto(value: IAttachment): this;
  addTelecom(value: IContactPoint): this;
  addCoverageArea(value: IReference): this;
  addServiceProvisionCode(value: ICodeableConcept): this;
  addEligibility(value: IHealthcareServiceEligibility): this;
  addProgram(value: ICodeableConcept): this;
  addCharacteristic(value: ICodeableConcept): this;
  addCommunication(value: ICodeableConcept): this;
  addReferralMethod(value: ICodeableConcept): this;
  setAppointmentRequired(value: boolean): this;
  addAvailableTime(value: IHealthcareServiceAvailableTime): this;
  addNotAvailable(value: IHealthcareServiceNotAvailable): this;
  setAvailabilityExceptions(value: string): this;
  addEndpoint(value: IReference): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a HealthcareService
 * @class HealthcareServiceBuilder
 * @extends {DomainResourceBuilder}
 * @implements {IHealthcareServiceBuilder}
 * @author Roberto Araneda Espinoza
 */
export class HealthcareServiceBuilder extends DomainResourceBuilder implements IHealthcareServiceBuilder {
  private readonly healthcareService: HealthcareService;

  constructor() {
    super();
    this.healthcareService = new HealthcareService();
  }

  /**
   * @description Sets the resource type to HealthcareService
   * @param json - the json to parse
   * @returns {this}
   */
  fromJSON(json: unknown): this {
    const incomingData = typeof json === 'string' ? JSON.parse(json) : json;
    Object.assign(this.healthcareService, incomingData);
    return this;
  }

  /**
   * @description Adds a primitive extension to the element
   * @param param - the field to add the extension to
   * @param extension - the extension to add
   * @returns {this}
   * @example addPrimitiveExtension('_value', { value: 'test' })
   */
  addPrimitiveExtension(param: PrimitiveExtensionFields, extension: IElement): this {
    this.healthcareService[param] = extension;
    return this;
  }

  /**
   * @description Builds the model
   * @returns {HealthcareService}
   */
  build(): HealthcareService {
    return Object.assign(this.healthcareService, super.build());
  }

  /**
   * @description Adds a value to the identifier array
   * @description External identifiers for this item.
   * @param value - the value to add
   * @returns {this}
   */
  addIdentifier(value: IIdentifier): this {
    this.healthcareService.identifier = this.healthcareService.identifier || [];
    this.healthcareService.identifier.push(value);
    return this;
  }
  /**
   * @description Sets the active value
   * @description This flag is used to mark the record to not be used. This is not used when a center is closed for maintenance, or for holidays, the notAvailable period is to be used for this.
   * @param value - the value to set
   * @returns {this}
   */
  setActive(value: boolean): this {
    this.healthcareService.active = value;
    return this;
  }

  /**
   * @description Sets the providedBy value
   * @description The organization that provides this healthcare service.
   * @param value - the value to set
   * @returns {this}
   */
  setProvidedBy(value: IReference): this {
    this.healthcareService.providedBy = value;
    return this;
  }

  /**
   * @description Adds a value to the category array
   * @description Identifies the broad category of service being performed or delivered.
   * @param value - the value to add
   * @returns {this}
   */
  addCategory(value: ICodeableConcept): this {
    this.healthcareService.category = this.healthcareService.category || [];
    this.healthcareService.category.push(value);
    return this;
  }
  /**
   * @description Adds a value to the type array
   * @description The specific type of service that may be delivered or performed.
   * @param value - the value to add
   * @returns {this}
   */
  addType(value: ICodeableConcept): this {
    this.healthcareService.type = this.healthcareService.type || [];
    this.healthcareService.type.push(value);
    return this;
  }
  /**
   * @description Adds a value to the specialty array
   * @description Collection of specialties handled by the service site. This is more of a medical term.
   * @param value - the value to add
   * @returns {this}
   */
  addSpecialty(value: ICodeableConcept): this {
    this.healthcareService.specialty = this.healthcareService.specialty || [];
    this.healthcareService.specialty.push(value);
    return this;
  }
  /**
   * @description Adds a value to the location array
   * @description The location(s) where this healthcare service may be provided.
   * @param value - the value to add
   * @returns {this}
   */
  addLocation(value: IReference): this {
    this.healthcareService.location = this.healthcareService.location || [];
    this.healthcareService.location.push(value);
    return this;
  }
  /**
   * @description Sets the name value
   * @description Further description of the service as it would be presented to a consumer while searching.
   * @param value - the value to set
   * @returns {this}
   */
  setName(value: string): this {
    this.healthcareService.name = value;
    return this;
  }

  /**
   * @description Sets the comment value
   * @description Any additional description of the service and/or any specific issues not covered by the other attributes, which can be displayed as further detail under the serviceName.
   * @param value - the value to set
   * @returns {this}
   */
  setComment(value: string): this {
    this.healthcareService.comment = value;
    return this;
  }

  /**
   * @description Sets the extraDetails value
   * @description Extra details about the service that can't be placed in the other fields.
   * @param value - the value to set
   * @returns {this}
   */
  setExtraDetails(value: string): this {
    this.healthcareService.extraDetails = value;
    return this;
  }

  /**
   * @description Sets the photo value
   * @description If there is a photo/symbol associated with this HealthcareService, it may be included here to facilitate quick identification of the service in a list.
   * @param value - the value to set
   * @returns {this}
   */
  setPhoto(value: IAttachment): this {
    this.healthcareService.photo = value;
    return this;
  }

  /**
   * @description Adds a value to the telecom array
   * @description List of contacts related to this specific healthcare service.
   * @param value - the value to add
   * @returns {this}
   */
  addTelecom(value: IContactPoint): this {
    this.healthcareService.telecom = this.healthcareService.telecom || [];
    this.healthcareService.telecom.push(value);
    return this;
  }
  /**
   * @description Adds a value to the coverageArea array
   * @description The location(s) that this service is available to (not where the service is provided).
   * @param value - the value to add
   * @returns {this}
   */
  addCoverageArea(value: IReference): this {
    this.healthcareService.coverageArea = this.healthcareService.coverageArea || [];
    this.healthcareService.coverageArea.push(value);
    return this;
  }
  /**
   * @description Adds a value to the serviceProvisionCode array
   * @description The code(s) that detail the conditions under which the healthcare service is available/offered.
   * @param value - the value to add
   * @returns {this}
   */
  addServiceProvisionCode(value: ICodeableConcept): this {
    this.healthcareService.serviceProvisionCode = this.healthcareService.serviceProvisionCode || [];
    this.healthcareService.serviceProvisionCode.push(value);
    return this;
  }
  /**
   * @description Adds a value to the eligibility array
   * @description Does this service have specific eligibility requirements that need to be met in order to use the service?
   * @param value - the value to add
   * @returns {this}
   */
  addEligibility(value: IHealthcareServiceEligibility): this {
    this.healthcareService.eligibility = this.healthcareService.eligibility || [];
    this.healthcareService.eligibility.push(value);
    return this;
  }
  /**
   * @description Adds a value to the program array
   * @description Programs that this service is applicable to.
   * @param value - the value to add
   * @returns {this}
   */
  addProgram(value: ICodeableConcept): this {
    this.healthcareService.program = this.healthcareService.program || [];
    this.healthcareService.program.push(value);
    return this;
  }
  /**
   * @description Adds a value to the characteristic array
   * @description Collection of characteristics (attributes).
   * @param value - the value to add
   * @returns {this}
   */
  addCharacteristic(value: ICodeableConcept): this {
    this.healthcareService.characteristic = this.healthcareService.characteristic || [];
    this.healthcareService.characteristic.push(value);
    return this;
  }
  /**
   * @description Adds a value to the communication array
   * @description Some services are specifically made available in multiple languages, this property permits a directory to declare the languages this is offered in. Typically this is only provided where a service operates in communities with mixed languages used.
   * @param value - the value to add
   * @returns {this}
   */
  addCommunication(value: ICodeableConcept): this {
    this.healthcareService.communication = this.healthcareService.communication || [];
    this.healthcareService.communication.push(value);
    return this;
  }
  /**
   * @description Adds a value to the referralMethod array
   * @description Ways that the service accepts referrals, if this is not provided then it is implied that no referral is required.
   * @param value - the value to add
   * @returns {this}
   */
  addReferralMethod(value: ICodeableConcept): this {
    this.healthcareService.referralMethod = this.healthcareService.referralMethod || [];
    this.healthcareService.referralMethod.push(value);
    return this;
  }
  /**
   * @description Sets the appointmentRequired value
   * @description Indicates whether or not a prospective consumer will require an appointment for a particular service at a site to be provided by the Organization. Indicates if an appointment is required for access to this service.
   * @param value - the value to set
   * @returns {this}
   */
  setAppointmentRequired(value: boolean): this {
    this.healthcareService.appointmentRequired = value;
    return this;
  }

  /**
   * @description Adds a value to the availableTime array
   * @description A collection of times that the Service Site is available.
   * @param value - the value to add
   * @returns {this}
   */
  addAvailableTime(value: IHealthcareServiceAvailableTime): this {
    this.healthcareService.availableTime = this.healthcareService.availableTime || [];
    this.healthcareService.availableTime.push(value);
    return this;
  }
  /**
   * @description Adds a value to the notAvailable array
   * @description The HealthcareService is not available during this period of time due to the provided reason.
   * @param value - the value to add
   * @returns {this}
   */
  addNotAvailable(value: IHealthcareServiceNotAvailable): this {
    this.healthcareService.notAvailable = this.healthcareService.notAvailable || [];
    this.healthcareService.notAvailable.push(value);
    return this;
  }
  /**
   * @description Sets the availabilityExceptions value
   * @description A description of site availability exceptions, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as details in the available Times and not available Times.
   * @param value - the value to set
   * @returns {this}
   */
  setAvailabilityExceptions(value: string): this {
    this.healthcareService.availabilityExceptions = value;
    return this;
  }

  /**
   * @description Adds a value to the endpoint array
   * @description Technical endpoints providing access to services operated for the specific healthcare services defined at this resource.
   * @param value - the value to add
   * @returns {this}
   */
  addEndpoint(value: IReference): this {
    this.healthcareService.endpoint = this.healthcareService.endpoint || [];
    this.healthcareService.endpoint.push(value);
    return this;
  }
}
