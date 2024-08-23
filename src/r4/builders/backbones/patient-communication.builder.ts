import { ICodeableConcept, IElement, IPatientCommunication } from 'fhirtypes/dist/r4';
import { PatientCommunication } from '../../models';
import { IBuildable } from '../base/buildable.interface';
import { UnderscoreKeys } from '../base/resource-type-map.interface';
import { BackboneBuilder } from '../base/backbone.builder';

type PrimitiveExtensionFields = keyof Pick<IPatientCommunication, UnderscoreKeys<IPatientCommunication>>;

interface IPatientCommunicationBuilder extends IBuildable<PatientCommunication> {
  // PatientCommunication properties
  setLanguage(language: ICodeableConcept): this;
  setPreferred(preferred: boolean): this;
}

export class PatientCommunicationBuilder extends BackboneBuilder implements IPatientCommunicationBuilder {
  private readonly patientCommunication: PatientCommunication;

  constructor() {
    super();
    this.patientCommunication = new PatientCommunication();
  }

  addPrimitiveExtension(param: PrimitiveExtensionFields, extension: IElement): this {
    this.patientCommunication[`${param}`] = extension;
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
    return Object.assign(this.patientCommunication, super.build());
  }
}
