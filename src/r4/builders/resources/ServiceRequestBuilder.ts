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
import { ServiceRequest } from '../../models';
import { DomainResourceBuilder, IBuildable } from '../base';
import { ExtractUnderscoreKeys, ExtractUnderscoreArrayKeys } from '../../../core/commons/utils';

// Extract the keys that start with an underscore
type PrimitiveExtensionFields = ExtractUnderscoreKeys<ServiceRequest>;

// Extract the keys that are arrays and start with an underscore
type UnderscoreArrayElements = ExtractUnderscoreArrayKeys<ServiceRequest>;
/**
 * @description Interface for chaining the building of a ServiceRequest
 * @interface IServiceRequestBuilder
 * @extends {IBuildable<ServiceRequest>}
 */
interface IServiceRequestBuilder extends IBuildable<ServiceRequest> {
  addIdentifier(value: IIdentifier): this;
  addInstantiatesCanonical(value: string): this;
  addInstantiatesUri(value: string): this;
  addBasedOn(value: IReference): this;
  addReplaces(value: IReference): this;
  setRequisition(value: IIdentifier): this;
  setStatus(value: RequestStatusType): this;
  setIntent(value: RequestIntentType): this;
  addCategory(value: ICodeableConcept): this;
  setPriority(value: RequestPriorityType): this;
  setDoNotPerform(value: boolean): this;
  setCode(value: ICodeableConcept): this;
  addOrderDetail(value: ICodeableConcept): this;
  setQuantityQuantity(value: IQuantity): this;
  setQuantityRatio(value: IRatio): this;
  setQuantityRange(value: IRange): this;
  setSubject(value: IReference): this;
  setEncounter(value: IReference): this;
  setOccurrenceDateTime(value: string): this;
  setOccurrencePeriod(value: IPeriod): this;
  setOccurrenceTiming(value: ITiming): this;
  setAsNeededBoolean(value: boolean): this;
  setAsNeededCodeableConcept(value: ICodeableConcept): this;
  setAuthoredOn(value: string): this;
  setRequester(value: IReference): this;
  setPerformerType(value: ICodeableConcept): this;
  addPerformer(value: IReference): this;
  addLocationCode(value: ICodeableConcept): this;
  addLocationReference(value: IReference): this;
  addReasonCode(value: ICodeableConcept): this;
  addReasonReference(value: IReference): this;
  addInsurance(value: IReference): this;
  addSupportingInfo(value: IReference): this;
  addSpecimen(value: IReference): this;
  addBodySite(value: ICodeableConcept): this;
  addNote(value: IAnnotation): this;
  setPatientInstruction(value: string): this;
  addRelevantHistory(value: IReference): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a ServiceRequest
 * @class ServiceRequestBuilder
 * @extends {DomainResourceBuilder}
 * @implements {IServiceRequestBuilder}
 * @author Roberto Araneda Espinoza
 */
export class ServiceRequestBuilder extends DomainResourceBuilder implements IServiceRequestBuilder {
  private readonly serviceRequest: ServiceRequest;

  constructor() {
    super();
    this.serviceRequest = new ServiceRequest();
  }

  /**
   * @description Sets the resource type to ServiceRequest
   * @param json - the json to parse
   * @returns {this}
   */
  fromJSON(json: unknown): this {
    const incomingData = typeof json === 'string' ? JSON.parse(json) : json;
    Object.assign(this.serviceRequest, incomingData);
    return this;
  }

  /**
   * @description Adds a primitive extension to the element
   * @param param - the field to add the extension to
   * @param extension - the extension to add
   * @returns {this}
   * @example addPrimitiveExtension('_value', { value: 'test' })
   */
  addPrimitiveExtension<T extends PrimitiveExtensionFields>(param: T, extension: IElement): this {
    const arrayParam = ['_instantiatesUri'];
    if (arrayParam.includes(param)) {
      this.serviceRequest[param] = this.serviceRequest[param] || [];
      (this.serviceRequest[param] as IElement[]).push(extension as IElement);

      //this.serviceRequest[param] = extension as IElement[];

      return this;
    }

    const localParam = param as Exclude<PrimitiveExtensionFields, UnderscoreArrayElements>;
    this.serviceRequest[localParam] = extension as IElement;
    return this;
  }

  /**
   * @description Builds the model
   * @returns {ServiceRequest}
   */
  build(): ServiceRequest {
    return Object.assign(this.serviceRequest, super.build());
  }

  /**
   * @description Adds a value to the identifier array
   * @description Identifiers assigned to this order instance by the orderer and/or the receiver and/or order fulfiller.
   * @param value - the value to add
   * @returns {this}
   */
  addIdentifier(value: IIdentifier): this {
    this.serviceRequest.identifier = this.serviceRequest.identifier || [];
    this.serviceRequest.identifier.push(value);
    return this;
  }
  /**
   * @description Adds a value to the instantiatesCanonical array
   * @description The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this ServiceRequest.
   * @param value - the value to add
   * @returns {this}
   */
  addInstantiatesCanonical(value: string): this {
    this.serviceRequest.instantiatesCanonical = this.serviceRequest.instantiatesCanonical || [];
    this.serviceRequest.instantiatesCanonical.push(value);
    return this;
  }
  /**
   * @description Adds a value to the instantiatesUri array
   * @description The URL pointing to an externally maintained protocol, guideline, orderset or other definition that is adhered to in whole or in part by this ServiceRequest.
   * @param value - the value to add
   * @returns {this}
   */
  addInstantiatesUri(value: string): this {
    this.serviceRequest.instantiatesUri = this.serviceRequest.instantiatesUri || [];
    this.serviceRequest.instantiatesUri.push(value);
    return this;
  }
  /**
   * @description Adds a value to the basedOn array
   * @description Plan/proposal/order fulfilled by this request.
   * @param value - the value to add
   * @returns {this}
   */
  addBasedOn(value: IReference): this {
    this.serviceRequest.basedOn = this.serviceRequest.basedOn || [];
    this.serviceRequest.basedOn.push(value);
    return this;
  }
  /**
   * @description Adds a value to the replaces array
   * @description The request takes the place of the referenced completed or terminated request(s).
   * @param value - the value to add
   * @returns {this}
   */
  addReplaces(value: IReference): this {
    this.serviceRequest.replaces = this.serviceRequest.replaces || [];
    this.serviceRequest.replaces.push(value);
    return this;
  }
  /**
   * @description Sets the requisition value
   * @description A shared identifier common to all service requests that were authorized more or less simultaneously by a single author, representing the composite or group identifier.
   * @param value - the value to set
   * @returns {this}
   */
  setRequisition(value: IIdentifier): this {
    this.serviceRequest.requisition = value;
    return this;
  }

  /**
   * @description Sets the status value
   * @description The status of the order.
   * @param value - the value to set
   * @returns {this}
   */
  setStatus(value: RequestStatusType): this {
    this.serviceRequest.status = value;
    return this;
  }

  /**
   * @description Sets the intent value
   * @description Whether the request is a proposal, plan, an original order or a reflex order.
   * @param value - the value to set
   * @returns {this}
   */
  setIntent(value: RequestIntentType): this {
    this.serviceRequest.intent = value;
    return this;
  }

  /**
   * @description Adds a value to the category array
   * @description A code that classifies the service for searching, sorting and display purposes (e.g. "Surgical Procedure").
   * @param value - the value to add
   * @returns {this}
   */
  addCategory(value: ICodeableConcept): this {
    this.serviceRequest.category = this.serviceRequest.category || [];
    this.serviceRequest.category.push(value);
    return this;
  }
  /**
   * @description Sets the priority value
   * @description Indicates how quickly the ServiceRequest should be addressed with respect to other requests.
   * @param value - the value to set
   * @returns {this}
   */
  setPriority(value: RequestPriorityType): this {
    this.serviceRequest.priority = value;
    return this;
  }

  /**
   * @description Sets the doNotPerform value
   * @description Set this to true if the record is saying that the service/procedure should NOT be performed.
   * @param value - the value to set
   * @returns {this}
   */
  setDoNotPerform(value: boolean): this {
    this.serviceRequest.doNotPerform = value;
    return this;
  }

  /**
   * @description Sets the code value
   * @description A code that identifies a particular service (i.e., procedure, diagnostic investigation, or panel of investigations) that have been requested.
   * @param value - the value to set
   * @returns {this}
   */
  setCode(value: ICodeableConcept): this {
    this.serviceRequest.code = value;
    return this;
  }

  /**
   * @description Adds a value to the orderDetail array
   * @description Additional details and instructions about the how the services are to be delivered.   For example, and order for a urinary catheter may have an order detail for an external or indwelling catheter, or an order for a bandage may require additional instructions specifying how the bandage should be applied.
   * @param value - the value to add
   * @returns {this}
   */
  addOrderDetail(value: ICodeableConcept): this {
    this.serviceRequest.orderDetail = this.serviceRequest.orderDetail || [];
    this.serviceRequest.orderDetail.push(value);
    return this;
  }
  /**
   * @description Sets the quantityQuantity value
   * @description An amount of service being requested which can be a quantity ( for example $1,500 home modification), a ratio ( for example, 20 half day visits per month), or a range (2.0 to 1.8 Gy per fraction).
   * @param value - the value to set
   * @returns {this}
   */
  setQuantityQuantity(value: IQuantity): this {
    this.serviceRequest.quantityQuantity = value;
    return this;
  }

  /**
   * @description Sets the quantityRatio value
   * @description An amount of service being requested which can be a quantity ( for example $1,500 home modification), a ratio ( for example, 20 half day visits per month), or a range (2.0 to 1.8 Gy per fraction).
   * @param value - the value to set
   * @returns {this}
   */
  setQuantityRatio(value: IRatio): this {
    this.serviceRequest.quantityRatio = value;
    return this;
  }

  /**
   * @description Sets the quantityRange value
   * @description An amount of service being requested which can be a quantity ( for example $1,500 home modification), a ratio ( for example, 20 half day visits per month), or a range (2.0 to 1.8 Gy per fraction).
   * @param value - the value to set
   * @returns {this}
   */
  setQuantityRange(value: IRange): this {
    this.serviceRequest.quantityRange = value;
    return this;
  }

  /**
   * @description Sets the subject value
   * @description On whom or what the service is to be performed. This is usually a human patient, but can also be requested on animals, groups of humans or animals, devices such as dialysis machines, or even locations (typically for environmental scans).
   * @param value - the value to set
   * @returns {this}
   */
  setSubject(value: IReference): this {
    this.serviceRequest.subject = value;
    return this;
  }

  /**
   * @description Sets the encounter value
   * @description An encounter that provides additional information about the healthcare context in which this request is made.
   * @param value - the value to set
   * @returns {this}
   */
  setEncounter(value: IReference): this {
    this.serviceRequest.encounter = value;
    return this;
  }

  /**
   * @description Sets the occurrenceDateTime value
   * @description The date/time at which the requested service should occur.
   * @param value - the value to set
   * @returns {this}
   */
  setOccurrenceDateTime(value: string): this {
    this.serviceRequest.occurrenceDateTime = value;
    return this;
  }

  /**
   * @description Sets the occurrencePeriod value
   * @description The date/time at which the requested service should occur.
   * @param value - the value to set
   * @returns {this}
   */
  setOccurrencePeriod(value: IPeriod): this {
    this.serviceRequest.occurrencePeriod = value;
    return this;
  }

  /**
   * @description Sets the occurrenceTiming value
   * @description The date/time at which the requested service should occur.
   * @param value - the value to set
   * @returns {this}
   */
  setOccurrenceTiming(value: ITiming): this {
    this.serviceRequest.occurrenceTiming = value;
    return this;
  }

  /**
   * @description Sets the asNeededBoolean value
   * @description If a CodeableConcept is present, it indicates the pre-condition for performing the service.  For example "pain", "on flare-up", etc.
   * @param value - the value to set
   * @returns {this}
   */
  setAsNeededBoolean(value: boolean): this {
    this.serviceRequest.asNeededBoolean = value;
    return this;
  }

  /**
   * @description Sets the asNeededCodeableConcept value
   * @description If a CodeableConcept is present, it indicates the pre-condition for performing the service.  For example "pain", "on flare-up", etc.
   * @param value - the value to set
   * @returns {this}
   */
  setAsNeededCodeableConcept(value: ICodeableConcept): this {
    this.serviceRequest.asNeededCodeableConcept = value;
    return this;
  }

  /**
   * @description Sets the authoredOn value
   * @description When the request transitioned to being actionable.
   * @param value - the value to set
   * @returns {this}
   */
  setAuthoredOn(value: string): this {
    this.serviceRequest.authoredOn = value;
    return this;
  }

  /**
   * @description Sets the requester value
   * @description The individual who initiated the request and has responsibility for its activation.
   * @param value - the value to set
   * @returns {this}
   */
  setRequester(value: IReference): this {
    this.serviceRequest.requester = value;
    return this;
  }

  /**
   * @description Sets the performerType value
   * @description Desired type of performer for doing the requested service.
   * @param value - the value to set
   * @returns {this}
   */
  setPerformerType(value: ICodeableConcept): this {
    this.serviceRequest.performerType = value;
    return this;
  }

  /**
   * @description Adds a value to the performer array
   * @description The desired performer for doing the requested service.  For example, the surgeon, dermatopathologist, endoscopist, etc.
   * @param value - the value to add
   * @returns {this}
   */
  addPerformer(value: IReference): this {
    this.serviceRequest.performer = this.serviceRequest.performer || [];
    this.serviceRequest.performer.push(value);
    return this;
  }
  /**
   * @description Adds a value to the locationCode array
   * @description The preferred location(s) where the procedure should actually happen in coded or free text form. E.g. at home or nursing day care center.
   * @param value - the value to add
   * @returns {this}
   */
  addLocationCode(value: ICodeableConcept): this {
    this.serviceRequest.locationCode = this.serviceRequest.locationCode || [];
    this.serviceRequest.locationCode.push(value);
    return this;
  }
  /**
   * @description Adds a value to the locationReference array
   * @description A reference to the the preferred location(s) where the procedure should actually happen. E.g. at home or nursing day care center.
   * @param value - the value to add
   * @returns {this}
   */
  addLocationReference(value: IReference): this {
    this.serviceRequest.locationReference = this.serviceRequest.locationReference || [];
    this.serviceRequest.locationReference.push(value);
    return this;
  }
  /**
   * @description Adds a value to the reasonCode array
   * @description An explanation or justification for why this service is being requested in coded or textual form.   This is often for billing purposes.  May relate to the resources referred to in `supportingInfo`.
   * @param value - the value to add
   * @returns {this}
   */
  addReasonCode(value: ICodeableConcept): this {
    this.serviceRequest.reasonCode = this.serviceRequest.reasonCode || [];
    this.serviceRequest.reasonCode.push(value);
    return this;
  }
  /**
   * @description Adds a value to the reasonReference array
   * @description Indicates another resource that provides a justification for why this service is being requested.   May relate to the resources referred to in `supportingInfo`.
   * @param value - the value to add
   * @returns {this}
   */
  addReasonReference(value: IReference): this {
    this.serviceRequest.reasonReference = this.serviceRequest.reasonReference || [];
    this.serviceRequest.reasonReference.push(value);
    return this;
  }
  /**
   * @description Adds a value to the insurance array
   * @description Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be needed for delivering the requested service.
   * @param value - the value to add
   * @returns {this}
   */
  addInsurance(value: IReference): this {
    this.serviceRequest.insurance = this.serviceRequest.insurance || [];
    this.serviceRequest.insurance.push(value);
    return this;
  }
  /**
   * @description Adds a value to the supportingInfo array
   * @description Additional clinical information about the patient or specimen that may influence the services or their interpretations.     This information includes diagnosis, clinical findings and other observations.  In laboratory ordering these are typically referred to as "ask at order entry questions (AOEs)".  This includes observations explicitly requested by the producer (filler) to provide context or supporting information needed to complete the order. For example,  reporting the amount of inspired oxygen for blood gas measurements.
   * @param value - the value to add
   * @returns {this}
   */
  addSupportingInfo(value: IReference): this {
    this.serviceRequest.supportingInfo = this.serviceRequest.supportingInfo || [];
    this.serviceRequest.supportingInfo.push(value);
    return this;
  }
  /**
   * @description Adds a value to the specimen array
   * @description One or more specimens that the laboratory procedure will use.
   * @param value - the value to add
   * @returns {this}
   */
  addSpecimen(value: IReference): this {
    this.serviceRequest.specimen = this.serviceRequest.specimen || [];
    this.serviceRequest.specimen.push(value);
    return this;
  }
  /**
   * @description Adds a value to the bodySite array
   * @description Anatomic location where the procedure should be performed. This is the target site.
   * @param value - the value to add
   * @returns {this}
   */
  addBodySite(value: ICodeableConcept): this {
    this.serviceRequest.bodySite = this.serviceRequest.bodySite || [];
    this.serviceRequest.bodySite.push(value);
    return this;
  }
  /**
   * @description Adds a value to the note array
   * @description Any other notes and comments made about the service request. For example, internal billing notes.
   * @param value - the value to add
   * @returns {this}
   */
  addNote(value: IAnnotation): this {
    this.serviceRequest.note = this.serviceRequest.note || [];
    this.serviceRequest.note.push(value);
    return this;
  }
  /**
   * @description Sets the patientInstruction value
   * @description Instructions in terms that are understood by the patient or consumer.
   * @param value - the value to set
   * @returns {this}
   */
  setPatientInstruction(value: string): this {
    this.serviceRequest.patientInstruction = value;
    return this;
  }

  /**
   * @description Adds a value to the relevantHistory array
   * @description Key events in the history of the request.
   * @param value - the value to add
   * @returns {this}
   */
  addRelevantHistory(value: IReference): this {
    this.serviceRequest.relevantHistory = this.serviceRequest.relevantHistory || [];
    this.serviceRequest.relevantHistory.push(value);
    return this;
  }
}
