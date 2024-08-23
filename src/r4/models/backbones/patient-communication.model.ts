import { ICodeableConcept, IElement, IPatientCommunication } from 'fhirtypes/dist/r4';
import { PatientCommunicationBuilder } from '../../builders';
import { ConformanceValidator } from '../../../core/r4/validators/base';
import { BackboneElement } from '../base/backbone-element.model';
import { IValidatable } from '../base/validatable.interface';
import { ISerializable } from '../base/serializable.interface';

export class PatientCommunication
  extends BackboneElement
  implements IPatientCommunication, IValidatable, ISerializable
{
  // PatientCommunication attributes
  language: ICodeableConcept;
  preferred?: boolean;
  _preferred?: IElement;

  toJson() {
    return JSON.parse(JSON.stringify(this));
  }

  serialize(): string {
    return JSON.stringify(this.toJson());
  }

  toPrettyString(): string {
    return `PatientCommunication${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `PatientCommunication${JSON.stringify(this.toJson())}`;
  }

  validate() {
    return ConformanceValidator(this, 'PatientCommunication');
  }

  protected builderInstance(): PatientCommunicationBuilder {
    return new PatientCommunicationBuilder();
  }

  constructor(args?: IPatientCommunication) {
    super();
    Object.assign(this, args);
  }
}
