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
import { DomainResource } from '../base/domain-resource.model';
import { ConformanceValidator } from '../../../core/r4/validators/base';
import { ServiceRequestBuilder } from '../../builders';
import { IValidatable } from '../base/validatable.interface';
import { ISerializable } from '../base/serializable.interface';

export class ServiceRequest extends DomainResource implements IServiceRequest, IValidatable, ISerializable {
  protected builderInstance(): ServiceRequestBuilder {
    return new ServiceRequestBuilder();
  }

  serialize(): string {
    return JSON.stringify(this.toJson());
  }
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

  toJson() {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `ServiceRequest${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `ServiceRequest${JSON.stringify(this.toJson())}`;
  }

  validate() {
    return ConformanceValidator(this, 'ServiceRequest');
  }

  static builderFromJson(data: unknown): ServiceRequestBuilder {
    const serviceRequest = data as ServiceRequest;
    const serviceRequestBuilder = new ServiceRequestBuilder();
    return serviceRequestBuilder.fromJSON(serviceRequest);
  }

  constructor(args?: IServiceRequest) {
    super();
    if (args) Object.assign(this, args);
  }
}
