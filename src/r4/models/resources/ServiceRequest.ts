import {
  IIdentifier,
  IElement,
  IReference,
  ICodeableConcept,
  IQuantity,
  IRatio,
  IRange,
  IPeriod,
  ITiming,
  IAnnotation,
  RequestStatusType,
  RequestIntentType,
  RequestPriorityType,
} from 'fhirtypes/dist/r4';
import { IServiceRequest, IOperationOutcome } from 'fhirtypes/dist/r4';
import { DomainResource, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for ServiceRequest Resource
 * @property {string} resourceType
 * @property {IIdentifier[]} identifier
 * @property {string[]} instantiatesCanonical
 * @property {string[]} instantiatesUri
 * @property {IElement[]} _instantiatesUri
 * @property {IReference[]} basedOn
 * @property {IReference[]} replaces
 * @property {IIdentifier} requisition
 * @property {RequestStatusType} status
 * @property {IElement} _status
 * @property {RequestIntentType} intent
 * @property {IElement} _intent
 * @property {ICodeableConcept[]} category
 * @property {RequestPriorityType} priority
 * @property {IElement} _priority
 * @property {boolean} doNotPerform
 * @property {IElement} _doNotPerform
 * @property {ICodeableConcept} code
 * @property {ICodeableConcept[]} orderDetail
 * @property {IQuantity} quantityQuantity
 * @property {IRatio} quantityRatio
 * @property {IRange} quantityRange
 * @property {IReference} subject
 * @property {IReference} encounter
 * @property {string} occurrenceDateTime
 * @property {IElement} _occurrenceDateTime
 * @property {IPeriod} occurrencePeriod
 * @property {ITiming} occurrenceTiming
 * @property {boolean} asNeededBoolean
 * @property {IElement} _asNeededBoolean
 * @property {ICodeableConcept} asNeededCodeableConcept
 * @property {string} authoredOn
 * @property {IElement} _authoredOn
 * @property {IReference} requester
 * @property {ICodeableConcept} performerType
 * @property {IReference[]} performer
 * @property {ICodeableConcept[]} locationCode
 * @property {IReference[]} locationReference
 * @property {ICodeableConcept[]} reasonCode
 * @property {IReference[]} reasonReference
 * @property {IReference[]} insurance
 * @property {IReference[]} supportingInfo
 * @property {IReference[]} specimen
 * @property {ICodeableConcept[]} bodySite
 * @property {IAnnotation[]} note
 * @property {string} patientInstruction
 * @property {IElement} _patientInstruction
 * @property {IReference[]} relevantHistory
 * @author Roberto Araneda Espinoza
 */
export class ServiceRequest extends DomainResource implements IServiceRequest, IValidatable, ISerializable {
  /**
   * @description The type of resource
   */
  resourceType? = 'ServiceRequest';

  /**
   * @description Identifiers assigned to this order instance by the orderer and/or the receiver and/or order fulfiller.
   */
  identifier?: IIdentifier[];

  /**
   * @description The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this ServiceRequest.
   */
  instantiatesCanonical?: string[];

  /**
   * @description The URL pointing to an externally maintained protocol, guideline, orderset or other definition that is adhered to in whole or in part by this ServiceRequest.
   */
  instantiatesUri?: string[];

  /**
   * @description Extensions for instantiatesUri
   */
  _instantiatesUri?: IElement[];

  /**
   * @description Plan/proposal/order fulfilled by this request.
   */
  basedOn?: IReference[];

  /**
   * @description The request takes the place of the referenced completed or terminated request(s).
   */
  replaces?: IReference[];

  /**
   * @description A shared identifier common to all service requests that were authorized more or less simultaneously by a single author, representing the composite or group identifier.
   */
  requisition?: IIdentifier;

  /**
   * @description The status of the order.
   */
  status: RequestStatusType;

  /**
   * @description Extensions for status
   */
  _status?: IElement;

  /**
   * @description Whether the request is a proposal, plan, an original order or a reflex order.
   */
  intent: RequestIntentType;

  /**
   * @description Extensions for intent
   */
  _intent?: IElement;

  /**
   * @description A code that classifies the service for searching, sorting and display purposes (e.g. "Surgical Procedure").
   */
  category?: ICodeableConcept[];

  /**
   * @description Indicates how quickly the ServiceRequest should be addressed with respect to other requests.
   */
  priority?: RequestPriorityType;

  /**
   * @description Extensions for priority
   */
  _priority?: IElement;

  /**
   * @description Set this to true if the record is saying that the service/procedure should NOT be performed.
   */
  doNotPerform?: boolean;

  /**
   * @description Extensions for doNotPerform
   */
  _doNotPerform?: IElement;

  /**
   * @description A code that identifies a particular service (i.e., procedure, diagnostic investigation, or panel of investigations) that have been requested.
   */
  code?: ICodeableConcept;

  /**
   * @description Additional details and instructions about the how the services are to be delivered.   For example, and order for a urinary catheter may have an order detail for an external or indwelling catheter, or an order for a bandage may require additional instructions specifying how the bandage should be applied.
   */
  orderDetail?: ICodeableConcept[];

  /**
   * @description An amount of service being requested which can be a quantity ( for example $1,500 home modification), a ratio ( for example, 20 half day visits per month), or a range (2.0 to 1.8 Gy per fraction).
   */
  quantityQuantity?: IQuantity;

  /**
   * @description An amount of service being requested which can be a quantity ( for example $1,500 home modification), a ratio ( for example, 20 half day visits per month), or a range (2.0 to 1.8 Gy per fraction).
   */
  quantityRatio?: IRatio;

  /**
   * @description An amount of service being requested which can be a quantity ( for example $1,500 home modification), a ratio ( for example, 20 half day visits per month), or a range (2.0 to 1.8 Gy per fraction).
   */
  quantityRange?: IRange;

  /**
   * @description On whom or what the service is to be performed. This is usually a human patient, but can also be requested on animals, groups of humans or animals, devices such as dialysis machines, or even locations (typically for environmental scans).
   */
  subject: IReference;

  /**
   * @description An encounter that provides additional information about the healthcare context in which this request is made.
   */
  encounter?: IReference;

  /**
   * @description The date/time at which the requested service should occur.
   */
  occurrenceDateTime?: string;

  /**
   * @description Extensions for occurrenceDateTime
   */
  _occurrenceDateTime?: IElement;

  /**
   * @description The date/time at which the requested service should occur.
   */
  occurrencePeriod?: IPeriod;

  /**
   * @description The date/time at which the requested service should occur.
   */
  occurrenceTiming?: ITiming;

  /**
   * @description If a CodeableConcept is present, it indicates the pre-condition for performing the service.  For example "pain", "on flare-up", etc.
   */
  asNeededBoolean?: boolean;

  /**
   * @description Extensions for asNeededBoolean
   */
  _asNeededBoolean?: IElement;

  /**
   * @description If a CodeableConcept is present, it indicates the pre-condition for performing the service.  For example "pain", "on flare-up", etc.
   */
  asNeededCodeableConcept?: ICodeableConcept;

  /**
   * @description When the request transitioned to being actionable.
   */
  authoredOn?: string;

  /**
   * @description Extensions for authoredOn
   */
  _authoredOn?: IElement;

  /**
   * @description The individual who initiated the request and has responsibility for its activation.
   */
  requester?: IReference;

  /**
   * @description Desired type of performer for doing the requested service.
   */
  performerType?: ICodeableConcept;

  /**
   * @description The desired performer for doing the requested service.  For example, the surgeon, dermatopathologist, endoscopist, etc.
   */
  performer?: IReference[];

  /**
   * @description The preferred location(s) where the procedure should actually happen in coded or free text form. E.g. at home or nursing day care center.
   */
  locationCode?: ICodeableConcept[];

  /**
   * @description A reference to the the preferred location(s) where the procedure should actually happen. E.g. at home or nursing day care center.
   */
  locationReference?: IReference[];

  /**
   * @description An explanation or justification for why this service is being requested in coded or textual form.   This is often for billing purposes.  May relate to the resources referred to in `supportingInfo`.
   */
  reasonCode?: ICodeableConcept[];

  /**
   * @description Indicates another resource that provides a justification for why this service is being requested.   May relate to the resources referred to in `supportingInfo`.
   */
  reasonReference?: IReference[];

  /**
   * @description Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be needed for delivering the requested service.
   */
  insurance?: IReference[];

  /**
   * @description Additional clinical information about the patient or specimen that may influence the services or their interpretations.     This information includes diagnosis, clinical findings and other observations.  In laboratory ordering these are typically referred to as "ask at order entry questions (AOEs)".  This includes observations explicitly requested by the producer (filler) to provide context or supporting information needed to complete the order. For example,  reporting the amount of inspired oxygen for blood gas measurements.
   */
  supportingInfo?: IReference[];

  /**
   * @description One or more specimens that the laboratory procedure will use.
   */
  specimen?: IReference[];

  /**
   * @description Anatomic location where the procedure should be performed. This is the target site.
   */
  bodySite?: ICodeableConcept[];

  /**
   * @description Any other notes and comments made about the service request. For example, internal billing notes.
   */
  note?: IAnnotation[];

  /**
   * @description Instructions in terms that are understood by the patient or consumer.
   */
  patientInstruction?: string;

  /**
   * @description Extensions for patientInstruction
   */
  _patientInstruction?: IElement;

  /**
   * @description Key events in the history of the request.
   */
  relevantHistory?: IReference[];

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
    return `ServiceRequest${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `ServiceRequest${JSON.stringify(this.toJson(), null, 2)}`;
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
    return ConformanceValidator('ServiceRequest', this);
  }

  constructor(args?: IServiceRequest) {
    super();
    if (args) Object.assign(this, args);
  }
}
