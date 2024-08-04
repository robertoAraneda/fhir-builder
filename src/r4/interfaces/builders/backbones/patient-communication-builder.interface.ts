import { PatientCommunicationBuilder } from '../../../builders/backbones/patient-communication.builder';
import { IBuildable } from '../base/buildable.interface';
import { PatientCommunication } from '../../../models/backbones/patient-communication.model';
import { IBackboneElementBuilder } from '../base/backbone-element-builder.interface';
import { IElementBuilder } from '../datatypes/element-builder.interface';
import { ICodeableConcept, IElement } from 'fhirtypes/dist/r4';

export interface IPatientCommunicationBuilder
  extends IBuildable<PatientCommunication>,
    IBackboneElementBuilder,
    IElementBuilder {
  addParamExtension(param: 'preferred', extension: IElement): this;
  setLanguage(language: ICodeableConcept): this;
  setPreferred(preferred: boolean): this;
}
