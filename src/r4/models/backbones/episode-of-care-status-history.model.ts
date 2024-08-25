import { EpisodeOfCareStatusHistoryCodeType, IElement, IEpisodeOfCareStatusHistory, IPeriod } from 'fhirtypes/dist/r4';
import { ConformanceValidator } from '../../../core/r4/validators/base';
import { BackboneElement } from '../base/backbone-element.model';
import { IValidatable } from '../base/validatable.interface';
import { ISerializable } from '../base/serializable.interface';

export class EpisodeOfCareStatusHistory
  extends BackboneElement
  implements IEpisodeOfCareStatusHistory, IValidatable, ISerializable
{
  status: EpisodeOfCareStatusHistoryCodeType;
  period: IPeriod;

  _status: IElement;

  toJson() {
    return JSON.parse(JSON.stringify(this));
  }

  serialize(): string {
    return JSON.stringify(this.toJson());
  }

  toPrettyString(): string {
    return `EpisodeOfCareStatusHistory${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `EpisodeOfCareStatusHistory${JSON.stringify(this.toJson())}`;
  }

  validate() {
    return ConformanceValidator(this, 'EpisodeOfCareStatusHistory');
  }

  constructor(args?: IEpisodeOfCareStatusHistory) {
    super();
    if (args) Object.assign(this, args);
  }

  protected builderInstance(): any {
    throw new Error('Method not implemented.');
  }
}
