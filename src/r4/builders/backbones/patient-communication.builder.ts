import { ICodeableConcept, IElement } from 'fhirtypes/dist/r4';
import { BackboneElementBuilder } from '../../../core/r4/builders/base';
import { PatientCommunication } from '../../models';
import { IBuildable } from '../../../core/r4/interfaces';
import { IBackboneElementBuilder } from '../../../core/r4/interfaces/backbone-element-builder.interface';
import { IElementBuilder } from '../../../core/r4/interfaces/element-builder.interface';

interface IPatientCommunicationBuilder
  extends IBuildable<PatientCommunication>,
    IBackboneElementBuilder,
    IElementBuilder {
  addParamExtension(param: 'preferred', extension: IElement): this;
  setLanguage(language: ICodeableConcept): this;
  setPreferred(preferred: boolean): this;
}

export class PatientCommunicationBuilder extends BackboneElementBuilder implements IPatientCommunicationBuilder {
  private readonly patientCommunication: PatientCommunication;

  constructor() {
    super();
    this.patientCommunication = new PatientCommunication();
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
    return this.patientCommunication;
  }
}
