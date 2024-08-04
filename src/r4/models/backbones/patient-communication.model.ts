import { ICodeableConcept, IElement, IPatientCommunication } from 'fhirtypes/dist/r4';
import { BackboneElement } from '../base';
import { conformanceValidation } from '../../validators/base/object.validator';
import { ValReturnType } from '../../validators/base/datatype.validator';
import { PatientCommunicationBuilder } from '../../builders';

export class PatientCommunication extends BackboneElement implements IPatientCommunication {
  // PatientCommunication attributes
  language: ICodeableConcept;
  preferred?: boolean;
  _preferred?: IElement;

  toJson(): PatientCommunication {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `PatientCommunication${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `PatientCommunication${JSON.stringify(this.toJson())}`;
  }

  validate(): ValReturnType {
    const { error } = conformanceValidation(this, 'PatientCommunication');
    return { error };
  }

  static builder(): PatientCommunicationBuilder {
    return new PatientCommunicationBuilder();
  }

  constructor(args?: IPatientCommunication) {
    super();
    Object.assign(this, args);
  }
}
