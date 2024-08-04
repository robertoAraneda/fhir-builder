import { ICodeableConcept, IElement, IPatientCommunication } from 'fhirtypes/dist/r4';
import { BackboneElementBuilder } from '../base';
import { IPatientCommunicationBuilder } from '../../interfaces';
import { PatientCommunication } from '../../models';

export class PatientCommunicationBuilder extends BackboneElementBuilder implements IPatientCommunicationBuilder {
  private readonly patientCommunication: IPatientCommunication;

  constructor() {
    super();
    this.patientCommunication = {} as IPatientCommunication;
  }

  addParamExtension(param: 'preferred', extension: IElement): this {
    this.patientCommunication[`_${param}`] = extension;
    return this;
  }

  setLanguage(language: ICodeableConcept): this {
    this.patientCommunication.language = language;
    return this;
  }

  setPreferred(preferred: boolean): this {
    this.patientCommunication.preferred = preferred;
    return this;
  }

  build(): PatientCommunication {
    Object.assign(this.patientCommunication, { ...super.entity() });
    return new PatientCommunication(this.patientCommunication);
  }
}
