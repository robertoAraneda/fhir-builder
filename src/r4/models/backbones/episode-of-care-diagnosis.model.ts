import { ICodeableConcept, IElement, IEpisodeOfCareDiagnosis, IReference } from 'fhirtypes/dist/r4';
import { ConformanceValidator } from '../../../core/r4/validators/base';
import { BackboneElement } from '../base/backbone-element.model';
import { IValidatable } from '../base/validatable.interface';
import { ISerializable } from '../base/serializable.interface';

export class EpisodeOfCareDiagnosis
  extends BackboneElement
  implements IEpisodeOfCareDiagnosis, IValidatable, ISerializable
{
  condition: IReference;
  role?: ICodeableConcept;
  rank?: number;

  // TODO: review this with Interface IEpisodeOfCareDiagnosis
  _rank?: IElement;

  toJson() {
    return JSON.parse(JSON.stringify(this));
  }

  serialize(): string {
    return JSON.stringify(this.toJson());
  }

  toPrettyString(): string {
    return `EpisodeOfCareDiagnosis${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `EpisodeOfCareDiagnosis${JSON.stringify(this.toJson())}`;
  }

  validate() {
    return ConformanceValidator(this, 'EpisodeOfCareDiagnosis');
  }

  constructor(args?: IEpisodeOfCareDiagnosis) {
    super();
    if (args) Object.assign(this, args);
  }

  protected builderInstance(): any {
    throw new Error('Method not implemented.');
  }
}
