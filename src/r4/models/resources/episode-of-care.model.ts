import {
  EpisodeOfCareStatusType,
  ICodeableConcept,
  IElement,
  IEpisodeOfCare,
  IEpisodeOfCareDiagnosis,
  IEpisodeOfCareStatusHistory,
  IIdentifier,
  IPeriod,
  IReference,
} from 'fhirtypes/dist/r4';
import { DomainResource } from '../base/domain-resource.model';
import { ConformanceValidator } from '../../../core/r4/validators/base';
import { IValidatable } from '../base/validatable.interface';
import { ISerializable } from '../base/serializable.interface';

export class EpisodeOfCare extends DomainResource implements IEpisodeOfCare, IValidatable, ISerializable {
  resourceType? = 'EpisodeOfCare' as const;
  identifier?: IIdentifier[];
  status: EpisodeOfCareStatusType;
  statusHistory?: IEpisodeOfCareStatusHistory[];
  type?: ICodeableConcept[];
  diagnosis?: IEpisodeOfCareDiagnosis[];
  patient: IReference;
  managingOrganization?: IReference;
  period?: IPeriod;
  referralRequest?: IReference[];
  careManager?: IReference;
  team?: IReference[];
  account?: IReference[];

  // extensions
  _status: IElement;

  toJson() {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `EpisodeOfCare${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `EpisodeOfCare${JSON.stringify(this.toJson())}`;
  }

  validate() {
    return ConformanceValidator(this, 'EpisodeOfCare');
  }

  constructor(args?: IEpisodeOfCare) {
    super();
    if (args) Object.assign(this, args);
  }

  serialize(): string {
    return JSON.stringify(this.toJson());
  }
}
