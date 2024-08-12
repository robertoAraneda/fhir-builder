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
  IServiceRequest,
  ITiming,
  RequestIntentType,
  RequestPriorityType,
  RequestStatusType,
} from 'fhirtypes/dist/r4';
import { DomainResource } from './domain-resource.model';
import { ConformanceValidator } from '../../../core/r4/validators/base';
import { ServiceRequestBuilder } from '../../builders/resources/service-request.builder';

export class ServiceRequest extends DomainResource implements IServiceRequest {
  resourceType = 'ServiceRequest' as const;
  identifier?: IIdentifier[];
  instantiatesCanonical?: string[];
  instantiatesUri?: string[];
  basedOn?: IReference[];
  replaces?: IReference[];
  requisition?: IIdentifier;
  status: RequestStatusType;
  intent: RequestIntentType;
  category?: ICodeableConcept[];
  priority?: RequestPriorityType;
  doNotPerform?: boolean;
  code?: ICodeableConcept;
  orderDetail?: ICodeableConcept[];
  quantityQuantity?: IQuantity;
  quantityRatio?: IRatio;
  quantityRange?: IRange;
  subject: IReference;
  encounter?: IReference;
  occurrenceDateTime?: string;
  occurrencePeriod?: IPeriod;
  occurrenceTiming?: ITiming;
  asNeededBoolean?: boolean;
  asNeededCodeableConcept?: ICodeableConcept;
  authoredOn?: string;
  requester?: IReference;
  performerType?: ICodeableConcept;
  performer?: IReference[];
  locationCode?: ICodeableConcept[];
  locationReference?: IReference[];
  reasonCode?: ICodeableConcept[];
  reasonReference?: IReference[];
  insurance?: IReference[];
  supportingInfo?: IReference[];
  specimen?: IReference[];
  bodySite?: ICodeableConcept[];
  note?: IAnnotation[];
  patientInstruction?: string;
  relevantHistory?: IReference[];
  _instantiatesCanonical?: IElement[];
  _instantiatesUri?: IElement[];
  _status?: IElement;
  _intent?: IElement;
  _priority?: IElement;
  _patientInstruction?: IElement;
  _authoredOn?: IElement;
  _doNotPerform?: IElement;

  toJson(): Record<keyof IServiceRequest, any> {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `ServiceRequest${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `ServiceRequest${JSON.stringify(this.toJson())}`;
  }

  validate(): { error: string | null } {
    return ConformanceValidator(this, 'ServiceRequest');
  }

  static builder(): ServiceRequestBuilder {
    return new ServiceRequestBuilder();
  }

  static builderFromJson(data: unknown): ServiceRequestBuilder {
    const serviceRequest = data as ServiceRequest;
    const serviceRequestBuilder = new ServiceRequestBuilder();
    return serviceRequestBuilder.fromJSON(serviceRequest);
  }

  constructor(args?: IServiceRequest) {
    super();
    if (args) {
      this.id = args.id;
      this.identifier = args.identifier;
      this.instantiatesCanonical = args.instantiatesCanonical;
      this.instantiatesUri = args.instantiatesUri;
      this.basedOn = args.basedOn;
      this.replaces = args.replaces;
      this.requisition = args.requisition;
      this.status = args.status;
      this.intent = args.intent;
      this.category = args.category;
      this.priority = args.priority;
      this.doNotPerform = args.doNotPerform;
      this.code = args.code;
      this.orderDetail = args.orderDetail;
      this.quantityQuantity = args.quantityQuantity;
      this.quantityRatio = args.quantityRatio;
      this.quantityRange = args.quantityRange;
      this.subject = args.subject;
      this.encounter = args.encounter;
      this.occurrenceDateTime = args.occurrenceDateTime;
      this.occurrencePeriod = args.occurrencePeriod;
      this.occurrenceTiming = args.occurrenceTiming;
      this.asNeededBoolean = args.asNeededBoolean;
      this.asNeededCodeableConcept = args.asNeededCodeableConcept;
      this.authoredOn = args.authoredOn;
      this.requester = args.requester;
      this.performerType = args.performerType;
      this.performer = args.performer;
      this.locationCode = args.locationCode;
      this.locationReference = args.locationReference;
      this.reasonCode = args.reasonCode;
      this.reasonReference = args.reasonReference;
      this.insurance = args.insurance;
      this.supportingInfo = args.supportingInfo;
      this.specimen = args.specimen;
      this.bodySite = args.bodySite;
      this.note = args.note;
      this.patientInstruction = args.patientInstruction;
      this.relevantHistory = args.relevantHistory;
      this._instantiatesCanonical = args._instantiatesCanonical;
      this._instantiatesUri = args._instantiatesUri;
      this._status = args._status;
      this._intent = args._intent;
      this._priority = args._priority;
      this._patientInstruction = args._patientInstruction;
      this._authoredOn = args._authoredOn;
      this._doNotPerform = args._doNotPerform;
    }
  }
}
