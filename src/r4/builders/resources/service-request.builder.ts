import {
  IAnnotation,
  ICodeableConcept,
  IElement,
  IIdentifier,
  IPeriod,
  IQuantity,
  IRange,
  IRatio,
  IReference,
  ITiming,
  RequestIntentType,
  RequestPriorityType,
  RequestStatusType,
} from 'fhirtypes/dist/r4';
import { IDomainResourceBuilder } from '../base/IDomainResourceBuilder';
import { DomainResourceBuilder } from '../base/DomainResourceBuilder';
import { ServiceRequest } from '../../models/resources/service-request.model';
import { IBuildable } from '../base/IBuildable';

interface IServiceRequestBuilder extends IDomainResourceBuilder, IBuildable<ServiceRequest> {
  addParamExtension<
    T extends 'instantiatesCanonical' | 'instantiatesUri' | 'doNotPerform' | 'authoredOn' | 'patientInstruction',
  >(
    param: T,
    extension: T extends 'instantiatesCanonical' | 'instantiatesUri' ? IElement[] : IElement,
  ): this;
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
  addAuthoredOn(value: string): this;
  setRequester(value: IReference): this;
  setPerformerType(value: ICodeableConcept): this;
  addPerformer(value: IReference): this;
  addLocationReference(value: IReference): this;
  addLocationCode(value: ICodeableConcept): this;
  addReasonCode(value: ICodeableConcept): this;
  addReasonReference(value: IReference): this;
  addInsurance(value: IReference): this;
  addSupportingInfo(value: IReference): this;
  addSpecimen(value: IReference): this;
  addNote(value: IAnnotation): this;
  setPatientInstruction(value: string): this;
  addRelevantHistory(value: IReference): this;
}

export class ServiceRequestBuilder extends DomainResourceBuilder implements IServiceRequestBuilder {
  private readonly serviceRequest: ServiceRequest;

  constructor() {
    super();
    this.serviceRequest = new ServiceRequest();
  }

  addParamExtension<
    T extends 'instantiatesCanonical' | 'instantiatesUri' | 'doNotPerform' | 'authoredOn' | 'patientInstruction',
  >(param: T, extension: T extends 'instantiatesCanonical' | 'instantiatesUri' ? IElement[] : IElement): this {
    const arrayParam = ['instantiatesCanonical', 'instantiatesUri'];
    if (arrayParam.includes(param)) {
      this.serviceRequest[`_${param}`] = extension as IElement[];
      return this;
    }

    const localParam = param as 'doNotPerform' | 'authoredOn' | 'patientInstruction';
    this.serviceRequest[`_${localParam}`] = extension as IElement;
    return this;
  }

  addIdentifier(value: IIdentifier): this {
    this.serviceRequest.identifier = this.serviceRequest.identifier || [];
    this.serviceRequest.identifier.push(value);
    return this;
  }

  addInstantiatesCanonical(value: string): this {
    this.serviceRequest.instantiatesCanonical = this.serviceRequest.instantiatesCanonical || [];
    this.serviceRequest.instantiatesCanonical.push(value);
    return this;
  }

  addInstantiatesUri(value: string): this {
    this.serviceRequest.instantiatesUri = this.serviceRequest.instantiatesUri || [];
    this.serviceRequest.instantiatesUri.push(value);
    return this;
  }

  addBasedOn(value: IReference): this {
    this.serviceRequest.basedOn = this.serviceRequest.basedOn || [];
    this.serviceRequest.basedOn.push(value);
    return this;
  }

  addReplaces(value: IReference): this {
    this.serviceRequest.replaces = this.serviceRequest.replaces || [];
    this.serviceRequest.replaces.push(value);
    return this;
  }

  setRequisition(value: IIdentifier): this {
    this.serviceRequest.requisition = value;
    return this;
  }

  setStatus(value: RequestStatusType): this {
    this.serviceRequest.status = value;
    return this;
  }

  setIntent(value: RequestIntentType): this {
    this.serviceRequest.intent = value;
    return this;
  }

  addCategory(value: ICodeableConcept): this {
    this.serviceRequest.category = this.serviceRequest.category || [];
    this.serviceRequest.category.push(value);
    return this;
  }

  setPriority(value: RequestPriorityType): this {
    this.serviceRequest.priority = value;
    return this;
  }

  setCode(value: ICodeableConcept): this {
    this.serviceRequest.code = value;
    return this;
  }

  addOrderDetail(value: ICodeableConcept): this {
    this.serviceRequest.orderDetail = this.serviceRequest.orderDetail || [];
    this.serviceRequest.orderDetail.push(value);
    return this;
  }

  setQuantityQuantity(value: IQuantity): this {
    this.serviceRequest.quantityQuantity = value;
    return this;
  }

  setQuantityRatio(value: IRatio): this {
    this.serviceRequest.quantityRatio = value;
    return this;
  }

  setQuantityRange(value: IRange): this {
    this.serviceRequest.quantityRange = value;
    return this;
  }

  setSubject(value: IReference): this {
    this.serviceRequest.subject = value;
    return this;
  }

  setEncounter(value: IReference): this {
    this.serviceRequest.encounter = value;
    return this;
  }

  setOccurrenceDateTime(value: string): this {
    this.serviceRequest.occurrenceDateTime = value;
    return this;
  }

  setOccurrencePeriod(value: IPeriod): this {
    this.serviceRequest.occurrencePeriod = value;
    return this;
  }

  setOccurrenceTiming(value: ITiming): this {
    this.serviceRequest.occurrenceTiming = value;
    return this;
  }

  setAsNeededBoolean(value: boolean): this {
    this.serviceRequest.asNeededBoolean = value;
    return this;
  }

  setAsNeededCodeableConcept(value: ICodeableConcept): this {
    this.serviceRequest.asNeededCodeableConcept = value;
    return this;
  }

  addAuthoredOn(value: string): this {
    this.serviceRequest.authoredOn = value;
    return this;
  }

  setRequester(value: IReference): this {
    this.serviceRequest.requester = value;
    return this;
  }

  setPerformerType(value: ICodeableConcept): this {
    this.serviceRequest.performerType = value;
    return this;
  }

  addPerformer(value: IReference): this {
    this.serviceRequest.performer = this.serviceRequest.performer || [];
    this.serviceRequest.performer.push(value);
    return this;
  }

  addLocationReference(value: IReference): this {
    this.serviceRequest.locationReference = this.serviceRequest.locationReference || [];
    this.serviceRequest.locationReference.push(value);
    return this;
  }

  addLocationCode(value: ICodeableConcept): this {
    this.serviceRequest.locationCode = this.serviceRequest.locationCode || [];
    this.serviceRequest.locationCode.push(value);
    return this;
  }

  addReasonCode(value: ICodeableConcept): this {
    this.serviceRequest.reasonCode = this.serviceRequest.reasonCode || [];
    this.serviceRequest.reasonCode.push(value);
    return this;
  }

  addReasonReference(value: IReference): this {
    this.serviceRequest.reasonReference = this.serviceRequest.reasonReference || [];
    this.serviceRequest.reasonReference.push(value);
    return this;
  }

  addInsurance(value: IReference): this {
    this.serviceRequest.insurance = this.serviceRequest.insurance || [];
    this.serviceRequest.insurance.push(value);
    return this;
  }

  addSupportingInfo(value: IReference): this {
    this.serviceRequest.supportingInfo = this.serviceRequest.supportingInfo || [];
    this.serviceRequest.supportingInfo.push(value);
    return this;
  }

  addSpecimen(value: IReference): this {
    this.serviceRequest.specimen = this.serviceRequest.specimen || [];
    this.serviceRequest.specimen.push(value);
    return this;
  }

  addNote(value: IAnnotation): this {
    this.serviceRequest.note = this.serviceRequest.note || [];
    this.serviceRequest.note.push(value);
    return this;
  }

  setPatientInstruction(value: string): this {
    this.serviceRequest.patientInstruction = value;
    return this;
  }

  addRelevantHistory(value: IReference): this {
    this.serviceRequest.relevantHistory = this.serviceRequest.relevantHistory || [];
    this.serviceRequest.relevantHistory.push(value);
    return this;
  }

  build(): ServiceRequest {
    return this.serviceRequest;
  }

  addContained(contained: any): this {
    this.serviceRequest.contained = this.serviceRequest.contained || [];
    this.serviceRequest.contained.push(contained);
    return this;
  }

  addExtension(extension: any): this {
    this.serviceRequest.extension = this.serviceRequest.extension || [];
    this.serviceRequest.extension.push(extension);
    return this;
  }

  addModifierExtension(modifierExtension: any): this {
    this.serviceRequest.modifierExtension = this.serviceRequest.modifierExtension || [];
    this.serviceRequest.modifierExtension.push(modifierExtension);
    return this;
  }

  fromJSON(json: unknown): this {
    const incomingData = typeof json === 'string' ? JSON.parse(json) : json;
    Object.assign(this.serviceRequest, incomingData);
    return this;
  }

  setImplicitRules(implicitRules: string): this {
    this.serviceRequest.implicitRules = implicitRules;
    return this;
  }

  setLanguage(language: string): this {
    this.serviceRequest.language = language;
    return this;
  }

  setMeta(meta: any): this {
    this.serviceRequest.meta = meta;
    return this;
  }

  setText(text: any): this {
    this.serviceRequest.text = text;
    return this;
  }

  setId(id: string): this {
    this.serviceRequest.id = id;
    return this;
  }
}
