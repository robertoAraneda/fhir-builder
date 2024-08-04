import { ICodeableConcept, IElement } from 'fhirtypes/dist/r4';
import { IBackboneElementBuilder, IBuildable } from '../base';
import { IElementBuilder } from '../datatypes';
import { PatientCommunication } from '../../../models';

export interface IPatientCommunicationBuilder
  extends IBuildable<PatientCommunication>,
    IBackboneElementBuilder,
    IElementBuilder {
  addParamExtension(param: 'preferred', extension: IElement): this;
  setLanguage(language: ICodeableConcept): this;
  setPreferred(preferred: boolean): this;
}
