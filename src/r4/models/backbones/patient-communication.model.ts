import { BackboneElement } from '../base/backbone-element.model';
import { ICodeableConcept, IElement, IPatientCommunication } from 'fhirtypes/dist/r4';
import { PatientCommunicationBuilder } from '../../builders/backbones/patient-communication.builder';
import { IGenericObject } from '../../interfaces';
import { ValReturnType } from '../../validators/base/datatype.validator';
import { PatientCommunicationValidator } from '../../validators/backbones/patient-communication.validator';

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

  private isValid(args: IGenericObject): ValReturnType {
    try {
      PatientCommunicationValidator(args as IPatientCommunication | IPatientCommunication[]);
      return { error: null };
    } catch (e: any) {
      return { error: e.message };
    }
  }

  validate(): ValReturnType {
    const { error } = this.isValid(this);
    return { error };
  }

  static builder(): PatientCommunicationBuilder {
    return new PatientCommunicationBuilder();
  }

  constructor(args: IPatientCommunication) {
    super();
    Object.assign(this, args);
  }
}
