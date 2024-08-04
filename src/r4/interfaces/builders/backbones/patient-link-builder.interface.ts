import { IBuildable } from '../base/buildable.interface';
import { PatientLink } from '../../../models/backbones/patient-link.model';
import { IBackboneElementBuilder } from '../base/backbone-element-builder.interface';
import { IElementBuilder } from '../datatypes/element-builder.interface';
import { IElement, IReference, LinkTypeType } from 'fhirtypes/dist/r4';

export interface IPatientLinkBuilder extends IBuildable<PatientLink>, IBackboneElementBuilder, IElementBuilder {
  addParamExtension(param: 'type', extension: IElement): this;
  setOther(other: IReference): this;
  setType(type: LinkTypeType): this;
}
