import { ICodeableConcept, IElement, IExtension } from 'fhirtypes/dist/r4';
import { PatientCommunication } from '../../models';

interface IPatientCommunicationBuilder {
  // Element properties
  setId(id: string): this;
  addExtension(extension: IExtension): this;
  setMultipleExtension(extension: IExtension[]): this;

  // BackboneElement properties
  addModifierExtension(modifierExtension: IExtension): this;
  setMultipleModifierExtension(modifierExtension: IExtension[]): this;

  // PatientCommunication properties
  addParamExtension(param: 'preferred', extension: IElement): this;
  setLanguage(language: ICodeableConcept): this;
  setPreferred(preferred: boolean): this;
}

export class PatientCommunicationBuilder implements IPatientCommunicationBuilder {
  private readonly patientCommunication: PatientCommunication;

  constructor() {
    this.patientCommunication = new PatientCommunication();
  }

  setId(id: string): this {
    this.patientCommunication.id = id;
    return this;
  }

  setMultipleExtension(extension: IExtension[]): this {
    this.patientCommunication.extension = extension;
    return this;
  }

  addExtension(extension: IExtension): this {
    this.patientCommunication.extension = this.patientCommunication.extension || [];
    this.patientCommunication.extension.push(extension);
    return this;
  }

  setMultipleModifierExtension(modifierExtension: IExtension[]): this {
    this.patientCommunication.modifierExtension = modifierExtension;
    return this;
  }

  addModifierExtension(modifierExtension: IExtension): this {
    this.patientCommunication.modifierExtension = this.patientCommunication.modifierExtension || [];
    this.patientCommunication.modifierExtension.push(modifierExtension);
    return this;
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
    return this.patientCommunication;
  }
}
