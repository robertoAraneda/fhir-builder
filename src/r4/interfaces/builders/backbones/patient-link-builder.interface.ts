import { IElement, IReference, LinkTypeType } from 'fhirtypes/dist/r4';
import { IBackboneElementBuilder, IBuildable } from '../base';
import { PatientLink } from '../../../models';
import { IElementBuilder } from '../datatypes';

export interface IPatientLinkBuilder extends IBuildable<PatientLink>, IBackboneElementBuilder, IElementBuilder {
  addParamExtension(param: 'type', extension: IElement): this;
  setOther(other: IReference): this;
  setType(type: LinkTypeType): this;
}
