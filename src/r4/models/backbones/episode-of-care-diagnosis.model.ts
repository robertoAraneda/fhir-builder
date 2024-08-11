import { Element } from '../datatypes/element.model';
import { ICodeableConcept, IEpisodeOfCareDiagnosis, IReference } from 'fhirtypes/dist/r4';
import { ConformanceValidator } from '../../../core/r4/validators/base';
import { PatientBuilder } from '../../builders';

export class EpisodeOfCareDiagnosis extends Element implements IEpisodeOfCareDiagnosis {
  condition: IReference;
  role?: ICodeableConcept;
  rank?: number;

  toJson(): unknown {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `EpisodeOfCareDiagnosis${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `EpisodeOfCareDiagnosis${JSON.stringify(this.toJson())}`;
  }

  validate(): { error: string | null } {
    const { error } = ConformanceValidator(this, 'EpisodeOfCareDiagnosis');
    return { error };
  }

  static builder(): PatientBuilder {
    return new PatientBuilder();
  }

  constructor(args?: IEpisodeOfCareDiagnosis) {
    super();
    if (args) Object.assign(this, args);
  }
}
